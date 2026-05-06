import Image from "next/image";
import Link from "next/link";

import { SparklesCore } from "@/components/SparklesCore";
import { TextColor } from "@/components/TextColor";
import { TextEffect } from "@/components/TextEffect";
import { RevealText } from "@/components/RevealText";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="landing-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#C9A84C"
        />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[795px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* We will use regular img tag since Image requires host configuration for Next.js when using external images, 
              but since we have the original design urls, we'll configure it or use img. Using img for now to be safe with external URLs without config. */}
          <img 
            alt="A man in a sharp bespoke forest green suit" 
            className="w-full h-full object-cover grayscale-[0.2] opacity-60" 
            src="/images/hero-v2.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-4xl">
            <TextColor />
            <TextEffect 
              preset="blur"
              loop={true}
              className="font-body text-xl md:text-2xl text-white/90 mb-12 max-w-xl leading-relaxed"
            >
              Luxury tailoring inspired by nature, delivered to your door.
            </TextEffect>
            <div className="flex flex-wrap gap-6">
              <Link href="/collection" className="px-10 py-5 bg-primary border-2 border-secondary text-white font-semibold tracking-wide flex items-center gap-3 hover:bg-primary-container transition-all shadow-xl">
                <RevealText 
                  text="Explore Collection" 
                  fontSize="text-lg" 
                  textColor="text-white" 
                  overlayColor="text-[#C9A84C]" 
                />
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-surface/40 backdrop-blur-md border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant/20 pt-16">
            <div className="space-y-4">
              <span className="font-label text-secondary font-bold text-sm tracking-[0.2em] uppercase">The Legacy</span>
              <h3 className="font-headline text-3xl text-primary">Nigerian Craftsmanship</h3>
              <p className="text-on-surface/80 leading-relaxed font-body">Rooted in generations of master tailoring, our artisans blend traditional techniques with contemporary silhouettes.</p>
            </div>
            <div className="space-y-4">
              <span className="font-label text-secondary font-bold text-sm tracking-[0.2em] uppercase">The Precision</span>
              <h3 className="font-headline text-3xl text-primary">Bespoke Fit</h3>
              <p className="text-on-surface/80 leading-relaxed font-body">Utilizing 3D measurement technology to ensure your garment feels like a second skin from the very first wear.</p>
            </div>
            <div className="space-y-4">
              <span className="font-label text-secondary font-bold text-sm tracking-[0.2em] uppercase">The Experience</span>
              <h3 className="font-headline text-3xl text-primary">Convenience Redefined</h3>
              <p className="text-on-surface/80 leading-relaxed font-body">From virtual consultation to doorstep delivery, we bring the Savile Row experience to your home sanctuary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Feature Section (Bento Inspired) */}
      <section className="py-24 bg-surface-container-low/30 backdrop-blur-xl">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-4xl md:text-5xl text-secondary mb-6">Featured Looks</h2>
              <p className="text-on-surface/80 font-body">Our seasonal curation focuses on the &apos;Forest Estate&apos; aesthetic—deep earth tones and organic textures for the discerning leader.</p>
            </div>
            <Link href="/collection" className="font-label text-secondary font-semibold border-b-2 border-secondary pb-1 hover:text-surface transition-colors">
              View Entire Lookbook
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column - Large Features */}
            <div className="md:col-span-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="group overflow-hidden bg-surface-container-lowest relative">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    alt="A diverse group of business professionals posing for a career campaign" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/images/diverse-business-people-full-body-portrait-jobs-career-campaign.jpg"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-label text-xs tracking-widest text-secondary font-bold uppercase mb-2 block">Edition 01</span>
                      <h4 className="font-headline text-2xl text-primary mb-2">The Charcoal Estate Overcoat</h4>
                      <p className="text-on-surface/80 font-body">Hand-finished double-breasted wool cashmere blend.</p>
                    </div>
                    <span className="font-headline text-xl text-secondary">₦2,775,000</span>
                  </div>
                </div>
              </div>

              {/* Card 4 (New) */}
              <div className="group overflow-hidden bg-surface-container-lowest relative">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    alt="A perfectly tailored charcoal suit displayed on a mannequin" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/images/charcoal-suit.png"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-label text-xs tracking-widest text-secondary font-bold uppercase mb-2 block">Edition 02</span>
                      <h4 className="font-headline text-2xl text-primary mb-2">The Executive Charcoal Suit</h4>
                      <p className="text-on-surface/80 font-body">Italian wool-silk blend with a natural stretch for all-day comfort.</p>
                    </div>
                    <span className="font-headline text-xl text-secondary">₦1,850,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Side Cards */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="group bg-surface-container-lowest overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    alt="A businessman and his partner working in a modern office" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/images/businessman-with-his-partner-working-office.jpg"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-headline text-xl text-primary">Savannah Chinos</h4>
                  <p className="text-secondary font-semibold mt-1">₦480,000</p>
                </div>
              </div>

              <div className="group bg-surface-container-lowest overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    alt="Elegant Green Gown" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/images/green-gown.png"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-headline text-xl text-primary">The Heritage Shirt</h4>
                  <p className="text-secondary font-semibold mt-1">₦315,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quote / Narrative Section */}
      <section className="py-32 bg-primary-container/40 backdrop-blur-2xl text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[40rem] translate-x-1/2 -translate-y-1/4" style={{ fontVariationSettings: "'FILL' 1" }}>
            content_cut
          </span>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="material-symbols-outlined text-secondary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <blockquote className="font-headline text-3xl md:text-5xl italic leading-tight mb-12">
            &quot;True luxury is not just in the fabric, but in the silence of a perfect fit. It is the confidence to walk into any room and feel as though you belong to the earth beneath you.&quot;
          </blockquote>
          <cite className="font-label tracking-widest uppercase text-sm font-bold text-secondary-fixed">
            Obi Ndubisi, Master Tailor
          </cite>
        </div>
      </section>
    </>
  );
}
