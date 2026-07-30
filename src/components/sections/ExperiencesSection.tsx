"use client";

import { useApp } from "@/context/AppContext";

export function ExperiencesSection() {
  const { t, lang, formatPrice } = useApp();

  const exps = [
    {
      image: "/images/halong.png",
      tag: { vi: "Mạo hiểm", en: "Adventure" },
      tagColor: "bg-sky-500",
      title: { vi: "Chèo thuyền Kayak Vịnh Hạ Long", en: "Ha Long Bay Kayaking" },
      desc: { vi: "Tự do chèo thuyền kayak len lỏi giữa hàng nghìn đảo đá vôi, ngắm những hang động hoang sơ kỳ bí.", en: "Freely kayak among thousands of limestone islets and discover mysterious wild caves." },
      duration: { vi: "3-4 giờ", en: "3-4 hours" },
      price: 590000,
    },
    {
      image: "/images/sapa.png",
      tag: { vi: "Khám phá", en: "Discovery" },
      tagColor: "bg-emerald-600",
      title: { vi: "Trekking Bản Làng Sapa", en: "Sapa Village Trekking" },
      desc: { vi: "Thăm bản Cát Cát, Tả Van, trải nghiệm lưu trú nhà sàn và ngắm nhìn hoàng hôn bên thung lũng.", en: "Visit Cat Cat, Ta Van villages, stay in stilt houses and watch the sunset over the valley." },
      duration: { vi: "1 ngày", en: "1 day" },
      price: 490000,
    },
    {
      image: "/images/hoian-cooking.png",
      tag: { vi: "Ẩm thực", en: "Cuisine" },
      tagColor: "bg-rose-500",
      title: { vi: "Khóa Học Nấu Ăn Hội An", en: "Hoi An Cooking Class" },
      desc: { vi: "Đến chợ địa phương cùng đầu bếp chuyên nghiệp, học cách tự tay chế biến món Cao Lầu, Mì Quảng.", en: "Visit local market with a pro chef, learn to make Cao Lau and Quang Noodles from scratch." },
      duration: { vi: "4 giờ", en: "4 hours" },
      price: 790000,
    },
  ];

  return (
    <section className="py-28 bg-[#FCF8F2] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dot-grid-warm pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3 mb-16 text-center">
          <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider font-heading">
            {t("experiences.eyebrow")}
          </span>
          <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
            {t("experiences.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exps.map((exp) => (
            <div key={exp.title.vi}
              className="group bg-white rounded-[32px] overflow-hidden border border-[#E5E7EB] shadow-card hover:-translate-y-2 hover:shadow-hover transition-all duration-500 flex flex-col text-left">
              <div className="relative h-56 overflow-hidden">
                <img src={exp.image} alt={exp.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full ${exp.tagColor} text-white text-[9px] font-bold uppercase tracking-widest font-heading shadow-sm`}>
                  {exp.tag[lang]}
                </span>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3 flex-grow">
                <h3 className="font-heading font-extrabold text-lg text-text group-hover:text-primary transition-colors">
                  {exp.title[lang]}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{exp.desc[lang]}</p>
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-[#E5E7EB]">
                  <span className="text-xs font-semibold text-text-secondary flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {exp.duration[lang]}
                  </span>
                  <span className="text-base font-extrabold text-primary">{formatPrice(exp.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
