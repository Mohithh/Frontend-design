import Image from 'next/image'
import React from 'react'

const Page= () => {
  return (
    <div className="bg-[#f9f9f9] py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-2xl font-bold uppercase text-[#1d2b50] text-center">
        Lorem ipsum dolor sit amet
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mt-4 text-sm leading-relaxed">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
        Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla
        habitant ut facilisi.
      </p>

      {/* Image + Card */}
      <div className="relative mt-10" style={{ width: '700px', height: '412px' }}>
        {/* Shifted Image slightly right */}
        <div className="relative left-4">
          <Image
            src="/section11.png"
            alt="section"
            width={680}
            height={412}
            className="rounded-md object-cover"
          />
        </div>

        {/* Shifted Card slightly left to overlap better */}
        <div className="absolute top-1/2 left-[330px] transform -translate-y-1/2  w-[300px] bg-white p-5 rounded-md "style={{ margin: '1px 280px' }}>
          <h3 className="font-semibold text-gray-800 text-sm mb-2">
            Artist & Investor
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor.
            Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est …
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
          >
            Read Full Story →
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <div className="w-3 h-3 rounded-full bg-gray-300" />
        <div className="w-3 h-3 rounded-full bg-gray-300" />
        <div className="w-3 h-3 rounded-full bg-gray-300" />
      </div>
    </div>
  )
}

export default Page
 