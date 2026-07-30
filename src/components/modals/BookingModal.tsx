"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X } from "lucide-react";

export function BookingModal() {
  const { bookingModalData, closeModal, formatPrice, addBooking } = useApp();
  const [guests, setGuests] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (!bookingModalData) return null;

  const totalPrice = bookingModalData.priceVND * guests;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.querySelector<HTMLInputElement>("#b-name");
    addBooking({
      title: bookingModalData.tourName,
      date: new Date().toLocaleDateString("vi-VN"),
      guests,
      price: totalPrice,
      customerName: nameInput?.value || "Khách hàng",
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setGuests(1);
      closeModal();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="glass-strong rounded-[32px] p-8 md:p-10 max-w-lg w-full shadow-hover relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-text hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading font-extrabold text-xl text-text">Đặt tour thành công!</h3>
            <p className="text-text-secondary text-sm">Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.</p>
          </div>
        ) : (
          <>
            <div className="text-left flex flex-col gap-2 mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary font-heading">Yêu cầu đặt tour</span>
              <h3 className="font-heading font-extrabold text-2xl text-text leading-tight">{bookingModalData.tourName}</h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Họ và tên</label>
                  <input id="b-name" type="text" required placeholder="Nguyễn Văn A"
                    className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Số điện thoại</label>
                  <input type="tel" required placeholder="0901234567"
                    className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Ngày khởi hành</label>
                  <input type="date" required
                    className="px-4 py-3 rounded-2xl border border-border-light focus:border-primary outline-none text-sm bg-bg/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase">Số lượng khách</label>
                  <div className="flex items-center border border-border-light rounded-2xl bg-bg/50">
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-12 py-3 text-text-secondary hover:text-primary transition-colors font-bold text-lg">−</button>
                    <span className="flex-grow text-center font-bold text-sm">{guests}</span>
                    <button type="button" onClick={() => setGuests(guests + 1)}
                      className="w-12 py-3 text-text-secondary hover:text-primary transition-colors font-bold text-lg">+</button>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-text-secondary uppercase">Tổng giá tạm tính</span>
                <span className="font-heading font-extrabold text-xl text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <button type="submit"
                className="w-full py-4 rounded-full bg-primary text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-md"
              >
                Xác nhận đặt tour
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
