import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-on-secondary-fixed text-primary-fixed pt-section-gap pb-12 overflow-hidden border-t-4 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-20">
        
        {/* About Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="font-display-xl text-headline-lg font-black text-primary-fixed uppercase tracking-tighter leading-none" style={{ fontSize: '2.5rem' }}>
              BRITISH<br />TRANSPORT
            </span>
            <span className="font-label-sm text-secondary-fixed-dim uppercase tracking-wider">L.L.C.</span>
          </div>
          <p className="font-body-md text-secondary-fixed opacity-70 max-w-xs">
            Professional-grade construction equipment for teams that demand absolute reliability and power in the UAE's toughest environments.
          </p>
          <div className="text-secondary-fixed-dim text-xs border-t border-secondary-fixed/10 pt-4">
            <p>Trade License No: 660839</p>
            <p>Issuing Authority: Dubai Economy</p>
          </div>
        </div>

        {/* Categories Column */}
        <div className="md:col-span-2">
          <h4 className="font-label-bold uppercase text-white mb-6">Equipment</h4>
          <ul className="space-y-3 font-body-md text-secondary-fixed-dim">
            <li><Link to="/fleet" state={{ filterCategory: 'Excavator' }} className="hover:text-primary-fixed transition-colors">Excavators</Link></li>
            <li><Link to="/fleet" state={{ filterCategory: 'Roller' }} className="hover:text-primary-fixed transition-colors">Rollers & Compactors</Link></li>
            <li><Link to="/fleet" state={{ filterCategory: 'Shovel' }} className="hover:text-primary-fixed transition-colors">Loaders & Shovels</Link></li>
            <li><Link to="/fleet" state={{ filterCategory: 'Crane' }} className="hover:text-primary-fixed transition-colors">Mobile Cranes</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="md:col-span-2">
          <h4 className="font-label-bold uppercase text-white mb-6">Company</h4>
          <ul className="space-y-3 font-body-md text-secondary-fixed-dim">
            <li><Link to="/about" className="hover:text-primary-fixed transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary-fixed transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary-fixed transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary-fixed transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4">
          <h4 className="font-label-bold uppercase text-white mb-6">Contact Us</h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary-fixed">location_on</span>
              <p className="font-body-md text-secondary-fixed-dim">
                Al Asmawi Commercial Building, Office R-4,<br />
                Ras Al Khor, Dubai, UAE (P.O. Box 76980)
              </p>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary-fixed">call</span>
              <p className="font-body-md text-secondary-fixed-dim">
                +971 50 778 7551<br />
                +971 50 948 7660
              </p>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary-fixed">schedule</span>
              <p className="font-body-md text-secondary-fixed-dim">
                Monday – Saturday: 9:00 AM – 10:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            <div className="pt-6 border-t border-secondary-fixed/10">
              <p className="font-label-bold uppercase text-white mb-2">Emirates Covered</p>
              <p className="text-secondary-fixed-dim text-sm">
                Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah (All over UAE)
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="border-t border-secondary-fixed/10 pt-12 text-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <p className="font-body-md text-secondary-fixed-dim opacity-50">
          © {new Date().getFullYear()} British Transport L.L.C. All rights reserved. | ISO 9001:2015 Certified Operations
        </p>
      </div>
    </footer>
  );
}
