import React, { useState } from 'react';

export default function Nkar31() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների փոխարժեքները (մոտավոր)
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };
  const prices = { base: 90000, withSleep: 100000 };

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Օհանավան" },
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
    { title: "Փակ տաղավար", icon: "🏢" }, { title: "Մանղալ", icon: "🍖" },
    { title: "Ամառային խոհանոց", icon: "🍳" }, { title: "Նվագարկիչ", icon: "🔊" },
    { title: "Ճոճանակ", icon: "🪑" }, { title: "WiFi", icon: "📶" },
    { title: "Կանաչապատ այգի", icon: "🌳" }, { title: "Սպասք", icon: "🍽️" },
    { title: "Լվացքի մեքենա", icon: "🧺" }, { title: "Կայանատեղի", icon: "🅿️" },
    { title: "Վարսահարդարիչ", icon: "💨" }, { title: "Սեղանի խաղեր", icon: "🎲" },
  ];

  const formatPrice = (price) => Math.floor(price / rates[currency]).toLocaleString();

  return (
    <div className="w-full bg-white font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between border rounded-2xl p-4 mb-6 shadow-sm gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black flex items-center gap-2"><span className="text-orange-500 text-2xl">📍</span> Արզնի</h1>
            <span className="bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <div className="text-right">
                <span className="block text-[10px] text-gray-400 font-bold uppercase">Արժեք</span>
                <span className="text-xl font-black text-orange-500">{formatPrice(prices.base)}{symbols[currency]}</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-gray-400 font-bold uppercase">Գիշերակացով</span>
                <span className="text-xl font-black text-orange-500">{formatPrice(prices.withSleep)}{symbols[currency]}</span>
              </div>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-full border">
              {Object.keys(symbols).map((curr) => (
                <button 
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`w-8 h-8 rounded-full text-sm font-bold transition-all ${currency === curr ? 'bg-[#0f172a] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {symbols[curr]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[500px] mb-8 rounded-3xl overflow-hidden">
          <div className="md:col-span-6">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166661227--0.3273183740816792image_optimized.webp&w=3840&q=75" className="w-full h-full object-cover" alt="Villa" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F17811666612${28 + i * 5}--0.6795033067605418image_optimized.webp&w=3840&q=75`} className="w-full h-full object-cover" alt="Villa Details" />
            ))}
          </div>
        </div>

        {/* Info & Amenities */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <h3 className="font-black mb-4 border-b pb-3">Հայտարարության մասին</h3>
            {details.map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 text-sm">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white border rounded-3xl p-6">
            <h3 className="font-black mb-6">Առավելություններ</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border">{item.icon}</span>
                  <span className="text-xs font-bold text-gray-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl flex items-center gap-6">
          <button className="bg-[#f97316] text-white font-black text-xs px-8 py-3 rounded-full hover:bg-orange-600 transition">
            Ամրագրել
          </button>
        </div>
      </div>
    </div>
  );
}