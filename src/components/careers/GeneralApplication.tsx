"use client";

import React, { useState, useRef } from "react";
import { Upload, CheckCircle, AlertCircle, ArrowRight, FileText } from "lucide-react";

export default function GeneralApplication() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    city: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <section className="py-24 bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center max-w-xl bg-white border border-gray-100 p-12 shadow-xl rounded-sm animate-[fadeIn_0.5s_ease-out]">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 text-green-600">
            <CheckCircle size={40} />
          </div>
          <h3 className="text-3xl font-bold font-heading uppercase text-charcoal tracking-tight mb-4">Application Received</h3>
          <p className="text-gray-500 font-body text-base leading-relaxed mb-8">
            Thank you for applying to join BellaPack, <strong>{formData.fullName}</strong>. Our Talent Acquisition team will review your profile and reach out shortly.
          </p>
          <button 
            onClick={() => {
              setStatus("idle");
              setSelectedFile(null);
              setFormData({ fullName: "", email: "", phone: "", age: "", education: "", city: "" });
            }}
            className="text-xs font-heading font-bold uppercase tracking-widest text-brand-red hover:text-charcoal transition-colors"
          >
            Submit Another Response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-heading mb-4">Join Our Directory</h3>
          <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-tighter text-charcoal mb-4">
            General <span className="text-brand-red">Application</span>
          </h2>
          <p className="text-gray-500 font-body text-sm font-semibold leading-relaxed">
            Complete the secure portal submission below. Valid CV upload is required for processing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reveal bg-white border border-gray-200 shadow-2xl shadow-charcoal/5 rounded-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Full Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">First and Last Name *</label>
              <input 
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors text-charcoal font-medium"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">Email Address *</label>
              <input 
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@firm.com"
                className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors text-charcoal font-medium"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">Phone Number *</label>
              <input 
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+20 1XX XXX XXXX"
                className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors text-charcoal font-medium"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">Age *</label>
              <input 
                required
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="24"
                min="18"
                max="70"
                className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors text-charcoal font-medium"
              />
            </div>

            {/* Education */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">Highest Education Level *</label>
              <input 
                required
                type="text"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="e.g. B.Sc. Mechanical Engineering"
                className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors text-charcoal font-medium"
              />
            </div>

            {/* City */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">City / Governorate *</label>
              <input 
                required
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Cairo, Egypt"
                className="bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-red focus:bg-white transition-colors text-charcoal font-medium"
              />
            </div>
          </div>

          {/* CV File Upload Drop Area */}
          <div className="mb-8 flex flex-col space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60 font-heading">Upload Your CV (PDF/Word) *</label>
            <input 
              ref={fileInputRef}
              required
              type="file" 
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <div 
              onClick={triggerFileInput}
              className={`border-2 border-dashed rounded-sm p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                selectedFile 
                  ? "border-brand-red bg-brand-red/5" 
                  : "border-gray-200 bg-gray-50 hover:border-gray-400 hover:bg-white"
              }`}
            >
              {selectedFile ? (
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white shadow-lg">
                    <FileText size={20} />
                  </div>
                  <span className="text-sm font-bold font-heading text-charcoal uppercase tracking-wide">{selectedFile.name}</span>
                  <span className="text-[10px] text-gray-400 font-body font-bold uppercase">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB &bull; Click to Replace</span>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-2 text-gray-400">
                  <Upload size={24} className="mb-2" />
                  <span className="text-xs font-bold font-heading uppercase tracking-wider text-charcoal">Drag file or click to browse</span>
                  <span className="text-[10px] font-body uppercase tracking-widest font-medium">Max Size: 10MB (PDF, DOCX)</span>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={status === "submitting"}
            type="submit"
            className="w-full bg-brand-red text-white font-heading font-bold uppercase tracking-widest text-xs py-5 flex items-center justify-center space-x-3 hover:bg-charcoal transition-colors disabled:bg-gray-400"
          >
            {status === "submitting" ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Encrypting & Transporting...</span>
              </>
            ) : (
              <>
                <span>Submit General Application</span>
                <ArrowRight size={14} />
              </>
            )}
          </button>
          
          <div className="flex items-start space-x-2 mt-4 text-[10px] text-gray-400 font-medium leading-relaxed">
            <AlertCircle size={12} className="shrink-0 mt-0.5" />
            <span>By submitting, you authorize BellaPack to retain your resume in our secure candidate bank for a period of up to 24 months for assessment of upcoming vacancies.</span>
          </div>
        </form>

      </div>
    </section>
  );
}
