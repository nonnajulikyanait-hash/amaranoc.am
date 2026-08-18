import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemsData } from '../data';

export default function HouseDetail() {
  const { id } = useParams();
  const cleanId = Number(String(id || '').replace(/\D/g, ''));
  const house = itemsData.find((item) => Number(item.id) === cleanId);
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(0);

  const currencies = [
    { id: 0, symbol: '֏', code: 'AMD', name: 'դրամ', rate: 1 },
    { id: 1, symbol: '$', code: 'USD', name: 'դոլար', rate: 388 },
    { id: 2, symbol: '€', code: 'EUR', name: 'եվրո', rate: 415 },
    { id: 3, symbol: '₽', code: 'RUB', name: 'ռուբլի', rate: 4.2 },
  ];

  if (!house) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center mt-24 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Ամառանոցը չի գտնվել</h2>
        <Link to="/" className="text-orange-500 font-semibold underline">← Վերադառնալ գլխավոր էջ</Link>
      </div>
    );
  }

  const basePrice = house.price || 80000;
  const currentCurrency = currencies[selectedCurrencyId];
  const activePrice = selectedCurrencyId === 0 ? basePrice : Math.round(basePrice / currentCurrency.rate);

  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Հիմնական կոնտենտ */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between border border-gray-200 rounded-2xl p-6 mb-8 gap-4">
          <h1 className="text-2xl font-black">📍 {house.title}</h1>
          <div className="text-2xl font-black text-orange-500">{activePrice.toLocaleString()}{currentCurrency.symbol}</div>
        </div>

        {/* 2. Պատկերասրահ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <img src={house.images?.[0] || house.img} className="w-full h-[400px] object-cover rounded-3xl" alt="Main" />
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={house.images?.[i] || house.img} className="w-full h-[190px] object-cover rounded-3xl" alt="Gallery" />
            ))}
          </div>
        </div>

        {/* 3. Նկարագրություն և Քարտեզ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-3xl">
            <h3 className="font-black mb-4">Հայտարարության մասին</h3>
            <p className="text-gray-600">Այս հիանալի ամառանոցը նախատեսված է ձեր ընտանեկան հանգստի համար...</p>
          </div>
          <div className="h-[350px] rounded-3xl overflow-hidden">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=..." className="w-full h-full grayscale" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>

        {/* 4. Կարծիքներ */}
        <div className="mb-12">
          <h2 className="text-xl font-black mb-6">Կարծիքներ</h2>
          <div className="bg-gray-50 p-6 rounded-2xl max-w-md">
            <p className="font-bold">Armen</p>
            <p className="text-sm text-gray-600">Հիանալի տեսարան, շատ լավ տնակ է...</p>
          </div>
        </div>
      </div>

      {/* 5. Ավելացնել հայտարարություն (Form) */}
      <section className="w-full py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "url('https://amaranoc.am/images/footer/home-add-application.png')" }}>
        <div className="max-w-4xl mx-auto backdrop-blur-md rounded-2xl text-center p-12 bg-[#19231e]/60 border border-white/15">
          <h2 className="text-3xl font-bold text-white mb-5">ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
          <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Անուն" className="bg-transparent border border-white/40 rounded-full px-6 py-3 text-white outline-none flex-1" />
            <input type="tel" placeholder="Հեռախոս" className="bg-transparent border border-white/40 rounded-full px-6 py-3 text-white outline-none flex-1" />
            <button className="bg-[#ff9f43] text-white font-bold px-8 py-3 rounded-full">Ուղարկել</button>
          </form>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#0b131f] text-white py-16 px-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest mb-10">ԿՈՆՏԱԿՏՆԵՐ</h2>
          <div className="flex justify-center flex-wrap gap-8 mb-10 text-slate-300 text-sm">
            <a href="tel:041611611" className="hover:text-white">041-611-611</a>
            <a href="mailto:amaranoc.info@gmail.com" className="hover:text-white">AMARANOC.INFO@GMAIL.COM</a>
            <span>ԹՈՒՄԱՆՅԱՆ 5</span>
          </div>
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Ամառանոց ՍՊԸ</p>
        </div>
      </footer>

      {/* Floating Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl flex items-center gap-4">
        <span className="text-white font-bold text-xs">Կոդ: AM{house.id}</span>
        <button onClick={() => alert('Ամրագրումն ուղարկված է!')} className="bg-[#f97316] text-white font-black text-xs px-6 py-2.5 rounded-full hover:bg-orange-600 transition">
          Ամրագրել
        </button>
      </div>
    </div>
  );
}