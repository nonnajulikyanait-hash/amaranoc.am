import React from 'react';
// Ներմուծում ենք Swiper-ի անհրաժեշտ մասերը
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Ներմուծում ենք Swiper-ի ոճերը (css)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HouseCard from './housecard'; // Քո սարքած քարտը

function HouseSlider({ houses = [] }) {
  // Եթե houses-ը դեռ չկա կամ դատարկ է, կարող ենք ցույց տալ բեռնման նշան կամ պարզապես դատարկություն
  if (!houses || houses.length === 0) {
    return <div className="text-center py-10 text-gray-500">Բեռնվում են հայտարարությունները...</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Թարմ հայտարարություններ</h2>
      
      <Swiper
        // Միացնում ենք սլաքները և ներքևի կետիկները
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Քարտերի միջև հեռավորությունը
        slidesPerView={1} // Քանի քարտ ցույց տա սկզբում (բջջայինի համար)
        navigation // Աջ ու ձախ սլաքներ
        pagination={{ clickable: true }} // Ներքևի կետիկները
        
        // Էկրանի չափերից կախված քանակի փոփոխություն (Responsive)
        breakpoints={{
          640: {
            slidesPerView: 2, // Պլանշետների համար՝ 2 հատ
          },
          1024: {
            slidesPerView: 3, // Նոթբուքերի համար՝ 3 հատ
          },
          1280: {
            slidesPerView: 4, // Մեծ էկրանների համար՝ 4 հատ
          },
        }}
        className="pb-10" // Ներքևից տեղ ենք թողնում կետիկների (pagination) համար
      >
        {/* Պտտվում ենք տվյալների զանգվածի վրայով և ամեն մեկի համար ստեղծում սլայդ */}
        {houses.map((house) => (
          <SwiperSlide key={house.id}>
            <HouseCard house={house} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HouseSlider;