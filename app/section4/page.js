import React from 'react';

const Page= () => {
  const images = [
    '/section4 img 1.png',
    '/section4 img 2.png',
    '/section4 img 3.png',
    '/section4 img 4.png',
  ];

  return (
    <div className="bg-white px-6 py-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-12 ">
        <div className="md:w-1/2 " style={{margin: '1px -70px '}}>
          <p
            className="text-blue-600"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '-0.04em',
              width: '739px',
            }}
          >
            Lorem ipsum dolor sit amet
          </p>

          <h2
            className="uppercase text-black mt-2"
            style={{
              fontFamily: 'Roboto Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              width: '739px',
            }}
          >
            Lorem ipsum dolor sit <br /> amet consectetur.
          </h2>

          <p
            className="text-gray-600 mt-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '25px',
              width: '739px',
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor
            ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit
            tellus at purus lectus.
          </p>
        </div>
      </div>

      {/* Bottom Section - Cards (unchanged) */}
      <div className="flex flex-wrap gap-8 justify-start">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-[12px] overflow-hidden flex flex-col"
            style={{ width: '445px', height: '460px' }}
          >
            <img
              src={src}
              alt={`Section ${idx + 1}`}
              className="w-[444px] h-[205px] object-cover"
            />

            <div className="p-4 space-y-3">
              <h4
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  width: '413px',
                }}
              >
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p
                className="text-gray-700"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '25px',
                  width: '413px',
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi.
                Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.
              </p>
              <a
                href="#"
                className="text-blue-700 underline"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em',
                  borderBottomWidth: '2px',
                  display: 'inline-block',
                  width: '82px',
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
