import React from 'react';

const Page= () => {
  return (
    <div
      className="w-full min-h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/banner2.png')",
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded">
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            verticalAlign: 'middle',
            width: '91px',
            height: '39px',
          }}
        >
          LOGO
        </p>
      </div>

      {/* Heading Centered */}
      <div className="text-center px-4">
        <h1
          className="text-white uppercase mx-auto"
          style={{
            fontFamily: 'Roboto Condensed, sans-serif',
            fontWeight: 700,
            fontSize: '42px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            width: '812px',
            height: '196px',
          }}
        >
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA
          MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
        </h1>
      </div>
    </div>
  );
};

export default Page;
