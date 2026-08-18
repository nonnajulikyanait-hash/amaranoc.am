import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CarayutyunPage() {
  const [activeTab, setActiveTab] = useState('Սպասարկում');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'Սպասարկում', label: 'Սպասարկում', image: 'https://api.amaranoc.am/service.svg' },
    { id: 'Շոու', label: 'Շոու', image: 'https://api.amaranoc.am/services1.svg' },
    { id: 'Միջոցառումներ', label: 'Միջոցառումներ', image: 'https://api.amaranoc.am/services2.svg' },
    { id: 'Տեխնիկա', label: 'Տեխնիկա', image: 'https://api.amaranoc.am/services3.svg' },
    { id: 'Օրավարձով գույք', label: 'Օրավարձով գույք', image: 'https://api.amaranoc.am/services4.svg' },
    { id: 'Նկարահանում', label: 'Նկարահանում', image: 'https://api.amaranoc.am/services5.svg' },
    { id: 'Ուղևորափոխադրում', label: 'Ուղևորափոխադրում', image: 'https://api.amaranoc.am/services6.svg' },
  ];

  const servicesByTab = {
    'Սպասարկում': [
      {
        id: 1,
        title: 'Մատուցող',
        description: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։ Ձեր միջոցառման կազմակերպման գործում Ձեզ կօգնեն մեր փորձառու մատուցողները:',
        fullDescription: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։ Ձեր միջոցառման կազմակերպման գործում Ձեզ կօգնեն մեր փորձառու մատուցողները: Հաղորդակցման գերազանց հմտություններով և մանրուքների հանդեպ ուշադրությամբ, նրանք կապահովեն հյուրընկալ մթնոլորտ և բարձրակարգ սպասարկում։',
        price: '20,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331775249--0.16594454212797016image.webp&w=3840&q=75'
      },
      {
        id: 2,
        title: 'Բարմեն',
        description: 'Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։',
        fullDescription: 'Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։ Մեր բարմենները պատասխանատու են բարում նստած հաճախորդներին բարձրակարգ սպասարկում մատուցելու համար։',
        price: '25,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724330468263--0.5829426973721912image.webp&w=3840&q=75'
      },
      {
        id: 3,
        title: 'Խոհարար',
        description: 'Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Ունենալով հարուստ փորձ և տաղանդ, Մեր խոհարարները ստեղծում են համերի և նրբաճաշակության զարմանալի համադրություններ:',
        fullDescription: 'Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Ունենալով հարուստ փորձ և տաղանդ, Մեր խոհարարները ստեղծում են համերի և նրբաճաշակության զարմանալի համադրություններ:',
        price: '35,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331582281--0.8016246618454268image.webp&w=3840&q=75'
      },
      {
        id: 4,
        title: 'Հանդիսավար',
        description: 'Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի), ընտրության հարցում...',
        fullDescription: 'Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի), ընտրության հարցում, քանի որ միայն իսկական հանդիսավարը կարող է իր վարպետությամբ ստեղծել հիասքանչ և տոնական մթնոլորտ։',
        price: '60,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724346434036--0.5362400594372552image.webp&w=3840&q=75'
      },
      {
        id: 5,
        title: 'Փրփուր Փարթի',
        description: 'Նյութերը սերտիֆիկացված են, աչքերը չեն մռմռացնում, ալերգիա չեն առաջացնում...',
        fullDescription: 'Նյութերը սերտիֆիկացված են, աչքերը չեն մռմռացնում, ալերգիա չեն առաջացնում, անվնաս են նաև բույսերի և լողավազանի համար:',
        price: '26,900',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725721755318--0.3513684578103693image.webp&w=3840&q=75'
      }
    ],
    'Շոու': [
      {
        id: 10,
        title: 'Դի-Ջեյ',
        description: 'Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ և զվարճանք:',
        fullDescription: 'Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ և զվարճանք:',
        price: '50,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724333364490--0.6874775885987816image.webp&w=1920&q=75'
      },
      {
        id: 11,
        title: 'Երգիչ',
        description: 'Amaranoc.am ի երգիչները, իրենց զարմանալի ձայնով և տաղանդով, կստեղծեն յուրահատուկ մթնոլորտ։',
        fullDescription: 'Amaranoc.am ի երգիչները, իրենց զարմանալի ձայնով և տաղանդով, կստեղծեն յուրահատուկ մթնոլորտ։',
        price: '150,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724334734516--0.3032056818160267image.webp&w=1920&q=75'
      },
      {
        id: 12,
        title: 'Կրակներով շոու',
        description: 'Կրակներով շոուն կստեղծի վառ և հիասքանչ ժամանց, որոնք կտպավորվեն մշտեպես Ձեր հիշողության մեջ։',
        fullDescription: 'Կրակներով շոուն կստեղծի վառ և հիասքանչ ժամանց, որոնք կտպավորվեն մշտեպես Ձեր հիշողության մեջ։',
        price: '50,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724336474729--0.7810543034069704image.webp&w=1920&q=75'
      },
      {
        id: 13,
        title: 'Ջութակահար',
        description: 'Մեր տաղանդավոր երաժիշտները կստեղծեն անկրկնելի մթնոլորտ, որը կլցնի Ձեր միջոցառումը երաժշտության հրաշքներով։',
        fullDescription: 'Մեր տաղանդավոր երաժիշտները կստեղծեն անկրկնելի մթնոլորտ, որը կլցնի Ձեր միջոցառումը երաժշտության հրաշքներով։',
        price: '80,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724338250161--0.20494831224542853image.webp&w=1920&q=75'
      },
      {
        id: 15,
        title: 'Մուլտհերոսներ',
        description: 'Մեր մուլտհերոսները կախարդական կերպարներ են, ովքեր ժպիտ ու ուրախություն կպարգևեն երեխաներին:',
        fullDescription: 'Մեր մուլտհերոսները կախարդական կերպարներ են, ովքեր ժպիտ ու ուրախություն կպարգևեն երեխաներին:',
        price: '5,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724343085065--0.7151746565655936image.webp&w=1920&q=75'
      },
      {
        id: 16,
        title: 'Աճպարար',
        description: 'Աճպարարի յուրաքանչյուր ներկայացում առանձնանում է բացառիկությամբ և մոգական միջավայրով։',
        fullDescription: 'Աճպարարի յուրաքանչյուր ներկայացում առանձնանում է բացառիկությամբ և մոգական միջավայրով։',
        price: '60,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724345942719--0.8853509893461255image.webp&w=1920&q=75'
      },
    ],
    'Միջոցառումներ': [
      {
        id: 17,
        title: 'Նշանադրության կազմակերպում',
        description: 'Մեր ընկերությունը կազմակերպում է նշանադրության արարողություն, որը ստեղծում է կախարդական պահեր։',
        fullDescription: 'Մեր ընկերությունը կազմակերպում է նշանադրության արարողություն, որը ստեղծում է կախարդական պահեր։',
        price: '500,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724354544378--0.6598089632874184image.webp&w=1920&q=75'
      },
      {
        id: 18,
        title: 'Ծննդյան առիթների կազմակերպում',
        description: 'Մենք մասնագիտացած ենք ստեղծելու անմոռանալի միջոցառումներ հոբելյարների համար:',
        fullDescription: 'Մենք մասնագիտացած ենք ստեղծելու անմոռանալի միջոցառումներ հոբելյարների համար:',
        price: '150,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724361248407--0.36711332876830927image.webp&w=1920&q=75'
      },
      {
        id: 19,
        title: 'Հարսանյաց սենյակի ձևավորում',
        description: 'Հարսանյաց սենյակի ձևավորման գործում Ձեզ կօգնի Մեր դիզայներների և ոճաբանների թիմը։',
        fullDescription: 'Հարսանյաց սենյակի ձևավորման գործում Ձեզ կօգնի Մեր դիզայներների և ոճաբանների թիմը։',
        price: '80,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724359541230--0.027714150656094505image.webp&w=1920&q=75'
      },
      {
        id: 20,
        title: 'Ֆոտոզոնաների ձևավորում',
        description: 'Մենք մասնագիտացած ենք լուսանկարչական գոտիների ստեղծման գործում։',
        fullDescription: 'Մենք մասնագիտացած ենք լուսանկարչական գոտիների ստեղծման գործում։',
        price: '40,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724361086474--0.7968698807367636image.webp&w=1920&q=75'
      },
      {
        id: 21,
        title: 'Գենդեր փարթի',
        description: 'Մեր կրեատիվ թիմը պատրաստ է ամբողջությամբ կազմակերպելու այս գեղեցիկ օրը։',
        fullDescription: 'Մեր կրեատիվ թիմը պատրաստ է ամբողջությամբ կազմակերպելու այս գեղեցիկ օրը։',
        price: '180,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724362333688--0.9147879453964904image.webp&w=1920&q=75'
      },
    ],
    'Տեխնիկա': [
      {
        id: 22,
        title: 'Ծանր ծուխ',
        description: 'Լավագույն ծանր ծուխը, որը ձեր միջոցառումն կդարձնի էլ ավելի գեղեցիկ և հիշարժան։',
        fullDescription: 'Լավագույն ծանր ծուխը, որը ձեր միջոցառումն կդարձնի էլ ավելի գեղեցիկ և հիշարժան։',
        price: '30,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725722472736--0.09950637526125772image.webp&w=1920&q=75'
      },
      {
        id: 23,
        title: 'Հրավառության ծառայություն',
        description: 'Առաջարկում ենք փայլուն և անպայման հիշարժան հրավառություն։',
        fullDescription: 'Առաջարկում ենք փայլուն և անպայման հիշարժան հրավառություն։',
        price: '30,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725723065500--0.9235019901431423image.webp&w=1920&q=75'
      },
      {
        id: 24,
        title: 'Սառը հրավառություն',
        description: 'Անվտանգ և արտասովոր միջոցառման լուծում՝ առանց կրակի և ծխի վտանգի։',
        fullDescription: 'Անվտանգ և արտասովոր միջոցառման լուծում՝ առանց կրակի և ծխի վտանգի։',
        price: '30,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725723989251--0.9080294603522698image.webp&w=1920&q=75'
      },
      {
        id: 25,
        title: 'Պրոյեկտոր',
        description: 'Տրամադրում ենք տարբեր որակի և չափսերի պրոյեկտորներ՝ տեղադրմամբ։',
        fullDescription: 'Տրամադրում ենք տարբեր որակի և չափսերի պրոյեկտորներ՝ տեղադրմամբ։',
        price: '15,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726041202793--0.7905783613949644image.webp&w=1920&q=75'
      },
      {
        id: 26,
        title: 'Նվագարկիչ',
        description: 'Առաջարկում ենք բարձր որակի նվագարկիչների օրավարձով վարձակալության ծառայություն։',
        fullDescription: 'Առաջարկում ենք բարձր որակի նվագարկիչների օրավարձով վարձակալության ծառայություն։',
        price: '10,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726043750271--0.9652871581106086image.webp&w=1920&q=75'
      },
    ],
    'Օրավարձով գույք': [
      {
        id: 27,
        title: 'Սպասք',
        description: 'Տրամադրվում է տարբեր ձևի և միանման ամաններ, գդալներ, պատառաքաղներ։',
        fullDescription: 'Տրամադրվում է տարբեր ձևի և միանման ամաններ, գդալներ, պատառաքաղներ։',
        price: '100',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726042244507--0.7876617191172142image.webp&w=1920&q=75'
      },
      {
        id: 28,
        title: 'Սեղան և աթոռներ',
        description: 'Հնարավորություն է տալիս վարձակալել բարձր որակի սեղաններ և աթոռներ։',
        fullDescription: 'Հնարավորություն է տալիս վարձակալել բարձր որակի սեղաններ և աթոռներ։',
        price: '5,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726042865918--0.08492032329777777image.webp&w=1920&q=75'
      },
      {
        id: 29,
        title: 'Տենտ',
        description: 'Հիանալի լուծում են պաշտպանվելու համար ցանկացած եղանակից։',
        fullDescription: 'Հիանալի լուծում են պաշտպանվելու համար ցանկացած եղանակից։',
        price: '20,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045237838--0.5117936535743877image.webp&w=1920&q=75'
      },
    ], 
    'Նկարահանում': [
      {
        id: 6,
        title: 'Ֆոտո Նկարահանում',
        description: 'Մենք առաջարկում ենք պրոֆեսիոնալ ֆոտո նկարահանման ծառայություն...',
        fullDescription: 'Մենք առաջարկում ենք պրոֆեսիոնալ ֆոտո նկարահանման ծառայություն փորձառու մասնագետների կողմից։',
        price: '20,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045632835--0.6404655108118316image.webp&w=1920&q=75'
      },
      {
        id: 7,
        title: 'Վիդեո Նկարահանում',
        description: 'Ձեր տեսանյութերը կստանան բարձր որակ և պրոֆեսիոնալ տեսք...',
        fullDescription: 'Ձեր տեսանյութերը կստանան բարձր որակ և պրոֆեսիոնալ տեսք նորագույն տեխնիկայի միջոցով։',
        price: '35,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045956349--0.40971954076083006image.webp&w=1920&q=75'
      },
      {
        id: 8,
        title: 'Դրոնով Նկարահանում',
        description: 'Ապահովեք ձեր նախագծերի անկրկնելի տեսարանները մեր պրոֆեսիոնալ դրոններով...',
        fullDescription: 'Ապահովեք ձեր նախագծերի անկրկնելի տեսարանները մեր պրոֆեսիոնալ դրոններով։',
        price: '25,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726046177472--0.6775833503340363image.webp&w=1920&q=75'
      }
    ],
    'Ուղևորափոխադրում': [
      {
        id: 9,
        title: 'Ուղևորափոխադրում',
        description: 'Մենք տրամադրում ենք բարձրակարգ փոխադրամիջոցներ՝ ապահովելով Ձեր հարմարավետությունը...',
        fullDescription: 'Մենք տրամադրում ենք բարձրակարգ փոխադրամիջոցներ՝ ապահովելով Ձեր հարմարավետությունն ու անվտանգությունը։',
        price: '20,000',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80'
      }
    ]
  };

  const currentServices = servicesByTab[activeTab] || [];

  return (
    <div className="w-full bg-white font-sans">
      {/* Ծառայությունների բաժին */}
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center border-b border-gray-100 pb-4 mb-8">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors mr-4 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar flex-1 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center flex-col sm:flex-row gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-[#fff7ed] text-[#fca34d] border border-[#fca34d]/30 shadow-sm'
                    : 'bg-white text-gray-600 border border-transparent hover:border-gray-200'
                }`}
              >
                {cat.image ? (
                  <img src={cat.image} alt={cat.label} className="w-5 h-5 object-contain" />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-[10px]">◎</div>
                )}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {currentServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[2rem] overflow-hidden group flex flex-col justify-between border border-gray-100 shadow-sm p-3">
                <div className="h-52 w-full rounded-[1.8rem] overflow-hidden relative shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="pt-4 px-2 pb-2 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-black text-lg text-[#1a202c] mb-2">{service.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-1 font-black text-sm text-[#1a202c]">
                      <span>{service.price} ֏</span>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="border border-gray-200 text-gray-700 hover:bg-[#1a202c] hover:text-white hover:border-[#1a202c] text-[11px] font-bold px-5 py-2 rounded-full transition-all duration-200"
                    >
                      Ամրագրել
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 text-sm">
            Այս կատեգորիայում ծառայություններ չկան
          </div>
        )}
      </div>

      {/* Մոդալ պատուհան (Modal) */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedService(null); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-xl font-black text-[#1a202c]">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                {selectedService.fullDescription || selectedService.description}
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-5 border-t border-gray-50">
              <div className="flex items-center gap-1 font-black text-lg text-[#1a202c]">
                <span>{selectedService.price} ֏</span>
              </div>

              <button
                onClick={() => {
                  alert(`Ամրագրվել է՝ ${selectedService.title}`);
                  setSelectedService(null);
                }}
                className="bg-[#fca34d] hover:bg-[#f59332] text-white font-black px-8 py-3 rounded-full transition-all duration-200 shadow-sm"
              >
                Ամրագրել
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Տեղադրել հայտարարություն բաժին (CreateListingForm) */}
      <section 
        className="w-full flex justify-center items-center font-sans text-white box-border bg-no-repeat bg-center bg-cover relative mt-20"
        style={{ 
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
            style={{ fontSize: '32px', marginBottom: '20px' }}
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

      {/* Footer բաժին */}
      <footer 
        className="text-white text-center font-sans bg-no-repeat w-full"
        style={{
          backgroundColor: '#0b131f',
          backgroundImage: 'url("https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=3840&q=75")',
          backgroundPosition: 'bottom center',
          backgroundSize: 'contain',
          padding: '60px 20px 120px 20px',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="font-bold tracking-widest text-white"
            style={{ fontSize: '26px', marginBottom: '40px' }}
          >
            ԿՈՆՏԱԿՏՆԵՐ
          </h2>
          
          <div 
            className="flex justify-center items-center flex-wrap"
            style={{ gap: '25px', marginBottom: '35px' }}
          >
            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:041611611" target='_blank' rel="noreferrer"><span>041-611-611 / 044-611-611</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:amaranoc.info@gmail.com" target='_blank' rel="noreferrer"><span>AMARANOC.INFO@GMAIL.COM</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <a href="https://www.instagram.com/amaranoc.am/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank' rel="noreferrer"><span>AMARANOC.AM</span></a>
            </div>

            <div className="flex items-center text-slate-300" style={{ gap: '8px', fontSize: '13px' }}>
              <svg className="text-white opacity-80" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <a href="https://www.facebook.com/aamaranoc.am?mibextid=ZbWKwL" target='_blank' rel="noreferrer"><span>AMARANOC.AM</span></a>
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
    </div>
  );
}