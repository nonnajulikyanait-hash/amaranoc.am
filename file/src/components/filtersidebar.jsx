import React, { useState } from 'react';

export default function FilterSidebar() {
  const [guestCount, setGuestCount] = useState(1);

  return (
    <aside 
      className="w-72  bg-white border border-gray-200 rounded-2xl p-5 shadow-sm font-sans"
      style={{ top: '130px', left: '60px' }}
    >

      <div className="border-b border-gray-100 pb-5 mb-5 position: relative left: -150px"   >
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Տարածաշրջան</h4>
        <div 
          className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 transparent'
          }}
        >
          {['Դիլիջան 168', 'Ծաղկաձոր 114', 'Աշտարակ 29', 'Գառնի 29', 'Երևան 25'].map((item, i) => (
            <label key={i} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-amber-500" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Արժեք</h4>

        <div className="flex gap-1 mb-3">
          {['֏', '$', '€', '₽'].map((curr, idx) => (
            <button 
              key={curr} 
              className={`flex-1 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                idx === 0 ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {curr}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Inter" 
            className="w-full px-3 py-1 border border-gray-200 rounded-lg text-xs outline-none bg-gray-50 focus:bg-white focus:border-amber-500 transition-colors" 
          />
          <span className="text-gray-400 text-xs">-</span>
          <input 
            type="text" 
            placeholder="Inter" 
            className="w-full px-3 py-1 border border-gray-200 rounded-lg text-xs outline-none bg-gray-50 focus:bg-white focus:border-amber-500 transition-colors" 
          />
        </div>
      </div>

      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Մարդկանց թույլատրելի քանակ</h4>
        <div className="flex items-center border border-gray-200 rounded-lg w-32 overflow-hidden bg-gray-50">
          <button 
            onClick={() => guestCount > 1 && setGuestCount(guestCount - 1)}
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

      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Գիշերակացի առկայություն</h4>
        <div className="flex gap-1">
          {['Բոլորը', 'Այո', 'Ոչ'].map((text, idx) => (
            <button 
              key={text} 
              className={`flex-1 py-1 border rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                idx === 0 ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Սենյակների քանակ</h4>
        <div className="grid grid-cols-3 gap-1">
          <button className="col-span-3 py-1 border bg-amber-500 border-amber-500 text-white rounded-lg text-xs font-medium cursor-pointer">
            Բոլորը
          </button>
          {['1', '2', '3', '4', '5', '6 և ավելի'].map((num) => (
            <button 
              key={num} 
              className="py-1 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium cursor-pointer transition-colors"
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-100 pb-5 mb-5">
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Լողավազան</h4>
        <div className="flex flex-col gap-1">
          <button className="w-full py-1 border bg-amber-500 border-amber-500 text-white rounded-lg text-xs font-medium cursor-pointer">
            Բոլորը
          </button>
          <div className="grid grid-cols-2 gap-1">
            {['Բաց', 'Փակ', 'Տաքացվող', 'Առանց'].map((type) => (
              <button 
                key={type} 
                className="py-1 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-medium cursor-pointer transition-colors truncate"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-800 m-0 mb-3">Առավելություններ</h4>
        <div 
          className="flex flex-col gap-2 max-h-36 overflow-y-auto pr-1"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 transparent'
          }}
        >
          {['Շոգեբաղնիք', 'Ջակուզի', 'Բիլիարդ', 'Սեղանի թենիս', 'Բացօթյա տաղավար', 'Փակ տաղավար', 'Մանղալ', 'Թոնիր'].map((item, i) => (
            <label key={i} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-amber-500" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}