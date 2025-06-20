import React from 'react'

const Page= () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content Placeholder */}
      <main className="flex-grow"></main>

      {/* Footer */}
      <footer className="bg-[#0b1120] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10">
          {/* Logo */}
          <div className="w-full md:w-1/5">
            <div className="bg-gray-200 px-4 py-2 inline-block mb-4">
              <span className="font-bold text-black">LOGO</span>
            </div>
          </div>

          {/* Columns */}
          <div className="flex flex-wrap gap-12 w-full md:w-4/5 justify-between">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-3 text-sm">Lorem Ipsum</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            ))}

            {/* Optional 5th shorter column */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Lorem Ipsum</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
        </div> 
      </footer>
    </div>
  )
}

export default page
