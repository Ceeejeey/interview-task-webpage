import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import HeroImageImage from "../assets/images/1st.jpg";
import Image2Image from "../assets/images/2nd.png";
import Image1Image from "../assets/images/3rd.png";
import Button from "../components/Button";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";

function Index() {
  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      <TopNavbar className="w-full" />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={HeroImageImage}
          alt="Hero Image"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-5 sm:left-10 md:left-20 max-w-xl bg-gradient-to-r from-cyan-500 to-green-500 p-6 sm:p-8 rounded-md">
          <h1 className="text-white font-inter font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight capitalize">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <Button text="Get free consultation" className="mt-5" />
        </div>
      </div>

      {/* Section 1 */}
      <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        <img
          src={Image2Image}
          alt="Web & Mobile App Development"
          loading="lazy"
          className="w-full max-w-sm md:w-[414px] rounded-md object-cover"
        />
        <div className="max-w-lg flex flex-col items-center md:items-start">
          <h2 className="text-indigo-600 font-poppins font-semibold text-2xl md:text-[27px] leading-tight tracking-wide">
            Web & Mobile App Development
          </h2>
          <p className="text-black font-inter mt-5 text-base">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button text="Learn More" className="mt-5" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto px-5 py-16 flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-center md:text-left">
        <div className="max-w-lg flex flex-col items-center md:items-start">
          <h2 className="text-indigo-600 font-poppins font-semibold text-2xl md:text-[27px] leading-tight tracking-wide">
            Digital Strategy Consulting
          </h2>
          <p className="text-black font-inter mt-5 text-base">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <Button text="Learn More" className="mt-5" />
        </div>
        <img
          src={Image1Image}
          alt="Digital Strategy Consulting"
          loading="lazy"
          className="w-full max-w-sm md:w-[414px] rounded-md object-cover"
        />
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-5 py-16 text-center">
        <h2 className="text-indigo-600 font-poppins font-semibold text-2xl md:text-[27px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-7 max-w-3xl mx-auto">
          <Faqs />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Index;
