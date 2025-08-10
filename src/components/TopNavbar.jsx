import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import LogoIconImage from '../assets/images/LogoIcon.svg';
import LogoTextImage from '../assets/images/LogoText.svg';

function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <header className="bg-indigo-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={LogoIconImage}
            alt="Logo Icon"
            loading="lazy"
            className="w-10 h-10 object-contain"
          />
          <img
            src={LogoTextImage}
            alt="Logo Text"
            loading="lazy"
            className="h-12 object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-purple-300 transition-colors"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-900">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-purple-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default TopNavigation;
