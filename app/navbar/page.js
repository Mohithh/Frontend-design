import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full px-6 md:px-16 py-4 flex items-center justify-between bg-white shadow-sm">
        
      
      {/* Logo */}
      <div className="font-bold text-lg bg-gray-200 px-3 py-1 rounded-sm">
        LOGO
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-sm text-blue-700 font-medium">
        <div className="cursor-pointer hover:underline">Lorem Ipsum <span className="ml-1">▾</span></div>
        <div className="cursor-pointer hover:underline">Lorem Ipsum <span className="ml-1">▾</span></div>
        <div className="cursor-pointer hover:underline">Lorem Ipsum <span className="ml-1">▾</span></div>
      </div>

      {/* Sign In Button */}
      <div>
        <button className="text-sm border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

