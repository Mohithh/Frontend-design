import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="relative bg-[#f1f1f1] min-h-screen flex items-start pt-20 mt-24">
      {/* Left content */}
      <div className="pl-16 pr-4 w-1/2">
        <h2 className="text-[28px] font-bold text-blue-700 leading-snug uppercase">
          Lorem Ipsum dolor sit <br />
          amet consectetur. <br />
          Dignissim tellus.
        </h2>
        <p className="mt-4 text-sm text-gray-800 max-w-md">
          Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
          laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
          ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
          Massa in facilisis semper libero eget eu quisque bibendum platea.
          Tortor fames.
        </p>

        <button className="mt-6 px-4 py-2 bg-blue-700 text-white text-sm font-semibold rounded shadow hover:bg-blue-800 flex items-center gap-2">
          Loreum Ipsum
          <span className="text-lg">→</span>
        </button>

        {/* Card */}
        <div className="mt-16 bg-white p-6 shadow-xl rounded-md w-[380px] relative">
          <h4 className="font-semibold text-sm mb-2">Lorem ipsum dolor sit</h4>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
            amet habitasse semper.
          </p>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
            placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id
            tristique sit.
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
            quisque scelerisque facilisi. Ultrices lectus viverra pharetra
            commodo.
          </p>
          <div className="absolute top-2 right-2 text-red-500 text-xl">📌</div>
        </div>
      </div>

      {/* Right image */}
      <div className="absolute" style={{ width: '570px', height: '570px', top: '-70px', left: '929px' }}>
        <Image
          src="/section111.png"
          alt="section image"
          width={570}
          height={570}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  )
}

export default page
