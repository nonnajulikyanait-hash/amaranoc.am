import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HouseCard({ house, formatPrice }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Նկարների հաջորդելը
  const nextImage = (e) => {
    e.preventDefault(); // Կանխում է քարտի հղումով բացվելը սլաքին սեղմելիս
    setCurrentImageIndex((prev) => (prev + 1) % house.images.length);
  };

  // Նկարների հետ գնալը
  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + house.images.length) % house.images.length);
  };

  return (
    <Link 
      to={`/nkar/${house.id}`}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative flex flex-col cursor-pointer"
    >
      {/* Նկարների և սլայդերի բլոկ */}
      <div className="h-56 w-full bg-gray-200 relative flex flex-col justify-between overflow-hidden">
        
        {/* Ընթացիկ նկարը */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-300"
          style={{ backgroundImage: `url("${house.images[currentImageIndex]}")` }}
        ></div>

        {/* Վերևի հատված (օրինակ՝ սիրուն հավաքված սրտիկի կոճակ) */}
        <div className="p-4 flex justify-between items-center z-10 w-full">
          <div></div>
          <button 
            onClick={(e) => { e.preventDefault(); }} 
            className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 shadow-sm transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>

        {/* Աջ և ձախ սլաքներ (հայտնվում են միայն մկնիկը վրդին պահելիս - hover) */}
        {house.images && house.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow z-10"
            >
              ❮
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow z-10"
            >
              ❯
            </button>
          </>
        )}

        {/* Ներքևի կետիկներ (Dots) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {house.images.map((_, idx) => (
            <span 
              key={idx} 
              className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
            ></span>
          ))}
        </div>

      </div>

      {/* Տան տվյալները (Վերնագիր, գին և այլն) */}
      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
          <span>{house.title}</span>
          <span>{house.capacity} հոգի</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="font-black text-base text-[#111827]">{formatPrice ? formatPrice(house.price) : `${house.price} ֏`}</span>
          <span className="bg-gray-100 text-gray-600 text-[11px] font-semibold px-2 py-0.5 rounded">{house.category}</span>
        </div>
      </div>
    </Link>
  );
}