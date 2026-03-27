// =====================================================
//   Universal AI Prompt Builder — script.js
// =====================================================

const promptSections = [
    {
        id: "content_type",
        title: "1. Content Type",
        options: ["Video", "Image", "Animation", "Cinematic shot"],
        prefix: "Generate a: "
    },
    {
        id: "main_character",
        title: "2. Main Character (Subject)",
        options: [
            "Human", "Animal", "Robot", "Creature", "Anthropomorphic",
            "Male", "Female", "Young", "Adult", "Old",
            "Realistic", "Cartoon", "Anime", "Hyper-realistic", "Stylized"
        ]
    },
    {
        id: "face_head",
        title: "3. Face & Head",
        options: [
            "Sharp face", "Glowing eyes", "Angry", "Happy", "Calm",
            "Aggressive", "Sad", "Long hair", "Short hair", "Scars", "Tattoos"
        ]
    },
    {
        id: "body",
        title: "4. Body",
        options: [
            "Slim", "Muscular", "Fat", "Athletic", "Bodybuilder",
            "Defined muscles", "Robotic parts", "Standing", "Heroic pose", "Relaxed"
        ]
    },
    {
        id: "clothing",
        title: "5. Clothing / Costume",
        isGrouped: true,
        groups: [
            {
                gender: "male",
                label: "👨 Male",
                categories: [
                    {
                        name: "🩲 Intimate / Underwear",
                        options: [
                            "Briefs", "Boxers", "Boxer-briefs", "Trunks", "Jockstrap",
                            "Bikini briefs", "Undershirt", "Singlet", "Vest/Genji",
                            "Thermal long johns", "Compression base layer",
                            "Fundoshi (Japan)", "Langot (India)", "Loincloth (Africa/Amazon)",
                            "Calzoncillos (Latin America)", "Under-kilt (Scotland)"
                        ]
                    },
                    {
                        name: "😴 Sleepwear / Loungewear",
                        options: [
                            "Pajama set", "Nightshirt", "Bathrobe", "Lounge pants", "Lounge shorts",
                            "Thermal night suit", "Yukata (Japan)", "Lungi (Bangladesh)",
                            "Kaftan nightwear (Middle East)", "Dashiki loungewear (West Africa)"
                        ]
                    },
                    {
                        name: "👕 Casual / Everyday",
                        options: [
                            "T-shirt", "Polo shirt", "Henley", "Tank top", "Button-down shirt",
                            "Jeans", "Chinos", "Cargo pants", "Shorts", "Track pants", "Joggers",
                            "Hoodie", "Sweatshirt", "Denim jacket", "Bomber jacket", "Leather jacket", "Tracksuit",
                            "Lungi + Fatua (Bangladesh)", "Kurta (India/Bangladesh)", "Dhoti (India)",
                            "Samue (Japan)", "Hanfu casual (China)", "Gho (Bhutan)",
                            "Barong Tagalog (Philippines)", "Sarong (Indonesia/Malaysia)",
                            "Thobe/Dishdasha (Arab)", "Dashiki (West Africa)",
                            "Kilt casual (Scotland)", "Lederhosen (Germany/Austria)",
                            "Guayabera (Latin America)", "Poncho (Mexico/Andes)"
                        ]
                    },
                    {
                        name: "👔 Formal / Ceremonial",
                        options: [
                            "Dress shirt", "2-piece suit", "3-piece suit", "Blazer", "Tuxedo",
                            "Waistcoat", "Formal trousers", "Tie", "Bow tie",
                            "Panjabi/Kurta Pajama (Bangladesh)", "Sherwani (South Asia)",
                            "Achkan", "Bandhgala/Nehru jacket", "Pathani suit",
                            "Full Kimono + Hakama (Japan)", "Hanbok formal (Korea)",
                            "Hanfu (China)", "Gho ceremonial (Bhutan)",
                            "Barong Tagalog formal (Philippines)", "Longyi + shirt (Myanmar)",
                            "Full Thobe + Bisht (Arab)", "Agbada/Boubou grand (West Africa)",
                            "Kanzu (East Africa)", "Kilt full regalia (Scotland)",
                            "Fustanella (Greece)", "Mariachi suit (Mexico)",
                            "Inuit caribou parka (Arctic)"
                        ]
                    },
                    {
                        name: "🧥 Outerwear / Full-Body",
                        options: [
                            "Overcoat", "Trench coat", "Puffer jacket", "Sweater", "Cardigan",
                            "Raincoat", "Shawl", "Bisht cloak (Arab)",
                            "Agbada grand outer (West Africa)", "Boubou full (Africa)",
                            "Kimono outer layers (Japan)", "Poncho/Serape (Latin America)",
                            "Inuit parka (Arctic)", "Kaftan outer (Middle East)", "Sherwani full"
                        ]
                    },
                    {
                        name: "🎨 Body Art (Cultural Dress)",
                        options: [
                            "Ta Moko tattoo (Maori)", "Irezumi tattoo (Japan)",
                            "Polynesian tribal tattoo", "Sak Yant tattoo (Thailand)",
                            "Himba red ochre body paint (Namibia)",
                            "Aboriginal dot body paint (Australia)",
                            "Papua New Guinea tribal paint", "African Nuba/Surma body paint",
                            "Maasai beadwork", "Maasai ochre-dyed hair"
                        ]
                    }
                ]
            },
            {
                gender: "female",
                label: "👩 Female",
                categories: [
                    {
                        name: "👙 Intimate / Underwear",
                        options: [
                            "T-shirt bra", "Push-up bra", "Sports bra", "Bralette", "Strapless bra",
                            "Bikini panty", "Thong", "Boyshorts", "G-string", "High-waist panty",
                            "Camisole", "Slip", "Petticoat", "Shapewear", "Bodysuit",
                            "Corset", "Bustier", "Chemise", "Pantyhose", "Stockings",
                            "Sarong underskirt (Indonesia)"
                        ]
                    },
                    {
                        name: "😴 Sleepwear / Loungewear",
                        options: [
                            "Nightgown/Nighty", "Babydoll", "Pajama set", "Robe/Peignoir", "Lounge set",
                            "Yukata (Japan)", "Night sari blouse (India)", "Kebaya night (Indonesia)",
                            "Kaftan robe (Middle East)", "Hanbok sleep (Korea)"
                        ]
                    },
                    {
                        name: "👗 Casual / Everyday",
                        options: [
                            "T-shirt", "Crop top", "Tank top", "Blouse", "Tunic",
                            "Leggings", "Jeggings", "Yoga pants", "Jeans",
                            "Mini skirt", "Midi skirt", "Maxi skirt", "Shorts",
                            "Sundress", "Maxi dress", "Shift dress", "Wrap dress", "Shirt dress",
                            "Jumpsuit", "Romper", "Hoodie", "Cardigan",
                            "Salwar Kameez (Bangladesh/India)", "Kurti + Dupatta", "Saree casual",
                            "Cheongsam/Qipao casual (China)", "Hanbok daily (Korea)",
                            "Ao Dai (Vietnam)", "Kimono casual (Japan)",
                            "Kebaya + Sarong (Indonesia)", "Abaya + Hijab (Arab)",
                            "Kanga wrap (East Africa)", "Boubou (West Africa)",
                            "Gele + wrapper (Nigeria)", "Dirndl casual (Germany)",
                            "Sarafan (Russia)", "Huipil blouse (Mexico/Guatemala)",
                            "Pollera skirt (Latin America)", "Poncho wrap (Andes)"
                        ]
                    },
                    {
                        name: "👘 Formal / Ceremonial",
                        options: [
                            "Evening dress", "Cocktail dress", "Little Black Dress", "Prom dress",
                            "Anarkali", "Lehenga Choli", "Sharara set", "Palazzo set", "Maxi gown",
                            "Saree full + blouse + petticoat (Bangladesh/India)",
                            "Salwar Kameez grand", "Ghagra Choli",
                            "Kimono full + Obi (Japan)", "Hanbok formal (Korea)",
                            "Cheongsam/Qipao formal (China)", "Ao Dai formal (Vietnam)",
                            "Kebaya full lace (Indonesia)", "Abaya/Burqa full (Arab)",
                            "Chador (Iran)", "Gele + wrapper full (Nigeria)",
                            "Herero Victorian-style gown (Namibia)", "Dirndl full (Germany)",
                            "Sarafan formal (Russia)", "Huipil full + skirt (Mexico)",
                            "Pollera formal (Latin America)", "Rebozo shawl + dress (Mexico)",
                            "Kira + Wonju (Bhutan)", "Maasai Shúkà red wrap (Kenya)"
                        ]
                    },
                    {
                        name: "🧥 Outerwear / Full-Body",
                        options: [
                            "Coat", "Trench coat", "Puffer jacket", "Blazer", "Cardigan",
                            "Shrug", "Bolero", "Shawl", "Stole", "Scarf wrap", "Raincoat",
                            "Ball gown", "Bridal/Wedding gown", "Sari full outer drape",
                            "Abaya outer", "Kimono outer (Japan)", "Hanbok full skirt (Korea)",
                            "Lehenga grand", "Chador full veil",
                            "Maasai full Shúkà wrap", "Herero voluminous gown (Namibia)",
                            "Poncho/Rebozo full (Latin America)"
                        ]
                    },
                    {
                        name: "🎨 Body Art (Cultural Dress)",
                        options: [
                            "Ta Moko tattoo (Maori)", "Irezumi tattoo (Japan)",
                            "Polynesian tribal tattoo", "Sak Yant tattoo (Thailand)",
                            "Henna/Mehndi (South Asia)", "Himba red ochre + butter (Namibia)",
                            "Aboriginal dot body paint (Australia)",
                            "Papua New Guinea tribal paint", "African Nuba/Surma body paint",
                            "Native American war paint", "Maasai beadwork coverage",
                            "Tribal neck rings (gold/silver)", "Carnival body paint (Brazil)"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "secondary_character",
        title: "6. Secondary Character / Object",
        options: [
            "Animal companion", "Floating object", "On shoulder", "Beside",
            "In background", "Happy", "Scared", "Friend", "Enemy"
        ]
    },
    {
        id: "action",
        title: "7. Action / Movement",
        options: [
            "Walking", "Running", "Fighting", "Sitting", "Flying",
            "Slow motion", "Powerful", "Energetic", "Cinematic action"
        ]
    },
    {
        id: "camera",
        title: "8. Camera & Shot Type",
        options: [
            "Low angle", "High angle", "Eye-level", "Top view",
            "Close-up", "Medium shot", "Wide shot",
            "Static", "Tracking", "Subject focus", "Background blur"
        ]
    },
    {
        id: "environment",
        title: "9. Environment / Background",
        options: [
            "City", "Forest", "Desert", "Space", "Room", "Trees",
            "Buildings", "Fog", "Fire", "Water",
            "Sunny", "Rainy", "Dark", "Peaceful", "Dramatic"
        ]
    },
    {
        id: "lighting",
        title: "10. Lighting",
        options: [
            "Natural light", "Cinematic light", "Studio light", "Neon",
            "Front light", "Backlight", "Side light",
            "Soft", "Harsh", "High contrast", "Moody"
        ]
    },
    {
        id: "visual_quality",
        title: "11. Visual Quality & Style",
        options: [
            "HD", "4K", "8K", "Low detail", "Medium detail",
            "Highly detailed", "Realistic skin", "Masterpiece", "Ultra-realistic"
        ]
    },
    {
        id: "extra_effects",
        title: "12. Extra Effects (Optional)",
        options: [
            "Dust particles", "Smoke", "Sparks", "Magic effects",
            "Warm tone", "Cool tone", "Vibrant", "Glow",
            "Motion blur", "Depth effects"
        ]
    }
];

// ── DOM refs ──
const formContainer  = document.getElementById('builder-form');
const finalPromptBox = document.getElementById('final-prompt');
const copyBtn        = document.getElementById('copy-btn');

// ── Render form ──
function renderForm() {
    promptSections.forEach((section) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section-card';

        // Section Title
        const title = document.createElement('h3');
        title.innerText = section.title;
        sectionDiv.appendChild(title);

        if (section.isGrouped) {
            // ── Grouped (Clothing) Section ──
            const wrapper = document.createElement('div');
            wrapper.className = 'gender-tabs-wrapper';

            const tabBtns   = document.createElement('div');
            tabBtns.className = 'gender-tab-btns';

            const tabPanels = document.createElement('div');
            tabPanels.className = 'gender-tab-panels';

            section.groups.forEach((group, gIdx) => {
                // Tab button
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'gender-tab-btn' + (gIdx === 0 ? ' active' : '');
                btn.innerText = group.label;

                btn.addEventListener('click', () => {
                    tabBtns.querySelectorAll('.gender-tab-btn').forEach(b => b.classList.remove('active'));
                    tabPanels.querySelectorAll('.gender-tab-panel').forEach(p => p.classList.remove('active'));
                    btn.classList.add('active');
                    document.getElementById(`panel-${section.id}-${group.gender}`).classList.add('active');
                });

                tabBtns.appendChild(btn);

                // Tab panel
                const panel = document.createElement('div');
                panel.className = 'gender-tab-panel' + (gIdx === 0 ? ' active' : '');
                panel.id = `panel-${section.id}-${group.gender}`;

                group.categories.forEach(cat => {
                    const catLabel = document.createElement('div');
                    catLabel.className = 'clothing-category-label';
                    catLabel.innerText = cat.name;
                    panel.appendChild(catLabel);

                    const grid = document.createElement('div');
                    grid.className = 'options-grid';

                    cat.options.forEach(option => {
                        const label = document.createElement('label');
                        label.className = 'option-label';
                        label.innerHTML = `
                            <input type="checkbox" name="${section.id}" value="${option}">
                            <span class="option-text">${option}</span>
                        `;
                        label.querySelector('input').addEventListener('change', updatePrompt);
                        grid.appendChild(label);
                    });

                    panel.appendChild(grid);
                });

                tabPanels.appendChild(panel);
            });

            wrapper.appendChild(tabBtns);
            wrapper.appendChild(tabPanels);
            sectionDiv.appendChild(wrapper);

        } else {
            // ── Normal Section ──
            const grid = document.createElement('div');
            grid.className = 'options-grid';

            section.options.forEach(option => {
                const label = document.createElement('label');
                label.className = 'option-label';
                label.innerHTML = `
                    <input type="checkbox" name="${section.id}" value="${option}">
                    <span class="option-text">${option}</span>
                `;
                label.querySelector('input').addEventListener('change', updatePrompt);
                grid.appendChild(label);
            });

            sectionDiv.appendChild(grid);
        }

        // Custom input (every section)
        const customInput = document.createElement('input');
        customInput.type = 'text';
        customInput.className = 'custom-input';
        customInput.placeholder = `Add custom details for ${section.title.split('.')[1].trim()}...`;
        customInput.dataset.sectionId = section.id;
        customInput.addEventListener('input', updatePrompt);

        sectionDiv.appendChild(customInput);
        formContainer.appendChild(sectionDiv);
    });
}

// ── Build final prompt ──
function updatePrompt() {
    const parts = [];

    promptSections.forEach((section) => {
        const values = [];

        // Checked boxes
        document.querySelectorAll(`input[name="${section.id}"]:checked`)
            .forEach(box => values.push(box.value));

        // Custom text
        const customInput = document.querySelector(`.custom-input[data-section-id="${section.id}"]`);
        if (customInput && customInput.value.trim()) {
            values.push(customInput.value.trim());
        }

        if (values.length > 0) {
            let str = values.join(', ');
            if (section.prefix) str = section.prefix + str;
            parts.push(str);
        }
    });

    finalPromptBox.value = parts.join('. ');
}

// ── Copy to clipboard ──
copyBtn.addEventListener('click', () => {
    if (!finalPromptBox.value.trim()) {
        alert("Prompt is empty! Please select some options first.");
        return;
    }

    finalPromptBox.select();
    navigator.clipboard.writeText(finalPromptBox.value).then(() => {
        const orig = copyBtn.innerText;
        copyBtn.innerText = "✅ Copied!";
        copyBtn.style.background = "#10b981";

        setTimeout(() => {
            copyBtn.innerText = orig;
            copyBtn.style.background = "";
        }, 2000);
    });
});

// ── Reset ──
const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', () => {
    // সব checkbox uncheck করো
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(cb => cb.checked = false);

    // সব custom input খালি করো
    document.querySelectorAll('.custom-input')
        .forEach(input => input.value = '');

    // Prompt box খালি করো
    finalPromptBox.value = '';

    // বাটনে ফিডব্যাক দেখাও
    const orig = resetBtn.innerText;
    resetBtn.innerText = "✅ Reset!";
    setTimeout(() => resetBtn.innerText = orig, 1500);
});

// ── Init ──
renderForm();