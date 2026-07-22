import React, { useState } from 'react';

export default function Nkar30() {
  const [currency, setCurrency] = useState('AMD');

  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Օհանավան" },
    { label: "Գիշերակաց", value: "Այո" },
    { label: "Շինության մակերես", value: "120 քմ" },
    { label: "Մարդկանց քանակ", value: "25" },
    { label: "Լողավազան", value: "Փակ" },
  ];

  const imageUrls = [
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166661227--0.3273183740816792image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166661229--0.6795033067605418image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166661234--0.9813162111954334image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166661237--0.7745757776116711image_optimized.webp&w=3840&q=75",
    "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1781166661241--0.8241707009762285image_optimized.webp&w=3840&q=75"
  ];

  return (
    <div className="w-full bg-white font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* 1. Գլխամաս */}
        <div className="flex justify-between items-center border rounded-2xl p-4 mb-8 shadow-sm">
          <h1 className="text-2xl font-black text-gray-900">📍 Արզնի</h1>
          <div className="flex gap-4">
            <span className="text-2xl font-black text-orange-500">90,000 ֏</span>
            <button onClick={() => setCurrency(currency === 'AMD' ? 'USD' : 'AMD')} className="bg-gray-100 px-4 py-1 rounded-full font-bold">
              {currency}
            </button>
          </div>
        </div>

        {/* 2. Ֆոտոգալերեա */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[500px] mb-8 rounded-3xl overflow-hidden">
          <div className="md:col-span-6">
            <img src={imageUrls[0]} className="w-full h-full object-cover" alt="Main" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            {imageUrls.slice(1).map((url, i) => (
              <img key={i} src={url} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
            ))}
          </div>
        </div>

        {/* 3. Հայտարարության մասին */}
        <div className="bg-gray-50 p-6 rounded-3xl mb-8">
          <h3 className="font-black mb-4">Հայտարարության մասին</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {details.map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Sticky Footer */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-8 rounded-full shadow-2xl">
          <button className="bg-[#f97316] text-white font-black px-8 py-2 rounded-full">Ամրագրել</button>
        </div>

      </div>
    </div>
  );
}