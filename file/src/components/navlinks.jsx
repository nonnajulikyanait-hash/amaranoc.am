import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavLinks() {
  const location = useLocation();

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-container {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            margin-left: 0 !important;
            justify-content: center !important;
            gap: 15px !important;
            padding: 10px 0;
            flex-wrap: wrap;
          }
          .nav-link { font-size: 11px !important; padding: 5px !important; }
        }
      `}</style>

      <nav 
        className="flex absolute items-center nav-container" 
        style={{ left: '250px', top: '28px', marginLeft: '100px', gap: '30px' }}
      >
        
        <Link 
          to="/"
          className={`m-0 font-semibold text-sm relative cursor-pointer no-underline py-2 nav-link ${
            location.pathname === '/' ? 'text-black' : 'text-[#222222] hover:text-black'
          }`}
        >
          Գլխավոր
          {location.pathname === '/' && (
            <span className="absolute bottom-0 left-0 w-full rounded-sm" style={{ height: '3px', backgroundColor: '#dfb15b' }} />
          )}
        </Link>
        
        <Link 
          to="/zexcher"
          className={`m-0 font-medium text-sm relative cursor-pointer no-underline py-2 nav-link ${
            location.pathname === '/zexcher' ? 'text-black font-semibold' : 'text-[#222222] hover:text-black'
          }`}
        >
          Զեղչեր
          {location.pathname === '/zexcher' && (
            <span className="absolute bottom-0 left-0 w-full rounded-sm" style={{ height: '3px', backgroundColor: '#dfb15b' }} />
          )}
        </Link>
        
        <Link 
          to="/carayutyun" 
          className={`m-0 font-medium text-sm relative cursor-pointer no-underline py-2 nav-link ${
            location.pathname === '/carayutyun' ? 'text-black font-semibold' : 'text-[#222222] hover:text-black'
          }`}
        >
          Ծառայություններ
          {location.pathname === '/carayutyun' && (
            <span className="absolute bottom-0 left-0 w-full rounded-sm" style={{ height: '3px', backgroundColor: '#dfb15b' }} />
          )}
        </Link>
        
        <Link 
          to="/mermasin" 
          className={`m-0 font-medium text-sm relative cursor-pointer no-underline py-2 nav-link ${
            location.pathname === '/mermasin' ? 'text-black font-semibold' : 'text-[#222222] hover:text-black'
          }`}
        >
          Մեր մասին
          {location.pathname === '/mermasin' && (
            <span className="absolute bottom-0 left-0 w-full rounded-sm" style={{ height: '3px', backgroundColor: '#dfb15b' }} />
          )}
        </Link>

      </nav>
    </>
  );
}