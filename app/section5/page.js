import React from 'react';
import { ArrowRight } from 'lucide-react';

const Page = () => {
  return (
    <div className="bg-white px-6 py-16 max-w-6xl mx-auto text-center">
      {/* Heading */}
      <h2
        className="text-black uppercase text-5xl font-bold tracking-tight"
        style={{
          fontFamily: 'Roboto Condensed, sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        Request a Quote
      </h2>

      {/* Form */}
      <form className="mt-12 space-y-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-md px-5 py-4 text-lg w-full md:w-[536px]"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border border-gray-300 rounded-md px-5 py-4 text-lg w-full md:w-[536px]"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md px-5 py-4 text-lg w-full md:w-[536px]"
          />
          <select
            className="border border-gray-300 rounded-md px-5 py-4 text-lg text-gray-500 w-full md:w-[536px]"
          >
            <option>Choose Time Frame</option>
          </select>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <select
            className="border border-gray-300 rounded-md px-5 py-4 text-lg text-gray-500 w-full md:w-[536px]"
          >
            <option>Choose Size</option>
          </select>
          <select
            className="border border-gray-300 rounded-md px-5 py-4 text-lg text-gray-500 w-full md:w-[536px]"
          >
            <option>Choose Quantity</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex justify-center">
          <textarea
            placeholder="Please Describe Your Project*"
            className="border border-gray-300 rounded-md px-5 py-4 text-lg w-full md:w-[1092px] resize-none"
            rows={6}
          ></textarea>
        </div>

        {/* Terms */}
        <p className="text-gray-500 text-base">
          By submitting this form you agree to our{' '}
          <a href="#" className="underline text-blue-600 font-medium">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline text-blue-600 font-medium">
            Privacy Policy
          </a>.
        </p>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <button
            className="bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded flex items-center gap-2 hover:bg-blue-800 transition"
          >
            Loerum Ipsum <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
