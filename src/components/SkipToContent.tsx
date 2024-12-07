import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
                focus:px-4 focus:py-2 focus:bg-white focus:text-tattoo-black 
                focus:rounded-md focus:outline-none focus:ring-4 focus:ring-tattoo-red 
                focus:ring-offset-4 focus:ring-offset-tattoo-black
                dark:focus:bg-tattoo-black dark:focus:text-white 
                dark:focus:ring-offset-white"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;