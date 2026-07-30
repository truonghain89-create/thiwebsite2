"use client";

import { useApp } from "@/context/AppContext";

export function SeasonalSection() {
  const { t, lang, openBookingModal } = useApp();

  const seasons = [
    {
      name: { vi: "Mùa Xuân", en: "Spring" },
      period: "Tháng 2 - 4",
      image: "/images/mocchau-spring.png",
      desc: { vi: "Mộc Châu ngập tràn hoa mận trắng rực rỡ sắc màu Tây Bắc.", en: "Moc Chau blooms with white plum blossoms across the Northwest." },
      color: "bg-pink-500",
      textColor: "text-pink-300",
      price: 4200000,
      num: "01",
    },
    {
      name: { vi: "Mùa Hè", en: "Summer" },
      period: "Tháng 5 - 7",
      image: "/images/phuquoc.png",
      desc: { vi: "Làn nước mát lạnh ngập tràn nắng biển ấm tại đảo Phú Quốc.", en: "Cool waters and warm sunshine on Phu Quoc island." },
      color: "bg-sky-500",
      textColor: "text-sky-300",
      price: 4900000,
      num: "02",
    },
    {
      name: { vi: "Mùa Thu", en: "Autumn" },
      period: "Tháng 8 - 10",
      image: "/images/sapa.png",
      desc: { vi: "Ruộng bậc thang óng ả màu lúa chín ngập thung lũng Sa Pa.", en: "Golden terraced rice fields fill the Sapa valleys." },
      color: "bg-amber-500",
      textColor: "text-amber-300",
      price: 4600000,
      num: "03",
    },
    {
      name: { vi: "Mùa Đông", en: "Winter" },
      period: "Tháng 11 - 1",
      image: "/images/dalat-winter.png",
      desc: { vi: "Đà Lạt bảng lảng sương mù giăng kín các lối nhỏ đồi thông.", en: "Da Lat shrouded in misty fog over pine-covered hills." },
      color: "bg-indigo-500",
      textColor: "text-indigo-300",
      price: 3900000,
      num: "04",
    },
  ];

  return (
    <section id="seasonal" className="py-28 bg-bg">
      <div className="container-main">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3 mb-16 text-center">
          <span className="px-5 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-wider font-heading">
            {t("seasonal.eyebrow")}
          </span>
          <h2 className="font-heading text-3xl md:text-[42px] font-extrabold text-text leading-tight">
            {t("seasonal.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => (
            <div
              key={season.num}
              onClick={() => openBookingModal(`${lang === "vi" ? "Du lịch" : "Travel"} ${season.name[lang]}`, season.price)}
              className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer shadow-card hover:-translate-y-2 hover:shadow-hover border border-transparent transition-all duration-700"
            >
              <img src={season.image} alt={season.name[lang]} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className={`absolute top-5 left-5 px-5 py-1.5 rounded-full ${season.color} text-white text-[10px] font-bold uppercase tracking-widest shadow-md`}>
                {season.period}
              </div>
              <span className="absolute top-5 right-5 text-4xl font-extrabold text-white/10 font-heading">{season.num}</span>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 text-left">
                <h3 className={`font-heading text-xl font-extrabold ${season.textColor}`}>{season.name[lang]}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{season.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
