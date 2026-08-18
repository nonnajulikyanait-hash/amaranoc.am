import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CombinedPage() {
  // Zexcher վիճակներ
  const [currency, setCurrency] = useState('AMD');
  const [priceRange, setPriceRange] = useState(400000);
  const [visibleCount, setVisibleCount] = useState(9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGiftAmount, setSelectedGiftAmount] = useState('80,000 ֏');

  // Carayutyun վիճակներ
  const [activeTab, setActiveTab] = useState('Սպասարկում');
  const [selectedService, setSelectedService] = useState(null);

  // Փոխարժեքներ
  const exchangeRates = {
    AMD: 1,
    USD: 0.0026,
    EUR: 0.0024,
    RUB: 0.24
  };

  const currencySymbols = {
    AMD: '֏',
    USD: '$',
    EUR: '€',
    RUB: '₽'
  };

  const formatPrice = (basePriceAMD) => {
    const converted = basePriceAMD * exchangeRates[currency];
    return `${Math.round(converted).toLocaleString()} ${currencySymbols[currency]}`;
  };

  const hotOffers = Array.from({ length: 34 }, (_, i) => {
    const locations = ["Դիլիջան", "Բջնի", "Աշտարակ", "Ծաղկաձոր", "Նոր Հաճն"];
    const images = [
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778660910917--0.5990204695636232image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1759149473223--0.33907271602966693image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1778744544176--0.9742892469611801image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1764083598180--0.6582491079586374image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1762686772282--0.7753343924665224image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1758095203425--0.034694092059661896image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1763196873802--0.32875657677659165image_optimized.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1705829500856--0.9156560389221753image.webp&w=3840&q=75",
      "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1772031992147--0.08273550679993247image_optimized.webp&w=3840&q=75",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
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

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, hotOffers.length));
  };

  const categories = [
    { id: 'Սպասարկում', label: 'Սպասարկում', image: 'https://api.amaranoc.am/service.svg' },
    { id: 'Շոու', label: 'Շոու', image: 'https://api.amaranoc.am/services1.svg' },
    { id: 'Միջոցառումներ', label: 'Միջոցառումներ', image: 'https://api.amaranoc.am/services2.svg' },
    { id: 'Տեխնիկա', label: 'Տեխնիկա', image: 'https://api.amaranoc.am/services3.svg' },
    { id: 'Օրավարձով գույք', label: 'Օրավարձով գույք', image: 'https://api.amaranoc.am/services4.svg' },
    { id: 'Նկարահանում', label: 'Նկարահանում', image: 'https://api.amaranoc.am/services5.svg' },
    { id: 'Ուղևորափոխադրում', label: 'Ուղևորափոխադրում', image: 'https://api.amaranoc.am/services6.svg' },
  ];

  const servicesByTab = {
    'Սպասարկում': [
      { id: 1, title: 'Մատուցող', description: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։', fullDescription: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։ Ձեր միջոցառման կազմակերպման գործում Ձեզ կօգնեն մեր փորձառու մատուցողները:', price: '20,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331775249--0.16594454212797016image.webp&w=3840&q=75' },
      { id: 2, title: 'Բարմեն', description: 'Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։', fullDescription: 'Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։', price: '25,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724330468263--0.5829426973721912image.webp&w=3840&q=75' },
      { id: 3, title: 'Խոհարար', description: 'Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։', fullDescription: 'Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։', price: '35,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331582281--0.8016246618454268image.webp&w=3840&q=75' },
    ],
    'Շոու': [
      { id: 10, title: 'Դի-Ջեյ', description: 'Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն են։', fullDescription: 'Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ։', price: '50,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724333364490--0.6874775885987816image.webp&w=1920&q=75' },
      { id: 11, title: 'Երգիչ', description: 'Amaranoc.am ի երգիչները կստեղծեն յուրահատուկ մթնոլորտ։', fullDescription: 'Amaranoc.am ի երգիչները, իրենց զարմանալի ձայնով և տաղանդով, կստեղծեն յուրահատուկ մթնոլորտ։', price: '150,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724334734516--0.3032056818160267image.webp&w=1920&q=75' },
    ],
    'Միջոցառումներ': [
      { id: 17, title: 'Նշանադրության կազմակերպում', description: 'Կազմակերպում ենք նշանադրության արարողություն։', fullDescription: 'Մեր ընկերությունը կազմակերպում է նշանադրության արարողություն, որը ստեղծում է կախարդական պահեր։', price: '500,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724354544378--0.6598089632874184image.webp&w=1920&q=75' },
    ],
    'Տեխնիկա': [
      { id: 22, title: 'Ծանր ծուխ', description: 'Լավագույն ծանր ծուխը ձեր միջոցառման համար։', fullDescription: 'Լավագույն ծանր ծուխը, որը ձեր միջոցառումն կդարձնի էլ ավելի գեղեցիկ և հիշարժան։', price: '30,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725722472736--0.09950637526125772image.webp&w=1920&q=75' },
    ],
    'Օրավարձով գույք': [
      { id: 28, title: 'Սեղան և աթոռներ', description: 'Բարձր որակի սեղաններ և աթոռներ վարձակալությամբ։', fullDescription: 'Հնարավորություն է տալիս վարձակալել բարձր որակի սեղաններ և աթոռներ։', price: '5,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726042865918--0.08492032329777777image.webp&w=1920&q=75' },
    ],
    'Նկարահանում': [
      { id: 6, title: 'Ֆոտո Նկարահանում', description: 'Պրոֆեսիոնալ ֆոտո նկարահանման ծառայություն։', fullDescription: 'Մենք առաջարկում ենք պրոֆեսիոնալ ֆոտո նկարահանման ծառայություն փորձառու մասնագետների կողմից։', price: '20,000', image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045632835--0.6404655108118316image.webp&w=1920&q=75' },
    ],
    'Ուղևորափոխադրում': [
      { id: 9, title: 'Ուղևորափոխադրում', description: 'Բարձրակարգ փոխադրամիջոցներ ձեր հարմարավետության համար։', fullDescription: 'Մենք տրամադրում ենք բարձրակարգ փոխադրամիջոցներ՝ ապահովելով Ձեր հարմարավետությունն ու անվտանգությունը։', price: '20,000', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80' }
    ]
  };

  const currentServices = servicesByTab[activeTab] || [];

  return (
    <div className="w-full bg-white font-sans relative">
      <style>{`
        @media (max-width: 400px) {
          .mobile-tight-padding { padding-left: 10px !important; padding-right: 10px !important; }
          .mobile-font-small { font-size: 11px !important; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mobile-tight-padding">
        
        {/* --- ՍԵԿՑԻԱ 1. ՀԱՏՈՒԿ ԶԵՂՉԵՐ --- */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[200px] hidden sm:block"></div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a202c] tracking-wide uppercase text-center">
            Հատուկ Զեղչեր
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[200px] hidden sm:block"></div>
        </div>

        {/* ԶԵՂՉԻ ՔԱՐՏԵՐ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { discount: "-15%", title: "Զեղչ կախված ամրագրման օրերի քանակից", desc: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 5-ից մինչև 20 օր:", bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
            { discount: "-10%", title: "Ամենահայտնի Reel-ը սոցիալական հարթակում", desc: "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am-ի առանձնատներից մեկում և ստացիր 10% զեղչ։", bg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" },
            { discount: "-5%", title: "Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար", desc: "Իրականացրու բազմաթիվ առաջադրանքներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ։", bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" }
          ].map((card, i) => (
            <div key={i} className="relative h-64 rounded-3xl overflow-hidden shadow-md bg-cover bg-center flex flex-col justify-end p-5 text-white cursor-pointer" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url("${card.bg}")` }}>
              <div className="absolute top-4 left-5 text-4xl sm:text-5xl font-black text-white/90">{card.discount}</div>
              <div>
                <h3 className="font-bold text-sm mb-1 text-gray-100">{card.title}</h3>
                <p className="text-[11px] text-gray-300 leading-relaxed mobile-font-small">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- ՍԵԿՑԻԱ 2. ՆՎԵՐ ՔԱՐՏԵՐ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50/50 rounded-3xl p-6 sm:p-10 border border-gray-100 mb-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black text-[#1a202c] mb-4 uppercase tracking-wide leading-tight">
              Պատվիրի՛ր <span className="text-[#fca34d]">Նվեր Քարտ</span> <br /> Քո կամ ընկերներիդ համար
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mobile-font-small">
              Բաց մի թող մեր բացառիկ զեղչի քարտերը: Եթե պլանավորում ես քո հաջորդ արձակուրդը ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և ծառայությունների լայն տեսականիով: Ընտրիր զեղչի չափը քարտի վրա:
            </p>
          </div>

          <div className="lg:col-span-7 bg-gradient-to-br from-[#fca34d] to-[#e5923c] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between min-h-[280px]">
            <div className="flex flex-col items-center mt-2">
              <div className="text-white font-black tracking-widest text-lg">AMARAN<span className="border-b-2 border-white pb-0.5">O</span>C<span className="text-[10px] align-top">.AM</span></div>
              <span className="text-[9px] text-white/70 uppercase tracking-widest mt-0.5">by hasce.am</span>
            </div>
            <div className="grid grid-cols-3 gap-3 my-6">
              {["50,000 ֏", "60,000 ֏", "70,000 ֏", "80,000 ֏", "90,000 ֏", "100,000 ֏"].map((price) => (
                <button 
                  key={price} 
                  onClick={() => setSelectedGiftAmount(price)}
                  className={`border font-bold py-3 rounded-full transition-all text-sm
                  ${selectedGiftAmount === price 
                  ? 'bg-[#fca34d] text-white border-white shadow-lg' 
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'}`}
                >
                  {price}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#fca34d] hover:bg-[#1a202c] text-white text-xs font-bold px-8 py-2.5 rounded-full shadow-lg transition-all transform active:scale-95"
              >
                Պատվիրել
              </button>
            </div>
          </div>
        </div>

        {/* --- ՍԵԿՑԻԱ 3. ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ --- */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[300px] hidden sm:block"></div>
          <h2 className="text-3xl font-black text-[#1a202c] tracking-wide uppercase text-center whitespace-nowrap">
            Թեժ Առաջարկներ
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[300px] hidden sm:block"></div>
        </div>

        {/* ՖԻԼՏՐԻ ՊԱՆԵԼ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-500">Տարադրամ</span>
            <div className="flex items-center gap-2">
              {['AMD', 'USD', 'EUR', 'RUB'].map((code) => (
                <button key={code} onClick={() => setCurrency(code)} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all border ${currency === code ? 'bg-[#111827] text-white' : 'bg-white text-gray-700 border-gray-200'}`}>
                  {code === 'AMD' ? '֏' : code === 'USD' ? '$' : code === 'EUR' ? '€' : '₽'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-2xl flex flex-col gap-1 relative pt-4">
            <input type="range" min="0" max="400000" step="5000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#fca34d]" />
            <span className="absolute left-0 -top-2 bg-[#fca34d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">0 {currencySymbols[currency]}</span>
            <span className="absolute bg-[#fca34d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full transition-all" style={{ right: `${((400000 - priceRange) / 400000) * 100}%`, transform: 'translateX(50%)', top: '-8px' }}>{formatPrice(priceRange)}</span>
          </div>
        </div>

        {/* ՏՆԵՐԻ ՑՈՒՑԱԿ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {hotOffers.slice(0, visibleCount).map((house) => (
            <Link 
              to={`/nkar/${house.id}`}
              key={house.id} 
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative flex flex-col cursor-pointer"
            >
              <div 
                className="h-56 w-full bg-gray-200 bg-cover bg-center relative flex flex-col justify-between p-4" 
                style={{ backgroundImage: `url("${house.image}")` }}
              >
                <button 
                  onClick={(e) => { e.preventDefault(); }} 
                  className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-red-500 shadow-sm z-10 self-end transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                </button>
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1"><span>{house.location}</span></div>
                  <div className="flex items-center gap-1"><span>{house.capacity} հոգի</span></div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1 font-black text-base text-[#111827]"><span>{formatPrice(house.priceValue)}</span></div>
                  {house.rating && <div className="bg-[#fca34d] text-white text-[11px] font-bold px-2 py-0.5 rounded">{house.rating}</div>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < hotOffers.length && (
          <div className="flex justify-center mb-16">
            <button 
              onClick={handleShowMore}
              className="bg-[#fca34d] hover:bg-[#e5923c] text-white font-bold text-sm px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              Ցուցադրել ավելին
            </button>
          </div>
        )}

        {/* --- ՍԵԿՑԻԱ 4. ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ (CarayutyunPage) --- */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[200px] hidden sm:block"></div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a202c] tracking-wide uppercase text-center">
            Ծառայություններ
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[200px] hidden sm:block"></div>
        </div>

        <div className="relative flex items-center border-b border-gray-100 pb-4 mb-8">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-1 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center flex-col sm:flex-row gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-[#fff7ed] text-[#fca34d] border border-[#fca34d]/30 shadow-sm'
                    : 'bg-white text-gray-600 border border-transparent hover:border-gray-200'
                }`}
              >
                {cat.image ? (
                  <img src={cat.image} alt={cat.label} className="w-5 h-5 object-contain" />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-[10px]">◎</div>
                )}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {currentServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {currentServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[2rem] overflow-hidden group flex flex-col justify-between border border-gray-100 shadow-sm p-3">
                <div className="h-52 w-full rounded-[1.8rem] overflow-hidden relative shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="pt-4 px-2 pb-2 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-black text-lg text-[#1a202c] mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-1 font-black text-sm text-[#1a202c]">
                      <span>{service.price} ֏</span>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="border border-gray-200 text-gray-700 hover:bg-[#1a202c] hover:text-white hover:border-[#1a202c] text-[11px] font-bold px-5 py-2 rounded-full transition-all duration-200"
                    >
                      Ամրագրել
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400 text-sm mb-16">
            Այս կատեգորիայում ծառայություններ չկան
          </div>
        )}
      </div>

      {/* --- ՆՎԵՐ ՔԱՐՏԻ ՄՈԴԱԼ ՊԱՏՈՒՀԱՆ --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 transition-all">
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-gray-100">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-lg font-bold transition-colors"
            >
              ✕
            </button>
            <h2 className="text-xl font-black text-[#1a202c] mb-3">Նվեր քարտ</h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 mobile-font-small">
              Ուղարկեք նվեր քարտի գնման հայտ՝ մուտքագրելով Ձեր անունը և հեռախոսահամարը:
            </p>
            <div className="flex flex-col gap-4 mb-6">
              <input 
                type="text" 
                placeholder="Անուն" 
                className="w-full border border-gray-200 rounded-xl p-3.5 text-sm outline-none focus:border-[#fca34d] transition-all bg-gray-50/30" 
              />
              <div className="flex items-center border border-gray-200 rounded-xl p-3.5 bg-gray-50/30 focus-within:border-[#fca34d] transition-all">
                <span className="text-sm mr-2 flex items-center gap-1 text-gray-600 font-medium">🇦🇲 +374</span>
                <input type="tel" placeholder="Հեռախոսահամար" className="w-full text-sm outline-none bg-transparent" />
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <div className="border border-[#fca34d]/30 bg-[#fff7ed] text-[#fca34d] font-black text-sm px-5 py-2.5 rounded-xl shadow-sm">
                {selectedGiftAmount}
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-[#fca34d] hover:bg-[#e5923c] text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                Հաստատել
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- ԾԱՌԱՅՈՒԹՅԱՆ ՄՈԴԱԼ ՊԱՏՈՒՀԱՆ --- */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedService(null); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-xl font-black text-[#1a202c]">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                {selectedService.fullDescription || selectedService.description}
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-5 border-t border-gray-50">
              <div className="flex items-center gap-1 font-black text-lg text-[#1a202c]">
                <span>{selectedService.price} ֏</span>
              </div>

              <button
                onClick={() => {
                  alert(`Ամրագրվել է՝ ${selectedService.title}`);
                  setSelectedService(null);
                }}
                className="bg-[#fca34d] hover:bg-[#f59332] text-white font-black px-8 py-3 rounded-full transition-all duration-200 shadow-sm"
              >
                Ամրագրել
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ ԲԱԺԻՆ (CreateListingForm) --- */}
      <section 
        className="w-full flex justify-center items-center font-sans text-white box-border bg-no-repeat bg-center bg-cover relative"
        style={{ 
          padding: '150px 60px',
          backgroundImage: "url('https://amaranoc.am/images/footer/home-add-application.png')" 
        }}
      >
        <div 
          className="backdrop-blur-md rounded-2xl text-center box-border"
          style={{
            backgroundColor: 'rgba(25, 35, 30, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '50px 70px',
            maxWidth: '1100px',
            width: '100%'
          }}
        >
          <h2 
            className="font-bold tracking-wide m-0 text-white"
            style={{ fontSize: '32px', marginBottom: '20px' }}
          >
            ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ
          </h2>
          <p 
            className="m-0 font-light"
            style={{ fontSize: '15px', color: '#e2e8f0', marginBottom: '40px' }}
          >
            Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
          </p>
          
          <form className="flex gap-4 items-center flex-wrap" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Անուն Ազգանուն" 
              className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60" 
              style={{
                minWidth: '200px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '14px 24px',
                fontSize: '14px'
              }}
            />
            <input 
              type="tel" 
              placeholder="Հեռախոսահամար" 
              className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60" 
              style={{
                minWidth: '200px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '14px 24px',
                fontSize: '14px'
              }}
            />
            <input 
              type="email" 
              placeholder="Էլ. հասցե" 
              className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60" 
              style={{
                minWidth: '200px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '14px 24px',
                fontSize: '14px'
              }}
            />
            <button 
              type="submit" 
              className="text-white border-none rounded-full font-semibold cursor-pointer transition-colors whitespace-nowrap bg-[#ff9f43] hover:bg-[#f39c12]"
              style={{
                padding: '14px 35px',
                fontSize: '15px'
              }}
            >
              Ուղարկել
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER ԲԱԺԻՆ --- */}
      <footer 
        className="text-white text-center font-sans bg-no-repeat w-full"
        style={{
          backgroundColor: '#0b131f',
          backgroundImage: 'url("https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=3840&q=75")',
          backgroundPosition: 'bottom center',
          backgroundSize: 'contain',
          padding: '60px 20px 120px 20px',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="font-bold tracking-widest text-white"
            style={{ fontSize: '26px', marginBottom: '40px' }}
          >
            ԿՈՆՏԱԿՏՆԵՐ
          </h2>
          
          <div 
            className="flex justify-center items-center flex-wrap"
            style={{ gap: '25px', marginBottom: '35px' }}
          >
            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:041611611" target='_blank' rel="noreferrer"><span>041-611-611 / 044-611-611</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:amaranoc.info@gmail.com" target='_blank' rel="noreferrer"><span>AMARANOC.INFO@GMAIL.COM</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <a href="https://www.instagram.com/amaranoc.am/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank' rel="noreferrer"><span>AMARANOC.AM</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <a href="https://www.facebook.com/aamaranoc.am?mibextid=ZbWKwL" target='_blank' rel="noreferrer"><span>AMARANOC.AM</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>ԹՈՒՄԱՆՅԱՆ 5</span>
            </div>
          </div>

          <Link 
            to="/gaxtniutyun" 
            className="block no-underline text-slate-400 hover:text-white cursor-pointer transition-colors" 
            style={{ fontSize: '13px', marginBottom: '35px' }}
          >
            Գաղտնիության քաղաքականություն
          </Link>

          <p 
            className="text-slate-500 m-0 tracking-wide" 
            style={{ fontSize: '12px' }}
          >
            Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО
          </p>
        </div>
      </footer>
    </div>  
  );
}