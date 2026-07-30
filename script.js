const servicesData = {
    'Digital': {
        titleAr: 'نورمال ديجيتال',
        titleEn: 'Normal Digital',
        titleFr: 'Normal Digital',
        sampleImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        items: [
            { ar: 'إدارة حسابات التواصل', en: 'Social Media Mgmt', price: '650' },
            { ar: 'إطلاق الحملات الإعلانية', en: 'Ad Campaigns', price: '250' },
            { ar: 'كتابة المحتوى والسيناريو', en: 'Content & Scriptwriting', price: '75' },
            { ar: 'إنشاء المواقع والمتاجر', en: 'Web & Store Dev', price: '490' },
            { ar: 'تحسين محركات البحث SEO', en: 'SEO Optimization', price: '350' },
            { ar: 'استراتيجية التسويق الرقمي', en: 'Marketing Strategy', price: '400' },
            { ar: 'تحليل البيانات والتقارير', en: 'Analytics & Reports', price: '200' },
            { ar: 'التسويق عبر البريد', en: 'Email Marketing', price: '150' },
            { ar: 'إدارة حملات المشاهير', en: 'Influencer Campaigns', price: '500' },
            { ar: 'إعادة بناء الهوية الرقمية', en: 'Rebranding Strategy', price: '450' },
            { ar: 'استشارات تسويقية', en: 'Marketing Consultation', price: '150' },
            { ar: 'إدارة سمعة العلامة التجارية', en: 'Reputation Mgmt', price: '300' },
            { ar: 'ربط البوابات والأدوات', en: 'API Integration', price: '250' },
            { ar: 'إدارة الحملات التفاعلية', en: 'Interactive Campaigns', price: '300' },
            { ar: 'إعداد خطط نشر المحتوى', en: 'Content Calendar', price: '120' }
        ]
    },
    'Studio': {
        titleAr: 'نورمال ستوديو',
        titleEn: 'Normal Studio',
        titleFr: 'Normal Studio',
        sampleImg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
        items: [
            { ar: 'مونتاج وتعديل الفيديو', en: 'Video Editing', price: '120' },
            { ar: 'تصحيح وتدرج الألوان', en: 'Color Grading', price: '90' },
            { ar: 'إنتاج فيديو إعلاني كامل', en: 'Commercial Video', price: '390' },
            { ar: 'المؤثرات البصرية Visual Effects', en: 'Visual Effects (VFX)', price: '180' },
            { ar: 'تصوير منتجات ميداني', en: 'Product Photography', price: '350' },
            { ar: 'المونتاج السينمائي', en: 'Cinematic Editing', price: '250' },
            { ar: 'المؤثرات الصوتية والهندسة', en: 'Sound Design', price: '100' },
            { ar: 'تصوير وتسجيل ستوديو', en: 'Studio Recording', price: '400' },
            { ar: 'إنتاج فيديو موشن جرافيك', en: 'Motion Graphics', price: '220' },
            { ar: 'مونتاج الريلز والشورتس', en: 'Reels & Shorts Editing', price: '60' },
            { ar: 'تأجير معدات إضاءة واستوديو', en: 'Studio Rental', price: '300' },
            { ar: 'إخراج كليبات وإعلانات', en: 'Directing Services', price: '600' },
            { ar: 'تغطية الفعاليات والمؤتمرات', en: 'Event Coverage', price: '500' },
            { ar: 'البث المباشر الاحترافي', en: 'Live Streaming', price: '450' },
            { ar: 'معالجة ومكساج الصوت', en: 'Audio Post-Production', price: '120' }
        ]
    },
    'Art': {
        titleAr: 'نورمال آرت',
        titleEn: 'Normal Art',
        titleFr: 'Normal Art',
        sampleImg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
        items: [
            { ar: 'تصميم هوية بصرية كاملة', en: 'Brand Identity', price: '450' },
            { ar: 'تصميم شعار Logo Design', en: 'Logo Design', price: '180' },
            { ar: 'تصاميم السوشيال ميديا', en: 'Social Media Posts', price: '35' },
            { ar: 'تصميم البكجات والتغليف', en: 'Packaging Design', price: '220' },
            { ar: 'تصميم الملف التعريفي Profile', en: 'Company Profile', price: '190' },
            { ar: 'رسم واختيار الشخصيات', en: 'Character Design', price: '250' },
            { ar: 'تصميم العروض التقديمية', en: 'Presentation Pitch', price: '150' },
            { ar: 'تصميم لوحات وإعلانات', en: 'Banner Design', price: '120' },
            { ar: 'تصميم المطبوعات والكتالوجات', en: 'Brochure Design', price: '160' },
            { ar: 'تصميم واجهات المستخدم UI/UX', en: 'UI/UX Design', price: '400' },
            { ar: 'تصميم القوائم والمنيو', en: 'Menu Design', price: '110' },
            { ar: 'تصميم كروت الأعمال', en: 'Business Cards', price: '50' },
            { ar: 'تطوير ودليل العلامة التجارية', en: 'Brand Guidelines', price: '280' },
            { ar: 'تصميم ملصقات واستيكرات', en: 'Sticker Design', price: '40' },
            { ar: 'تعديل ومعالجة الصور', en: 'Photo Retouching', price: '30' }
        ]
    },
    'Print': {
        titleAr: 'نورمال برينت',
        titleEn: 'Normal Print',
        titleFr: 'Normal Print',
        sampleImg: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
        items: [
            { ar: 'طباعة كروت وأوراق رسمية', en: 'Business Cards Print', price: '75' },
            { ar: 'طباعة التغليف والأكياس', en: 'Packaging Printing', price: '190' },
            { ar: 'طباعة الهدايا الدعائية', en: 'Promo Gifts Printing', price: '120' },
            { ar: 'طباعة اللوحات الإعلانية', en: 'Signboards Printing', price: '150' },
            { ar: 'طباعة البروشورات والمنشورات', en: 'Flyers Printing', price: '80' },
            { ar: 'طباعة الكتب والكتالوجات', en: 'Catalog Printing', price: '250' },
            { ar: 'طباعة المنسوجات والزي', en: 'Apparel Printing', price: '140' },
            { ar: 'طباعة الاستيكرات والملصقات', en: 'Stickers Roll', price: '60' },
            { ar: 'طباعة العلب الكرتونية', en: 'Carton Box Printing', price: '220' },
            { ar: 'طباعة الأجنحة والمعارض', en: 'Exhibition Printing', price: '600' },
            { ar: 'طباعة التقاويم والمذكرات', en: 'Diaries Printing', price: '110' },
            { ar: 'طباعة المنيو البلاستيكي', en: 'Menu Board Printing', price: '90' },
            { ar: 'طباعة الأظرف والوسائل', en: 'Envelope Printing', price: '70' },
            { ar: 'طباعة الأوراق الذهبية', en: 'Gold Foil Printing', price: '180' },
            { ar: 'طباعة الأعلام والرولات Roll-up', en: 'Roll-up Banners', price: '130' }
        ]
    }
};

let currentLang = 'ar';

function openModal(category) {
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
        
        const itemName = currentLang === 'ar' ? item.ar : item.en;
        const priceTag = currentLang === 'ar' ? `(تبدأ من ${item.price} ر.س)` : `(From ${item.price} SAR)`;
        
        btn.innerHTML = `<span>${itemName}</span><span class="service-price-tag">${priceTag}</span>`;
        
        btn.onclick = function() {
            document.querySelectorAll('.sub-service-item').forEach(el => el.classList.remove('selected-item'));
            btn.classList.add('selected-item');
            
            document.getElementById('serviceName').value = `${itemName} - [تبدأ من ${item.price} ر.س]`;
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
    const name = document.getElementById('clientName').value || 'عميل جديد';
    const details = document.getElementById('orderDetails').value;

    if (!service) {
        alert(currentLang === 'ar' ? 'يرجى اختيار إحدى الخدمات الفرعية أولاً' : 'Please select a sub-service first');
        return;
    }

    const phoneNumber = "966543262920";
    const message = `مرحباً وكالة نورمال 👋%0A%0A*طلب خدمة جديد:*%0A• *الخدمة والسعر:* ${encodeURIComponent(service)}%0A• *الاسم:* ${encodeURIComponent(name)}%0A• *التفاصيل:* ${encodeURIComponent(details)}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function toggleLanguage() {
    if (currentLang === 'ar') currentLang = 'en';
    else if (currentLang === 'en') currentLang = 'fr';
    else currentLang = 'ar';

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

    document.getElementById('langText').innerText = currentLang === 'ar' ? 'العربية' : (currentLang === 'en' ? 'English' : 'Français');
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}
