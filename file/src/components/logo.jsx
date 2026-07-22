import React from 'react';
import { Link } from 'react-router-dom';
import useFavouritesStore from "../UseFavourites.js";
import { useCategoryStore } from './buttons.jsx';

export default function Logo() {
  const favoritesCount = useFavouritesStore((state) => state.favoritesCount);
  const setActiveCategory = useCategoryStore((state) => state.setActiveCategory);

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .search-bar { width: 100px !important; }
          .logo-img { width: 120px !important; height: 35px !important; }
          .header-container { padding: 10px !important; gap: 10px !important; }
        }
      `}</style>

      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative header-container">
        
        {/* Լոգոյի բլոկ */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://amaranoc.am/images/logo.svg" 
              alt="Logo"
              className="logo-img cursor-pointer"
              style={{ width: '160px', height: '44px' }} 
            />
          </Link>
        </div>
        
        {/* Աջ կողմի բլոկ */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Որոնման դաշտ */}
          <div 
            className="flex items-center border border-gray-300 rounded-full bg-gray-50 px-3 py-1.5 search-bar"
            style={{ width: '180px' }}
          >
            <input 
              type="text" 
              placeholder="Որոնել..." 
              className="w-full bg-transparent border-none outline-none text-xs sm:text-sm pr-2"
            />
            <button className="text-gray-500 hover:text-gray-700 p-1 flex items-center justify-center">
              🔍
            </button>
          </div>

          {/* Լեզվի ընտրություն */}
          <img 
            src="https://amaranoc.am/images/header/globus.svg" 
            className="w-5 h-5 cursor-pointer hidden sm:block" 
            alt="Language"
          />
          
          {/* Անձնական էջի հղում */}
          <Link to="/grancvel" className="flex items-center">
            <img 
              src="https://amaranoc.am/images/header/user.svg" 
              className="cursor-pointer w-8 h-8 sm:w-[50px] sm:h-[50px]" 
              alt="User Profile"
            />
          </Link>

          {/* Սրտիկներ (Favorites) */}
          <Link 
            to="/nkarner" 
            onClick={() => setActiveCategory("Պահանջված")} 
            className="relative flex items-center justify-center p-1 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <svg className="w-6 h-6 text-gray-700 hover:text-[#fca34d]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>

            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                {favoritesCount}
              </span>
            )}
          </Link>
        </div>
      </div> 
    </>
  );
}