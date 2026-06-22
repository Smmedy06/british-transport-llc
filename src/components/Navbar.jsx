import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Equipment', path: '/fleet' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeStyle = "font-label-bold text-label-bold uppercase text-primary border-b-2 border-primary pb-1";
  const inactiveStyle = "font-label-bold text-label-bold uppercase text-on-surface hover:text-primary transition-colors";

  return (
    <nav className={`sticky top-0 w-full z-50 bg-background/95 border-b border-outline-variant transition-all duration-300 ${isScrolled ? 'py-1.5 backdrop-blur-md shadow-md' : 'py-3'}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-14 max-w-[1440px] mx-auto">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img 
            alt="British Transport Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0o4IpTXpPIwKX7iJnhqPrMHxhYo07KuaINTpLDqAYAD0MRheoklDyc3TxtN3GeraO-mOgUBW722AHw4bJfD_mdOeHb5PqsgDDelmq1knQWq8xmyMeKL97fA4gwiVcr6h9d5HMVhLeFPnIcwQfNLSSCqFvxRIWdu6tnjBGtth02Mg2rspmd1J2W0SKam5kuv0IXqPqHxylnyM-63Tb50PXs_eSTqXf-kEf56mtSE5BxQIpK2T0YEHukaPaQ89ehN7UxEjZU678Hw" 
          />
          <span className="font-headline-sm text-headline-sm font-black text-on-surface uppercase tracking-tighter">
            BRITISH TRANSPORT
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Button & Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden sm:inline-block px-6 py-2 bg-primary-container text-on-primary-container font-label-bold uppercase hover:brightness-110 active:scale-95 transition-all"
          >
            Get Quote
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-background border-b border-outline-variant shadow-lg py-4 z-40 transition-all duration-300">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `text-lg font-label-bold uppercase ${isActive ? 'text-primary' : 'text-on-surface hover:text-primary'}`}
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 w-4/5 text-center px-6 py-3 bg-primary-container text-on-primary-container font-label-bold uppercase hover:brightness-110 active:scale-95 transition-all"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
