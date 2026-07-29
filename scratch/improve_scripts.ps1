$path = "C:\Users\DELL\.gemini\antigravity-ide\scratch\vietnam-tours-travel-ui\preview.html"
$content = [System.IO.File]::ReadAllText($path)

# New script block with robust try-catch and mobile menu handlers
$targetScript = @'
  <!-- Scripts -->
  <script>
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

    // Initialize Lucide Icons
    safeCreateIcons();

    // Initialize AOS
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

    // Language system dictionary
    const dictionary = {
      vi: {
        'nav.home': 'Trang chủ',
        'nav.destinations': 'Điểm đến',
        'nav.tours': 'Tour',
        'nav.combo': 'Combo',
        'nav.promotions': 'Khuyến mãi',
        'nav.blog': 'Blog',
        'nav.about': 'Giới thiệu',
        'nav.contact': 'Liên hệ',
        'auth.login': 'Đăng nhập',
        'auth.register': 'Đăng ký',
        'hero.eyebrow': 'Khám phá Việt Nam tươi đẹp',
        'hero.subtitle': 'Từ vịnh Hạ Long huyền ảo đến phố cổ Hội An thơ mộng, khám phá những điểm đến tuyệt vời nhất Việt Nam cùng đội ngũ chuyên gia du lịch bản địa.',
        'hero.cta.explore': 'Khám phá ngay',
        'hero.cta.tours': 'Xem tour nổi bật',
        'hero.badge.tours': '1000+ Tour',
        'hero.badge.rating': '4.9★ Đánh giá',
        'search.destination': 'Điểm đến',
        'search.tourType': 'Loại tour',
        'search.tourType.placeholder': 'Chọn loại tour',
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
        'dest.halong.desc': 'Di sản thiên nhiên thế giới với hàng nghìn đảo đảo đá vôi, hang động kỳ vĩ giữa làn nước xanh ngọc bích.',
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
        'nav.promotions': 'Promotions',
        'nav.blog': 'Blog',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'auth.login': 'Sign In',
        'auth.register': 'Sign Up',
        'hero.eyebrow': 'Discover Beautiful Vietnam',
        'hero.subtitle': 'From the mystical Ha Long Bay to the charming ancient town of Hoi An, discover Vietnam\'s most stunning destinations with our team of local travel experts.',
        'hero.cta.explore': 'Explore Now',
        'hero.cta.tours': 'View Featured',
        'hero.badge.tours': '1000+ Tours',
        'hero.badge.rating': '4.9★ Reviews',
        'search.destination': 'Destination',
        'search.tourType': 'Tour Type',
        'search.tourType.placeholder': 'Select type',
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
          el.innerText = dictionary[lang][key];
        }
      });

      // Special handling for dynamic content
      try {
        const heroTitle = document.getElementById('hero-main-title');
        const regionTitle = document.getElementById('region-title');
        const regionDesc = document.getElementById('region-desc');
        
        if (lang === 'en') {
          if (heroTitle) heroTitle.innerHTML = "Explore The Beauty<br>Of Vietnam";
          if (regionTitle) regionTitle.innerText = "Northern";
          if (regionDesc) regionDesc.innerText = "Majestic mountains, green terraced fields, diverse ethnic cultures, and delicious cuisine from the heart of Hanoi.";
        } else {
          if (heroTitle) heroTitle.innerHTML = "Hành Trình Khám Phá<br>Vẻ Đẹp Việt Nam";
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
          header.classList.remove('bg-transparent', 'py-4');
          header.classList.add('glass-strong', 'shadow-soft', 'py-2');
          logoText.classList.remove('text-white');
          logoText.classList.add('text-text');
          
          // Change colors of desktop menus
          document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('text-white', 'hover:bg-white/10');
            item.classList.add('text-text', 'hover:bg-primary/5');
            // Adjust lang pill border color
            if (item.id === 'lang-switch-btn') {
              item.classList.remove('border-white/20');
              item.classList.add('border-text/20');
            }
          });
        } else {
          header.classList.remove('glass-strong', 'shadow-soft', 'py-2');
          header.classList.add('bg-transparent', 'py-4');
          logoText.classList.remove('text-text');
          logoText.classList.add('text-white');

          document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('text-text', 'hover:bg-primary/5');
            item.classList.add('text-white', 'hover:bg-white/10');
            if (item.id === 'lang-switch-btn') {
              item.classList.remove('border-text/20');
              item.classList.add('border-white/20');
            }
          });
        }
      }
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

    // Auto Slider (Hero background images)
    const slides = [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=1920&q=80"
    ];
    let slideIndex = 0;
    const heroImg = document.getElementById('hero-slide-img');
    if (heroImg) {
      setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        heroImg.style.opacity = 0.4;
        setTimeout(() => {
          heroImg.src = slides[slideIndex];
          heroImg.style.opacity = 1;
        }, 500);
      }, 6000);
    }

    // Region Switch tabs
    const regionData = {
      north: {
        title: { vi: "Miền Bắc", en: "Northern" },
        desc: { vi: "Núi non hùng vĩ, ruộng bậc thang xanh ngắt, văn hóa dân tộc đa dạng và ẩm thực phong phú mang đậm nét văn hiến Kinh kỳ.", en: "Majestic mountains, green terraced fields, diverse ethnic cultures, and delicious cuisine from the heart of Hanoi." },
        img: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=80",
        chips: ["Hà Nội", "Vịnh Hạ Long", "Sa Pa", "Hà Giang"]
      },
      central: {
        title: { vi: "Miền Trung", en: "Central" },
        desc: { vi: "Di sản thế giới cổ kính, bãi biển dài thơ mộng, ẩm thực Cố đô tinh tế cùng sự đôn hậu, chân thành của con người miền Trung.", en: "Ancient world heritage, romantic long coastlines, refined imperial cuisine, and the warm, humble hospitality of local people." },
        img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
        chips: ["Đà Nẵng", "Hội An", "Huế", "Nha Trang"]
      },
      south: {
        title: { vi: "Miền Nam", en: "Southern" },
        desc: { vi: "Sông nước miệt vườn thanh bình, nhịp sống sầm uất hiện đại, chợ nổi Cái Răng tấp nập kết hợp cùng thiên đường nghỉ dưỡng biển ấm Phú Quốc.", en: "Peaceful orchards, bustling modern life, crowded floating markets, combined with the warm beach resort paradise of Phu Quoc." },
        img: "https://images.unsplash.com/photo-1557750255-c76072572da4?auto=format&fit=crop&w=800&q=80",
        chips: ["TP. Hồ Chí Minh", "Phú Quốc", "Cần Thơ", "Côn Đảo"]
      }
    };

    function switchRegion(regionKey, tabBtn) {
      // Toggle active classes on tab buttons
      document.querySelectorAll('.region-tab').forEach(btn => {
        btn.className = "region-tab px-6 py-2.5 rounded-full text-sm font-heading font-bold bg-white text-text-secondary hover:text-primary border border-border-light transition-all";
      });
      if (tabBtn) {
        tabBtn.className = "region-tab px-6 py-2.5 rounded-full text-sm font-heading font-bold bg-primary text-white shadow-lg shadow-primary/20 transition-all";
      }
      
      const data = regionData[regionKey];
      if (!data) return;
      
      // Update text safely
      try {
        const regTitle = document.getElementById('region-title');
        const regDesc = document.getElementById('region-desc');
        const regImg = document.getElementById('region-img');
        
        if (regTitle) regTitle.innerText = data.title[currentLang];
        if (regDesc) regDesc.innerText = data.desc[currentLang];
        if (regImg) regImg.src = data.img;
      } catch (e) {
        console.error(e);
      }
      
      // Update chips safely
      const chipsContainer = document.getElementById('region-chips');
      if (chipsContainer) {
        chipsContainer.innerHTML = '';
        data.chips.forEach(chip => {
          const span = document.createElement('span');
          span.className = "px-4 py-3 rounded-2xl bg-white border border-border-light text-sm font-medium text-text flex items-center gap-2";
          span.innerHTML = `<i data-lucide="map-pin" class="w-4 h-4 text-primary"></i> ${chip}`;
          chipsContainer.appendChild(span);
        });
      }
      safeCreateIcons();
    }
  </script>
'@

# Find start of script block
$startIndex = $content.IndexOf("<!-- Scripts -->")
if ($startIndex -ge 0) {
    $beforePart = $content.Substring(0, $startIndex)
    # Reassemble with the new scripts
    $newContent = $beforePart + $targetScript
    [System.IO.File]::WriteAllText($path, $newContent)
    Write-Output "Successfully updated script block with robust logic"
} else {
    Write-Output "Error: Script placeholder not found in file"
}
