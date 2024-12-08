import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
                focus:px-4 focus:py-2 focus:bg-tattoo-black focus:text-tattoo-white
                focus:rounded-md focus:outline-none focus:ring-2 focus:ring-tattoo-red
                focus:ring-offset-2 focus:ring-offset-tattoo-white
                transition-colors duration-200"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;