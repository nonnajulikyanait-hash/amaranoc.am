import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------
// 1. FILTER SIDEBAR COMPONENT
// ----------------------------------------------------
export default function FilterSidebar() {
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
    <aside 
      className="w-full bg-white border border-gray-200 rounded-3xl p-5 shadow-sm font-sans flex flex-col"
      style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
    >
      
      {/* ՎԱՅՐ - Սահմանափակված բարձրությամբ և առանձին սքրոլով */}
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider m-0 mb-2">ՎԱՅՐ</h4>
        <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
          {[
            'Աշտարակ', 'Ապարան', 'Արզնի', 'Բազմաղբյուր', 'Բջնի', 
            'Գառնի', 'Դիլիջան', 'Դատել', 'Երևան', 'Ջրվեժ', 
            'Էջմիածին', 'Ծաղկաձոր', 'Ձորաղբյուր', 'Մրգաշեն', 
            'Նոր Հաճն', 'Պռոշյան', 'Ջերմուկ', 'Ստեփանավան', 'Օհանավան'
          ].map((item, i) => (
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
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-2">Արժեք</h4>
        <div className="flex gap-1 mb-2">
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
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-2">Մարդկանց թույլատրելի քանակը</h4>
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
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-2">Գիշերակացի առկայություն</h4>
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
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-2">Սենյակների քանակ</h4>
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
      <div className="border-b border-gray-100 pb-4 mb-4">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-2">Լողավազան</h4>
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
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-2">Առավելություններ</h4>
        <div className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
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