import React from 'react';
import { ArrowRight } from 'lucide-react';

const Page = () => {
  return (
    <div className="bg-[#F3F3F3] px-6 py-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-4 items-start">
        {/* Left Text */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <p
            className="text-gray-600 uppercase"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.1em',
            }}
          >
            NO LIMITS
          </p>
          <h2
            className="text-[#121212] uppercase"
            style={{
              fontFamily: 'Roboto Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
            }}
          >
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p
            className="text-[#121212]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button
            className="bg-blue-700 text-white font-semibold px-5 py-2 rounded flex items-center gap-2 hover:bg-blue-800 transition"
            style={{
              width: 'fit-content',
              height: '42px',
            }}
          >
            Loerum Ipsum
            <ArrowRight size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Right Grid Images */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-6 gap-4">
          <div className="col-span-2 h-[160px] bg-gray-300">
            <img src="/section 6 img 7.png" alt="img1" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 h-[160px] bg-gray-300">
            <img src="/section 6 img 2.png" alt="img2" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 h-[160px] bg-gray-300">
            <img src="/section 6 img 6.png" alt="img3" className="w-full h-full object-cover" />
          </div>

          <div className="col-span-6 h-[220px] bg-gray-300">
            <img src="/section 6 img.png" alt="img4" className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 h-[100px] bg-gray-300">
            <img src="/section 6 img 1.png" alt="img5" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 h-[100px] bg-gray-300">
            <img src="/section 6 img 8.png" alt="img6" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 h-[100px] bg-gray-300">
            <img src="/section 6 img 3.png" alt="img7" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;