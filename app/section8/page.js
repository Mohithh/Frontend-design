'use client'
import React from 'react'
import Image from 'next/image'

const people = [
  {
    name: 'Jane Cooper',
    image: '/user1.jpg',
    icon: '⚡',
    text: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.'
  },
  {
    name: 'Ralph Edwards',
    image: '/user2.jpg',
    icon: '⭐️⭐️⭐️',
    text: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.'
  },
  {
    name: 'Courtney Henry',
    image: '/user3.jpg',
    icon: '🏰',
    text: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.'
  },
  {
    name: 'Cameron Williamson',
    image: '/user4.jpg',
    icon: 'ℹ️',
    text: 'Hendrerit augue ut nunc, quis integer netus. Sed rhoncus magnis habitant. Egestas amet habitant tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque.'
  }
]

const Page= () => {
  return (
    <div className="bg-[#0056d2] text-white px-12 py-10">
      <div className="flex justify-between items-start mb-16">
        <div>
          <p className="text-sm font-semibold">Join other Sun harvesters</p>
          <h2 className="text-4xl font-extrabold mt-2">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="text-white text-opacity-80 mt-4 max-w-2xl">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique
            condimentum congue fusce nunc, donec magnis commodo.
          </p>
        </div>
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md mt-2">
          Lorem Ipsum
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-white text-black w-[280px] rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[400px]"
          >
            <div>
              <div className="text-3xl text-blue-600 mb-4">{person.icon}</div>
              <p className="text-sm">{person.text}</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={person.image}
                alt={person.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm font-medium">{person.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-center gap-4 mt-10">
        <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-xl hover:bg-white hover:text-[#0056d2] transition">
          ←
        </button>
        <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-xl hover:bg-white hover:text-[#0056d2] transition">
          →
        </button>
      </div>
    </div>
  )
}

export default Page
