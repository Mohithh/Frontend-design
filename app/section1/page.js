import React from 'react';
import { Phone } from 'lucide-react';


const phoneNumber = '123456789';
const buttonLabel = 'Loerum Ipsum';

const Page= () => {
  

  const imageSize = 'w-16 h-16';

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2 space-y-6">

        <h3 className="text-blue-600 font-semibold">
          Lorem ipsum dolor sit
        </h3>

        <h1 className="text-3xl font-bold leading-tight">
          LOREM IPSUM <br /> DOLOR SIT AMET
        </h1>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
          Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis
          at felis aliquet. Hendrerit tellus at purus lectus.
        </p>

        <div className="space-y-4">

          <div className="flex items-center  rounded-md px-4 py-3 gap-4">
            <img src="/section 1 img 1.png" alt="img1" className={`${imageSize} object-cover rounded-md`} />
            <p className="text-base text-gray-800 leading-[1.4]">
              Lorem ipsum dolor sit amet consectetur. <br />
              Vestibulum ornare fermentum feugiat.
            </p>
          </div>

          <div className="flex items-center  rounded-md px-4 py-3 gap-4">
            <img src="/section 1 img 2.png" alt="img2" className={`${imageSize} object-cover rounded-md`} />
            <p className="text-base text-gray-800 leading-[1.4]">
              Lorem ipsum dolor sit amet consectetur. <br />
              Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.
            </p>
          </div>

          <div className="flex items-center  rounded-md px-4 py-3 gap-4">
            <img src="/section 1 img 3.png" alt="img3" className={`${imageSize} object-cover rounded-md`} />
            <p className="text-base text-gray-800 leading-[1.4]">
              Lorem ipsum dolor sit amet consectetur. <br />
              Vestibulum nisi morbi metus gravida eu facilisi enim. <br />
              Ut diam auctor tortor tincidunt.
            </p>
          </div>

        </div>

        <div className="flex gap-6 items-center pt-4">
          <button
          
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            {buttonLabel} <span>→</span>
          </button>

          <div className="flex items-center gap-2 text-blue-700 font-medium">
            <Phone size={18} /> {phoneNumber}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/image2.png"
          alt="Motorcycles"
          className="max-w-[500px] w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default Page;
