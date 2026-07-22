import React, { useState } from 'react';

export default function Nkar26() {
  const [currency, setCurrency] = useState('AMD');

  // Արժույթների փոխարժեքներ (օրինակելի)
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };
  
  // Հիմնական գներ
  const priceDay = 33000;
  const priceNight = 33000;

  const formatPrice = (price) => Math.round(price / rates[currency]).toLocaleString();

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Դիլիջան" },
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

  return (
    <div className="w-full bg-white font-sans pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* --- ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-xl font-black text-gray-900 flex items-center gap-2">
              <span className="text-orange-500 text-2xl">📍</span> Դիլիջան
            </div>
            <div className="bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[10px] text-gray-400 font-bold uppercase">Արժեք</span>
              <span className="text-xl font-black text-orange-500">{formatPrice(priceDay)}{symbols[currency]}</span>
            </div>
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
              {['AMD', 'USD', 'EUR', 'RUB'].map((curr) => (
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

        {/* --- ՖՈՏՈԳԱԼԵՐԵԱ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8 h-[500px]">
          <div className="md:col-span-6 h-full">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781177932083--0.12914806477773677image_optimized.webp&w=3840&q=75" className="w-full h-full object-cover" alt="Villa" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-full">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781177932086--0.8241862977150509image_optimized.webp&w=3840&q=75" className="w-full h-full object-cover" alt="P1" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781177932089--0.48121971300004174image_optimized.webp&w=3840&q=75" className="w-full h-full object-cover" alt="P2" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781177932091--0.12594455943573335image_optimized.webp&w=3840&q=75" className="w-full h-full object-cover" alt="P3" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781177932098--0.002760929855961214image_optimized.webp&w=3840&q=75" className="w-full h-full object-cover" alt="P4" />
          </div>
        </div>

        {/* --- ԻՆՖՈ & ՕՐԱՑՈՒՅՑ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-black mb-4">Հայտարարության մասին</h3>
            {details.map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 text-sm border-b border-gray-50">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6 border border-gray-200 rounded-3xl p-6">
            <h4 className="font-black mb-4">Օրացույց (Հուլիս)</h4>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {['Երկ','Երք','Չոր','Հնգ','Ուրբ','Շաբ','Կիր'].map(d => <div key={d} className="font-bold text-gray-400">{d}</div>)}
              {[...Array(31).keys()].map(d => (
                <div key={d} className={`p-2 rounded-full ${d === 21 ? 'bg-orange-500 text-white' : 'text-gray-700'}`}>{d + 1}</div>
              ))}
            </div>
          </div>
        </div>

        {/* --- ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border border-gray-100 rounded-3xl p-8 mb-12">
          <h3 className="text-base font-black mb-6">Առավելություններ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-lg bg-gray-50 w-10 h-10 flex items-center justify-center rounded-xl border">{item.icon}</span>
                <span className="text-xs font-bold text-gray-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STICKY NAV --- */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl flex items-center gap-6">
          <button className="text-white text-xs font-bold hover:underline">Նկարներ</button>
          <button className="text-white text-xs font-bold hover:underline">Մասին</button>
          <button className="bg-[#f97316] text-white font-black text-xs px-6 py-2.5 rounded-full">Ամրագրել</button>
        </div>

      </div>
    </div>
  );
}