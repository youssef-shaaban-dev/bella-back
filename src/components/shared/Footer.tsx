import Link from "next/link";
import { Mail, Phone, MapPin, Printer } from "lucide-react";
import Image from "next/image";

const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-sm relative">
                <Image src="/logo.png" alt="BellaPack" width={200} height={200} className="object-contain" />
              </div>
            </Link>
            <p className="text-white/40 font-body leading-relaxed text-sm">
              Global leaders in industrial packaging machinery. Providing ultra-modern solutions for the food, pharmaceutical, and chemical industries since 1999.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">Quick Links</h4>
            <ul className="space-y-4">
              {["About us", "services", "Sustainability", "Careers", "News", "media"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">SOLUTIONS</h4>
            <ul className="space-y-4">
              {["Food & Beverage", "Spices & Coffee", "Snacks & Granules", "Detergents & Chemicals", "Cosmetics & Pharma", "Pet Food"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">CONTACT</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-brand-red mt-1 shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body leading-relaxed">
                  Industrial zone (c6) plot 75,<br />10th of Ramadan city Egypt
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body">info@bellapack.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body">+20 15 380692</span>
              </li>
              <li className="flex items-center space-x-4">
                <Printer className="text-brand-red shrink-0" size={20} />
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] border border-white/20 px-1 rounded-sm uppercase tracking-widest text-white/40">Fax</span>
                  <span className="text-white/60 text-sm font-body">+20 15 380693</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/20 text-xs font-body">
            &copy; {new Date().getFullYear()} BELLAPACK MACHINERY CORP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-white/20 text-xs font-body">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
