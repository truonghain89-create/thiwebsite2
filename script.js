// Safe Lucide helper
function safeCreateIcons() {
  try {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  } catch (e) {
    console.warn("Lucide icons failed to load:", e);
  }
}

// Initialize Lucide Icons and AOS when DOM is ready and window is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  safeCreateIcons();
});

window.addEventListener('load', () => {
  safeCreateIcons();
  try {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        once: true,
        offset: 80,
        duration: 800
      });
    }
  } catch (e) {
    console.warn("AOS failed to initialize:", e);
  }
});

// Language system dictionary
const dictionary = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.destinations': 'Điểm đến',
    'nav.tours': 'Tour',
    'nav.combo': 'Combo',
    'nav.promotions': 'Mùa vụ',
    'nav.blog': 'Cẩm nang',
    'nav.about': 'Tại sao chọn',
    'nav.contact': 'Liên hệ',
    'auth.login': 'Đăng nhập',
    'auth.register': 'Đăng ký',
    'hero.eyebrow': 'Khám phá Việt Nam tươi đẹp',
    'hero.subtitle': 'Từ vịnh Hạ Long huyền ảo đến phố cổ Hội An thơ mộng, khám phá những điểm đến tuyệt vời nhất Việt Nam cùng đội ngũ chuyên gia du lịch bản địa.',
    'hero.cta.explore': 'Khám phá ngay',
    'hero.cta.tours': 'Xem điểm đến',
    'hero.badge.tours': '1000+ Tour',
    'hero.badge.rating': '4.9★ Đánh giá',
    'search.destination': 'Điểm đến',
    'search.destination.placeholder': 'Hạ Long, Phú Quốc...',
    'search.tourType': 'Loại hình',
    'search.tourType.placeholder': 'Nghỉ dưỡng',
    'search.date': 'Khởi hành',
    'search.date.placeholder': 'Chọn ngày',
    'search.guests': 'Số khách',
    'search.guests.placeholder': 'Số người',
    'search.budget': 'Ngân sách',
    'search.budget.placeholder': 'Chọn mức giá',
    'search.button': 'Tìm kiếm',
    'categories.eyebrow': 'Danh mục du lịch',
    'categories.title': 'Khám Phá Theo Phong Cách Của Bạn',
    'cat.beach': 'Biển đảo',
    'cat.mountain': 'Núi rừng',
    'cat.heritage': 'Di sản văn hóa',
    'cat.cuisine': 'Ẩm thực',
    'destinations.eyebrow': 'Điểm đến nổi bật',
    'destinations.title': 'Những Địa Danh Không Thể Bỏ Lỡ',
    'dest.halong.desc': 'Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi, hang động kỳ vĩ giữa làn nước xanh ngọc bích.',
    'dest.sapa.desc': 'Ruộng bậc thang trải dài giữa núi rừng Tây Bắc, nơi sinh sống của các dân tộc thiểu số với văn hóa đặc sắc.',
    'tours.eyebrow': 'Tour nổi bật',
    'tours.title': 'Hành Trình Được Yêu Thích Nhất',
    'ui.viewAll': 'Xem tất cả',
    'ui.bookNow': 'Đặt ngay',
    'ui.bestSeller': 'Bán chạy',
    'ui.hot': 'Hot',
    'ui.from': 'Từ',
    'ui.days': 'ngày',
    'ui.person': 'người',
    'filter.all': 'Tất cả',
    'filter.north': 'Miền Bắc',
    'filter.central': 'Miền Trung',
    'filter.south': 'Miền Nam',
    'difficulty.easy': 'Dễ',
    'difficulty.moderate': 'Trung bình',
    'regional.eyebrow': 'Tour theo vùng miền',
    'regional.title': 'Khám Phá Theo Vùng Miền',
    'regional.north': 'Miền Bắc',
    'regional.central': 'Miền Trung',
    'regional.south': 'Miền Nam',
    'seasonal.eyebrow': 'Tour theo mùa',
    'seasonal.title': 'Du Lịch Theo Mùa',
    'spring': 'Mùa Xuân',
    'summer': 'Mùa Hè',
    'autumn': 'Mùa Thu',
    'winter': 'Mùa Đông',
    'combo.eyebrow': 'Combo tiết kiệm',
    'combo.title': 'Combo Du Lịch Tiết Kiệm Hơn',
    'experiences.eyebrow': 'Trải nghiệm đặc sắc',
    'experiences.title': 'Trải Nghiệm Không Thể Quên',
    'whyUs.eyebrow': 'Tại sao chọn chúng tôi',
    'whyUs.title': 'Lý Do Hàng Nghìn Khách Hàng Tin Tưởng',
    'why.guide': 'Chuyên gia bản địa',
    'why.quality': 'Dịch vụ chuẩn 5★',
    'why.support': 'Hỗ trợ 24/7 chuyên nghiệp',
    'process.eyebrow': 'Quy trình đặt tour',
    'process.title': 'Đặt Tour Dễ Dàng Chỉ 4 Bước',
    'stats.tours': 'Tour du lịch',
    'stats.customers': 'Khách hàng hài lòng',
    'stats.destinations': 'Điểm đến',
    'stats.rating': 'Đánh giá',
    'testimonials.eyebrow': 'Ý kiến khách hàng',
    'testimonials.title': 'Khách Hàng Nói Gì Về Chúng Tôi',
    'blog.eyebrow': 'Blog du lịch',
    'blog.title': 'Cẩm Nang Du Lịch Việt Nam',
    'blog.readMore': 'Đọc thêm',
    'partners.eyebrow': 'Đối tác tin cậy',
    'cta.eyebrow': 'Bắt đầu hành trình',
    'cta.title': 'Sẵn Sàng Khám Phá Việt Nam Cùng Chúng Tôi?',
    'cta.subtitle': 'Đặt tour ngay hôm nay và nhận ưu đãi đặc biệt lên đến 20% cho chuyến đi đầu tiên.',
    'cta.button.book': 'Đặt tour ngay',
    'cta.button.contact': 'Tư vấn miễn phí',
    'footer.about.desc': 'Đơn vị lữ hành hàng đầu Việt Nam, mang đến các tour du lịch đẳng cấp từ các chuyên gia bản địa giàu kinh nghiệm.',
    'footer.destinations.title': 'Điểm đến',
    'footer.services.title': 'Dịch vụ',
    'footer.services.privateTour': 'Tour riêng',
    'footer.services.groupTour': 'Tour nhóm',
    'footer.services.honeymoon': 'Tuần trăng mật',
    'footer.contact.title': 'Liên hệ',
    'footer.contact.address': '123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
    'footer.copyright': '© 2024 Vietnam Tours. Tất cả quyền được bảo lưu.'
  },
  en: {
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.tours': 'Tours',
    'nav.combo': 'Combos',
    'nav.promotions': 'Seasonal',
    'nav.blog': 'Blog',
    'nav.about': 'Why Choose',
    'nav.contact': 'Contact',
    'auth.login': 'Sign In',
    'auth.register': 'Sign Up',
    'hero.eyebrow': 'Discover Beautiful Vietnam',
    'hero.subtitle': 'From the mystical Ha Long Bay to the charming ancient town of Hoi An, discover Vietnam\'s most stunning destinations with our team of local travel experts.',
    'hero.cta.explore': 'Explore Now',
    'hero.cta.tours': 'View Destinations',
    'hero.badge.tours': '1000+ Tours',
    'hero.badge.rating': '4.9★ Reviews',
    'search.destination': 'Destination',
    'search.destination.placeholder': 'Ha Long, Phu Quoc...',
    'search.tourType': 'Category',
    'search.tourType.placeholder': 'Resorts',
    'search.date': 'Departure',
    'search.date.placeholder': 'Select date',
    'search.guests': 'Guests',
    'search.guests.placeholder': 'Guests count',
    'search.budget': 'Budget',
    'search.budget.placeholder': 'Price range',
    'search.button': 'Search',
    'categories.eyebrow': 'Travel Categories',
    'categories.title': 'Explore Your Way',
    'cat.beach': 'Beach & Island',
    'cat.mountain': 'Mountains',
    'cat.heritage': 'Heritage',
    'cat.cuisine': 'Cuisine',
    'destinations.eyebrow': 'Top Destinations',
    'destinations.title': 'Must-Visit Locations',
    'dest.halong.desc': 'World natural heritage with thousands of limestone islets and caves inside emerald seawater.',
    'dest.sapa.desc': 'Majestic rice terraced fields and rich cultural experiences with ethnic minority groups.',
    'tours.eyebrow': 'Featured Tours',
    'tours.title': 'Our Most Popular Journeys',
    'ui.viewAll': 'View All',
    'ui.bookNow': 'Book Now',
    'ui.bestSeller': 'Best Seller',
    'ui.hot': 'Hot',
    'ui.from': 'From',
    'ui.days': 'days',
    'ui.person': 'guests',
    'filter.all': 'All',
    'filter.north': 'North',
    'filter.central': 'Central',
    'filter.south': 'South',
    'difficulty.easy': 'Easy',
    'difficulty.moderate': 'Moderate',
    'regional.eyebrow': 'Tours by Region',
    'regional.title': 'Explore by Region',
    'regional.north': 'Northern',
    'regional.central': 'Central',
    'regional.south': 'Southern',
    'seasonal.eyebrow': 'Seasonal Tours',
    'seasonal.title': 'Travel By Season',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'winter': 'Winter',
    'combo.eyebrow': 'Value Combos',
    'combo.title': 'Travel Combos & Bundles',
    'experiences.eyebrow': 'Signature Activities',
    'experiences.title': 'Memorable Experiences',
    'whyUs.eyebrow': 'Why Choose Us',
    'whyUs.title': 'Why Thousands of Travelers Trust Us',
    'why.guide': 'Local Experts',
    'why.quality': '5★ Quality Service',
    'why.support': '24/7 Professional Support',
    'process.eyebrow': 'Booking Process',
    'process.title': 'Book Your Trip in 4 Steps',
    'stats.tours': 'Active Tours',
    'stats.customers': 'Happy Customers',
    'stats.destinations': 'Destinations',
    'stats.rating': 'Rating',
    'testimonials.eyebrow': 'Client Reviews',
    'testimonials.title': 'What Our Clients Say',
    'blog.eyebrow': 'Travel Blog',
    'blog.title': 'Vietnam Travel Guides',
    'blog.readMore': 'Read More',
    'partners.eyebrow': 'Trusted Partners',
    'cta.eyebrow': 'Start Your Journey',
    'cta.title': 'Ready to Explore Vietnam With Us?',
    'cta.subtitle': 'Book today and receive up to 20% off your very first booking.',
    'cta.button.book': 'Book Tour Now',
    'cta.button.contact': 'Free Consulting',
    'footer.about.desc': 'Vietnam\'s leading boutique tour agency, providing tailored experiences with highly knowledgeable local guides.',
    'footer.destinations.title': 'Destinations',
    'footer.services.title': 'Services',
    'footer.services.privateTour': 'Private Tours',
    'footer.services.groupTour': 'Group Tours',
    'footer.services.honeymoon': 'Honeymoons',
    'footer.contact.title': 'Contact',
    'footer.contact.address': '123 Nguyen Hue, District 1, Ho Chi Minh City',
    'footer.copyright': '© 2024 Vietnam Tours. All rights reserved.'
  }
};

let currentLang = 'vi';
let currentCurrency = 'vnd';
const exchangeRate = 25000;

function applyCurrency(currency) {
  currentCurrency = currency;
  
  try {
    const currencyText = document.getElementById('currency-text');
    if (currencyText) currencyText.innerText = currency.toUpperCase();
  } catch (e) {
    console.error(e);
  }
  
  document.querySelectorAll('.price-val').forEach(el => {
    const vnd = parseInt(el.getAttribute('data-price-vnd'));
    if (currency === 'usd') {
      const usd = Math.ceil(vnd / exchangeRate);
      el.innerText = "$" + usd;
    } else {
      el.innerText = vnd.toLocaleString('vi-VN') + "đ";
    }
  });
  
  updateBookingPriceDisplay();
}

// Apply language translation function
function applyLanguage(lang) {
  currentLang = lang;
  
  // Update toggle buttons text
  try {
    const langText = document.getElementById('lang-text');
    const langTextMobile = document.getElementById('lang-text-mobile');
    if (langText) langText.innerText = lang.toUpperCase();
    if (langTextMobile) langTextMobile.innerText = lang === 'vi' ? 'English' : 'Tiếng Việt';
  } catch (e) {
    console.error(e);
  }
  
  // Select elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dictionary[lang] && dictionary[lang][key]) {
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.placeholder = dictionary[lang][key];
      } else {
        el.innerText = dictionary[lang][key];
      }
    }
  });

  // Special handling for dynamic content
  try {
    const heroTitle = document.getElementById('hero-main-title');
    const regionTitle = document.getElementById('region-title');
    const regionDesc = document.getElementById('region-desc');
    
    if (lang === 'en') {
      if (heroTitle) heroTitle.innerHTML = "Explore The Beauty<br><span class='text-accent'>Of Vietnam</span>";
      if (regionTitle) regionTitle.innerText = "Northern";
      if (regionDesc) regionDesc.innerText = "Majestic mountains, green terraced fields, diverse ethnic cultures, and delicious cuisine from the heart of Hanoi.";
    } else {
      if (heroTitle) heroTitle.innerHTML = "Hành Trình Khám Phá<br><span class='text-accent'>Vẻ Đẹp Việt Nam</span>";
      if (regionTitle) regionTitle.innerText = "Miền Bắc";
      if (regionDesc) regionDesc.innerText = "Núi non hùng vĩ, ruộng bậc thang xanh ngắt, văn hóa dân tộc đa dạng và ẩm thực phong phú mang đậm nét văn hiến Kinh kỳ.";
    }
  } catch (e) {
    console.error(e);
  }
}

// Header scroll background change & progress bar
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const logoText = document.getElementById('header-logo-text');
  const progress = document.getElementById('scroll-progress');
  
  // Scroll Progress calculation
  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
  if (progress) progress.style.width = scrollPercent + '%';

  if (header && logoText) {
    if (window.scrollY > 50) {
      header.classList.remove('bg-transparent', 'py-5');
      header.classList.add('glass-strong', 'shadow-soft', 'py-3');
      logoText.classList.remove('text-white');
      logoText.classList.add('text-text');
      
      // Change colors of desktop menus
      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('text-white', 'hover:bg-white/10');
        item.classList.add('text-text', 'hover:bg-primary/5');
        if (item.id === 'lang-switch-btn' || item.id === 'currency-switch-btn') {
          item.classList.remove('border-white/20');
          item.classList.add('border-text/20');
        }
      });
      
      const logoToursText = document.getElementById('logo-tours-text');
      if (logoToursText) {
        logoToursText.classList.remove('text-primary-light');
        logoToursText.classList.add('text-primary');
      }
      
      const logoIcon = document.getElementById('header-logo-icon');
      if (logoIcon) {
        logoIcon.classList.remove('text-white', 'drop-shadow-md');
        logoIcon.classList.add('text-primary');
      }

      // Style login button on scroll
      const loginBtn = document.getElementById('login-btn');
      if (loginBtn) {
        loginBtn.classList.remove('border-white/20', 'text-white', 'hover:bg-white/10');
        loginBtn.classList.add('border-primary/20', 'text-primary', 'hover:bg-primary/5');
      }
    } else {
      header.classList.remove('glass-strong', 'shadow-soft', 'py-3');
      header.classList.add('bg-transparent', 'py-5');
      logoText.classList.remove('text-text');
      logoText.classList.add('text-white');

      document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('text-text', 'hover:bg-primary/5');
        item.classList.add('text-white', 'hover:bg-white/10');
        if (item.id === 'lang-switch-btn' || item.id === 'currency-switch-btn') {
          item.classList.remove('border-text/20');
          item.classList.add('border-white/20');
        }
      });
      
      const logoToursText = document.getElementById('logo-tours-text');
      if (logoToursText) {
        logoToursText.classList.remove('text-primary');
        logoToursText.classList.add('text-primary-light');
      }
      
      const logoIcon = document.getElementById('header-logo-icon');
      if (logoIcon) {
        logoIcon.classList.remove('text-primary');
        logoIcon.classList.add('text-white', 'drop-shadow-md');
      }

      // Restore login button style
      const loginBtn = document.getElementById('login-btn');
      if (loginBtn) {
        loginBtn.classList.remove('border-primary/20', 'text-primary', 'hover:bg-primary/5');
        loginBtn.classList.add('border-white/20', 'text-white', 'hover:bg-white/10');
      }
    }
  }
});

// Mega Menu Click Toggle
const megaBtn = document.getElementById('mega-btn');
const megaMenu = document.getElementById('mega-menu');
const megaChevron = document.getElementById('mega-chevron');

if (megaBtn && megaMenu) {
  megaBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = megaMenu.classList.contains('opacity-100');
    if (isOpen) {
      closeMegaMenu();
    } else {
      openMegaMenu();
    }
  });
  
  megaMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMegaMenu();
    } else {
      e.stopPropagation();
    }
  });
}

function openMegaMenu() {
  if (megaMenu && megaChevron) {
    megaMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    megaMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    megaChevron.classList.add('rotate-180');
  }
}

function closeMegaMenu() {
  if (megaMenu && megaChevron) {
    megaMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    megaMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    megaChevron.classList.remove('rotate-180');
  }
}

// Close mega menu when clicking outside
document.addEventListener('click', () => {
  closeMegaMenu();
});

// Language switch click events
const langBtn = document.getElementById('lang-switch-btn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
  });
}

const langBtnMobile = document.getElementById('lang-switch-btn-mobile');
if (langBtnMobile) {
  langBtnMobile.addEventListener('click', () => {
    applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('mobile-toggle');
    if (mobileMenu) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
    }
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    safeCreateIcons();
  });
}

// Mobile Hamburger Toggle
const mobileMenu = document.getElementById('mobile-menu');
const toggleBtn = document.getElementById('mobile-toggle');
if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    if (isOpen) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      toggleBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    } else {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      toggleBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    }
    safeCreateIcons();
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu-link').forEach(link => {
  link.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('mobile-toggle');
    if (mobileMenu) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
    }
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    safeCreateIcons();
  });
});

// Button Click Ripple Effect
document.querySelectorAll('.ripple-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Auto Slider (Hero background images) - updated path to images/
const slides = [
  "images/vietnam-hero.png",
  "images/hoian.png",
  "images/sapa.png"
];
let slideIndex = 0;
const heroImg = document.getElementById('hero-slide-img');
if (heroImg) {
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    heroImg.style.opacity = 0.2;
    setTimeout(() => {
      heroImg.src = slides[slideIndex];
      heroImg.style.opacity = 1;
    }, 500);
  }, 7000);
}

// Region Switch tabs - updated path to images/
const regionData = {
  north: {
    title: { vi: "Miền Bắc", en: "Northern" },
    desc: { vi: "Núi non hùng vĩ, ruộng bậc thang xanh ngắt, văn hóa dân tộc đa dạng và ẩm thực phong phú mang đậm nét văn hiến Kinh kỳ.", en: "Majestic mountains, green terraced fields, diverse ethnic cultures, and delicious cuisine from the heart of Hanoi." },
    img: "images/sapa.png",
    chips: ["Hà Nội", "Vịnh Hạ Long", "Sa Pa", "Hà Giang"]
  },
  central: {
    title: { vi: "Miền Trung", en: "Central" },
    desc: { vi: "Di sản thế giới cổ kính, bãi biển dài thơ mộng, ẩm thực Cố đô tinh tế cùng sự đôn hậu, chân thành của con người miền Trung.", en: "Ancient world heritage, romantic long coastlines, refined imperial cuisine, and the warm, humble hospitality of local people." },
    img: "images/hoian.png",
    chips: ["Đà Nẵng", "Hội An", "Huế", "Nha Trang"]
  },
  south: {
    title: { vi: "Miền Nam", en: "Southern" },
    desc: { vi: "Sông nước miệt vườn thanh bình, nhịp sống sầm uất hiện đại, chợ nổi Cái Răng tấp nập kết hợp cùng thiên đường nghỉ dưỡng biển ấm Phú Quốc.", en: "Peaceful orchards, bustling modern life, crowded floating markets, combined with the warm beach resort paradise of Phu Quoc." },
    img: "images/phuquoc.png",
    chips: ["TP. Hồ Chí Minh", "Phú Quốc", "Cần Thơ", "Côn Đảo"]
  }
};

function switchRegion(regionKey, tabBtn) {
  // Toggle active classes on tab buttons
  document.querySelectorAll('.region-tab').forEach(btn => {
    btn.className = "region-tab px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-text-secondary hover:text-primary border border-border-light hover:border-primary/25 transition-all duration-300";
  });
  
  const activeColors = {
    north: "region-tab px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 border border-emerald-600 transition-all duration-300",
    central: "region-tab px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500 text-white shadow-lg shadow-amber-500/20 border border-amber-500 transition-all duration-300",
    south: "region-tab px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-skyBlue text-white shadow-lg shadow-skyBlue/20 border border-skyBlue transition-all duration-300"
  };

  const ctaColors = {
    north: "ripple-btn self-start px-8 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 shadow-md shadow-emerald-600/10",
    central: "ripple-btn self-start px-8 py-3.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-all duration-300 shadow-md shadow-amber-500/10",
    south: "ripple-btn self-start px-8 py-3.5 rounded-full bg-skyBlue text-white text-xs font-bold uppercase tracking-widest hover:bg-sky-600 transition-all duration-300 shadow-md shadow-skyBlue/10"
  };

  const borderColors = {
    north: "absolute bottom-8 left-8 font-heading text-3xl font-extrabold text-white border-l-4 border-emerald-500 pl-4",
    central: "absolute bottom-8 left-8 font-heading text-3xl font-extrabold text-white border-l-4 border-amber-500 pl-4",
    south: "absolute bottom-8 left-8 font-heading text-3xl font-extrabold text-white border-l-4 border-sky-500 pl-4"
  };

  if (tabBtn) {
    tabBtn.className = activeColors[regionKey];
  }
  
  const data = regionData[regionKey];
  if (!data) return;
  
  // Update text safely
  try {
    const regTitle = document.getElementById('region-title');
    const regDesc = document.getElementById('region-desc');
    const regImg = document.getElementById('region-img');
    const ctaBtn = document.getElementById('region-cta-btn');
    
    if (regTitle) {
      regTitle.innerText = data.title[currentLang];
      regTitle.className = borderColors[regionKey];
    }
    if (regDesc) regDesc.innerText = data.desc[currentLang];
    if (regImg) regImg.src = data.img;
    if (ctaBtn) {
      ctaBtn.className = ctaColors[regionKey];
      ctaBtn.setAttribute('onclick', `openBookingModal('Tour Vùng Miền: ${data.title[currentLang]}', '7500000')`);
    }
  } catch (e) {
    console.error(e);
  }
  
  // Update chips safely
  const chipsContainer = document.getElementById('region-chips');
  if (chipsContainer) {
    chipsContainer.innerHTML = '';
    data.chips.forEach(chip => {
      const span = document.createElement('span');
      span.className = "px-5 py-4 rounded-2xl bg-white border border-border-light text-sm font-semibold text-text flex items-center gap-3 shadow-card";
      span.innerHTML = `<i data-lucide="map-pin" class="w-4.5 h-4.5 text-primary"></i> ${chip}`;
      chipsContainer.appendChild(span);
    });
  }
  safeCreateIcons();
}

// Modal Interaction JS System

// Auth Modal handling
function openAuthModal(tab = 'login') {
  const modal = document.getElementById('auth-modal');
  const content = document.getElementById('auth-modal-content');
  if (modal && content) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
    switchAuthTab(tab);
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  const content = document.getElementById('auth-modal-content');
  if (modal && content) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
  }
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const nameField = document.getElementById('auth-name-field');
  const nameInput = document.getElementById('auth-name');

  if (tab === 'login') {
    tabLogin.className = "text-lg font-heading font-extrabold text-primary border-b-2 border-primary pb-2";
    tabRegister.className = "text-lg font-heading font-extrabold text-text-secondary hover:text-primary pb-2";
    nameField.classList.add('hidden');
    if (nameInput) nameInput.removeAttribute('required');
  } else {
    tabRegister.className = "text-lg font-heading font-extrabold text-primary border-b-2 border-primary pb-2";
    tabLogin.className = "text-lg font-heading font-extrabold text-text-secondary hover:text-primary pb-2";
    nameField.classList.remove('hidden');
    if (nameInput) nameInput.setAttribute('required', 'true');
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  alert("Đăng nhập/Đăng ký thành công! Chào mừng bạn đến với Vietnam Tours.");
  closeAuthModal();
}

// Booking Modal Handling
let activePricePerGuest = 0;
let activeGuests = 1;

function openBookingModal(tourName, priceStr) {
  const modal = document.getElementById('booking-modal');
  const content = document.getElementById('booking-modal-content');
  const title = document.getElementById('booking-tour-name');
  
  activePricePerGuest = parseInt(priceStr) || 0;
  activeGuests = 1;
  
  if (title) title.innerText = tourName;
  updateBookingPriceDisplay();

  if (modal && content) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  const content = document.getElementById('booking-modal-content');
  if (modal && content) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
  }
}

function changeGuests(amount) {
  const guestsEl = document.getElementById('booking-guests');
  activeGuests = Math.max(1, activeGuests + amount);
  if (guestsEl) guestsEl.innerText = activeGuests;
  updateBookingPriceDisplay();
}

function updateBookingPriceDisplay() {
  const priceEl = document.getElementById('booking-total-price');
  const totalPrice = activePricePerGuest * activeGuests;
  if (priceEl) {
    if (totalPrice === 0) {
      priceEl.innerText = currentLang === 'en' ? "Free" : "Miễn phí";
    } else {
      if (currentCurrency === 'usd') {
        const usd = Math.ceil(totalPrice / exchangeRate);
        priceEl.innerText = "$" + usd;
      } else {
        priceEl.innerText = totalPrice.toLocaleString('vi-VN') + "đ";
      }
    }
  }
}

function handleBookingSubmit(event) {
  event.preventDefault();
  alert("Yêu cầu đặt tour đã được ghi nhận thành công! Đội ngũ tư vấn của Vietnam Tours sẽ liên hệ với quý khách trong vòng 15 phút.");
  closeBookingModal();
}

// Tour Filtering System
function filterTours(region, button) {
  // Toggle button styles
  const filterBtns = document.querySelectorAll('.tour-filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.remove('bg-primary', 'text-white', 'shadow-md');
    btn.classList.add('bg-white', 'text-text-secondary', 'border', 'border-border-light');
  });
  if (button) {
    button.classList.remove('bg-white', 'text-text-secondary', 'border', 'border-border-light');
    button.classList.add('bg-primary', 'text-white', 'shadow-md');
  }

  // Filter cards
  const tourCards = document.querySelectorAll('.tour-card');
  tourCards.forEach(card => {
    if (region === 'all' || card.getAttribute('data-region') === region) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Hero Search Functionality
function handleSearch() {
  const destInput = document.getElementById('search-input-destination');
  const query = destInput ? destInput.value.toLowerCase().trim() : '';

  let targetRegion = 'all';
  if (query.includes('hạ long') || query.includes('ha long') || query.includes('sa pa') || query.includes('sapa') || query.includes('bắc')) {
    targetRegion = 'north';
  } else if (query.includes('đà nẵng') || query.includes('hội an') || query.includes('huế') || query.includes('trung')) {
    targetRegion = 'central';
  } else if (query.includes('phú quốc') || query.includes('nam')) {
    targetRegion = 'south';
  }

  // Select corresponding filter button
  const filterBtns = document.querySelectorAll('.tour-filter-btn');
  let matchingBtn = filterBtns[0]; // default 'all'
  if (targetRegion === 'north') matchingBtn = filterBtns[1];
  else if (targetRegion === 'central') matchingBtn = filterBtns[2];
  else if (targetRegion === 'south') matchingBtn = filterBtns[3];

  filterTours(targetRegion, matchingBtn);

  // Smooth scroll to tours section
  const toursSection = document.getElementById('tours');
  if (toursSection) {
    toursSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Header Search Bar Interactivity
function toggleHeaderSearch() {
  const searchBar = document.getElementById('header-search-bar');
  const searchInput = document.getElementById('header-search-input');
  if (!searchBar) return;

  const isHidden = searchBar.classList.contains('opacity-0');
  if (isHidden) {
    searchBar.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
    searchBar.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    if (searchInput) {
      searchInput.focus();
      searchInput.value = '';
    }
  } else {
    searchBar.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    searchBar.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
  }
}

function executeHeaderSearch() {
  const searchInput = document.getElementById('header-search-input');
  const destInput = document.getElementById('search-input-destination');
  if (!searchInput) return;

  const query = searchInput.value.trim();
  if (query !== '') {
    if (destInput) {
      destInput.value = query;
    }
    handleSearch();
    toggleHeaderSearch(); // Close search bar after search
  }
}

// Contact Modal Handling
function openContactModal() {
  const modal = document.getElementById('contact-modal');
  const content = document.getElementById('contact-modal-content');
  if (modal && content) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
  }
}

// Close Contact Modal
function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  const content = document.getElementById('contact-modal-content');
  if (modal && content) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-100');
    content.classList.add('scale-95');
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  alert("Yêu cầu tư vấn của bạn đã được gửi thành công! Chuyên viên thiết kế hành trình của Vietnam Tours sẽ liên hệ với bạn trong vòng 15 phút.");
  closeContactModal();
}

// Newsletter Subscribe Handling
function handleSubscribe(event) {
  event.preventDefault();
  const emailInput = event.target.querySelector('input[type="email"]');
  const email = emailInput ? emailInput.value : '';
  alert(`Đăng ký thành công! Email "${email}" sẽ bắt đầu nhận các chương trình khuyến mãi và tour du lịch độc quyền từ Vietnam Tours.`);
  if (emailInput) emailInput.value = '';
}

// Wishlist Toggle
function toggleWishlist(btn, tourName) {
  const icon = btn.querySelector('i');
  if (!icon) return;
  const isLoved = icon.classList.contains('fill-rose-500');
  if (isLoved) {
    icon.classList.remove('fill-rose-500', 'text-rose-500');
    icon.classList.add('fill-transparent', 'text-text');
    alert(`Đã xóa "${tourName}" khỏi danh sách yêu thích.`);
  } else {
    icon.classList.remove('fill-transparent', 'text-text');
    icon.classList.add('fill-rose-500', 'text-rose-500');
    btn.classList.add('scale-125');
    setTimeout(() => btn.classList.remove('scale-125'), 200);
    alert(`Đã thêm "${tourName}" vào danh sách yêu thích!`);
  }
  safeCreateIcons();
}

// Blog Modal Handling
function openBlogModal(title, category, date, contentBody, imgUrl) {
  const modal = document.getElementById('blog-modal');
  const modalContent = document.getElementById('blog-modal-content');
  
  const modalTitle = document.getElementById('blog-modal-title');
  const modalCat = document.getElementById('blog-modal-category');
  const modalDate = document.getElementById('blog-modal-date');
  const modalImg = document.getElementById('blog-modal-img');
  const modalBody = document.getElementById('blog-modal-body');

  if (modalTitle) modalTitle.innerText = title;
  if (modalCat) modalCat.innerText = category;
  if (modalDate) modalDate.innerText = date;
  if (modalImg) modalImg.src = imgUrl;
  if (modalBody) {
    modalBody.innerHTML = `<p>${contentBody}</p><p class="mt-4">Hãy tiếp tục theo dõi cẩm nang du lịch của chúng tôi để cập nhật những địa điểm hấp dẫn và kinh nghiệm du lịch hữu ích nhất nhé!</p>`;
  }

  if (modal && modalContent) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
  }
  safeCreateIcons();
}

function closeBlogModal() {
  const modal = document.getElementById('blog-modal');
  const modalContent = document.getElementById('blog-modal-content');
  if (modal && modalContent) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
  }
}

// Toggle AI Chat Window
function toggleAiChat() {
  const windowEl = document.getElementById('ai-chat-window');
  if (windowEl) {
    const isOpen = windowEl.classList.contains('opacity-100');
    if (isOpen) {
      windowEl.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      windowEl.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    } else {
      windowEl.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      windowEl.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      // Scroll to bottom
      const container = document.getElementById('ai-chat-messages');
      if (container) container.scrollTop = container.scrollHeight;
    }
  }
}

// Quick replies sender helper
function sendQuickReply(text) {
  const input = document.getElementById('ai-chat-input');
  if (input) {
    input.value = text;
    const form = input.closest('form');
    if (form) {
      const event = new Event('submit', { cancelable: true });
      form.dispatchEvent(event);
    }
  }
}

// AI Chat Send input handler
function handleAiChatSend(event) {
  event.preventDefault();
  const input = document.getElementById('ai-chat-input');
  const container = document.getElementById('ai-chat-messages');
  if (!input || !container) return;

  const text = input.value.trim();
  if (text === '') return;

  // Append user message
  appendChatMessage(text, 'user');
  input.value = '';

  // Typing state simulation
  appendTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    const reply = getAiResponse(text);
    appendChatMessage(reply, 'bot');
  }, 1200);
}

function appendChatMessage(text, sender) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const div = document.createElement('div');
  
  if (sender === 'user') {
    div.className = "bg-primary text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-card text-left max-w-[85%] self-end font-medium leading-relaxed";
    div.innerText = text;
  } else {
    div.className = "flex items-start gap-2.5 max-w-[85%] self-start";
    div.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-[#E8F5E9] text-primary flex items-center justify-center shrink-0 border border-primary/10">
        <i data-lucide="sparkles" class="w-4.5 h-4.5 text-primary"></i>
      </div>
      <div class="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-card text-text border border-border-light text-left font-medium leading-relaxed">
        ${text}
      </div>
    `;
  }

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  safeCreateIcons();
}

function appendTypingIndicator() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const div = document.createElement('div');
  div.id = 'ai-typing-indicator';
  div.className = "flex items-start gap-2.5 max-w-[85%] self-start";
  div.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-[#E8F5E9] text-primary flex items-center justify-center shrink-0 border border-primary/10">
      <i data-lucide="sparkles" class="w-4.5 h-4.5 text-primary"></i>
    </div>
    <div class="bg-white px-5 py-3 rounded-2xl rounded-tl-none shadow-card text-text border border-border-light flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
      <span class="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
      <span class="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  safeCreateIcons();
}

function removeTypingIndicator() {
  const indicator = document.getElementById('ai-typing-indicator');
  if (indicator) indicator.remove();
}

// Dynamic NLP Simulation for Travel
function getAiResponse(query) {
  const q = query.toLowerCase();
  
  if (q.includes("hạ long") || q.includes("ha long")) {
    return "Vịnh Hạ Long là di sản thiên nhiên thế giới tuyệt đẹp! Chúng tôi đang có tour **Du thuyền Vịnh Hạ Long 3N2Đ** (chỉ từ 5.990.000đ/khách). Hành trình bao gồm chèo thuyền kayak, tham quan hang Sửng Sốt, đảo Ti Tốp và thưởng thức hải sản giữa vịnh. Bạn có muốn xem thêm chi tiết hoặc đặt ngay không?";
  }
  
  if (q.includes("sa pa") || q.includes("sapa")) {
    return "Sa Pa là địa điểm lý tưởng để ngắm ruộng bậc thang tuyệt mỹ. Bạn có thể tham khảo tour **Trekking Sa Pa – Fansipan 4N3Đ** (từ 4.590.000đ/khách). Bạn sẽ được leo đỉnh Fansipan bằng cáp treo, khám phá bản Cát Cát và nghỉ ngơi tại khách sạn mờ sương chuẩn 4 sao.";
  }
  
  if (q.includes("phú quốc") || q.includes("phu quoc")) {
    return "Thiên đường biển đảo Phú Quốc đang có ưu đãi lớn với **Combo Resort Vinpearl Phú Quốc 3N2Đ** (giá chỉ từ 4.990.000đ/khách). Combo bao gồm resort 5 sao khép kín, buffet sáng chuẩn vị và vé vui chơi VinWonders & Safari miễn phí.";
  }

  if (q.includes("miền trung") || q.includes("đà nẵng") || q.includes("hội an") || q.includes("hue") || q.includes("huế")) {
    return "Miền Trung mang vẻ đẹp của lịch sử cổ kính và bãi biển dài thơ mộng. Bạn nên đặt **Tour Hành trình Di sản Miền Trung 5N4Đ** (giá từ 6.990.000đ) để check-in tại Bà Nà Hills Đà Nẵng, ngắm đèn lồng phố cổ Hội An và thăm cố đô Huế thơ mộng.";
  }

  if (q.includes("combo") || q.includes("tiết kiệm")) {
    return "Vietnam Tours hiện có nhiều gói **Combo Siêu tiết kiệm** giảm giá đến 30% tại Sapa, Đà Nẵng, Hội An và Phú Quốc! Các combo đều đi kèm vé đưa đón Limousine cao cấp cùng resort nghỉ dưỡng 4-5 sao sang trọng.";
  }

  if (q.includes("giá") || q.includes("bao nhiêu") || q.includes("chi phí")) {
    return "Giá tour của chúng tôi dao động từ 3.000.000đ đến 12.000.000đ tùy thuộc vào hành trình du lịch. Đặc biệt, nếu bạn đặt trong hôm nay sẽ nhận ngay ưu đãi giảm 20% cho chuyến đi đầu tiên!";
  }

  return "Cảm ơn câu hỏi của bạn. Tôi là Trợ lý AI có thể tư vấn các tour hấp dẫn như **Vịnh Hạ Long**, **Sa Pa**, **Hội An**, hoặc các gói **Combo khuyến mãi**. Bạn đang quan tâm đến điểm đến nào vậy?";
}

// Stats Counter Animation
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const isFloat = counter.getAttribute('data-target').includes('.');
    const duration = 2000; // 2 seconds animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const updateCount = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeProgress * target;

      if (isFloat) {
        counter.innerText = currentValue.toFixed(1) + suffix;
      } else {
        counter.innerText = Math.floor(currentValue).toLocaleString('vi-VN') + suffix;
      }

      if (currentFrame < totalFrames) {
        requestAnimationFrame(updateCount);
      } else {
        if (isFloat) {
          counter.innerText = target.toFixed(1) + suffix;
        } else {
          counter.innerText = target.toLocaleString('vi-VN') + suffix;
        }
      }
    };

    requestAnimationFrame(updateCount);
  });
};

// Trigger on scroll using IntersectionObserver
const statsSection = document.querySelector('.stat-number')?.closest('section');
if (statsSection && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(statsSection);
} else {
  // Fallback
  setTimeout(animateCounters, 1000);
}
