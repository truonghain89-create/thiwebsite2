"use client";

import { useApp } from "@/context/AppContext";
import { X } from "lucide-react";

export function AuthModal() {
  const { closeModal, authTab, setAuthTab } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate success
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

        <div className="flex gap-4 border-b border-border-light pb-4 mb-6">
          <button
            onClick={() => setAuthTab("login")}
            className={`text-lg font-heading font-extrabold pb-2 border-b-2 transition-colors ${
              authTab === "login" ? "text-primary border-primary" : "text-text-secondary border-transparent hover:text-primary"
            }`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => setAuthTab("register")}
            className={`text-lg font-heading font-extrabold pb-2 border-b-2 transition-colors ${
              authTab === "register" ? "text-primary border-primary" : "text-text-secondary border-transparent hover:text-primary"
            }`}
          >
            Đăng ký
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          {authTab === "register" && (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase">Họ và tên</label>
              <input type="text" placeholder="Nguyễn Văn A"
                className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
              />
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Email</label>
            <input type="email" required placeholder="example@email.com"
              className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Mật khẩu</label>
            <input type="password" required placeholder="••••••••"
              className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
            />
          </div>
          <button type="submit"
            className="w-full py-3.5 mt-2 rounded-full bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-md"
          >
            {authTab === "login" ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
      </div>
    </div>
  );
}
