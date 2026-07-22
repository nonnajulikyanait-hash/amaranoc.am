import React, { useState } from 'react';

export default function Nkar24() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների կառավարում
  const basePrice = 60000;
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };

  const currentSymbol = symbols[currency];
  const price = Math.round(basePrice / rates[currency]);

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Էջմիածին" },
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
        
        {/* --- 1. ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> Էջմիածին
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</div>
          </div>

          <div className="flex items-center gap-6">
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

        {/* --- 2. ՖՈՏՈԳԱԼԵՐԵԱ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8">
          <div className="md:col-span-6 h-[500px]">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781350560845--0.4045299071470163image_optimized.webp&w=3840&q=75" alt="Pool" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[500px]">
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781350560851--0.5687180279507047image_optimized.webp&w=3840&q=75" alt="Pool" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781350560856--0.38507587674560684image_optimized.webp&w=3840&q=75" alt="Exterior" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781350560859--0.7687948009917271image_optimized.webp&w=3840&q=75" alt="A-Frame" className="w-full h-full object-cover" />
             <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781350560873--0.7485714079700359image_optimized.webp&w=3840&q=75" alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- 3. ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ --- */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm mb-12">
            <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-3">Հայտարարության մասին</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-bold">{item.value}</span>
                </div>
              ))}
            </div>
        </div>

        {/* --- 4. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border border-gray-200 rounded-3xl p-6 mb-12 bg-white">
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

        {/* --- 5. ՖԻՔՍՎԱԾ ՆԱՎԻԳԱՑԻԱ --- */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-6">
          <button className="text-white text-xs font-bold">Նկարներ</button>
          <button className="text-white text-xs font-bold">Հայտարարություն</button>
          <button className="bg-[#f97316] text-white font-black text-xs px-6 py-2.5 rounded-full shadow-md">Ամրագրել</button>
        </div>
      </div>
    </div>
  );
}