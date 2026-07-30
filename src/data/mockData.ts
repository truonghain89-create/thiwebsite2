import { Language } from "./translations";

// ══════════════════════════════════════════
// Bilingual text helper type
// ══════════════════════════════════════════
type BiText = Record<Language, string>;

// ══════════════════════════════════════════
// TRAVEL CATEGORIES
// ══════════════════════════════════════════
export interface Category {
  id: string;
  name: BiText;
  icon: string; // lucide icon name
  count: number;
  color: string;
}

export const categories: Category[] = [
  { id: "beach", name: { vi: "Biển đảo", en: "Beach & Island" }, icon: "Waves", count: 156, color: "#0EA5E9" },
  { id: "mountain", name: { vi: "Núi rừng", en: "Mountains" }, icon: "Mountain", count: 89, color: "#22C55E" },
  { id: "heritage", name: { vi: "Di sản văn hóa", en: "Cultural Heritage" }, icon: "Landmark", count: 124, color: "#F59E0B" },
  { id: "cuisine", name: { vi: "Ẩm thực", en: "Cuisine" }, icon: "UtensilsCrossed", count: 78, color: "#EF4444" },
  { id: "adventure", name: { vi: "Mạo hiểm", en: "Adventure" }, icon: "Compass", count: 65, color: "#8B5CF6" },
  { id: "resort", name: { vi: "Nghỉ dưỡng", en: "Resort & Spa" }, icon: "Sparkles", count: 93, color: "#EC4899" },
  { id: "eco", name: { vi: "Sinh thái", en: "Ecotourism" }, icon: "TreePine", count: 47, color: "#10B981" },
  { id: "festival", name: { vi: "Lễ hội", en: "Festivals" }, icon: "PartyPopper", count: 34, color: "#F97316" },
];

// ══════════════════════════════════════════
// FEATURED DESTINATIONS
// ══════════════════════════════════════════
export interface Destination {
  id: string;
  name: BiText;
  region: BiText;
  description: BiText;
  image: string;
  tourCount: number;
  rating: number;
  featured?: boolean;
  bestTime?: BiText;
  highlights?: BiText[];
}

export const destinations: Destination[] = [
  {
    id: "ha-long",
    name: { vi: "Vịnh Hạ Long", en: "Ha Long Bay" },
    region: { vi: "Miền Bắc", en: "Northern" },
    description: {
      vi: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi, hang động kỳ vĩ giữa làn nước xanh ngọc bích.",
      en: "A UNESCO World Heritage Site with thousands of limestone islands and magnificent caves amid emerald waters."
    },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    tourCount: 45,
    rating: 4.9,
    featured: true,
  },
  {
    id: "hoi-an",
    name: { vi: "Hội An", en: "Hoi An" },
    region: { vi: "Miền Trung", en: "Central" },
    description: {
      vi: "Phố cổ lung linh ánh đèn lồng, nơi giao thoa văn hóa Đông – Tây với kiến trúc cổ kính hàng trăm năm.",
      en: "An ancient town glowing with lanterns, where East meets West in centuries-old architecture."
    },
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    tourCount: 38,
    rating: 4.8,
    featured: true,
  },
  {
    id: "sapa",
    name: { vi: "Sa Pa", en: "Sapa" },
    region: { vi: "Miền Bắc", en: "Northern" },
    description: {
      vi: "Ruộng bậc thang trải dài giữa núi rừng Tây Bắc, nơi sinh sống của các dân tộc thiểu số với văn hóa đặc sắc.",
      en: "Terraced rice fields stretching across the Northwest mountains, home to ethnic minorities with unique cultures."
    },
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=80",
    tourCount: 32,
    rating: 4.8,
    featured: true,
  },
  {
    id: "da-nang",
    name: { vi: "Đà Nẵng", en: "Da Nang" },
    region: { vi: "Miền Trung", en: "Central" },
    description: {
      vi: "Thành phố đáng sống với bãi biển đẹp, Cầu Vàng nổi tiếng và Bà Nà Hills huyền ảo.",
      en: "A livable city with stunning beaches, the iconic Golden Bridge, and the mystical Ba Na Hills."
    },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    tourCount: 41,
    rating: 4.7,
  },
  {
    id: "phu-quoc",
    name: { vi: "Phú Quốc", en: "Phu Quoc" },
    region: { vi: "Miền Nam", en: "Southern" },
    description: {
      vi: "Đảo ngọc với bãi biển hoang sơ, rừng nguyên sinh và những khu nghỉ dưỡng đẳng cấp quốc tế.",
      en: "The Pearl Island with pristine beaches, primeval forests, and world-class resorts."
    },
    image: "https://images.unsplash.com/photo-1557750255-c76072572da4?auto=format&fit=crop&w=800&q=80",
    tourCount: 36,
    rating: 4.8,
  },
  {
    id: "ninh-binh",
    name: { vi: "Ninh Bình", en: "Ninh Binh" },
    region: { vi: "Miền Bắc", en: "Northern" },
    description: {
      vi: "Tràng An – Hạ Long trên cạn với những dãy núi đá vôi hùng vĩ và dòng sông uốn lượn thơ mộng.",
      en: "Trang An – the 'Ha Long Bay on land' with majestic limestone mountains and winding rivers."
    },
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80",
    tourCount: 28,
    rating: 4.7,
  },
  {
    id: "ha-giang",
    name: { vi: "Hà Giang", en: "Ha Giang" },
    region: { vi: "Miền Bắc", en: "Northern" },
    description: {
      vi: "Cao nguyên đá hùng vĩ, cung đường đèo ngoạn mục và văn hóa dân tộc H'Mông đậm đà bản sắc.",
      en: "Majestic rocky plateau, spectacular mountain passes, and rich H'Mong ethnic culture."
    },
    image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=800&q=80",
    tourCount: 24,
    rating: 4.9,
  },
  {
    id: "hue",
    name: { vi: "Huế", en: "Hue" },
    region: { vi: "Miền Trung", en: "Central" },
    description: {
      vi: "Cố đô với di sản hoàng cung, lăng tẩm và nghệ thuật ẩm thực tinh tế bên dòng sông Hương.",
      en: "The imperial capital with royal palaces, tombs, and refined cuisine along the Perfume River."
    },
    image: "https://images.unsplash.com/photo-1585828922344-dd6e19a13d10?auto=format&fit=crop&w=800&q=80",
    tourCount: 35,
    rating: 4.7,
  },
  {
    id: "da-lat",
    name: { vi: "Đà Lạt", en: "Da Lat" },
    region: { vi: "Miền Trung", en: "Central" },
    description: {
      vi: "Thành phố ngàn hoa trên cao nguyên mát lành, với kiến trúc Pháp cổ và thiên nhiên lãng mạn.",
      en: "The City of Flowers on a cool highland, with French colonial architecture and romantic nature."
    },
    image: "https://images.unsplash.com/photo-1555921015-5532091f6026?auto=format&fit=crop&w=800&q=80",
    tourCount: 30,
    rating: 4.6,
  },
  {
    id: "moc-chau",
    name: { vi: "Mộc Châu", en: "Moc Chau" },
    region: { vi: "Miền Bắc", en: "Northern" },
    description: {
      vi: "Cao nguyên xanh mướt với đồi chè bát ngát, vườn mận trắng xóa và khí hậu trong lành.",
      en: "A lush green plateau with vast tea hills, white plum gardens, and fresh mountain air."
    },
    image: "https://images.unsplash.com/photo-1600298881979-dba5210f58ab?auto=format&fit=crop&w=800&q=80",
    tourCount: 18,
    rating: 4.5,
  },
  {
    id: "can-tho",
    name: { vi: "Cần Thơ", en: "Can Tho" },
    region: { vi: "Miền Nam", en: "Southern" },
    description: {
      vi: "Thủ phủ miền Tây sông nước với chợ nổi Cái Răng nổi tiếng và vườn trái cây bốn mùa.",
      en: "The capital of the Mekong Delta with the famous Cai Rang floating market and year-round fruit orchards."
    },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    tourCount: 22,
    rating: 4.6,
  },
  {
    id: "con-dao",
    name: { vi: "Côn Đảo", en: "Con Dao" },
    region: { vi: "Miền Nam", en: "Southern" },
    description: {
      vi: "Quần đảo hoang sơ với bãi biển tuyệt đẹp, rạn san hô đa dạng và lịch sử hào hùng.",
      en: "A pristine archipelago with stunning beaches, diverse coral reefs, and heroic history."
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tourCount: 15,
    rating: 4.8,
  },
];

// ══════════════════════════════════════════
// FEATURED TOURS
// ══════════════════════════════════════════
export interface Tour {
  id: string;
  title: BiText;
  description: BiText;
  image: string;
  priceVND: number;
  priceUSD: number;
  originalPriceVND?: number;
  duration: number; // days
  rating: number;
  reviewCount: number;
  difficulty: BiText;
  groupSize: BiText;
  destinations: string[];
  highlights: BiText[];
  badge?: string;
  itinerary?: {
    day: number;
    title: BiText;
    desc: BiText;
  }[];
  included?: BiText[];
  notIncluded?: BiText[];
}

export const tours: Tour[] = [
  {
    id: "ha-long-cruise",
    title: { vi: "Du thuyền Vịnh Hạ Long 3N2Đ", en: "Ha Long Bay 3D2N Cruise" },
    description: {
      vi: "Trải nghiệm du thuyền 5 sao trên Vịnh Hạ Long, khám phá hang Sửng Sốt, đảo Ti Tốp và tận hưởng hoàng hôn tuyệt đẹp giữa vịnh.",
      en: "Experience a 5-star cruise on Ha Long Bay, explore Sung Sot Cave, Ti Top Island and enjoy stunning sunsets."
    },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    priceVND: 5990000,
    priceUSD: 249,
    originalPriceVND: 7490000,
    duration: 3,
    rating: 4.9,
    reviewCount: 328,
    difficulty: { vi: "Dễ", en: "Easy" },
    groupSize: { vi: "2-15 người", en: "2-15 people" },
    destinations: ["ha-long"],
    highlights: [
      { vi: "Du thuyền 5 sao", en: "5-star cruise" },
      { vi: "Chèo kayak", en: "Kayaking" },
      { vi: "Tắm biển", en: "Swimming" },
    ],
    badge: "bestSeller",
  },
  {
    id: "sapa-trekking",
    title: { vi: "Trekking Sa Pa – Fansipan 4N3Đ", en: "Sapa – Fansipan Trekking 4D3N" },
    description: {
      vi: "Chinh phục nóc nhà Đông Dương, trekking qua ruộng bậc thang, thăm bản làng dân tộc H'Mông và Dao đỏ.",
      en: "Conquer the Roof of Indochina, trek through rice terraces, visit H'Mong and Red Dao ethnic villages."
    },
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=80",
    priceVND: 4590000,
    priceUSD: 189,
    duration: 4,
    rating: 4.8,
    reviewCount: 245,
    difficulty: { vi: "Trung bình", en: "Moderate" },
    groupSize: { vi: "4-12 người", en: "4-12 people" },
    destinations: ["sapa"],
    highlights: [
      { vi: "Leo Fansipan", en: "Fansipan summit" },
      { vi: "Homestay bản làng", en: "Village homestay" },
      { vi: "Văn hóa dân tộc", en: "Ethnic culture" },
    ],
    badge: "hot",
  },
  {
    id: "hoi-an-heritage",
    title: { vi: "Di sản Miền Trung 5N4Đ", en: "Central Heritage 5D4N" },
    description: {
      vi: "Khám phá Đà Nẵng – Hội An – Huế, trải nghiệm phố cổ lung linh, Cầu Vàng và Đại Nội Huế.",
      en: "Explore Da Nang – Hoi An – Hue, experience the glowing ancient town, Golden Bridge and Hue Imperial City."
    },
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    priceVND: 6990000,
    priceUSD: 289,
    originalPriceVND: 8490000,
    duration: 5,
    rating: 4.9,
    reviewCount: 412,
    difficulty: { vi: "Dễ", en: "Easy" },
    groupSize: { vi: "2-20 người", en: "2-20 people" },
    destinations: ["da-nang", "hoi-an", "hue"],
    highlights: [
      { vi: "Phố cổ Hội An", en: "Hoi An ancient town" },
      { vi: "Cầu Vàng Bà Nà", en: "Golden Bridge" },
      { vi: "Đại Nội Huế", en: "Hue Citadel" },
    ],
    badge: "bestSeller",
  },
  {
    id: "ha-giang-loop",
    title: { vi: "Vòng cung Hà Giang 4N3Đ", en: "Ha Giang Loop 4D3N" },
    description: {
      vi: "Chinh phục cung đường huyền thoại Hà Giang, vượt đèo Mã Pì Lèng, ngắm sông Nho Quế từ trên cao.",
      en: "Conquer the legendary Ha Giang road, cross Ma Pi Leng pass, view Nho Que river from above."
    },
    image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=800&q=80",
    priceVND: 4290000,
    priceUSD: 179,
    duration: 4,
    rating: 4.9,
    reviewCount: 189,
    difficulty: { vi: "Trung bình", en: "Moderate" },
    groupSize: { vi: "2-8 người", en: "2-8 people" },
    destinations: ["ha-giang"],
    highlights: [
      { vi: "Đèo Mã Pì Lèng", en: "Ma Pi Leng Pass" },
      { vi: "Sông Nho Quế", en: "Nho Que River" },
      { vi: "Chợ phiên", en: "Local market" },
    ],
    badge: "new",
  },
  {
    id: "phu-quoc-paradise",
    title: { vi: "Thiên đường Phú Quốc 4N3Đ", en: "Phu Quoc Paradise 4D3N" },
    description: {
      vi: "Nghỉ dưỡng tại resort 5 sao, lặn ngắm san hô, khám phá làng chài và thưởng thức hải sản tươi sống.",
      en: "Stay at a 5-star resort, snorkel coral reefs, explore fishing villages and enjoy fresh seafood."
    },
    image: "https://images.unsplash.com/photo-1557750255-c76072572da4?auto=format&fit=crop&w=800&q=80",
    priceVND: 7490000,
    priceUSD: 309,
    originalPriceVND: 8990000,
    duration: 4,
    rating: 4.7,
    reviewCount: 276,
    difficulty: { vi: "Dễ", en: "Easy" },
    groupSize: { vi: "2-10 người", en: "2-10 people" },
    destinations: ["phu-quoc"],
    highlights: [
      { vi: "Resort 5 sao", en: "5-star resort" },
      { vi: "Lặn san hô", en: "Coral snorkeling" },
      { vi: "Câu mực đêm", en: "Night squid fishing" },
    ],
  },
  {
    id: "ninh-binh-explorer",
    title: { vi: "Khám phá Ninh Bình 2N1Đ", en: "Ninh Binh Explorer 2D1N" },
    description: {
      vi: "Tham quan Tràng An, Tam Cốc – Bích Động, chùa Bái Đính và cố đô Hoa Lư trong hành trình 2 ngày.",
      en: "Visit Trang An, Tam Coc – Bich Dong, Bai Dinh Pagoda and the ancient capital Hoa Lu in 2 days."
    },
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80",
    priceVND: 2490000,
    priceUSD: 99,
    duration: 2,
    rating: 4.7,
    reviewCount: 198,
    difficulty: { vi: "Dễ", en: "Easy" },
    groupSize: { vi: "2-20 người", en: "2-20 people" },
    destinations: ["ninh-binh"],
    highlights: [
      { vi: "Tràng An", en: "Trang An" },
      { vi: "Tam Cốc", en: "Tam Coc" },
      { vi: "Chùa Bái Đính", en: "Bai Dinh Pagoda" },
    ],
  },
];

// ══════════════════════════════════════════
// SEASONAL TOURS
// ══════════════════════════════════════════
export interface SeasonalTour {
  id: string;
  season: BiText;
  months: BiText;
  title: BiText;
  description: BiText;
  image: string;
  color: string;
  destinations: string[];
}

export const seasonalTours: SeasonalTour[] = [
  {
    id: "spring",
    season: { vi: "Mùa Xuân", en: "Spring" },
    months: { vi: "Tháng 2 - 4", en: "Feb - Apr" },
    title: { vi: "Hoa nở rực rỡ khắp nẻo đường", en: "Flowers blooming across every path" },
    description: {
      vi: "Mộc Châu tràn ngập hoa mận, Sa Pa xanh mướt ruộng bậc thang mới cấy, Hà Giang rực rỡ hoa tam giác mạch.",
      en: "Moc Chau filled with plum blossoms, Sapa green with newly planted terraces, Ha Giang vibrant with buckwheat flowers."
    },
    image: "https://images.unsplash.com/photo-1600298881979-dba5210f58ab?auto=format&fit=crop&w=800&q=80",
    color: "#EC4899",
    destinations: ["moc-chau", "sapa", "ha-giang"],
  },
  {
    id: "summer",
    season: { vi: "Mùa Hè", en: "Summer" },
    months: { vi: "Tháng 5 - 7", en: "May - Jul" },
    title: { vi: "Biển xanh cát trắng nắng vàng", en: "Blue seas, white sand, golden sun" },
    description: {
      vi: "Phú Quốc, Côn Đảo với bãi biển hoang sơ tuyệt đẹp, Đà Nẵng sôi động với mùa lễ hội pháo hoa.",
      en: "Phu Quoc, Con Dao with pristine beaches, Da Nang vibrant with the fireworks festival season."
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    color: "#0EA5E9",
    destinations: ["phu-quoc", "con-dao", "da-nang"],
  },
  {
    id: "autumn",
    season: { vi: "Mùa Thu", en: "Autumn" },
    months: { vi: "Tháng 8 - 10", en: "Aug - Oct" },
    title: { vi: "Lúa chín vàng, trời thu trong xanh", en: "Golden rice, clear autumn skies" },
    description: {
      vi: "Sa Pa mùa lúa chín, Ninh Bình vàng rực cánh đồng, Hà Giang mùa tam giác mạch nở hồng.",
      en: "Sapa during rice harvest, Ninh Binh glowing with golden fields, Ha Giang's pink buckwheat season."
    },
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=80",
    color: "#F59E0B",
    destinations: ["sapa", "ninh-binh", "ha-giang"],
  },
  {
    id: "winter",
    season: { vi: "Mùa Đông", en: "Winter" },
    months: { vi: "Tháng 11 - 1", en: "Nov - Jan" },
    title: { vi: "Mây phủ đỉnh núi, ấm áp tình người", en: "Clouds atop peaks, warm hearts below" },
    description: {
      vi: "Đà Lạt lãng mạn trong sương, Hội An lung linh mùa lễ hội, Cần Thơ chợ nổi mùa nước nổi.",
      en: "Romantic Da Lat in the mist, Hoi An glowing during festival season, Can Tho's floating markets."
    },
    image: "https://images.unsplash.com/photo-1555921015-5532091f6026?auto=format&fit=crop&w=800&q=80",
    color: "#6366F1",
    destinations: ["da-lat", "hoi-an", "can-tho"],
  },
];

// ══════════════════════════════════════════
// REGIONAL TOURS
// ══════════════════════════════════════════
export interface RegionalTour {
  id: string;
  region: BiText;
  description: BiText;
  image: string;
  tourCount: number;
  destinations: BiText[];
}

export const regionalTours: RegionalTour[] = [
  {
    id: "north",
    region: { vi: "Miền Bắc", en: "Northern" },
    description: {
      vi: "Núi non hùng vĩ, ruộng bậc thang xanh ngắt, văn hóa dân tộc đa dạng và ẩm thực phong phú mang đậm nét văn hiến Kinh kỳ.",
      en: "Majestic mountains, green terraced fields, diverse ethnic cultures, and delicious cuisine from the heart of Hanoi."
    },
    image: "/images/sapa.png",
    tourCount: 156,
    destinations: [
      { vi: "Hà Nội", en: "Hanoi" },
      { vi: "Vịnh Hạ Long", en: "Ha Long Bay" },
      { vi: "Sa Pa", en: "Sapa" },
      { vi: "Hà Giang", en: "Ha Giang" },
    ],
  },
  {
    id: "central",
    region: { vi: "Miền Trung", en: "Central" },
    description: {
      vi: "Di sản thế giới cổ kính, bãi biển dài thơ mộng, ẩm thực Cố đô tinh tế cùng sự đôn hậu, chân thành của con người miền Trung.",
      en: "Ancient world heritage, romantic long coastlines, refined imperial cuisine, and the warm, humble hospitality of local people."
    },
    image: "/images/hoian.png",
    tourCount: 189,
    destinations: [
      { vi: "Đà Nẵng", en: "Da Nang" },
      { vi: "Hội An", en: "Hoi An" },
      { vi: "Huế", en: "Hue" },
      { vi: "Nha Trang", en: "Nha Trang" },
    ],
  },
  {
    id: "south",
    region: { vi: "Miền Nam", en: "Southern" },
    description: {
      vi: "Sông nước miệt vườn thanh bình, nhịp sống sầm uất hiện đại, chợ nổi Cái Răng tấp nập kết hợp cùng thiên đường nghỉ dưỡng biển ấm Phú Quốc.",
      en: "Peaceful orchards, bustling modern life, crowded floating markets, combined with the warm beach resort paradise of Phu Quoc."
    },
    image: "/images/phuquoc.png",
    tourCount: 134,
    destinations: [
      { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" },
      { vi: "Phú Quốc", en: "Phu Quoc" },
      { vi: "Cần Thơ", en: "Can Tho" },
      { vi: "Côn Đảo", en: "Con Dao" },
    ],
  },
];

// ══════════════════════════════════════════
// COMBO PACKAGES
// ══════════════════════════════════════════
export interface ComboPackage {
  id: string;
  title: BiText;
  description: BiText;
  image: string;
  priceVND: number;
  originalPriceVND: number;
  duration: number;
  savings: number; // percentage
  includes: BiText[];
  destinations: string[];
}

export const combos: ComboPackage[] = [
  {
    id: "combo-north",
    title: { vi: "Combo Tây Bắc Huyền Thoại", en: "Legendary Northwest Combo" },
    description: {
      vi: "Hà Nội – Sa Pa – Hà Giang – Ninh Bình: 7 ngày trọn gói khám phá vùng cao Tây Bắc hùng vĩ.",
      en: "Hanoi – Sapa – Ha Giang – Ninh Binh: 7-day all-inclusive exploring the majestic Northwest highlands."
    },
    image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=800&q=80",
    priceVND: 11990000,
    originalPriceVND: 16990000,
    duration: 7,
    savings: 30,
    includes: [
      { vi: "Khách sạn 4 sao", en: "4-star hotel" },
      { vi: "Xe đưa đón", en: "Transfer included" },
      { vi: "Hướng dẫn viên", en: "Tour guide" },
      { vi: "Bữa ăn chính", en: "Main meals" },
      { vi: "Vé tham quan", en: "Entry tickets" },
    ],
    destinations: ["sapa", "ha-giang", "ninh-binh"],
  },
  {
    id: "combo-central",
    title: { vi: "Combo Di Sản Miền Trung", en: "Central Heritage Combo" },
    description: {
      vi: "Đà Nẵng – Hội An – Huế – Đà Lạt: 6 ngày khám phá di sản văn hóa và thiên nhiên miền Trung.",
      en: "Da Nang – Hoi An – Hue – Da Lat: 6-day cultural heritage and nature exploration in Central Vietnam."
    },
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    priceVND: 9990000,
    originalPriceVND: 13990000,
    duration: 6,
    savings: 28,
    includes: [
      { vi: "Khách sạn 4-5 sao", en: "4-5 star hotel" },
      { vi: "Vé máy bay", en: "Flights included" },
      { vi: "Hướng dẫn viên", en: "Tour guide" },
      { vi: "Bữa ăn chính", en: "Main meals" },
      { vi: "Trải nghiệm đặc biệt", en: "Special experiences" },
    ],
    destinations: ["da-nang", "hoi-an", "hue", "da-lat"],
  },
  {
    id: "combo-south",
    title: { vi: "Combo Đảo Ngọc & Sông Nước", en: "Pearl Island & Waterways Combo" },
    description: {
      vi: "Phú Quốc – Cần Thơ – Côn Đảo: 8 ngày nghỉ dưỡng biển đảo kết hợp khám phá miền Tây sông nước.",
      en: "Phu Quoc – Can Tho – Con Dao: 8-day beach resort combined with Mekong Delta exploration."
    },
    image: "https://images.unsplash.com/photo-1557750255-c76072572da4?auto=format&fit=crop&w=800&q=80",
    priceVND: 14990000,
    originalPriceVND: 19990000,
    duration: 8,
    savings: 25,
    includes: [
      { vi: "Resort 5 sao", en: "5-star resort" },
      { vi: "Vé máy bay", en: "Flights included" },
      { vi: "Tour lặn biển", en: "Diving tour" },
      { vi: "Chợ nổi", en: "Floating market" },
      { vi: "Hải sản tươi sống", en: "Fresh seafood" },
    ],
    destinations: ["phu-quoc", "can-tho", "con-dao"],
  },
];

// ══════════════════════════════════════════
// UNIQUE EXPERIENCES
// ══════════════════════════════════════════
export interface Experience {
  id: string;
  title: BiText;
  category: BiText;
  description: BiText;
  image: string;
  duration: BiText;
  price: BiText;
}

export const experiences: Experience[] = [
  {
    id: "kayak-halong",
    title: { vi: "Chèo kayak Vịnh Hạ Long", en: "Kayaking in Ha Long Bay" },
    category: { vi: "Mạo hiểm", en: "Adventure" },
    description: {
      vi: "Tự tay chèo kayak len lỏi giữa hàng nghìn hòn đảo đá vôi, khám phá hang động bí ẩn và bãi tắm hoang sơ.",
      en: "Paddle your kayak through thousands of limestone islands, discover mysterious caves and pristine swimming spots."
    },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    duration: { vi: "3-4 giờ", en: "3-4 hours" },
    price: { vi: "Từ 590.000đ", en: "From $25" },
  },
  {
    id: "trek-sapa",
    title: { vi: "Trekking bản làng Sa Pa", en: "Village Trekking in Sapa" },
    category: { vi: "Khám phá", en: "Discovery" },
    description: {
      vi: "Đi bộ qua ruộng bậc thang tuyệt đẹp, giao lưu với đồng bào H'Mông, thưởng thức ẩm thực địa phương.",
      en: "Hike through stunning terraced fields, interact with H'Mong people, enjoy local cuisine."
    },
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=80",
    duration: { vi: "1 ngày", en: "Full day" },
    price: { vi: "Từ 490.000đ", en: "From $20" },
  },
  {
    id: "cooking-hoian",
    title: { vi: "Học nấu ăn tại Hội An", en: "Cooking Class in Hoi An" },
    category: { vi: "Ẩm thực", en: "Cuisine" },
    description: {
      vi: "Cùng đầu bếp địa phương đi chợ, học nấu các món đặc trưng miền Trung: cao lầu, mì Quảng, bánh xèo.",
      en: "Join a local chef to visit the market and cook Central Vietnamese specialties: Cao Lau, Mi Quang, Banh Xeo."
    },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    duration: { vi: "4-5 giờ", en: "4-5 hours" },
    price: { vi: "Từ 790.000đ", en: "From $33" },
  },
  {
    id: "homestay-hagiang",
    title: { vi: "Homestay bản Hà Giang", en: "Homestay in Ha Giang" },
    category: { vi: "Văn hóa", en: "Culture" },
    description: {
      vi: "Ở cùng gia đình người Lô Lô, học dệt thổ cẩm, nấu rượu ngô và ngắm bầu trời sao rực rỡ.",
      en: "Stay with a Lo Lo family, learn brocade weaving, make corn wine and gaze at the starry sky."
    },
    image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=800&q=80",
    duration: { vi: "2 ngày 1 đêm", en: "2 days 1 night" },
    price: { vi: "Từ 890.000đ", en: "From $37" },
  },
  {
    id: "cycling-mekong",
    title: { vi: "Đạp xe Đồng bằng sông Cửu Long", en: "Cycling the Mekong Delta" },
    category: { vi: "Sinh thái", en: "Ecotourism" },
    description: {
      vi: "Đạp xe qua vườn trái cây, thăm lò kẹo dừa, chợ nổi Cái Răng và trải nghiệm cuộc sống sông nước.",
      en: "Cycle through fruit orchards, visit coconut candy workshops, Cai Rang floating market and experience river life."
    },
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    duration: { vi: "1 ngày", en: "Full day" },
    price: { vi: "Từ 690.000đ", en: "From $29" },
  },
  {
    id: "photo-dalat",
    title: { vi: "Tour nhiếp ảnh Đà Lạt", en: "Photography Tour in Da Lat" },
    category: { vi: "Nghệ thuật", en: "Art" },
    description: {
      vi: "Săn mây đồi chè, chụp hoa dã quỳ mùa thu, bình minh hồ Tuyền Lâm cùng nhiếp ảnh gia chuyên nghiệp.",
      en: "Chase clouds over tea hills, capture autumn wildflowers, Tuyen Lam Lake sunrise with a professional photographer."
    },
    image: "https://images.unsplash.com/photo-1555921015-5532091f6026?auto=format&fit=crop&w=800&q=80",
    duration: { vi: "2 ngày", en: "2 days" },
    price: { vi: "Từ 1.290.000đ", en: "From $54" },
  },
];

// ══════════════════════════════════════════
// WHY CHOOSE US
// ══════════════════════════════════════════
export interface WhyUsItem {
  id: string;
  icon: string;
  title: BiText;
  description: BiText;
}

export const whyChooseUs: WhyUsItem[] = [
  {
    id: "expert",
    icon: "Users",
    title: { vi: "Chuyên gia bản địa", en: "Local Experts" },
    description: {
      vi: "Đội ngũ hướng dẫn viên bản địa giàu kinh nghiệm, am hiểu văn hóa và địa lý từng vùng miền.",
      en: "Experienced local guides with deep knowledge of culture and geography of each region."
    },
  },
  {
    id: "quality",
    icon: "Award",
    title: { vi: "Chất lượng đảm bảo", en: "Quality Guaranteed" },
    description: {
      vi: "Cam kết dịch vụ 5 sao, khách sạn, nhà hàng và phương tiện di chuyển đều được chọn lọc kỹ lưỡng.",
      en: "5-star service commitment with carefully selected hotels, restaurants, and transportation."
    },
  },
  {
    id: "price",
    icon: "BadgePercent",
    title: { vi: "Giá cạnh tranh nhất", en: "Best Price" },
    description: {
      vi: "Cam kết giá tốt nhất thị trường. Nếu tìm được giá rẻ hơn, chúng tôi hoàn tiền chênh lệch.",
      en: "Best market price guaranteed. If you find a lower price, we'll refund the difference."
    },
  },
  {
    id: "support",
    icon: "Headphones",
    title: { vi: "Hỗ trợ 24/7", en: "24/7 Support" },
    description: {
      vi: "Đội ngũ tư vấn trực tuyến 24/7, sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi trong suốt hành trình.",
      en: "24/7 online support team, ready to assist you anytime, anywhere throughout your journey."
    },
  },
  {
    id: "customize",
    icon: "Settings",
    title: { vi: "Tùy chỉnh linh hoạt", en: "Flexible Customization" },
    description: {
      vi: "Dễ dàng điều chỉnh lịch trình theo nhu cầu cá nhân, đảm bảo chuyến đi hoàn hảo cho bạn.",
      en: "Easily adjust itineraries to personal needs, ensuring the perfect trip for you."
    },
  },
  {
    id: "safety",
    icon: "ShieldCheck",
    title: { vi: "An toàn tuyệt đối", en: "Complete Safety" },
    description: {
      vi: "Bảo hiểm du lịch toàn diện, phương tiện kiểm định định kỳ, ưu tiên an toàn cho du khách.",
      en: "Comprehensive travel insurance, regularly inspected vehicles, prioritizing traveler safety."
    },
  },
];

// ══════════════════════════════════════════
// BOOKING PROCESS
// ══════════════════════════════════════════
export interface ProcessStep {
  id: number;
  icon: string;
  title: BiText;
  description: BiText;
}

export const bookingProcess: ProcessStep[] = [
  {
    id: 1,
    icon: "Search",
    title: { vi: "Tìm kiếm tour", en: "Search Tours" },
    description: {
      vi: "Chọn điểm đến, ngày khởi hành và số lượng khách phù hợp với kế hoạch của bạn.",
      en: "Select destination, departure date and number of guests that fit your plans."
    },
  },
  {
    id: 2,
    icon: "CalendarCheck",
    title: { vi: "Đặt lịch trình", en: "Schedule Booking" },
    description: {
      vi: "Xem chi tiết tour, lựa chọn gói dịch vụ và tùy chỉnh lịch trình theo ý muốn.",
      en: "View tour details, select service packages and customize itinerary as desired."
    },
  },
  {
    id: 3,
    icon: "CreditCard",
    title: { vi: "Thanh toán an toàn", en: "Secure Payment" },
    description: {
      vi: "Thanh toán dễ dàng qua nhiều phương thức: thẻ ngân hàng, ví điện tử hoặc chuyển khoản.",
      en: "Pay easily via multiple methods: bank card, e-wallet, or bank transfer."
    },
  },
  {
    id: 4,
    icon: "Plane",
    title: { vi: "Lên đường khám phá", en: "Start Exploring" },
    description: {
      vi: "Nhận xác nhận qua email, chuẩn bị hành lý và bắt đầu hành trình khám phá tuyệt vời!",
      en: "Receive email confirmation, pack your bags and start your amazing exploration journey!"
    },
  },
];

// ══════════════════════════════════════════
// STATISTICS
// ══════════════════════════════════════════
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: BiText;
  icon: string;
}

export const stats: Stat[] = [
  { id: "tours", value: 1000, suffix: "+", label: { vi: "Tour du lịch", en: "Travel Tours" }, icon: "Map" },
  { id: "customers", value: 50000, suffix: "+", label: { vi: "Khách hàng", en: "Customers" }, icon: "Users" },
  { id: "destinations", value: 100, suffix: "+", label: { vi: "Điểm đến", en: "Destinations" }, icon: "MapPin" },
  { id: "rating", value: 4.9, suffix: "★", label: { vi: "Đánh giá", en: "Rating" }, icon: "Star" },
];

// ══════════════════════════════════════════
// CUSTOMER REVIEWS
// ══════════════════════════════════════════
export interface Testimonial {
  id: string;
  name: string;
  role: BiText;
  avatar: string;
  rating: number;
  quote: BiText;
  tourName: BiText;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Nguyễn Thanh Hà",
    role: { vi: "Doanh nhân, Hà Nội", en: "Entrepreneur, Hanoi" },
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    quote: {
      vi: "Chuyến đi Hạ Long tuyệt vời! Du thuyền sang trọng, dịch vụ chu đáo từ A-Z. Cảnh đẹp như tranh vẽ, nhất định sẽ quay lại.",
      en: "Amazing Ha Long trip! Luxurious cruise, thoughtful service from A to Z. Scenery like a painting, will definitely return."
    },
    tourName: { vi: "Du thuyền Vịnh Hạ Long", en: "Ha Long Bay Cruise" },
  },
  {
    id: "t2",
    name: "David Thompson",
    role: { vi: "Nhiếp ảnh gia, Úc", en: "Photographer, Australia" },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    quote: {
      vi: "Trekking Sa Pa là trải nghiệm tuyệt vời nhất trong đời tôi. Ruộng bậc thang đẹp mê hồn, người dân thân thiện vô cùng.",
      en: "Sapa trekking was the best experience of my life. The terraced fields are breathtaking, the people incredibly friendly."
    },
    tourName: { vi: "Trekking Sa Pa", en: "Sapa Trekking" },
  },
  {
    id: "t3",
    name: "Trần Minh Anh",
    role: { vi: "Giáo viên, TP.HCM", en: "Teacher, HCMC" },
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    quote: {
      vi: "Combo Miền Trung siêu tiết kiệm mà chất lượng không hề giảm. Hội An về đêm đẹp lung linh, ẩm thực Huế tuyệt hảo.",
      en: "The Central combo was super affordable without compromising quality. Hoi An at night is magical, Hue cuisine is superb."
    },
    tourName: { vi: "Combo Di Sản Miền Trung", en: "Central Heritage Combo" },
  },
  {
    id: "t4",
    name: "Yuki Tanaka",
    role: { vi: "Kỹ sư, Nhật Bản", en: "Engineer, Japan" },
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    quote: {
      vi: "Hà Giang tuyệt đẹp! Cung đường đèo ngoạn mục, hướng dẫn viên am hiểu từng ngóc ngách. Sẽ giới thiệu cho bạn bè!",
      en: "Ha Giang is stunning! Spectacular mountain passes, guide knows every corner. Will recommend to friends!"
    },
    tourName: { vi: "Vòng cung Hà Giang", en: "Ha Giang Loop" },
  },
];

// ══════════════════════════════════════════
// BLOG POSTS
// ══════════════════════════════════════════
export interface BlogPost {
  id: string;
  title: BiText;
  excerpt: BiText;
  image: string;
  category: BiText;
  author: string;
  date: string;
  readTime: BiText;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: {
      vi: "Top 10 Món Ăn Đường Phố Nhất Định Phải Thử Khi Đến Việt Nam",
      en: "Top 10 Street Foods You Must Try When Visiting Vietnam"
    },
    excerpt: {
      vi: "Từ phở Hà Nội, bánh mì Sài Gòn đến cao lầu Hội An – hành trình ẩm thực không thể bỏ lỡ qua từng góc phố Việt Nam.",
      en: "From Hanoi's pho, Saigon's banh mi to Hoi An's cao lau – a culinary journey through Vietnam's street corners."
    },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    category: { vi: "Ẩm thực", en: "Cuisine" },
    author: "Mai Linh",
    date: "2024-12-15",
    readTime: { vi: "8 phút đọc", en: "8 min read" },
  },
  {
    id: "blog-2",
    title: {
      vi: "Hướng Dẫn Chinh Phục Đèo Mã Pì Lèng – Tứ Đại Đỉnh Đèo Việt Nam",
      en: "Guide to Conquering Ma Pi Leng Pass – One of Vietnam's Four Great Passes"
    },
    excerpt: {
      vi: "Cung đường ngoạn mục nhất Việt Nam với vách đá dựng đứng, sông Nho Quế xanh ngọc và những khoảnh khắc khó quên.",
      en: "Vietnam's most spectacular road with towering cliffs, emerald Nho Que River and unforgettable moments."
    },
    image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=800&q=80",
    category: { vi: "Khám phá", en: "Discovery" },
    author: "Minh Tuấn",
    date: "2024-12-10",
    readTime: { vi: "12 phút đọc", en: "12 min read" },
  },
  {
    id: "blog-3",
    title: {
      vi: "5 Trải Nghiệm Homestay Độc Đáo Nhất Tại Tây Bắc Việt Nam",
      en: "5 Most Unique Homestay Experiences in Northwest Vietnam"
    },
    excerpt: {
      vi: "Ngủ trong nhà sàn giữa ruộng bậc thang, thức dậy trong sương mù Tây Bắc và chia sẻ bữa cơm cùng gia đình bản địa.",
      en: "Sleep in stilt houses among terraced fields, wake up in Northwest mist and share meals with local families."
    },
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=800&q=80",
    category: { vi: "Văn hóa", en: "Culture" },
    author: "Thu Hương",
    date: "2024-12-05",
    readTime: { vi: "10 phút đọc", en: "10 min read" },
  },
];

// ══════════════════════════════════════════
// PARTNERS
// ══════════════════════════════════════════
export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { id: "p1", name: "Vietnam Airlines", logo: "Vietnam Airlines" },
  { id: "p2", name: "Vietjet Air", logo: "Vietjet Air" },
  { id: "p3", name: "Bamboo Airways", logo: "Bamboo Airways" },
  { id: "p4", name: "Vinpearl", logo: "Vinpearl" },
  { id: "p5", name: "Mường Thanh", logo: "Muong Thanh" },
  { id: "p6", name: "Saigontourist", logo: "Saigontourist" },
];

// ══════════════════════════════════════════
// HERO SLIDES
// ══════════════════════════════════════════
export interface HeroSlide {
  id: string;
  image: string;
  title: BiText;
  location: BiText;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
    title: { vi: "Vịnh Hạ Long", en: "Ha Long Bay" },
    location: { vi: "Quảng Ninh, Việt Nam", en: "Quang Ninh, Vietnam" },
  },
  {
    id: "slide-2",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1920&q=80",
    title: { vi: "Phố Cổ Hội An", en: "Hoi An Ancient Town" },
    location: { vi: "Quảng Nam, Việt Nam", en: "Quang Nam, Vietnam" },
  },
  {
    id: "slide-3",
    image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=1920&q=80",
    title: { vi: "Ruộng Bậc Thang Sa Pa", en: "Sapa Rice Terraces" },
    location: { vi: "Lào Cai, Việt Nam", en: "Lao Cai, Vietnam" },
  },
  {
    id: "slide-4",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1920&q=80",
    title: { vi: "Tràng An Ninh Bình", en: "Trang An Ninh Binh" },
    location: { vi: "Ninh Bình, Việt Nam", en: "Ninh Binh, Vietnam" },
  },
  {
    id: "slide-5",
    image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=1920&q=80",
    title: { vi: "Cao Nguyên Hà Giang", en: "Ha Giang Plateau" },
    location: { vi: "Hà Giang, Việt Nam", en: "Ha Giang, Vietnam" },
  },
];

// ══════════════════════════════════════════
// MEGA MENU DATA
// ══════════════════════════════════════════
export interface MegaMenuItem {
  name: BiText;
  image: string;
  slug: string;
}

export interface MegaMenuRegion {
  title: BiText;
  items: MegaMenuItem[];
}

export const megaMenuData: MegaMenuRegion[] = [
  {
    title: { vi: "Miền Bắc", en: "Northern" },
    items: [
      { name: { vi: "Hà Nội", en: "Hanoi" }, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=200&q=60", slug: "ha-noi" },
      { name: { vi: "Vịnh Hạ Long", en: "Ha Long Bay" }, image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=200&q=60", slug: "ha-long" },
      { name: { vi: "Sa Pa", en: "Sapa" }, image: "https://images.unsplash.com/photo-1570366583862-f91883984fde?auto=format&fit=crop&w=200&q=60", slug: "sapa" },
      { name: { vi: "Hà Giang", en: "Ha Giang" }, image: "https://images.unsplash.com/photo-1626953637915-8bc05f568112?auto=format&fit=crop&w=200&q=60", slug: "ha-giang" },
      { name: { vi: "Ninh Bình", en: "Ninh Binh" }, image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=200&q=60", slug: "ninh-binh" },
    ],
  },
  {
    title: { vi: "Miền Trung", en: "Central" },
    items: [
      { name: { vi: "Đà Nẵng", en: "Da Nang" }, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=200&q=60", slug: "da-nang" },
      { name: { vi: "Hội An", en: "Hoi An" }, image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=200&q=60", slug: "hoi-an" },
      { name: { vi: "Huế", en: "Hue" }, image: "https://images.unsplash.com/photo-1585828922344-dd6e19a13d10?auto=format&fit=crop&w=200&q=60", slug: "hue" },
      { name: { vi: "Đà Lạt", en: "Da Lat" }, image: "https://images.unsplash.com/photo-1555921015-5532091f6026?auto=format&fit=crop&w=200&q=60", slug: "da-lat" },
    ],
  },
  {
    title: { vi: "Miền Nam", en: "Southern" },
    items: [
      { name: { vi: "TP. Hồ Chí Minh", en: "HCMC" }, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=200&q=60", slug: "hcmc" },
      { name: { vi: "Phú Quốc", en: "Phu Quoc" }, image: "https://images.unsplash.com/photo-1557750255-c76072572da4?auto=format&fit=crop&w=200&q=60", slug: "phu-quoc" },
      { name: { vi: "Cần Thơ", en: "Can Tho" }, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=200&q=60", slug: "can-tho" },
      { name: { vi: "Côn Đảo", en: "Con Dao" }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=60", slug: "con-dao" },
    ],
  },
];

// ══════════════════════════════════════════
// RESORTS & SANCTUARIES
// ══════════════════════════════════════════
export interface Resort {
  id: string;
  name: BiText;
  description: BiText;
  image: string;
  rating: number;
  location: BiText;
  amenities: BiText[];
  priceUSD: number;
  destinationId: string;
}

export const resorts: Resort[] = [
  {
    id: "vinpearl-phu-quoc",
    name: { vi: "Vinpearl Resort & Spa Phú Quốc", en: "Vinpearl Resort & Spa Phu Quoc" },
    description: {
      vi: "Tọa lạc tại Bãi Dài hoang sơ, mang đến hồ bơi ngoài trời rộng lớn, dịch vụ spa cao cấp và phòng nghỉ sang trọng hài hòa với thiên nhiên.",
      en: "Located on pristine Bai Dai Beach, featuring a massive outdoor pool, luxury spa, and premium rooms in harmony with nature."
    },
    image: "/images/phuquoc.png",
    rating: 4.8,
    location: { vi: "Phú Quốc, Kiên Giang", en: "Phu Quoc, Kien Giang" },
    amenities: [
      { vi: "Bể bơi vô cực", en: "Infinity Pool" },
      { vi: "Bãi biển riêng", en: "Private Beach" },
      { vi: "Trị liệu Spa", en: "Spa Treatments" },
      { vi: "Sân Golf", en: "Golf Course" }
    ],
    priceUSD: 120,
    destinationId: "phu-quoc"
  },
  {
    id: "topas-ecolodge-sapa",
    name: { vi: "Topas Ecolodge Sa Pa", en: "Topas Ecolodge Sa Pa" },
    description: {
      vi: "Khu nghỉ dưỡng sinh thái độc đáo nằm ẩn mình giữa thung lũng Mường Hoa hoang sơ với hồ bơi vô cực nước nóng ngắm ruộng bậc thang tuyệt đẹp.",
      en: "A unique eco-resort nestled in pristine Muong Hoa valley with a heated infinity pool overlooking breathtaking terraced fields."
    },
    image: "/images/sapa.png",
    rating: 4.9,
    location: { vi: "Sa Pa, Lào Cai", en: "Sapa, Lao Cai" },
    amenities: [
      { vi: "Bể bơi nước nóng", en: "Heated Pool" },
      { vi: "Nhà hàng hữu cơ", en: "Organic Dining" },
      { vi: "Trekking bản làng", en: "Village Trekking" }
    ],
    priceUSD: 180,
    destinationId: "sapa"
  },
  {
    id: "four-seasons-nam-hai",
    name: { vi: "Four Seasons Resort The Nam Hai", en: "Four Seasons Resort The Nam Hai" },
    description: {
      vi: "Khu nghỉ dưỡng bờ biển đẳng cấp quốc tế tại Hội An, giao hòa giữa kiến trúc truyền thống tinh tế và dịch vụ nghỉ dưỡng thượng lưu bậc nhất.",
      en: "World-class beachfront resort in Hoi An, blending traditional architecture with ultimate luxury services."
    },
    image: "/images/hoian.png",
    rating: 5.0,
    location: { vi: "Điện Bàn, Quảng Nam", en: "Dien Ban, Qnam" },
    amenities: [
      { vi: "Biệt thự hồ bơi riêng", en: "Private Pool Villas" },
      { vi: "Ẩm thực 5 sao", en: "5-Star Dining" },
      { vi: "Spa nổi trên hồ", en: "Floating Spa" }
    ],
    priceUSD: 450,
    destinationId: "hoi-an"
  }
];

// ══════════════════════════════════════════
// BLOGS & TRAVEL GUIDES
// ══════════════════════════════════════════
export interface Blog {
  id: string;
  title: BiText;
  image: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: BiText;
  content: BiText;
}

export const blogs: Blog[] = [
  {
    id: "hanoi-street-food",
    title: { vi: "Top 10 món ăn đường phố phải thử tại Hà Nội", en: "Top 10 Street Foods to Try in Hanoi" },
    image: "/images/hoian-cooking.png",
    readTime: "5 mins read",
    date: "15 Tháng 12, 2024",
    author: "Thu Huong",
    excerpt: {
      vi: "Khám phá nét tinh túy của ẩm thực phố cổ từ phở gánh thơm lừng, bún chả nướng than hoa đến cà phê trứng béo ngậy.",
      en: "Discover the essence of Old Quarter street food, from fragrant Pho, charcoal-grilled Bun Cha to rich egg coffee."
    },
    content: {
      vi: "Hà Nội là thiên đường ẩm thực đường phố nổi tiếng thế giới. Món đầu tiên phải nhắc đến là Phở, món ăn quốc hồn quốc túy của Việt Nam. Tiếp đó là Bún chả, chả nướng thơm phức ăn cùng nước mắm chua ngọt và đu đủ xanh. Đừng bỏ lỡ cà phê trứng tại phố Nguyễn Hữu Huân, sự kết hợp hoàn hảo giữa vị đắng của cà phê và lòng đỏ trứng gà đánh bông mịn.",
      en: "Hanoi is a world-renowned street food paradise. The first dish to mention is Pho, the national soul food of Vietnam. Next is Bun Cha, fragrant grilled pork served with sweet and sour fish sauce and green papaya. Don't miss egg coffee on Northwest side, the perfect combination of bitter coffee and fluffy egg yolk."
    }
  },
  {
    id: "ma-pi-leng-pass",
    title: { vi: "Cẩm nang chinh phục đèo Mã Pì Lèng an toàn", en: "Guide to Safely Conquering Ma Pi Leng Pass" },
    image: "/images/hagiang.png",
    readTime: "7 mins read",
    date: "10 Tháng 12, 2024",
    author: "Hoang Nam",
    excerpt: {
      vi: "Kinh nghiệm lái xe máy vượt đèo, săn mây trên đỉnh đèo Mã Pì Lèng hùng vĩ bậc nhất Hà Giang.",
      en: "Essential motorcycle tips for climbing and chasing clouds on the majestic Ma Pi Leng Pass in Ha Giang."
    },
    content: {
      vi: "Đèo Mã Pì Lèng là cung đường đèo hiểm trở bậc nhất miền Bắc. Khi lái xe vượt đèo, bạn nên đi chậm, sử dụng số thấp (đặc biệt là xe số hoặc xe côn) để kiểm soát phanh. Hãy tránh đi vào lúc chiều muộn vì sương mù sẽ phủ dày đặc làm giảm tầm nhìn. Đừng quên dừng lại tại trạm ngắm cảnh để ngắm nhìn dòng sông Nho Quế màu ngọc bích chảy dưới thung lũng sâu.",
      en: "Ma Pi Leng Pass is the most challenging pass in Northern Vietnam. When driving, you should go slow and stay in low gear for brake control. Avoid driving in the late afternoon as dense fog can reduce visibility. Don't forget to stop at the viewpoint to admire the jade-green Nho Que River flowing far below."
    }
  }
];

// ══════════════════════════════════════════
// FAQS
// ══════════════════════════════════════════
export interface FAQItem {
  question: BiText;
  answer: BiText;
}

export const faqs: FAQItem[] = [
  {
    question: { vi: "Tôi có cần xin thị thực (visa) trước khi đến Việt Nam không?", en: "Do I need a visa to visit Vietnam?" },
    answer: {
      vi: "Tùy thuộc vào quốc tịch của bạn. Việt Nam miễn thị thực cho công dân nhiều quốc gia (như khối ASEAN, một số nước châu Âu) trong thời gian từ 15 đến 45 ngày. Đối với các quốc gia khác, bạn có thể xin E-visa trực tuyến rất dễ dàng và nhanh chóng.",
      en: "It depends on your nationality. Vietnam offers visa exemptions for citizens of many countries (including ASEAN nations and several European countries) for 15 to 45 days. For others, an E-visa can be applied for online quickly and easily."
    }
  },
  {
    question: { vi: "Thời điểm nào thích hợp nhất để du lịch Việt Nam?", en: "When is the best time to visit Vietnam?" },
    answer: {
      vi: "Thời tiết Việt Nam phân hóa đa dạng theo vùng miền. Miền Bắc đẹp nhất từ tháng 10 đến tháng 4 (mùa thu đông). Miền Trung lý tưởng từ tháng 1 đến tháng 8. Miền Nam có thời tiết ấm áp quanh năm, mùa khô từ tháng 11 đến tháng 4 năm sau là đẹp nhất.",
      en: "Vietnam's climate varies significantly by region. The North is best from October to April (autumn/winter). Central Vietnam is ideal from January to August. The South enjoys warm weather year-round, with the dry season from November to April being the most pleasant."
    }
  }
];

export type TranslatedText = BiText;
