import React from 'react';
import LogoIconImage from '../assets/images/LogoIcon.svg';
import LogoTextImage from '../assets/images/LogoText.svg';

function Footer() {
  return (
    <footer className="bg-indigo-800 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Brand + Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
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
            </div>
            <p className="mt-5 text-sm sm:text-base font-lato leading-relaxed">
              Your goal is our target. Not anything in between. We use online marketing
              platforms and tools to achieve a single objective — your business results.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            {/* Technologies */}
            <div>
              <h4 className="font-inter font-semibold text-lg sm:text-xl mb-3">
                Our Technologies
              </h4>
              <ul className="space-y-2 text-sm sm:text-base font-medium">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
                <li>Laravel</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-inter font-semibold text-lg sm:text-xl mb-3">
                Our Services
              </h4>
              <ul className="space-y-2 text-sm sm:text-base font-medium">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
                <li>Google Marketing Solutions</li>
                <li>Search Engine Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/50 my-8"></div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm sm:text-base font-medium">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="hidden sm:inline-block w-px h-4 bg-white/50"></span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
