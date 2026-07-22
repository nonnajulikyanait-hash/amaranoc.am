import React, { useState } from 'react';

export default function Nkar2() {
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(0);

  const currencies = [
    { id: 0, symbol: '֏', code: 'AMD', name: 'դրամ', rate: 1 }, 
    { id: 1, symbol: '$', code: 'USD', name: 'դոլար', rate: 388 }, 
    { id: 2, symbol: '€', code: 'EUR', name: 'եվրո', rate: 415 }, 
    { id: 3, symbol: '₽', code: 'RUB', name: 'ռուբլի', rate: 4.2 }, 
  ];

  const basePrice = 80000;
  const basePriceOvernight = 100000;

  const currentCurrency = currencies[selectedCurrencyId];
  const activePrice = selectedCurrencyId === 0 ? basePrice : Math.round(basePrice / currentCurrency.rate);
  const activePriceOvernight = selectedCurrencyId === 0 ? basePriceOvernight : Math.round(basePriceOvernight / currentCurrency.rate);

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
      <style>{`
        @media (max-width: 400px) {
          .mobile-tight { padding-left: 15px !important; padding-right: 15px !important; }
          .mobile-text { font-size: 12px !important; }
          .mobile-title { font-size: 16px !important; }
        }
      `}</style>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mobile-tight">
        
        {/* --- 1. ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> ԱՇՏԱՐԱԿ
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">
              ⭐ 5
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք ({currentCurrency.name === 'դրամ' ? '' : currentCurrency.code})</span>
              <span className="text-2xl font-black text-orange-500">{activePrice.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            <div className="border-l border-gray-200 h-8 hidden sm:block"></div>
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեքը գիշերակացով՝</span>
              <span className="text-2xl font-black text-orange-500">{activePriceOvernight.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200 gap-1">
              {currencies.map((currency) => (
                <button 
                  key={currency.id}
                  onClick={() => setSelectedCurrencyId(currency.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${selectedCurrencyId === currency.id ? 'bg-[#0f172a] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {currency.symbol}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. ՖՈՏՈԳԱԼԵՐԵԱ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8 relative">
          <div className="md:col-span-6 h-[300px] md:h-[500px] relative group">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80" alt="Pool Large" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[300px] md:h-[500px] relative">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80" alt="Pool 1" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80" alt="Villa Exterior" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" alt="A-Frame House" className="w-full h-full object-cover" />
            <div className="relative w-full h-full">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Pool Interior" className="w-full h-full object-cover" />
              <button className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs px-4 py-2 rounded-lg shadow-md transition">Տեսնել բոլորը</button>
            </div>
          </div>
        </div>

        {/* --- 3. ԻՆՖՈ ԲԼՈԿ & ՕՐԱՑՈՒՅՑ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-3">Հայտարարության մասին</h3>
            <div className="flex flex-col gap-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-bold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 border border-gray-200 rounded-3xl overflow-hidden shadow-sm bg-white">
            <div className="p-4 bg-white"><h4 className="text-sm font-black text-gray-900 mb-3">Նշեք Ձեր ցանկալի օրերը</h4></div>
            <div className="bg-[#f97316] text-white flex justify-between items-center px-4 py-3 font-bold text-sm tracking-wide">
              <button>←</button><span>ՀՈՒԼԻՍ</span><button>→</button>
            </div>
            <div className="grid grid-cols-7 text-center bg-white border-b border-gray-100 py-2 text-xs font-bold text-gray-700">
              <div>Երկ</div><div>Երք</div><div>Չոր</div><div>Հնգ</div><div>Ուրբ</div><div className="text-orange-500">Շաբ</div><div className="text-orange-500">Կիր</div>
            </div>
            <div className="grid grid-cols-7 text-center p-3 gap-y-3 text-xs font-semibold text-gray-400">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((d) => (<div key={d} className="py-1 text-gray-300 font-light">{d}</div>))}
              <div className="py-1 text-gray-900 font-bold">16</div><div className="py-1 text-gray-900 font-bold">17</div><div className="py-1 text-gray-300 font-light">18</div>
              <div className="py-1 text-gray-900 font-bold">19</div><div className="py-1 text-gray-300 font-light">20</div><div className="py-1 text-gray-300 font-light">21</div>
              <div className="py-1 bg-gray-200 text-gray-900 font-black rounded-full w-7 h-7 mx-auto flex items-center justify-center">22</div>
              <div className="py-1 text-gray-300 font-light">23</div><div className="py-1 text-gray-900 font-bold">24</div><div className="py-1 text-gray-900 font-bold">25</div><div className="py-1 text-gray-900 font-bold">26</div><div className="py-1 text-gray-300 font-light">27</div><div className="py-1 text-gray-900 font-bold">28</div><div className="py-1 text-gray-900 font-bold">29</div><div className="py-1 text-gray-900 font-bold">30</div><div className="py-1 text-gray-900 font-bold">1</div><div className="py-1 text-gray-300">2</div><div className="py-1 text-gray-900 font-bold">3</div><div className="py-1 text-gray-900 font-bold">4</div><div className="py-1 text-gray-300 font-light">5</div>
            </div>
          </div>
        </div>

        {/* --- 4. ԸՆԴՀԱՆՈՒՐ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ --- */}
        <div className="border border-gray-100 bg-[#fefefe] rounded-3xl p-6 md:p-8 shadow-sm mb-12 flex flex-col gap-6">
          <div>
            <h3 className="text-base font-black text-gray-900 mb-3 mobile-title">Ընդհանուր նկարագրություն</h3>
            <p className="text-xs text-gray-700 leading-relaxed font-medium mobile-text">Մենք վստահ էինք, որ քո վերջին ընտրությունը հենց սա է լինելու։ Իդեալական ճաշակը ոչ ոքի աչքից չէր կարող վրիպել։</p>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-black text-gray-900 mb-2">Տնակում առկա է՝</h4>
            <ul className="text-xs text-gray-700 space-y-1.5 font-medium pl-1 mobile-text">
              <li>• Փակ լողավազան, Մանղալ, 2 ննջասենյակ, 2 խոհանոց, սպասք...</li>
            </ul>
          </div>
        </div>

        {/* --- 5. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm mb-12 bg-white">
          <h3 className="text-base font-black text-gray-900 mb-6 mobile-title">Առավելություններ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xl bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">{item.icon}</span>
                <span className="text-xs font-bold text-gray-800 mobile-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 6. ՔԱՐՏԵԶ --- */}
        <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden relative shadow-inner mb-12 border border-gray-200">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12166.721458925567!2d44.3857313!3d40.382606!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!5e0!3m2!1shye!2sam!4v1710000000000" className="w-full h-full border-0 grayscale opacity-90" allowFullScreen="" loading="lazy"></iframe>
        </div>

        {/* --- 7. ԿԱՐԾԻՔՆԵՐ --- */}
        <div className="w-full bg-white py-8 border-t border-gray-100">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest text-center mobile-title">Կարծիքներ</h2>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          <div className="max-w-2xl bg-white p-2 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">👤</div>
              <span className="font-bold text-sm text-gray-900">Armen</span>
            </div>
            <div className="flex gap-0.5 mb-2 text-orange-400 text-sm">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-700 font-medium mobile-text">Հիանալի տեսարան, շատ լավ տնակ է...</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-6">
            <button className="px-8 py-3 bg-[#f59e0b] hover:bg-orange-500 text-white font-bold text-sm rounded-full shadow-sm transition">Թողնել կարծիք</button>
          </div>
        </div>

      </div>

      {/* --- FLOATING STICKY NAVIGATION BAR --- */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-4 md:gap-8 max-w-[95vw]">
        <button className="text-white/80 font-bold text-[10px] whitespace-nowrap">Նկարներ</button>
        <button className="text-white/80 font-bold text-[10px] whitespace-nowrap">Հասցե</button>
        <button className="text-white/80 font-bold text-[10px] whitespace-nowrap">Կարծիքներ</button>
        <button className="bg-[#f97316] text-white font-black text-[10px] px-6 py-2.5 rounded-full shadow-md whitespace-nowrap">Ամրագրել</button>
      </div>
    </div>
  );
}