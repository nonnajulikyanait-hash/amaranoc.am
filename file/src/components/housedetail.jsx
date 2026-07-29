import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemsData } from './data'; // Ներմուծում ենք տվյալները

export default function HouseDetail() {
  const { id } = useParams(); // Վերցնում ենք id-ն URL-ից (օրինակ՝ /nkar1 -> id = 1)
  
  // Գտնում ենք տվյալների բազայից կոնկրետ ամառանոցը
  const house = itemsData.find((item) => item.id === Number(id));

  if (!house) {
    return <div className="text-center py-20 text-xl">Ամառանոցը չի գտնվել</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 mt-16">
      <Link to="/" className="text-orange-500 font-semibold mb-6 inline-block">← Վերադառնալ գլխավոր</Link>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6">
        <img src={house.img} alt={house.title} className="w-full h-96 object-cover rounded-xl mb-6" />
        <h1 className="text-3xl font-bold mb-2">📍 {house.title}</h1>
        <p className="text-gray-600 text-lg mb-4">Կատեգորիա: {house.category}</p>
        <p className="text-gray-600 text-lg mb-4">Տարողություն: {house.capacity} հոգի</p>
        <div className="text-2xl font-bold text-[#fca34d] mb-6">{house.price.toLocaleString('hy-AM')} ֏</div>
        {/* Այստեղ կարող ես ավելացնել ամրագրման կոճակը կամ այլ դետալներ */}
      </div>
    </div>
  );
}