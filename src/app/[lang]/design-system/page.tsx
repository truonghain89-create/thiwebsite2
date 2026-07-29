"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  Star,
  Compass,
  Check,
  AlertCircle,
  Bell,
  RefreshCw,
  Sliders,
  ChevronLeft,
  ChevronRight,
  FolderMinus
} from "lucide-react";

export default function DesignSystemPage() {
  const { lang, currency, formatPrice } = useApp();

  // Component states
  const [activeTab, setActiveTab] = useState("buttons");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [checkboxVal, setCheckboxVal] = useState(false);
  const [radioVal, setRadioVal] = useState("opt1");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#233142] text-white px-5 py-3.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-3 animate-fade-in">
          <Bell className="w-4 h-4 text-accent animate-bounce" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
          Vietnam Tours Design Language
        </span>
        <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary">
          Design System & UI Library
        </h1>
        <p className="text-sm text-text-secondary mt-2 max-w-[65ch] leading-relaxed">
          The atomic design token system built on modern nature aesthetics. Formulated with 60% White base, 20% Nature Blue, 10% Emerald Green, and Sunrise highlights.
        </p>
      </div>

      {/* Navigation tabs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 border-b border-border-nature mb-12 overflow-x-auto scrollbar-thin">
        <div className="flex gap-6 pb-2 min-w-[500px]">
          {["tokens", "buttons", "inputs", "feedback", "overlays"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold uppercase tracking-wider pb-3 border-b-2 transition-colors focus:outline-none ${
                activeTab === tab ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* TAB 1: DESIGN TOKENS */}
        {activeTab === "tokens" && (
          <div className="flex flex-col gap-12 animate-fade-in">
            {/* Color Palette Grid */}
            <div className="flex flex-col gap-4">
              <h3 className="font-playfair text-xl font-bold text-text-primary">Fresh Nature Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="h-24 w-full rounded-2xl bg-primary shadow-sm" />
                  <span className="text-xs font-bold text-text-primary">Nature Blue</span>
                  <span className="text-[10px] text-text-secondary">#2D7FF9 (Primary)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-24 w-full rounded-2xl bg-secondary shadow-sm" />
                  <span className="text-xs font-bold text-text-primary">Emerald Green</span>
                  <span className="text-[10px] text-text-secondary">#2E8B57 (Secondary)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-24 w-full rounded-2xl bg-accent shadow-sm" />
                  <span className="text-xs font-bold text-text-primary">Sunrise Orange</span>
                  <span className="text-[10px] text-text-secondary">#F6A623 (Accent)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-24 w-full rounded-2xl bg-sand border border-border-nature/50 shadow-sm" />
                  <span className="text-xs font-bold text-text-primary">Sand</span>
                  <span className="text-[10px] text-text-secondary">#F7F3EA (Neutral)</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-24 w-full rounded-2xl bg-soft-mint border border-border-nature/50 shadow-sm" />
                  <span className="text-xs font-bold text-text-primary">Soft Mint</span>
                  <span className="text-[10px] text-text-secondary">#F5FAF6 (Background)</span>
                </div>
              </div>
            </div>

            {/* Typography scale */}
            <div className="flex flex-col gap-4 border-t border-border-nature/60 pt-8">
              <h3 className="font-playfair text-xl font-bold text-text-primary">Typography Scale</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] text-text-secondary block mb-1 font-mono uppercase">Heading Display (Playfair Display)</span>
                  <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary">
                    Vietnam, a timeless journey.
                  </h1>
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary block mb-1 font-mono uppercase">Sub Heading (Cormorant Garamond)</span>
                  <h2 className="font-cormorant text-2xl italic font-semibold text-text-primary leading-tight">
                    Immerse yourself in mist-shrouded rice fields and deep emerald oceans.
                  </h2>
                </div>
                <div>
                  <span className="text-[10px] text-text-secondary block mb-1 font-mono uppercase">Body Sans-Serif (Inter)</span>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-[65ch]">
                    Experience Vietnam like a local, with world-class comfort. Slow travel itineraries crafted precisely to show you the authentic, rich cultural heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BUTTONS & BADGES */}
        {activeTab === "buttons" && (
          <div className="flex flex-col gap-12 animate-fade-in">
            {/* Buttons Showcase */}
            <div className="flex flex-col gap-4">
              <h3 className="font-playfair text-xl font-bold text-text-primary">Buttons Sandbox</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-5 py-3 bg-primary hover:bg-primary/95 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm">
                  Primary Blue
                </button>
                <button className="px-5 py-3 bg-secondary hover:bg-secondary/95 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm">
                  Secondary Green
                </button>
                <button className="px-5 py-3 bg-accent hover:bg-accent/95 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm">
                  Accent Orange
                </button>
                <button className="px-5 py-3 border border-border-nature hover:bg-black/5 text-text-primary font-semibold text-xs rounded-xl transition-all">
                  Outline Neutral
                </button>
                <button className="px-5 py-3 bg-nature-white border border-border-nature hover:bg-soft-mint text-text-primary font-semibold text-xs rounded-xl transition-colors">
                  Solid Mint
                </button>
                <button className="glassmorphism px-5 py-3 hover:bg-white/90 text-text-primary font-semibold text-xs rounded-xl transition-all shadow-sm">
                  Glass Button
                </button>
              </div>
            </div>

            {/* Badges and Tags */}
            <div className="flex flex-col gap-4 border-t border-border-nature/60 pt-8">
              <h3 className="font-playfair text-xl font-bold text-text-primary">Badges & Indicators</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider rounded">
                  Adventure
                </span>
                <span className="px-3 py-1 bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-wider rounded">
                  Featured
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded">
                  Heritage
                </span>
                <span className="flex items-center gap-1 bg-accent/10 px-2.5 py-0.5 rounded text-[10px] font-bold text-accent">
                  <Star className="w-3.5 h-3.5 fill-accent" />
                  <span>4.9 / 5.0</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FORM INPUTS */}
        {activeTab === "inputs" && (
          <div className="flex flex-col gap-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Text Input Sandbox */}
              <div className="flex flex-col gap-4">
                <h3 className="font-playfair text-xl font-bold text-text-primary">Text Inputs</h3>
                <div className="flex flex-col gap-1.5 w-full">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 rounded-xl border border-border-nature focus:border-primary focus:outline-none bg-nature-white text-text-primary"
                  />
                  {inputText && (
                    <span className="text-[10px] text-primary font-medium">typing: {inputText}</span>
                  )}
                </div>
              </div>

              {/* Toggles Sandbox */}
              <div className="flex flex-col gap-4">
                <h3 className="font-playfair text-xl font-bold text-text-primary">Checkboxes & Radios</h3>
                <div className="flex flex-col gap-4">
                  {/* Checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checkboxVal}
                      onChange={(e) => setCheckboxVal(e.target.checked)}
                      className="w-4 h-4 rounded text-primary focus:ring-primary border-border-nature"
                    />
                    <span className="text-xs font-semibold text-text-primary">
                      Accept terms and travel policy
                    </span>
                  </label>

                  {/* Radios */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                      Select currency preference
                    </span>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="custom-radio"
                          value="opt1"
                          checked={radioVal === "opt1"}
                          onChange={() => setRadioVal("opt1")}
                          className="text-primary focus:ring-primary border-border-nature"
                        />
                        <span className="text-xs font-semibold text-text-primary">USD ($)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="custom-radio"
                          value="opt2"
                          checked={radioVal === "opt2"}
                          onChange={() => setRadioVal("opt2")}
                          className="text-primary focus:ring-primary border-border-nature"
                        />
                        <span className="text-xs font-semibold text-text-primary">VND (₫)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Accordion example */}
            <div className="border-t border-border-nature/60 pt-8 w-full max-w-xl">
              <h3 className="font-playfair text-xl font-bold text-text-primary mb-4">Accordion Accord</h3>
              <div className="border border-border-nature rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setAccordionOpen(!accordionOpen)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-soft-mint/20 focus:outline-none transition-colors"
                >
                  <span className="font-playfair font-bold text-sm text-text-primary">
                    Is this layout accessible (WCAG AA)?
                  </span>
                  <span className="text-secondary font-bold text-sm">{accordionOpen ? "-" : "+"}</span>
                </button>
                {accordionOpen && (
                  <div className="px-6 pb-6 text-xs text-text-secondary leading-relaxed font-medium">
                    Yes, all custom buttons have unique IDs, markup uses HTML5 semantic landmarks, contrast ratios comply with WCAG AA specifications, and components support keyboard navigation.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FEEDBACK & STATE LIBRARY */}
        {activeTab === "feedback" && (
          <div className="flex flex-col gap-12 animate-fade-in">
            {/* Skeleton & Loading States */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Skeleton Loaders */}
              <div className="flex flex-col gap-4">
                <h3 className="font-playfair text-xl font-bold text-text-primary">Skeleton Card Preview</h3>
                <div className="border border-border-nature rounded-3xl p-6 flex flex-col gap-4 bg-nature-white w-full max-w-sm">
                  {/* Image skeleton */}
                  <div className="h-44 w-full bg-slate-100 rounded-2xl animate-pulse" />
                  {/* Title lines */}
                  <div className="h-4 w-2/3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-3 w-full bg-slate-100 rounded animate-pulse" />
                  <div className="h-3 w-5/6 bg-slate-100 rounded animate-pulse" />
                  {/* Buttons line */}
                  <div className="flex justify-between items-center mt-2.5">
                    <div className="h-6 w-1/4 bg-slate-100 rounded animate-pulse" />
                    <div className="h-8 w-1/3 bg-slate-100 rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Progress and loading wheels */}
              <div className="flex flex-col gap-4">
                <h3 className="font-playfair text-xl font-bold text-text-primary">Loading Spinners</h3>
                <div className="flex gap-6 items-center">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
                    <RefreshCw className="w-5 h-5 text-primary animate-spin" />
                    <span>Syncing database...</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
                    <Compass className="w-6 h-6 text-secondary animate-spin-slow" style={{ animationDuration: "5s" }} />
                    <span>Calculating coordinates...</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Empty State Showcase */}
            <div className="border-t border-border-nature/60 pt-8">
              <h3 className="font-playfair text-xl font-bold text-text-primary mb-4">Empty State Module</h3>
              <div className="border border-border-nature border-dashed rounded-3xl p-12 flex flex-col items-center gap-4 text-center max-w-xl mx-auto bg-nature-white">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-border-nature">
                  <FolderMinus className="w-7 h-7 text-text-secondary/50" />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-text-primary">
                    No reservations found
                  </h4>
                  <p className="text-xs text-text-secondary mt-1 max-w-[320px]">
                    You haven't scheduled any slow journeys yet. Let our custom AI planner draft your dream trip.
                  </p>
                </div>
                <button
                  onClick={() => showToast("Navigating to AI Architect...")}
                  className="px-5 py-2.5 bg-secondary hover:bg-secondary/95 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm"
                >
                  Create Plan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: OVERLAYS (MODALS & TOASTS) */}
        {activeTab === "overlays" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <h3 className="font-playfair text-xl font-bold text-text-primary">Modal & Toast Triggers</h3>
            <p className="text-xs text-text-secondary -mt-4 max-w-[50ch] leading-relaxed">
              Test dynamic interface popups. Clicking triggers a custom local React state overlay.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-3 bg-[#233142] hover:bg-[#233142]/95 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm"
              >
                Launch Dialog Modal
              </button>
              <button
                onClick={() => showToast("Success! Local settings catalog has been updated.")}
                className="px-5 py-3 bg-[#6BCB77] hover:bg-[#6BCB77]/95 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm"
              >
                Trigger Dynamic Toast
              </button>
            </div>

            {/* Modal Dialog Simulation */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
                <div className="bg-[#FCFDFB] border border-border-nature rounded-3xl p-6 w-full max-w-md shadow-2xl relative">
                  <div className="flex items-center gap-3 text-secondary mb-4">
                    <AlertCircle className="w-6 h-6" />
                    <h4 className="font-playfair text-xl font-bold text-text-primary">
                      Unsaved Changes
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6 font-medium">
                    You have edited your traveler counts. Do you wish to save these changes to your active reservation buffer, or reset configurations?
                  </p>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        showToast("Changes discarded.");
                      }}
                      className="px-4 py-2 bg-slate-50 border border-border-nature text-text-primary hover:bg-slate-100 rounded-lg text-xs font-bold transition-all"
                    >
                      Discard
                    </button>
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        showToast("Settings preserved.");
                      }}
                      className="px-4 py-2 bg-secondary text-white hover:bg-secondary/95 rounded-lg text-xs font-bold transition-all"
                    >
                      Save Configuration
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
