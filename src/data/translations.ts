export type Language = "vi" | "en";

export interface Translations {
  [key: string]: {
    vi: string;
    en: string;
  };
}

const translations: Translations = {
  // ── Navigation ──
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.destinations": { vi: "Điểm đến", en: "Destinations" },
  "nav.tours": { vi: "Tour", en: "Tours" },
  "nav.combo": { vi: "Combo", en: "Combos" },
  "nav.promotions": { vi: "Khuyến mãi", en: "Promotions" },
  "nav.blog": { vi: "Blog", en: "Blog" },
  "nav.about": { vi: "Giới thiệu", en: "About" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },

  // ── Auth ──
  "auth.login": { vi: "Đăng nhập", en: "Sign In" },
  "auth.register": { vi: "Đăng ký", en: "Sign Up" },

  // ── Hero Section ──
  "hero.eyebrow": { vi: "Khám phá Việt Nam tươi đẹp", en: "Discover Beautiful Vietnam" },
  "hero.title": { vi: "Hành Trình Khám Phá\nVẻ Đẹp Việt Nam", en: "Journey Through\nVietnam's Beauty" },
  "hero.subtitle": {
    vi: "Từ vịnh Hạ Long huyền ảo đến phố cổ Hội An thơ mộng, khám phá những điểm đến tuyệt vời nhất Việt Nam cùng đội ngũ chuyên gia du lịch bản địa.",
    en: "From the mystical Ha Long Bay to the charming ancient town of Hoi An, discover Vietnam's most stunning destinations with our team of local travel experts."
  },
  "hero.cta.explore": { vi: "Khám phá ngay", en: "Explore Now" },
  "hero.cta.tours": { vi: "Xem tour nổi bật", en: "View Featured Tours" },
  "hero.badge.tours": { vi: "1000+ Tour", en: "1000+ Tours" },
  "hero.badge.rating": { vi: "4.9★ Đánh giá", en: "4.9★ Rating" },
  "hero.badge.support": { vi: "Hỗ trợ 24/7", en: "24/7 Support" },

  // ── Search Bar ──
  "search.destination": { vi: "Điểm đến", en: "Destination" },
  "search.destination.placeholder": { vi: "Bạn muốn đi đâu?", en: "Where do you want to go?" },
  "search.tourType": { vi: "Loại tour", en: "Tour Type" },
  "search.tourType.placeholder": { vi: "Chọn loại tour", en: "Select tour type" },
  "search.date": { vi: "Ngày khởi hành", en: "Departure Date" },
  "search.date.placeholder": { vi: "Chọn ngày", en: "Select date" },
  "search.guests": { vi: "Số khách", en: "Guests" },
  "search.guests.placeholder": { vi: "Số người", en: "Number of guests" },
  "search.budget": { vi: "Ngân sách", en: "Budget" },
  "search.budget.placeholder": { vi: "Chọn mức giá", en: "Select price range" },
  "search.button": { vi: "Tìm kiếm", en: "Search" },

  // ── Categories Section ──
  "categories.eyebrow": { vi: "Danh mục du lịch", en: "Travel Categories" },
  "categories.title": { vi: "Khám Phá Theo Phong Cách\nCủa Bạn", en: "Explore Your Way" },
  "categories.subtitle": {
    vi: "Lựa chọn trải nghiệm du lịch phù hợp với sở thích và phong cách riêng của bạn.",
    en: "Choose travel experiences that match your unique interests and style."
  },

  // ── Destinations Section ──
  "destinations.eyebrow": { vi: "Điểm đến nổi bật", en: "Featured Destinations" },
  "destinations.title": { vi: "Những Địa Danh\nKhông Thể Bỏ Lỡ", en: "Destinations You\nCan't Miss" },
  "destinations.subtitle": {
    vi: "Từ Bắc vào Nam, mỗi vùng đất là một câu chuyện, một trải nghiệm khác biệt đang chờ bạn.",
    en: "From North to South, each region tells a unique story, offering distinct experiences awaiting you."
  },

  // ── Featured Tours ──
  "tours.eyebrow": { vi: "Tour nổi bật", en: "Featured Tours" },
  "tours.title": { vi: "Hành Trình Được\nYêu Thích Nhất", en: "Most Loved\nJourneys" },
  "tours.subtitle": {
    vi: "Những tour du lịch được đánh giá cao nhất, thiết kế chuyên nghiệp với trải nghiệm hoàn hảo.",
    en: "Our highest-rated tours, professionally designed for a perfect travel experience."
  },

  // ── Regional Tours ──
  "regional.eyebrow": { vi: "Tour theo vùng miền", en: "Tours by Region" },
  "regional.title": { vi: "Khám Phá Theo\nVùng Miền", en: "Explore By\nRegion" },
  "regional.subtitle": {
    vi: "Ba miền Bắc - Trung - Nam, mỗi nơi mang một nét đặc trưng riêng biệt.",
    en: "North - Central - South, each region carries its own distinctive character."
  },
  "regional.north": { vi: "Miền Bắc", en: "Northern" },
  "regional.central": { vi: "Miền Trung", en: "Central" },
  "regional.south": { vi: "Miền Nam", en: "Southern" },

  // ── Seasonal Tours ──
  "seasonal.eyebrow": { vi: "Tour theo mùa", en: "Seasonal Tours" },
  "seasonal.title": { vi: "Du Lịch Theo Mùa", en: "Travel By Season" },
  "seasonal.subtitle": {
    vi: "Mỗi mùa mang đến một Việt Nam khác nhau, đều đẹp theo cách riêng.",
    en: "Each season reveals a different Vietnam, each beautiful in its own way."
  },

  // ── Combo Section ──
  "combo.eyebrow": { vi: "Combo tiết kiệm", en: "Value Combos" },
  "combo.title": { vi: "Combo Du Lịch\nTiết Kiệm Hơn", en: "Travel Combos\nBetter Value" },
  "combo.subtitle": {
    vi: "Kết hợp nhiều điểm đến trong một hành trình, tiết kiệm đến 30% chi phí.",
    en: "Combine multiple destinations in one journey, save up to 30% on costs."
  },
  "combo.save": { vi: "Tiết kiệm", en: "Save" },
  "combo.includes": { vi: "Bao gồm", en: "Includes" },

  // ── Experiences ──
  "experiences.eyebrow": { vi: "Trải nghiệm đặc sắc", en: "Unique Experiences" },
  "experiences.title": { vi: "Trải Nghiệm\nKhông Thể Quên", en: "Unforgettable\nExperiences" },
  "experiences.subtitle": {
    vi: "Những hoạt động độc đáo chỉ có tại Việt Nam, mang đến kỷ niệm đáng nhớ trọn đời.",
    en: "Unique activities only found in Vietnam, creating lifelong memorable moments."
  },

  // ── Why Choose Us ──
  "whyUs.eyebrow": { vi: "Tại sao chọn chúng tôi", en: "Why Choose Us" },
  "whyUs.title": { vi: "Lý Do Hàng Nghìn\nDu Khách Tin Tưởng", en: "Why Thousands of\nTravelers Trust Us" },
  "whyUs.subtitle": {
    vi: "Chúng tôi cam kết mang đến trải nghiệm du lịch tốt nhất với dịch vụ chuyên nghiệp.",
    en: "We are committed to delivering the best travel experience with professional service."
  },

  // ── Booking Process ──
  "process.eyebrow": { vi: "Quy trình đặt tour", en: "Booking Process" },
  "process.title": { vi: "Đặt Tour Dễ Dàng\nChỉ 4 Bước", en: "Easy Booking\nIn 4 Steps" },
  "process.subtitle": {
    vi: "Quy trình đơn giản, nhanh chóng, giúp bạn lên kế hoạch du lịch trong vài phút.",
    en: "Simple, fast process to help you plan your trip in just minutes."
  },

  // ── Stats ──
  "stats.tours": { vi: "Tour du lịch", en: "Travel Tours" },
  "stats.customers": { vi: "Khách hàng hài lòng", en: "Happy Customers" },
  "stats.destinations": { vi: "Điểm đến", en: "Destinations" },
  "stats.rating": { vi: "Đánh giá trung bình", en: "Average Rating" },

  // ── Testimonials ──
  "testimonials.eyebrow": { vi: "Đánh giá khách hàng", en: "Customer Reviews" },
  "testimonials.title": { vi: "Khách Hàng Nói Gì\nVề Chúng Tôi", en: "What Our Customers\nSay About Us" },
  "testimonials.subtitle": {
    vi: "Hàng nghìn du khách đã tin tưởng và hài lòng với dịch vụ của chúng tôi.",
    en: "Thousands of travelers have trusted and been satisfied with our services."
  },

  // ── Blog ──
  "blog.eyebrow": { vi: "Blog du lịch", en: "Travel Blog" },
  "blog.title": { vi: "Cẩm Nang Du Lịch\nViệt Nam", en: "Vietnam Travel\nGuide" },
  "blog.subtitle": {
    vi: "Bí kíp, kinh nghiệm và câu chuyện thú vị từ những hành trình khám phá Việt Nam.",
    en: "Tips, experiences, and fascinating stories from journeys exploring Vietnam."
  },
  "blog.readMore": { vi: "Đọc thêm", en: "Read More" },

  // ── Partners ──
  "partners.eyebrow": { vi: "Đối tác tin cậy", en: "Trusted Partners" },
  "partners.title": { vi: "Đối Tác Đồng Hành", en: "Our Partners" },
  "partners.subtitle": {
    vi: "Hợp tác với các thương hiệu hàng đầu để mang đến dịch vụ tốt nhất.",
    en: "Partnering with leading brands to deliver the best service."
  },

  // ── CTA Section ──
  "cta.eyebrow": { vi: "Bắt đầu hành trình", en: "Start Your Journey" },
  "cta.title": { vi: "Sẵn Sàng Khám Phá\nViệt Nam Cùng Chúng Tôi?", en: "Ready To Explore\nVietnam With Us?" },
  "cta.subtitle": {
    vi: "Đặt tour ngay hôm nay và nhận ưu đãi đặc biệt lên đến 20% cho chuyến đi đầu tiên.",
    en: "Book your tour today and receive special discounts up to 20% for your first trip."
  },
  "cta.button.book": { vi: "Đặt tour ngay", en: "Book Now" },
  "cta.button.contact": { vi: "Tư vấn miễn phí", en: "Free Consultation" },

  // ── Footer ──
  "footer.about.title": { vi: "Về Vietnam Tours", en: "About Vietnam Tours" },
  "footer.about.desc": {
    vi: "Đơn vị lữ hành hàng đầu Việt Nam, mang đến trải nghiệm du lịch đẳng cấp với đội ngũ chuyên gia bản địa giàu kinh nghiệm.",
    en: "Vietnam's leading travel agency, delivering premium travel experiences with an experienced team of local experts."
  },
  "footer.destinations.title": { vi: "Điểm đến", en: "Destinations" },
  "footer.services.title": { vi: "Dịch vụ", en: "Services" },
  "footer.services.privateTour": { vi: "Tour riêng", en: "Private Tours" },
  "footer.services.groupTour": { vi: "Tour nhóm", en: "Group Tours" },
  "footer.services.honeymoon": { vi: "Tuần trăng mật", en: "Honeymoon" },
  "footer.services.teamBuilding": { vi: "Team building", en: "Team Building" },
  "footer.services.mice": { vi: "MICE", en: "MICE" },
  "footer.contact.title": { vi: "Liên hệ", en: "Contact" },
  "footer.contact.address": { vi: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh", en: "123 Nguyen Hue, District 1, Ho Chi Minh City" },
  "footer.contact.phone": { vi: "1900 xxxx", en: "1900 xxxx" },
  "footer.contact.email": { vi: "info@vietnamtours.vn", en: "info@vietnamtours.vn" },
  "footer.newsletter.title": { vi: "Đăng ký nhận tin", en: "Newsletter" },
  "footer.newsletter.desc": {
    vi: "Nhận thông tin ưu đãi và cẩm nang du lịch mới nhất.",
    en: "Get the latest deals and travel guides."
  },
  "footer.newsletter.placeholder": { vi: "Email của bạn", en: "Your email" },
  "footer.newsletter.button": { vi: "Đăng ký", en: "Subscribe" },
  "footer.copyright": {
    vi: "© 2024 Vietnam Tours. Tất cả quyền được bảo lưu.",
    en: "© 2024 Vietnam Tours. All rights reserved."
  },

  // ── Common UI ──
  "ui.viewAll": { vi: "Xem tất cả", en: "View All" },
  "ui.learnMore": { vi: "Tìm hiểu thêm", en: "Learn More" },
  "ui.bookNow": { vi: "Đặt ngay", en: "Book Now" },
  "ui.from": { vi: "Từ", en: "From" },
  "ui.person": { vi: "người", en: "person" },
  "ui.days": { vi: "ngày", en: "days" },
  "ui.nights": { vi: "đêm", en: "nights" },
  "ui.tours": { vi: "tour", en: "tours" },
  "ui.reviews": { vi: "đánh giá", en: "reviews" },
  "ui.perPerson": { vi: "/người", en: "/person" },
  "ui.discount": { vi: "Giảm", en: "Off" },
  "ui.new": { vi: "Mới", en: "New" },
  "ui.hot": { vi: "Hot", en: "Hot" },
  "ui.bestSeller": { vi: "Bán chạy", en: "Best Seller" },

  // ── Mega Menu Regions ──
  "mega.north.title": { vi: "Miền Bắc", en: "Northern Vietnam" },
  "mega.central.title": { vi: "Miền Trung", en: "Central Vietnam" },
  "mega.south.title": { vi: "Miền Nam", en: "Southern Vietnam" },
};

export function getTranslation(key: string, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.vi || key;
}

export default translations;
