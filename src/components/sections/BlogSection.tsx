"use client";

import { useApp } from "@/context/AppContext";

export function BlogSection() {
  const { t, lang, openBlogModal } = useApp();

  const posts = [
    {
      image: "/images/hoian-cooking.png",
      category: { vi: "Ẩm thực", en: "Cuisine" },
      tagColor: "bg-rose-500",
      date: { vi: "15 Tháng 12, 2024", en: "Dec 15, 2024" },
      title: { vi: "Top 10 món ăn đường phố nhất định phải thử tại Hà Nội", en: "Top 10 Street Foods You Must Try in Hanoi" },
      excerpt: { vi: "Khám phá nét tinh túy của ẩm thực phố cổ từ phở gánh, bún chả đến hương vị cà phê trứng nổi danh.", en: "Discover the essence of Old Quarter street food, from fragrant Pho to rich egg coffee." },
      content: { vi: "Hà Nội là thiên đường ẩm thực đường phố nổi tiếng thế giới. Món đầu tiên phải nhắc đến là Phở, món ăn quốc hồn quốc túy của Việt Nam. Tiếp đó là Bún chả, chả nướng thơm phức ăn cùng nước mắm chua ngọt. Đừng bỏ lỡ cà phê trứng, sự kết hợp hoàn hảo giữa vị đắng của cà phê và lòng đỏ trứng gà đánh bông mịn.", en: "Hanoi is a world-renowned street food paradise. First is Pho, the national dish of Vietnam. Next is Bun Cha, fragrant grilled pork with sweet and sour fish sauce. Don't miss egg coffee — the perfect blend of bitter coffee and fluffy egg yolk." },
    },
    {
      image: "/images/hagiang.png",
      category: { vi: "Kinh nghiệm", en: "Tips" },
      tagColor: "bg-sky-500",
      date: { vi: "10 Tháng 12, 2024", en: "Dec 10, 2024" },
      title: { vi: "Cẩm nang chinh phục đèo Mã Pì Lèng an toàn cho phượt thủ", en: "Guide to Safely Conquering Ma Pi Leng Pass" },
      excerpt: { vi: "Kinh nghiệm lái xe và kỹ năng cần có khi băng qua cung đường đèo hùng vĩ bậc nhất Hà Giang.", en: "Essential motorcycle tips for the most majestic mountain pass in Ha Giang." },
      content: { vi: "Đèo Mã Pì Lèng là cung đường đèo hiểm trở bậc nhất miền Bắc. Khi lái xe vượt đèo, bạn nên đi chậm, sử dụng số thấp để kiểm soát phanh. Hãy tránh đi vào lúc chiều muộn vì sương mù sẽ phủ dày đặc. Đừng quên dừng lại tại điểm ngắm cảnh để nhìn dòng sông Nho Quế màu ngọc bích chảy dưới thung lũng sâu.", en: "Ma Pi Leng Pass is the most challenging pass in Northern Vietnam. Drive slowly in low gear for brake control. Avoid afternoon drives due to dense fog. Stop at viewpoints to admire the jade-green Nho Que River far below." },
    },
    {
      image: "/images/sapa.png",
      category: { vi: "Văn hóa", en: "Culture" },
      tagColor: "bg-emerald-600",
      date: { vi: "05 Tháng 12, 2024", en: "Dec 05, 2024" },
      title: { vi: "Những trải nghiệm homestay bản làng độc đáo tại Tây Bắc", en: "Unique Village Homestay Experiences in Northwest Vietnam" },
      excerpt: { vi: "Chia sẻ trải nghiệm sống và sinh hoạt cùng các gia đình đồng bào dân tộc thiểu số miền cao.", en: "Living and bonding with ethnic minority families in the highlands." },
      content: { vi: "Dịch vụ lưu trú homestay tại các bản làng Sa Pa mang đến cơ hội hòa mình vào cuộc sống của người dân tộc H'Mông, Dao đỏ. Bạn sẽ được thưởng thức các món ăn đặc sản núi rừng, trải nghiệm nhuộm chàm, dệt vải thủ công và lắng nghe những câu chuyện văn hóa truyền thống bên bếp lửa bập bùng.", en: "Sapa homestays give you a golden chance to immerse yourself in H'Mong and Red Dao culture. Enjoy mountain specialties, try indigo dyeing and weaving, and listen to folk stories by the fire." },
    },
  ];

  return (
    <section id="blog" className="py-28 bg-gradient-to-tr from-[#FFF7F5] to-[#FDF0EB] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dot-grid-coral pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider self-start font-heading">
              {t("blog.eyebrow")}
            </span>
            <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
              {t("blog.title")}
            </h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-3.5 transition-all shrink-0">
            <span>{t("ui.viewAll")}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title.vi}
              className="group bg-white rounded-[32px] overflow-hidden border border-[#E5E7EB] shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-500 flex flex-col text-left card-shimmer">
              <div className="relative h-52 overflow-hidden">
                <img src={post.image} alt={post.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full ${post.tagColor} text-white text-[9px] font-bold uppercase tracking-widest font-heading shadow-md`}>
                  {post.category[lang]}
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3 flex-grow">
                <span className="text-xs font-semibold text-text-secondary font-body">{post.date[lang]}</span>
                <h3 className="font-heading font-extrabold text-lg text-text group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {post.title[lang]}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{post.excerpt[lang]}</p>
                <button
                  onClick={() => openBlogModal({
                    title: post.title[lang],
                    category: post.category[lang],
                    date: post.date[lang],
                    content: post.content[lang],
                    image: post.image,
                  })}
                  className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors mt-auto pt-4 border-t border-[#E5E7EB] self-start"
                >
                  <span>{t("blog.readMore")}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
