// ==========================================
// ملف الأعمال — هنا تُحذف الأعمال أو تُعدَّل أو تُضاف (يمكن أيضًا من لوحة المالك: افتح الموقع بإضافة #owner)
// hidden: true  = إخفاء العمل دون حذفه
// ==========================================
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
    { cat: 'Studio', img: 'images/studio-social.webp', video: 'videos/studio-social.mp4',
      titleAr: "مقطع سوشيال ميديا", titleEn: "Social Media Clip", titleFr: "Clip réseaux sociaux",
      descAr: "مقطع قصير بإيقاع سريع من لقاء ميداني، ويُختم بتوقيع نورمال", descEn: "A short fast-paced clip from a field meeting, closed with the Normal signature", descFr: "Un court clip rythmé d’une réunion de terrain, clôturé par la signature Normal" },
    { cat: 'Office', img: 'images/office-cv.webp',
      titleAr: "سيرة ذاتية احترافية", titleEn: "Professional CV", titleFr: "CV professionnel",
      descAr: "تصميم سيرة ذاتية عصرية بقراءة سريعة وتنظيم واضح", descEn: "A modern CV that is quick to read and clearly organised", descFr: "Un CV moderne, clair et rapide à lire" },
    { cat: 'Office', img: 'images/office-quote.webp',
      titleAr: "عرض سعر للشركات", titleEn: "Corporate Quotation", titleFr: "Devis d’entreprise",
      descAr: "عرض سعر منسّق بجدول بنود وضريبة وشروط واضحة", descEn: "A tidy quotation with itemised table, VAT and clear terms", descFr: "Un devis soigné avec tableau, TVA et conditions" },
    { cat: 'Office', img: 'images/office-ticket.webp',
      titleAr: "نموذج تذكرة وقسيمة", titleEn: "Ticket & Form Template", titleFr: "Modèle de ticket",
      descAr: "تذكرة بجزء قابل للفصل ورمز QR لخدمة صف السيارات", descEn: "A tear-off ticket with QR code for a valet service", descFr: "Un ticket détachable avec code QR pour service voiturier" },
    { cat: 'Office', img: 'images/office-letter.webp',
      titleAr: "خطاب رسمي بترويسة فاخرة", titleEn: "Premium Letterhead", titleFr: "Lettre à en-tête premium",
      descAr: "خطاب إداري رسمي بترويسة وتوقيع وتذييل أنيق", descEn: "An official letter with elegant letterhead, signature and footer", descFr: "Une lettre officielle avec en-tête, signature et pied de page élégants" },
    { cat: 'Art', img: 'images/art-logos.webp',
      titleAr: "عرض مقترحات الشعار", titleEn: "Logo Concepts Presentation", titleFr: "Présentation de logos",
      descAr: "ثلاثة مقترحات لشعار واحد بشرح فكرة كل مقترح", descEn: "Three logo directions for one brand, each with its idea", descFr: "Trois pistes de logo pour une même marque" },
    { cat: 'Art', img: 'images/art-identity.webp',
      titleAr: "لوحة الهوية البصرية", titleEn: "Brand Identity Board", titleFr: "Planche d’identité visuelle",
      descAr: "الشعار والألوان والخط في لوحة هوية متكاملة", descEn: "Logo, colours and typography in one complete identity board", descFr: "Logo, couleurs et typographie dans une planche complète" },
    { cat: 'Print', img: 'images/print-cards.webp',
      titleAr: "كروت أعمال فاخرة", titleEn: "Luxury Business Cards", titleFr: "Cartes de visite de luxe",
      descAr: "كرت أسود بطباعة ذهبية وكرت عاجي متناسقان", descEn: "A black gold-foil card with a matching ivory card", descFr: "Une carte noire dorée et une carte ivoire assortie" },
    { cat: 'Print', img: 'images/print-id.webp',
      titleAr: "بطاقات موظفين", titleEn: "Staff ID Cards", titleFr: "Badges employés",
      descAr: "بطاقة هوية بوجهين بتصميم فاخر ورمز QR", descEn: "A two-sided staff ID with a premium look and QR code", descFr: "Un badge employé recto-verso au look premium avec QR" },
    { cat: 'Studio', img: 'images/studio-burger.webp', video: 'videos/studio-burger.mp4',
      titleAr: "فيديو تسويقي لمطعم برجر", titleEn: "Burger Restaurant Promo Video", titleFr: "Vidéo promo d’un restaurant de burgers",
      descAr: "لقطات تحضير البرجر والمقليات بتلوين دافئ يبرز شهية الطعام، بعرض عمودي", descEn: "Burger and fries preparation with a warm grade that brings out the food, in vertical format", descFr: "Préparation de burgers et frites avec un étalonnage chaud qui met en valeur les plats, format vertical" },
    { cat: 'Studio', img: 'images/studio-cafe.webp', video: 'videos/studio-cafe.mp4',
      titleAr: "فيديو تسويقي لمقهى", titleEn: "Café Promo Video", titleFr: "Vidéo promo d’un café",
      descAr: "لقطات تحضير القهوة وأجواء المقهى بتلوين سينمائي هادئ، بعرض عمودي", descEn: "Coffee preparation and café atmosphere with a soft cinematic grade, in vertical format", descFr: "Préparation du café et ambiance du lieu, étalonnage cinéma doux, format vertical" },
    { cat: 'Studio', img: 'images/studio-cinematic-promo.webp', video: 'videos/studio-cinematic-promo.mp4',
      titleAr: "فيديو إعلاني سينمائي", titleEn: "Cinematic Promo Video", titleFr: "Vidéo promo cinématographique",
      descAr: "تلوين سينمائي فاخر: دفء في الإضاءة وحواف داكنة وحبيبات فيلم، بعرض عمودي", descEn: "A luxury cinematic grade: warm light, dark vignette and film grain, in vertical format", descFr: "Un étalonnage cinéma luxueux : lumière chaude, vignettage et grain, au format vertical" },
    { cat: 'Studio', img: 'images/studio-cinematic.webp', video: 'videos/studio-cinematic.mp4',
      titleAr: "فيديو سينمائي", titleEn: "Cinematic Film", titleFr: "Film cinématographique",
      descAr: "مشاهد ليلية بتدرج ألوان دافئ ولقطات سينمائية وترجمة مدمجة", descEn: "Night scenes with warm colour grading, cinematic shots and built-in subtitles", descFr: "Scènes de nuit à l’étalonnage chaud, plans cinématographiques et sous-titres intégrés" },
    { cat: 'Studio', img: 'images/studio-promo.webp', video: 'videos/studio-promo.mp4',
      titleAr: "فيديو إعلاني لفعالية", titleEn: "Event Promo Video", titleFr: "Vidéo promotionnelle d’événement",
      descAr: "مونتاج إعلاني بإيقاع سريع يعرض أجواء الحدث، بعرض عمودي مناسب للجوال", descEn: "A fast-paced promo edit showing the event atmosphere, in vertical format for mobile", descFr: "Un montage promo rythmé de l’événement, au format vertical pour mobile" },
    { cat: 'Digital', img: 'images/digital-site-home.webp',
      titleAr: "موقع شركة لوجستية عصري", titleEn: "Modern Logistics Company Website", titleFr: "Site moderne d’entreprise logistique",
      descAr: "واجهة رئيسية بتصميم داكن عصري وتتبع شحنات، تعمل على الكمبيوتر والجوال", descEn: "A modern dark homepage with shipment tracking, responsive on desktop and mobile", descFr: "Une page d’accueil sombre et moderne avec suivi d’expédition, responsive" },
    { cat: 'Digital', img: 'images/digital-site-pages.webp',
      titleAr: "صفحات الخدمات وتتبع الشحنات", titleEn: "Services & Shipment Tracking Pages", titleFr: "Pages services et suivi d’expédition",
      descAr: "صفحة خدمات بشبكة بطاقات وصفحة تتبع بخريطة ومراحل الشحنة", descEn: "A services page with a card grid and a tracking page with map and shipment stages", descFr: "Une page services en grille et une page de suivi avec carte et étapes" }
];
