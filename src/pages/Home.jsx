import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const brandLogos = ['VOLVO', 'CATERPILLAR', 'KOMATSU', 'SANY', 'LIEBHERR'];

  const featuredFleet = [
    {
      name: "Motor Grader 140K",
      power: "170 HP",
      width: "3.7 m",
      weight: "17,500 KG",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYXenxlkX_EHJ4CsJqZeSSYMwEMQsDHNypP0W5IOid-f7xofR1vWecFmQmF1hjRX_PB7rdIgU-EdB2IOpiNdUmN31yOCYp3zdI3tOQG-G5K3MXKCiyh6HekIrIMDsbA0t-sIV3_X7iWCt-ONBfaAwJh1qThfqQOrdX__MSp4vMEYq57heaum20DGzluMmHCrtmn13ROYWZ0c0O6LO_YIIgwgOz5gCx2agTIWm9AclqWXHw5fxUGluZoN4ZTr_Aogij-pQHr-_UqA"
    },
    {
      name: "Vibratory Roller CS54B",
      power: "Tier 4 Final",
      width: "2.1 m",
      weight: "10,500 KG",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6GpxFmAVSfrA9Uhd0t6z82VwUt7do-O1NjwXKxhsA9e7p582ntUY9PPpBBSa2kKivU-kGgLv1ggUiUVUBd8lUIG8jSoBwig0xYrL0ty-XVINq5DcYeJIbFqlA64LJe_rAiEqRTZ4SSWqAgkJpuPhhVSYCMmZC6zgH-RvtqDedqGWr7MFmC38-qJNnGrcBygMHElE7JTjQmhHPqwpdSUaBaiTKmRBMP7wYzj_X2rU9dn74s5-1mstiQYg1YxVMe0wY3pZkSOt3xg"
    }
  ];

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
    { name: "EXPO 2020 SITE PREP", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeNa8MgeBgudXcGUbXIi5dIfshrXb01hVHGKEccry1ZwQxfoiAajgrh1g8Eu-ffepGOg86kqViDT5qoUs5v9JRiobGpAkJO_RbJUVY4Bd8Ga-19CZ38xNA0Q-5n4eYYs92YskGZxWGj1ZTHPOcq5xLFSUINAgwkw3xVg3bICx-6R_-71wyy-uJHZFpzxSaK5xtAR1CZWv_pvXzNDjygwiR-Du2Ggvv8n-t5f6eHLumqNhNtSeLfj38GAVaLPvOSIro3yw9sT_OaA" },
    { name: "DUBAI MALL EXPANSION", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ffqypbnJEMFa7AK2CLpGDx5NgrH4suYpY3dtAdO-rdIwUUr3HfGBGwjEpNWNlkYako4aAAmFwR6ngDdQieI1q7j64CjVreNabyn-FXZKd5J7zf8umYtQS5FaImBw78FDOyhNvCrQ-h4wVnb1oEOlYoxvYByJsoBeWVLdb8nk86bfhaZdEdq1GL2ehkHclNvaeWYJrtj-Z8iGAsv3DhOic_bLL-k-fXVyqJ5MimgbqNms-CiQa1PFwvhAP_kEvDbNmSgvYN7AHQ" },
    { name: "ZAYED SPORTS CITY UPGRADE", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZytJflXswxIjfpMF7dTgeKdAlg2maOc-OYnfwPiAEhRw8G0-wtNWqA0DmCj4Y7RwV2UsLQnhnpqZwq-9M0sdoxkPYITTjWOoGIoRS1Dt9PT-2ITUpKLOb0QySFoud8prj4FJ5AuVBxTe9_exNyrQ9Mpk_d66Pj8sex2y2anu-MUgiXPxmr-aWOuwgcZMXOAX9EjavyJ5sMgrQuXl5mZaGExnz38bpL2jMod1QJJd5MERLK83lCoXnocQSp6Mqn0f8BVE7bhPY0Q" },
    { name: "KHALIFA PORT LOGISTICS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChytACi07syjKCYNxN8PBilP92o7KBbZONG6KNjaAtFV2y_wRHIWY9QtS8zmpYl4svYEtGdSdH2sEGlUAiapQm9ehgxVLq_QKXrWOoy6OECZNw8A_w1ATHyhKc1glErPPM6vD2uClzmkp1XXv21-nxFplqJXwORSyIb-VyfnoKXtq6dG6teD_L45KH3atXNYbzGzIgIm_MTbrktFqOKu-bq0l60njI-zG0lPEwV-jZzFPlK5zCObraWWc8DDLwTxQl60o939HJQA" },
    { name: "EMAAR BEACHFRONT FOUNDATIONS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAviKes8cfSlTFftLmRnOoGvqxm6ASxZQyAhnV7zcBwOaNkzkBd1kOguaLHNw8xEx0ySCBIJ4VGiBogKnlJoDbuGioqXL72EKsfoUaS2nhpbPtdwlEKlNOZpElDXRBblhfnFTAgTSdlqiGZ_hHuiIvRjavbkTK6ttHeDOr5JrYuRy602qF-brHtvmTa4EvTmBemQlxJASy48ouERvzqnPB5hbsK_qf-ouzZVaamusV-0NC27HHvfnh7DxkGrRxQz3zyGcDvPoGMQg" }
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
    }
  ];

  const blogPosts = [
    {
      category: "Maintenance",
      readTime: "5 min read",
      title: "PREVENT EQUIPMENT DOWNTIME WITH A SIMPLE PREVENTIVE MAINTENANCE CHECKLIST",
      desc: "Learn the critical daily inspections needed to keep your fleet running in the harsh UAE climate.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWITfAWMfcRwhkcfBLKPsgFUzM2z0pNWExYx-ePPqg1Osx5nFjNX0o62INr9hcjpzcHK8NjHozYxoItnTBbxOL5d9Cud9Wwlslh8GPWE-RYfASOVtYLTqFIL58wYO-vjLaZeRlh6ajVd8J8Xll52KBUY4yv18neULaQ8sWoBMxwXVAhc5Ud_hgIKj0XqdCYFdthoHkB0YPtzvbwjkReFx48di2S4MON6aFSKeICx8gUV5vNwLkkPmJSzfn3yx_zv-5NmAN8-3jrQ"
    },
    {
      category: "Selection",
      readTime: "7 min read",
      title: "HOW TO CHOOSE THE RIGHT MACHINE SIZE FOR YOUR SPECIFIC JOB SITE",
      desc: "A comprehensive guide on balancing power, efficiency, and maneuverability for different project types.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8XNVP8CkFKpAYl6djqqmQA8VgSfbjFA3z5_q-5S-Kl94ZbI-8ff8cCSHQMnwi_q-gytvNjQ4QanP32MydB2i6is1hKQqHGJtdCeJiyOH3m3vwVMQSEEL_WaqtzQmSzbb9SL9pdxQ785CypWkdwpIQII5SgM_qbH6SUKM8WKw9mOaTg-2Yg0KnbsJT4uVS5BBWZ5_xbvv6DRKJzaF0sQu6TZbMdjD15gqqMx9qHTTAXRwpsw3bQ8V9x2Y-ZzDw80lvWjCyeVTlg"
    },
    {
      category: "Safety",
      readTime: "4 min read",
      title: "NEW HEAVY EQUIPMENT SAFETY STANDARDS EVERY OPERATOR SHOULD KNOW",
      desc: "Stay compliant with the latest UAE safety regulations to ensure a zero-accident job site.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8MJovfERmUeEnDHuGPLmyT7-bLD1W2IClkZc0Jw2MpICH6mYomuZSsI672jMcJNO4HsSD-SocUXpOC6HT4yqywvzbl4YlGadwL8SJHQpK_54UTGOxt4fPUmFsTRUlMS7XEDIoiff4mLzmApfLiYrXtpeVTThf9XP1rFfg-lKvfUVUx5hpay41JG_vq2qR7Zaex-Z63CmrewDNhbzBklxa9zDT1iOWqR7UdFFAl_Err8g2yaHgVy6DCyM6I0JtOBUU1OhxbYw1_g"
    }
  ];

  return (
    <div>
      
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-start overflow-hidden pt-20 md:pt-24 pb-28 md:pb-36">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUCt6mie6hjd1HjB9r88eLpkiw4sD-GPR1QyCt9-5NDMYf247zYKNg22sLiEuwKsK1hjaHnsXRJsNTgkZ4L7x2A7XSmskP1dKMXyxbeRgg3wkq13rAWob4w0BQsSVo964NIXqPXkr1yXcKd65CZ8OH1ITmOdsQs-QkgSiMP7mrg-KiL51h2WA-Vc9vmSEPlKnZwoe8Hi2CuUM7JRaV9983AAbtM52x9TMuwZCaDSW4OPkwmGLcuYfyfCLyzfdOoXfiTDY0T35W6g')" }}
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
          <div className="flex bg-surface-container p-1 rounded-none overflow-x-auto no-scrollbar">
            <span className="px-6 py-2 bg-primary-container text-on-primary-container font-label-bold uppercase cursor-pointer">Earthmoving</span>
            <span className="px-6 py-2 hover:bg-surface-container-high transition-colors font-label-bold uppercase cursor-pointer">Compaction</span>
            <span className="px-6 py-2 hover:bg-surface-container-high transition-colors font-label-bold uppercase cursor-pointer">Logistics</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {featuredFleet.map((item) => (
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
                  <span className="font-label-bold text-label-bold text-on-surface text-right uppercase leading-normal">{item.width}</span>
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
          <h2 className="font-display-xl text-5xl md:text-8xl uppercase tracking-tighter mb-stack-md font-black">BUILT ON TRUST</h2>
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
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase mb-16 text-center font-bold">PROJECTS WE'VE POWERED</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-stack-md">
            {projects.map((proj) => (
              <div key={proj.name} className="group relative h-80 overflow-hidden border border-outline-variant">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={proj.img} 
                  alt={proj.name} 
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-label-bold uppercase text-center px-4 text-xs tracking-wider">{proj.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">WHAT OUR PARTNERS SAY</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((test) => (
            <div key={test.name} className="p-stack-lg border border-outline-variant bg-white flex flex-col justify-between">
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
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-section-gap bg-surface-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="mb-16">
            <p className="text-primary font-label-bold uppercase mb-2">Industry Knowledge</p>
            <h2 className="font-headline-lg text-3xl sm:text-5xl uppercase font-bold">
              EXPERT HEAVY EQUIPMENT INSIGHTS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {blogPosts.map((post) => (
              <article key={post.title} className="group flex flex-col bg-white border border-outline-variant p-4">
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={post.img} 
                    alt={post.title} 
                  />
                </div>
                <p className="text-label-sm text-primary uppercase font-bold mb-2 text-xs">{post.category} • {post.readTime}</p>
                <h3 className="font-headline-sm text-xl uppercase mb-4 font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body-md text-secondary mb-6 text-sm flex-grow">
                  {post.desc}
                </p>
                <span className="font-label-bold uppercase border-b border-on-surface pb-1 group-hover:border-primary w-fit text-sm cursor-pointer">
                  Read More
                </span>
              </article>
            ))}
          </div>
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
