const db = {
    Digital: { 
        ar: "نورمال ديجيتال", en: "Normal Digital", fr: "Normal Digital",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['تصميم المواقع', 'Web Design', 'Conception Web'], 
            ['تطوير المتاجر', 'E-commerce', 'E-commerce'], 
            ['تطبيقات الجوال', 'Mobile Apps', 'Applications Mobiles'], 
            ['حلول الذكاء الاصطناعي', 'AI Solutions', 'Solutions IA']
        ] 
    },
    Studio: { 
        ar: "نورمال ستوديو", en: "Normal Studio", fr: "Normal Studio",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['تصوير المنتجات', 'Product Photo', 'Photographie de Produits'], 
            ['إعلانات تجارية', 'Commercial Ads', 'Publicités Commerciales'], 
            ['مونتاج احترافي', 'Pro Editing', 'Montage Professionnel']
        ] 
    },
    Art: { 
        ar: "نورمال آرت", en: "Normal Art", fr: "Normal Art",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['هوية بصرية', 'Visual Identity', 'Identité Visuelle'], 
            ['تصميم شعارات', 'Logo Design', 'Création de Logo'], 
            ['تغليف وعبوات', 'Packaging', 'Emballage & Packaging']
        ] 
    },
    Print: { 
        ar: "نورمال برينت", en: "Normal Print", fr: "Normal Print",
        image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['بطاقات عمل', 'Business Cards', 'Cartes de Visite'], 
            ['هدايا دعائية', 'Promo Gifts', 'Cadeaux Publicitaires'], 
            ['تغليف مطبوع', 'Printed Packaging', 'Impression de Marque']
        ] 
    }
};

let currentLangIndex = 0;
const langs = ['ar', 'en', 'fr'];
let currentCat = "Digital";

function toggleLanguage() {
    currentLangIndex = (currentLangIndex + 1) % langs.length;
    const lang = langs[currentLangIndex];
    
    document.documentElement.lang = lang;
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-en]').forEach(el => { 
        if (el.dataset[lang]) {
            el.innerText = el.dataset[lang]; 
        }
    });
    
    document.querySelectorAll('input, textarea').forEach(el => {
        if (el.dataset[`${lang}Placeholder`]) { 
            el.placeholder = el.dataset[`${lang}Placeholder`]; 
        }
    });

    refreshModal();
}

function openModal(cat) {
    currentCat = cat;
    refreshModal();
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function refreshModal() {
    const lang = langs[currentLangIndex];
    const langMap = { ar: 0, en: 1, fr: 2 };
    const idx = langMap[lang];

    document.getElementById('modalTitle').innerText = db[currentCat][lang];
    document.getElementById('modalWorkSample').src = db[currentCat].image;

    const container = document.getElementById('subServicesContainer');
    container.innerHTML = '';

    db[currentCat].items.forEach(i => {
        const div = document.createElement('div');
        div.className = 'sub-service-item';
        div.innerText = i[idx];
        div.onclick = function() {
            document.querySelectorAll('.sub-service-item').forEach(el => el.classList.remove('selected-item'));
            div.classList.add('selected-item');
            document.getElementById('serviceName').value = i[idx];
        };
        container.appendChild(div);
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) { 
        closeModal(); 
    }
}
