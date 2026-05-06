import Link from 'next/link';
import Image from 'next/image';
import { AnimatedText } from '@/components/AnimatedText';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f3]/80 dark:bg-[#1b1c19]/80 backdrop-blur-xl">
      <nav className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4 md:gap-8">
          <button className="text-[#00361a] dark:text-[#fbf9f3] opacity-70 transition-all hover:opacity-100">
            <span className="material-symbols-outlined !text-2xl md:!text-3xl">menu</span>
          </button>
          
          {/* Brand Logo + Name */}
          <Link href="/" className="flex items-center gap-2 md:gap-4 group">
            <div className="relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0 drop-shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Elegant Dress Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <AnimatedText 
              text="ELEGANT DRESS" 
              className="py-0 !justify-start"
              textClassName="font-headline text-2xl md:text-5xl font-black tracking-tighter uppercase !text-2xl md:!text-5xl"
              gradientColors="linear-gradient(90deg, #755B00, #00361a, #755B00)"
              hoverEffect={true}
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-[#755B00] dark:text-[#755B00] font-medium font-headline text-xl tracking-tight hover:text-[#755B00] transition-colors duration-300">
              Home
            </Link>
            <Link href="/collection?category=suits" className="text-[#1b1c19] dark:text-[#fbf9f3] font-headline text-xl tracking-tight hover:text-[#755B00] transition-colors duration-300">
              Bespoke Suits
            </Link>
            <Link href="/collection?category=gowns" className="text-[#1b1c19] dark:text-[#fbf9f3] font-headline text-xl tracking-tight hover:text-[#755B00] transition-colors duration-300">
              Evening Gowns
            </Link>
          </div>
          <button className="text-[#00361a] dark:text-[#fbf9f3] opacity-70 transition-all hover:opacity-100">
            <span className="material-symbols-outlined !text-2xl md:!text-3xl">shopping_bag</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
