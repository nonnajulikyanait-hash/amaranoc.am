import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer 
      className="absolute text-white text-center font-sans bg-no-repeat"
      style={{
        backgroundColor: '#0b131f',
        backgroundImage: 'url("https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=3840&q=75")',
        backgroundPosition: 'bottom center',
        backgroundSize: 'contain',
        padding: '60px 20px 120px 20px',
        top: '5070px',
        width: '100%',
        height: '70%',
        right: '100px',
        left: '-1px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="font-bold tracking-widest text-white"
          style={{ fontSize: '26px', marginBottom: '40px', color: 'white',  }}
        >
          ԿՈՆՏԱԿՏՆԵՐ
        </h2>
        
        <div 
          className="flex justify-center items-center flex-wrap"
          style={{ gap: '25px', marginBottom: '35px' }}
        >
          <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
            <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:041-611-611/044-611-611" target='blank'><span>041-611-611 / 044-611-611</span></a>
          </div>

          <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
            <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:amaranoc.info@gmail.com" target='blank'><span>AMARANOC.INFO@GMAIL.COM</span></a>
          </div>

          <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
            <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <a href="https://www.instagram.com/amaranoc.am/?igshid=MzRlODBiNWFlZA%3D%3D" target='blank'><span>AMARANOC.AM</span></a>
          </div>

          <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
            <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            <a href="https://www.facebook.com/aamaranoc.am?mibextid=ZbWKwL" target='blank'><span>AMARANOC.AM</span></a>
          </div>

          <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
            <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>ԹՈՒՄԱՆՅԱՆ 5</span>
          </div>
        </div>

        <Link 
          to="/gaxtniutyun" 
          className="block no-underline text-slate-400 hover:text-white cursor-pointer transition-colors" 
          style={{ fontSize: '13px', marginBottom: '35px' }}
        >
          Գաղտնիության քաղաքականություն
        </Link>

        <p 
          className="text-slate-500 m-0 tracking-wide" 
          style={{ fontSize: '12px' }}
        >
          Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО
        </p>
      </div>
    </footer>
  );
}