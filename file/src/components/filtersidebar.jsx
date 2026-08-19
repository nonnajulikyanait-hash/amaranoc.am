import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../useLanguageStore'; // Ներմուծում ենք լեզվի store-ը

// ----------------------------------------------------
// 1. FILTER SIDEBAR COMPONENT
// ----------------------------------------------------
export default function FilterSidebar() {
  const { language } = useLanguageStore(); // Ստանում ենք ընթացիկ լեզուն

  const [currency, setCurrency] = useState('֏');
  const [guestCount, setGuestCount] = useState(1);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [nightStay, setNightStay] = useState('all');
  const [roomCount, setRoomCount] = useState('all');
  const [bathCount, setBathCount] = useState('all');
  const [poolType, setPoolType] = useState('all');
  const [amenities, setAmenities] = useState([]);

  // Բազմալեզու բառարան ֆիլտրի համար
  const translations = {
    hy: {
      location: "ՎԱՅՐ",
      price: "Արժեք",
      fromPlaceholder: "Սկսած",
      toPlaceholder: "Մինչև",
      guestCountTitle: "Մարդկանց թույլատրելի քանակը",
      nightStayTitle: "Գիշերակացի առկայություն",
      roomCountTitle: "Սենյակների քանակ",
      poolTitle: "Լողավազան",
      amenitiesTitle: "Առավելություններ",
      all: "Բոլորը",
      yes: "Այո",
      no: "Ոչ",
      moreThanSix: "6 և ավելի",
      pools: {
        open: "Բաց",
        closed: "Փակ",
        heated: "Տաքացվող",
        none: "Առանց"
      },
      regions: [
        'Աշտարակ', 'Ապարան', 'Արզնի', 'Բազմաղբյուր', 'Բջնի', 
        'Գառնի', 'Դիլիջան', 'Դատել', 'Երևան', 'Ջրվեժ', 
        'Էջմիածին', 'Ծաղկաձոր', 'Ձորաղբյուր', 'Մրգաշեն', 
        'Նոր Հաճն', 'Պռոշյան', 'Ջերմուկ', 'Ստեփանավան', 'Օհանավան'
      ],
      amenityList: [
        'Շոգեբաղնիք', 'Ջակուզի', 'Բիլիարդ', 'Սեղանի թենիս', 
        'Բացօթյա տաղավար', 'Փակ տաղավար', 'Մանղալ', 'Թոնիր'
      ]
    },
    ru: {
      location: "МЕСТОПОЛОЖЕНИЕ",
      price: "Цена",
      fromPlaceholder: "От",
      toPlaceholder: "До",
      guestCountTitle: "Допустимое количество гостей",
      nightStayTitle: "Наличие ночлега",
      roomCountTitle: "Количество комнат",
      poolTitle: "Бассейн",
      amenitiesTitle: "Удобства",
      all: "Все",
      yes: "Да",
      no: "Нет",
      moreThanSix: "6 и более",
      pools: {
        open: "Открытый",
        closed: "Закрытый",
        heated: "С подогревом",
        none: "Без бассейна"
      },
      regions: [
        'Аштарак', 'Апаран', 'Арзни', 'Базмахбюр', 'Бжни', 
        'Гарни', 'Дилижан', 'Дател', 'Ереван', 'Ջրվեж (Ереван/Район)', 
        'Эчмиадзин', 'Цахкадзор', 'Дзорагбюр', 'Мргашен', 
        'Нор Ачин', 'Прошян', 'Джермук', 'Степанаван', 'Оганаван'
      ],
      amenityList: [
        'Сауна', 'Джакузи', 'Бильярд', 'Настольный теннис', 
        'Открытая беседка', 'Закрытая беседка', 'Мангал', 'Тондыр'
      ]
    },
    en: {
      location: "LOCATION",
      price: "Price",
      fromPlaceholder: "From",
      toPlaceholder: "To",
      guestCountTitle: "Allowed Number of Guests",
      nightStayTitle: "Overnight Stay Availability",
      roomCountTitle: "Number of Rooms",
      poolTitle: "Swimming Pool",
      amenitiesTitle: "Amenities",
      all: "All",
      yes: "Yes",
      no: "No",
      moreThanSix: "6 and more",
      pools: {
        open: "Open",
        closed: "Indoor",
        heated: "Heated",
        none: "None"
      },
      regions: [
        'Ashtarak', 'Aparan', 'Arzni', 'Bazmaghbyur', 'Bjni', 
        'Garni', 'Dilijan', 'Datel', 'Yerevan', 'Jrvezh', 
        'Etchmiadzin', 'Tsaghkadzor', 'Dzoraghbyur', 'Mrgashen', 
        'Nor Hachn', 'Proshyan', 'Jermuk', 'Stepanavan', 'Ohanavan'
      ],
      amenityList: [
        'Sauna', 'Jacuzzi', 'Billiards', 'Table Tennis', 
        'Outdoor Gazebo', 'Indoor Gazebo', 'Mangal (BBQ)', 'Tonir'
      ]
    }
  };

  const t = translations[language] || translations.hy;

  const toggleCheckboxItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <aside 
      className="w-full bg-white border border-gray-200 rounded-3xl p-5 shadow-sm font-sans sticky top-6 overflow-y-auto"
      style={{ height: 'calc(100vh - 100px)', scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
    >
      
      {/* ՎԱՅՐ */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider m-0 mb-3">{t.location}</h4>
        <div className="flex flex-col gap-2.5 max-h-48 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
          {t.regions.map((item, i) => (
            <label key={i} className="flex items-center gap-2.5 text-xs text-[#2d3748] cursor-pointer hover:text-[#fca34d] transition-colors">
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
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">{t.price}</h4>
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
            placeholder={t.fromPlaceholder} 
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-1 border border-gray-200 rounded-lg text-xs outline-none bg-gray-50 focus:bg-white focus:border-[#fca34d] transition-colors" 
          />
          <span className="text-gray-400 text-xs">-</span>
          <input 
            type="text" 
            placeholder={t.toPlaceholder} 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-1 border border-gray-200 rounded-lg text-xs outline-none bg-gray-50 focus:bg-white focus:border-[#fca34d] transition-colors" 
          />
        </div>
      </div>

      {/* Մարդկանց թույլատրելի քանակը գիշերակացով */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">{t.guestCountTitle}</h4>
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
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">{t.nightStayTitle}</h4>
        <div className="flex gap-1">
          {[
            { id: 'all', label: t.all },
            { id: 'yes', label: t.yes },
            { id: 'no', label: t.no }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => setNightStay(item.id)}
              className={`flex-1 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                nightStay === item.id 
                  ? 'bg-[#fca34d] border-[#fca34d] text-white' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Սենյակների քանակ */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">{t.roomCountTitle}</h4>
        <div className="grid grid-cols-3 gap-1">
          <button 
            onClick={() => setRoomCount('all')}
            className={`col-span-3 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              roomCount === 'all' ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t.all}
          </button>
          {['1', '2', '3', '4', '5'].map((num) => (
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
          <button 
            onClick={() => setRoomCount('6+')}
            className={`py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors truncate px-1 ${
              roomCount === '6+' ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t.moreThanSix}
          </button>
        </div>
      </div>

      {/* Լողավազան */}
      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">{t.poolTitle}</h4>
        <div className="flex flex-col gap-1">
          <button 
            onClick={() => setPoolType('all')}
            className={`w-full py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              poolType === 'all' ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {t.all}
          </button>
          <div className="grid grid-cols-2 gap-1 mt-1">
            {[
              { id: 'open', label: t.pools.open },
              { id: 'closed', label: t.pools.closed },
              { id: 'heated', label: t.pools.heated },
              { id: 'none', label: t.pools.none }
            ].map((type) => (
              <button 
                key={type.id} 
                onClick={() => setPoolType(type.id)}
                className={`py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors truncate px-2 ${
                  poolType === type.id ? 'bg-[#fca34d] border-[#fca34d] text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Առավելություններ */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">{t.amenitiesTitle}</h4>
        <div className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
          {t.amenityList.map((item, i) => (
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