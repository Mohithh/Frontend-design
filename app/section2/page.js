import React from 'react';

const Page= () => {
  const bulletIcon = '/section 2 para.png';
  const rightImage = '/section 1 img 3.png';

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-10 flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2 space-y-6">

        <h3 className="text-blue-600 font-semibold">
          Lorem ipsum dolor sit amet
        </h3>

        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU <br /> ELIT.
        </h1>

        <p className="text-gray-600 text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
          condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat
          lacus suspendisse ornare.
        </p>

        <div className="space-y-6 pt-4">
          <div className="flex gap-4">
            <img
              src={bulletIcon}
              alt="icon"
              style={{ width: '36px', height: '38.47px' }}
            />
            <div>
              <p className="text-gray-800 font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus
                quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis
                nulla felis mauris eu donec. Ipsum sit ut tortor.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src={bulletIcon}
              alt="icon"
              style={{ width: '36px', height: '38.47px' }}
            />
            <div>
              <p className="text-gray-800 font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus
                quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis
                nulla felis mauris eu donec. Ipsum sit ut tortor.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src={bulletIcon}
              alt="icon"
              style={{ width: '36px', height: '38.47px' }}
            />
            <div>
              <p className="text-gray-800 font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus
                quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis
                nulla felis mauris eu donec. Ipsum sit ut tortor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-start justify-center">
        <img
          src={rightImage}
          alt="Two men talking"
          style={{
            width: '577.42px',
            height: '620px',
            objectFit: 'cover',
          }}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Page;
