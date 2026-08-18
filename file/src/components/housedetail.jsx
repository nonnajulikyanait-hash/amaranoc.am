import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemsData } from '../data';

export default function CombinedPage() {
  const { id } = useParams();
  
  const cleanId = Number(String(id || '').replace(/\D/g, ''));
  const house = itemsData?.find((item) => Number(item.id) === cleanId) || {
    id: 1,
    title: "Օհանավան",
    price: 80000,
    capacity: 25,
    img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778660910917--0.5990204695636232image_optimized.webp&w=3840&q=75",
    images: [
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778660910917--0.5990204695636232image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1759149473223--0.33907271602966693image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778744544176--0.9742892469611801image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1764083598180--0.6582491079586374image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1762686772282--0.7753343924665224image_optimized.webp&w=3840&q=75"
    ]
  };

  // HouseDetail վիճակներ
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Zexcher & Carayutyun վիճակներ
  const [currency, setCurrency] = useState('AMD');
  const [priceRange, setPriceRange] = useState(400000);
  const [visibleCount, setVisibleCount] = useState(9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGiftAmount, setSelectedGiftAmount] = useState('80,000 ֏');
  const [activeTab, setActiveTab] = useState('Սպասարկում');
  const [selectedService, setSelectedService] = useState(null);

  const currencies = [
    { id: 0, symbol: '֏', code: 'AMD', name: 'դրամ', rate: 1 }, 
    { id: 1, symbol: '$', code: 'USD', name: 'դոլար', rate: 388 }, 
    { id: 2, symbol: '€', code: 'EUR', name: 'եվրո', rate: 415 }, 
    { id: 3, symbol: '₽', code: 'RUB', name: 'ռուբլի', rate: 4.2 }, 
  ];

  const exchangeRates = { AMD: 1, USD: 0.0026, EUR: 0.0024, RUB: 0.24 };
  const currencySymbols = { AMD: '֏', USD: '$', EUR: '€', RUB: '₽' };

  const formatPrice = (basePriceAMD) => {
    const converted = basePriceAMD * exchangeRates[currency];
    return `${Math.round(converted).toLocaleString()} ${currencySymbols[currency]}`;
  };

  const hotOffers = Array.from({ length: 34 }, (_, i) => {
    const locations = ["Դիլիջան", "Բջնի", "Աշտարակ", "Ծաղկաձոր", "Նոր Հաճն"];
    const images = [
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778660910917--0.5990204695636232image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1759149473223--0.33907271602966693image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778744544176--0.9742892469611801image_optimized.webp&w=3840&q=75"
    ];
    return {
      id: i + 1,
      location: locations[i % locations.length],
      capacity: ((i % 4) + 1) * 6,
      priceValue: (i % 5 + 2) * 20000,
      rating: i % 2 === 0 ? 5 : null,
      image: images[i % images.length]
    };
  });

  const basePrice = house.price || 80000;
  const basePriceOvernight = basePrice + 20000;
  const currentCurrency = currencies[selectedCurrencyId];
  const activePrice = selectedCurrencyId === 0 ? basePrice : Math.round(basePrice / currentCurrency.rate);
  const activePriceOvernight = selectedCurrencyId === 0 ? basePriceOvernight : Math.round(basePriceOvernight / currentCurrency.rate);

  const details = [
    { label: "Կոդ", value: `AM${house.id}` },
    { label: "Հասցե", value: house.title || "Օհանավան" },
    { label: "Գիշերակաց", value: "Այո" },
    { label: "Շինության մակերես", value: "120 քմ" },
    { label: "Ընդհանուր մակերես", value: "600 քմ" },
    { label: "Մարդկանց թույլատրելի քանակ", value: house.capacity || "25" },
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

  const categories = [
    { id: 'Սպասարկում', label: 'Սպասարկում', image: 'https://api.amaranoc.am/service.svg' },
    { id: 'Շոու', label: 'Շոու', image: 'https://api.amaranoc.am/services1.svg' },
    { id: 'Միջոցառումներ', label: 'Միջոցառումներ', image: 'https://api.amaranoc.am/services2.svg' },
    { id: 'Տեխնիկա', label: 'Տեխնիկա', image: 'https://api.amaranoc.am/services3.svg' },
  ];

  const servicesByTab = {
    'Սպասարկում': [
      { id: 1, title: 'Մատուցող', description: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։', price: '20,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331775249--0.16594454212797016image.webp&w=3840&q=75' }
    ]
  };

  const currentServices = servicesByTab[activeTab] || [];
  const allImages = house.images || [house.img];

  return (
    <div className="w-full bg-white font-sans relative pb-32">
      <style>{`
        @media (max-width: 400px) {
          .mobile-tight { padding-left: 15px !important; padding-right: 15px !important; }
          .mobile-text { font-size: 12px !important; }
          .mobile-title { font-size: 16px !important; }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mobile-tight">
        
        {/* --- 1. HOUSE DETAIL ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> {house.title}
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">⭐ 5</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք</span>
              <span className="text-2xl font-black text-orange-500">{activePrice.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            <div className="border-l border-gray-200 h-8 hidden sm:block"></div>
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Գիշերակացով</span>
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

        {/* --- 2. ՖՈՏՈԳԱԼԵՐԵԱ (ԲՈԼՈՐ ՆԿԱՐՆԵՐԻ ԿՈՃԱԿՈՎ) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8 relative">
          <div className="md:col-span-6 h-[300px] md:h-[500px] relative cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <img src={allImages[0]} alt={house.title} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[300px] md:h-[500px] relative">
            <img src={allImages[1] || allImages[0]} alt="Pool 1" className="w-full h-full object-cover cursor-pointer" onClick={() => setIsGalleryOpen(true)} />
            <img src={allImages[2] || allImages[0]} alt="Villa Exterior" className="w-full h-full object-cover cursor-pointer" onClick={() => setIsGalleryOpen(true)} />
            <img src={allImages[3] || allImages[0]} alt="A-Frame" className="w-full h-full object-cover cursor-pointer" onClick={() => setIsGalleryOpen(true)} />
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={allImages[4] || allImages[0]} alt="Interior" className="w-full h-full object-cover" />
              <button className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs px-4 py-2 rounded-lg shadow-md transition">Տեսնել բոլորը</button>
            </div>
          </div>
        </div>

        {/* --- 3. ԻՆՖՈ & ՕՐԱՑՈՒՅՑ --- */}
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((d) => (<div key={d} className="py-1 text-gray-300">{d}</div>))}
              <div className="py-1 text-gray-900 font-bold">16</div><div className="py-1 text-gray-900 font-bold">17</div><div className="py-1 text-gray-300">18</div>
              <div className="py-1 text-gray-900 font-bold">19</div><div className="py-1 text-gray-300">20</div><div className="py-1 text-gray-300">21</div>
              <div className="py-1 bg-gray-200 text-gray-900 font-black rounded-full w-7 h-7 mx-auto flex items-center justify-center">22</div>
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <button onClick={() => alert('Ամրագրումն ուղարկվեց!')} className="w-full py-3.5 bg-[#fca34d] text-white font-bold rounded-2xl hover:bg-orange-600 transition">
                Ամրագրել հիմա
              </button>
            </div>
          </div>
        </div>

        {/* --- 4. ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ --- */}
        <div className="border border-gray-100 bg-[#fefefe] rounded-3xl p-6 md:p-8 shadow-sm mb-12">
          <h3 className="text-base font-black text-gray-900 mb-3">Ընդհանուր նկարագրություն</h3>
          <p className="text-xs text-gray-700 leading-relaxed font-medium">
            Այս հիանալի ամառանոցը՝ {house.title}-ը, նախատեսված է ձեր ընտանեկան և ընկերական հավաքույթների համար։
          </p>
        </div>

        {/* --- 5. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm mb-12 bg-white">
          <h3 className="text-base font-black text-gray-900 mb-6">Առավելություններ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xl bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center border">{item.icon}</span>
                <span className="text-xs font-bold text-gray-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 6. ՔԱՐՏԵԶ --- */}
        <div className="w-full h-[350px] rounded-3xl overflow-hidden shadow-inner mb-12 border border-gray-200">
           <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12166.721458925567!2d44.3857313!3d40.382606!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!5e0!3m2!1shye!2sam!4v1710000000000" className="w-full h-full border-0 grayscale opacity-90" allowFullScreen="" loading="lazy"></iframe>
        </div>

        {/* --- 7. ԶԵՂՉԵՐԻ ԵՎ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՀԱՄԱԿԱՐԳ --- */}
        <div className="flex items-center justify-center gap-4 my-12">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <h2 className="text-3xl font-black text-[#1a202c] uppercase text-center">Հատուկ Զեղչեր</h2>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { discount: "-15%", title: "Զեղչ կախված ամրագրման օրերից", desc: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 5-ից ավել օրով։" },
            { discount: "-10%", title: "Reel-ի պատրաստում", desc: "Նկարահանիր վիդեո և ստացիր 10% զեղչ։" },
            { discount: "-5%", title: "3-րդ այցի զեղչ", desc: "Յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ։" }
          ].map((card, i) => (
            <div key={i} className="bg-gray-900 rounded-3xl p-6 text-white flex flex-col justify-between h-48 shadow-md">
              <span className="text-3xl font-black text-[#fca34d]">{card.discount}</span>
              <div>
                <h4 className="font-bold text-sm mb-1">{card.title}</h4>
                <p className="text-[11px] text-gray-300">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- ԲՈԼՈՐ ՆԿԱՐՆԵՐԻ ԲԱՑՎՈՂ ՊԱՏՈՒՀԱՆ (MODAL) --- */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 overflow-y-auto">
          <div className="flex justify-between items-center max-w-5xl mx-w-full w-full mx-auto mb-6 pt-4">
            <span className="text-white font-bold text-sm">Բոլոր լուսանկարները ({allImages.length})</span>
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full w-10 h-10 flex items-center justify-center font-bold"
            >
              ✕
            </button>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col gap-4 pb-12 w-full">
            {allImages.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`Slide ${index}`} className="w-full rounded-2xl shadow-lg object-cover max-h-[70vh]" />
            ))}
          </div>
        </div>
      )}

      {/* --- FLOATING STICKY NAV --- */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-4 md:gap-8 max-w-[95vw]">
        <Link to="/" className="text-white/80 font-bold text-[10px] whitespace-nowrap hover:text-white">Գլխավոր</Link>
        <span className="text-white/50 text-[10px]">|</span>
        <span className="text-white font-bold text-[10px] whitespace-nowrap">Կոդ: AM{house.id}</span>
        <button onClick={() => alert('Ամրագրումն ուղարկվեց!')} className="bg-[#f97316] text-white font-black text-[10px] px-6 py-2.5 rounded-full shadow-md whitespace-nowrap hover:bg-orange-600 transition">
          Ամրագրել
        </button>
      </div>
    </div>
  );
}