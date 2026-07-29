"use client";

import React, { use } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { blogs } from "@/data/mockData";
import { ArrowRight, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default function GuidePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const { t } = useApp();

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-extrabold text-secondary tracking-widest block mb-1">
            Local Secrets
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-black text-text-primary leading-tight">
            Travel Guides & Blog
          </h1>
          <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
            Slow narratives on culinary traditions, local coffee rituals, and guides on how to experience Vietnam without crowds.
          </p>
        </div>

        {/* Blog listing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogs.map((post) => (
            <div key={post.id} className="flex flex-col gap-5 group">
              <div className="h-72 w-full rounded-3xl overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-4 left-4 bg-[#FCFDFB]/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-text-primary uppercase tracking-wider">
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                  {post.date} • written by {post.author}
                </span>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors leading-snug">
                  <Link href={`/${lang}/guide/${post.id}`}>{post.title[lang]}</Link>
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {post.excerpt[lang]}
                </p>
                <Link
                  href={`/${lang}/guide/${post.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors uppercase mt-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
