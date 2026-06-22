import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: 'Excavators',
    capacity: 'Standard (20 Ton)',
    units: 1,
    startDate: '',
    duration: 'Monthly (Long Term)',
    location: '',
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    requirements: ''
  });

  useEffect(() => {
    if (location.state && location.state.selectedEquipment) {
      setFormData(prev => ({
        ...prev,
        category: getCategoryFromEquipment(location.state.selectedEquipment),
        requirements: `Inquiry regarding: ${location.state.selectedEquipment}`
      }));
    }
  }, [location]);

  const getCategoryFromEquipment = (name) => {
    if (name.includes('Excavator')) return 'Excavators';
    if (name.includes('Grader')) return 'Motor Graders';
    if (name.includes('Loader') || name.includes('Shovel')) return 'Wheel Loaders';
    if (name.includes('Roller') || name.includes('Compactor')) return 'Road Rollers';
    return 'Excavators';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}! Your quote request has been sent successfully. A logistics manager will contact you at ${formData.phone} or ${formData.email} within 2 hours.`);
    setStep(1);
    setFormData({
      category: 'Excavators',
      capacity: 'Standard (20 Ton)',
      units: 1,
      startDate: '',
      duration: 'Monthly (Long Term)',
      location: '',
      companyName: '',
      fullName: '',
      email: '',
      phone: '',
      requirements: ''
    });
  };

  return (
    <div>
      
      {/* Hero Header */}
      <section className="bg-inverse-surface pt-8 pb-12 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display-xl text-4xl md:text-6xl text-primary-container uppercase mb-4 font-black">Request a Quote</h1>
          <p className="font-body-lg text-lg text-surface-variant max-w-2xl">
            Get precise project pricing for heavy machinery rental and transport logistics in Dubai, Abu Dhabi, and across all 7 Emirates.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        
        {/* Left Form Column (8 Cols) */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest border border-outline-variant p-8">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 border-b border-outline-variant pb-4">
              <h2 className="font-headline-sm text-xl uppercase font-bold text-on-surface">Equipment Rental Request</h2>
              <div className="flex gap-2">
                <div className={`w-8 h-2 ${step >= 1 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                <div className={`w-8 h-2 ${step >= 2 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
                <div className={`w-8 h-2 ${step >= 3 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Equipment Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-label-bold text-sm mb-4 text-primary uppercase font-bold">STEP 01: SELECT MACHINERY</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Equipment Category</label>
                      <select 
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                      >
                        <option>Excavators</option>
                        <option>Road Rollers</option>
                        <option>Motor Graders</option>
                        <option>Wheel Loaders</option>
                        <option>Bulldozers</option>
                        <option>Boom Loaders</option>
                        <option>Recoveries</option>
                        <option>Mobile Cranes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Model / Capacity</label>
                      <select 
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                      >
                        <option>Standard (10 - 25 Ton)</option>
                        <option>Heavy Duty (25 - 50 Ton)</option>
                        <option>Super Heavy (50+ Ton)</option>
                        <option>Flexible / Request Advice</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-bold mb-2 text-sm uppercase">Number of Units</label>
                    <input 
                      type="number"
                      name="units"
                      min="1"
                      value={formData.units}
                      onChange={handleInputChange}
                      className="w-full bg-surface border border-outline p-4 font-body-md"
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={nextStep}
                    className="w-full md:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-label-bold uppercase hover:brightness-110 font-bold transition-all"
                  >
                    Next: Duration &amp; Location
                  </button>
                </div>
              )}

              {/* Step 2: Duration & Location */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-label-bold text-sm mb-4 text-primary uppercase font-bold">STEP 02: RENTAL DETAILS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Start Date</label>
                      <input 
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Estimated Duration</label>
                      <select 
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                      >
                        <option>Daily</option>
                        <option>Weekly (Project Rate)</option>
                        <option>Monthly (Long Term)</option>
                        <option>6+ Months Contract</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-bold mb-2 text-sm uppercase">Site Location (City/Area)</label>
                    <input 
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Ras Al Khor, Dubai or Mussafah, Abu Dhabi"
                      className="w-full bg-surface border border-outline p-4 font-body-md"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 bg-secondary text-on-secondary font-label-bold uppercase font-bold"
                    >
                      Back
                    </button>
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-4 bg-primary-container text-on-primary-container font-label-bold uppercase font-bold hover:brightness-110 transition-all"
                    >
                      Next: Contact Info
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-label-bold text-sm mb-4 text-primary uppercase font-bold">STEP 03: CONTACT INFORMATION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Company Name</label>
                      <input 
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your Company L.L.C."
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Full Name</label>
                      <input 
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Email Address</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Phone Number</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 0507787551"
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-bold mb-2 text-sm uppercase">Additional Requirements / Site Specifics</label>
                    <textarea 
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Specify logistics needs, operator support details, or machine rigging requirements..."
                      className="w-full bg-surface border border-outline p-4 font-body-md"
                    ></textarea>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 bg-secondary text-on-secondary font-label-bold uppercase font-bold"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="px-12 py-4 bg-primary text-on-primary font-label-bold uppercase font-bold hover:bg-on-surface transition-all"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>

        {/* Right Sidebar Column (4 Cols) */}
        <div className="lg:col-span-4 space-y-gutter">
          
          {/* Instant Support Card */}
          <div className="bg-inverse-surface text-surface p-8 space-y-6">
            <h2 className="font-headline-sm text-xl uppercase text-primary-container font-bold">Instant Support</h2>
            <p className="font-body-md text-sm text-surface-variant leading-relaxed">
              Urgent machinery requirement? Get in touch with our heavy equipment logistics desk directly.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/971566649012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 hover:opacity-90 transition-opacity font-bold uppercase text-sm"
              >
                <span className="material-symbols-outlined">chat_bubble</span>
                WhatsApp Logistics
              </a>
              
              <div className="border-t border-on-tertiary-fixed-variant pt-6 space-y-4">
                <div>
                  <p className="font-label-sm text-xs text-tertiary-fixed-dim uppercase tracking-wider">Logistics Hotline 1</p>
                  <p className="font-headline-sm text-lg text-white font-bold">+971 50 778 7551</p>
                </div>
                <div>
                  <p className="font-label-sm text-xs text-tertiary-fixed-dim uppercase tracking-wider">Logistics Hotline 2</p>
                  <p className="font-headline-sm text-lg text-white font-bold">+971 50 948 7660</p>
                </div>
              </div>
            </div>
          </div>

          {/* HQ Location Card */}
          <div className="bg-surface border border-outline-variant p-8 space-y-6 bg-white">
            <h2 className="font-headline-sm text-xl uppercase font-bold text-on-surface">Our Headquarters</h2>
            <div className="aspect-video overflow-hidden border border-outline bg-surface-container">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCen_m6IxZa2KjFYUHTM4DI-VgtgHsLTcbKN-Imuy2E21aByAf2SpElfhsnT9Zi6dXnWK7FOiqewyiK7FBjce3uj3AYRDs6tdLqzTZVYT6tiS93ZrZ_8XVZYQskO8XBWOZdUJlj81iSGb5WwNatAyZegSiUPe1X8Z5FSmvMoKFxbk6rxTEeD2s_JxB0RRV62OUEAAvO6XiNPkuBKoGYullGcFctQdGrLPMeimlWbF_RAsP2ywDuYYqGAMn62PCfQAtWhUv47x71-A" 
                alt="Ras Al Khor Map Staging Location" 
              />
            </div>
            <div className="flex gap-3 items-start text-sm">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="font-bold text-on-surface">British Transport L.L.C.</p>
                <p className="text-secondary mt-1">
                  Al Asmawi Commercial Building, Office R-4,<br />
                  Ras Al Khor, Dubai, UAE (P.O. Box 76980)
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Operations Directory */}
      <section className="bg-surface-container py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto space-y-8">
          <h2 className="font-headline-md text-2xl md:text-3xl uppercase text-center font-bold">Office Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            
            <div className="bg-white p-8 border-l-4 border-primary shadow-sm space-y-4">
              <h3 className="font-headline-sm text-xl uppercase font-bold">Dubai HQ Office</h3>
              <p className="text-sm text-secondary">Serving Dubai, Sharjah, Ajman, and all Northern Emirates.</p>
              <div className="space-y-2 text-sm border-t border-outline-variant pt-4">
                <p className="flex gap-2"><span className="material-symbols-outlined text-xs">mail</span> <strong>info@britishtransport.ae</strong></p>
                <p className="flex gap-2"><span className="material-symbols-outlined text-xs">schedule</span> <strong>Mon - Sat: 9:00 AM - 10:00 PM</strong></p>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-primary shadow-sm space-y-4">
              <h3 className="font-headline-sm text-xl uppercase font-bold">Abu Dhabi Logistics</h3>
              <p className="text-sm text-secondary">Mussafah Industrial Hub supporting capital infrastructure operations.</p>
              <div className="space-y-2 text-sm border-t border-outline-variant pt-4">
                <p className="flex gap-2"><span className="material-symbols-outlined text-xs">mail</span> <strong>abudhabi@britishtransport.ae</strong></p>
                <p className="flex gap-2"><span className="material-symbols-outlined text-xs">schedule</span> <strong>Mon - Sat: 9:00 AM - 10:00 PM</strong></p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
