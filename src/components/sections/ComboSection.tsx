"use client";

import { useApp } from "@/context/AppContext";

export function ComboSection() {
  const { t, lang, openBookingModal, formatPrice } = useApp();

  const combos = [
    {
      id: "tay-bac",
      image: "/images/sapa.png",
      discount: "🔥 Giảm 30%",
      name: { vi: "Combo Tây Bắc Huyền Thoại", en: "Legendary Northwest Combo" },
      desc: { vi: "Khám phá trọn gói hành trình Tây Bắc bao gồm xe Limousine đưa đón cao cấp và 3 đêm nghỉ dưỡng tại Sapa.", en: "Full Northwest journey package with Limousine transfer and 3 nights at a Sapa lodge." },
      features: [
        { vi: "Khách sạn 4 sao đẳng cấp", en: "4-star hotel" },
        { vi: "Hướng dẫn viên suốt chặng", en: "Full-trip guide" },
      ],
      originalPrice: 16990000,
      price: 11990000,
    },
    {
      id: "da-nang-hoi-an",
      image: "/images/hoian.png",
      discount: "🔥 Giảm 25%",
      name: { vi: "Combo Đà Nẵng – Hội An 4N3Đ", en: "Da Nang – Hoi An Combo 4D3N" },
      desc: { vi: "Tận hưởng dịch vụ nghỉ dưỡng cao cấp ven biển cùng cơ hội check-in Cầu Vàng, Bà Nà Hills.", en: "Beachfront resort stay plus Golden Bridge and Ba Na Hills visit." },
      features: [
        { vi: "Vé máy bay khứ hồi khép kín", en: "Round-trip flights" },
        { vi: "Buffet sáng chuẩn 5 sao", en: "5-star breakfast buffet" },
      ],
      originalPrice: 8990000,
      price: 6490000,
    },
    {
      id: "vinpearl-phu-quoc",
      image: "/images/phuquoc.png",
      discount: "🔥 Giảm 20%",
      name: { vi: "Combo Resort Vinpearl Phú Quốc", en: "Vinpearl Phu Quoc Resort Combo" },
      desc: { vi: "Nghỉ mát 3 ngày 2 đêm tại Resort cao cấp, miễn phí vé vào cổng VinWonders & Safari.", en: "3-day luxury resort stay with free VinWonders & Safari tickets." },
      features: [
        { vi: "Resort Vinpearl đẳng cấp", en: "Vinpearl Resort" },
        { vi: "Vé trọn gói vui chơi safari", en: "Full safari pass" },
      ],
      originalPrice: 6200000,
      price: 4990000,
    },
  ];

  return (
    <section id="combo" className="py-28 bg-bg-alt relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 dot-grid pointer-events-none" />
      {/* Floating balloon */}
      <div className="absolute -right-16 top-24 z-0 pointer-events-none hidden xl:block opacity-25 animate-float select-none" style={{ animationDuration: "8s", animationDelay: "1s" }}>
        <svg width="130" height="170" viewBox="0 0 100 130" fill="none">
          <path d="M50 10C27.9086 10 10 27.9086 10 50C10 65.5 22.5 82.5 50 95C77.5 82.5 90 65.5 90 50C90 27.9086 72.0914 10 50 10Z" fill="#FF7F50" stroke="#FF5722" strokeWidth="2.5"/>
          <path d="M50 10C40 25 40 75 50 95" stroke="#FFE082" strokeWidth="2"/>
          <path d="M50 10C60 25 60 75 50 95" stroke="#FFE082" strokeWidth="2"/>
          <rect x="42" y="105" width="16" height="12" rx="2" fill="#8B4513"/>
          <line x1="45" y1="95" x2="45" y2="105" stroke="#555" strokeWidth="1"/>
          <line x1="55" y1="95" x2="55" y2="105" stroke="#555" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3 mb-16 text-center">
          <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider font-heading">
            {t("combo.eyebrow")}
          </span>
          <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
            {t("combo.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div key={combo.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-[#E5E7EB] shadow-card hover:-translate-y-2.5 hover:shadow-hover transition-all duration-500 flex flex-col text-left">
              <div className="relative h-60 overflow-hidden">
                <img src={combo.image} alt={combo.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-rose-500 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {combo.discount}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
                <h3 className="font-heading text-lg md:text-xl font-extrabold text-text group-hover:text-primary transition-colors">
                  {combo.name[lang]}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{combo.desc[lang]}</p>
                <div className="flex flex-col gap-2.5 pt-3 border-t border-[#E5E7EB]">
                  {combo.features.map((f, i) => (
                    <span key={i} className="text-xs font-semibold text-text-secondary flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {f[lang]}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between pt-5 mt-auto border-t border-[#E5E7EB] gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-text-light line-through font-semibold">{formatPrice(combo.originalPrice)}</span>
                    <span className="font-heading text-xl font-extrabold text-primary">{formatPrice(combo.price)}</span>
                  </div>
                  <button
                    onClick={() => openBookingModal(combo.name[lang], combo.price)}
                    className="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all duration-300"
                  >
                    {t("ui.bookNow")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
