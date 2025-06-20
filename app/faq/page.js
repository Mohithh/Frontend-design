'use client'
import React, { useState } from 'react'

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '',
  },
]

const Page = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="bg-[#fafafa] py-16 px-4 md:px-20">
      <h2 className="text-xl font-bold text-[#1d1d1f] mb-8">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h2>

      <div className="space-y-4 divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="pt-4">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="font-semibold text-sm text-[#1d1d1f]">
                {faq.question}
              </p>
              <span className="text-xl font-bold select-none">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {openIndex === index && faq.answer && (
              <p className="mt-2 text-sm text-[#333] leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
