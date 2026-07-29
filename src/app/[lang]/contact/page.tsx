"use client";

import React, { use, useState } from "react";
import { useApp, Language } from "@/context/AppContext";
import { Compass, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function ContactPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { t } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Col: Contact info details (cols 5) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-1">
              Reach Out
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-black text-text-primary leading-tight">
              Get in Touch
            </h1>
            <p className="text-sm text-text-secondary mt-1.5 leading-relaxed font-medium">
              Have questions about private itineraries or custom group requests? Drop us a message, and our local travel experts will write back within 12 hours.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-xs font-semibold text-text-secondary">
            <span className="flex items-center gap-3.5">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>+84 24 3999 8888</span>
            </span>
            <span className="flex items-center gap-3.5">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>concierge@vietnam-tours.luxury</span>
            </span>
            <span className="flex items-center gap-3.5">
              <MapPin className="w-5 h-5 text-secondary shrink-0" />
              <span>18 Ngo Quyen, Hoan Kiem District, Hanoi, Vietnam</span>
            </span>
          </div>
        </div>

        {/* Right Col: Contact Form (cols 7) */}
        <div className="lg:col-span-7 bg-nature-white border border-border-nature/40 rounded-3xl p-6 md:p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <div className="w-12 h-12 rounded-full bg-soft-mint text-secondary flex items-center justify-center border border-secondary/20">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-text-primary">Thank you!</h4>
                <p className="text-xs text-text-secondary mt-1 max-w-[280px]">
                  Your query has been recorded. Our travel designers will follow up shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Message Details</label>
                <textarea
                  required
                  placeholder="Tell us about your travel dates, preferred destinations, or customizations..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[120px] p-4 text-xs font-semibold rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-[#FCFDFB] text-text-primary"
                />
              </div>

              <button
                type="submit"
                className="self-end px-6 py-3.5 bg-secondary hover:bg-secondary/95 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
