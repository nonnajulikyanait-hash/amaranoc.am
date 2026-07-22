import React, { useState } from 'react';

export default function Nkar21() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների կառավարում
  const basePrice = 100000;
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };

  const currentSymbol = symbols[currency];
  const price = Math.round(basePrice / rates[currency]);

  // Տվյալներ
  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Օշական" },
    { label: "Գիշերակաց", value: "Այո" },
    { label: "Շինության մակերես", value: "120 քմ" },
    { label: "Ընդհանուր մակերես", value: "600 քմ" },
    { label: "Մարդկանց թույլատրելի քանակ", value: "25" },
    { label: "Մարդկանց թույլատրելի քանակը գիշերակացով", value: "6" },
    { label: "Սենյակների քանակ", value: "2" },
    { label: "Սանհանգույցների քանակ", value: "3+" },
    { label: "Լողավազան", value: "Փակ" },
  ];

  return (
    <div className="w-full bg-white font-sans pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* --- ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> Օշական
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div className="text-right">
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք</span>
              <span className="text-2xl font-black text-orange-500">{price.toLocaleString()}{currentSymbol}</span>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
              {Object.keys(symbols).map((curr) => (
                <button 
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currency === curr ? 'bg-[#0f172a] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {symbols[curr]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- ՖՈՏՈԳԱԼԵՐԵԱ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8">
          <div className="md:col-span-6 h-[500px]">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781355976412--0.44966106055897015image_optimized.webp&w=3840&q=75" alt="Villa" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[500px]">
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781355976428--0.1454030835006499image_optimized.webp&w=3840&q=75" alt="Pool" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781355976432--0.5036189364197907image_optimized.webp&w=3840&q=75" alt="Exterior" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781355976441--0.5722921152299134image_optimized.webp&w=3840&q=75" alt="A-Frame" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781355976446--0.031122456121430053image_optimized.webp&w=3840&q=75" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- ՔԱՐՏԵԶ --- */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-12 border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12166.721458925567!2d44.3857313!3d40.382606!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!5e0!3m2!1shye!2sam!4v1710000000000" 
            className="w-full h-full border-0 grayscale opacity-90"
            allowFullScreen="" 
            loading="lazy"
            title="Օշականի առանձնատուն"
          ></iframe>
        </div>

        {/* --- ՖԻՔՍՎԱԾ ՆԱՎԻԳԱՑԻԱ --- */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-6">
          <button type="button" className="text-white text-xs font-bold hover:text-orange-300">Նկարներ</button>
          <button type="button" className="text-white text-xs font-bold hover:text-orange-300">Հայտարարություն</button>
          <button type="button" className="bg-[#f97316] text-white font-black text-xs px-6 py-2.5 rounded-full shadow-md hover:bg-orange-600 transition-colors">Ամրագրել</button>
        </div>
      </div>
    </div>
  );
}