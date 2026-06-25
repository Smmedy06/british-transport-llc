import React, { useState, useMemo } from 'react';
import useSEO from '../hooks/useSEO';

export default function Projects() {
  useSEO({
    title: "Completed Construction Projects | British Transport L.L.C. UAE",
    description: "Explore our portfolio of infrastructure projects powered by British Transport L.L.C., including Expo 2020 Dubai site prep, Khalifa Port, and highway resurfacing.",
    keywords: "roadworks dubai, infrastructure projects UAE, Jebel Ali Terminal, RTA Metro site preparation, nakheel sports pitch grading, earthmoving project list"
  });
  const [currentPerspective, setCurrentPerspective] = useState(0);
  const projectGallery = [
    {
      id: 1,
      name: "Expo 2020 Dubai Site Prep",
      category: "Infrastructure",
      duration: "48 Months",
      units: "120+ Units",
      desc: "Massive earthmoving, grading, and site preparation for the historic Expo plaza dome and pavilions.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNa8MgeBgudXcGUbXIi5dIfshrXb01hVHGKEccry1ZwQxfoiAajgrh1g8Eu-ffepGOg86kqViDT5qoUs5v9JRiobGpAkJO_RbJUVY4Bd8Ga-19CZ38xNA0Q-5n4eYYs92YskGZxWGj1ZTHPOcq5xLFSUINAgwkw3xVg3bICx-6R_-71wyy-uJHZFpzxSaK5xtAR1CZWv_pvXzNDjygwiR-Du2Ggvv8n-t5f6eHLumqNhNtSeLfj38GAVaLPvOSIro3yw9sT_OaA",
      layout: "masonry-item-wide"
    },
    {
      id: 2,
      name: "Dubai Mall Expansion",
      category: "Commercial",
      duration: "18 Months",
      units: "45 Units",
      desc: "Precision excavation and material shifting next to active retail centers and busy metropolitan transit zones.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ffqypbnJEMFa7AK2CLpGDx5NgrH4suYpY3dtAdO-rdIwUUr3HfGBGwjEpNWNlkYako4aAAmFwR6ngDdQieI1q7j64CjVreNabyn-FXZKd5J7zf8umYtQS5FaImBw78FDOyhNvCrQ-h4wVnb1oEOlYoxvYByJsoBeWVLdb8nk86bfhaZdEdq1GL2ehkHclNvaeWYJrtj-Z8iGAsv3DhOic_bLL-k-fXVyqJ5MimgbqNms-CiQa1PFwvhAP_kEvDbNmSgvYN7AHQ",
      layout: "masonry-item-wide"
    },
    {
      id: 3,
      name: "Zayed Sports City Upgrade",
      category: "Sports Infrastructure",
      duration: "12 Months",
      units: "30 Units",
      desc: "Earthworks, landscaping, grading, and logistics for the landmark stadium expansions and pitch leveling.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZytJflXswxIjfpMF7dTgeKdAlg2maOc-OYnfwPiAEhRw8G0-wtNWqA0DmCj4Y7RwV2UsLQnhnpqZwq-9M0sdoxkPYITTjWOoGIoRS1Dt9PT-2ITUpKLOb0QySFoud8prj4FJ5AuVBxTe9_exNyrQ9Mpk_d66Pj8sex2y2anu-MUgiXPxmr-aWOuwgcZMXOAX9EjavyJ5sMgrQuXl5mZaGExnz38bpL2jMod1QJJd5MERLK83lCoXnocQSp6Mqn0f8BVE7bhPY0Q",
      layout: "normal"
    },
    {
      id: 4,
      name: "Khalifa Port Logistics",
      category: "Logistics Hub",
      duration: "24 Months",
      units: "60 Units",
      desc: "Ground leveling, grading, and heavy machinery logistics for the deepwater port terminal expansion.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChytACi07syjKCYNxN8PBilP92o7KBbZONG6KNjaAtFV2y_wRHIWY9QtS8zmpYl4svYEtGdSdH2sEGlUAiapQm9ehgxVLq_QKXrWOoy6OECZNw8A_w1ATHyhKc1glErPPM6vD2uClzmkp1XXv21-nxFplqJXwORSyIb-VyfnoKXtq6dG6teD_L45KH3atXNYbzGzIgIm_MTbrktFqOKu-bq0l60njI-zG0lPEwV-jZzFPlK5zCObraWWc8DDLwTxQl60o939HJQA",
      layout: "normal"
    },
    {
      id: 5,
      name: "Emaar Beachfront Foundations",
      category: "Residential Foundations",
      duration: "Ongoing",
      units: "80+ Units",
      desc: "Excavation, shoring support, grading, and transport logistics for master-planned coastal luxury communities.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAviKes8cfSlTFftLmRnOoGvqxm6ASxZQyAhnV7zcBwOaNkzkBd1kOguaLHNw8xEx0ySCBIJ4VGiBogKnlJoDbuGioqXL72EKsfoUaS2nhpbPtdwlEKlNOZpElDXRBblhfnFTAgTSdlqiGZ_hHuiIvRjavbkTK6ttHeDOr5JrYuRy602qF-brHtvmTa4EvTmBemQlxJASy48ouERvzqnPB5hbsK_qf-ouzZVaamusV-0NC27HHvfnh7DxkGrRxQz3zyGcDvPoGMQg",
      layout: "masonry-item-wide"
    },
    {
      id: 6,
      name: "Jebel Ali Port Terminal 4",
      category: "Logistics Hub",
      duration: "36 Months",
      units: "90 Units",
      desc: "Heavy foundations, port clearance, and massive marine aggregate logistics using specialized loaders.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzWxbp5ZwiX0B3DVHh2ln59RRpAMunixXX3N8UlCNJQ0VGo8OCCcz8xoiiPIR0rVXtZZFngbbvgHqxIjpfVGFPICaODVQVvqA3IDrnD4uyQXjAQtdhtD3wdeCQOpoMj5jhcrS0Gf-K5FJkSwfC8ysaTjcKU60FVORUMKIU5c2pOXGtL9hi2SX1ZFQrm_wnG8ViT91Quwj4Fc268sVym3H341KamMn_he1M-00-cddqEYD0RYgnV4VlpdHSQQQMnqok7mVka4ah8w",
      layout: "normal"
    },
    {
      id: 7,
      name: "Sharjah FC Stadium Expansion",
      category: "Sports Infrastructure",
      duration: "14 Months",
      units: "35 Units",
      desc: "Grading, pitch preparation, leveling, and infrastructure upgrades for premier athletics facilities.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLHV95BoBkLO1sgYYkixJCJ5KQT3sCf62f3qQ5Tny5LBjHx2WrUK7H6Z8pEUEZ1WId6sBlcnjKrbOUMBrbVli4OkTjvSJEF7yrmpnkjV6VDdhbphGX_qZn_8kc93U-wrbddCWGjiPXvhU1dquuZ_wAY32hfol6dw8wtzmwVeIGiS3XSxjCvMmXqMoaOs4zZwlKS7ik-FUJW4Mab1X80wVmFTZRIzbXqAVl-K8tt1F0BkSJ0Kl_eY1lluHexrxazk3U2LAy3rUJQ",
      layout: "normal"
    },
    {
      id: 8,
      name: "Sheikh Zayed Road Resurfacing",
      category: "Roadworks",
      duration: "1 Month",
      units: "55 Units",
      desc: "Rapid highway resurfacing and rolling operations conducted on 24/7 night shift schedules.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfr1kIt-0bXoVgVHKTZtlxA-lb_tUT4DVK0wLaaUxlZv4_25Ku7ZP1WhGnJtIFhXOFxGv7CVDwD0EOksbc3_2qlyqxpjkfPLVl_559HJokS4Bn3Pa6VjptFYDQsdPQHcRn_2hJHNUOixRT-yBVA8QgTT_I2yOv5dsDi9NlkJItlFpAX8-iLE37NqW11ikOiqrTnTOPtS1HGlovvBSJNlxbhmzVVwZKCGcNSjA_-ROBXcwqbpZgdouVvlrhpEoMkoxMaK26XhAOMw",
      layout: "masonry-item-wide"
    },
    {
      id: 9,
      name: "Dubai Mall Expansion Phase II",
      category: "Commercial",
      duration: "24 Months",
      units: "50 Units",
      desc: "Excavation and loader support in restricted, high-density municipal development sectors.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ffqypbnJEMFa7AK2CLpGDx5NgrH4suYpY3dtAdO-rdIwUUr3HfGBGwjEpNWNlkYako4aAAmFwR6ngDdQieI1q7j64CjVreNabyn-FXZKd5J7zf8umYtQS5FaImBw78FDOyhNvCrQ-h4wVnb1oEOlYoxvYByJsoBeWVLdb8nk86bfhaZdEdq1GL2ehkHclNvaeWYJrtj-Z8iGAsv3DhOic_bLL-k-fXVyqJ5MimgbqNms-CiQa1PFwvhAP_kEvDbNmSgvYN7AHQ",
      layout: "normal"
    },
    {
      id: 10,
      name: "Yas Island Theme Park Prep",
      category: "Entertainment Hub",
      duration: "20 Months",
      units: "40 Units",
      desc: "Site preparation, foundation trenching, and grading for world-class leisure parks in Abu Dhabi.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABQkfG3yxyferb1TK8Fu2n0N_nGCaO4ljxAuUp-H8CG1eoFLIhTU21EWcFjMkFo3AO7_WgokteygRpx5hvtU-VM5EKRx347AlQkINa_Pdx_kZ0_H4_ofZeYlTwZwg2fiNihkqxm9EWkcqT6vdk-B0Svky3KjDLHvdLY-1aqvUlbA61HcWfltxXFLkysfHxAEq8N-YVcrnxvgUvJsTniyEcMQCgqajMCBCZUPQZAj_5oNcxOO3mVl-UQZOx8pA_mFvQx-1idpfrHw",
      layout: "normal"
    },
    {
      id: 11,
      name: "RTA Dubai Metro Route 2020",
      category: "Infrastructure",
      duration: "36 Months",
      units: "75 Units",
      desc: "Earthworks, grading, and structural foundation support for the subway extension to the Expo site.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9bJIi0JIeo9ok7VBVZWaMcaCX-G2TiT_c-pVzsARZ8oMlpOd4C0yPxEXK5sbBIKA3WsJFPuDgMEZD2KoBUZGO6sqE1PiE5IWzXud_ylgVCDHt-Ft19E5FSepCx_tAo7akYISxFJ_bwR607PGlydcExV3BySrb3B7Q6ceZwAJEUMIo5753gFCDIhg1PSnnm-H9xq9gcSt2ZMUTLHCrKqskX39hRqdhvhcP4CtHAA3NVyhX5jO4ru_qNMbW2CyJSMjukfOzREo9cA",
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
    },
    {
      quote: "We rented a fleet of CAT excavators for the Yas Island project. The machinery was in immaculate condition and supported our 24/7 timeline.",
      author: "Site Coordinator",
      company: "Miral Asset Management"
    },
    {
      quote: "British Transport delivered exceptional service for our highway expansion project. Their response time and technical support are outstanding.",
      author: "Project Director",
      company: "RTA Dubai"
    }
  ];

  const handlePrev = () => {
    setCurrentPerspective(prev => (prev - 1 + clientPerspectives.length) % clientPerspectives.length);
  };

  const handleNext = () => {
    setCurrentPerspective(prev => (prev + 1) % clientPerspectives.length);
  };

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
                <span className="bg-[#f5c200] text-black font-label-bold text-xs px-3 py-1 w-fit mb-4 uppercase">
                  {proj.category}
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-white uppercase mb-2 font-bold">
                  {proj.name}
                </h2>
                
                {/* Expand on Hover Info */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-[170px] group-hover:overflow-y-auto transition-all duration-500 ease-in-out pr-1 no-scrollbar">
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
        <div className="flex justify-between items-center mb-12">
          <h3 className="font-headline-lg text-3xl sm:text-5xl font-bold uppercase">Client Perspectives</h3>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 border border-outline-variant hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous Perspective"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 border border-outline-variant hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next Perspective"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[0, 1, 2].map((offset) => {
            const index = (currentPerspective + offset) % clientPerspectives.length;
            const client = clientPerspectives[index];
            const isHighlighted = offset === 1;
            return (
              <div 
                key={`${client.author}-${index}`}
                className={`p-8 border flex flex-col justify-between transition-all duration-500 ${
                  offset > 0 ? 'hidden md:flex' : 'flex'
                } ${isHighlighted ? 'bg-on-surface border-on-surface text-white' : 'bg-white border-outline-variant text-on-surface'}`}
              >
                <span className={`material-symbols-outlined text-4xl mb-6 ${isHighlighted ? 'text-[#f5c200]' : 'text-primary'}`}>format_quote</span>
                <p className={`font-body-lg text-lg mb-8 italic ${isHighlighted ? 'text-white font-semibold' : 'text-on-surface'}`}>
                  "{client.quote}"
                </p>
                <div>
                  <p className={`font-label-bold uppercase text-sm ${isHighlighted ? 'text-white' : 'text-on-surface'}`}>
                    {client.author}
                  </p>
                  <p className={`text-label-sm text-xs ${isHighlighted ? 'text-[#f5c200]' : 'text-secondary'}`}>
                    {client.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
