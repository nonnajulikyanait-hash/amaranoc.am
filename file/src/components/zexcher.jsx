import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------
// 1. FILTER SIDEBAR COMPONENT
// ----------------------------------------------------
function FilterSidebar() {
  const [currency, setCurrency] = useState('֏');
  const [guestCount, setGuestCount] = useState(1);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [nightStay, setNightStay] = useState('Բոլորը');
  const [roomCount, setRoomCount] = useState('Բոլորը');
  const [bathCount, setBathCount] = useState('Բոլորը');
  const [poolType, setPoolType] = useState('Բոլորը');
  const [amenities, setAmenities] = useState([]);

  const toggleCheckboxItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <aside className="w-full bg-white border border-gray-200 rounded-3xl p-5 shadow-sm font-sans">
      
      {/* Տարածաշրջան */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Տարածաշրջան</h4>
        <div 
          className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
        >
          {['Դիլիջան 185', 'Ծաղկաձոր 111', 'Աշտարակ 46', 'Գառնի 43', 'Երևան 29'].map((item, i) => (
            <label key={i} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedRegions.includes(item)}
                onChange={() => toggleCheckboxItem(item, selectedRegions, setSelectedRegions)}
                className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-[#fca34d]" 
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Արժեք */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Արժեք</h4>
        <div className="flex gap-1 mb-3">
          {['֏', '$', '€', '₽'].map((curr) => (
            <button 
              key={curr}
              onClick={() => setCurrency(curr)}
              className={`flex-1 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                currency === curr 
                  ? 'bg-[#fca34d] border-[#fca34d] text-white' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {curr}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Սկսած" 
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-1 border border-gray-200 rounded-lg text-xs outline-none bg-gray-50 focus:bg-white focus:border-[#fca34d] transition-colors" 
          />
          <span className="text-gray-400 text-xs">-</span>
          <input 
            type="text" 
            placeholder="Մինչև" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-1 border border-gray-200 rounded-lg text-xs outline-none bg-gray-50 focus:bg-white focus:border-[#fca34d] transition-colors" 
          />
        </div>
      </div>

      {/* Մարդկանց թույլատրելի քանակը գիշերակացով */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Մարդկանց թույլատրելի քանակը</h4>
        <div className="flex items-center border border-gray-200 rounded-lg w-32 overflow-hidden bg-gray-50">
          <button 
            onClick={() => guestCount > 0 && setGuestCount(guestCount - 1)}
            className="w-10 h-8 flex items-center justify-center bg-transparent border-none text-gray-600 font-bold text-base hover:bg-gray-200 cursor-pointer transition-colors"
          >
            -
          </button>
          <input 
            type="text" 
            value={guestCount} 
            readOnly 
            className="w-12 h-8 text-center bg-transparent border-none outline-none text-xs font-semibold text-gray-800"
          />
          <button 
            onClick={() => setGuestCount(guestCount + 1)}
            className="w-10 h-8 flex items-center justify-center bg-transparent border-none text-gray-600 font-bold text-base hover:bg-gray-200 cursor-pointer transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Գիշերակացի առկայություն */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Գիշերակացի առկայություն</h4>
        <div className="flex gap-1">
          {['Բոլորը', 'Այո', 'Ոչ'].map((text) => (
            <button 
              key={text} 
              onClick={() => setNightStay(text)}
              className={`flex-1 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                nightStay === text 
                  ? 'bg-[#fca34d] border-[#fca34d] text-white' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      {/* Սենյակների քանակ */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Սենյակների քանակ</h4>
        <div className="grid grid-cols-3 gap-1">
          <button 
            onClick={() => setRoomCount('Բոլորը')}
            className={`col-span-3 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              roomCount === 'Բոլորը' ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Բոլորը
          </button>
          {['1', '2', '3', '4', '5', '6 և ավելի'].map((num) => (
            <button 
              key={num} 
              onClick={() => setRoomCount(num)}
              className={`py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                roomCount === num ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Լողավազան */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Լողավազան</h4>
        <div className="flex flex-col gap-1">
          <button 
            onClick={() => setPoolType('Բոլորը')}
            className={`w-full py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              poolType === 'Բոլորը' ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Բոլորը
          </button>
          <div className="grid grid-cols-2 gap-1 mt-1">
            {['Բաց', 'Փակ', 'Տաքացվող', 'Առանց'].map((type) => (
              <button 
                key={type} 
                onClick={() => setPoolType(type)}
                className={`py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors truncate px-2 ${
                  poolType === type ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Առավելություններ */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Առավելություններ</h4>
        <div 
          className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
        >
          {['Շոգեբաղնիք', 'Ջակուզի', 'Բիլիարդ', 'Սեղանի թենիս', 'Բացօթյա տաղավար', 'Փակ տաղավար', 'Մանղալ', 'Թոնիր'].map((item, i) => (
            <label key={i} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                checked={amenities.includes(item)}
                onChange={() => toggleCheckboxItem(item, amenities, setAmenities)}
                className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-[#fca34d]" 
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

    </aside>
  );
}


// ----------------------------------------------------
// 2. MAIN COMPONENT (ZEXCHER)
// ----------------------------------------------------
export default function Zexcher() {
  const [currency, setCurrency] = useState('AMD');
  const [visibleCount, setVisibleCount] = useState(9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGiftAmount, setSelectedGiftAmount] = useState('80,000 ֏');

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
    setVisibleCount((prev) => {
      const nextCount = Math.min(prev + 9, hotOffers.length);
      setTimeout(() => {
        window.scrollBy({ top: 500, behavior: 'smooth' });
      }, 50);
      return nextCount;
    });
  };

  return (
    <div className="w-full bg-white font-sans py-6 px-4 sm:px-6 lg:px-8 relative">
      <style>{`
        @media (max-width: 400px) {
          .mobile-tight-padding { padding-left: 10px !important; padding-right: 10px !important; }
          .mobile-font-small { font-size: 11px !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto mobile-tight-padding">
        
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

        {/* --- ՍԵԿՑԻԱ 3. ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ ԵՎ ՖԻԼՏՐ --- */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[300px] hidden sm:block"></div>
          <h2 className="text-3xl font-black text-[#1a202c] tracking-wide uppercase text-center whitespace-nowrap">
            Թեժ Առաջարկներ
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300 max-w-[300px] hidden sm:block"></div>
        </div>

        {/* ԳԼԽԱՎՈՐ GRID ԿԱՌՈՒՑՎԱԾՔ (Ձախից Ֆիլտր, Աջից Տներ) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Ձախ կողմում՝ Ֆիլտրի պանելը */}
          <div className="lg:col-span-1 sticky top-6">
            <FilterSidebar />
          </div>

          {/* Աջ կողմում՝ Տների ցուցակը և Արժույթի փոխարկիչը վերևում */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Վերին փոխարկիչ բար */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center justify-between gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-500">Տարադրամ</span>
                <div className="flex items-center gap-2">
                  {['AMD', 'USD', 'EUR', 'RUB'].map((code) => (
                    <button 
                      key={code} 
                      onClick={() => setCurrency(code)} 
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all border ${currency === code ? 'bg-[#111827] text-white' : 'bg-white text-gray-700 border-gray-200'}`}
                    >
                      {code === 'AMD' ? '֏' : code === 'USD' ? '$' : code === 'EUR' ? '€' : '₽'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Տների Ցանցը */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Ավելին կոճակ */}
            {visibleCount < hotOffers.length && (
              <div className="flex justify-center mt-6 mb-4">
                <button 
                  onClick={handleShowMore}
                  className="bg-[#fca34d] hover:bg-[#e5923c] text-white font-bold text-sm px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
                >
                  Ցուցադրել ավելին
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* --- ՄՈԴԱԼ ՊԱՏՈՒՀԱՆ --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 transition-all animate-fadeIn">
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
    </div>  
  );
}