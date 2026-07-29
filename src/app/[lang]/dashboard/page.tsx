"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp, Language } from "@/context/AppContext";
import { tours, Tour } from "@/data/mockData";
import { Heart, Compass, Star, Calendar, User, Mail, ShieldAlert, Award, FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

function DashboardPageContent({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { formatPrice, wishlist, toggleWishlist, bookings, t } = useApp();
  const searchParams = useSearchParams();

  // Tab State
  const initialTab = searchParams.get("tab") || "bookings";
  const [activeTab, setActiveTab] = useState(initialTab);

  const [wishlistTours, setWishlistTours] = useState<Tour[]>([]);

  // Update wishlist items
  useEffect(() => {
    const list = tours.filter((t) => wishlist.includes(t.id));
    setWishlistTours(list);
  }, [wishlist]);

  // Handle direct tab switches from URL query changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Profile overview panel (cols 4) */}
        <div className="lg:col-span-4 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6 items-center text-center">
          {/* Avatar representation */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center text-secondary font-playfair text-3xl font-bold">
              E
            </div>
            <div className="absolute -bottom-1 -right-1 bg-accent text-white p-1 rounded-full shadow-md">
              <Award className="w-4 h-4" />
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-text-primary">Elena Rostov</h2>
            <span className="text-[10px] font-extrabold uppercase text-secondary tracking-widest bg-secondary/10 px-2.5 py-0.5 rounded mt-1.5 inline-block">
              Lotus Explorer Member
            </span>
          </div>

          {/* Details list */}
          <div className="w-full flex flex-col gap-3.5 text-xs text-left border-t border-border-nature/40 pt-6">
            <span className="flex items-center gap-3 text-text-secondary">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <span>elena.rostov@domain.com</span>
            </span>
            <span className="flex items-center gap-3 text-text-secondary">
              <User className="w-4 h-4 text-secondary shrink-0" />
              <span>Passport: EF000***</span>
            </span>
          </div>

          {/* Navigation links inside account */}
          <div className="w-full flex flex-col gap-2 mt-4">
            {[
              { id: "bookings", label: "My Bookings", count: bookings.length },
              { id: "wishlist", label: "My Wishlist", count: wishlist.length },
              { id: "profile", label: "Settings Profile", count: null }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold rounded-xl transition-all ${
                  activeTab === item.id
                    ? "bg-secondary text-white shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100 text-text-primary border border-border-nature/20"
                }`}
              >
                <span>{item.label}</span>
                {item.count !== null && (
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${activeTab === item.id ? "bg-white text-secondary" : "bg-border-nature text-text-secondary"}`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Tab details (cols 8) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* TAB 1: RESERVATIONS */}
          {activeTab === "bookings" && (
            <div className="flex flex-col gap-6 animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-text-primary border-b border-border-nature/40 pb-3">
                Reservation History
              </h3>

              {bookings.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {bookings.map((booking, idx) => (
                    <div
                      key={booking.id || idx}
                      className="bg-nature-white border border-border-nature/40 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-1">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-secondary">
                            Booking Confirmed • Ticket #{booking.id || "10243"}
                          </span>
                          <h4 className="font-playfair text-lg font-bold text-text-primary leading-tight">
                            {booking.title}
                          </h4>
                          <div className="flex items-center gap-4 text-xs text-text-secondary font-medium">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Travel: {booking.date}</span>
                            <span>•</span>
                            <span>{booking.guests} {booking.guests === 1 ? "Guest" : "Guests"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end justify-between gap-1.5 border-t md:border-t-0 border-border-nature/40 pt-4 md:pt-0">
                        <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Amount Paid</span>
                        <span className="text-xl font-bold font-playfair text-text-primary">
                          {formatPrice(booking.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-border-nature border-dashed rounded-3xl p-16 flex flex-col items-center gap-4 text-center bg-nature-white max-w-xl mx-auto mt-4">
                  <Compass className="w-12 h-12 text-text-secondary/40 animate-pulse" />
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-text-primary">No Active Bookings</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      You haven't purchased any journeys yet. Begin your exploration today!
                    </p>
                  </div>
                  <Link
                    href={`/${lang}/tours`}
                    className="px-5 py-2.5 bg-secondary text-white text-xs font-semibold rounded-xl"
                  >
                    Explore Tours
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: MY WISHLIST */}
          {activeTab === "wishlist" && (
            <div className="flex flex-col gap-6 animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-text-primary border-b border-border-nature/40 pb-3">
                Saved Journeys
              </h3>

              {wishlistTours.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistTours.map((tour) => (
                    <div
                      key={tour.id}
                      className="bg-nature-white border border-border-nature/40 rounded-3xl overflow-hidden shadow-sm flex flex-col group"
                    >
                      <div className="h-48 w-full overflow-hidden relative">
                        <img
                          src={tour.image}
                          alt={tour.title[lang]}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                        />
                        <button
                          onClick={() => toggleWishlist(tour.id)}
                          className="absolute top-4 left-4 p-2 bg-[#FCFDFB]/80 hover:bg-[#FCFDFB] backdrop-blur-md rounded-full shadow-sm text-text-primary focus:outline-none"
                        >
                          <Heart className="w-4 h-4 fill-accent-coral text-accent-coral" />
                        </button>
                      </div>

                      <div className="p-5 flex flex-col justify-between gap-4 flex-grow">
                        <div className="flex flex-col gap-1.5">
                          <h4 className="font-playfair text-lg font-bold text-text-primary leading-snug group-hover:text-primary transition-colors">
                            <Link href={`/${lang}/tours/${tour.id}`}>{tour.title[lang]}</Link>
                          </h4>
                          <span className="text-xs text-text-secondary font-semibold">
                            {tour.duration} Days / {tour.groupSize[lang]}
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-t border-border-nature/40 pt-3.5 mt-1">
                          <span className="text-base font-bold font-playfair text-text-primary">
                            {formatPrice(tour.priceUSD)}
                          </span>
                          <Link
                            href={`/${lang}/tours/${tour.id}`}
                            className="px-3.5 py-2 bg-secondary text-white text-xs font-bold rounded-lg"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-border-nature border-dashed rounded-3xl p-16 flex flex-col items-center gap-4 text-center bg-nature-white max-w-xl mx-auto mt-4">
                  <Heart className="w-12 h-12 text-text-secondary/40 animate-bounce" />
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-text-primary">Wishlist is Empty</h4>
                    <p className="text-xs text-text-secondary mt-1">
                      Tap the heart icon on any tour or resort to save details here for later review.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PROFILE PROFILE */}
          {activeTab === "profile" && (
            <div className="flex flex-col gap-6 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 shadow-sm animate-fade-in">
              <h3 className="font-playfair text-xl font-bold text-text-primary border-b border-border-nature/40 pb-3">
                Account Settings
              </h3>
              
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Account Tier</span>
                  <span className="font-semibold text-text-primary">Premium Explorer (5 active reward points)</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Data Synchronization</span>
                  <span className="font-semibold text-text-primary">Wishlist and bookings are synced with local browser cookies.</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

import { Suspense } from "react";

export default function DashboardPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-xs font-bold text-text-secondary">Loading dashboard profile...</div>}>
      <DashboardPageContent params={params} />
    </Suspense>
  );
}
