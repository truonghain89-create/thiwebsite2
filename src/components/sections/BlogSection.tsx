"use client";

import { useApp } from "@/context/AppContext";
import { blogPosts } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollAnimator, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimator";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  const { t, lang } = useApp();

  return (
    <section className="section-padding bg-bg-alt" id="blog">
      <div className="container-main flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t("blog.eyebrow")}
            title={t("blog.title")}
            subtitle={t("blog.subtitle")}
          />
          <ScrollAnimator animation="fadeIn" delay={0.3}>
            <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:gap-3 transition-all shrink-0">
              {t("ui.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollAnimator>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <div className="group bg-bg-card rounded-3xl overflow-hidden border border-border-light shadow-card card-hover flex flex-col h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover image-zoom"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    {post.category[lang]}
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold border border-white/10">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime[lang]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-text-secondary text-xs">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary/60" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary/60" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {post.title[lang]}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {post.excerpt[lang]}
                  </p>

                  {/* CTA */}
                  <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-all mt-auto pt-3 border-t border-border-light self-start group/btn">
                    {t("blog.readMore")}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
