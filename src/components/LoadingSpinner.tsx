const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tattoo-black">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-tattoo-red rounded-full animate-spin border-t-transparent"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;