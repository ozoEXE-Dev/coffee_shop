/**
 * Bun & Brew — بُن وبرو | Cairo, Egypt
 * Interactive Client Logic & Bilingual Localization (English & Egyptian Arabic)
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Translations Dictionary (English & Natural Egyptian Colloquial Arabic)
  // ---------------------------------------------------------------------------
  const translations = {
    en: {
      // Document & Meta
      page_title: "Bun & Brew — بُن وبرو | Specialty Coffee & Bakery, Cairo",
      lang_toggle_text: "العربية",
      lang_toggle_aria: "Switch to Egyptian Arabic language",

      // Brand
      brand_name: "Bun & Brew",
      brand_sub: "Specialty Coffee • Cairo",

      // Navigation
      nav_home: "Home",
      nav_about: "Our Story",
      nav_menu: "Menu",
      nav_gallery: "Gallery",
      nav_testimonials: "Reviews",

      // Hero
      hero_badge: "Specialty Coffee Sanctuary • Zamalek, Cairo",
      hero_title: "Your daily pause, perfectly brewed.",
      hero_subtitle: "From single-origin beans roasted to perfection to warm artisan pastries baked fresh every morning. Welcome to your cozy neighborhood sanctuary in the heart of Cairo.",
      hero_btn_menu: "Explore Menu",
      hero_btn_about: "Our Story",
      hero_feature_1: "Ethically Sourced Beans",
      hero_feature_2: "Fresh Daily Pastries",
      hero_feature_3: "Peaceful Cairo Vibes",

      // About
      about_tag: "Who We Are",
      about_title: "A Cozy Corner Built on Passion & Honest Hospitality",
      about_lead: "Founded on the quiet, leafy streets of Zamalek, Bun & Brew started with one simple purpose: creating a warm sanctuary where exquisite specialty coffee meets genuine Egyptian warmth.",
      about_highlight_1_title: "Carefully Selected Beans",
      about_highlight_1_desc: "Directly traded 100% Arabica beans from Ethiopia, Colombia, and Yemen, roasted locally with delicate flavor profiles.",
      about_highlight_2_title: "Freshly Baked Pastries",
      about_highlight_2_desc: "Artisan sourdough croissants, warm brownies, and delicate cakes handcrafted in-house before sunrise every day.",
      about_highlight_3_title: "Cozy & Relaxing Atmosphere",
      about_highlight_3_desc: "A calm haven with soft lighting, warm oak tones, quiet playlists, and super-fast Wi-Fi designed for focus or connection.",
      about_badge_title: "14 Brazil St, Zamalek",
      about_badge_sub: "Daily 7:30 AM – 11:30 PM",

      // Menu
      menu_tag: "Crafted With Care",
      menu_title: "Our Handcrafted Menu",
      menu_desc: "Explore our balanced espresso bar, refreshing cold brews, and fresh morning bakery in Egyptian pounds.",
      filter_all: "All",
      filter_coffee: "Coffee",
      filter_cold: "Cold Drinks",
      filter_desserts: "Desserts",
      badge_bestseller: "Bestseller",
      order_btn: "Order at Counter",
      currency: "EGP",

      // Menu Items
      item_espresso_name: "Espresso",
      item_espresso_desc: "Rich double shot with a golden crema and deep notes of roasted hazelnut and dark chocolate.",
      item_spanish_name: "Spanish Latte",
      item_spanish_desc: "Velvety espresso harmonized with lightly sweetened condensed milk and micro-textured froth.",
      item_cappuccino_name: "Cappuccino",
      item_cappuccino_desc: "Equal balance of rich espresso, sweet steamed milk, and a dense cloud of dusted cocoa foam.",
      item_flatwhite_name: "Flat White",
      item_flatwhite_desc: "Double ristretto enveloped in glossy microfoam for a punchy, velvety coffee kick.",
      item_coldbrew_name: "Cold Brew",
      item_coldbrew_desc: "Steeped cold for 18 hours. Ultra-smooth, naturally sweet with low acidity and chocolate undertones.",
      item_icedlatte_name: "Iced Latte",
      item_icedlatte_desc: "Chilled espresso poured over ice and fresh cold whole milk with optional Madagascar vanilla.",
      item_karkadeh_name: "Karkadeh Sparkler",
      item_karkadeh_desc: "Signature cold-brewed Aswan organic hibiscus infused with fresh mint and sparkling soda.",
      item_brownie_name: "Chocolate Fudge Brownie",
      item_brownie_desc: "Warm Belgian dark chocolate brownie with crackled crust, molten center, and flaky sea salt.",
      item_croissant_name: "Salted Caramel Croissant",
      item_croissant_desc: "Flaky French butter layers filled with house caramel and topped with toasted pecans.",
      item_cheesecake_name: "Pistachio Basque Cheesecake",
      item_cheesecake_desc: "Caramelized burnt Basque cheesecake with a custard center, draped in Sicilian pistachio cream.",

      // Gallery
      gallery_tag: "Atmosphere & Moments",
      gallery_title: "Moments at Bun & Brew",
      gallery_desc: "A small glimpse into our daily ritual, morning bakes, and peaceful café corners.",
      gallery_1_title: "Latte Art Perfection",
      gallery_1_sub: "Every pour crafted with care",
      gallery_2_title: "Cozy Zamalek Seating",
      gallery_2_sub: "Natural sunlight & warm oak",
      gallery_3_title: "Fresh Morning Bakery",
      gallery_3_sub: "Baked daily before sunrise",
      gallery_4_title: "Artisanal Pour-Over",
      gallery_4_sub: "Single-origin pour at bar",
      gallery_5_title: "Work & Conversation",
      gallery_5_sub: "Your peaceful neighborhood hub",
      gallery_6_title: "Refreshing Cold Brews",
      gallery_6_sub: "Slow-dripped for 18 hours",

      // Testimonials
      testimonials_tag: "Guest Love",
      testimonials_title: "What Our Guests Say",
      testimonials_desc: "Real feedback from our wonderful community of coffee lovers in Cairo.",
      review_1_text: "\"Bun & Brew is my go-to morning spot before heading to the studio. The Spanish Latte is by far the best in Cairo, and the natural sunlight makes it an incredible place to sketch and think.\"",
      review_1_author: "Karim El-Masry",
      review_1_role: "Architect • Zamalek Resident",
      review_2_text: "\"The warm chocolate brownie paired with their 18-hour cold brew is pure therapy! The staff remembers your regular order and the cozy jazz soundtrack never disappoints.\"",
      review_2_author: "Nourhan Adel",
      review_2_role: "Content Creator • Maadi",
      review_3_text: "\"As a specialty coffee purist, their pour-over single-origin beans and espresso extraction are consistently dialed in. Truly world-class quality with genuine Egyptian warmth.\"",
      review_3_author: "Youssef Mansour",
      review_3_role: "Coffee Roaster & Enthusiast • Heliopolis",

      // Footer
      footer_tagline: "Your daily pause, perfectly brewed. Serving Cairo's finest specialty beans and artisan bakes with true warmth.",
      footer_links_title: "Quick Links",
      footer_hours_title: "Opening Hours",
      footer_hours_text: "Monday – Sunday: 7:30 AM – 11:30 PM",
      footer_hours_sub: "Kitchen & Bakery open all day",
      footer_contact_title: "Visit Us in Cairo",
      footer_address: "14 Brazil Street, Zamalek, Cairo, Egypt",
      footer_phone: "+20 2 2735 9840",
      footer_whatsapp: "+20 102 345 6789",
      footer_email: "salam@bunandbrewcairo.com",
      footer_disclaimer: "Fictional showcase café crafted for developer portfolio.",
      footer_copyright: "© 2026 Bun & Brew Cairo. All rights reserved.",

      // Feedback Toast
      toast_order: "Order placed at counter! Pick up in 5–8 minutes at the bar.",
      toast_copied: "Contact details copied to clipboard!"
    },

    'ar-EG': {
      // Document & Meta
      page_title: "بُن وبرو — قهوة مختصة ومخبوزات طازجة | القاهرة",
      lang_toggle_text: "English",
      lang_toggle_aria: "التحويل للغة الإنجليزية",

      // Brand
      brand_name: "بُن وبرو",
      brand_sub: "قهوة مختصة • القاهرة",

      // Navigation
      nav_home: "الرئيسية",
      nav_about: "حكايتنا",
      nav_menu: "المنيو",
      nav_gallery: "صور من عندنا",
      nav_testimonials: "رأي الناس فينا",

      // Hero
      hero_badge: "ركن القهوة الرايقة • الزمالك، القاهرة",
      hero_title: "خد بريك… وقهوتك علينا نروّقها.",
      hero_subtitle: "من أحلى حبوب بن متحمص على أصوله، لمخبوزات طازة لسه خارجة من الفرن. بنرحب بيك في مكانك الرايق بقلب الزمالك، قهوتك ومزاجك هنا في أمان.",
      hero_btn_menu: "شوف المنيو",
      hero_btn_about: "اعرف حكايتنا",
      hero_feature_1: "بن فاخر مختار بعناية",
      hero_feature_2: "مخبوزات فريش كل صباح",
      hero_feature_3: "أجواء قاهرية هادية ومريحة",

      // About
      about_tag: "مين إحنا",
      about_title: "ركن دافي اتبنى بالحب، والقهوة المظبوطة، وكرم الضيافة",
      about_lead: "بدأنا في شوارع الزمالك الهادية بشغف واضح: نخلق مكان يجمع بين فنجان القهوة اللي يعدل المزاج واللمة الحلوة، مكان تحس فيه إنك قاعد في بيتك وسط ناسك.",
      about_highlight_1_title: "حبوب بن مختارة بعناية",
      about_highlight_1_desc: "أرابيكا ١٠٠٪ بتجارة عادلة من إثيوبيا وكولومبيا واليمن، متحمصة هنا في مصر ببروفايلات نكهة متوازنة وغنية.",
      about_highlight_2_title: "مخبوزات طازة يومياً",
      about_highlight_2_desc: "كرواسون زبدة فرنسي مورق، فادج براونيز، وتشيز كيك بيتعملوا بحب في مخبزنا من الفجر كل يوم.",
      about_highlight_3_title: "قعدة رايقة ومريحة",
      about_highlight_3_desc: "إضاءة دافية، مزيكا رايقة، مقاعد مريحة وواي فاي فائق السرعة عشان تشتغل أو تقرأ كتابك بروقان.",
      about_badge_title: "١٤ شارع البرازيل، الزمالك",
      about_badge_sub: "يومياً ٧:٣٠ ص – ١١:٣٠ م",

      // Menu
      menu_tag: "معمول بحب",
      menu_title: "منيو المشروبات والحلويات",
      menu_desc: "استمتع بمجموعتنا من الإسبريسو المركز، المشروبات الباردة المنعشة، والحلويات الطازة بالجنيه المصري.",
      filter_all: "الكل",
      filter_coffee: "قهوة ساخنة",
      filter_cold: "مشروبات باردة",
      filter_desserts: "حلويات ومخبوزات",
      badge_bestseller: "الأكثر طلباً",
      order_btn: "اطلب من الكاونتر",
      currency: "ج.م",

      // Menu Items
      item_espresso_name: "إسبريسو",
      item_espresso_desc: "دبل شوت مركز بكريمة دهبية غنية ونكهات شوكولاتة داكنة وبندق محمص.",
      item_spanish_name: "سبانش لاتيه",
      item_spanish_desc: "إسبريسو ناعم متجانس مع الحليب المكثف المحلى وفوم كريمي مظبوط بالسنتي.",
      item_cappuccino_name: "كابتشينو",
      item_cappuccino_desc: "توازن مثالي بين الإسبريسو المركز، الحليب الساخن، ورغوة ناعمة مع رشة كاكاو.",
      item_flatwhite_name: "فلات وايت",
      item_flatwhite_desc: "دبل ريستريتو مركز مع طبقة ناعمة جداً من الميكروفوم لأصحاب المزاج العالي.",
      item_coldbrew_name: "كولد برو",
      item_coldbrew_desc: "منقوع على البارد لمدة ١٨ ساعة لطعم فائق النعومة، حموضة خفيفة، وانتعاش مضمون.",
      item_icedlatte_name: "آيس لاتيه",
      item_icedlatte_desc: "إسبريسو طازة مع حليب بارد وقطع تلج ينعشك في حر الصيف مع نكهة فانيليا اختيارية.",
      item_karkadeh_name: "كركديه سباركلر",
      item_karkadeh_desc: "كركديه أسواني عضوي مثلج مع لمسة نعناع طازة وصودا فوّارة منعشة لآخر رشفة.",
      item_brownie_name: "فادج براوني شوكولاتة",
      item_brownie_desc: "فادج براوني شوكولاتة بلجيكي سخن بحواف مقرمشة وقلب دايب ورشة ملح بحري.",
      item_croissant_name: "كرواسون كراميل مملح",
      item_croissant_desc: "كرواسون زبدة فرنسي هش ومورق، محشو كراميل مملح محضر عندنا وقطع بيكان محمصة.",
      item_cheesecake_name: "تشيز كيك باسكي بالفستق",
      item_cheesecake_desc: "تشيز كيك باسكي محروق بقلب كريمي ودايب، متغطي بصوص فستق صقلي فاخر.",

      // Gallery
      gallery_tag: "أجواء وتفاصيل",
      gallery_title: "صور من عندنا",
      gallery_desc: "لقطات بسيطة من يومنا، ريحة القهوة الصبح، وركننا الدافي في الزمالك.",
      gallery_1_title: "فن اللاتيه أرت",
      gallery_1_sub: "كل فنجان مرسوم بعناية",
      gallery_2_title: "ركن الجلوس الهادي",
      gallery_2_sub: "شمس الزمالك وخشب دافي",
      gallery_3_title: "مخبوزات الصباح الفريش",
      gallery_3_sub: "بتخرج من الفرن من الفجر",
      gallery_4_title: "تقطير يدوي مختص",
      gallery_4_sub: "قهوة بفلتر على أصولها",
      gallery_5_title: "شغل ولمّة صحاب",
      gallery_5_sub: "مكانك المفضل للتركيز والروقان",
      gallery_6_title: "كولد برو مثلج",
      gallery_6_sub: "تقطير بطيء لمدة ١٨ ساعة",

      // Testimonials
      testimonials_tag: "رأي الناس فينا",
      testimonials_title: "كلام من القلب من زبايننا",
      testimonials_desc: "آراء حقيقية من عشاق القهوة والروقان في القاهرة.",
      review_1_text: "\"مكان مريح للأعصاب بجد. أحسن سبانش لاتيه شربته في الزمالك، والقعدة الصبح هادية ورايقة جداً وبتديك طاقة للشغل والتركيز طول اليوم. الشباب هناك محترمين وبشوشين.\"",
      review_1_author: "كريم المصري",
      review_1_role: "مهندس معماري • من سكان الزمالك",
      review_2_text: "\"البراوني السخنة مع الكولد برو عندهم دي اختراع يعدل المزاج فوراً! المزيكا رايقة، والتكييف ممتاز، وبحس إني قاعدة في بيتي التاني. مستحيل أعدي من الزمالك ومادخلش عندهم.\"",
      review_2_author: "نورهان عادل",
      review_2_role: "صانعة محتوى • المعادي",
      review_3_text: "\"أنا مهووس قهوة مختصة، وبصراحة استخلاص الإسبريسو هنا مظبوط بالملي، وحبوب البن فريش وممتازة. تجربة قهوة عالمية بروح مصرية أصيلة وبأسعار معقولة جداً.\"",
      review_3_author: "يوسف منصور",
      review_3_role: "محمص ومتذوق قهوة • مصر الجديدة",

      // Footer
      footer_tagline: "خد بريك… وقهوتك علينا نروّقها. بنقدم أحسن بن مختص ومخبوزات طازة يومياً بكل حب.",
      footer_links_title: "روابط سريعة",
      footer_hours_title: "مواعيد العمل",
      footer_hours_text: "من الإثنين للأحد: ٧:٣٠ صباحاً – ١١:٣٠ مساءً",
      footer_hours_sub: "المطبخ والمخبز شغالين طول اليوم",
      footer_contact_title: "زورنا في القاهرة",
      footer_address: "١٤ شارع البرازيل، الزمالك، القاهرة، مصر",
      footer_phone: "+20 2 2735 9840",
      footer_whatsapp: "+20 102 345 6789",
      footer_email: "salam@bunandbrewcairo.com",
      footer_disclaimer: "مشروع تجريبي افتراضي لمعرض أعمال مطور الويب.",
      footer_copyright: "© ٢٠٢٦ بُن وبرو القاهرة. جميع الحقوق محفوظة.",

      // Feedback Toast
      toast_order: "تقدر تطلب طلبك من الكاونتر مباشرة! التحضير بياخد ٥-٨ دقائق.",
      toast_copied: "تم نسخ بيانات التواصل بنجاح!"
    }
  };

  // ---------------------------------------------------------------------------
  // 2. State & DOM References
  // ---------------------------------------------------------------------------
  let currentLang = localStorage.getItem('bun_brew_lang') || 'en';
  let activeCategory = 'all';

  const siteHeader = document.querySelector('.site-header');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const mobileLangToggleBtn = document.getElementById('mobileLangToggleBtn');
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastNotice = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');

  // Numbers localization for Arabic
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  function formatPrice(number, lang) {
    if (lang === 'ar-EG') {
      const numStr = number.toString().replace(/\d/g, d => arabicDigits[d]);
      return `${numStr} ${translations['ar-EG'].currency}`;
    }
    return `${translations.en.currency} ${number}`;
  }

  // ---------------------------------------------------------------------------
  // 3. Language Switching Logic
  // ---------------------------------------------------------------------------
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bun_brew_lang', lang);

    const dict = translations[lang] || translations.en;
    const isArabic = lang === 'ar-EG';

    // Update document properties
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('ar', isArabic);
    document.title = dict.page_title;

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update attributes (like alt, aria-label) with data-i18n-attr
    // Format: "alt:key_name,aria-label:key_name"
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrDefs = el.getAttribute('data-i18n-attr').split(',');
      attrDefs.forEach(pair => {
        const [attr, key] = pair.split(':');
        if (attr && key && dict[key.trim()]) {
          el.setAttribute(attr.trim(), dict[key.trim()]);
        }
      });
    });

    // Update Prices with localized numbers and currency
    document.querySelectorAll('.menu-card').forEach(card => {
      const priceVal = card.getAttribute('data-price');
      const priceEl = card.querySelector('.menu-item-price');
      if (priceEl && priceVal) {
        priceEl.textContent = formatPrice(priceVal, lang);
      }
    });

    // Update category pills inside cards
    document.querySelectorAll('.menu-category-pill').forEach(pill => {
      const cat = pill.getAttribute('data-cat');
      if (cat === 'coffee') pill.textContent = isArabic ? 'قهوة' : 'Coffee';
      else if (cat === 'cold') pill.textContent = isArabic ? 'مشروب بارد' : 'Cold Drink';
      else if (cat === 'dessert') pill.textContent = isArabic ? 'حلويات' : 'Dessert';
    });

    // Keep active category filter applied
    filterCategory(activeCategory);
  }

  function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar-EG' : 'en';
    applyLanguage(newLang);
  }

  // ---------------------------------------------------------------------------
  // 4. Menu Filtering Logic (Preserved across language switches)
  // ---------------------------------------------------------------------------
  function filterCategory(category) {
    activeCategory = category;

    // Update filter buttons appearance
    filterButtons.forEach(btn => {
      const cat = btn.getAttribute('data-category');
      const isActive = cat === category;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Show/hide menu cards with smooth opacity
    menuCards.forEach(card => {
      const itemCategory = card.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 5. Mobile Navigation Menu
  // ---------------------------------------------------------------------------
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    menuToggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  // ---------------------------------------------------------------------------
  // 6. Toast Notifications
  // ---------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice || !toastText) return;
    toastText.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3500);
  }

  // ---------------------------------------------------------------------------
  // 7. Scroll & Header Behavior
  // ---------------------------------------------------------------------------
  function handleScroll() {
    const scrollY = window.scrollY;

    // Sticky header shadow
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', scrollY > 20);
    }

    // Back to top visibility
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // Active navigation highlight based on visible section
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentSectionId}`);
      });
      mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentSectionId}`);
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 8. Event Listeners
  // ---------------------------------------------------------------------------
  function attachEvents() {
    // Language toggles
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }
    if (mobileLangToggleBtn) {
      mobileLangToggleBtn.addEventListener('click', () => {
        toggleLanguage();
        closeMobileMenu();
      });
    }

    // Mobile menu toggle
    if (menuToggleBtn) {
      menuToggleBtn.addEventListener('click', toggleMobileMenu);
    }
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu on link click
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu on Escape key
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Filter buttons click
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        filterCategory(cat);
      });
    });

    // Order buttons feedback
    document.querySelectorAll('.order-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const dict = translations[currentLang] || translations.en;
        showToast(dict.toast_order);
      });
    });

    // Scroll listener (throttled)
    let isTicking = false;
    window.addEventListener('scroll', () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isTicking = false;
        });
        isTicking = true;
      }
    });

    // Back to top button
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 9. Initialization
  // ---------------------------------------------------------------------------
  function init() {
    attachEvents();
    applyLanguage(currentLang);
    handleScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
