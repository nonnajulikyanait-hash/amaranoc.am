import React from 'react';

export default function CreateListingForm() {
  return (
    <section 
      className="absolute w-full flex justify-center items-center font-sans text-white box-border bg-no-repeat bg-center bg-cover"
      style={{ 
        top: '4500px',
        left: '-1px',
        padding: '150px 60px',
        backgroundImage: "url('https://amaranoc.am/images/footer/home-add-application.png')" 
      }}
    >
      <div 
        className="backdrop-blur-md rounded-2xl text-center box-border"
        style={{
          backgroundColor: 'rgba(25, 35, 30, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '50px 70px',
          maxWidth: '1100px',
          width: '100%'
        }}
      >
        <h2 
          className="font-bold tracking-wide m-0 text-white"
          style={{ fontSize: '32px', marginBottom: '20px', color: 'white' }}
        >
          ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ
        </h2>
        <p 
          className="m-0 font-light"
          style={{ fontSize: '15px', color: '#e2e8f0', marginBottom: '40px' }}
        >
          Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
        </p>
        
        <form className="flex gap-4 items-center flex-wrap" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Անուն Ազգանուն" 
            className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60" 
            style={{
              minWidth: '200px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '14px 24px',
              fontSize: '14px'
            }}
          />
          <input 
            type="tel" 
            placeholder="Հեռախոսահամար" 
            className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60" 
            style={{
              minWidth: '200px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '14px 24px',
              fontSize: '14px'
            }}
          />
          <input 
            type="email" 
            placeholder="Էլ. հասցե" 
            className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60" 
            style={{
              minWidth: '200px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '14px 24px',
              fontSize: '14px'
            }}
          />
          <button 
            type="submit" 
            className="text-white border-none rounded-full font-semibold cursor-pointer transition-colors whitespace-nowrap bg-[#ff9f43] hover:bg-[#f39c12]"
            style={{
              padding: '14px 35px',
              fontSize: '15px'
            }}
          >
            Ուղարկել
          </button>
        </form>
      </div>
    </section>
  );
}