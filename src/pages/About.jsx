import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { value: "500+", label: "Fleet Units" },
    { value: "1000+", label: "Projects Completed" }
  ];

  const timeline = [
    {
      year: "2006",
      title: "The Vision",
      desc: "Founders begin heavy machinery supply in the UAE, laying down early logistics expertise in earthworks and site prep."
    },
    {
      year: "2011",
      title: "Official Incorporation",
      desc: "British Transport L.L.C. is officially established in Dubai (Trade License 660839), operating from our Ras Al Khor headquarters."
    },
    {
      year: "2018",
      title: "Tech Integration",
      desc: "Implemented advanced GPS fleet tracking and automated maintenance scheduling across all active grader, roller, and excavator units."
    },
    {
      year: "2026",
      title: "Present Leadership",
      desc: "Operating 1000+ completed projects, recognized as a premier heavy equipment partner with 24/7 service network all over the UAE."
    }
  ];



  return (
    <div>
      
      {/* Hero Header */}
      <header className="relative min-h-[450px] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-12 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZsfTp2e3TnAW_kAjKvsDy_bse7lw2WyoW_uLHwn593PUI9TUIEfCeyMZ_AIhLVYgdAK4zR5LTM1CeFBKXDGmAZ_10imRJf9P5T3ga4cfLZbqqNg-gK_-AvhDbzgIO83eLk6pzvHnEi6nQ2qyp0yU-OHVrxYa_ot77zfuIWAt8R9bpf6O1-6MDYORvKIFdkhhfbyETgTtU8ZTETkrqR04znY3Msl1HlrZEBd5ukOKP2OSmu9gy-8vIKont8ZkmgXik-5Ctmj3xaQ')" }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-[1440px]">
          <span className="inline-block bg-primary text-on-primary px-4 py-1 font-label-bold text-label-bold uppercase mb-stack-md">Established in 2011</span>
          <h1 className="font-display-xl text-white text-4xl sm:text-6xl md:text-8xl uppercase leading-none mb-stack-lg font-black">
            Building the UAE's <br />
            <span className="text-primary-container">Modern Foundation</span>
          </h1>
          <p className="font-body-lg text-lg text-white/90 max-w-2xl mx-auto">
            Over 20 years of heavy machinery experience, fueling the infrastructure of Dubai, Abu Dhabi, and the Northern Emirates with unwavering reliability.
          </p>
        </div>
      </header>

      {/* Mission & Core Values Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div>
          <span className="font-label-bold text-label-bold text-primary uppercase tracking-widest block mb-4">Our Mission</span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase mb-stack-lg font-bold leading-tight">
            Engineered for <br />Absolute Reliability
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
            At British Transport L.L.C., our mission is rooted in the physical reality of infrastructure construction. We provide the structural backbone for the UAE's most ambitious projects by delivering heavy equipment that never fails. Our commitment to project uptime is backed by over 20 years of proven site performance.
          </p>
          <div className="grid grid-cols-2 gap-stack-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-4 border-primary pl-4">
                <p className="font-headline-md text-3xl font-black leading-tight text-on-surface">{stat.value}</p>
                <p className="font-label-bold text-on-surface-variant uppercase text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="aspect-square bg-surface-container-highest border border-outline-variant flex items-center justify-center industrial-grid">
            <div 
              className="w-4/5 h-4/5 bg-cover bg-center border border-outline shadow-md" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU-Uj1aTcBzzh2iKWqB5oB8QoxurkHZH2eyVqPo9u_EjYO7KDyZQyIEJ6wleQiTIDbV6uq_apI4aDfBvqru73ADuTRcafcNFPf9aFyW44s7ww2VomAe4sTzl0f4D-OFXplaclec13hqEhwtrTGlqy7Jsk1Hc18eCKP3LOXNquvgZ9o9aaBjIWxI4jzLENNqS_diaKpYibaUFEapU-ydL-lGBgS6cYZJ_vonDR4gY32ncuZyKJDjLlA8AHmGp5grMP4JRG79jddXA')" }}
            ></div>
          </div>
          <div className="absolute -bottom-4 left-6 md:-bottom-6 md:-left-6 bg-inverse-surface p-4 md:p-6 z-10">
            <p className="text-primary-container font-headline-md text-lg md:text-xl font-bold uppercase">ISO 9001:2015</p>
            <p className="text-white font-label-bold uppercase text-[10px] md:text-xs">Certified Excellence</p>
          </div>
        </div>
      </section>

      {/* 20 Year Timeline */}
      <section className="py-section-gap bg-surface-container-low overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">The Growth Arc</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="relative">
            <div className="timeline-line"></div>
            {timeline.map((item, idx) => (
              <div key={item.year} className="relative grid grid-cols-1 md:grid-cols-2 gap-gutter mb-20 items-center">
                {/* Absolute Centered Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-[24px] -translate-x-1/2 flex items-center justify-center w-6 h-6 z-10">
                  <div className="w-4 h-4 bg-primary border-4 border-surface rounded-full shadow-sm"></div>
                </div>

                <div className={`pl-10 md:pl-0 md:text-right ${idx % 2 === 0 ? '' : 'md:order-2 md:text-left'}`}>
                  <div className="inline-block bg-primary text-on-primary font-headline-sm text-lg px-6 py-1 mb-4">{item.year}</div>
                  <h3 className="font-headline-md text-xl uppercase font-bold text-on-surface">{item.title}</h3>
                  <p className="font-body-md text-on-surface-variant mt-2 max-w-lg md:ml-auto md:mr-0">{item.desc}</p>
                </div>
                <div className={idx % 2 === 0 ? 'md:order-2' : ''}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-section-gap bg-inverse-surface text-white">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 border border-white/20 hover:border-primary-container transition-colors bg-black/10">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-4">verified_user</span>
                <h5 className="font-label-bold uppercase text-white mb-2 text-sm">Zero-Harm Policy</h5>
                <p className="font-label-sm text-xs text-white/70">Strict adherence to OSHAD and international safety protocols.</p>
              </div>
              <div className="p-8 border border-white/20 hover:border-primary-container transition-colors bg-black/10">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-4">engineering</span>
                <h5 className="font-label-bold uppercase text-white mb-2 text-sm">Daily Inspections</h5>
                <p className="font-label-sm text-xs text-white/70">Every machine undergoes a 40-point safety check before site delivery.</p>
              </div>
              <div className="p-8 border border-white/20 hover:border-primary-container transition-colors bg-black/10">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-4">workspace_premium</span>
                <h5 className="font-label-bold uppercase text-white mb-2 text-sm">Certified Operators</h5>
                <p className="font-label-sm text-xs text-white/70">Our operators hold valid UAE training certificates for heavy equipment.</p>
              </div>
              <div className="p-8 border border-white/20 hover:border-primary-container transition-colors bg-black/10">
                <span className="material-symbols-outlined text-primary-container text-5xl mb-4">factory</span>
                <h5 className="font-label-bold uppercase text-white mb-2 text-sm">Site Management</h5>
                <p className="font-label-sm text-xs text-white/70">Dedicated logistics and safety officers assigned for complex projects.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 mb-8 md:mb-0">
            <span className="font-label-bold text-primary-container uppercase block">Safety Standards</span>
            <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold leading-tight">
              No Compromise <br />On Site Safety
            </h2>
            <p className="font-body-lg text-white/70">
              Operating heavy road construction machinery requires a culture of extreme discipline. We maintain ISO certification across all equipment operations and invest heavily in operator training to ensure that safety remains our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter">
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">Our Roots</h2>
            <div className="space-y-stack-lg">
              <div className="border-l-4 border-primary pl-6">
                <p className="font-label-bold uppercase text-on-surface-variant text-sm">Dubai HQ (Ras Al Khor)</p>
                <p className="font-body-md mt-2 text-sm text-secondary">
                  Al Asmawi Commercial Building, Office R-4,<br />
                  Ras Al Khor, Dubai, UAE
                </p>
              </div>
              <div className="pt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-label-bold uppercase border-b border-primary pb-1 group text-sm font-semibold">
                  Contact Logistics Team
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-[450px]">
            <div 
              className="w-full h-full bg-cover bg-center border border-outline-variant" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVyZBHo9_HsKS7gCCWfMV9XMdl_raFAADqfYtWlIRGhRHxLi8QP5Qte3D6sIICMKORXUFO1xUG3VUcV0vwGegxuT5y6wyUhIddWluwCNabEzLQExwmv-YTupScIz25xpSTwxYxqly0SKFCPnMMq0NAsECaP50lHtBAxl0-EUk92FXUCNoqVPl9zy7lnU609-SFUjjGmw80HP3jKqVe8dI_PsaNUqr6EqiVO-W_n8dqbSQmJTHD6C5nJitfEvHD7zTHeqL9rRZbng')" }}
            ></div>
          </div>
        </div>
      </section>

    </div>
  );
}
