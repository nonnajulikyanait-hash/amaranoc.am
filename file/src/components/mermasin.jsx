import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from './useLanguageStore';

export default function Mermasin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ներմուծում ենք լեզվի store-ը
  const { language } = useLanguageStore();

  // Բազմալեզու բառարան
  const translations = {
    hy: {
      aboutUs: "Մեր մասին",
      aboutUsText: "Amaranoc.am-ը վստահության, հավատարմության և գերազանցության ձգտման պատմություն է: Հանդիսանալով ամառանոցների վարձակալության ոլորտում համար մեկ ընկերությունը, մենք ձեզ առաջարկում ենք շքեղ առանձնատների, քոթեջների, վիլլաների և ամառանոցների լայն ու բազմազան ընտրություն; Մեր հիմնական առաքելությունն է սպասարկել մեր հաճախորդներին ամենաբարձր մակարդակով՝ ստեղծելով հարմարավետության և շքեղության մթնոլորտ մեր յուրաքանչյուր առանձնատանը:Մեր նվիրվածությունը և մանրուքների հանդեպ ուշադրությունը երաշխավորում է հիշարժան հանգիստ Հայաստանի ամենահիասքանչ ամառանոցներում",
      
      ourTeam: "Մեր թիմը",
      ourTeamText: "Շուրջ 20 մասնագետներից բաղկացած մեր պրոֆեսիոնալ թիմն իր աշխատանքն իրականացնում է փայլուն հմտությամբ՝ բավարարելու անգամ ամենաքմահաճ հաճախորդի կարիքները: Շնորհիվ ոլորտում ունեցած մեր անգնահատելի փորձի, մեր նպատակն է անմոռանալի պահեր ստեղծել մեր հյուրերի համար: Մենք պարզապես չենք ստեղծում ժամանց, մենք ստեղծում ենք պատմություններ, և յուրաքանչյուր առանձնատուն (որոնք դուք տեսնում եք մեր կայքում) այդ պատմության մի մասն է: Օրեցօր ընդլայնվելով՝ մենք ձգտում ենք նորագույն չափանիշներ սահմանել ոլորտում և որ ամենակարևորն է մենք օր օրի հստակ ու կայուն քայլերով շարժվում ենք առաջ՝ բարելավելով մեր երկրում սպասարկման ոլորտը՝ շքեղ առանձնատները հասանելի դարձնելով բոլորին:",
      
      whyUs: "Ինչու համագործակցել Amaranoc.am -ի հետ",
      whyUsText: "Amaranoc.am-ի ընտրությունը երաշխավորում է շքեղության, անհատականացված սպասարկման բարձր մակարդակ և իհարկե վստահության հիմքի վրա կառուցված կայուն համագործակցություն. Գերազանցության հանդեպ մեր բարձր ձգտումը և հավատարմությունը, էքսկլյուզիվ առաջարկների լայն ընտրությունը և մեր յուրաքանչյուր հյուրի նախասիրությունների նկատմամբ մանրակրկիտ ուշադրությունը մեզ առանձնացնում են ոլորտում բոլորից՝ դարձնելով առաջատար; Մենք առաջարկում ենք որակ և ստեղծում ենք հարմարավետության բարձր զգացում, որոնք գերազանցում են ձեր բոլոր սպասելիքները; Մենք բարձր ենք գնահատում մեր գործընկերների և մեր հաճախորդների վստահությունը:",
      
      marketing: "Մարքեթինգ",
      marketingText: "Amaranoc.am-ում մենք գիտակցում ենք մարքեթինգի առանցքային դերը ամառանոցների վարձակալության ոլորտում; Մեր ռազմավարական մարքեթինգային նախաձեռնությունները ներառում են էքսկլյուզիվ համագործակցություններ և շեշտադրում են մեր ամառանոցների եզակի առանձնահատկությունները. 10 մասնագետից բաղկացած մեր պրոֆեսիոնալ մարքեթինգի թիմը աշխատում է բարձր պատասխանատվությամբ և նվիրումով, որպեսզի դուք միշտ առաջինը տեղեկացված լինեք լավագույն առաջարկների մասին.",
      
      history: "Մեր պատմությունը",
      historyText: "Amaranoc.am - ը հիմնադրվել է 2023 թվականի հուլիսի 1-ին և հենց այդ օրվանից սկսած մինչ օրս մենք չենք դադարում զարմացնել մեր հաճախորդներին և գոհացնել մեր գործընկերներին; Մենք հպարտ ենք, որ այս նախագիծը մեր ողջ թիմի համատեղ ջանքերի արդյունքն է և հանդիսանում է Hasce.am անշարժ գույքի ընկերության ամենակարևոր մաս: Յուրաքանչյուր քայլ ամրապնդել է մեր հիմնադիր սկզբունքները և առաջ է մղել մեզ ձեռք բերել անուն, որին վստահում են բոլորը. Եվ եթե դուք այստեղ եք, հավատացած եղեք, որ ամեն ինչ դեռ առջևում է.",
      
      reviewsTitle: "Կարծիքներ",
      leaveReview: "Թողնել կարծիք",
      modalText: "Կարծիք թողնելու համար հարկավոր է մուտք գործել հարթակ",
      login: "Մուտք"
    },
    ru: {
      aboutUs: "О нас",
      aboutUsText: "Amaranoc.am — это история доверия, верности и стремления к совершенству. Будучи компанией номер один в сфере аренды дач, мы предлагаем вам широкий и разнообразный выбор роскошных особняков, коттеджей, вилл и дач. Наша главная миссия — обслуживать наших клиентов на высшем уровне, создавая атмосферу уюта и роскоши в каждом нашем особняке. Наша преданность делу и внимание к деталям гарантируют незабываемый отдых на самых прекрасных дачах Армении.",
      
      ourTeam: "Наша команда",
      ourTeamText: "Наша профессиональная команда, состоящая примерно из 20 специалистов, выполняет свою работу с блестящим мастерством, чтобы удовлетворить потребности даже самых капризных клиентов. Благодаря нашему бесценному опыту в этой сфере, наша цель — создавать незабываемые моменты для наших гостей. Мы не просто создаем досуг, мы создаем истории, и каждый особняк (который вы видите на нашем сайте) является частью этой истории.",
      
      whyUs: "Почему стоит сотрудничать с Amaranoc.am",
      whyUsText: "Выбор Amaranoc.am гарантирует высокий уровень роскоши, индивидуального обслуживания и, конечно же, стабильное сотрудничество, построенное на фундаменте доверия. Наше стремление к совершенству, широкий выбор эксклюзивных предложений и тщательное внимание к предпочтениям каждого гостя выделяют нас среди остальных лидеров рынка.",
      
      marketing: "Маркетинг",
      marketingText: "В Amaranoc.am мы понимаем ключевую роль маркетинга в сфере аренды дач. Наши стратегические маркетинговые инициативы включают в себя эксклюзивное сотрудничество и подчеркивают уникальные особенности наших объектов. Наша команда маркетинга из 10 специалистов работает с высокой ответственностью и самоотдачей.",
      
      history: "Наша история",
      historyText: "Amaranoc.am была основана 1 июля 2023 года, и с того дня мы не перестаем удивлять наших клиентов и радовать партнеров. Мы гордимся тем, что этот проект является результатом совместных усилий всей нашей команды и важнейшей частью компании по недвижимости Hasce.am.",
      
      reviewsTitle: "Отзывы",
      leaveReview: "Оставить отзыв",
      modalText: "Для того чтобы оставить отзыв, необходимо войти на платформу",
      login: "Войти"
    },
    en: {
      aboutUs: "About Us",
      aboutUsText: "Amaranoc.am is a story of trust, loyalty, and the pursuit of excellence. Being the number one company in the country house rental sector, we offer you a wide and diverse selection of luxury mansions, cottages, villas, and summer houses. Our main mission is to serve our clients at the highest level, creating an atmosphere of comfort and luxury in every property.",
      
      ourTeam: "Our Team",
      ourTeamText: "Our professional team of around 20 specialists performs their work with brilliant skill to satisfy the needs of even the most demanding clients. Thanks to our invaluable experience in the industry, our goal is to create unforgettable moments for our guests. We don't just create leisure; we create stories, and every mansion you see on our website is a part of that story.",
      
      whyUs: "Why collaborate with Amaranoc.am",
      whyUsText: "Choosing Amaranoc.am guarantees a high level of luxury, personalized service, and sustainable cooperation built on trust. Our high pursuit of excellence, wide selection of exclusive offers, and meticulous attention to each guest's preferences set us apart as an industry leader.",
      
      marketing: "Marketing",
      marketingText: "At Amaranoc.am, we recognize the key role of marketing in the summer house rental sector. Our strategic marketing initiatives include exclusive partnerships and highlight the unique features of our properties. Our marketing team of 10 professionals works with high dedication.",
      
      history: "Our History",
      historyText: "Amaranoc.am was founded on July 1, 2023, and since that day we have never stopped amazing our clients and satisfying our partners. We are proud that this project is the result of our entire team's joint efforts and serves as a vital part of the Hasce.am real estate company.",
      
      reviewsTitle: "Reviews",
      leaveReview: "Leave a Review",
      modalText: "You need to log in to the platform to leave a review",
      login: "Login"
    }
  };

  const t = translations[language] || translations.hy;

  const reviews = [
    { id: 1, name: "Gurgen", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80", rating: 5, comment: "Thanks for providing great service👍👍" },
    { id: 2, name: "Armine", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80", rating: 5, comment: "🥰 Очень довольна. Они очень помогли мне с выбором дома, и дом был просто замечательным." },
    { id: 3, name: "Aghajanyan Zara", avatar: null, rating: 5, comment: "Ավելի իդեալական չէր կարա լիներ)))" },
    { id: 4, name: "Ani Arzumanyan", avatar: null, rating: 5, comment: "Сдали наш дом имеем отличный результат, очень довольны !! :)" }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <style>{`
        @media (max-width: 400px) {
          .mobile-tight { padding-left: 10px !important; padding-right: 10px !important; }
          .mobile-text { font-size: 11px !important; }
          .mobile-title { font-size: 16px !important; }
        }
      `}</style>
      
      <div className="w-full h-[60vh] md:h-[75vh] relative bg-gray-100">
        <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Ffirst_image.jpg&w=3840&q=75" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20 mobile-tight">
        
        {/* --- ՍԵԿՑԻԱ 1. ՄԵՐ ՄԱՍԻՆ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-sm">
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout_us.jpg&w=3840&q=75" alt="Our Villa" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 bg-[#f8f9fa] rounded-[2rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-center min-h-[350px] md:h-[420px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-400 font-light text-xl">—</span>
              <h2 className="text-2xl font-black text-[#1a202c] uppercase tracking-wider mobile-title">{t.aboutUs}</h2>
              <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-sm text-gray-700 leading-relaxed text-justify font-medium mobile-text">
                {t.aboutUsText}
              </p>
            </div>
          </div>
        </div>

        {/* --- ՍԵԿՑԻԱ 3. ՄԵՐ ԹԻՄԸ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 bg-[#f8f9fa] rounded-[2rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-center min-h-[350px] md:h-[420px] order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-400 font-light text-xl">—</span>
              <h2 className="text-2xl font-black text-[#1a202c] uppercase tracking-wider mobile-title">{t.ourTeam}</h2>
              <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-sm text-gray-700 leading-relaxed text-justify font-medium mobile-text">{t.ourTeamText}</p>
            </div>
          </div>
          <div className="md:col-span-6 h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-sm order-1 md:order-2">
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fteam.jpg&w=3840&q=75" alt="Our Team" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- ՍԵԿՑԻԱ 4. ԻՆՉՈՒ ՀԱՄԱԳՈՐԾԱԿՑԵԼ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-sm">
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Famaranoc.jpg&w=3840&q=75" alt="Indoor Pool" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 bg-[#f8f9fa] rounded-[2rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-center min-h-[350px] md:h-[420px]">
            <h2 className="text-xl font-black text-[#1a202c] uppercase tracking-wide leading-tight mb-4 mobile-title">{t.whyUs}</h2>
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-sm text-gray-700 leading-relaxed text-justify font-medium mobile-text">{t.whyUsText}</p>
            </div>
          </div>
        </div>

        {/* --- ՍԵԿՑԻԱ 5. ՄԱՐՔԵԹԻՆԳ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 bg-[#f8f9fa] rounded-[2rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-center min-h-[350px] md:h-[420px] order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-400 font-light text-xl">—</span>
              <h2 className="text-2xl font-black text-[#1a202c] uppercase tracking-wider mobile-title">{t.marketing}</h2>
              <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-sm text-gray-700 leading-relaxed text-justify font-medium mobile-text">{t.marketingText}</p>
            </div>
          </div>
          <div className="md:col-span-6 h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-sm order-1 md:order-2">
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fmarketing.jpg&w=3840&q=75" alt="Sauna/Spa" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- ՍԵԿՑԻԱ 6. ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 h-[350px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-sm">
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fhistory.jpg&w=3840&q=75" alt="History" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-6 bg-[#f8f9fa] rounded-[2rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-center min-h-[350px] md:h-[420px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-400 font-light text-xl">—</span>
              <h2 className="text-2xl font-black text-[#1a202c] uppercase tracking-wider mobile-title">{t.history}</h2>
              <div className="flex-1 h-[1px] bg-gray-300 ml-2"></div>
            </div>
            <div className="border-l-2 border-gray-900 pl-5">
              <p className="text-sm text-gray-700 leading-relaxed text-justify font-medium mobile-text">{t.historyText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- ՍԵԿՑԻԱ 7. ՖՈՏՈՇԱՐՔ --- */}
      <div className="w-full h-[50vh] md:h-[65vh] my-12 bg-gray-100">
        <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fthird.jpg&w=3840&q=75" alt="Photoshoot" className="w-full h-full object-cover" />
      </div>

      {/* --- ՍԵԿՑԻԱ 8. ԿԱՐԾԻՔՆԵՐ --- */}
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className="text-3xl font-black text-[#1a202c] uppercase tracking-widest text-center mobile-title">{t.reviewsTitle}</h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-10">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col items-start bg-white p-2 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  {review.avatar ? <img src={review.avatar} alt={review.name} className="w-8 h-8 rounded-full object-cover" /> : <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">👤</div>}
                  <span className="font-bold text-sm text-gray-900">{review.name}</span>
                </div>
                <div className="flex gap-0.5 mb-2 text-orange-400">★ ★ ★ ★ ★</div>
                <p className="text-xs text-gray-700 font-medium leading-relaxed text-left mobile-text">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <button onClick={() => setIsModalOpen(true)} className="px-8 py-3 bg-[#f59e0b] hover:bg-orange-500 text-white font-bold text-sm rounded-full shadow-sm transition duration-200">
              {t.leaveReview}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">✕</button>
            <p className="text-gray-700 font-medium mb-6 mt-2">{t.modalText}</p>
            <Link 
              to="/grancvel" 
              onClick={() => setIsModalOpen(false)}
              className="inline-block bg-[#f59e0b] hover:bg-orange-500 text-white font-bold px-12 py-3 rounded-full transition-all"
            >
              {t.login}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}