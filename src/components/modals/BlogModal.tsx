"use client";

import { useApp } from "@/context/AppContext";
import { X } from "lucide-react";

export function BlogModal() {
  const { blogModalData, closeModal } = useApp();

  if (!blogModalData) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="glass-strong rounded-[32px] p-8 md:p-10 max-w-2xl w-full shadow-hover relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeModal} className="absolute top-6 right-6 text-text hover:text-primary transition-colors z-10">
          <X className="w-6 h-6" />
        </button>

        <div className="text-left flex flex-col gap-4">
          <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider self-start font-heading">
            {blogModalData.category}
          </span>
          <span className="text-xs text-text-secondary font-semibold">{blogModalData.date}</span>
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-text leading-tight pr-8">
            {blogModalData.title}
          </h3>
          <div className="w-full h-64 rounded-2xl overflow-hidden mt-2">
            <img src={blogModalData.image} alt={blogModalData.title} className="w-full h-full object-cover" />
          </div>
          <div className="text-text-secondary text-sm leading-relaxed mt-4 flex flex-col gap-4 font-body">
            {blogModalData.content.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
