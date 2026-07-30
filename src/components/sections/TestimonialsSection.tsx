"use client";

export function TestimonialsSection() {
  const cards = [
    {
      stars: 5, quote: "Tour Vịnh Hạ Long 3N2Đ thực sự tuyệt vời! Hướng dẫn viên rất nhiệt tình, thức ăn trên du thuyền siêu ngon. Đặc biệt là trải nghiệm chèo thuyền kayak vào hang động.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      name: "Nguyễn Thanh Hà", role: "Khách hàng Hạ Long", accentColor: "text-primary",
    },
    {
      stars: 5, quote: "Trekking Sa Pa Fansipan thực sự là trải nghiệm không thể nào quên. Đạt đỉnh 3143m trong sương mờ, nhìn xuống biển mây trắng xóa dưới chân.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      name: "David Thompson", role: "Khách hàng Sa Pa", accentColor: "text-amber-500",
    },
    {
      stars: 5, quote: "Combo Đà Nẵng - Hội An - Huế quá hoàn hảo. Khách sạn ven biển đẹp, bữa ăn buffet hải sản tươi, lịch trình hợp lý. Sẽ giới thiệu cho bạn bè!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      name: "Trần Minh Anh", role: "Khách hàng Miền Trung", accentColor: "text-rose-500",
    },
    {
      stars: 5, quote: "Dịch vụ Vinpearl Phú Quốc 10 điểm. Resort đẳng cấp, hồ bơi vô cực nhìn ra biển, đội ngũ phục vụ thân thiện. Cả gia đình đều rất hài lòng!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      name: "Trần Văn Quân", role: "Khách hàng Phú Quốc", accentColor: "text-sky-500",
    },
    {
      stars: 5, quote: "Lần đầu tiên leo đỉnh Fansipan, cảnh sắc mây mờ bao phủ thật sự choáng ngợp! Homestay ở Sapa sạch sẽ, ấm cúng và anh HDV là người bản địa.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      name: "Lê Tú Anh", role: "Khách hàng Sa Pa", accentColor: "text-amber-500",
    },
    {
      stars: 5, quote: "Chuyến đi hành trình Di sản Hội An - Đà Nẵng - Huế đã để lại nhiều ấn tượng đẹp. Đồ ăn đặc sản ngon rẻ, xe di chuyển chất lượng cao. Rất đáng tiền!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      name: "Hoàng Thị Mai", role: "Khách hàng Miền Trung", accentColor: "text-rose-500",
    },
  ];

  // Duplicate for infinite loop
  const allCards = [...cards, ...cards];

  return (
    <section className="py-24 bg-bg overflow-hidden border-t border-[#E5E7EB] relative">
      <div className="container-main mb-16 text-center flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest font-bold text-accent bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
          Nhật ký hành trình
        </span>
        <h2 className="font-heading text-3xl md:text-[40px] font-extrabold text-text leading-tight">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="text-text-secondary text-sm md:text-base max-w-2xl mt-2">
          Những kỷ niệm đẹp và trải nghiệm thực tế từ hàng ngàn du khách đã tin tưởng đồng hành cùng Vietnam Tours.
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="w-full relative overflow-hidden flex pause-on-hover">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 w-16 md:w-48 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 md:w-48 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 items-stretch animate-marquee shrink-0 w-max px-3">
          {allCards.map((card, i) => (
            <div key={i} className="w-[360px] md:w-[420px] p-8 glass-strong rounded-[32px] border border-[#E5E7EB] shadow-card flex flex-col gap-6 shrink-0 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: card.stars }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-text text-sm font-medium leading-relaxed italic relative z-10">"{card.quote}"</p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#E5E7EB] relative z-10">
                <img src={card.avatar} alt={card.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-extrabold text-sm text-text">{card.name}</span>
                  <span className={`text-[10px] uppercase font-bold ${card.accentColor} tracking-wider mt-1`}>{card.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
