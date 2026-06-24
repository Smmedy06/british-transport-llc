import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fleetItems } from './Fleet';

export default function Contact() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedEquipment: 'Custom',
    customEquipment: '',
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
        selectedEquipment: location.state.selectedEquipment,
        requirements: prev.requirements || `Inquiry regarding: ${location.state.selectedEquipment}`
      }));
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      return formData.companyName && formData.fullName && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      if (formData.selectedEquipment === 'Custom') {
        return formData.customEquipment;
      }
      return formData.units >= 1;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3));
    } else {
      alert("Please fill out all required fields in this step before proceeding.");
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const equipmentName = formData.selectedEquipment === 'Custom' ? formData.customEquipment : formData.selectedEquipment;
    alert(`Thank you, ${formData.fullName}! Your quote request for ${formData.selectedEquipment === 'Custom' ? '' : formData.units + 'x '}${equipmentName || 'machinery'} has been sent successfully. A logistics manager will contact you at ${formData.phone} or ${formData.email} within 2 hours.`);
    setStep(1);
    setFormData({
      selectedEquipment: 'Custom',
      customEquipment: '',
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-outline-variant pb-4 gap-4">
              <h2 className="font-headline-sm text-xl uppercase font-bold text-on-surface">Equipment Rental Request</h2>
              <div className="flex items-center gap-2 sm:gap-3 text-xs font-label-bold uppercase tracking-wider text-outline">
                <span className={step === 1 ? "text-primary font-bold" : "text-secondary"}>01. Business</span>
                <span className="text-outline-variant">/</span>
                <span className={step === 2 ? "text-primary font-bold" : "text-secondary"}>02. Equipments</span>
                <span className="text-outline-variant">/</span>
                <span className={step === 3 ? "text-primary font-bold" : "text-secondary"}>03. Location</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Business Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-label-bold text-sm text-primary uppercase font-bold">STEP 01: BUSINESS DETAILS</h3>
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
                      <label className="block font-label-bold mb-2 text-sm uppercase">Contact Full Name</label>
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
                  <div className="pt-4">
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-label-bold uppercase hover:bg-on-surface hover:text-white transition-all duration-300 font-bold"
                    >
                      Next: Equipment Details
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Equipments */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-label-bold text-sm text-primary uppercase font-bold">STEP 02: EQUIPMENT SPECIFICATIONS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={formData.selectedEquipment === 'Custom' ? "md:col-span-2" : ""}>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Select Machinery / Equipment</label>
                      <select 
                        name="selectedEquipment"
                        value={formData.selectedEquipment}
                        onChange={handleInputChange}
                        className="w-full bg-surface border border-outline p-4 font-body-md"
                        required
                      >
                        <option value="Custom">Custom / Personalized Equipment Inquiry</option>
                        {fleetItems.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name} ({item.brand})
                          </option>
                        ))}
                      </select>
                    </div>

                    {formData.selectedEquipment !== 'Custom' && (
                      <div>
                        <label className="block font-label-bold mb-2 text-sm uppercase">Number of Units</label>
                        <input 
                          type="number"
                          name="units"
                          min="1"
                          value={formData.units}
                          onChange={handleInputChange}
                          className="w-full bg-surface border border-outline p-4 font-body-md"
                          required
                        />
                      </div>
                    )}

                    {formData.selectedEquipment === 'Custom' && (
                      <div className="md:col-span-2">
                        <label className="block font-label-bold mb-2 text-sm uppercase">Specify Equipment Model / Details</label>
                        <textarea 
                          name="customEquipment"
                          value={formData.customEquipment}
                          onChange={handleInputChange}
                          rows="5"
                          placeholder="Please write a detailed description of the machinery type, size, requirements, or custom configurations you need..."
                          className="w-full bg-surface border border-outline p-4 font-body-md"
                          required
                        ></textarea>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-4 pt-4">
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
                      className="px-8 py-4 bg-primary text-on-primary font-label-bold uppercase font-bold hover:bg-on-surface hover:text-white transition-all duration-300"
                    >
                      Next: Location &amp; Dates
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-label-bold text-sm text-primary uppercase font-bold">STEP 03: RENTAL LOCATION &amp; DURATION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-bold mb-2 text-sm uppercase">Estimated Start Date</label>
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
                      <label className="block font-label-bold mb-2 text-sm uppercase">Rental Duration</label>
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
                    <label className="block font-label-bold mb-2 text-sm uppercase">Project Site Location (City / Area)</label>
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
                  <div>
                    <label className="block font-label-bold mb-2 text-sm uppercase">Specific Requirements / Site Conditions</label>
                    <textarea 
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Please specify logistics needs, operator requirements, ground conditions, or shift details..."
                      className="w-full bg-surface border border-outline p-4 font-body-md"
                    ></textarea>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 bg-secondary text-on-secondary font-label-bold uppercase font-bold"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="px-12 py-4 bg-primary text-on-primary font-label-bold uppercase font-bold hover:bg-on-surface hover:text-white transition-all duration-300"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Interactive Google Map Location */}
          <div className="mt-8 bg-surface-container-lowest border border-outline-variant p-8">
            <h3 className="font-headline-sm text-lg uppercase mb-4 border-b-2 border-primary pb-2 font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              OUR HQ LOCATION ON THE MAP
            </h3>
            <div className="overflow-hidden border border-outline-variant bg-[#1c1c1c]">
              <iframe 
                src="https://maps.google.com/maps?q=Al%20Asmawi%20Commercial%20Building%2C%20Ras%20Al%20Khor%20Industrial%20Area%202%2C%20Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-80 border-none" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="British Transport LLC Location Map"
              ></iframe>
            </div>
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
                <div>
                  <p className="font-label-sm text-xs text-tertiary-fixed-dim uppercase tracking-wider">Email Support</p>
                  <p className="font-headline-sm text-base sm:text-lg text-white font-bold">
                    <a href="mailto:info@britishtransportllc.ae" className="hover:text-primary-container transition-colors">
                      info@britishtransportllc.ae
                    </a>
                  </p>
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

    </div>
  );
}
