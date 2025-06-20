

import React from 'react';

const Page= () => {
  return (
    <div className="w-full bg-gray-200 py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Side Content */}
        <div className="space-y-6 max-w-[526px]">
          <p
            className="text-[#0546D2]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '-0.04em',
            }}
          >
            Lorem Ipsum
          </p>

          <h2
            className="text-black"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: '42px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              width: '418px',
            }}
          >
            Lorem Ipsum Dolor Sit Amet
          </h2>

          <p
            className="text-gray-700"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '25px',
              letterSpacing: '0',
              width: '526px',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. 
            Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* App Store Buttons */}
          <div className="flex gap-4 pt-2">
            <img
              src="/mockup2.png"
              alt="Google Play"
              style={{ width: '140px', height: '41.53px' }}
            />
            <img
              src="/mockup3.png"
              alt="App Store"
              style={{ width: '140px', height: '41.46px' }}
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0 relative">
          <img
            src="/mockup1.png"
            alt="Mobile App"
            style={{
              width: '1074.34px',
              height: '629.16px',
              position: 'relative',
              top: '-77.22px',
              left: '0px',
              objectFit: 'cover',
            }}
          /> 
        </div>
      </div>
    </div>
  );
};

export default Page;
