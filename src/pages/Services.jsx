import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const steps = [
    {
      num: "01",
      title: "Request & Audit",
      desc: "Initial site assessment and equipment matching by our equipment rental specialists."
    },
    {
      num: "02",
      title: "Pre-Load Safety",
      desc: "Multi-point mechanical inspection and load securing protocols before departure."
    },
    {
      num: "03",
      title: "Live Tracking",
      desc: "GPS-enabled heavy transport monitoring with real-time ETA updates to your job site."
    },
    {
      num: "04",
      title: "Onsite Handover",
      desc: "Technical walkthrough, safety checklist verification, and immediate site integration."
    }
  ];

  return (
    <div>
      
      {/* Hero Section */}
      <header className="relative w-full min-h-[400px] md:h-[60vh] overflow-hidden flex items-center md:items-end pt-24 md:pt-32 pb-12 md:pb-24">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-7U7jNKgHoHeIs2TBYXWUaK6_0U8PR768Op7iv1r5qelj69fz0shAAIWHO9GhVgehHyYLzj4RviVx22pIRiDpu3Jmg-cxpY5lJ1A5D_2MkoLcgbvBgDr4bIgS6yl8iu9LDEJXYGjfKWHcQ_miIgI-60Z-mVF9IOHxIe8YTY-3UJ1LR7hxzqvpS_OUKbD-BqD-n1ZUCaQiZWkQEXWG8m4fGSVFgYP-GgtpAuvS3xt9HTs_ZciJP0iVhcJn1CIz1rDX-HIzIortgg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary-container text-on-primary-fixed px-3 py-1 font-label-bold text-label-bold uppercase mb-4 text-xs font-semibold">Core Services</span>
            <h1 className="font-display-xl text-white text-4xl sm:text-6xl md:text-8xl leading-none mb-6 font-black uppercase">
              HEAVY EQUIPMENT<br />&amp; LOGISTICS
            </h1>
            <p className="font-body-lg text-lg text-surface-variant max-w-xl">
              Providing high-performance machinery and end-to-end transport support across all Emirates. We power infrastructure projects with reliable rental solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Services Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto industrial-grid">
        <div className="mb-12">
          <h2 className="font-headline-lg text-3xl sm:text-5xl font-bold uppercase border-l-8 border-primary pl-6">OUR SERVICE ECOSYSTEM</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Rental Flexibility */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-10 flex flex-col justify-between group hover:border-primary transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-primary text-5xl mb-stack-md">calendar_month</span>
              <h3 className="font-headline-md text-2xl uppercase font-bold mb-4">Rental Flexibility</h3>
              <p className="font-body-md text-on-surface-variant max-w-lg text-sm leading-relaxed">
                Adapt to project changes with our flexible daily, weekly, and monthly contracts. We offer rollers, graders, excavators, and dump loaders with fast swap-outs and competitive rates.
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 font-label-bold text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Daily Contracts</li>
              <li className="flex items-center gap-2 font-label-bold text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Monthly Retainers</li>
              <li className="flex items-center gap-2 font-label-bold text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Seasonal Scaling</li>
              <li className="flex items-center gap-2 font-label-bold text-sm"><span className="material-symbols-outlined text-primary">check_circle</span> Instant Swap-outs</li>
            </ul>
          </div>

          {/* 24/7 Support */}
          <div className="md:col-span-4 bg-inverse-surface p-10 text-surface flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="material-symbols-outlined text-primary-container text-5xl mb-stack-md">construction</span>
              <h3 className="font-headline-md text-2xl uppercase font-bold text-white mb-4">24/7 Support</h3>
              <p className="font-body-md text-surface-variant text-sm leading-relaxed">
                Downtime is not an option. Our field maintenance teams are stationed across key industrial areas for immediate onsite support.
              </p>
            </div>
            <div className="pt-6 border-t border-on-surface-variant">
              <p className="text-primary-container font-display-xl text-4xl md:text-5xl font-black leading-none">99.8%</p>
              <p className="font-label-bold uppercase text-xs text-white">Uptime Reliability</p>
            </div>
          </div>

          {/* Operator Services */}
          <div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-10 relative overflow-hidden group min-h-[250px] flex flex-col justify-between">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-on-surface text-5xl mb-stack-md">engineering</span>
              <h3 className="font-headline-md text-2xl uppercase font-bold mb-4">Certified Operators</h3>
              <p className="font-body-md text-on-surface-variant text-sm">
                Experienced, safety-certified personnel for excavators, mobile cranes, and specialized loaders.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[180px] leading-none translate-y-1/4 translate-x-1/4">badge</span>
            </div>
          </div>

          {/* Specialized Transport */}
          <div className="md:col-span-8 bg-primary-container p-10 flex flex-col md:flex-row gap-gutter items-center">
            <div className="flex-1 space-y-4">
              <h3 className="font-headline-md text-2xl uppercase font-bold text-on-primary-fixed">Specialized Logistics</h3>
              <p className="font-body-md text-on-primary-fixed-variant text-sm leading-relaxed">
                Moving massive machinery requires expert handling. Alongside rental, we offer end-to-end support including abnormal load transport, heavy machinery shifting, and equipment rigging services.
              </p>
              <Link to="/contact" className="inline-block bg-inverse-surface text-surface font-label-bold px-8 py-3 uppercase hover:opacity-90 transition-opacity text-sm font-semibold">
                Request Transport
              </Link>
            </div>
            <div 
              className="w-full md:w-1/3 aspect-square bg-cover bg-center border border-outline-variant shadow-sm" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCfEPXnXscwKgivZI4zCRLhgKHErdxSYhUpyyDxlpf_TRJ3ezdlrPXmGyJ5gzY7iNwud7Shx9qwNonvyX3cNz-8MKIzF17wsgl89nGx893SjjjA_1OVmIRkslNvu60jd9n2GE0Fso5wU4u-cZvTOaFniBT28RNw4pMy5JADBhfxxXqIxO-IAPWHM5nFpa4t2rvfzvvIJwrxxCDnslxrOMWJI1hh3wdkxZi2Hn05u3GJvxiG5OJtRv8lcls42NGWoMZVkW3qW0beQ')" }}
            ></div>
          </div>

        </div>
      </section>

      {/* Delivery Process Flow */}
      <section className="bg-inverse-surface py-section-gap overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
          <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase mb-20 text-white font-bold">PRECISION DELIVERY PROCESS</h2>
          <div className="relative flex flex-col md:flex-row justify-between gap-gutter">
            <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-on-surface-variant z-0"></div>
            {steps.map((step) => (
              <div key={step.num} className="relative z-10 flex-1 text-center group bg-inverse-surface/40 p-4 rounded-md">
                <div className="w-20 h-20 bg-primary mx-auto mb-6 flex items-center justify-center text-on-primary font-headline-md text-2xl font-black rounded-full border-4 border-inverse-surface">
                  {step.num}
                </div>
                <h4 className="font-headline-sm text-lg text-surface uppercase mb-2 font-bold">{step.title}</h4>
                <p className="font-body-md text-surface-variant text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="bg-surface-container-highest flex flex-col md:flex-row border-l-[16px] border-primary">
          <div className="flex-grow p-12 space-y-6">
            <h2 className="font-headline-lg text-3xl sm:text-5xl font-bold uppercase leading-tight">NEED A CUSTOM LOGISTICS SOLUTION?</h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl text-lg">
              Our engineering team can design specialized rigging and transport plans for unique, heavy, or abnormal loads. Contact us to discuss site logistics details.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-inverse-surface text-surface px-8 py-4 font-label-bold uppercase text-sm font-semibold">
                Consult an Expert
              </Link>
              <a href="tel:+971507787551" className="border-2 border-inverse-surface text-inverse-surface px-8 py-4 font-label-bold uppercase hover:bg-inverse-surface hover:text-surface transition-all text-sm font-semibold">
                Call Support Desk
              </a>
            </div>
          </div>
          <div 
            className="w-full md:w-1/3 min-h-[300px] bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpcEbEVJtgf4nsIhVc7QJ5lANLioDb5BfsJ5UqVemBJNbKhOCMw0HKZg3fJEG70sURHLhO9omvS0R2zJlPGDGh2Di9G8gzYMsD_2q55Qq-G4NSVBHWqt9h_capX7JxVVgQaKwHhquD0t6u1B-sP6So58qSlAAf9pCmK4dmf5QPtAT5Jx5EYYjzHg_jlr2LXbOyptzQmh72iPmHWqbvIBOy0A9eJrk9nPEV6Skjn1CZMLCZGtCvECGkSUgaBQUVMJt6eZsq0qBnpQ')" }}
          ></div>
        </div>
      </section>

    </div>
  );
}
