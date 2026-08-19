import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { itemsData } from '../data';
import { useLanguageStore } from './useLanguageStore'; // Ներմուծում ենք լեզվի store-ը

export default function HouseDetail() {
  const { id } = useParams();
  
  // Ներմուծում ենք լեզուն store-ից
  const { language } = useLanguageStore();

  // Բազմալեզու բառարան
  const translations = {
    hy: {
      notFound: "Ամառանոցը չի գտնվել",
      searchId: "Փնտրվող ID",
      cleaned: "Մաքրված",
      backHome: "← Վերադառնալ գլխավոր էջ",
      priceLabel: "Արժեք",
      priceOvernightLabel: "Արժեքը գիշերակացով՝",
      seeAll: "Տեսնել բոլորը",
      aboutTitle: "Հայտարարության մասին",
      selectDaysTitle: "Նշեք Ձեր ցանկալի օրերը",
      month: "ՀՈՒԼԻՍ",
      days: ["Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շաբ", "Կիր"],
      bookNow: "Ամրագրել հիմա",
      alertBooked: "Ամրագրումն հաջողությամբ ուղարկվեց!",
      generalDescTitle: "Ընդհանուր նկարագրություն",
      generalDescText: "Այս հիանալի ամառանոցը նախատեսված է ձեր ընտանեկան, ընկերական կամ կորպորատիվ հավաքույթների համար: Այն ապահովված է բոլոր հարմարություններով՝ անմոռանալի հանգիստ անցկացնելու համար։",
      amenitiesInHouse: "Տնակում առկա է՝",
      amenitiesList: "• Փակ լողավազան, Մանղալ, ննջասենյակներ, խոհանոց, սպասք...",
      advantagesTitle: "Առավելություններ",
      reviewsTitle: "Կարծիքներ",
      leaveReview: "Թողնել կարծիք",
      postAdTitle: "ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ",
      postAdText: "Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ",
      namePlaceholder: "Անուն Ազգանուն",
      phonePlaceholder: "Հեռախոսահամար",
      emailPlaceholder: "Էլ. հասցե",
      sendButton: "Ուղարկել",
      contactsTitle: "ԿՈՆՏԱԿՏՆԵՐ",
      privacyPolicy: "Գաղտնիության քաղաքականություն",
      companyRights: "Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО",
      homeLink: "Գլխավոր",
      codeLabel: "Կոդ"
    },
    ru: {
      notFound: "Дача не найдена",
      searchId: "Искомый ID",
      cleaned: "Очищенный",
      backHome: "← Вернуться на главную страницу",
      priceLabel: "Цена",
      priceOvernightLabel: "Цена с ночевкой:",
      seeAll: "Смотреть все",
      aboutTitle: "Об объявлении",
      selectDaysTitle: "Выберите желаемые дни",
      month: "ИЮЛЬ",
      days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      bookNow: "Забронировать сейчас",
      alertBooked: "Бронирование успешно отправлено!",
      generalDescTitle: "Общее описание",
      generalDescText: "Эта прекрасная дача предназначена для ваших семейных, дружеских или корпоративных мероприятий. Она обеспечена всеми удобствами для незабываемого отдыха.",
      amenitiesInHouse: "В доме имеется:",
      amenitiesList: "• Крытый бассейн, мангал, спальни, кухня, посуда...",
      advantagesTitle: "Преимущества",
      reviewsTitle: "Отзывы",
      leaveReview: "Оставить отзыв",
      postAdTitle: "РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ",
      postAdText: "Введите ваши данные в указанные поля, и мы свяжемся с вами",
      namePlaceholder: "Имя Фамилия",
      phonePlaceholder: "Номер телефона",
      emailPlaceholder: "Эл. адрес",
      sendButton: "Отправить",
      contactsTitle: "КОНТАКТЫ",
      privacyPolicy: "Политика конфиденциальности",
      companyRights: "Амараноц ООО  |  Amaranoc LLC  |  Ամառանոց ՍՊԸ",
      homeLink: "Главная",
      codeLabel: "Код"
    },
    en: {
      notFound: "Summer house not found",
      searchId: "Searched ID",
      cleaned: "Cleaned",
      backHome: "← Back to home page",
      priceLabel: "Price",
      priceOvernightLabel: "Price with overnight stay:",
      seeAll: "See all",
      aboutTitle: "About the listing",
      selectDaysTitle: "Select your desired dates",
      month: "JULY",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      bookNow: "Book now",
      alertBooked: "Booking successfully sent!",
      generalDescTitle: "General description",
      generalDescText: "This wonderful summer house is designed for your family, friendly, or corporate gatherings. It is provided with all amenities for an unforgettable vacation.",
      amenitiesInHouse: "Available in the house:",
      amenitiesList: "• Indoor pool, BBQ, bedrooms, kitchen, tableware...",
      advantagesTitle: "Advantages",
      reviewsTitle: "Reviews",
      leaveReview: "Leave a review",
      postAdTitle: "POST A LISTING",
      postAdText: "Enter your details in the specified fields and we will contact you",
      namePlaceholder: "Full Name",
      phonePlaceholder: "Phone Number",
      emailPlaceholder: "Email address",
      sendButton: "Send",
      contactsTitle: "CONTACTS",
      privacyPolicy: "Privacy Policy",
      companyRights: "Amaranoc LLC  |  Ամառանոց ՍՊԸ  |  Амараноц ООО",
      homeLink: "Home",
      codeLabel: "Code"
    }
  };

  const t = translations[language] || translations.hy;

  const cleanId = Number(String(id || '').replace(/\D/g, ''));
  const house = itemsData.find((item) => Number(item.id) === cleanId);

  const [selectedCurrencyId, setSelectedCurrencyId] = useState(0);

  const currencies = [
    { id: 0, symbol: '֏', code: 'AMD', name: language === 'hy' ? 'դրամ' : language === 'ru' ? 'драм' : 'AMD', rate: 1 }, 
    { id: 1, symbol: '$', code: 'USD', name: language === 'hy' ? 'դոլար' : language === 'ru' ? 'доллар' : 'USD', rate: 388 }, 
    { id: 2, symbol: '€', code: 'EUR', name: language === 'hy' ? 'եվրո' : language === 'ru' ? 'евро' : 'EUR', rate: 415 }, 
    { id: 3, symbol: '₽', code: 'RUB', name: language === 'hy' ? 'ռուբլի' : language === 'ru' ? 'рубль' : 'RUB', rate: 4.2 }, 
  ];

  if (!house) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center mt-24 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">{t.notFound}</h2>
        <p className="text-gray-500 mb-4">{t.searchId}: {id} ({t.cleaned}: {cleanId})</p>
        <Link to="/" className="text-orange-500 font-semibold underline">{t.backHome}</Link>
      </div>
    );
  }

  const basePrice = house.price || 80000;
  const basePriceOvernight = basePrice + 20000;

  const currentCurrency = currencies[selectedCurrencyId];
  const activePrice = selectedCurrencyId === 0 ? basePrice : Math.round(basePrice / currentCurrency.rate);
  const activePriceOvernight = selectedCurrencyId === 0 ? basePriceOvernight : Math.round(basePriceOvernight / currentCurrency.rate);

  const details = [
    { label: t.codeLabel, value: `AM${house.id}` },
    { label: language === 'hy' ? "Հասցե" : language === 'ru' ? "Адрес" : "Address", value: house.title || "Օհանավան" },
    { label: language === 'hy' ? "Գիշերակաց" : language === 'ru' ? "Ночевка" : "Overnight", value: language === 'hy' ? "Այո" : language === 'ru' ? "Да" : "Yes" },
    { label: language === 'hy' ? "Շինության մակերես" : language === 'ru' ? "Площадь здания" : "Building Area", value: "120 քմ" },
    { label: language === 'hy' ? "Ընդհանուր մակերես" : language === 'ru' ? "Общая площадь" : "Total Area", value: "600 քմ" },
    { label: language === 'hy' ? "Մարդկանց թույլատրելի քանակ" : language === 'ru' ? "Допустимое количество людей" : "Allowed Capacity", value: house.capacity || "25" },
    { label: language === 'hy' ? "Մարդկանց թույլատրելի քանակը գիշերակացով" : language === 'ru' ? "Количество людей с ночевкой" : "Capacity with overnight", value: "6" },
    { label: language === 'hy' ? "Սենյակների քանակ" : language === 'ru' ? "Количество комнат" : "Rooms", value: "2" },
    { label: language === 'hy' ? "Սանհանգույցների քանակ" : language === 'ru' ? "Количество санузлов" : "Bathrooms", value: "3+" },
    { label: language === 'hy' ? "Լողավազան" : language === 'ru' ? "Бассейн" : "Pool", value: language === 'hy' ? "Փակ" : language === 'ru' ? "Крытый" : "Indoor" },
  ];

  const amenities = [
    { title: language === 'hy' ? "Փակ տաղավար" : language === 'ru' ? "Крытая беседка" : "Indoor gazebo", icon: "🏢" },
    { title: language === 'hy' ? "Մանղալ" : language === 'ru' ? "Мангал" : "BBQ", icon: "🍖" },
    { title: language === 'hy' ? "Ամառային խոհանոց" : language === 'ru' ? "Летняя кухня" : "Summer kitchen", icon: "🍳" },
    { title: language === 'hy' ? "Նվագարկիչ" : language === 'ru' ? "Музыкальный центр" : "Speaker", icon: "🔊" },
    { title: language === 'hy' ? "Ճոճանակ" : language === 'ru' ? "Качели" : "Swing", icon: "🪑" },
    { title: "WiFi", icon: "📶" },
    { title: language === 'hy' ? "Կանաչապատ այգի" : language === 'ru' ? "Зеленый сад" : "Green garden", icon: "🌳" },
    { title: language === 'hy' ? "Սպասք" : language === 'ru' ? "Посуда" : "Tableware", icon: "🍽️" },
    { title: language === 'hy' ? "Լվացքի մեքենա" : language === 'ru' ? "Стиральная машина" : "Washing machine", icon: "🧺" },
    { title: language === 'hy' ? "Կայանատեղի" : language === 'ru' ? "Парковка" : "Parking", icon: "🅿️" },
    { title: language === 'hy' ? "Վարսահարդարիչ" : language === 'ru' ? "Фен" : "Hairdryer", icon: "💨" },
    { title: language === 'hy' ? "Սեղանի խաղեր" : language === 'ru' ? "Настольные игры" : "Board games", icon: "🎲" },
  ];

  return (
    <div className="w-full bg-white font-sans min-h-screen flex flex-col">
      <style>{`
        @media (max-width: 400px) {
          .mobile-tight { padding-left: 15px !important; padding-right: 15px !important; }
          .mobile-text { font-size: 12px !important; }
          .mobile-title { font-size: 16px !important; }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mobile-tight w-full flex-grow">
        
        {/* --- 1. ԳԼԽԱՄԱՍ --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-2xl p-4 mb-6 gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-black text-gray-900">
              <span className="text-orange-500 text-2xl">📍</span> {house.title}
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full text-amber-600 font-bold text-sm">
              ⭐ 5
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">{t.priceLabel} ({currentCurrency.name === 'դրամ' || currentCurrency.name === 'драм' ? '' : currentCurrency.code})</span>
              <span className="text-2xl font-black text-orange-500">{activePrice.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            <div className="border-l border-gray-200 h-8 hidden sm:block"></div>
            <div>
              <span className="block text-xs text-gray-400 font-bold uppercase">{t.priceOvernightLabel}</span>
              <span className="text-2xl font-black text-orange-500">{activePriceOvernight.toLocaleString()}{currentCurrency.symbol}</span>
            </div>
            
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200 gap-1">
              {currencies.map((currency) => (
                <button 
                  key={currency.id}
                  onClick={() => setSelectedCurrencyId(currency.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${selectedCurrencyId === currency.id ? 'bg-[#0f172a] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {currency.symbol}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. ՖՈՏՈԳԱԼԵՐԵԱ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-3xl overflow-hidden mb-8 relative">
          <div className="md:col-span-6 h-[300px] md:h-[500px] relative group">
            <img src={house.images?.[0] || house.img} alt={house.title} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-3 h-[300px] md:h-[500px] relative">
            <img src={house.images?.[1] || house.img} alt="Pool 1" className="w-full h-full object-cover" />
            <img src={house.images?.[2] || house.img} alt="Villa Exterior" className="w-full h-full object-cover" />
            <img src={house.images?.[3] || house.img} alt="A-Frame House" className="w-full h-full object-cover" />
            <div className="relative w-full h-full">
              <img src={house.images?.[4] || house.images?.[0] || house.img} alt="Pool Interior" className="w-full h-full object-cover" />
              <button className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs px-4 py-2 rounded-lg shadow-md transition">{t.seeAll}</button>
            </div>
          </div>
        </div>

        {/* --- 3. ԻՆՖՈ ԲԼՈԿ & ՕՐԱՑՈՒՅՑ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-3">{t.aboutTitle}</h3>
            <div className="flex flex-col gap-4">
              {details.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">{item.label}</span>
                  <span className="text-gray-900 font-bold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 border border-gray-200 rounded-3xl overflow-hidden shadow-sm bg-white">
            <div className="p-4 bg-white"><h4 className="text-sm font-black text-gray-900 mb-3">{t.selectDaysTitle}</h4></div>
            <div className="bg-[#f97316] text-white flex justify-between items-center px-4 py-3 font-bold text-sm tracking-wide">
              <button>←</button><span>{t.month}</span><button>→</button>
            </div>
            <div className="grid grid-cols-7 text-center bg-white border-b border-gray-100 py-2 text-xs font-bold text-gray-700">
              {t.days.map((day, idx) => (
                <div key={idx} className={idx >= 5 ? "text-orange-500" : ""}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 text-center p-3 gap-y-3 text-xs font-semibold text-gray-400">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((d) => (<div key={d} className="py-1 text-gray-300 font-light">{d}</div>))}
              <div className="py-1 text-gray-900 font-bold">16</div><div className="py-1 text-gray-900 font-bold">17</div><div className="py-1 text-gray-300 font-light">18</div>
              <div className="py-1 text-gray-900 font-bold">19</div><div className="py-1 text-gray-300 font-light">20</div><div className="py-1 text-gray-300 font-light">21</div>
              <div className="py-1 bg-gray-200 text-gray-900 font-black rounded-full w-7 h-7 mx-auto flex items-center justify-center">22</div>
              <div className="py-1 text-gray-300 font-light">23</div><div className="py-1 text-gray-900 font-bold">24</div><div className="py-1 text-gray-900 font-bold">25</div><div className="py-1 text-gray-900 font-bold">26</div><div className="py-1 text-gray-300 font-light">27</div><div className="py-1 text-gray-900 font-bold">28</div><div className="py-1 text-gray-900 font-bold">29</div><div className="py-1 text-gray-900 font-bold">30</div><div className="py-1 text-gray-900 font-bold">1</div><div className="py-1 text-gray-300">2</div><div className="py-1 text-gray-900 font-bold">3</div><div className="py-1 text-gray-900 font-bold">4</div><div className="py-1 text-gray-300 font-light">5</div>
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <button 
                onClick={() => alert(t.alertBooked)}
                className="w-full py-3.5 bg-[#fca34d] text-white font-bold rounded-2xl text-base hover:bg-orange-600 transition-all shadow-md cursor-pointer"
              >
                {t.bookNow}
              </button>
            </div>
          </div>
        </div>

        {/* --- 4. ԸՆԴՀԱՆՈՒՐ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ --- */}
        <div className="border border-gray-100 bg-[#fefefe] rounded-3xl p-6 md:p-8 shadow-sm mb-12 flex flex-col gap-6">
          <div>
            <h3 className="text-base font-black text-gray-900 mb-3 mobile-title">{t.generalDescTitle}</h3>
            <p className="text-xs text-gray-700 leading-relaxed font-medium mobile-text">
              {t.generalDescText} ({house.title})
            </p>
          </div>
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-xs font-black text-gray-900 mb-2">{t.amenitiesInHouse}</h4>
            <ul className="text-xs text-gray-700 space-y-1.5 font-medium pl-1 mobile-text">
              <li>{t.amenitiesList}</li>
            </ul>
          </div>
        </div>

        {/* --- 5. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ --- */}
        <div className="border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm mb-12 bg-white">
          <h3 className="text-base font-black text-gray-900 mb-6 mobile-title">{t.advantagesTitle}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-xl bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">{item.icon}</span>
                <span className="text-xs font-bold text-gray-800 mobile-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 7. ՔԱՐՏԵԶ --- */}
        <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden relative shadow-inner mb-12 border border-gray-200">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12166.721458925567!2d44.3857313!3d40.382606!2m3!1f0!2f0!3f0!3m2!1i1020!2i768!4f13.1!5e0!3m2!1shye!2sam!4v1710000000000" className="w-full h-full border-0 grayscale opacity-90" allowFullScreen="" loading="lazy"></iframe>
        </div>

        {/* --- 8. ԿԱՐԾԻՔՆԵՐ --- */}
        <div className="w-full bg-white py-8 border-t border-gray-100 mb-6">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest text-center mobile-title">{t.reviewsTitle}</h2>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          <div className="max-w-2xl bg-white p-2 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">👤</div>
              <span className="font-bold text-sm text-gray-900">Armen</span>
            </div>
            <div className="flex gap-0.5 mb-2 text-orange-400 text-sm">⭐⭐⭐⭐⭐</div>
            <p className="text-xs text-gray-700 font-medium mobile-text">...</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6 mt-6">
            <button className="px-8 py-3 bg-[#f59e0b] hover:bg-orange-500 text-white font-bold text-sm rounded-full shadow-sm transition">{t.leaveReview}</button>
          </div>
        </div>

      </div>

      {/* --- ԱՎԵԼԱՑՆԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ --- */}
      <section 
        className="w-full flex justify-center items-center font-sans text-white box-border bg-no-repeat bg-center bg-cover py-20 px-6"
        style={{ backgroundImage: "url('https://amaranoc.am/images/footer/home-add-application.png')" }}
      >
        <div 
          className="backdrop-blur-md rounded-2xl text-center box-border p-10 md:p-14 max-w-4xl w-full"
          style={{ backgroundColor: 'rgba(25, 35, 30, 0.65)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
        >
          <h2 className="font-bold tracking-wide m-0 text-white text-2xl md:text-3xl mb-5">
            {t.postAdTitle}
          </h2>
          <p className="m-0 font-light text-sm md:text-base text-slate-200 mb-8">
            {t.postAdText}
          </p>
          
          <form className="flex gap-4 items-center flex-wrap justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder={t.namePlaceholder} 
              className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60 border border-white/40 px-6 py-3.5 text-sm min-w-[200px]" 
            />
            <input 
              type="tel" 
              placeholder={t.phonePlaceholder} 
              className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60 border border-white/40 px-6 py-3.5 text-sm min-w-[200px]" 
            />
            <input 
              type="email" 
              placeholder={t.emailPlaceholder} 
              className="flex-1 bg-transparent rounded-full text-white outline-none focus:border-white transition-colors placeholder:text-white/60 border border-white/40 px-6 py-3.5 text-sm min-w-[200px]" 
            />
            <button 
              type="submit" 
              className="text-white border-none rounded-full font-semibold cursor-pointer transition-colors whitespace-nowrap bg-[#ff9f43] hover:bg-[#f39c12] px-8 py-3.5 text-sm"
            >
              {t.sendButton}
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer 
        className="text-white text-center font-sans bg-no-repeat w-full bg-[#0b131f] py-16 px-6 border-t border-slate-800"
        style={{
          backgroundImage: 'url("https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=3840&q=75")',
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold tracking-widest text-white text-2xl mb-10">
            {t.contactsTitle}
          </h2>
          
          <div className="flex justify-center items-center flex-wrap gap-6 mb-8 text-slate-300 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:041-611-611" target='_blank' rel='noreferrer'><span>041-611-611 / 044-611-611</span></a>
            </div>

            <div className="flex items-center gap-2">
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:amaranoc.info@gmail.com" target='_blank' rel='noreferrer'><span>AMARANOC.INFO@GMAIL.COM</span></a>
            </div>

            <div className="flex items-center gap-2">
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <a href="https://www.instagram.com/amaranoc.am/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank' rel='noreferrer'><span>AMARANOC.AM</span></a>
            </div>

            <div className="flex items-center gap-2">
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <a href="https://www.facebook.com/aamaranoc.am?mibextid=ZbWKwL" target='_blank' rel='noreferrer'><span>AMARANOC.AM</span></a>
            </div>

            <div className="flex items-center gap-2">
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{language === 'hy' ? "ԹՈՒՄԱՆՅԱՆ 5" : language === 'ru' ? "ТУМАНЯН 5" : "TUMANYAN 5"}</span>
            </div>
          </div>

          <Link 
            to="/gaxtniutyun" 
            className="block no-underline text-slate-400 hover:text-white cursor-pointer transition-colors text-xs mb-8"
          >
            {t.privacyPolicy}
          </Link>

          <p className="text-slate-500 m-0 tracking-wide text-xs">
            {t.companyRights}
          </p>
        </div>
      </footer>

      {/* --- FLOATING STICKY NAVIGATION BAR --- */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#475569]/90 backdrop-blur-md py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-4 md:gap-8 max-w-[95vw]">
        <Link to="/" className="text-white/80 font-bold text-[10px] whitespace-nowrap hover:text-white">{t.homeLink}</Link>
        <span className="text-white/50 text-[10px]">|</span>
        <span className="text-white font-bold text-[10px] whitespace-nowrap">{t.codeLabel}: AM{house.id}</span>
        <button 
          onClick={() => alert(t.alertBooked)}
          className="bg-[#f97316] text-white font-black text-[10px] px-6 py-2.5 rounded-full shadow-md whitespace-nowrap hover:bg-orange-600 transition"
        >
          {t.bookNow}
        </button>
      </div>
    </div>
  );
}