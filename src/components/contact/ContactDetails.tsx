"use client";

import React from "react";
import { Mail, MapPin, Phone, Clock, Globe } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-tighter text-charcoal mb-4">
          Corporate <span className="text-brand-red">Headquarters</span>
        </h2>
        <p className="text-gray-500 font-body text-base leading-relaxed">
          Visit our industrial headquarters or use our direct communication lines to schedule an in-person machine demo, factory floor walk-through, or consultation.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Detail item 1 */}
        <div className="flex items-start space-x-5 bg-gray-50 p-6 border border-gray-100 rounded-sm group hover:bg-white hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-colors">
            <MapPin className="text-brand-red group-hover:text-white transition-colors" size={22} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-charcoal uppercase text-sm tracking-wider mb-2">Primary Address</h4>
            <p className="text-gray-600 font-body text-sm leading-relaxed font-semibold">
              Industrial Zone (C6), Plot 75,<br />
              10th of Ramadan City, Egypt
            </p>
          </div>
        </div>

        {/* Detail item 2 */}
        <div className="flex items-start space-x-5 bg-gray-50 p-6 border border-gray-100 rounded-sm group hover:bg-white hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
            <Phone className="text-brand-blue group-hover:text-white transition-colors" size={22} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-charcoal uppercase text-sm tracking-wider mb-2">Sales & Inquiries</h4>
            <a href="tel:+01019222211" className="text-charcoal hover:text-brand-red transition-colors font-body font-bold text-lg">
              +01019222211
            </a>
          </div>
        </div>

        {/* Detail item 3 */}
        <div className="flex items-start space-x-5 bg-gray-50 p-6 border border-gray-100 rounded-sm group hover:bg-white hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center shrink-0 group-hover:bg-charcoal transition-colors">
            <Mail className="text-charcoal group-hover:text-white transition-colors" size={22} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-charcoal uppercase text-sm tracking-wider mb-2">Official Email</h4>
            <a href="mailto:info@bellapack.com" className="text-charcoal hover:text-brand-red transition-colors font-body font-bold text-lg tracking-wide">
              info@bellapack.com
            </a>
          </div>
        </div>
      </div>

      {/* Global presence indicator */}
      <div className="border-t border-gray-100 pt-8">
        <div className="flex items-center space-x-4 mb-4">
          <Globe size={20} className="text-brand-red" />
          <h5 className="font-heading font-bold uppercase tracking-wider text-xs text-charcoal">Global Shipping & Export</h5>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed font-body font-semibold">
          BellaPack proudly exports premium-grade packaging systems to over 15 countries. We provide worldwide technical deployment and logistics handling directly to your site.
        </p>
      </div>
    </div>
  );
}
