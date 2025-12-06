'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1 sm:py-2">
          <div className="flex items-center">
            <a href="#home" className="cursor-pointer">
              <Image
                src="/WhatsApp_Image_2025-12-05_at_20.02.19-removebg-preview.png"
                alt="Excotron Solutions"
                width={160}
                height={80}
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  scrolled
                    ? 'text-gray-700 hover:text-teal-600'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-teal-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </nav>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}