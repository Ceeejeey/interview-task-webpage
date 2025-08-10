import React from 'react';

function Button({ text, className = '' }) {
  return (
    <button
      type="button"
      className={`
        bg-orange-500 rounded px-6 py-2
        flex items-center justify-center
        min-w-[180px] sm:min-w-[214px]
        hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400
        transition-colors duration-200
        ${className}
      `}
    >
      <span className="text-white font-inter font-bold text-sm tracking-tight uppercase">
        {text}
      </span>
    </button>
  );
}

export default Button;
