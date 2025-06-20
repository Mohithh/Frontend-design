import React from 'react'

const Page= () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      {/* Logo Box */}
      <div className="bg-gray-200 px-6 py-2 mb-6">
        <span className="font-bold text-lg">LOGO</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 uppercase leading-snug mb-4">
        Lorem ipsum dolor sit amet <br /> consectetur. Dui.
      </h1>

      {/* Subtitle */}
      <p className="text-base text-gray-700 max-w-xl mb-6">
        Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded shadow flex items-center gap-2">
        Loreum Ipsum
        <span className="text-lg">→</span>
      </button>
    </div>
  )
}

export default page
