import React from 'react';

const Page= () => {
  return (
    <div className="bg-white py-12 px-6 flex flex-col items-center">
      {/* Heading */}
      <h2
        className="text-center text-black uppercase"
        style={{
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: 700,
          fontSize: '42px',
          lineHeight: '100%',
          letterSpacing: '-0.02em',
        }}
      >
        Lorem ipsum dolor sit amet <br />
        consectetur. commodo leo amet.
      </h2>

      {/* Logos Grid */}
      <div className="mt-12 space-y-10">
        {/* Row 1 */}
        <div className="flex justify-center items-center flex-wrap gap-10">
          <img src="/hero.png" alt="Hero" style={{ width: '86px', height: '97px' }} />
          <img src="/honda.png" alt="Honda" style={{ width: '121px', height: '97px' }} />
          <img src="/bajaj.png" alt="Bajaj" style={{ width: '160px', height: '90px' }} />
          <img src="/tvs.png" alt="TVS" style={{ width: '222px', height: '62px' }} />
        </div>

        {/* Row 2 */}
        <div className="flex justify-center items-center flex-wrap gap-10">
          <img src="/royal.png" alt="Royal Enfield" style={{ width: '238px', height: '58px' }} />
          <img src="/yamaha.png" alt="Yamaha" style={{ width: '173px', height: '60px' }} />
          <img src="/ktm.png" alt="KTM" style={{ width: '136px', height: '53px' }} />
          <img src="/athera.jpg" alt="Ather" style={{ width: '205px', height: '74px' }} />
        </div>

        {/* Row 3 */}
        <div className="flex justify-center items-center flex-wrap gap-10">
          <img src="/ola.png" alt="Ola Electric" style={{ width: '185px', height: '92px' }} />
          <img src="/rev.png" alt="Revolt" style={{ width: '167px', height: '83px' }} />
          <img src="/ult.jpg" alt="Ultraviolette" style={{ width: '287px', height: '61px' }} />
          <img src="/tork.jpg" alt="Tork Motors" style={{ width: '101px', height: '143px' }} />
        </div>
      </div>
    </div>
  );
};

export default Page;
