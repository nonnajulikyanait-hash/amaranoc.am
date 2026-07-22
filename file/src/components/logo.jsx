import React from 'react';
import { Link } from 'react-router-dom';
import useFavoritesStore from '../useFavourites.js'; 

export default function Logo() {
  const favoritesCount = useFavoritesStore((state) => state.favoritesCount);

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
          <img 
            src="https://amaranoc.am/images/logo.svg" 
            alt="Logo"
            className="logo-img"
            style={{ width: '160px', height: '44px' }} 
          />
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

          {/* Սրտիկներ */}
          <div className="relative flex items-center justify-center">
            <img 
              src="data:image/jpeg;base64,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" 
              className="w-5 h-5 cursor-pointer" 
              alt="Favorites"
            />

            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                {favoritesCount}
              </span>
            )}
          </div>
        </div>
      </div> 
    </>
  );
}