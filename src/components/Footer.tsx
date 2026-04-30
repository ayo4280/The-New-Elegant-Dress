import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/AnimatedText';

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#1A4D2E] dark:bg-[#002110]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="group">
            <AnimatedText 
              text="ELEGANT DRESS" 
              className="py-0 !justify-start"
              textClassName="font-headline text-xl font-bold tracking-tighter uppercase !text-xl text-secondary group-hover:text-white transition-colors"
              gradientColors="linear-gradient(90deg, #755B00, #00361a, #755B00)"
              hoverEffect={true}
            />
          </Link>
          <p className="text-[#fbf9f3]/80 font-body text-sm tracking-wide text-center md:text-left max-w-xs">
            © 2026 Elegant Dress. Bespoke Excellence. Defined by nature, refined by hand.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link href="/privacy" className="text-[#fbf9f3]/80 font-body text-sm tracking-wide hover:text-white transition-opacity hover:text-[#755B00] underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#fbf9f3]/80 font-body text-sm tracking-wide hover:text-white transition-opacity">
            Terms of Service
          </Link>
          <Link href="/shipping" className="text-[#fbf9f3]/80 font-body text-sm tracking-wide hover:text-white transition-opacity">
            Shipping
          </Link>
          <Link href="/careers" className="text-[#fbf9f3]/80 font-body text-sm tracking-wide hover:text-white transition-opacity">
            Careers
          </Link>
        </div>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* X (Twitter) */}
          <Button
            variant="outline"
            asChild
            className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer border-[#fbf9f3]/20 bg-transparent text-[#fbf9f3] hover:bg-[#fbf9f3]/10"
          >
            <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>
          </Button>
          {/* Instagram */}
          <Button
            variant="outline"
            type="button"
            className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer border-[#fbf9f3]/20 bg-transparent text-[#fbf9f3] hover:bg-[#fbf9f3]/10"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </Button>
          {/* linkedin */}
          <Button
            variant="outline"
            type="button"
            className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer border-[#fbf9f3]/20 bg-transparent text-[#fbf9f3] hover:bg-[#fbf9f3]/10"
          >
            <img
              src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
              alt="linkedin icon"
              className="h-4 w-4"
            />
          </Button>
          {/* facebook */}
          <Button
            variant="outline"
            type="button"
            className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer border-[#fbf9f3]/20 bg-transparent text-[#fbf9f3] hover:bg-[#fbf9f3]/10"
          >
            <img
              src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
              alt="facebook icon"
              className="h-4 w-4"
            />
          </Button>

          {/* whatsapp */}
          <Button
            variant="outline"
            type="button"
            className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer border-[#fbf9f3]/20 bg-transparent text-[#fbf9f3] hover:bg-[#fbf9f3]/10"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.607 6.039L0 24l6.135-1.61a11.748 11.748 0 005.911 1.586h.005c6.634 0 12.032-5.396 12.035-12.032a11.762 11.762 0 00-3.48-8.504z"></path>
            </svg>
          </Button>

          {/* Order Tracking */}
          <div className="flex flex-col items-center gap-2 group ml-4">
            <Button
              variant="outline"
              size="icon"
              title="Order Tracking"
              className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer border-[#fbf9f3]/20 bg-transparent text-[#fbf9f3] hover:bg-[#fbf9f3]/10"
            >
              <span className="material-symbols-outlined">history</span>
            </Button>
            <span className="text-[10px] text-[#fbf9f3]/60 uppercase tracking-widest font-bold group-hover:text-white transition-colors">Order Tracking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
