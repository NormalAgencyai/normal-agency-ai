// ==========================================
// وكالة نورمال الإبداعية - النظام التفاعلي الكامل
// ==========================================

const servicesData = {
    'Digital': {
        titleAr: 'نورمال ديجيتال',
        titleEn: 'Normal Digital',
        titleFr: 'Normal Digital',
        sampleImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
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
        sampleImg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
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
        sampleImg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
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
        sampleImg: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
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
    }
};

let currentCategory = null;
let currentLang = 'ar';

// ==========================================
// إدارة قائمة اللغات
// ==========================================

function toggleLangMenu(event) {
    event.stopPropagation();
    const selector = document.querySelector('.lang-selector');
    selector.classList.toggle('open');
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

    if (document.getElementById('modal').style.display === 'block' && currentCategory) {
        openModal(currentCategory);
    }
}

// ==========================================
// إدارة النافذة المنبثقة والخدمات
// ==========================================

function openModal(category) {
    currentCategory = category;
    const data = servicesData[category];
    if (!data) return;

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImg = document.getElementById('modalWorkSample');
    const container = document.getElementById('subServicesContainer');
    
    modalTitle.innerText = currentLang === 'ar' ? data.titleAr : (currentLang === 'en' ? data.titleEn : data.titleFr);
    modalImg.src = data.sampleImg;

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

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('requestForm').reset();
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
