import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useFavoritesStore from '../useFavourites.js';
import { useCategoryStore } from './buttons.jsx';

// Բոլոր 34 տվյալները
const itemsData = [
  { id: 1, title: "Դիլիջան", capacity: 20, price: 75000, category: "Առանձնատներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1762686772282--0.7753343924665224image_optimized.webp&w=1920&q=75" },
  { id: 2, title: "Նոր Հաճն", capacity: 25, price: 140000, category: "Frame houses", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1772031992147--0.08273550679993247image.webp&w=1920&q=75" },
  { id: 3, title: "Ապարան", capacity: 32, price: 250000, category: "Տնակներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1753798511041--0.09397230687990277image.webp&w=1920&q=75" },
  { id: 4, title: "Օհանավան", capacity: 40, price: 80000, category: "Փակ լողավազան", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768380706620--0.5416288751044531image.webp&w=1920&q=75" },
  { id: 5, title: "Աշտարակ", capacity: 25, price: 80000, category: "Աղմուկից հեռու", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1762686772282--0.7753343924665224image_optimized.webp&w=1920&q=75" },
  { id: 6, title: "Բջնի", capacity: 6, price: 45000, category: "Շքեղ տեսարան", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1759149473223--0.33907271602966693image.webp&w=1920&q=75" },
  { id: 7, title: "Ծաղկաձոր", capacity: 6, price: 40000, category: "Լճի ափին", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1762850175455--0.6550219483737489image.webp&w=1920&q=75" },
  { id: 8, title: "Ծաղկաձոր", capacity: 20, price: 80000, category: "Գետի ափին", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1774603454003--0.8626553444149481image.webp&w=3840&q=75" },
  { id: 9, title: "Արզնի", capacity: 25, price: 110000, category: "Տաղավար", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1782654562684--0.5493589756678223image_optimized.webp&w=1920&q=75" },
  { id: 10, title: "Աշտարակ", capacity: 50, price: 100000, category: "Հյուրանոցներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780665123897--0.986580169471458image.webp&w=1920&q=75" },
  { id: 11, title: "Բջնի", capacity: 35, price: 70000, category: "Դիզայն", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780584030566--0.16507992429368068image.webp&w=1920&q=75" },
  { id: 12, title: "Դսեղ", capacity: 6, price: 30000, category: "Նոր", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780579836142--0.35994453056674125image.webp&w=1920&q=75" },
  { id: 13, title: "Երևան", capacity: 30, price: 65000, category: "Բնակարաններ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780572253850--0.6162792742324563image.webp&w=1920&q=75" },
  { id: 14, title: "Ձորաղբյուր", capacity: 60, price: 80000, category: "Առանձնատներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780571641642--0.5264571544763701image.webp&w=1920&q=75" },
  { id: 15, title: "Երևան", capacity: 50, price: 60000, category: "Frame houses", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780571005408--0.3583078540228426image.webp&w=1920&q=75" },
  { id: 16, title: "Բազմաղբյուր", capacity: 30, price: 60000, category: "Տնակներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780490099610--0.39916955699536416image.webp&w=1920&q=75" },
  { id: 17, title: "Մրգաշեն", capacity: 25, price: 60000, category: "Փակ լողավազան", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780488408586--0.12047368606039299image.webp&w=1920&q=75" },
  { id: 18, title: "Աշտարակ", capacity: 30, price: 50000, category: "Աղմուկից հեռու", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780482899066--0.22831331213105077image.webp&w=1920&q=75" },
  { id: 19, title: "Երևան", capacity: 35, price: 100000, category: "Շքեղ տեսարան", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780481805292--0.4533521837419521image.webp&w=1920&q=75" },
  { id: 20, title: "Աշտարակ", capacity: 50, price: 70000, category: "Լճի ափին", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780396212383--0.8471741427340775image.webp&w=1920&q=75" },
  { id: 21, title: "Էջմիածին", capacity: 50, price: 80000, category: "Գետի ափին", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780394902080--0.26123839973865315image.webp&w=1920&q=75" },
  { id: 22, title: "Զովունի", capacity: 25, price: 60000, category: "Տաղավար", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780394169046--0.5528120202926219image.webp&w=1920&q=75" },
  { id: 23, title: "Զովունի", capacity: 40, price: 80000, category: "Հյուրանոցներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780316761879--0.09344036513596854image.webp&w=1920&q=75" },
  { id: 24, title: "Աշտարակ", capacity: 50, price: 40000, category: "Դիզայն", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780315313824--0.47635231945569956image.webp&w=1920&q=75" },
  { id: 25, title: "Պտղնի", capacity: 50, price: 90000, category: "Նոր", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780150028365--0.9813322482667413image.webp&w=1920&q=75" },
  { id: 26, title: "Էջմիածին", capacity: 30, price: 70000, category: "Բնակարաններ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780149537744--0.5529180638181788image.webp&w=1920&q=75" },
  { id: 27, title: "Ջերմուկ", capacity: 9, price: 40000, category: "Առանձնատներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780147361149--0.3288212813557818image.webp&w=1920&q=75" },
  { id: 28, title: "Աշտարակ", capacity: 6, price: 35000, category: "Frame houses", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780146674085--0.26567996533342275image.webp&w=1920&q=75" },
  { id: 29, title: "Գառնի", capacity: 40, price: 60000, category: "Տնակներ", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780145895364--0.9918448887272826image.webp&w=1920&q=75" },
  { id: 30, title: "Պտղնի", capacity: 30, price: 55000, category: "Փակ լողավազան", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1780144361341--0.6661204408209285image.webp&w=1920&q=75" },
  { id: 31, title: "Երևան", capacity: 50, price: 100000, category: "Աղմուկից հեռու", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1779956104394--0.19763298363858928image.webp&w=1920&q=75" },
  { id: 32, title: "Զովունի", capacity: 45, price: 95000, category: "Շքեղ տեսարան", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1779955302689--0.20393337908067055image.webp&w=1920&q=75" },
  { id: 33, title: "Աշտարակ", capacity: 50, price: 100000, category: "Լճի ափին", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1779888652040--0.4179338075476664image.webp&w=1920&q=75" },
  { id: 34, title: "Զովունի", capacity: 50, price: 100000, category: "Գետի ափին", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1779887691391--0.7493015347747329image.webp&w=1920&q=75" },
];

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