import React, { useRef, useState, useEffect } from 'react';
import { create } from 'zustand';
import { Map, X } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Շտկում ենք Leaflet-ի մարկերի նկարի բագը React-ում
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const useCategoryStore = create((set) => ({
  activeCategory: null,
  setActiveCategory: (category) => set((state) => ({ activeCategory: state.activeCategory === category ? null : category })),
}));

const categories = [
  { name: "Առանձնատներ", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" /><rect x="10" y="13" width="4" height="7" /></svg> },
  { name: "Frame houses", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 3 21h18L12 3Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3v18M7 21l5-12M17 21l-5-12" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Տնակներ", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 11 12 5l8 6" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Փակ լողավազան", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 18c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 14c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 10V4M7 4l-2 2M7 4l2 2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Աղմուկից հեռու", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 19 9 9l4 6 3-4 5 8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7" cy="6" r="1.5" /></svg> },
  { name: "Շքեղ տեսարան", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 4 13h5v8h6v-8h5L12 3Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 9 14 5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Պահանջված", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c4-3 6-6 6-10a6 6 0 1 0-12 0c0 4 2 7 6 10Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16c1.5-1 2-2.2 2-3.6A2.4 2.4 0 0 0 12 10c-.5 1-1 1.6-1 2.4 0 1 .5 1.6 1 3.6Z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Լճի ափին", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="17.5" cy="6.5" r="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 14 8 8l4.5 5L16 9l5 5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 18c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3 1.5 4.5 0 3 1.5 4.5 0 3 1.5 4.5 0" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Գետի ափին", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10h18" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 10V6h14v4" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 10v4M12 10v4M17 10v4" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 19c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3 1.5 4.5 0 3 1.5 4.5 0 3 1.5 4.5 0" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Տաղավար", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 3 9h18L12 3Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 9v11M19 9v11" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 9v3a3 3 0 0 0 6 0V9" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Հյուրանոցներ", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21V8l9-5 9 5v13" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 21h18" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 11h.01M15 11h.01M12 8h.01" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Դիզայն", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 5.5l3 3" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Նոր", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v4M12 17v4M3 12h4M17 12h4" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4Z" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { name: "Բնակարաններ", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="3" width="9" height="18" rx="1" strokeLinecap="round" strokeLinejoin="round" /><rect x="13" y="8" width="7" height="13" rx="1" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 7h.01M10 7h.01M7 11h.01M10 11h.01M7 15h.01M10 15h.01" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 12h.01M16 16h.01" strokeLinecap="round" strokeLinejoin="round" /></svg> },
];

// Այս բաղադրիչն ապահովում է, որ քարտեզը ռեալ ժամանակում թարմացնի կենտրոնը, երբ լոկացիան ստացվի
function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 15);
    }
  }, [center, map]);
  return null;
}

export default function Buttons() {
  const scrollRef = useRef(null);
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const setActiveCategory = useCategoryStore((state) => state.setActiveCategory);

  const [userLocation, setUserLocation] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowOnSiteMap = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setUserLocation([lat, lon]);
          setLoading(false);
          setIsMapOpen(true);
        },
        (err) => {
          setLoading(false);
          alert("Խնդրում ենք թույլատրել տեղադրության (Location) հասանելիությունը բրաուզերում, որպեսզի կարողանանք ցույց տալ ձեր իրական վայրը:");
          console.error(err);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLoading(false);
      alert("Ձեր բրաուզերը չի աջակցում GPS / Geolocation:");
    }
  };

  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-4 pt-4 flex gap-3">
        <button 
          onClick={handleShowOnSiteMap} 
          disabled={loading}
          className="flex items-center gap-2 border border-gray-300 rounded-full pl-5 pr-4 py-3 text-sm font-semibold text-gray-800 hover:border-orange-500 transition-colors disabled:opacity-50"
        >
          <Map size={17} /> {loading ? "Որոնվում է իրական լոկացիան..." : "Քարտեզ"}
        </button>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 mt-4">
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <button onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })} className="w-9 h-9 border rounded-full">{"<"}</button>
          <div ref={scrollRef} className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-8">
            {categories.map((cat) => (
              <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`flex flex-col items-center gap-2 ${activeCategory === cat.name ? 'text-black' : 'text-gray-500'}`}>
                {cat.icon}
                <span className="text-sm whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
          <button onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })} className="w-9 h-9 border rounded-full">{">"}</button>
        </div>
      </div>

      {isMapOpen && userLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-3xl h-[480px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-gray-800">Ձեր իրական գտնվելու վայրը (Ռեալ ժամանակում)</h3>
              <button onClick={() => setIsMapOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 w-full relative">
              <MapContainer center={userLocation} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                {/* Ձեր բրաուզերից ստացված հենց այս պահի ռեալ կետը */}
                <Marker position={userLocation}>
                  <Popup>Դուք այստեղ եք (Իրական լոկացիա)</Popup>
                </Marker>

                <MapUpdater center={userLocation} />
              </MapContainer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}