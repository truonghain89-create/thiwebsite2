"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Coffee, Hotel, ArrowRight, RefreshCw, Compass, MapPin } from "lucide-react";

import { TranslatedText } from "@/data/mockData";

interface ItineraryDay {
  day: number;
  title: TranslatedText;
  activities: { en: string[]; vi: string[]; [key: string]: any };
  dining: TranslatedText;
  stay: TranslatedText;
}

interface SimulatedItinerary {
  title: TranslatedText;
  summary: TranslatedText;
  duration: string;
  budgetEst: number; // in USD
  days: ItineraryDay[];
}

const mockItineraries: Record<string, SimulatedItinerary> = {
  cultural: {
    title: { en: "7-Day Cultural Heritage & Artisanal Soul", vi: "Hành Trình Di Sản & Hồn Quê Việt Nam 7 Ngày" },
    summary: { 
      en: "A sensory immersion in the historic heartlands of Hanoi and Hoi An ancient town. Designed for lovers of art, craft, and slow food.",
      vi: "Hành trình đánh thức giác quan đưa bạn qua lòng phố cổ Hà Nội và di sản Hội An. Dành cho người yêu nghệ thuật, nghề thủ công và ẩm thực chậm."
    },
    duration: "7 Days",
    budgetEst: 850,
    days: [
      {
        day: 1,
        title: { en: "Hanoi: French Quarter & Guild Streets", vi: "Hà Nội: Khu Phố Cổ & Phố Nghề Cổ" },
        activities: {
          en: ["Walk through the 36 guild streets with a local historian", "Enjoy egg coffee at a hidden balcony cafe"],
          vi: ["Tản bộ qua 36 phố phường cùng nhà sử học bản xứ", "Thưởng thức cà phê trứng tại ban công ẩn giấu"]
        },
        dining: { en: "Cha Ca La Vong (turmeric fish skillet)", vi: "Chả cá Lã Vọng (cá lăng nướng chảo nghệ)" },
        stay: { en: "Sofitel Legend Metropole Hanoi", vi: "Khách sạn Sofitel Legend Metropole Hà Nội" }
      },
      {
        day: 2,
        title: { en: "Hanoi: Temple of Literature & Lake Walks", vi: "Hà Nội: Văn Miếu Quốc Tử Giám & Hồ Gươm" },
        activities: {
          en: ["Visit the Temple of Literature at sunrise", "Watch water puppet theatrical show in the evening"],
          vi: ["Ghé thăm Văn Miếu Quốc Tử Giám buổi bình minh", "Xem múa rối nước truyền thống vào buổi tối"]
        },
        dining: { en: "Phở Gia Truyền Bát Đàn", vi: "Phở bò gia truyền Bát Đàn" },
        stay: { en: "Sofitel Legend Metropole Hanoi", vi: "Khách sạn Sofitel Legend Metropole Hà Nội" }
      },
      {
        day: 3,
        title: { en: "Hoi An: Ancient Port Ochre Walks", vi: "Hội An: Phố Cổ Rêu Phong & Đèn Lồng" },
        activities: {
          en: ["Fly to Danang, limousine transfer to Hoi An", "Sunset cruise on the Thu Bon river lighting floating lanterns"],
          vi: ["Bay đến Đà Nẵng, xe limousine đưa đón Hội An", "Thả hoa đăng trên sông Thu Bồn lúc hoàng hôn"]
        },
        dining: { en: "Cao Lau noodle bowl at Ba Le Well", vi: "Mì Cao Lầu tại giếng cổ Bá Lễ" },
        stay: { en: "Anantara Hoi An Resort", vi: "Khu nghỉ dưỡng Anantara Hội An" }
      },
      {
        day: 4,
        title: { en: "Hoi An: Tra Que Garden & Cooking Class", vi: "Hội An: Làng Rau Trà Quế & Học Nấu Ăn" },
        activities: {
          en: ["Cycle to Tra Que organic gardens", "Harvest local mint and cook classic banh xeo pancake"],
          vi: ["Đạp xe đến làng rau hữu cơ Trà Quế", "Thu hoạch rau thơm và học đổ bánh xèo truyền thống"]
        },
        dining: { en: "Madam Khanh - The Banh Mi Queen", vi: "Bánh mì Phượng / Madam Khánh" },
        stay: { en: "Anantara Hoi An Resort", vi: "Khu nghỉ dưỡng Anantara Hội An" }
      }
    ]
  },
  adventure: {
    title: { en: "5-Day Extreme Passes & Frontier Caves", vi: "5 Ngày Vượt Đèo Hà Giang & Chinh Phục Đá Tai Mèo" },
    summary: {
      en: "A high-octane expedition through the sheer vertical cliffs and epic loops of Ha Giang border pass. Best for adrenaline seekers.",
      vi: "Hành trình mạo hiểm vượt đèo biên viễn Hà Giang qua những vách đá dựng đứng cực kỳ ấn tượng. Dành cho người đam mê phiêu lưu."
    },
    duration: "5 Days",
    budgetEst: 620,
    days: [
      {
        day: 1,
        title: { en: "Yen Minh: The Gates of Heaven", vi: "Yên Minh: Cổng Trời & Rừng Thông" },
        activities: {
          en: ["Ascend Bac Sum Pass via motorbike loop", "Stop at Quan Ba Heaven Gate looking down at Twin Mountains"],
          vi: ["Chinh phục dốc Bắc Sum bằng xe máy", "Ngắm Núi Đôi Cô Tiên từ Cổng trời Quản Bạ"]
        },
        dining: { en: "Yen Minh local hotpot with wild vegetables", vi: "Lẩu gà đen ăn kèm rau rừng Yên Minh" },
        stay: { en: "Yen Minh Pine Lodge Homestay", vi: "Homestay nhà gỗ rừng thông Yên Minh" }
      },
      {
        day: 2,
        title: { en: "Dong Van: Karst Paths & Historic Palaces", vi: "Đồng Văn: Cung Đường Karst & Dinh Thự Cổ" },
        activities: {
          en: ["Ride through the Tham Ma pass stone curves", "Explore the hundred-year-old Hmong Royal Palace"],
          vi: ["Vượt đèo Thẩm Mã uốn lượn", "Khám phá Dinh thự Vua Mèo trăm tuổi cổ kính"]
        },
        dining: { en: "Dong Van Old Quarter smoked pork buffet", vi: "Thịt lợn gác bếp và thắng dền phố cổ" },
        stay: { en: "Dong Van Heritage House", vi: "Nhà cổ homestay Đồng Văn" }
      },
      {
        day: 3,
        title: { en: "Ma Pi Leng Pass & River Depths", vi: "Đèo Mã Pí Lèng & Thuyền Sông Nho Quế" },
        activities: {
          en: ["Ride the epic ridge line of Ma Pi Leng pass", "Take a motorboat down the deep Tu San canyon on Nho Que river"],
          vi: ["Chạy xe trên sống lưng Mã Pí Lèng hùng vĩ", "Đi thuyền dưới hẻm vực Tu Sản sâu thẳm trên sông Nho Quế"]
        },
        dining: { en: "Grilled wild pork at Meo Vac homestay", vi: "Lợn bản nướng mọi tại homestay Mèo Vạc" },
        stay: { en: "Du Gia Eco Lodge", vi: "Khu nghỉ dưỡng sinh thái Du Già Eco Lodge" }
      }
    ]
  }
};

export const AITripPlanner: React.FC = () => {
  const { lang, formatPrice, t } = useApp();
  const router = useRouter();

  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("cultural");
  const [duration, setDuration] = useState("7");
  const [budget, setBudget] = useState("mid");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<SimulatedItinerary | null>(null);

  const loadingSteps: TranslatedText[] = [
    { en: "Analyzing your travel preferences...", vi: "Đang phân tích sở thích chuyến đi của bạn..." },
    { en: "Harmonizing regional weather & routes...", vi: "Đang kiểm tra thời tiết vùng miền & lộ trình tối ưu..." },
    { en: "Selecting curated boutique resorts & local eats...", vi: "Đang chọn lọc khách sạn boutique & món ăn bản địa..." },
    { en: "Architecting daily slow-travel highlights...", vi: "Đang thiết kế các điểm nhấn trải nghiệm chậm..." }
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setLoadingStep(0);

    // Simulated multi-step loading sequence
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            // Pick template based on selected style
            const selectedStyle = style === "adventure" ? "adventure" : "cultural";
            setResult(mockItineraries[selectedStyle]);
            setLoading(false);
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
  };

  const handleBook = () => {
    if (result) {
      // Direct checkout booking details simulated
      const queryParams = new URLSearchParams({
        type: "ai-itinerary",
        title: result.title[lang] || result.title.en,
        price: result.budgetEst.toString(),
        duration: result.duration
      });
      router.push(`/${lang}/checkout?${queryParams.toString()}`);
    }
  };

  return (
    <div className="w-full glassmorphism-card rounded-3xl p-8 border border-border-nature shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-playfair text-2xl font-bold text-text-primary">
            {t("home.planner.title")}
          </h3>
          <p className="text-xs text-text-secondary">
            {t("home.planner.subtitle")}
          </p>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="flex flex-col gap-6">
        {/* Prompt Input */}
        <div className="flex flex-col gap-2">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t("planner.placeholder")}
            className="w-full min-h-[90px] p-4 text-sm font-medium rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-nature-white text-text-primary placeholder:text-text-secondary/60 shadow-inner resize-y"
          />
        </div>

        {/* Quick parameters grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
              {t("hero.widget.style")}
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="bg-nature-white border border-border-nature text-text-primary rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-primary"
            >
              <option value="cultural">{lang === "vi" ? "Văn Hóa & Di Sản" : "Culture & Heritage"}</option>
              <option value="adventure">{lang === "vi" ? "Phiêu Lưu Mạo Hiểm" : "Nature & Adventure"}</option>
              <option value="culinary">{lang === "vi" ? "Ẩm Thực Đặc Sản" : "Culinary Exploration"}</option>
              <option value="wellness">{lang === "vi" ? "Nghỉ Dưỡng & Sức Khỏe" : "Wellness & Spa"}</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-nature-white border border-border-nature text-text-primary rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-primary"
            >
              <option value="3">3 {lang === "vi" ? "Ngày" : "Days"}</option>
              <option value="5">5 {lang === "vi" ? "Ngày" : "Days"}</option>
              <option value="7">7 {lang === "vi" ? "Ngày" : "Days"}</option>
              <option value="10">10+ {lang === "vi" ? "Ngày" : "Days"}</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
              {t("hero.widget.budget")}
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="bg-nature-white border border-border-nature text-text-primary rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:border-primary"
            >
              <option value="low">{lang === "vi" ? "Tiết Kiệm" : "Backpacker/Budget"}</option>
              <option value="mid">{lang === "vi" ? "Cân Bằng" : "Comfort Standard"}</option>
              <option value="luxury">{lang === "vi" ? "Thượng Lưu" : "Luxury Signature"}</option>
            </select>
          </div>
        </div>

        {/* Generate button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/95 text-white py-3.5 px-6 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>{t("planner.generating")}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 fill-white" />
              <span>{t("planner.btn")}</span>
            </>
          )}
        </button>
      </form>

      {/* Loading & Results Block */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {/* Loading steps animator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 py-8 bg-soft-mint/30 rounded-2xl border border-secondary/15"
            >
              <Compass className="w-12 h-12 text-secondary animate-spin-slow" style={{ animationDuration: "8s" }} />
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-semibold text-text-primary text-center">
                  {loadingSteps[loadingStep][lang]}
                </span>
                {/* Progress bar dots */}
                <div className="flex gap-1.5 mt-2">
                  {loadingSteps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === loadingStep ? "w-6 bg-secondary" : "w-2 bg-secondary/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Generated Result display */}
          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col gap-6"
            >
              <div className="border-t border-border-nature pt-6 flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-widest text-accent font-extrabold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-accent" /> {t("planner.result.title")}
                </span>
                <h4 className="font-playfair text-2xl font-bold text-text-primary leading-tight">
                  {result.title[lang]}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {result.summary[lang]}
                </p>
                <div className="flex items-center gap-6 mt-1.5">
                  <span className="text-xs font-bold text-text-primary bg-light-sky px-3 py-1 rounded-full">
                    {result.duration}
                  </span>
                  <span className="text-xs font-extrabold text-secondary">
                    Est. Cost: <span className="text-sm">{formatPrice(result.budgetEst)}</span>
                  </span>
                </div>
              </div>

              {/* Timeline list */}
              <div className="flex flex-col gap-4 relative pl-4 border-l-2 border-secondary/25 ml-2">
                {result.days.map((dayItem, idx) => (
                  <motion.div
                    key={dayItem.day}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative flex flex-col gap-2.5 bg-nature-white p-5 rounded-2xl border border-border-nature/40 shadow-sm"
                  >
                    {/* Ring indicator */}
                    <div className="absolute -left-[25px] top-6 w-3 h-3 rounded-full bg-secondary border-2 border-white ring-4 ring-secondary/15" />
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5 rounded">
                        Day {dayItem.day}
                      </span>
                      <h5 className="font-playfair text-sm font-bold text-text-primary">
                        {dayItem.title[lang]}
                      </h5>
                    </div>

                    <ul className="flex flex-col gap-1 text-xs text-text-secondary list-disc pl-4 font-sans font-medium">
                      {(dayItem.activities[lang] || dayItem.activities.en).map((act: string, aIdx: number) => (
                        <li key={aIdx}>{act}</li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 pt-2.5 border-t border-border-nature/40 text-[11px] font-semibold">
                      <span className="flex items-center gap-1.5 text-accent-coral/90">
                        <Coffee className="w-3.5 h-3.5" />
                        <span>Dining: <span className="text-text-primary">{dayItem.dining[lang]}</span></span>
                      </span>
                      <span className="flex items-center gap-1.5 text-secondary">
                        <Hotel className="w-3.5 h-3.5" />
                        <span>Stay: <span className="text-text-primary">{dayItem.stay[lang]}</span></span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between gap-4 border-t border-border-nature pt-6 mt-2">
                <button
                  onClick={() => setResult(null)}
                  className="px-4 py-3 border border-border-nature hover:bg-black/5 text-text-primary font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  Reset
                </button>
                <button
                  onClick={handleBook}
                  className="px-6 py-3.5 bg-secondary hover:bg-secondary/95 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Book This Custom Route</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
