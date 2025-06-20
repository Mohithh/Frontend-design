import React from 'react';
import { ArrowRight } from 'lucide-react';

const Page= () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-6 py-10"
      style={{
        backgroundImage: 'url("/banner%201.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-7xl flex justify-between items-start px-6">
        <div className="bg-white text-black font-bold px-4 py-2 rounded shadow-md">
          LOGO
        </div>
      </div>

      <div className="mt-10 max-w-4xl w-full text-center space-y-6">
        <h1
          className="text-white uppercase"
          style={{
            fontFamily: 'Roboto Condensed, sans-serif',
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
        </h1>

        <p
          className="text-white"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            letterSpacing: '0%',
            textAlign: 'center',
            maxWidth: '732px',
            margin: '0 auto',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum
          nisi at risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id.
          At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
        </p>

        <p
          className="text-white"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '25px',
            letterSpacing: '0%',
            textAlign: 'center',
            maxWidth: '732px',
            margin: '0 auto',
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Orci
          amet semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel
          et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar
          suscipit rhoncus natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>

        <div className="pt-4">
         <div className="pt-4 flex justify-center">
  <button
    className="bg-white text-blue-700 font-semibold px-5 py-2 rounded flex items-center gap-2 border-2 border-blue-700 hover:bg-blue-100 transition"
    style={{ width: 'auto', height: '42px', minWidth: '105px' }}
  >
    Loerum Ipsum
    <ArrowRight size={16} strokeWidth={2} />
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Page;
