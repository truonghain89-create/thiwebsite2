"use client";

import React, { use, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useApp, Language } from "@/context/AppContext";
import { Check, CreditCard, Landmark, CheckCircle, ShieldCheck, Heart } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

function CheckoutPageContent({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { formatPrice, addBooking, t } = useApp();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Booking config from URL queries
  const tourTitle = searchParams.get("title") || searchParams.get("tourId") || "Signature Custom Journey";
  const rawPrice = parseFloat(searchParams.get("price") || searchParams.get("totalPrice") || "299");
  const dateSelected = searchParams.get("date") || new Date().toISOString().split("T")[0];
  const guestsCount = parseInt(searchParams.get("guests") || "1");

  // State management
  const [step, setStep] = useState(1); // Steps: 1 = Details, 2 = Payment, 3 = Confirmation
  const [paymentMethod, setPaymentMethod] = useState("card"); // card or qr

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (name && email && phone) {
        setStep(2);
      }
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Create reservation object
      const newReservation = {
        title: tourTitle,
        date: dateSelected,
        guests: guestsCount,
        price: rawPrice,
        customerName: name,
        customerEmail: email
      };

      addBooking(newReservation);
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Step Indicator Header (Full width, spans 12 cols top) */}
        <div className="lg:col-span-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border-nature pb-6">
          <div>
            <h1 className="font-playfair text-3xl font-bold text-text-primary">
              Book Your Experience
            </h1>
            <p className="text-xs text-text-secondary mt-1">
              Secure payments powered by standard bank transfers or credit processing.
            </p>
          </div>
          {/* Step markers */}
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            <span className={`px-3 py-1.5 rounded-lg ${step >= 1 ? "bg-secondary text-white" : "bg-slate-100 text-text-secondary"}`}>1. Details</span>
            <span className="text-slate-300">→</span>
            <span className={`px-3 py-1.5 rounded-lg ${step >= 2 ? "bg-secondary text-white" : "bg-slate-100 text-text-secondary"}`}>2. Payment</span>
            <span className="text-slate-300">→</span>
            <span className={`px-3 py-1.5 rounded-lg ${step >= 3 ? "bg-secondary text-white" : "bg-slate-100 text-text-secondary"}`}>3. Success</span>
          </div>
        </div>

        {/* Left Side: Booking Forms (cols 8) */}
        <div className="lg:col-span-8">
          {/* STEP 1: TRAVELER DETAILS */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="flex flex-col gap-6 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-playfair text-xl font-bold text-text-primary border-b border-border-nature/40 pb-3">
                Traveler Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Lead Traveler Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+84 900 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Passport / ID Number</label>
                  <input
                    type="text"
                    placeholder="Optional for domestic travelers"
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="self-end px-6 py-3.5 bg-secondary hover:bg-secondary/95 text-white font-bold text-xs rounded-xl transition-colors shadow-sm mt-4"
              >
                Proceed to Payment
              </button>
            </form>
          )}

          {/* STEP 2: PAYMENT METHOD */}
          {step === 2 && (
            <form onSubmit={handleConfirmBooking} className="flex flex-col gap-6 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 shadow-sm animate-fade-in">
              <h3 className="font-playfair text-xl font-bold text-text-primary border-b border-border-nature/40 pb-3">
                Secure Checkout Payment
              </h3>

              {/* Payment selector tabs */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex-1 p-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border-nature hover:bg-slate-50 text-text-primary"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("qr")}
                  className={`flex-1 p-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                    paymentMethod === "qr"
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-border-nature hover:bg-slate-50 text-text-primary"
                  }`}
                >
                  <Landmark className="w-4 h-4" />
                  <span>VN Bank QR Transfer</span>
                </button>
              </div>

              {/* Form bodies */}
              {paymentMethod === "card" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-1.5 md:col-span-3">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Card Number</label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Expiry Date</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">CVV/CVC</label>
                    <input
                      type="password"
                      required
                      placeholder="***"
                      maxLength={3}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 text-center py-4 bg-slate-50 border border-border-nature/30 rounded-2xl">
                  {/* Mock Banking QR Code */}
                  <div className="w-48 h-48 bg-white border border-border-nature rounded-xl flex items-center justify-center p-4 relative shadow-inner">
                    <div className="absolute inset-0 bg-[radial-gradient(#233142_3px,transparent_3px)] [background-size:12px_12px] opacity-75" />
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center z-10 font-bold text-[10px]">
                      VietQR
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary">Scan QR with Vietcombank, Techcombank, etc.</h4>
                    <p className="text-[10px] text-text-secondary max-w-[300px] mt-1 leading-relaxed">
                      Scan code using any local banking application. Transaction registers instantly when transfer completes.
                    </p>
                  </div>
                </div>
              )}

              {/* Secure terms */}
              <div className="flex items-center gap-2 text-[10px] text-text-secondary font-medium">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Your card and transaction details are encrypted using standard SSL connection layers.</span>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 border border-border-nature hover:bg-black/5 text-text-primary font-bold text-xs rounded-xl transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-secondary hover:bg-secondary/95 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Confirm Reservation"}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {step === 3 && (
            <div className="flex flex-col items-center text-center gap-5 bg-nature-white border border-border-nature/40 rounded-3xl p-10 md:p-12 shadow-sm animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#E8F8F0] flex items-center justify-center text-secondary border border-secondary/20">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-text-primary leading-snug">
                  {t("ui.success")}
                </h3>
                <p className="text-xs text-text-secondary mt-1.5 max-w-[350px] leading-relaxed">
                  Your reservation is confirmed. We have emailed your custom ticket details and local itinerary to <span className="font-semibold text-text-primary">{email}</span>.
                </p>
              </div>

              <div className="border-t border-b border-border-nature/40 py-5 w-full max-w-sm my-2 flex flex-col gap-2.5 text-xs text-left">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Destination/Tour</span>
                  <span className="font-bold text-text-primary">{tourTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Travel Date</span>
                  <span className="font-semibold text-text-primary">{dateSelected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Guests count</span>
                  <span className="font-semibold text-text-primary">{guestsCount} {guestsCount === 1 ? "person" : "people"}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => router.push(`/${lang}/dashboard`)}
                  className="px-5 py-3 bg-[#233142] hover:bg-[#233142]/95 text-white font-bold text-xs rounded-xl transition-all shadow-sm"
                >
                  View My Bookings
                </button>
                <button
                  onClick={() => router.push(`/${lang}`)}
                  className="px-5 py-3 border border-border-nature hover:bg-black/5 text-text-primary font-bold text-xs rounded-xl transition-all"
                >
                  Return Home
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary Panel (cols 4) */}
        {step < 3 && (
          <div className="lg:col-span-4 bg-nature-white border border-border-nature/40 rounded-3xl p-6 shadow-sm flex flex-col gap-5">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-text-secondary border-b border-border-nature/40 pb-3">
              Journey Summary
            </h3>

            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Selected Path</span>
              <h4 className="font-playfair text-lg font-bold text-text-primary leading-snug">
                {tourTitle}
              </h4>
            </div>

            <div className="flex flex-col gap-3.5 text-xs border-t border-border-nature/40 pt-4">
              <div className="flex justify-between">
                <span className="text-text-secondary">Date Selected</span>
                <span className="font-semibold text-text-primary">{dateSelected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Guests Count</span>
                <span className="font-semibold text-text-primary">{guestsCount} {guestsCount === 1 ? "Person" : "People"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Unit cost</span>
                <span className="font-semibold text-text-primary">{formatPrice(rawPrice / guestsCount)}</span>
              </div>
            </div>

            <div className="border-t border-border-nature/60 pt-4 flex flex-col gap-2.5 text-xs">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal Price</span>
                <span>{formatPrice(rawPrice)}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Local Eco Tax (5%)</span>
                <span>{formatPrice(rawPrice * 0.05)}</span>
              </div>
              <div className="flex justify-between font-bold text-text-primary border-t border-border-nature/40 pt-3 mt-1 text-sm">
                <span>Total Due</span>
                <span>{formatPrice(rawPrice * 1.05)}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import { Suspense } from "react";

export default function CheckoutPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-xs font-bold text-text-secondary">Loading booking parameters...</div>}>
      <CheckoutPageContent params={params} />
    </Suspense>
  );
}
