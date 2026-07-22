import React, { useState } from 'react';

export default function Nkar22() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների տվյալներ
  const basePrice = 100000;
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };

  const currentSymbol = symbols[currency];
  const price = Math.round(basePrice / rates[currency]);

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Եղվարդ" },
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
    <div className="w-full bg-white font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Գլխամաս */}
        <div className="flex flex-col md:flex-row justify-between border border-gray-200 rounded-2xl p-4 mb-6 shadow-sm gap-4">
          <div className="text-xl font-black text-gray-900 flex items-center gap-2">
            📍 Եղվարդ
          </div>
          
          <div className="flex items-center gap-6">
            <div>
              <span className="text-xs text-gray-400 font-bold block">Արժեք</span>
              <span className="text-xl font-black text-orange-500">{price.toLocaleString()}{currentSymbol}</span>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-full">
              {Object.keys(symbols).map((curr) => (
                <button 
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currency === curr ? 'bg-[#0f172a] text-white' : 'text-gray-600'}`}
                >
                  {symbols[curr]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ֆոտոգալերեա */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-8 rounded-3xl overflow-hidden">
          <div className="md:col-span-6 h-[400px]">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781352655705--0.7280593135820603image_optimized.webp&w=3840&q=75" alt="Villa" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[400px]">
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781352655706--0.9114200170974582image_optimized.webp&w=3840&q=75" alt="Pool" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781352655710--0.05942396634517322image_optimized.webp&w=3840&q=75" alt="Exterior" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781352655713--0.767395512231372image_optimized.webp&w=3840&q=75" alt="A-Frame" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781352655720--0.22696434769079965image_optimized.webp&w=3840&q=75" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Տեղեկատվություն */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-black mb-4">Հայտարարության մասին</h3>
          {details.map((item, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b border-gray-50 text-sm">
              <span className="text-gray-500">{item.label}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ֆիքսված կոճակ */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button type="button" className="bg-[#f97316] text-white font-black px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
          Ամրագրել
        </button>
      </div>
    </div>
  );
}