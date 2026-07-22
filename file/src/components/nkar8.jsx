import React, { useState } from 'react';

export default function Nkar8() {
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(0);

  // Արժույթների տվյալներ և մոտավոր փոխարժեքներ
  const currencies = [
    { id: 0, symbol: '֏', code: 'AMD', name: 'դրամ', rate: 1 },
    { id: 1, symbol: '$', code: 'USD', name: 'դոլար', rate: 388 },
    { id: 2, symbol: '€', code: 'EUR', name: 'եվրո', rate: 415 },
    { id: 3, symbol: '₽', code: 'RUB', name: 'ռուբլի', rate: 4.2 },
  ];

  // Հիմնական արժեքները դրամով
  const basePrice1 = 120000;
  const basePrice2 = 150000;

  const currentCurrency = currencies[selectedCurrencyId];

  // Ընթացիկ գների հաշվարկ
  const activePrice1 = selectedCurrencyId === 0 ? basePrice1 : Math.round(basePrice1 / currentCurrency.rate);
  const activePrice2 = selectedCurrencyId === 0 ? basePrice2 : Math.round(basePrice2 / currentCurrency.rate);

  // Հայտարարության տվյալների բազա
  const details = [
    { label: "Կոդ", value: "AM183" },
    { label: "Հասցե", value: "Օհանավան" },
    { label: "Գիշերակաց", value: "Այո" },
    { label: "Շինության մակերես", value: "120 քմ" },
    { label: "Ընդհանուր մակերես", value: "600 քմ" },
    { label: "Մարդկանց թույլատրելի քանակ", value: "25" },
    { label: "Մարդկանց թույլատրելի քանակը գիշերակացով", value: "6" },
    { label: "Սենյակների քանակ", value: "2" },
    { label: "Սանհանգույցների քանակ", value: "3+" },
    { label: "Լողավազան", value: "Փակ" },
  ];

  // Առավելությունների ցանկ
  const amenities = [
    { title: "Փակ տաղավար", icon: "🏢" },
    { title: "Մանղալ", icon: "🍖" },
    { title: "Ամառային խոհանոց", icon: "🍳" },
    { title: "Նվագարկիչ", icon: "🔊" },
    { title: "Ճոճանակ", icon: "🪑" },
    { title: "WiFi", icon: "📶" },
    { title: "Կանաչապատ այգի", icon: "🌳" },
    { title: "Սպասք", icon: "🍽️" },
    { title: "Լվացքի մեքենա", icon: "🧺" },
    { title: "Կայանատեղի", icon: "🅿️" },
    { title: "Վարսահարդարիչ", icon: "💨" },
    { title: "Սեղանի խաղեր", icon: "🎲" },
  ];

  return (
    <div className="w-full bg-white font-sans pb-32 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* --- 1. ԳԼԽԱՄԱՍ (TITLE & PRICES) --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> Էջմիածին
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">
              ⭐ 5
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեք {currentCurrency.id !== 0 && `(${currentCurrency.code})`}</span>
              <span className="text-2xl font-black text-orange-500">{activePrice1.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            <div className="border-l border-gray-200 h-8 hidden sm:block"></div>
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">Արժեքը գիշերակացով՝ {currentCurrency.id !== 0 && `(${currentCurrency.code})`}</span>
              <span className="text-2xl font-black text-orange-500">{activePrice2.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            
            {/* Դրամանիշերի փոխարկիչ */}
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200 gap-1">
              {currencies.map((currency) => (
                <button 
                  key={currency.id}
                  type="button"
                  onClick={() => setSelectedCurrencyId(currency.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${selectedCurrencyId === currency.id ? 'bg-[#0f172a] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {currency.symbol}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. ՖՈՏՈԳԱԼԵՐԵԱ (GALLERY) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8 relative">
          {/* Ձախի մեծ նկարը */}
          <div className="md:col-span-6 h-[300px] md:h-[500px] relative group">
            <img 
              src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1771598110451--0.4151095122496744image_optimized.webp&w=3840&q=75" 
              alt="Pool Large" 
              className="w-full h-full object-cover"
            />
            <button type="button" className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2.5 rounded-full hover:bg-white shadow-md transition">
              ❤️
            </button>
          </div>
          
          {/* Աջի 4 փոքր նկարները */}
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[300px] md:h-[500px] relative">
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1771598110416--0.648493938426135image_optimized.webp&w=3840&q=75" alt="Pool 1" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1771598110477--0.6707618720543413image_optimized.webp&w=3840&q=75" alt="Villa Exterior" className="w-full h-full object-cover" />
            <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1771598110507--0.7722638865250806image_optimized.webp&w=3840&q=75" alt="A-Frame House" className="w-full h-full object-cover" />
            <div className="relative w-full h-full">
              <img src="https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1771598110564--0.46152592829228745image_optimized.webp&w=3840&q=75" alt="Pool Interior" className="w-full h-full object-cover" />
              {/* Տեսնել բոլորը կոճակ */}
              <button type="button" className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs px-4 py-2 rounded-lg shadow-md transition">
                Տեսնել բոլորը
              </button>
            </div>
          </div>
        </div>

        {/* --- 3. ԻՆՖՈ ԲԼՈԿ & ՕՐԱՑՈՒՅՑ (INFO & CALENDAR) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Ձախ կողմ՝ Հայտարարության մասին */}
          <div className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-3">
              Հայտարարության մասին
            </h3>
            <div className="flex flex-col gap-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-bold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Աջ կողմ՝ Օրացույց */}
          <div className="lg:col-span-6 border border-gray-200 rounded-3xl overflow-hidden shadow-sm bg-white">
            <div className="p-4 bg-white">
              <h4 className="text-sm font-black text-gray-900 mb-3">Նշեք Ձեր ցանկալի օրերը</h4>
            </div>
            
            {/* Ամսվա վերնագիր */}
            <div className="bg-[#f97316] text-white flex justify-between items-center px-4 py-3 font-bold text-sm tracking-wide">
              <button type="button" className="hover:opacity-80">←</button>
              <span>ՀՈՒԼԻՍ</span>
              <button type="button" className="hover:opacity-80">→</button>
            </div>

            {/* Շաբաթվա օրեր */}
            <div className="grid grid-cols-7 text-center bg-white border-b border-gray-100 py-2 text-xs font-bold text-gray-700">
              <div>Երկ</div><div>Երք</div><div>Չոր</div><div>Հնգ</div><div>Ուրբ</div><div className="text-orange-500">Շաբ</div><div className="text-orange-500">Կիր</div>
            </div>

            {/* Օրացույցի ցանց (Days) */}
            <div className="grid grid-cols-7 text-center p-3 gap-y-3 text-xs font-semibold text-gray-400">
              {/* Դատարկ կամ պասիվ օրեր */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((d) => (
                <div key={d} className="py-1 text-gray-300 font-light">{d}</div>
              ))}
              {/* Ակտիվ/Ընտրված օրեր */}
              <div className="py-1 text-gray-900 font-bold">16</div>
              <div className="py-1 text-gray-900 font-bold">17</div>
              <div className="py-1 text-gray-300 font-light">18</div>
              <div className="py-1 text-gray-900 font-bold">19</div>
              <div className="py-1 text-gray-300 font-light">20</div>
              <div className="py-1 text-gray-300 font-light">21</div>
              {/* Կլորացված ընտրված օր */}
              <div className="py-1 bg-gray-200 text-gray-900 font-black rounded-full w-7 h-7 mx-auto flex items-center justify-center">22</div>
              <div className="py-1 text-gray-300 font-light">23</div>
              <div className="py-1 text-gray-900 font-bold">24</div>
              <div className="py-1 text-gray-900 font-bold">25</div>
              <div className="py-1 text-gray-900 font-bold">26</div>
              <div className="py-1 text-gray-300 font-light">27</div>
              <div className="py-1 text-gray-900 font-bold">28</div>
              <div className="py-1 text-gray-900 font-bold">29</div>
              <div className="py-1 text-gray-900 font-bold">30</div>
              <div className="py-1 text-gray-900 font-bold">1</div>
              <div className="py-1 text-gray-300 font-light">2</div>
              <div className="py-1 text-gray-900 font-bold">3</div>
              <div className="py-1 text-gray-900 font-bold">4</div>
              <div className="py-1 text-gray-300 font-light">5</div>
            </div>
          </div>

        </div>

        {/* --- 4. ԸՆԴՀԱՆՈՒՐ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ (DESCRIPTION) --- */}
        <div className="border border-gray-100 bg-[#fefefe] rounded-3xl p-6 md:p-8 shadow-sm mb-12 flex flex-col gap-6">
          <div>
            <h3 className="text-base font-black text-gray-900 mb-3">Ընդհանուր նկարագրություն</h3>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              Մենք վստահ էինք, որ քո վերջին ընտրությունը հենց սա է լինելու։ Իդեալական ճաշակը ոչ ոքի աչքից չէր կարող վրիպել։ Կտեսնես՝ հյուրերդ ինչքան են գովելու քեզ հենց այս ընտրության համար։
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-900 mb-2">Տնակում առկա է՝</h4>
            <ul className="text-xs text-gray-700 space-y-1.5 font-medium pl-1">
              <li>• Փակ լողավազան (4x5.5)</li>
              <li>• Տաղավար՝ նախատեսված մինչև 25 անձի համար</li>
              <li>• 2 ընդարձակ ննջասենյակ և 1 հարմարավետ հյուրասենյակ</li>
              <li>• 2 լիարժեք կահավորված խոհանոց</li>
              <li>• Հեռուստացույց</li>
              <li>• Սառնարան</li>
              <li>• Մշտական սառը և տաք ջուր</li>
              <li>• Մանղալ</li>
              <li>• Սպասք</li>
              <li>• Ճոճանակ՝ բացօթյա հանգստի համար</li>
              <li>• Տեսարան դեպի Արա լեռը</li>
            </ul>
          </div>

          <p className="text-xs font-black text-red-600 bg-red-50/50 py-2 px-3 rounded-lg border border-red-100 inline-block self-start">
            Խնդրում ենք նկատի ունենալ՝ տարածքում DJ ծառայությունը չի թույլատրվում
          </p>

          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-black text-gray-900 mb-2">Վարձակալության արժեքներն են՝</h4>
            <p className="text-xs font-bold text-gray-800 mb-1">Առանձնատան արժեքը երկուշաբթի - ուրբաթ</p>
            <ul className="text-xs text-gray-600 space-y-1 pl-2 mb-3">
              <li>• Առանց գիշերակացի - 80,000 դրամ/օր</li>
              <li>• Գիշերակացով - 100,000 դրամ/օր</li>
            </ul>
            
            <p className="text-xs font-bold text-gray-800 mb-1">Առանձնատան արժեքը շաբաթ - կիրակի</p>
            <ul className="text-xs text-gray-600 space-y-1 pl-2">
              <li>• Առանց գիշերակացի - 100,000 դրամ/օր</li>
              <li>• Գիշերակացով - 120,000 դրամ/օր</li>
            </ul>
          </div>

          <p className="text-xs font-black text-gray-900 border-l-2 border-amber-500 pl-3 py-1 bg-amber-50/30">
            Գիշերակացի հնարավորություն՝ 4-6 անձի համար։
          </p>

          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-black text-gray-900 mb-2">Մուտքի և ելքի ժամանակացույց՝</h4>
            <p className="text-xs text-gray-700 font-semibold space-y-1">
              <span className="block">Մուտք՝ 14:00</span>
              <span className="block">Ելք՝ 23:00</span>
              <span className="block text-gray-500 font-normal">Գիշերակացի դեպքում ելք՝ 12:00</span>
            </p>
          </div>

          <p className="text-xs text-gray-600 italic leading-relaxed font-medium">
            Տարածքը համատեղում է պարզությունը, հարմարավետությունը և բնության հանգստացնող ներկայությունը։ Եթե ուզում եք օրվա ընթացքում պարզապես լավ զգալ ձեզ՝ այս տունը կդառնա ձեր լավագույն ընտրությունը։
            <br />
            <span className="font-bold text-gray-900 non-italic block mt-2">Ամրագրման կամ մանրամասների համար՝ կապ հաստատեք մեզ հետ։</span>
          </p>
        </div>

        {/* --- 5. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ (AMENITIES) --- */}
        <div className="border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm mb-12 bg-white">
          <h3 className="text-base font-black text-gray-900 mb-6">Առավելություններ</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xl bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                  {item.icon}
                </span>
                <span className="text-xs font-bold text-gray-800">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 6. ՔԱՐՏԵԶ (MAP SECTION) --- */}
        <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden relative shadow-inner mb-12 border border-gray-200">
          <div className="w-full h-full bg-[#3d6849]/20 absolute inset-0 pointer-events-none z-10"></div>
          {/* Իմիտացիոն քարտեզի ֆոնային նկար */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12166.721458925567!2d44.3857313!3d40.382606!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!5e0!3m2!1shye!2sam!4v1710000000000" 
            className="w-full h-full border-0 grayscale opacity-90"
            allowFullScreen="" 
            loading="lazy"
            title="Location Map"
          ></iframe>
          
          {/* Քարտեզի վրայի գնային պիտակները (Pins) */}
          <div className="absolute top-1/3 left-1/4 z-20 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-gray-100 font-black text-xs text-gray-900 flex flex-col items-center">
            <span className="text-orange-500 font-bold text-[10px]">80,000֏</span>
          </div>
          <div className="absolute top-1/2 left-1/2 z-20 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-gray-100 font-black text-xs text-gray-900 flex flex-col items-center">
            <span className="text-orange-500 font-bold text-[10px]">80,000֏</span>
          </div>
          <div className="absolute bottom-1/4 right-1/3 z-20 bg-[#0f172a] text-white px-3 py-1.5 rounded-xl shadow-lg border border-gray-800 font-black text-xs flex flex-col items-center">
            <span className="text-white font-bold text-[10px]">60,000֏</span>
          </div>
        </div>

        {/* --- 7. ԿԱՐԾԻՔՆԵՐ (REVIEWS) --- */}
        <div className="w-full bg-white py-8 border-t border-gray-100">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest text-center">
              Կարծիքներ
            </h2>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          <div className="max-w-2xl bg-white p-2 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                👤
              </div>
              <span className="font-bold text-sm text-gray-900">Armen</span>
            </div>
            
            <div className="flex gap-0.5 mb-2 text-orange-400 text-sm">
              ⭐⭐⭐⭐⭐
            </div>
            
            <p className="text-xs text-gray-700 font-medium leading-relaxed text-left">
              և տնակից և լողավազանից բացվում էր հիանալի տեսարան: Շատ լավ տնակ է և ես մյուս անգամ նորից այստեղ եմ գալու։ Բոլորիդ խորհուրդ եմ տալիս:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-6 pl-2">
            <button type="button" className="px-8 py-3 bg-[#f59e0b] hover:bg-orange-500 text-white font-bold text-sm rounded-full shadow-sm transition">
              Թողնել կարծիք
            </button>
            <button type="button" className="text-gray-900 hover:text-gray-600 font-bold text-sm transition">
              Տեսնել բոլորը
            </button>
          </div>
        </div>

      </div>

      {/* --- 8. FLOATING STICKY NAVIGATION BAR (BOTTOM PANEL) --- */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-6 md:gap-8 max-w-[90vw] sm:max-w-xl">
        <button type="button" className="text-white/80 hover:text-white font-bold text-xs whitespace-nowrap transition">Նկարներ</button>
        <button type="button" className="text-white/80 hover:text-white font-bold text-xs whitespace-nowrap transition">Հայտարարության մասին</button>
        <button type="button" className="text-white/80 hover:text-white font-bold text-xs whitespace-nowrap transition">Քարտեզ</button>
        <button type="button" className="text-white/80 hover:text-white font-bold text-xs whitespace-nowrap transition">Կարծիքներ</button>
        <button type="button" className="bg-[#f97316] hover:bg-orange-600 text-white font-black text-xs px-6 py-2.5 rounded-full shadow-md transition whitespace-nowrap">
          Ամրագրել
        </button>
      </div>

    </div>
  );
}