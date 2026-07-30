// قاعدة البيانات الشاملة لخدمات agency الـ 60 (مترجمة ومقسمة)
const db = {
    Digital: { 
        ar: "نورمال ديجيتال", en: "Normal Digital", fr: "Normal Digital",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['تصميم المواقع الإلكترونية', 'Web Design', 'Conception Web'],
            ['تطوير المتاجر الإلكترونية', 'E-commerce Development', 'Développement E-commerce'],
            ['تطوير تطبيقات الجوال (iOS & Android)', 'Mobile Apps', 'Applications Mobiles'],
            ['برمجة الأنظمة الخاصة والمنصات', 'Custom Web Systems', 'Systèmes Sur Mesure'],
            ['ربط بواجهات البرمجة API', 'API Integration', 'Intégration API'],
            ['تحسين محركات البحث SEO', 'SEO Optimization', 'Optimisation SEO'],
            ['إدارة وتأمين السيرفرات', 'Server Management', 'Gestion de Serveurs'],
            ['دمج حلول الذكاء الاصطناعي', 'AI Solutions', 'Solutions IA'],
            ['إنشاء وتطوير متاجر سلة وزد', 'Salla & Zid Stores', 'Boutiques Salla & Zid'],
            ['حماية وتأمين المواقع الإلكترونية', 'Web Security', 'Sécurité Web'],
            ['تحليل البيانات وتقارير الأداء', 'Analytics & Reporting', 'Analyse de Données'],
            ['إدارة وتحديث المحتوى الرقمي', 'Content Management', 'Gestion de Contenu'],
            ['برمجة الشات بوت التفاعلي', 'Chatbot Development', 'Développement Chatbot'],
            ['تسريع وتحسين أداء المواقع', 'Speed Optimization', 'Optimisation de Vitesse'],
            ['الاستشارات التقنية والرقمية', 'Tech Consulting', 'Conseil Technique']
        ] 
    },
    Studio: { 
        ar: "نورمال ستوديو", en: "Normal Studio", fr: "Normal Studio",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['تصوير المنتجات الاحترافي', 'Product Photography', 'Photographie de Produits'],
            ['تصوير الإعلانات التجارية', 'Commercial Ads', 'Tournage Publicitaire'],
            ['المونتاج وتعديل الفيديو', 'Video Editing', 'Montage Vidéo'],
            ['التلوين السينمائي (Color Grading)', 'Color Grading', 'Étalonnage Vidéo'],
            ['إنتاج الفيديوهات القصيرة (Reels/Shorts)', 'Short Video Content', 'Vidéos Courtes'],
            ['التصوير الجوي بالدرون', 'Drone Shooting', 'Prise de Vue Aérienne'],
            ['تغطية الفعاليات والمؤتمرات', 'Events Coverage', 'Couverture d\'Événements'],
            ['إنتاج الأفلام الوثائقية والتعريفية', 'Documentaries & Corporate', 'Films Documentaires'],
            ['الهندسة والتعليق الصوتي (Voice-over)', 'Sound Design & Voice-over', 'Design Sonore'],
            ['كتابة السيناريو والحوار الإعلاني', 'Scriptwriting', 'Rédaction de Scénario'],
            ['الإخراج الفني للإعلانات', 'Video Directing', 'Réalisation Vidéo'],
            ['تصوير البورتريه والأشخاص', 'Portrait Photography', 'Photographie Portrait'],
            ['تصميم إضاءة الاستديو', 'Studio Lighting', 'Éclairage Studio'],
            ['إنتاج الموشن جرافيك 2D/3D', 'Motion Graphics 2D/3D', 'Motion Design 2D/3D'],
            ['استشارات الإنتاج الإعلاني والمرئي', 'Media Production Consulting', 'Conseil en Production']
        ] 
    },
    Art: { 
        ar: "نورمال آرت", en: "Normal Art", fr: "Normal Art",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['بناء الهويات البصرية الكاملة', 'Full Brand Identity', 'Identité Visuelle Complète'],
            ['تصميم الشعارات الاحترافية', 'Logo Design', 'Création de Logo'],
            ['تصميم العبوات وتغليف المنتجات', 'Packaging Design', 'Design d\'Emballage'],
            ['كتابة وتصميم دليل العلامة التجارية', 'Brand Guidelines', 'Guide de Charte Graphique'],
            ['تصميم منشورات منصات التواصل', 'Social Media Graphics', 'Design Réseaux Sociaux'],
            ['تصميم بروفايل الشركات والمؤسسات', 'Company Profile', 'Design de Profil d\'Entreprise'],
            ['تصميم المطبوعات والبروشورات', 'Brochures & Flyers', 'Brochures & Dépliants'],
            ['الرسم الرقمي والـ Graffiti Art', 'Digital Illustration', 'Illustrations Sur Mesure'],
            ['تصميم اللوحات الإعلانية الخارجية', 'Billboards & Banners', 'Panneaux Publicitaires'],
            ['تصميم واجهات وتجربة المستخدم UI/UX', 'UI/UX Design', 'Design UI/UX'],
            ['تصميم العروض التقديمية', 'Presentation Design', 'Design de Présentation'],
            ['تصميم القوائم والمنيو', 'Menu Design', 'Design de Menu'],
            ['تصميم الكتب والمجلات', 'Book & Magazine Design', 'Mise en Page Livre/Magazine'],
            ['إعادة تطوير وتحديث الهويات (Rebranding)', 'Brand Rebranding', 'Refonte d\'Identité'],
            ['الاستشارات الفنية والتصميمية', 'Art & Design Consulting', 'Conseil en Design']
        ] 
    },
    Print: { 
        ar: "نورمال برينت", en: "Normal Print", fr: "Normal Print",
        image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['طباعة بطاقات العمل الفاخرة', 'Luxury Business Cards', 'Cartes de Visite Premium'],
            ['طباعة الأكياس والعلب المخصصة', 'Custom Bags & Boxes', 'Sacs & Boîtes Personnalisés'],
            ['طباعة الأوراق الرسمية والظروف', 'Stationery & Envelopes', 'Papier En-tête & Enveloppes'],
            ['طباعة الهدايا الدعائية والترويجية', 'Promotional Gifts', 'Cadeaux Publicitaires'],
            ['طباعة الملصقات والأستيكرات', 'Custom Stickers & Labels', 'Autocollants & Étiquettes'],
            ['طباعة الكتب والكتالوجات', 'Catalogs & Books', 'Impression de Catalogues'],
            ['طباعة اللوحات الأكريليك والكانفاس', 'Acrylic & Canvas Prints', 'Impression Acrylique & Toile'],
            ['طباعة الزي الموحد والملابس (Uniform)', 'Uniform & Apparel Print', 'Impression sur Textile'],
            ['طباعة الرول أب والفلكس', 'Roll-ups & Banners', 'Impression Roll-Up & Banners'],
            ['طباعة الأجندات والتقاويم', 'Agendas & Calendars', 'Agendas & Calendriers'],
            ['طباعة البروشورات والمطويات', 'Brochures Printing', 'Impression de Brochures'],
            ['طباعة السندات والفواتير', 'Invoices & Receipts', 'Factures & Carnets'],
            ['التذهيب والكبس الحراري والتنعيم', 'Foil Stamping & Embossing', 'Gaufrage & Dorure'],
            ['طباعة وتصميم الدروع والجوائز', 'Trophies & Awards', 'Trophées & Récompenses'],
            ['استشارات خامات المطبوعات والتغليف', 'Print Consulting', 'Conseil en Impression']
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
