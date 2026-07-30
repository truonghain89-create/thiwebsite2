"use client";

import { useState, useRef, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { MessageSquare, Sparkles, Send, X } from "lucide-react";

type Message = { role: "bot" | "user"; text: string };

const BOT_RESPONSES: Record<string, string> = {
  "hạ long": "🌊 Tour Vịnh Hạ Long 3N2Đ là lựa chọn hoàn hảo! Du thuyền 5 sao, chèo kayak, giá từ 5.990.000đ/người. Bạn muốn đặt ngay không?",
  "sapa": "🏔️ Trekking Sa Pa – Fansipan 4N3Đ rất được yêu thích! Chinh phục nóc nhà Đông Dương, homestay bản làng, từ 4.590.000đ. Bạn có muốn biết thêm?",
  "phú quốc": "🏖️ Thiên đường Phú Quốc 4N3Đ với resort 5 sao, lặn san hô từ 7.490.000đ. Đây là combo biển đảo hot nhất mùa hè!",
  "hội an": "🏮 Di sản Miền Trung 5N4Đ: Đà Nẵng – Hội An – Huế từ 6.990.000đ. Phố cổ lung linh ánh đèn lồng, ẩm thực tuyệt vời!",
  "combo": "🎯 Chúng tôi có 3 combo tiết kiệm:\n• Tây Bắc Huyền Thoại 7N: 11.990.000đ (giảm 30%)\n• Di sản Miền Trung 6N: 9.990.000đ (giảm 28%)\n• Đảo Ngọc & Sông Nước 8N: 14.990.000đ (giảm 25%)",
  "giá": "💰 Giá tour từ 2.490.000đ (Ninh Bình 2N) đến 14.990.000đ (Combo 8N). Chúng tôi cam kết giá tốt nhất thị trường!",
  "default": "Cảm ơn bạn đã hỏi! Để tư vấn chi tiết hơn, vui lòng để lại số điện thoại hoặc nhấn nút \"Tư vấn miễn phí\" bên dưới nhé! 😊",
};

function getBotResponse(text: string): string {
  const lower = text.toLowerCase();
  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (key !== "default" && lower.includes(key)) return response;
  }
  return BOT_RESPONSES.default;
}

export function AIChatWidget() {
  const { openContactModal } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Xin chào! Tôi là Trợ lý Du lịch AI của Vietnam Tours. Tôi có thể tư vấn các điểm đến, tour hot hoặc combo đặc sắc. Hãy nhắn tin cho tôi nhé!" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: getBotResponse(text) };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const quickReplies = [
    "Tư vấn tour Vịnh Hạ Long",
    "Gợi ý tour Sa Pa Fansipan",
    "Combo Vinpearl Phú Quốc có gì hot?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-strong rounded-[28px] w-[360px] md:w-[400px] h-[500px] shadow-hover border border-white/60 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-6 py-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/15 relative">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-primary" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-sm leading-none">Trợ lý Du lịch AI</span>
                <span className="text-[9px] font-semibold text-white/70 uppercase tracking-widest mt-1">Tư vấn trực tuyến</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-5 overflow-y-auto flex flex-col gap-4 text-xs font-semibold bg-bg-alt/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse max-w-[85%] self-end" : "max-w-[85%] self-start"}`}>
                {msg.role === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-primary flex items-center justify-center shrink-0 border border-primary/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
                <div className={`px-4 py-3 rounded-2xl shadow-card text-left font-medium leading-relaxed whitespace-pre-line ${
                  msg.role === "bot"
                    ? "bg-white text-text border border-border-light rounded-tl-none"
                    : "bg-primary text-white rounded-tr-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-5 pb-2 flex flex-wrap gap-2 justify-start">
            {quickReplies.map((qr) => (
              <button key={qr} onClick={() => sendMessage(qr)}
                className="px-3 py-1.5 rounded-full bg-white border border-border-light text-[10px] text-text-secondary hover:border-primary hover:text-primary transition-all shadow-card font-bold">
                {qr.split(" ").slice(1, 4).join(" ")}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="p-3 border-t border-border-light bg-white flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi tôi bất cứ điều gì về du lịch..."
              className="flex-grow px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-xs font-semibold bg-bg/50"
            />
            <button type="submit"
              className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-md shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-glow transition-all duration-300 hover:-translate-y-1 relative group"
      >
        <div className="absolute inset-0 rounded-full bg-primary/25 animate-ping opacity-75" />
        <MessageSquare className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`} />
        <Sparkles className={`w-6 h-6 absolute transition-all duration-300 text-accent ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
      </button>
    </div>
  );
}
