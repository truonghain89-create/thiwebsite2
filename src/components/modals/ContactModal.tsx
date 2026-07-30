"use client";

import { useApp } from "@/context/AppContext";
import { X } from "lucide-react";

export function ContactModal() {
  const { closeModal } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="glass-strong rounded-[32px] p-8 md:p-10 max-w-md w-full shadow-hover relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeModal} className="absolute top-6 right-6 text-text hover:text-primary transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="text-left flex flex-col gap-2 mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary font-heading">Yêu cầu tư vấn</span>
          <h3 className="font-heading font-extrabold text-2xl text-text leading-tight">Nhận Tư Vấn Miễn Phí</h3>
          <p className="text-xs text-text-secondary">Để lại thông tin, đội ngũ chuyên gia sẽ thiết kế lịch trình riêng cho bạn.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Họ và tên</label>
            <input type="text" required placeholder="Nguyễn Văn A"
              className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Số điện thoại</label>
            <input type="tel" required placeholder="0901234567"
              className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Điểm đến quan tâm</label>
            <input type="text" placeholder="Ví dụ: Hạ Long, Sapa, Phú Quốc..."
              className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Lời nhắn</label>
            <textarea rows={3} placeholder="Số khách dự kiến, thời gian đi..."
              className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50 resize-none"
            />
          </div>
          <button type="submit"
            className="w-full py-3.5 mt-2 rounded-full bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-md"
          >
            Gửi yêu cầu tư vấn
          </button>
        </form>
      </div>
    </div>
  );
}
