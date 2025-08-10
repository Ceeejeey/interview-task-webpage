import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

function FaqDropdown({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-purple-100/50 rounded-xl flex flex-col w-full p-5 sm:p-6 transition-all duration-300">
      {/* Question Row */}
      <div className="flex justify-between items-center gap-4">
        <div
          className={`font-inter font-normal text-lg sm:text-xl md:text-2xl tracking-tight flex-1 transition-colors duration-300 text-left ${
            isExpanded ? 'text-indigo-600' : 'text-gray-900'
          }`}
        >
          {question}
        </div>
        <button
          className="p-1 rounded-full text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse answer' : 'Expand answer'}
        >
          {isExpanded ? (
            <FiMinus className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <FiPlus className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Answer */}
      {isExpanded && (
        <div className="text-gray-500 font-inter font-normal text-sm sm:text-base mt-4 animate-fadeIn text-justify">
          {answer}
        </div>
      )}
    </div>
  );
}

function Faqs() {
  const faqData = [
    {
      question: 'What is Webflow and why is it the best website builder?',
      answer:
        'Webflow is a visual web design platform that allows users to create responsive websites without coding. It’s considered the best due to its intuitive drag-and-drop interface, powerful design capabilities, and seamless integration with hosting and CMS features.',
    },
    {
      question: 'How does your web development process work?',
      answer:
        'Our web development process involves discovery, planning, design, development, testing, and deployment. We collaborate closely with clients to ensure the final product aligns with their goals and is optimized for performance and user experience.',
    },
    {
      question: 'What support do you offer after launching a website?',
      answer:
        'We provide ongoing maintenance, updates, and support to ensure your website remains secure, fast, and up-to-date. This includes bug fixes, content updates, and performance optimizations tailored to your needs.',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((faq, index) => (
        <FaqDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default Faqs;
