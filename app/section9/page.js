'use client'
import React from 'react'
import Image from 'next/image'

const Page= () => {
  return (
    <div className="flex items-center justify-center px-10 py-16 space-x-10">
      
      {/* Left Content */}
      <div className="max-w-xl">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-[#0f172a] mb-6">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        {/* Tabs */}
        <div className="flex w-full max-w-md border border-gray-300 rounded-md overflow-hidden mb-5">
          <button className="w-1/3 px-4 py-2 font-semibold text-[#0f172a] bg-gray-100 border-r border-gray-300">
            Research
          </button>
          <button className="w-1/3 px-4 py-2 font-semibold text-[#0f172a] border-r border-gray-300">
            Plan
          </button>
          <button className="w-1/3 px-4 py-2 font-semibold text-[#0f172a]">
            Design
          </button>
        </div>

        {/* Paragraph */}
        <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque
          donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus
          malesuada placerat arcu at enim elit in accumsan.
        </p>

        {/* Link */}
        <a href="#" className="text-blue-600 font-semibold flex items-center gap-2">
          Check tools
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0 w-[600px] h-[406px] relative">
        <Image
          src="/section9.png"
          alt="Handshake"
          width={600}
          height={406}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  )
}

export default Page
