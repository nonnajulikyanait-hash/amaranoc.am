import React, { useState } from 'react';

export default function Nkar23() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների տվյալներ
  const basePrices = { day: 150000, night: 180000 };
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };

  const currentSymbol = symbols[currency];
  const priceDay = Math.round(basePrices.day / rates[currency]);
  const priceNight = Math.round(basePrices.night / rates[currency]);

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Արզական" },
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
              <span className="text-orange-500 text-2xl">📍</span> Արզական
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք</span>
              <span className="text-2xl font-black text-orange-500">{priceDay.toLocaleString()}{currentSymbol}</span>
            </div>
            <div className="border-l border-gray-200 h-8 hidden sm:block"></div>
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Գիշերակացով՝</span>
              <span className="text-2xl font-black text-orange-500">{priceNight.toLocaleString()}{currentSymbol}</span>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8 relative">
          <div className="md:col-span-6 h-[300px] md:h-[500px] relative group">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781351788029--0.5851764648035249image_optimized.webp&w=3840&q=75" alt="Pool" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[300px] md:h-[500px]">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781351788031--0.31005118650241426image_optimized.webp&w=3840&q=75" alt="Pool 1" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781351788031--0.5060918755458319image_optimized.webp&w=3840&q=75" alt="Exterior" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781351788036--0.9015531726707313image_optimized.webp&w=3840&q=75" alt="A-Frame" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781351788042--0.7523691243704618image_optimized.webp&w=3840&q=75" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm mb-12 bg-white">
          <h3 className="text-base font-black text-gray-900 mb-6">Առավելություններ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xl bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center border border-gray-100">{item.icon}</span>
                <span className="text-xs font-bold text-gray-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STICKY NAV --- */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-6">
          <button className="text-white text-xs font-bold hover:text-orange-300">Նկարներ</button>
          <button className="text-white text-xs font-bold hover:text-orange-300">Հայտարարություն</button>
          <button className="bg-[#f97316] hover:bg-orange-600 text-white font-black text-xs px-6 py-2.5 rounded-full shadow-md transition">Ամրագրել</button>
        </div>
      </div>
    </div>
  );
}