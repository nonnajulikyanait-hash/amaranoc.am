import React, { useState } from 'react';

export default function Nkar32() {
  const [currency, setCurrency] = useState('AMD');

  // Կարգավորումներ
  const rates = { AMD: 1, USD: 388, EUR: 415, RUB: 4.2 };
  const symbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };
  const basePrice = 80000;
  
  const formatPrice = (price) => Math.round(price / rates[currency]).toLocaleString();

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Էջմիածին" },
    { label: "Գիշերակաց", value: "Այո" },
    { label: "Շինության մակերես", value: "120 քմ" },
    { label: "Ընդհանուր մակերես", value: "600 քմ" },
    { label: "Մարդկանց թույլատրելի քանակ", value: "25" },
    { label: "Գիշերակացով", value: "6" },
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

  const galleryImages = [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166055468--0.3709082804841124image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166055477--0.08210287588352494image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166055479--0.11801771342496647image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166055482--0.6570505662942583image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166055485--0.8008607006767092image_optimized.webp&w=3840&q=75"
  ];

  return (
    <div className="w-full bg-white font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Հեդեր */}
        <div className="flex flex-col md:flex-row justify-between border rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black">📍 Էջմիածին</h1>
            <span className="bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-2xl font-black text-orange-500">{formatPrice(basePrice)}{symbols[currency]}</span>
            <div className="flex bg-gray-100 p-1 rounded-full border">
              {Object.keys(symbols).map((curr) => (
                <button key={curr} onClick={() => setCurrency(curr)} className={`w-8 h-8 rounded-full text-sm font-bold ${currency === curr ? 'bg-[#0f172a] text-white' : 'text-gray-600'}`}>
                  {symbols[curr]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Գալերեա */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[500px] mb-8 rounded-3xl overflow-hidden">
          <div className="md:col-span-6">
            <img src={galleryImages[0]} className="w-full h-full object-cover" alt="Main" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            {galleryImages.slice(1).map((src, i) => (
              <img key={i} src={src} className="w-full h-full object-cover" alt="Detail" />
            ))}
          </div>
        </div>

        {/* Ինֆո և Առավելություններ */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="border rounded-3xl p-6 shadow-sm">
            <h3 className="font-black mb-4 pb-3 border-b">Հայտարարության մասին</h3>
            {details.map((d, i) => (
              <div key={i} className="flex justify-between py-2 text-sm">
                <span className="text-gray-500">{d.label}</span>
                <span className="font-bold">{d.value}</span>
              </div>
            ))}
          </div>
          <div className="border rounded-3xl p-6 shadow-sm">
            <h3 className="font-black mb-6">Առավելություններ</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border">{a.icon}</span>
                  <span className="text-xs font-bold">{a.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Nav */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-8 rounded-full shadow-2xl">
          <button className="bg-[#f97316] text-white font-black px-8 py-2 rounded-full shadow-lg">Ամրագրել</button>
        </div>
      </div>
    </div>
  );
}