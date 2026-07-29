import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemsData } from '../data';

export default function HouseDetail() {
  const { id } = useParams();
  
  // Մաքրում ենք id-ն, որ ստանանք մաքուր թիվ (օրինակ՝ "nkar1" -> 1)
  const cleanId = Number(String(id).replace('nkar', ''));
  const house = itemsData.find((item) => item.id === cleanId);

  if (!house) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center mt-24">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ամառանոցը չի գտնվել</h2>
        <Link to="/" className="text-orange-500 font-semibold underline">← Վերադառնալ գլխավոր էջ</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mt-20 text-gray-800">
      {/* Վերին վերնագիր և գին */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Link to="/" className="text-orange-500 font-semibold mb-2 inline-block hover:underline">
            ← Վերադառնալ գլխավոր
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            📍 {house.title}
          </h1>
        </div>
        <div className="bg-gray-50 border border-gray-100 px-6 py-3 rounded-xl flex items-center gap-4">
          <div>
            <span className="text-xs text-gray-400 block uppercase font-semibold">Արժեք</span>
            <span className="text-2xl font-bold text-[#fca34d]">
              {house.price ? house.price.toLocaleString('hy-AM') : ''} ֏
            </span>
          </div>
        </div>
      </div>

      {/* Նկարների բլոկ (Գալերիա) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2">
          <img 
            src={house.img} 
            alt={house.title} 
            className="w-full h-[400px] md:h-[450px] object-cover rounded-2xl shadow-md" 
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <img 
            src={house.img} 
            alt={house.title} 
            className="w-full h-[190px] md:h-[215px] object-cover rounded-2xl shadow-md" 
          />
          <img 
            src={house.img} 
            alt={house.title} 
            className="w-full h-[190px] md:h-[215px] object-cover rounded-2xl shadow-md" 
          />
        </div>
      </div>

      {/* Բնութագրեր և Օրացույց/Ամրագրում */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Հիմնական տվյալներ */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 border-b pb-3">Հայտարարության մասին</h3>
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Կատեգորիա</span>
              <span className="font-semibold">{house.category}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Տարողություն</span>
              <span className="font-semibold">{house.capacity} հոգի</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Լողավազան</span>
              <span className="font-semibold">Առկա է</span>
            </div>
          </div>
        </div>

        {/* Ամրագրման հատված (Օրացույցի տեղը) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Ընտրեք Ձեր օրերը</h3>
            <div className="bg-orange-50 border border-orange-200 text-orange-700 p-4 rounded-xl text-center mb-6 text-sm font-medium">
              📅 Ամրագրման օրացույցը ակտիվ է
            </div>
          </div>
          <button 
            onClick={() => alert('Ամրագրումն հաջողությամբ ուղարկվեց!')}
            className="w-full py-4 bg-[#fca34d] text-white font-bold rounded-xl text-lg hover:bg-orange-600 transition-all shadow-md"
          >
            Ամրագրել հիմա
          </button>
        </div>
      </div>

      {/* Ընդհանուր նկարագրություն */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-bold mb-4">Ընդհանուր նկարագրություն</h3>
        <p className="text-gray-600 leading-relaxed">
          Այս հիանալի ամառանոցը նախատեսված է ձեր ընտանեկան, ընկերական կամ կորպորատիվ հավաքույթների համար: Այն ապահովված է բոլոր հարմարություններով՝ անմոռանալի հանգիստ անցկացնելու համար։
        </p>
      </div>
    </div>
  );
}