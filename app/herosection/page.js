import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white">

      {/* Navbar on top, over hero image */}
      <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-4 flex items-center justify-between text-black">
        <div className="font-bold text-lg bg-gray-200 px-3 py-1 rounded-sm">
          LOGO
        </div>
        <div className="hidden md:flex gap-8 text-sm text-blue-700 font-medium">
          <div className="cursor-pointer hover:underline">Lorem Ipsum <span className="ml-1">▾</span></div>
          <div className="cursor-pointer hover:underline">Lorem Ipsum <span className="ml-1">▾</span></div>
          <div className="cursor-pointer hover:underline">Lorem Ipsum <span className="ml-1">▾</span></div>
        </div>
        <button className="text-sm border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">
          Sign In
        </button>
      </nav>

      {/* Hero Section (goes under navbar) */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lorem ipsum dolor sit amet</h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. 
            Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. 
            Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>

          <form className="flex items-center gap-2 mb-4">
            <input 
              type="text" 
              placeholder="Enter your email" 
              className="p-2 rounded-md border border-gray-300 w-full max-w-xs" 
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit →
            </button>
          </form>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-5 h-5 bg-blue-600 text-white flex items-center justify-center rounded-full text-xs">✔</span>
            No credit card required!
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
          <div className="relative w-full h-full clip-diagonal overflow-hidden">
            <img 
              src="/heroimg.png" 
              alt="Hero image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
