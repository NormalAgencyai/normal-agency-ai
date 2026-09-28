// ==========================================
// وكالة نورمال الإبداعية - النظام الكامل والمنظم (5 أقسام مع الترجمة الفورية)
// ==========================================

const servicesData = {
    'Digital': {
        titleAr: 'نورمال ديجيتال',
        titleEn: 'Normal Digital',
        titleFr: 'Normal Digital',
        items: [
            { ar: 'إدارة حسابات التواصل', en: 'Social Media Management', fr: 'Gestion des réseaux sociaux', price: '650' },
            { ar: 'إطلاق الحملات الإعلانية', en: 'Ad Campaigns Launch', fr: 'Lancement publicitaire', price: '250' },
            { ar: 'كتابة المحتوى والسيناريو', en: 'Content & Scriptwriting', fr: 'Rédaction de contenu', price: '75' },
            { ar: 'إنشاء المواقع والمتاجر', en: 'Web & E-Commerce Dev', fr: 'Création de sites', price: '490' },
            { ar: 'تحسين محركات البحث SEO', en: 'SEO Optimization', fr: 'Optimisation SEO', price: '350' },
            { ar: 'استراتيجية التسويق الرقمي', en: 'Digital Marketing Strategy', fr: 'Stratégie digitale', price: '400' },
            { ar: 'تحليل البيانات والتقارير', en: 'Data Analytics & Reports', fr: 'Analyse de données', price: '200' },
            { ar: 'التسويق عبر البريد', en: 'Email Marketing', fr: 'Email marketing', price: '150' },
            { ar: 'إدارة حملات المشاهير', en: 'Influencer Campaigns', fr: 'Campagnes d’influenceurs', price: '500' },
            { ar: 'إعادة بناء الهوية الرقمية', en: 'Rebranding Strategy', fr: 'Stratégie de rebranding', price: '450' },
            { ar: 'استشارات تسويقية', en: 'Marketing Consultation', fr: 'Conseil en marketing', price: '150' },
            { ar: 'إدارة سمعة العلامة التجارية', en: 'Brand Reputation Mgmt', fr: 'Gestion de réputation', price: '300' },
            { ar: 'ربط البوابات والأدوات', en: 'API & Tool Integration', fr: 'Intégration d’API', price: '250' },
            { ar: 'إدارة الحملات التفاعلية', en: 'Interactive Campaigns', fr: 'Campagnes interactives', price: '300' },
            { ar: 'إعداد خطط نشر المحتوى', en: 'Content Calendar Planning', fr: 'Planification', price: '120' }
        ]
    },
    'Studio': {
        titleAr: 'نورمال ستوديو',
        titleEn: 'Normal Studio',
        titleFr: 'Normal Studio',
        items: [
            { ar: 'مونتاج وتعديل الفيديو', en: 'Video Editing', fr: 'Montage vidéo', price: '120' },
            { ar: 'تصحيح وتدرج الألوان', en: 'Color Grading', fr: 'Étalonnage couleur', price: '90' },
            { ar: 'إنتاج فيديو إعلاني كامل', en: 'Commercial Video Production', fr: 'Production commerciale', price: '390' },
            { ar: 'المؤثرات البصرية Visual Effects', en: 'VFX & Visual Effects', fr: 'Effets visuels (VFX)', price: '180' },
            { ar: 'تصوير منتجات ميداني', en: 'Product Photography', fr: 'Photographie produits', price: '350' },
            { ar: 'المونتاج السينمائي', en: 'Cinematic Editing', fr: 'Montage cinématographique', price: '250' },
            { ar: 'المؤثرات الصوتية والهندسة', en: 'Sound Design & Engineering', fr: 'Design sonore', price: '100' },
            { ar: 'تصوير وتسجيل ستوديو', en: 'Studio Shooting & Recording', fr: 'Tournage studio', price: '400' },
            { ar: 'إنتاج فيديو موشن جرافيك', en: 'Motion Graphics Video', fr: 'Motion Design', price: '220' },
            { ar: 'مونتاج الريلز والشورتس', en: 'Reels & Shorts Editing', fr: 'Montage Reels', price: '60' },
            { ar: 'تأجير معدات إضاءة واستوديو', en: 'Studio Equipment Rental', fr: 'Location d’équipement', price: '300' },
            { ar: 'إخراج كليبات وإعلانات', en: 'Directing Services', fr: 'Réalisation', price: '600' },
            { ar: 'تغطية الفعاليات والمؤتمرات', en: 'Event Coverage', fr: 'Couverture d’événements', price: '500' },
            { ar: 'البث المباشر الاحترافي', en: 'Professional Live Streaming', fr: 'Streaming en direct', price: '450' },
            { ar: 'معالجة ومكساج الصوت', en: 'Audio Post-Production', fr: 'Post-production audio', price: '120' }
        ]
    },
    'Art': {
        titleAr: 'نورمال آرت',
        titleEn: 'Normal Art',
        titleFr: 'Normal Art',
        items: [
            { ar: 'تصميم هوية بصرية كاملة', en: 'Full Brand Identity Design', fr: 'Design d’identité visuelle', price: '450' },
            { ar: 'تصميم شعار Logo Design', en: 'Logo Design', fr: 'Conception de logo', price: '180' },
            { ar: 'تصاميم السوشيال ميديا', en: 'Social Media Designs', fr: 'Design réseaux sociaux', price: '35' },
            { ar: 'تصميم البكجات والتغليف', en: 'Packaging Design', fr: 'Design d’emballage', price: '220' },
            { ar: 'تصميم الملف التعريفي Profile', en: 'Company Profile Design', fr: 'Profile d’entreprise', price: '190' },
            { ar: 'رسم واختيار الشخصيات', en: 'Character Design', fr: 'Design de personnages', price: '250' },
            { ar: 'تصميم العروض التقديمية', en: 'Presentation Deck Design', fr: 'Design de présentation', price: '150' },
            { ar: 'تصميم لوحات وإعلانات', en: 'Banner & Sign Design', fr: 'Design de bannières', price: '120' },
            { ar: 'تصميم المطبوعات والكتالوجات', en: 'Brochure & Catalog Design', fr: 'Design de brochures', price: '160' },
            { ar: 'تصميم واجهات المستخدم UI/UX', en: 'UI/UX Interface Design', fr: 'UI/UX Design', price: '400' },
            { ar: 'تصميم القوائم والمنيو', en: 'Menu Design', fr: 'Design de menu', price: '110' },
            { ar: 'تصميم كروت الأعمال', en: 'Business Cards Design', fr: 'Cartes de visite', price: '50' },
            { ar: 'تطوير ودليل العلامة التجارية', en: 'Brand Guidelines Manual', fr: 'Guide de marque', price: '280' },
            { ar: 'تصميم ملصقات واستيكرات', en: 'Sticker Design', fr: 'Design d’autocollants', price: '40' },
            { ar: 'تعديل ومعالجة الصور', en: 'Photo Retouching', fr: 'Retouche photo', price: '30' }
        ]
    },
    'Print': {
        titleAr: 'نورمال برينت',
        titleEn: 'Normal Print',
        titleFr: 'Normal Print',
        items: [
            { ar: 'طباعة كروت وأوراق رسمية', en: 'Business Cards Printing', fr: 'Impression cartes de visite', price: '75' },
            { ar: 'طباعة التغليف والأكياس', en: 'Packaging Printing', fr: 'Impression d’emballages', price: '190' },
            { ar: 'طباعة الهدايا الدعائية', en: 'Promo Gifts Printing', fr: 'Cadeaux promotionnels', price: '120' },
            { ar: 'طباعة اللوحات الإعلانية', en: 'Signboards Printing', fr: 'Impression d’enseignes', price: '150' },
            { ar: 'طباعة البروشورات والمنشورات', en: 'Flyers Printing', fr: 'Impression de flyers', price: '80' },
            { ar: 'طباعة الكتب والكتالوجات', en: 'Catalog Printing', fr: 'Impression de catalogues', price: '250' },
            { ar: 'طباعة المنسوجات والزي', en: 'Apparel & Uniform Printing', fr: 'Impression textile', price: '140' },
            { ar: 'طباعة الاستيكرات والملصقات', en: 'Stickers Roll Printing', fr: 'Impression d’autocollants', price: '60' },
            { ar: 'طباعة العلب الكرتونية', en: 'Carton Box Printing', fr: 'Impression de boîtes', price: '220' },
            { ar: 'طباعة الأجنحة والمعارض', en: 'Exhibition Booth Printing', fr: 'Impression pour stands', price: '600' },
            { ar: 'طباعة التقاويم والمذكرات', en: 'Diaries Printing', fr: 'Impression d’agendas', price: '110' },
            { ar: 'طباعة المنيو البلاستيكي', en: 'Menu Board Printing', fr: 'Impression de menus', price: '90' },
            { ar: 'طباعة الأظرف والوسائل', en: 'Envelope Printing', fr: 'Impression d’enveloppes', price: '70' },
            { ar: 'طباعة الأوراق الذهبية', en: 'Gold Foil Printing', fr: 'Impression dorure', price: '180' },
            { ar: 'طباعة الأعلام والرولات Roll-up', en: 'Roll-up Banners Printing', fr: 'Impression de Roll-up', price: '130' }
        ]
    },
    'Office': {
        titleAr: 'نورمال أوفيس',
        titleEn: 'Normal Office',
        titleFr: 'Normal Office',
        items: [
            { ar: 'تصميم السيرة الذاتية CV الاحترافية', en: 'Professional CV Design', fr: 'Design de CV professionnel', price: '90' },
            { ar: 'تصميم عروض الأسعار للشركات Quotation', en: 'Corporate Quotation Design', fr: 'Design de devis d’entreprise', price: '120' },
            { ar: 'إعداد الملف التعريفي Company Profile', en: 'Company Profile Creation', fr: 'Création de profil d’entreprise', price: '200' },
            { ar: 'كتابة الخطابات الرسمية والإدارية', en: 'Official Administrative Letters', fr: 'Lettres administratives officielles', price: '60' },
            { ar: 'ترجمة المستندات والوثائق الرسمية', en: 'Document Translation Services', fr: 'Services de traduction de documents', price: '80' },
            { ar: 'تنسيق وعمل العروض التقديمية PPT', en: 'Presentation Formatting (PPT)', fr: 'Mise en page de présentations', price: '130' },
            { ar: 'صياغة العقود واتفاقيات العمل', en: 'Contracts & Work Agreements', fr: 'Rédaction de contrats de travail', price: '250' },
            { ar: 'تفريغ النصوص والملفات الصوتية', en: 'Transcription & Typing Services', fr: 'Services de transcription', price: '50' },
            { ar: 'إعداد دراسات الجدوى المبسطة', en: 'Simplified Feasibility Studies', fr: 'Études de faisabilité simplifiées', price: '350' },
            { ar: 'إعداد التقارير المالية والإدارية', en: 'Financial & Administrative Reports', fr: 'Rapports financiers et administratifs', price: '180' },
            { ar: 'تصميم النماذج والفواتير المعتمدة', en: 'Invoice & Form Templates Design', fr: 'Design de factures et formulaires', price: '70' },
            { ar: 'كتابة المحتوى الإداري للمراسلات', en: 'Business Correspondence Content', fr: 'Contenu de correspondance d’affaires', price: '75' },
            { ar: 'تنظيم وتدقيق الجداول الإحصائية Excel', en: 'Excel Data Organization & Sheets', fr: 'Organisation de données Excel', price: '100' },
            { ar: 'إعداد خطط العمل التشغيلية Operations', en: 'Operational Business Plans', fr: 'Plans d’affaires opérationnels', price: '220' },
            { ar: 'خدمة أعمال مكتبية أخرى (مخصصة)', en: 'Other Custom Office Services', fr: 'Autres services de bureau personnalisés', price: '100' }
        ]
    }
};

// ==========================================
// بيانات آراء العملاء (تحكم كامل: أضف/عدّل/احذف أي تقييم من هنا مباشرة)
// ⚠️ هذه بيانات تجريبية/نموذجية فقط — استبدلها بتقييمات عملائك الحقيقية قبل النشر.
// نظرًا لأن الموقع ثابت (Static) بدون قاعدة بيانات، فإن أبسط وأدق طريقة للتحكم بما
// يظهر (بما في ذلك حذف أي تقييم سلبي) هي تعديل هذه القائمة مباشرة بدل نظام تعليقات حي.
// ==========================================
const testimonialsData = [
    { sample: true, nameAr: "عميل من قطاع التجزئة", nameEn: "Retail client", nameFr: "Client du commerce", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "تنفيذ سريع وتصاميم رفعت مستوى متجرنا بشكل واضح.", textEn: "Fast delivery and designs that clearly lifted our store.", textFr: "Livraison rapide et des designs qui ont élevé notre boutique." },
    { sample: true, nameAr: "عميل من قطاع المطاعم", nameEn: "Restaurant client", nameFr: "Client restauration", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "المنيو والهوية الجديدة لفتت انتباه الزبائن من أول أسبوع.", textEn: "The new menu and identity caught customers’ attention from week one.", textFr: "Le nouveau menu et l’identité ont séduit dès la première semaine." },
    { sample: true, nameAr: "عميل من قطاع العقارات", nameEn: "Real-estate client", nameFr: "Client immobilier", roleAr: '', roleEn: '', roleFr: '', rating: 4,
      textAr: "ملف تعريفي أنيق ساعدنا في عرض مشاريعنا بثقة.", textEn: "An elegant profile that helped us present our projects with confidence.", textFr: "Un profil élégant pour présenter nos projets avec confiance." },
    { sample: true, nameAr: "صاحب شركة ناشئة", nameEn: "Startup founder", nameFr: "Fondateur de start-up", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "فريق متفاهم قدّم لنا موقعًا وهوية متكاملة في وقت قياسي.", textEn: "A responsive team that delivered a site and identity in record time.", textFr: "Une équipe réactive : site et identité livrés en un temps record." },
    { sample: true, nameAr: "عميل من التجارة الإلكترونية", nameEn: "E-commerce client", nameFr: "Client e-commerce", roleAr: '', roleEn: '', roleFr: '', rating: 5,
      textAr: "حملاتنا الإعلانية تحسنت نتائجها بعد التعاون معهم.", textEn: "Our ad campaigns performed noticeably better after working with them.", textFr: "Nos campagnes publicitaires ont nettement mieux performé." },
    { sample: true, nameAr: "عميل من القطاع الصحي", nameEn: "Healthcare client", nameFr: "Client du secteur santé", roleAr: '', roleEn: '', roleFr: '', rating: 4,
      textAr: "التزام بالمواعيد وجودة طباعة ممتازة لموادنا التعريفية.", textEn: "On-time delivery and excellent print quality for our materials.", textFr: "Respect des délais et excellente qualité d’impression." }
];

// ==========================================
// معرض الأعمال — أضف مشاريعك الحقيقية هنا
// ------------------------------------------
// 1) ارفع الصورة داخل مجلد في المستودع (مثال: images/office-1.jpg)
// 2) ضع مسارها في الحقل img  (مثال: img: 'images/office-1.jpg')
// 3) لإضافة مشروع جديد: انسخ سطرًا كاملًا { ... } وغيّر بياناته
// cat يجب أن يكون واحدًا من: Office / Studio / Art / Digital / Print
// concept: true تعني "تصور تصميمي" (ليس مشروع عميل) — احذف هذا الحقل عند وضع مشروع حقيقي.
// المشروع الذي img فيه فارغ '' يظهر كبطاقة "قريبًا" ولا يُفتح.
// ==========================================
const portfolioData = [
    { cat: 'Office', concept: true, img: CONCEPT_IMGS.office1,
      titleAr: "هوية ملف تعريفي لشركة", titleEn: "Company Profile Design", titleFr: "Design de profil d’entreprise",
      descAr: "ملف تعريفي متكامل بتنسيق أنيق وإحصائيات مصورة", descEn: "A complete, elegantly formatted company profile with visual stats", descFr: "Profil complet avec statistiques visuelles" },
    { cat: 'Office', concept: true, img: CONCEPT_IMGS.office2,
      titleAr: "عرض شركة وتقارير", titleEn: "Corporate Deck & Reports", titleFr: "Présentation & rapports",
      descAr: "عروض وتقارير إدارية بتصميم احترافي", descEn: "Executive decks and reports with a polished layout", descFr: "Présentations et rapports professionnels" },
    { cat: 'Studio', concept: true, img: CONCEPT_IMGS.studio1,
      titleAr: "فيديو إعلاني سينمائي", titleEn: "Cinematic Commercial", titleFr: "Publicité cinématographique",
      descAr: "مونتاج وتدرج ألوان دافئ لإعلان علامة تجارية", descEn: "Editing and warm colour grading for a brand commercial", descFr: "Montage et étalonnage chaud pour une marque" },
    { cat: 'Studio', concept: true, img: CONCEPT_IMGS.studio2,
      titleAr: "فيلم تعريفي بتدرج بارد", titleEn: "Cool-Toned Brand Film", titleFr: "Film de marque, tons froids",
      descAr: "إخراج ومونتاج بتدرج ألوان بارد وفاخر", descEn: "Directing and editing with a cool, premium grade", descFr: "Réalisation et montage aux tons froids" },
    { cat: 'Art', concept: true, img: CONCEPT_IMGS.art1,
      titleAr: "هوية بصرية متكاملة", titleEn: "Complete Visual Identity", titleFr: "Identité visuelle complète",
      descAr: "شعار وألوان وخطوط ومطبوعات مكتبية متناسقة", descEn: "Logo, palette, typography and stationery in harmony", descFr: "Logo, couleurs, typographie et papeterie" },
    { cat: 'Art', concept: true, img: CONCEPT_IMGS.art2,
      titleAr: "هوية علامة دافئة", titleEn: "Warm Brand Identity", titleFr: "Identité de marque chaleureuse",
      descAr: "هوية بألوان دافئة لعلامة تجارية عصرية", descEn: "A warm-toned identity for a modern brand", descFr: "Identité aux tons chauds pour une marque moderne" },
    { cat: 'Digital', concept: true, img: CONCEPT_IMGS.digital1,
      titleAr: "موقع شركة عصري", titleEn: "Modern Company Website", titleFr: "Site d’entreprise moderne",
      descAr: "واجهة موقع نظيفة سريعة ومتجاوبة", descEn: "A clean, fast and responsive website interface", descFr: "Interface de site propre, rapide et responsive" },
    { cat: 'Digital', concept: true, img: CONCEPT_IMGS.digital2,
      titleAr: "صفحة هبوط لمنتج", titleEn: "Product Landing Page", titleFr: "Page d’atterrissage produit",
      descAr: "صفحة هبوط مصممة لرفع التحويل", descEn: "A landing page designed to lift conversions", descFr: "Page conçue pour augmenter les conversions" },
    { cat: 'Print', concept: true, img: CONCEPT_IMGS.print1,
      titleAr: "علبة تغليف فاخرة", titleEn: "Luxury Packaging Box", titleFr: "Boîte d’emballage de luxe",
      descAr: "علبة منتج وبطاقات أعمال بطباعة راقية", descEn: "Product box and business cards with premium print", descFr: "Boîte produit et cartes de visite haut de gamme" },
    { cat: 'Print', concept: true, img: CONCEPT_IMGS.print2,
      titleAr: "تغليف بلمسة دافئة", titleEn: "Warm-Toned Packaging", titleFr: "Emballage aux tons chauds",
      descAr: "تغليف بهوية دافئة وطباعة عالية الجودة", descEn: "Warm-toned packaging with high-quality print", descFr: "Emballage chaleureux, impression de qualité" }
];

let portfolioFilter = 'all';

function langKey() { return currentLang === 'ar' ? 'Ar' : (currentLang === 'en' ? 'En' : 'Fr'); }

function setPortfolioFilter(cat) {
    portfolioFilter = cat;
    renderPortfolio();
}

function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    const L = langKey();
    const emptyText = { Ar: 'يُضاف مشروع قريبًا', En: 'Project coming soon', Fr: 'Projet à venir' }[L];
    const conceptLbl = { Ar: 'تصور تصميمي', En: 'Design concept', Fr: 'Concept' }[L];

    document.querySelectorAll('.filter-chip').forEach(c =>
        c.classList.toggle('active', c.getAttribute('data-cat') === portfolioFilter));

    grid.innerHTML = '';
    portfolioData.forEach((p, i) => {
        if (portfolioFilter !== 'all' && p.cat !== portfolioFilter) return;
        const cat = servicesData[p.cat];
        const badge = cat ? cat['title' + L] : p.cat;
        const media = p.img
            ? `<img src="${p.img}" alt="${p['title' + L]}" loading="lazy">`
            : `<div class="p-empty"><img src="logo-mark.png" alt="" class="light-only"><img src="logo-mark-dark.png" alt="" class="dark-only"><span>${emptyText}</span></div>`;
        const card = document.createElement('div');
        card.className = 'portfolio-card' + (p.img ? '' : ' is-empty');
        if (p.img) card.onclick = () => openPortfolioItem(i);
        card.innerHTML = `
            <div class="p-card-img-wrap">${media}<span class="p-badge">${badge}</span>${p.concept ? `<span class="concept-pill">${conceptLbl}</span>` : ''}</div>
            <div class="p-card-content"><h3>${p['title' + L]}</h3><p>${p['desc' + L]}</p></div>`;
        grid.appendChild(card);
    });
}

// ==========================================
// الوضع الصباحي / الليلي (يُحفظ اختيار الزائر)
// ==========================================
function toggleTheme() {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
}

let currentCategory = null;
let currentLang = 'ar';

function toggleLangMenu(event) {
    event.stopPropagation();
    document.querySelector('.lang-selector').classList.toggle('open');
}

document.addEventListener('click', function() {
    const selector = document.querySelector('.lang-selector');
    if (selector && selector.classList.contains('open')) {
        selector.classList.remove('open');
    }
});

function selectLanguage(lang) {
    if (currentLang === lang) return;
    currentLang = lang;

    const langNames = { 'ar': 'العربية', 'en': 'English', 'fr': 'Français' };
    document.getElementById('currentLangText').innerText = langNames[lang];

    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    document.querySelectorAll('[data-ar]').forEach(el => {
        if (currentLang === 'ar') el.innerText = el.getAttribute('data-ar');
        else if (currentLang === 'en') el.innerText = el.getAttribute('data-en');
        else if (currentLang === 'fr') el.innerText = el.getAttribute('data-fr');
    });

    document.querySelectorAll('[data-ar-placeholder]').forEach(input => {
        if (currentLang === 'ar') input.placeholder = input.getAttribute('data-ar-placeholder');
        else if (currentLang === 'en') input.placeholder = input.getAttribute('data-en-placeholder');
        else if (currentLang === 'fr') input.placeholder = input.getAttribute('data-fr-placeholder');
    });

    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', currentLang);
    document.title = { ar: 'Normal Agency | وكالة نورمال الإبداعية', en: 'Normal Agency | Creative Digital Agency', fr: 'Normal Agency | Agence créative' }[currentLang];
    document.querySelectorAll('.modal-lang-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === currentLang));
    try { localStorage.setItem('lang', currentLang); } catch (e) {}

    if (document.getElementById('modal').style.display === 'flex' && currentCategory) {
        openModal(currentCategory);
    }

    renderTestimonials();
    renderPortfolio();
    renderMarquee();
}

function openModal(category) {
    currentCategory = category;
    const data = servicesData[category];
    if (!data) return;

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImg = document.getElementById('modalWorkSample');
    const container = document.getElementById('subServicesContainer');
    
    modalTitle.innerText = currentLang === 'ar' ? data.titleAr : (currentLang === 'en' ? data.titleEn : data.titleFr);
    const sample = portfolioData.find(p => p.cat === category && p.img);
    const sampleBox = modalImg.parentElement;
    if (sample) { modalImg.src = sample.img; sampleBox.style.display = 'block'; }
    else { modalImg.removeAttribute('src'); sampleBox.style.display = 'none'; }

    container.innerHTML = '';
    data.items.forEach(item => {
        const btn = document.createElement('div');
        btn.className = 'sub-service-item';
        
        let itemName = item.ar;
        let priceTag = `(تبدأ من ${item.price} ر.س)`;
        
        if (currentLang === 'en') {
            itemName = item.en;
            priceTag = `(From ${item.price} SAR)`;
        } else if (currentLang === 'fr') {
            itemName = item.fr || item.en;
            priceTag = `(À partir de ${item.price} SAR)`;
        }
        
        btn.innerHTML = `<span>${itemName}</span><span class="service-price-tag">${priceTag}</span>`;
        
        btn.onclick = function() {
            document.querySelectorAll('.sub-service-item').forEach(el => el.classList.remove('selected-item'));
            btn.classList.add('selected-item');
            document.getElementById('serviceName').value = `${itemName} - [${priceTag}]`;
        };

        container.appendChild(btn);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('requestForm').reset();
}

// فتح مشروع من المعرض (يدعم العربية والإنجليزية والفرنسية)
function openPortfolioItem(index) {
    const p = portfolioData[index];
    const lightbox = document.getElementById('portfolioLightbox');
    if (!p || !p.img || !lightbox) return;
    const L = langKey();
    document.getElementById('lightboxImg').src = p.img;
    document.getElementById('lightboxTitle').innerText = p['title' + L];
    document.getElementById('lightboxDesc').innerText = p['desc' + L];
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePortfolioLightbox(event) {
    const lightbox = document.getElementById('portfolioLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// عرض تقييمات العملاء — يعيد الرسم عند تبديل اللغة
function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    const section = document.getElementById('testimonials-section');
    if (section) section.style.display = testimonialsData.length ? '' : 'none';

    grid.innerHTML = '';
    testimonialsData.forEach(t => {
        const name = currentLang === 'ar' ? t.nameAr : (currentLang === 'en' ? t.nameEn : t.nameFr);
        const role = currentLang === 'ar' ? t.roleAr : (currentLang === 'en' ? t.roleEn : t.roleFr);
        const text = currentLang === 'ar' ? t.textAr : (currentLang === 'en' ? t.textEn : t.textFr);
        const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        const sampleLbl = { Ar: 'مثال توضيحي', En: 'Sample', Fr: 'Exemple' }[langKey()];

        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-stars">${stars}${t.sample ? `<em class="sample-pill">${sampleLbl}</em>` : ''}</div>
            <p class="testimonial-text">"${text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${name.charAt(0)}</div>
                <div>
                    <div class="testimonial-name">${name}</div>
                    ${role ? `<div class="testimonial-role">${role}</div>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function sendViaWhatsApp() {
    const service = document.getElementById('serviceName').value;
    const name = document.getElementById('clientName').value || (currentLang === 'ar' ? 'عميل جديد' : 'New Client');
    const details = document.getElementById('orderDetails').value;

    if (!service) {
        alert(currentLang === 'ar' ? 'يرجى اختيار إحدى الخدمات الفرعية أولاً' : (currentLang === 'en' ? 'Please select a sub-service first' : 'Veuillez d\'abord sélectionner un service'));
        return;
    }

    const phoneNumber = "966543262920";
    const message = `مرحباً وكالة نورمال 👋%0A%0A*طلب خدمة جديد / New Order:*%0A• *الخدمة والسعر:* ${encodeURIComponent(service)}%0A• *الاسم:* ${encodeURIComponent(name)}%0A• *التفاصيل:* ${encodeURIComponent(details)}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    try { const sl = localStorage.getItem('lang'); if (sl && sl !== 'ar') selectLanguage(sl); } catch (e) {}
    renderMarquee();
    renderPortfolio();
    renderTestimonials();
    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});

// شريط أسماء الأقسام المتحرك
function renderMarquee() {
    const t = document.getElementById('marqueeTrack');
    if (!t) return;
    const L = langKey();
    const names = Object.values(servicesData).map(d => d['title' + L]);
    let out = '';
    for (let half = 0; half < 2; half++)
        for (let k = 0; k < 3; k++)
            names.forEach(n => out += `<span class="mq-item"><img src="logo-mark.png" alt="" class="light-only"><img src="logo-mark-dark.png" alt="" class="dark-only">${n}</span>`);
    t.innerHTML = out;
}

// توهج البطاقات يتبع المؤشر + شريط تقدم التمرير
document.addEventListener('mousemove', function(e) {
    const el = e.target.closest && e.target.closest('.card, .portfolio-card, .testimonial-card');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
});
window.addEventListener('scroll', function() {
    const bar = document.getElementById('scrollProgress');
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar && max > 0) bar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });

// ==========================================
// شاركنا رأيك — يصلك الرأي على بريدك (Formspree) وأنت تقرر إضافته أو لا
// ==========================================
function openReviewModal() { document.getElementById('reviewMsg').innerText = ''; document.getElementById('reviewModal').style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function closeReviewModal() { document.getElementById('reviewModal').style.display = 'none'; document.body.style.overflow = 'auto'; }
async function submitReview(e) {
    e.preventDefault();
    const f = e.target, msg = document.getElementById('reviewMsg'), L = currentLang;
    const t = { ar: ['جارٍ الإرسال...', 'شكرًا لك! سيظهر رأيك بعد مراجعته.', 'تعذّر الإرسال، حاول مرة أخرى.'], en: ['Sending...', 'Thank you! Your review will appear after it is reviewed.', 'Could not send, please try again.'], fr: ['Envoi...', 'Merci ! Votre avis apparaîtra après vérification.', 'Échec de l’envoi, réessayez.'] }[L];
    msg.innerText = t[0];
    try {
        const res = await fetch('https://formspree.io/f/xykvqjek', { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ Type: 'Customer review', Name: f.rName.value, Role: f.rRole.value, Rating: f.rRating.value, Comment: f.rComment.value }) });
        if (!res.ok) throw new Error('bad');
        msg.innerText = t[1]; f.reset(); setTimeout(closeReviewModal, 2600);
    } catch (err) { msg.innerText = t[2]; }
}
