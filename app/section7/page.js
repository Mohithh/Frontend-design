'use client'
import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="w-[1359px] h-[691px] flex">
        
        {/* Left Image */}
        <div className="relative -top-[62px] w-[550px] h-[550px]">
          <Image
            src="/section7.png"
            alt="Bikers"
            width={550}
            height={550}
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="ml-[50px] flex flex-col justify-start relative">
          {/* Line 1 */}
          <p className="text-[#0056d2] font-semibold text-[16px] w-[620px] h-[29px] m-0">
            Lorem ipsum
          </p>

          {/* Line 2 */}
          <h1 className="text-[32px] font-black w-[487px] h-[147px] my-[10px] leading-snug">
            <span className="text-[#0056d2]">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </h1>

          {/* Line 3 */}
          <p className="w-[620px] h-[50px] text-[16px] text-[#333] mb-[40px]">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>

          {/* Grid of 6 items */}
          <div className="w-[539px] h-[164px] grid grid-cols-2 gap-[15px]">
            {Array(6).fill('Lorem Ipsum').map((text, idx) => (
              <p key={idx} className="m-0">{text}</p>
            ))}
          </div>

          <button className="w-[159px] h-[38px] bg-[#0056d2] text-white rounded-[5px] px-[24px] py-[9px] mt-[30px] flex items-center gap-[10px] text-[14px] font-semibold">
            Lorem Ipsum  →
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
