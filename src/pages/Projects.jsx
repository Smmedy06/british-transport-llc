import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projectGallery = [
    {
      id: 1,
      name: "Expo 2020 Dubai",
      category: "Infrastructure",
      duration: "48 Months",
      units: "120+ Units",
      desc: "Massive earthmoving, grading, and site preparation for the historic Expo plaza dome and pavilions.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABQkfG3yxyferb1TK8Fu2n0N_nGCaO4ljxAuUp-H8CG1eoFLIhTU21EWcFjMkFo3AO7_WgokteygRpx5hvtU-VM5EKRx347AlQkINa_Pdx_kZ0_H4_ofZeYlTwZwg2fiNihkqxm9EWkcqT6vdk-B0Svky3KjDLHvdLY-1aqvUlbA61HcWfltxXFLkysfHxAEq8N-YVcrnxvgUvJsTniyEcMQCgqajMCBCZUPQZAj_5oNcxOO3mVl-UQZOx8pA_mFvQx-1idpfrHw",
      layout: "masonry-item-wide"
    },
    {
      id: 2,
      name: "Dubai Mall Expansion",
      category: "Commercial",
      duration: "18 Months",
      units: "45 Units",
      desc: "Precision excavation and material shifting next to active retail centers and busy urban zones.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFmzli0bCvbSLMIWzVILuxiGdSQoWqhCqVoskaWQrMO3z_zISsf7mudISAk85pSVBM4wZFt9smmw8Ts42HqRd9IgtdvHmyzIxjxYZs0DXoqytzr-p5v6jTctoQNmgEcBklOPqMBhcnBCKaZhvV3gY2QF4_aCmemAtI1NrAp4dz76Wr0lWd9Rl1KUDeHn_feXLM0F05i3Nbhs2_ZRxp15y3QBwjg44pkA3y1wva0uSJdx83pDEJ_CKdBjoR4upGesJbhZElMAOESQ",
      layout: "masonry-item-wide"
    },
    {
      id: 3,
      name: "Jebel Ali Port Terminal 4",
      category: "Logistics Hub",
      duration: "24 Months",
      units: "60 Units",
      desc: "Heavy foundations and port logistics clearing using specialized loaders and recovery support.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzWxbp5ZwiX0B3DVHh2ln59RRpAMunixXX3N8UlCNJQ0VGo8OCCcz8xoiiPIR0rVXtZZFngbbvgHqxIjpfVGFPICaODVQVvqA3IDrnD4uyQXjAQtdhtD3wdeCQOpoMj5jhcrS0Gf-K5FJkSwfC8ysaTjcKU60FVORUMKIU5c2pOXGtL9hi2SX1ZFQrm_wnG8ViT91Quwj4Fc268sVym3H341KamMn_he1M-00-cddqEYD0RYgnV4VlpdHSQQQMnqok7mVka4ah8w",
      layout: "normal"
    },
    {
      id: 4,
      name: "Sharjah FC Stadium & Cricket Grounds",
      category: "Sports Infrastructure",
      duration: "12 Months",
      units: "30 Units",
      desc: "Grading and leveling playing fields and infrastructure upgrades for premier UAE athletic complexes.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLHV95BoBkLO1sgYYkixJCJ5KQT3sCf62f3qQ5Tny5LBjHx2WrUK7H6Z8pEUEZ1WId6sBlcnjKrbOUMBrbVli4OkTjvSJEF7yrmpnkjV6VDdhbphGX_qZn_8kc93U-wrbddCWGjiPXvhU1dquuZ_wAY32hfol6dw8wtzmwVeIGiS3XSxjCvMmXqMoaOs4zZwlKS7ik-FUJW4Mab1X80wVmFTZRIzbXqAVl-K8tt1F0BkSJ0Kl_eY1lluHexrxazk3U2LAy3rUJQ",
      layout: "normal"
    },
    {
      id: 5,
      name: "Emaar & Damac Communities",
      category: "Residential Foundations",
      duration: "Ongoing Contracts",
      units: "80+ Units",
      desc: "Providing excavators, graders, and rollers for master-planned residential foundations and community roads.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfr1kIt-0bXoVgVHKTZtlxA-lb_tUT4DVK0wLaaUxlZv4_25Ku7ZP1WhGnJtIFhXOFxGv7CVDwD0EOksbc3_2qlyqxpjkfPLVl_559HJokS4Bn3Pa6VjptFYDQsdPQHcRn_2hJHNUOixRT-yBVA8QgTT_I2yOv5dsDi9NlkJItlFpAX8-iLE37NqW11ikOiqrTnTOPtS1HGlovvBSJNlxbhmzVVwZKCGcNSjA_-ROBXcwqbpZgdouVvlrhpEoMkoxMaK26XhAOMw",
      layout: "masonry-item-wide"
    }
  ];

  const stats = [
    { value: "500+", label: "Fleet Size" },
    { value: "15+ Years", label: "Operations in UAE" },
    { value: "24/7", label: "Site Support" },
    { value: "0", label: "Safety Incidents" }
  ];

  const clientPerspectives = [
    {
      quote: "Their ability to deploy specialized machinery to the Jebel Ali terminal on 24-hour notice was pivotal to our project's success.",
      author: "Senior Logistics Manager",
      company: "DP World"
    },
    {
      quote: "British Transport isn't just a rental company; they are a strategic partner. Their site management teams are the best in the Emirates.",
      author: "Infrastructure Director",
      company: "Dubai Municipality"
    },
    {
      quote: "Reliability is everything in UAE heat. Their machines never fail, and their operators are highly skilled professionals.",
      author: "Operations Head",
      company: "Nakheel Properties"
    }
  ];

  return (
    <div>
      
      {/* Hero Header */}
      <header className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-20 pt-8">
        <div className="border-l-8 border-primary pl-8">
          <span className="font-label-bold text-primary uppercase tracking-widest block mb-2 text-sm font-semibold">Our Portfolio</span>
          <h1 className="font-display-xl text-4xl sm:text-6xl md:text-8xl uppercase leading-none mb-4 font-black">
            Laying the Foundations<br />of the UAE
          </h1>
          <p className="font-body-lg text-lg max-w-2xl text-on-surface-variant">
            From the Expo site to sports stadiums like Sharjah FC, British Transport L.L.C. provides the heavy-duty machinery and logistics support that power the Middle East's most ambitious developments.
          </p>
        </div>
      </header>

      {/* Project Gallery */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="masonry-grid">
          {projectGallery.map((proj) => (
            <div 
              key={proj.id} 
              className={`${proj.layout === 'masonry-item-wide' ? 'masonry-item-wide' : ''} relative group overflow-hidden cursor-pointer bg-inverse-surface border border-outline-variant min-h-[250px]`}
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center" 
                style={{ backgroundImage: `url('${proj.img}')` }}
              ></div>
              <div className="absolute inset-0 industrial-overlay opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <span className="bg-primary text-on-primary-fixed font-label-bold text-xs px-3 py-1 w-fit mb-4 uppercase">
                  {proj.category}
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-white uppercase mb-2 font-bold">
                  {proj.name}
                </h2>
                
                {/* Expand on Hover Info */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500 ease-in-out">
                  <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-white/60 font-label-sm uppercase text-xs">Duration</p>
                      <p className="text-white font-label-bold font-semibold">{proj.duration}</p>
                    </div>
                    <div>
                      <p className="text-white/60 font-label-sm uppercase text-xs">Machinery</p>
                      <p className="text-white font-label-bold font-semibold">{proj.units}</p>
                    </div>
                  </div>
                  <p className="text-white/80 font-body-md text-sm">{proj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-section-gap py-20 bg-inverse-surface text-white">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display-xl text-primary-container text-4xl md:text-6xl font-black leading-none">{stat.value}</p>
              <p className="font-label-bold uppercase text-xs text-white/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Bento */}
      <section className="mt-section-gap pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <h3 className="font-headline-lg text-3xl sm:text-5xl font-bold uppercase mb-12">Client Perspectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {clientPerspectives.map((client, idx) => (
            <div 
              key={client.author} 
              className={`p-8 border flex flex-col justify-between ${idx === 1 ? 'bg-primary-container border-primary' : 'bg-white border-outline-variant'}`}
            >
              <span className={`material-symbols-outlined text-4xl mb-6 ${idx === 1 ? 'text-on-primary-fixed' : 'text-primary'}`}>format_quote</span>
              <p className={`font-body-lg text-lg mb-8 italic ${idx === 1 ? 'text-on-primary-fixed font-semibold' : 'text-on-surface'}`}>
                "{client.quote}"
              </p>
              <div>
                <p className={`font-label-bold uppercase text-sm ${idx === 1 ? 'text-on-primary-fixed' : 'text-on-surface'}`}>
                  {client.author}
                </p>
                <p className={`text-label-sm text-xs ${idx === 1 ? 'text-on-primary-fixed-variant' : 'text-secondary'}`}>
                  {client.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
