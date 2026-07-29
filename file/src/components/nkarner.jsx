import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useFavouritesStore from "../UseFavourites.js";
import { useCategoryStore } from './buttons.jsx';
import { itemsData } from './data'; 

const fmt = (n) => n.toLocaleString('hy-AM');

function Modal({ item, onClose }) {
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
            <p>👥 {item.capacity} հոգի</p>
            <p>🏠 {item.category}</p>
          </div>
          <div className="mt-6 text-2xl font-bold text-[#fca34d]">{fmt(item.price)} ֏</div>
          <Link to={`/nkar${item.id}`} className="mt-4 block w-full text-center py-3 bg-[#fca34d] text-white font-bold rounded-xl">Ամրագրել</Link>
        </div>
      </div>
    </div>
  );
}

export default function Nkarner() {
  const [favorites, setFavorites] = useState([]);
  const [selectedLocs, setSelectedLocs] = useState([]);
  const [modalItem, setModalItem] = useState(null);
  
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const allLocations = useMemo(() => [...new Set(itemsData.map((i) => i.title))].sort(), []);

  const filtered = useMemo(() => {
    return itemsData.filter((item) => {
      if (activeCategory === "Պահանջված" && !favorites.includes(item.id)) return false;
      if (activeCategory && activeCategory !== "Պահանջված" && item.category !== activeCategory) return false;
      if (selectedLocs.length > 0 && !selectedLocs.includes(item.title)) return false;
      return true;
    });
  }, [activeCategory, favorites, selectedLocs]);

  const toggleLocation = (loc) => {
    setSelectedLocs(prev => prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4 mt-16 flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-[220px] shrink-0">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">Վայր</h3>
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
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 cursor-pointer hover:shadow-lg transition-all" onClick={() => setModalItem(item)}>
              <div className="h-48 w-full bg-gray-200 rounded-xl mb-3 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
              </div>
              <div className="p-2">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <div className="font-bold text-[#fca34d] mt-1">{fmt(item.price)} ֏</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {modalItem && <Modal item={modalItem} onClose={() => setModalItem(null)} />}
    </div>
  );
}