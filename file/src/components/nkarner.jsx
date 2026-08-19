import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useFavouritesStore from "../UseFavourites.js";
import { useCategoryStore } from './buttons.jsx';
import { itemsData } from '../data';
import { useLanguageStore } from '../useLanguageStore'; // Ներմուծում ենք լեզվի store-ը

const fmt = (n) => n.toLocaleString('hy-AM');

function Modal({ item, onClose, t }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col sm:flex-row h-auto sm:h-56 shrink-0">
          <img src={item.img} className="w-full sm:w-2/3 h-48 sm:h-full object-cover" alt="" />
          <div className="hidden sm:flex flex-col w-1/3 gap-0.5">
            <img src={item.img} className="w-full h-1/2 object-cover" alt="" />
            <img src={item.img} className="w-full h-1/2 object-cover" alt="" />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">📍 {item.title}</h2>
            <button onClick={onClose} className="p-2 text-2xl">×</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-sm text-gray-500">
            <p>👥 {item.capacity} {t.persons}</p>
            <p>🏠 {item.category}</p>
          </div>
          <div className="mt-6 text-2xl font-bold text-[#fca34d]">{fmt(item.price)} ֏</div>
          <Link to={`/nkar/${item.id}`} className="mt-4 block w-full text-center py-3 bg-[#fca34d] text-white font-bold rounded-xl">{t.book}</Link>
        </div>
      </div>
    </div>
  );
}

export default function Nkarner() {
  const [selectedLocs, setSelectedLocs] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  
  // Zustand store-ից վերցնում ենք ֆավորիտների ցանկը և ֆունկցիաները
  const favourites = useFavouritesStore((state) => state.favourites || state.favorites || []);
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite || state.toggleFavorite || state.addFavourite);
  
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  
  // Ներմուծում ենք լեզվի վիճակը
  const { language } = useLanguageStore();

  // Բազմալեզու տեքստեր
  const translations = {
    hy: {
      locationTitle: "Վայր",
      persons: "հոգի",
      book: "Ամրագրել"
    },
    ru: {
      locationTitle: "Место",
      persons: "чел.",
      book: "Забронировать"
    },
    en: {
      locationTitle: "Location",
      persons: "persons",
      book: "Book Now"
    }
  };

  const t = translations[language] || translations.hy;

  const allLocations = useMemo(() => [...new Set(itemsData.map((i) => i.title))].sort(), []);

  // Ստուգում ենք՝ տվյալ իդ-ով ապրանքը ֆավորիտներում կա, թե ոչ
  const isFavourite = (id) => {
    return favourites.some((fav) => (typeof fav === 'object' ? fav.id === id : fav === id));
  };

  const filtered = useMemo(() => {
    return itemsData.filter((item) => {
      if (activeCategory === "Պահանջված" && !isFavourite(item.id)) return false;
      if (activeCategory && activeCategory !== "Պահանջված" && item.category !== activeCategory) return false;
      if (selectedLocs.length > 0 && !selectedLocs.includes(item.title)) return false;
      return true;
    });
  }, [activeCategory, favourites, selectedLocs]);

  const toggleLocation = (loc) => {
    setSelectedLocs(prev => prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4 mt-16 flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-[220px] shrink-0">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">{t.locationTitle}</h3>
        <div className="flex flex-wrap md:flex-col gap-2">
          {allLocations.map((loc) => (
            <label key={loc} className="flex items-center gap-2 text-sm text-[#2d3748] cursor-pointer hover:text-[#fca34d]">
              <input type="checkbox" checked={selectedLocs.includes(loc)} onChange={() => toggleLocation(loc)} className="accent-[#fca34d] w-4 h-4" />
              {loc}
            </label>
          ))}
        </div>
      </aside>

      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const liked = isFavourite(item.id);
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 cursor-pointer hover:shadow-lg transition-all relative" 
                onClick={() => setModalItem(item)}
              >
                <div className="h-48 w-full bg-gray-200 rounded-xl mb-3 overflow-hidden relative">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                  
                  {/* Սրտիկի կոճակը նկարի վրա */}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); // Որպեսզի սրտիկին սեղմելիս մոդալը չբացվի
                      toggleFavourite(item);
                    }}
                    className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md transition-transform active:scale-90 hover:bg-white"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-5 h-5 transition-colors duration-200 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-600 fill-transparent'}`} 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <div className="font-bold text-[#fca34d] mt-1">{fmt(item.price)} ֏</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} t={t} />}
    </div>
  );
}