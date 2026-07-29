"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useApp, Language } from "@/context/AppContext";
import { blogs, Blog } from "@/data/mockData";
import { ChevronLeft, Compass, Calendar, User, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string; id: string }>;
}

export default function GuideDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang as Language;
  const id = resolvedParams.id;
  const { t } = useApp();

  const [post, setPost] = useState<Blog | null>(null);

  useEffect(() => {
    const found = blogs.find((b) => b.id === id);
    if (found) setPost(found);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#FCFDFB]">
        <h2 className="font-playfair text-2xl font-bold">Article Not Found</h2>
        <Link href={`/${lang}/guide`} className="text-sm font-bold text-primary hover:underline">
          Return to all guides
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#FCFDFB] min-h-screen">
      <div className="max-w-[768px] mx-auto px-6">
        
        {/* Back Link */}
        <Link
          href={`/${lang}/guide`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-text-primary transition-colors uppercase tracking-wider mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All Articles</span>
        </Link>

        {/* Article Meta */}
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> {post.readTime}
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl font-black text-text-primary leading-tight">
            {post.title[lang]}
          </h1>
          
          <div className="flex items-center gap-4 text-xs text-text-secondary font-medium border-b border-border-nature pb-6 mt-2">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> written by {post.author}</span>
          </div>
        </div>

        {/* Feature Cover Image */}
        <div className="h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-sm">
          <img
            src={post.image}
            alt={post.title[lang]}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article content (markdown/editorial styles) */}
        <article className="font-sans text-sm text-text-secondary leading-relaxed flex flex-col gap-6 font-medium">
          <p className="text-base text-text-primary font-semibold leading-relaxed">
            {post.excerpt[lang]}
          </p>
          <p>
            {post.content[lang]}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>

      </div>
    </div>
  );
}
