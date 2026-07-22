import React, { useState } from 'react';

export default function Nkar25() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների կարգավորումներ
  const basePrice = 55000;
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };

  const currentSymbol = symbols[currency];
  const price = Math.round(basePrice / rates[currency]);

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Բազմաղբյուր" },
    { label: "Գիշերակաց", value: "Այո" },
    { label: "Շինության մակերես", value: "120 քմ" },
    { label: "Ընդհանուր մակերես", value: "600 քմ" },
    { label: "Մարդկանց թույլատրելի քանակ", value: "25" },
    { label: "Մարդկանց թույլատրելի քանակը գիշերակացով", value: "6" },
    { label: "Սենյակների քանակ", value: "2" },
    { label: "Սանհանգույցների քանակ", value: "3+" },
    { label: "Լողավազան", value: "Փակ" },
  ];

  const amenities = [
    { title: "Փակ տաղավար", icon: "🏢" },
    { title: "Մանղալ", icon: "🍖" },
    { title: "Ամառային խոհանոց", icon: "🍳" },
    { title: "Նվագարկիչ", icon: "🔊" },
    { title: "Ճոճանակ", icon: "🪑" },
    { title: "WiFi", icon: "📶" },
    { title: "Կանաչապատ այգի", icon: "🌳" },
    { title: "Սպասք", icon: "🍽️" },
    { title: "Լվացքի մեքենա", icon: "🧺" },
    { title: "Կայանատեղի", icon: "🅿️" },
    { title: "Վարսահարդարիչ", icon: "💨" },
    { title: "Սեղանի խաղեր", icon: "🎲" },
  ];

  return (
    <div className="w-full bg-white font-sans pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* --- ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> Բազմաղբյուր
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք</span>
              <span className="text-2xl font-black text-orange-500">{price.toLocaleString()}{currentSymbol}</span>
            </div>
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
              {Object.keys(symbols).map((curr) => (
                <button 
                  key={curr}
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
          <div className="md:col-span-6 h-[300px] md:h-[500px] relative">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781348894714--0.36673663406387513image_optimized.webp&w=3840&q=75" alt="Large" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[300px] md:h-[500px]">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781348894657--0.7712824428495477image_optimized.webp&w=3840&q=75" alt="P1" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781348894662--0.9971110373048038image_optimized.webp&w=3840&q=75" alt="P2" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781348894671--0.3944718087084915image_optimized.webp&w=3840&q=75" alt="P3" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781348894683--0.193232735053805image_optimized.webp&w=3840&q=75" alt="P4" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ ԵՎ ՕՐԱՑՈՒՅՑ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-black mb-6 border-b pb-3">Հայտարարության մասին</h3>
            {details.map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b border-gray-50 text-sm">
                <span className="text-gray-500 font-medium">{item.label}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6 border border-gray-200 rounded-3xl shadow-sm bg-white overflow-hidden">
            <div className="bg-[#f97316] text-white p-3 font-bold text-sm text-center">ՀՈՒԼԻՍ</div>
            <div className="grid grid-cols-7 text-center py-2 text-xs font-bold text-gray-500">
              <div>Երկ</div><div>Երք</div><div>Չոր</div><div>Հնգ</div><div>Ուրբ</div><div className="text-orange-500">Շաբ</div><div className="text-orange-500">Կիր</div>
            </div>
            <div className="grid grid-cols-7 text-center p-4 gap-2 text-sm font-semibold">
               {[...Array(30).keys()].map(i => <div key={i} className={i === 21 ? "bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto" : "py-1"}>{i+1}</div>)}
            </div>
          </div>
        </div>

        {/* --- ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border rounded-3xl p-8 mb-12 bg-white">
          <h3 className="text-base font-black mb-6">Առավելություններ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xl bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center border">{item.icon}</span>
                <span className="text-xs font-bold">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STICKY NAV --- */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl flex items-center gap-6">
          <button className="text-white text-xs font-bold">Նկարներ</button>
          <button className="text-white text-xs font-bold">Հայտարարություն</button>
          <button className="bg-[#f97316] text-white font-black text-xs px-6 py-2.5 rounded-full">Ամրագրել</button>
        </div>
      </div>
    </div>
  );
}