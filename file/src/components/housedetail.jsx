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
  const basePriceOvernight = basePrice + 20000;
  const currentCurrency = currencies[selectedCurrencyId];
  const activePrice = selectedCurrencyId === 0 ? basePrice : Math.round(basePrice / currentCurrency.rate);
  const activePriceOvernight = selectedCurrencyId === 0 ? basePriceOvernight : Math.round(basePriceOvernight / currentCurrency.rate);

  return (
    <div className="w-full bg-white font-sans min-h-screen">
      
      {/* Գլխավոր կոնտենտ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black text-gray-900">📍 {house.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-right">
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք</span>
              <span className="text-2xl font-black text-orange-500">{activePrice.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200 gap-1">
              {currencies.map((c) => (
                <button key={c.id} onClick={() => setSelectedCurrencyId(c.id)} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedCurrencyId === c.id ? 'bg-[#0f172a] text-white' : 'text-gray-600'}`}>
                  {c.symbol}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
          <img src={house.images?.[0] || house.img} alt="Main" className="w-full h-[400px] object-cover rounded-3xl" />
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={house.images?.[i] || house.img} alt="Gallery" className="w-full h-[195px] object-cover rounded-3xl" />
            ))}
          </div>
        </div>
      </div>

      {/* Ավելացնել հայտարարություն */}
      <section className="w-full py-20 px-6 bg-cover bg-center" style={{ backgroundImage: "url('https://amaranoc.am/images/footer/home-add-application.png')" }}>
        <div className="max-w-4xl mx-auto backdrop-blur-md rounded-2xl text-center p-12 bg-[#19231e]/60 border border-white/15">
          <h2 className="text-3xl font-bold text-white mb-5">ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
          <p className="text-blue-100 mb-8">Մուտքագրեք Ձեր տվյալները և մենք կկապնվենք Ձեզ հետ</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Անուն Ազգանուն" className="bg-transparent border border-white/40 rounded-full px-6 py-3 text-white outline-none flex-1" />
            <input type="tel" placeholder="Հեռախոսահամար" className="bg-transparent border border-white/40 rounded-full px-6 py-3 text-white outline-none flex-1" />
            <button className="bg-[#ff9f43] text-white font-bold px-8 py-3 rounded-full">Ուղարկել</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b131f] text-white py-16 px-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-widest mb-10">ԿՈՆՏԱԿՏՆԵՐ</h2>
          <div className="flex justify-center flex-wrap gap-8 mb-10 text-slate-300 text-sm">
            <a href="tel:041611611" className="hover:text-white">041-611-611 / 044-611-611</a>
            <a href="mailto:amaranoc.info@gmail.com" className="hover:text-white">AMARANOC.INFO@GMAIL.COM</a>
            <span>ԹՈՒՄԱՆՅԱՆ 5</span>
          </div>
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Ամառանոց ՍՊԸ | Amaranoc LLC</p>
        </div>
      </footer>

      {/* Floating Sticky Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl flex items-center gap-4">
        <span className="text-white font-bold text-xs">Կոդ: AM{house.id}</span>
        <button onClick={() => alert('Ամրագրումն հաջողությամբ ուղարկվեց!')} className="bg-[#f97316] text-white font-black text-xs px-6 py-2.5 rounded-full hover:bg-orange-600 transition">
          Ամրագրել
        </button>
      </div>
    </div>
  );
}