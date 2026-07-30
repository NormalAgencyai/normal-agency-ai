// قاعدة البيانات الشاملة مع استعادة جميع الـ 60 خدمة بالكامل (15 لكل قسم)
const db = {
    Digital: { 
        ar: "نورمال ديجيتال", en: "Normal Digital", fr: "Normal Digital",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['تصميم المواقع الإلكترونية', 'Web Design', 'Conception Web'],
            ['تطوير المتاجر الإلكترونية', 'E-commerce Development', 'Développement E-commerce'],
            ['تطبيقات الجوال (iOS & Android)', 'Mobile Apps', 'Applications Mobiles'],
            ['برمجة الأنظمة الخاصة', 'Custom Web Systems', 'Systèmes Sur Mesure'],
            ['ربط بواجهات البرمجة API', 'API Integration', 'Intégration API'],
            ['تحسين محركات البحث SEO', 'SEO Optimization', 'Optimisation SEO'],
            ['إدارة وتطوير السيرفرات', 'Server Management', 'Gestion de Serveurs'],
            ['حلول الذكاء الاصطناعي', 'AI Integration', 'Solutions IA'],
            ['تطوير المتاجر عبر سلة وزد', 'Salla & Zid Stores', 'Boutiques Salla & Zid'],
            ['حماية وتأمين المواقع', 'Web Security', 'Sécurité Web'],
            ['تحليل البيانات وتقارير الأداء', 'Analytics & Reporting', 'Analyse de Données'],
            ['إدارة وتحديث المحتوى الرقمي', 'Content Management', 'Gestion de Contenu'],
            ['برمجة الشات بوت التفاعلي', 'Chatbot Development', 'Développement Chatbot'],
            ['تسريع أداء المواقع', 'Speed Optimization', 'Optimisation de Vitesse'],
            ['استشارات تقنية وتطويرية', 'Tech Consulting', 'Conseil Technique']
        ] 
    },
    Studio: { 
        ar: "نورمال ستوديو", en: "Normal Studio", fr: "Normal Studio",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['تصوير المنتجات الاحترافي', 'Product Photography', 'Photographie de Produits'],
            ['تصوير الإعلانات التجارية', 'Commercial Ads Shooting', 'Tournage Publicitaire'],
            ['المونتاج وتعديل الفيديو', 'Video Editing', 'Montage Vidéo'],
            ['التلوين السينمائي (Color Grading)', 'Color Grading', 'Étalonnage Vidéo'],
            ['إنتاج الفيديوهات القيرة (Reels/Shorts)', 'Short Video Content', 'Vidéos Courtes'],
            ['التصوير الجوي (Drone)', 'Drone Shooting', 'Prise de Vue Aérienne'],
            ['تصوير الفعاليات والمؤتمرات', 'Events Coverage', 'Couverture d\'Événements'],
            ['إنتاج الأفلام الوثائقية والتعريفية', 'Documentaries & Corporate', 'Films Documentaires'],
            ['تصميم وإخراج الهندسة الصوتية', 'Sound Design & Audio', 'Design Sonore'],
            ['كتابة السيناريو والحوار الإعلاني', 'Scriptwriting', 'Rédaction de Scénario'],
            ['إخراج الإعلانات والفيديوهات', 'Video Directing', 'Réalisation Vidéo'],
            ['تصوير البورتريه والأشخاص', 'Portrait Photography', 'Photographie Portrait'],
            ['تصميم الإضاءة واستديو التصوير', 'Lighting Design', 'Éclairage Studio'],
            ['إنتاج الموشن جرافيك 2D/3D', 'Motion Graphics 2D/3D', 'Motion Design 2D/3D'],
            ['استشارات الإنتاج الإبداعي', 'Media Production Consulting', 'Conseil en Production']
        ] 
    },
    Art: { 
        ar: "نورمال آرت", en: "Normal Art", fr: "Normal Art",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['بناء الهويات البصرية الكاملة', 'Full Brand Identity', 'Identité Visuelle Complète'],
            ['تصميم الشعارات (Logo Design)', 'Logo Design', 'Création de Logo'],
            ['تصميم عبوات وتغليف المنتجات', 'Packaging Design', 'Design d\'Emballage'],
            ['دليل استخدام العلامة التجارية', 'Brand Guidelines', 'Guide de Charte Graphique'],
            ['تصميم منشورات منصات التواصل', 'Social Media Graphics', 'Design Réseaux Sociaux'],
            ['تصميم البروفايل للشركات', 'Company Profile Design', 'Design de Profil d\'Entreprise'],
            ['تصميم المطبوعات والبروشورات', 'Brochures & Flyers', 'Brochures & Dépliants'],
            ['رسم الشخصيات والإيضاحات (Illustration)', 'Illustrations', 'Illustrations Sur Mesure'],
            ['تصميم اللوحات الإعلانية الخارجية', 'Billboards & Banners', 'Panneaux Publicitaires'],
            ['تصميم واجهات المستخدم UI/UX', 'UI/UX Design', 'Design UI/UX'],
            ['تصميم العروض التقديمية الفاخرة', 'Presentation Design', 'Design de Présentation'],
            ['تصميم القوائم والمنيو', 'Menu Design', 'Design de Menu'],
            ['تصميم المجلات والكتب', 'Book & Magazine Design', 'Mise en Page Livre/Magazine'],
            ['تجديد وتحديث الهويات القديمة', 'Brand Rebranding', 'Refonte d\'Identité'],
            ['استشارات التصميم والابتكار', 'Design Consulting', 'Conseil en Design']
        ] 
    },
    Print: { 
        ar: "نورمال برينت", en: "Normal Print", fr: "Normal Print",
        image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80", 
        items: [
            ['طباعة بطاقات العمل الفاخرة', 'Luxury Business Cards', 'Cartes de Visite Premium'],
            ['طباعة الأكياس والعلب المخصصة', 'Custom Boxes & Bags', 'Sacs & Boîtes Personnalisés'],
            ['طباعة الأوراق الرسمية والظروف', 'Stationery & Envelopes', 'Papier En-tête & Enveloppes'],
            ['طباعة الهدايا الدعائية والترويجية', 'Promotional Gifts', 'Cadeaux Publicitaires'],
            ['طباعة الملصقات والأستيكرات', 'Custom Stickers & Labels', 'Autocollants & Étiquettes'],
            ['طباعة الكتب والكتالوجات', 'Catalogs & Books Print', 'Impression de Catalogues'],
            ['طباعة اللوحات الاكريليك والكانفاس', 'Acrylic & Canvas Prints', 'Impression Acrylique & Toile'],
            ['طباعة الزي الموحد والملابس (Uniform)', 'Uniform & Apparel Print', 'Impression sur Textil'],
            ['طباعة الرول أب والفلكس', 'Roll-ups & Banners', 'Impression Roll-Up & Banners'],
            ['طباعة الأجندات والتقاويم', 'Agendas & Calendars', 'Agendas & Calendriers'],
            ['طباعة المجلات والبروشورات', 'Brochures Printing', 'Impression de Brochures'],
            ['طباعة الفواتير والسندات', 'Invoices & Receipts', 'Factures & Carnets'],
            ['التنعيم والتذهيب والكبس الحراري', 'Foil Stamping & Embossing', 'Gaufrage & Dorure'],
            ['طباعة الدروع والجوائز', 'Trophies & Awards', 'Trophées & Récompenses'],
            ['استشارات مواد المطبوعات والتغليف', 'Print Consulting', 'Conseil en Impression']
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
