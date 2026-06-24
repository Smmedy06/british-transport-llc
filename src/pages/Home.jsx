import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const brandLogos = ['VOLVO', 'CATERPILLAR', 'KOMATSU', 'SANY', 'LIEBHERR'];

  const [activeTab, setActiveTab] = useState('Earthmoving');

  const featuredFleet = [
    {
      name: "Sany SY500H Large Excavator",
      power: "300 kW",
      width: "7,700 mm depth",
      weight: "52,500 kg",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmH2BNfC2bcoYQQaQBvJ9x5hA-h_QMmLAA5evCnY_JX4CgeGkuZMCsiWcSeYnnbnT3Jrj22prT6HsiHEti-xsWpNm_EQ-V4dGab2xk7nESeTGiqRy0kefUYkS8085nYksDUEZWQLI09z0910HqJh38oGK9vxanewSdEEHMgg3KRwZzLnipbAH--5ooMTMmBe8DOFkdpDkrqKYicntcAVB-0-cRsWnUTqDS-2xJ9Vw1Ec7M98DxcfYGJl1oRuRp50YlAHsnHOZXEQ",
      category: "Earthmoving"
    },
    {
      name: "CAT D11 Crawler Dozer",
      power: "634 kW",
      width: "27.2 m³ blade",
      weight: "106,614 kg",
      img: "/images/fleet/caterpillar_cat_d11_crawler_dozer.jpg",
      category: "Earthmoving"
    },
    {
      name: "Vibratory Roller CS54B",
      power: "Tier 4 Final",
      width: "2.1 m drum",
      weight: "10,500 KG",
      img: "/images/fleet/caterpillar_vibratory_roller_cs54b.jpg",
      category: "Compaction"
    },
    {
      name: "Hamm 3411 Soil Compactor (Roller)",
      power: "100 kW",
      width: "2,140 mm drum",
      weight: "11,310 kg",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyA3RPRWnfWAT5XXgvYSEIIjuwJTzfEHojmY_rUsPkA2ipVDb1cJl-nUVSGeMEH5hsqVrxS0Zys9WQXCn7XK1qY55mVI8Jslc54_YRf8cL2nwvzakwNLT6cImbi-bQJPNyo2BoUyoZPy8tOlUiUaUqM1pfnHwswNXmo0_CyYXFlKQrr0fpxRZ2Di3aSmpdxfM-QXhcDTrnAfX1nbZhRqeiIv29GPIkgSwtx0bnkb-5kN_h5Z89PZk6tZPwed9p-AcIroRaey44fw",
      category: "Compaction"
    },
    {
      name: "CAT MH3040 Material Handler",
      power: "40 Tons cap.",
      width: "15.4 m reach",
      weight: "38,500 kg",
      img: "/images/fleet/caterpillar_cat_mh3040_material_handler_crane.jpg",
      category: "Logistics"
    },
    {
      name: "Volvo A40G Articulated Hauler",
      power: "39,000 kg pay.",
      width: "24 m³ volume",
      weight: "30,100 kg",
      img: "/images/fleet/volvo_a40.jpg",
      category: "Logistics"
    }
  ];

  const filteredFeaturedFleet = featuredFleet.filter(item => item.category === activeTab);

  const industries = [
    {
      title: "ROAD & BRIDGE CONSTRUCTION",
      category: "Infrastructure",
      colSpan: "md:col-span-8",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9bJIi0JIeo9ok7VBVZWaMcaCX-G2TiT_c-pVzsARZ8oMlpOd4C0yPxEXK5sbBIKA3WsJFPuDgMEZD2KoBUZGO6sqE1PiE5IWzXud_ylgVCDHt-Ft19E5FSepCx_tAo7akYISxFJ_bwR607PGlydcExV3BySrb3B7Q6ceZwAJEUMIo5753gFCDIhg1PSnnm-H9xq9gcSt2ZMUTLHCrKqskX39hRqdhvhcP4CtHAA3NVyhX5jO4ru_qNMbW2CyJSMjukfOzREo9cA"
    },
    {
      title: "OIL & GAS PROJECTS",
      category: "Energy",
      colSpan: "md:col-span-4",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPzkjSRgJb88U2ttwIImbO33twiG4MH32tRXQLfIrAdFac7Vw7BsIm5bcxnEIyWdUmzneZe-_MKs6oATtQp2aMchTvlq0u-f4DJjCnb1Eo58jaDCipLFRPPZJblxUODCNU1ydlitHtieILvNrExGP-gefx5CSl_IJ--rNl0YM1GKWf38FztH8ZNVgL4IB6VmmGBJgfl8uWfOBWu_PikotH6oOKPL3eEpZOARJ2vouRtDfX4lbJgNfijjE-g_ZuoBjuW4pmMmxRAQ"
    },
    {
      title: "PORT & WAREHOUSING",
      category: "Logistics",
      colSpan: "md:col-span-4",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbbYQjojC_a0bU6SQYYsqKwCHbfzmMzF0pvmyP6J52CeHva-C-8_0Rv6sC04nBKonsbwMb7knLTmB8F9YinXNTzZmjIEXz2P0pkxc1UcGa2V_2A6UwSr412_gkn7blCDR-OgRGMhymyGFnQVwJK5pSKL9sBl0oxlxBI6hOZfjSBVqxxPD36pNGnuKZVvqTSNQ-YPTDTWWl1HGmQL2ix6CVcfPv_8nynUelgLeaUXVOH-RT7v3C1GXbEAxrrVAhFMCZG34_4a8veA"
    },
    {
      title: "REAL ESTATE & COMMERCIAL",
      category: "Developments",
      colSpan: "md:col-span-8",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOLs6QYPOyAYIp-loYdZYlsYjkIcSnm4sTKHnLovLXTbAJqEn2K1_76ve8IE3Kg1deVW6m3YF4v3HQWKhhDuMZnG6njBujdYOp9BjzYQCLA570mDLV_l0Kxt6Rw6mEMzTrrjgf_EKUeMAo8OWdaPQ3lJfS70IcycoscZdQO19qdXQUDdQKCMMEVMX6iq9LL5pneJSoEt--Kn_-x6Zzhqg20xLFCnmf-YQ5igKt3rX6MR1nUs-s-WoBRuDHVz6Hlgv1QXP-OpVAow"
    }
  ];

  const projects = [
    { 
      name: "Expo 2020 Dubai Site Prep", 
      category: "Infrastructure",
      desc: "Massive earthmoving and grading for the Expo plaza and pavilions.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNa8MgeBgudXcGUbXIi5dIfshrXb01hVHGKEccry1ZwQxfoiAajgrh1g8Eu-ffepGOg86kqViDT5qoUs5v9JRiobGpAkJO_RbJUVY4Bd8Ga-19CZ38xNA0Q-5n4eYYs92YskGZxWGj1ZTHPOcq5xLFSUINAgwkw3xVg3bICx-6R_-71wyy-uJHZFpzxSaK5xtAR1CZWv_pvXzNDjygwiR-Du2Ggvv8n-t5f6eHLumqNhNtSeLfj38GAVaLPvOSIro3yw9sT_OaA" 
    },
    { 
      name: "Dubai Mall Expansion", 
      category: "Commercial",
      desc: "Precision excavation adjacent to active retail and transit zones.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ffqypbnJEMFa7AK2CLpGDx5NgrH4suYpY3dtAdO-rdIwUUr3HfGBGwjEpNWNlkYako4aAAmFwR6ngDdQieI1q7j64CjVreNabyn-FXZKd5J7zf8umYtQS5FaImBw78FDOyhNvCrQ-h4wVnb1oEOlYoxvYByJsoBeWVLdb8nk86bfhaZdEdq1GL2ehkHclNvaeWYJrtj-Z8iGAsv3DhOic_bLL-k-fXVyqJ5MimgbqNms-CiQa1PFwvhAP_kEvDbNmSgvYN7AHQ" 
    },
    { 
      name: "Zayed Sports City Upgrade", 
      category: "Sports Infrastructure",
      desc: "Earthworks and logistics grading for stadium expansion.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZytJflXswxIjfpMF7dTgeKdAlg2maOc-OYnfwPiAEhRw8G0-wtNWqA0DmCj4Y7RwV2UsLQnhnpqZwq-9M0sdoxkPYITTjWOoGIoRS1Dt9PT-2ITUpKLOb0QySFoud8prj4FJ5AuVBxTe9_exNyrQ9Mpk_d66Pj8sex2y2anu-MUgiXPxmr-aWOuwgcZMXOAX9EjavyJ5sMgrQuXl5mZaGExnz38bpL2jMod1QJJd5MERLK83lCoXnocQSp6Mqn0f8BVE7bhPY0Q" 
    },
    { 
      name: "Khalifa Port Logistics", 
      category: "Logistics Hub",
      desc: "Ground prep and machinery transport support for port expansion.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChytACi07syjKCYNxN8PBilP92o7KBbZONG6KNjaAtFV2y_wRHIWY9QtS8zmpYl4svYEtGdSdH2sEGlUAiapQm9ehgxVLq_QKXrWOoy6OECZNw8A_w1ATHyhKc1glErPPM6vD2uClzmkp1XXv21-nxFplqJXwORSyIb-VyfnoKXtq6dG6teD_L45KH3atXNYbzGzIgIm_MTbrktFqOKu-bq0l60njI-zG0lPEwV-jZzFPlK5zCObraWWc8DDLwTxQl60o939HJQA" 
    },
    { 
      name: "Emaar Beachfront Foundations", 
      category: "Residential Foundations",
      desc: "Excavation and shoring support for luxury seaside residential towers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAviKes8cfSlTFftLmRnOoGvqxm6ASxZQyAhnV7zcBwOaNkzkBd1kOguaLHNw8xEx0ySCBIJ4VGiBogKnlJoDbuGioqXL72EKsfoUaS2nhpbPtdwlEKlNOZpElDXRBblhfnFTAgTSdlqiGZ_hHuiIvRjavbkTK6ttHeDOr5JrYuRy602qF-brHtvmTa4EvTmBemQlxJASy48ouERvzqnPB5hbsK_qf-ouzZVaamusV-0NC27HHvfnh7DxkGrRxQz3zyGcDvPoGMQg" 
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al Mansoori",
      role: "Project Director, Arabtec",
      review: "The availability of specialized motor graders during our peak season was critical. British Transport delivered within 24 hours to our remote site in Fujairah.",
      initials: "AM"
    },
    {
      name: "Ravi Sharma",
      role: "Operations Manager, Sobha Realty",
      review: "Their maintenance support is unmatched. When a roller had a hydraulic issue, their field team was there in 2 hours. Minimal downtime.",
      initials: "RS"
    },
    {
      name: "Khalid Ibrahim",
      role: "CEO, Desert Foundations",
      review: "Transparent pricing and machines that actually perform. The SANY excavators we rented handled the rocky terrain of Ras Al Khaimah with ease.",
      initials: "KI"
    },
    {
      name: "Fatima Al Suwaidi",
      role: "Logistics Specialist, Aldar Properties",
      review: "British Transport has been our go-to partner for Abu Dhabi developments. Their fleet reliability and operator professionalism are top-tier.",
      initials: "FS"
    },
    {
      name: "Marcus Aurelius",
      role: "Project Manager, Emaar",
      review: "Excellent communication, competitive rates, and top-tier safety compliance. The machinery arrived fully certified and ready for immediate operation.",
      initials: "MA"
    }
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };


  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-start overflow-hidden pt-20 md:pt-24 pb-28 md:pb-36">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/hero_section_bg.png')" }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
          <div className="max-w-3xl space-y-stack-lg">
            <p className="text-primary-container font-label-bold uppercase tracking-[0.2em]">Certified Machines For Rent</p>
            <h1 className="text-white font-display-xl text-4xl sm:text-6xl md:text-8xl uppercase leading-none font-extrabold">
              HEAVY EQUIPMENT<br />
              <span className="text-primary-container">FOR REAL WORK</span>
            </h1>
            <p className="text-white/80 font-body-lg text-lg max-w-xl">
              Your Trusted partner in heavy equipment rental across the UAE. We provide the muscle for road construction, earthworks, and infrastructure projects.
            </p>
            <div className="flex flex-wrap gap-stack-md pt-stack-lg">
              <Link to="/fleet" className="px-10 py-4 bg-primary-container text-on-primary-container font-headline-sm uppercase tracking-tight hover:scale-105 transition-transform">
                Explore Our Fleet
              </Link>
              <Link to="/contact" className="px-10 py-4 border-2 border-white text-white font-headline-sm uppercase tracking-tight hover:bg-white hover:text-black transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Strip */}
        <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md py-6 hidden sm:block">
          <div className="px-margin-desktop max-w-[1440px] mx-auto flex justify-between items-center opacity-70 grayscale contrast-125">
            {brandLogos.map((logo) => (
              <span key={logo} className="text-white font-display-xl text-xl font-black tracking-widest">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-stack-md">
          <div>
            <p className="text-primary font-label-bold uppercase mb-stack-sm">The UAE's Premium Fleet</p>
            <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">
              EQUIPMENT BUILT FOR<br />DEMANDING JOB SITES
            </h2>
          </div>
          <div className="flex flex-wrap bg-surface-container p-1 rounded-none justify-start gap-1 w-fit">
            {['Earthmoving', 'Compaction', 'Logistics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-label-bold uppercase cursor-pointer transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredFeaturedFleet.map((item) => (
            <div key={item.name} className="border border-outline-variant bg-surface-container-lowest group transition-all hover:border-primary">
              <div className="h-64 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={item.img} 
                  alt={item.name} 
                />
              </div>
              <div className="p-stack-lg space-y-stack-md">
                <h3 className="font-headline-sm text-2xl uppercase font-semibold">{item.name}</h3>
                <div className="grid grid-cols-2 gap-y-2 border-t border-outline-variant pt-4">
                  <span className="font-label-sm text-label-sm text-secondary uppercase leading-normal">Power / Rating</span>
                  <span className="font-label-bold text-label-bold text-on-surface text-right uppercase leading-normal">{item.power}</span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase leading-normal">Dimension / Size</span>
                  <span className="font-label-bold text-label-bold text-on-surface text-right uppercase leading-normal">{item.width || item.depth}</span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase leading-normal">Operating Weight</span>
                  <span className="font-label-bold text-label-bold text-on-surface text-right uppercase leading-normal">{item.weight}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-primary font-headline-sm font-bold">ON REQUEST</span>
                  <Link to="/contact" className="w-10 h-10 bg-on-surface text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Action Card */}
          <div className="border border-outline-variant bg-on-surface text-white group flex flex-col justify-between p-stack-lg overflow-hidden relative min-h-[350px]">
            <div className="relative z-10 space-y-stack-md">
              <h2 className="font-headline-lg text-4xl leading-tight uppercase font-extrabold">EXPLORE<br />THE FULL<br />FLEET</h2>
              <p className="font-body-md text-white/60">From rollers and graders to heavy loaders and recoveries, we have the specialized equipment for every UAE terrain.</p>
            </div>
            <Link to="/fleet" className="relative z-10 w-full py-4 bg-primary-container text-on-primary-container font-headline-sm uppercase hover:brightness-110 transition-all flex items-center justify-center gap-2 font-bold">
              Browse All Units
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-on-secondary-fixed py-section-gap overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="text-white font-headline-lg text-3xl sm:text-5xl uppercase font-bold mb-4">POWERING PROJECTS ACROSS KEY INDUSTRIES</h2>
            <div className="h-1 w-24 bg-primary-container"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:h-[600px]">
            {industries.map((ind) => (
              <div key={ind.title} className={`${ind.colSpan} relative overflow-hidden group min-h-[250px] md:min-h-0`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" 
                  style={{ backgroundImage: `url('${ind.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-stack-lg z-10">
                  <p className="text-primary-container font-label-bold uppercase tracking-wider">{ind.category}</p>
                  <h3 className="text-white font-headline-md text-2xl uppercase font-bold mt-1">{ind.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="relative py-section-gap overflow-hidden">
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
          <h2 className="font-display-xl text-5xl md:text-8xl uppercase tracking-tight mb-stack-md font-black">BUILT ON TRUST</h2>
          <p className="font-body-lg text-lg max-w-2xl mx-auto mb-20 text-secondary">
            Operating in Dubai, Abu Dhabi, and Northern Emirates. With over 20 years of experience, British Transport has become the backbone of road works and infrastructure, delivering reliability when it matters most.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter border-t border-b border-outline-variant py-16">
            <div className="text-center">
              <div className="text-primary font-display-xl text-4xl md:text-6xl font-black mb-2">20+</div>
              <div className="font-label-bold uppercase tracking-widest text-on-surface text-sm">Years Experience</div>
            </div>
            <div className="text-center border-l border-outline-variant">
              <div className="text-primary font-display-xl text-4xl md:text-6xl font-black mb-2">1000+</div>
              <div className="font-label-bold uppercase tracking-widest text-on-surface text-sm">Projects Powered</div>
            </div>
            <div className="text-center border-l border-outline-variant">
              <div className="text-primary font-display-xl text-4xl md:text-6xl font-black mb-2">24/7</div>
              <div className="font-label-bold uppercase tracking-widest text-on-surface text-sm">Field Support</div>
            </div>
            <div className="text-center border-l border-outline-variant">
              <div className="text-primary font-display-xl text-4xl md:text-6xl font-black mb-2">7</div>
              <div className="font-label-bold tracking-widest text-on-surface text-sm uppercase">Emirates Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <p className="text-primary font-label-bold uppercase mb-2">Proven Track Record</p>
              <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">PROJECTS WE'VE POWERED</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-stack-md">
            {projects.map((proj) => (
              <div key={proj.name} className="group relative h-96 overflow-hidden border border-outline-variant">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={proj.img} 
                  alt={proj.name} 
                />
                {/* Persistent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                
                {/* Overlay Text Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <span className="text-primary-container font-label-bold text-xs uppercase tracking-wider block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-white font-headline-sm text-lg sm:text-xl uppercase font-bold leading-tight">
                    {proj.name}
                  </h3>
                  
                  {/* Slide-up Description on Hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    <p className="text-white/70 font-body-md text-xs mt-3 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-4">
            <Link to="/projects" className="relative z-10 w-full md:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-headline-sm uppercase hover:brightness-110 transition-all flex items-center justify-center gap-2 font-bold">
              Browse All Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">WHAT OUR PARTNERS SAY</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevTestimonial}
              className="w-12 h-12 border border-outline-variant hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleNextTestimonial}
              className="w-12 h-12 border border-outline-variant hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next Testimonial"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[0, 1, 2].map((offset) => {
            const index = (currentTestimonial + offset) % testimonials.length;
            const test = testimonials[index];
            return (
              <div 
                key={`${test.name}-${index}`}
                className={`p-stack-lg border border-outline-variant bg-white flex flex-col justify-between transition-all duration-500 ${
                  offset > 0 ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div>
                  <div className="flex text-primary-container mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-body-md text-secondary italic mb-8">"{test.review}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-outline-variant pt-4">
                  <div className="w-12 h-12 bg-surface-container-high rounded-none flex items-center justify-center font-bold text-on-surface">
                    {test.initials}
                  </div>
                  <div>
                    <p className="font-label-bold uppercase text-sm">{test.name}</p>
                    <p className="text-label-sm text-secondary uppercase text-xs">{test.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-primary-container text-on-primary-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
          <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase mb-4 font-black">POWER YOUR NEXT PROJECT WITH CONFIDENCE</h2>
          <p className="font-body-lg text-lg max-w-2xl mx-auto mb-10 opacity-80">
            Get expert recommendations, transparent project pricing, and dependable machinery maintenance support across all 7 Emirates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 bg-on-surface text-white font-headline-sm uppercase hover:bg-black transition-all font-bold">
              Request a Quote
            </Link>
            <a 
              href="tel:+971507787551" 
              className="px-10 py-4 border-2 border-on-surface text-on-surface font-headline-sm uppercase hover:bg-on-surface hover:text-white transition-all flex items-center justify-center gap-2 font-bold"
            >
              <span className="material-symbols-outlined">call</span>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
