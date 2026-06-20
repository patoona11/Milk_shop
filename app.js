document.addEventListener('DOMContentLoaded', () => {
  // --- Translations Dictionary ---
  const translations = {
    th: {
      meta_title: "ร้านโนมโสด ปังปิ้งเตาถ่าน (Nom Sod) - ร้านนมสดแท้และขนมปังปิ้งเตาถ่านแสนอร่อย",
      brand_name: "โนมโสด",
      nav_home: "หน้าแรก",
      nav_menu: "เมนูแนะนำ",
      nav_gallery: "บรรยากาศร้าน",
      nav_contact: "ติดต่อเรา",
      nav_order: "สั่งเลย!",
      hero_badge: "✨ คนโสดก็ฟิน คนมีคู่ก็ชอบ ✨",
      hero_title: "โนมโสด <br><span>นมสดแท้ 100%</span><br>ปังปิ้งเตาถ่าน",
      hero_desc: "ดื่มด่ำกับนมสดแท้เกรดพรีเมียมคู่กับขนมปังปิ้งเตาถ่านสูตรดั้งเดิม หอมกรุ่น กรอบนอกนุ่มใน ละมุนลิ้นในบรรยากาศสุดชิคสำหรับสายคอนเทนต์วัยรุ่นและคนโสดแสนดี!",
      hero_btn_menu: "ดูเมนูอร่อย 😋",
      hero_btn_loc: "พิกัดร้าน 📍",
      menu_title: "Signature Menus",
      menu_subtitle: "เมนูแนะนำสุดพิเศษคัดสรรเพื่อคุณ ลองแล้วจะติดใจ!",
      filter_all: "ทั้งหมด",
      filter_milk: "นมสด & เครื่องดื่ม",
      filter_toast: "ขนมปังปิ้งเตาถ่าน",
      filter_special: "เมนูพิเศษ",
      menu_badge_best: "Best Seller ⭐",
      menu_badge_sig: "Signature 🌟",
      menu_badge_rec: "Highly Recommended 🔥",
      menu_badge_healthy: "Healthy Choice 🥛",
      card_order_btn: "สั่งเลย",
      menu_t1: "ปังปิ้งรวมมิตรเตาถ่าน",
      menu_d1: "ขนมปังปิ้งเตาถ่านหอมกรุ่น ราดหน้าด้วยท็อปปิ้งยอดฮิตหลากสไตล์ หวานมันกลมกล่อม",
      menu_t2: "ขนมปังนึ่งสังขยาใบเตย",
      menu_d2: "ขนมปังนึ่งร้อนๆ นุ่มฟู เสิร์ฟพร้อมสังขยาใบเตยสูตรโบราณ หอมหวานมันกำลังดี",
      menu_t3: "ปังปิ้งวิปครีมสตรอว์เบอร์รี่",
      menu_d3: "ขนมปังปิ้งราดแยมสตรอว์เบอร์รี่รสอมเปรี้ยว ท็อปด้วยวิปครีมฟูและสตรอว์เบอร์รี่สด",
      menu_t4: "นมสดแท้ 100% พรีเมียม",
      menu_d4: "นมวัวสดแท้ไม่ผสมน้ำตาลหรือนมผง ตุ๋นร้อนๆ หอมกลิ่นนมแท้ธรรมชาติ มีให้เลือกทั้งร้อนและเย็น",
      menu_t5: "ปังปิ้งวิปครีมภูเขาไฟ",
      menu_d5: "ระเบิดความฟินด้วยผงไมโลเข้มข้นโรยบนวิปครีมล้นๆ ราดซอสช็อกโกแลตฉ่ำบนปังปิ้ง",
      menu_t6: "โนมโสด ฮันนี่โทสต์",
      menu_d6: "ฮันนี่โทสต์ก้อนยักษ์ ชุ่มเนย อบจนกรอบนอกนุ่มใน เสิร์ฟคู่กับผลไม้รวมและน้ำผึ้งแท้",
      menu_t7: "ปังปิ้งคาราเมลไอศกรีม",
      menu_d7: "ขนมปังปิ้งเตาถ่านราดซอสคาราเมลหอมหวาน ท็อปด้วยไอศกรีมวานิลลาลูกโต เคี้ยวเพลิน",
      gallery_title: "Cozy Cafe Vibes",
      gallery_subtitle: "มุมสวยๆ ในร้านที่ออกแบบมาเพื่อเหล่าคอนเทนต์ครีเอเตอร์โดยเฉพาะ",
      contact_title: "ติดต่อเรา",
      contact_subtitle: "แวะมาเติมความหวาน คุยสนุก และชิวไปด้วยกันได้เลย!",
      info_hours_t: "เวลาให้บริการ",
      info_hours_d: "เปิดให้บริการทุกวัน: 12:00 น. - 22:00 น.",
      info_loc_t: "ที่ตั้งร้าน",
      info_loc_d: "ถนนหลักตรงข้าม มหาวิทยาลัยอุบลราชธานี (มอม้า), อำเภอวารินชำราบ, อุบลราชธานี 34190",
      info_phone_t: "เบอร์โทรศัพท์",
      info_social_t: "ติดตามช่องทางของเรา",
      map_btn: "🚙 นำทางไปร้าน (Google Maps)",
      footer_desc: "ร้านนมสดแท้ 100% และขนมปังปิ้งเตาถ่านแสนอร่อย เติมความหวาน ความโสด.. เอ๊ย! ความสุขละมุนให้กับทุกวันของคุณ",
      footer_loc_tag: "📍 ตรงข้ามมหาวิทยาลัยอุบลราชธานี",
      footer_quick: "ลิงก์ด่วน",
      footer_promo: "รับโปรโมชั่นพิเศษ!",
      footer_promo_desc: "สมัครสมาชิกรับข่าวสารกิจกรรมและคูปองส่วนลดสูงสุด 50%!",
      footer_btn_submit: "ตกลง",
      footer_copyright: "© 2026 ร้านโนมโสด ปังปิ้งเตาถ่าน (Nom Sod). All Rights Reserved. Designed by Antigravity UX/UI Dev Team.",
      
      // Form Input placeholders
      input_email_placeholder: "ใส่อีเมลของคุณ...",
      alert_promo_success: "ลงทะเบียนเรียบร้อย! ขอบคุณครับ",
      
      // Gallery captions
      gal_c1: "มุมชิลล์ริมกระจก แสงสวยตลอดวัน",
      gal_c2: "โต๊ะไม้ญี่ปุ่นและเบาะรองนั่งสไตล์มินิมอล",
      gal_c3: "บาร์นมสดและตู้ขนมปัง กลิ่นหอมฟุ้ง",
      gal_c4: "บรรยากาศความสนุกสนานและอบอุ่นในร้าน",
      gal_c5: "แสงไฟวอร์มไลท์ยามเย็นสุดโรแมนติก"
    },
    en: {
      meta_title: "Nom Sod Charcoal Toast (Nom Sod) - 100% Fresh Milk & Sweet Charcoal Toast",
      brand_name: "Nom Sod",
      nav_home: "Home",
      nav_menu: "Best Seller",
      nav_gallery: "Gallery",
      nav_contact: "Contact Us",
      nav_order: "Order Now!",
      hero_badge: "✨ Singles love it, Couples adore it! ✨",
      hero_title: "Nom Sod <br><span>100% Fresh Milk</span><br>& Charcoal Toast",
      hero_desc: "Indulge in premium fresh milk paired with traditional charcoal-grilled toast—fragrant, crispy on the outside, soft on the inside, melting in your mouth. Perfect cozy vibe for content creators and awesome singles!",
      hero_btn_menu: "View Menu 😋",
      hero_btn_loc: "Location 📍",
      menu_title: "Signature Menus",
      menu_subtitle: "Special recommended menus selected just for you. Try once and fall in love!",
      filter_all: "All",
      filter_milk: "Milk & Drinks",
      filter_toast: "Charcoal Toast",
      filter_special: "Special",
      menu_badge_best: "Best Seller ⭐",
      menu_badge_sig: "Signature 🌟",
      menu_badge_rec: "Highly Recommended 🔥",
      menu_badge_healthy: "Healthy Choice 🥛",
      card_order_btn: "Order",
      menu_t1: "Signature Charcoal Mixed Toast",
      menu_d1: "Warm charcoal-grilled toast topped with popular sweet toppings. Perfectly rich and balanced!",
      menu_t2: "Steamed Bread with Pandan Custard",
      menu_d2: "Fluffy hot steamed bread served with authentic traditional pandan custard. Sweet and aromatic!",
      menu_t3: "Strawberry Cream Toast",
      menu_d3: "Grilled toast with tasty strawberry jam, loaded with light whipped cream and fresh strawberries.",
      menu_t4: "Premium Fresh Cow Milk",
      menu_d4: "100% fresh cow's milk, no added sugar or milk powder. Slowly simmered. Available hot or iced!",
      menu_t5: "Milo Volcano Whipped Cream Toast",
      menu_d5: "Indulge in an explosion of rich Milo powder on fluffy whipped cream, drizzled with chocolate sauce on toast.",
      menu_t6: "Nom Sod Honey Toast",
      menu_d6: "Giant butter-soaked honey toast baked to crispy perfection. Served with mixed fruits and pure honey.",
      menu_t7: "Caramel Toast with Ice Cream",
      menu_d7: "Charcoal-grilled toast drizzled with sweet caramel sauce, topped with a giant scoop of vanilla ice cream.",
      gallery_title: "Cozy Cafe Vibes",
      gallery_subtitle: "Beautiful photogenic corners designed specifically for content creators.",
      contact_title: "Contact Us",
      contact_subtitle: "Drop by to sweeten your day, chat, and chill out together!",
      info_hours_t: "Opening Hours",
      info_hours_d: "Open Daily: 12:00 PM - 10:00 PM",
      info_loc_t: "Location",
      info_loc_d: "Main road opposite Ubon Ratchathani University (Mormar), Warin Chamrap, Ubon Ratchathani 34190",
      info_phone_t: "Phone Number",
      info_social_t: "Follow Us",
      map_btn: "🚙 Get Directions (Google Maps)",
      footer_desc: "100% fresh milk and delicious charcoal toast. Sweetening your day and adding happiness (and singlehood vibes!) to your life.",
      footer_loc_tag: "📍 Opposite Ubon Ratchathani University",
      footer_quick: "Quick Links",
      footer_promo: "Get Special Offers!",
      footer_promo_desc: "Subscribe to get event news and discount coupons up to 50%!",
      footer_btn_submit: "Submit",
      footer_copyright: "© 2026 Nom Sod Cafe. All Rights Reserved. Designed by Antigravity UX/UI Dev Team.",
      
      // Form Input placeholders
      input_email_placeholder: "Enter your email...",
      alert_promo_success: "Registration complete! Thank you.",
      
      // Gallery captions
      gal_c1: "Cozy window corner with beautiful all-day lighting",
      gal_c2: "Minimalist Japanese wooden tables and comfy seat cushions",
      gal_c3: "Fresh milk bar and glass pastry cabinet, filled with sweet aromas",
      gal_c4: "A warm, fun, and relaxing vibe inside the cafe",
      gal_c5: "Romantic warm glow during the beautiful golden hour"
    },
    zh: {
      meta_title: "Nom Sod 炭烤土司店 - 100% 纯鲜牛奶 & 炭烤土司专卖店",
      brand_name: "Nom Sod 奶吧",
      nav_home: "首页",
      nav_menu: "推荐菜单",
      nav_gallery: "店面氛围",
      nav_contact: "联系我们",
      nav_order: "立即购买！",
      hero_badge: "✨ 单身者最爱，情侣也钟意！ ✨",
      hero_title: "Nom Sod <br><span>100% 纯鲜牛奶</span><br>& 炭烤土司",
      hero_desc: "享受优质纯鲜牛奶与传统炭烤土司的完美结合——香气四溢，外酥内软，入口即化。这里是内容创作者和单身人士的极佳去处！",
      hero_btn_menu: "查看菜单 😋",
      hero_btn_loc: "门店位置 📍",
      menu_title: "招牌菜单",
      menu_subtitle: "为您精选的特色推荐菜单。一试即爱！",
      filter_all: "全部",
      filter_milk: "鲜奶 & 饮料",
      filter_toast: "炭烤土司",
      filter_special: "特色推荐",
      menu_badge_best: "畅销商品 ⭐",
      menu_badge_sig: "招牌推荐 🌟",
      menu_badge_rec: "强力推荐 🔥",
      menu_badge_healthy: "健康首选 🥛",
      card_order_btn: "立即订购",
      menu_t1: "招牌炭烤什锦土司",
      menu_d1: "香气扑鼻的炭烤土司，淋上多种人气甜味配料，甜而不腻！",
      menu_t2: "斑兰咖椰蒸面包",
      menu_d2: "蓬松热乎的蒸面包，搭配正宗传统斑兰咖椰，香甜可口！",
      menu_t3: "草莓奶油土司",
      menu_d3: "烤土司淋上酸甜草莓酱，搭配轻盈鲜奶油和新鲜草莓。",
      menu_t4: "优质纯鲜牛奶",
      menu_d4: "100%纯鲜牛奶，不含糖或奶粉。慢火炖煮，温润香醇。提供冷/热选择！",
      menu_t5: "美禄火山鲜奶油土司",
      menu_d5: "烤土司上铺满蓬松的鲜奶油，撒上浓郁美禄粉，淋上巧克力酱，美味爆棚！",
      menu_t6: "Nom Sod 蜂蜜土司",
      menu_d6: "巨型黄油蜂蜜土司，烤至外酥内软。搭配什锦水果和纯天然蜂蜜。",
      menu_t7: "焦糖冰淇淋土司",
      menu_d7: "炭烤土司淋上甜美的焦糖酱，搭配一大勺香草冰淇淋，双重享受。",
      gallery_title: "舒适咖啡厅氛围",
      gallery_subtitle: "专为内容创作者设计的拍照打卡精美角落。",
      contact_title: "联系我们",
      contact_subtitle: "过来甜美你的日子，聊天，一起放松吧！",
      info_hours_t: "营业时间",
      info_hours_d: "每日营业：中午 12:00 - 晚上 10:00",
      info_loc_t: "门店地址",
      info_loc_d: "乌汶大学（Mormar）正对面主干道，瓦林昌拉普区，乌汶府 34190",
      info_phone_t: "电话号码",
      info_social_t: "关注我们",
      map_btn: "🚙 路线指引 (谷歌地图)",
      footer_desc: "100%纯鲜牛奶和美味的炭烤土司。为您生活带来香甜与快乐（还有单身的乐趣！）。",
      footer_loc_tag: "📍 乌汶大学对面",
      footer_quick: "快速链接",
      footer_promo: "获取特别优惠！",
      footer_promo_desc: "订阅以获取活动新闻和高达 50% 的折扣券！",
      footer_btn_submit: "提交",
      footer_copyright: "© 2026 Nom Sod 炭烤土司店。版权所有。由 Antigravity UX/UI 开发团队设计。",
      
      // Form Input placeholders
      input_email_placeholder: "输入您的电子邮箱...",
      alert_promo_success: "注册成功！谢谢您。",
      
      // Gallery captions
      gal_c1: "舒适的窗边角落，全天光线美妙",
      gal_c2: "简约日式木桌和坐垫，享受慢时光",
      gal_c3: "鲜奶吧与面包柜，香气四溢，令人垂涎",
      gal_c4: "店内充满欢乐与温馨的社交氛围",
      gal_c5: "浪漫的傍晚温馨灯光与金色夕阳"
    }
  };

  let currentLang = localStorage.getItem('nom_sod_lang') || 'th';

  // --- Translation Function ---
  const applyTranslations = (lang) => {
    currentLang = lang;
    localStorage.setItem('nom_sod_lang', lang);
    const dictionary = translations[lang];

    // Translate regular elements with data-translate-key
    document.querySelectorAll('[data-translate-key]').forEach(el => {
      const key = el.getAttribute('data-translate-key');
      if (dictionary[key]) {
        // Use innerHTML if the key contains tags like <br> or <span>
        if (dictionary[key].includes('<br>') || dictionary[key].includes('<span>')) {
          el.innerHTML = dictionary[key];
        } else {
          el.textContent = dictionary[key];
        }
      }
    });

    // Translate page document title
    if (dictionary.meta_title) {
      document.title = dictionary.meta_title;
    }

    // Translate specific input placeholders
    const emailInput = document.getElementById('newsletter-input-email');
    if (emailInput && dictionary.input_email_placeholder) {
      emailInput.setAttribute('placeholder', dictionary.input_email_placeholder);
    }

    // Sync active button classes in switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Dynamically update captions on images
    const menuImages = document.querySelectorAll('.menu-card .menu-card-img');
    menuImages.forEach((img, index) => {
      const titleKey = `menu_t${index + 1}`;
      if (dictionary[titleKey]) {
        img.setAttribute('data-caption', dictionary[titleKey]);
      }
    });

    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach((img, index) => {
      const captionKey = `gal_c${index + 1}`;
      if (dictionary[captionKey]) {
        img.setAttribute('data-caption', dictionary[captionKey]);
        img.setAttribute('alt', dictionary[captionKey]);
      }
    });
  };

  // --- Language switcher click handler ---
  const langSwitcher = document.querySelector('.lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        const lang = btn.getAttribute('data-lang');
        applyTranslations(lang);
      }
    });
  }

  // Initial translation apply
  applyTranslations(currentLang);

  // Form submit handler in current language
  window.handlePromoSubmit = () => {
    const alertMsg = translations[currentLang].alert_promo_success;
    alert(alertMsg);
    const form = document.getElementById('promo-form');
    if (form) form.reset();
  };

  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Category Menu Filter ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          // Show card with smooth animation
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          // Hide card with smooth animation
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- Lightbox Modal ---
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const modalClose = document.getElementById('lightbox-close');
  const lightboxTriggers = document.querySelectorAll('.Lightbox-trigger');

  if (modal && modalImg && modalCaption) {
    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const imgSrc = trigger.getAttribute('src');
        const imgCaption = trigger.getAttribute('data-caption') || trigger.getAttribute('alt');

        modalImg.setAttribute('src', imgSrc);
        modalCaption.textContent = imgCaption;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll on body
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Enable scroll on body
      setTimeout(() => {
        modalImg.setAttribute('src', '');
        modalCaption.textContent = '';
      }, 300);
    };

    // Close on click close button
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    // Close on click outside content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Unobserve after showing
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }
});
