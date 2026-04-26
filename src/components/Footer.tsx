import Link from "next/link";
import { Globe, Send, Briefcase, Camera, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 overflow-hidden ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm">
                <span className="text-white font-heading font-bold text-2xl">B</span>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tighter">
                BELLA <span className="text-brand-red">PACK</span>
              </span>
            </Link>
            <p className="text-white/40 font-body leading-relaxed text-sm">
              Global leaders in industrial packaging machinery. Providing ultra-modern solutions for the food, pharmaceutical, and chemical industries since 1999.
            </p>
            <div className="flex space-x-4">
              {[Globe, Send, Briefcase, Camera].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">NAVIGATION</h4>
            <ul className="space-y-4">
              {["About", "Solutions", "Media", "Sustainability", "Careers", "News", "Contact"].map((item) => (
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
            <h4 className="font-heading font-bold text-lg mb-8 tracking-widest text-brand-red">HEADQUARTERS</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-brand-red mt-1 shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body leading-relaxed">
                  1234 Industrial Boulevard, <br /> Engineering District, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body">+1 (800) BELLA-PK</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span className="text-white/60 text-sm font-body">sales@bellapack.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/20 text-xs font-body">
            &copy; {new Date().getFullYear()} BELLA PACK MACHINERY CORP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-white/20 text-xs font-body">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
