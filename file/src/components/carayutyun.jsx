import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from './useLanguageStore';

export default function CarayutyunPage() {
  const { language } = useLanguageStore();

  const [activeTab, setActiveTab] = useState('Սպասարկում');
  const [selectedService, setSelectedService] = useState(null);

  // Բազմալեզու բառարաններ
  const translations = {
    hy: {
      categories: [
        { id: 'Սպասարկում', label: 'Սպասարկում', image: 'https://api.amaranoc.am/service.svg' },
        { id: 'Շոու', label: 'Շոու', image: 'https://api.amaranoc.am/services1.svg' },
        { id: 'Միջոցառումներ', label: 'Միջոցառումներ', image: 'https://api.amaranoc.am/services2.svg' },
        { id: 'Տեխնիկա', label: 'Տեխնիկա', image: 'https://api.amaranoc.am/services3.svg' },
        { id: 'Օրավարձով գույք', label: 'Օրավարձով գույք', image: 'https://api.amaranoc.am/services4.svg' },
        { id: 'Նկարահանում', label: 'Նկարահանում', image: 'https://api.amaranoc.am/services5.svg' },
        { id: 'Ուղևորափոխադրում', label: 'Ուղևորափոխադրում', image: 'https://api.amaranoc.am/services6.svg' },
      ],
      noServices: 'Այս կատեգորիայում ծառայություններ չկան',
      bookBtn: 'Ամրագրել',
      listingTitle: 'ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ',
      listingSubtitle: 'Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ',
      namePlaceholder: 'Անուն Ազգանուն',
      phonePlaceholder: 'Հեռախոսահամար',
      emailPlaceholder: 'Էլ. հասցե',
      sendBtn: 'Ուղարկել',
      contactsTitle: 'ԿՈՆՏԱԿՏՆԵՐ',
      address: 'ԹՈՒՄԱՆՅԱՆ 5',
      privacyPolicy: 'Գաղտնիության քաղաքականություն',
      companyText: 'Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО'
    },
    ru: {
      categories: [
        { id: 'Սպասարկում', label: 'Обслуживание', image: 'https://api.amaranoc.am/service.svg' },
        { id: 'Շոու', label: 'Шоу', image: 'https://api.amaranoc.am/services1.svg' },
        { id: 'Միջոցառումներ', label: 'Мероприятия', image: 'https://api.amaranoc.am/services2.svg' },
        { id: 'Տեխնիկա', label: 'Техника', image: 'https://api.amaranoc.am/services3.svg' },
        { id: 'Օրավարձով գույք', label: 'Имущество посуточно', image: 'https://api.amaranoc.am/services4.svg' },
        { id: 'Նկարահանում', label: 'Съемка', image: 'https://api.amaranoc.am/services5.svg' },
        { id: 'Ուղևորափոխադրում', label: 'Пассажироперевозки', image: 'https://api.amaranoc.am/services6.svg' },
      ],
      noServices: 'В этой категории нет услуг',
      bookBtn: 'Забронировать',
      listingTitle: 'РАЗМЕСТИТЬ ОБЪЯВЛЕНИЕ',
      listingSubtitle: 'Введите ваши данные в указанные поля, и мы свяжемся с вами',
      namePlaceholder: 'Имя Фамилия',
      phonePlaceholder: 'Номер телефона',
      emailPlaceholder: 'Эл. почта',
      sendBtn: 'Отправить',
      contactsTitle: 'КОНТАКТЫ',
      address: 'УЛ. ТУМАНЯНА 5',
      privacyPolicy: 'Политика конфиденциальности',
      companyText: 'Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО'
    },
    en: {
      categories: [
        { id: 'Սպասարկում', label: 'Service', image: 'https://api.amaranoc.am/service.svg' },
        { id: 'Շոու', label: 'Show', image: 'https://api.amaranoc.am/services1.svg' },
        { id: 'Միջոցառումներ', label: 'Events', image: 'https://api.amaranoc.am/services2.svg' },
        { id: 'Տեխնիկա', label: 'Equipment', image: 'https://api.amaranoc.am/services3.svg' },
        { id: 'Օրավարձով գույք', label: 'Daily Rentals', image: 'https://api.amaranoc.am/services4.svg' },
        { id: 'Նկարահանում', label: 'Filming', image: 'https://api.amaranoc.am/services5.svg' },
        { id: 'Ուղևորափոխադրում', label: 'Transportation', image: 'https://api.amaranoc.am/services6.svg' },
      ],
      noServices: 'No services available in this category',
      bookBtn: 'Book',
      listingTitle: 'POST AN AD',
      listingSubtitle: 'Enter your details in the specified fields and we will contact you',
      namePlaceholder: 'Full Name',
      phonePlaceholder: 'Phone Number',
      emailPlaceholder: 'Email Address',
      sendBtn: 'Send',
      contactsTitle: 'CONTACTS',
      address: '5 TUMANYAN ST.',
      privacyPolicy: 'Privacy Policy',
      companyText: 'Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО'
    }
  };

  const t = translations[language] || translations.hy;

  // Ծառայությունների տվյալների բազա՝ բազմալեզու աջակցությամբ
  const servicesByTab = {
    'Սպասարկում': [
      {
        id: 1,
        title: { hy: 'Մատուցող', ru: 'Официант', en: 'Waiter' },
        description: { 
          hy: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։ Ձեր միջոցառման կազմակերպման գործում Ձեզ կօգնեն մեր փորձառու մատուցողները:', 
          ru: 'Каждый официант может обслуживать 15-20 человек. Стоимость зависит от места проведения.', 
          en: 'Each waiter can serve 15-20 people. The cost depends on the venue location.' 
        },
        fullDescription: { 
          hy: 'Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։ Ձեր միջոցառման կազմակերպման գործում Ձեզ կօգնեն մեր փորձառու մատուցողները: Հաղորդակցման գերազանց հմտություններով և մանրուքների հանդեպ ուշադրությամբ, նրանք կապահովեն հյուրընկալ մթնոլորտ և բարձրակարգ սպասարկում։', 
          ru: 'Каждый официант может обслуживать 15-20 человек. Стоимость зависит от места проведения мероприятия. Наши опытные официанты обеспечат гостеприимную атмосферу и первоклассный сервис.', 
          en: 'Each waiter can serve 15-20 people. The cost depends on the venue. Our experienced waiters will ensure a welcoming atmosphere and top-tier service.' 
        },
        price: '20,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331775249--0.16594454212797016image.webp&w=3840&q=75'
      },
      {
        id: 2,
        title: { hy: 'Բարմեն', ru: 'Бармен', en: 'Bartender' },
        description: { 
          hy: 'Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։', 
          ru: 'Наши профессиональные бармены владеют навыками приготовления различных напитков.', 
          en: 'Our professional bartenders are skilled in preparing various drinks.' 
        },
        fullDescription: { 
          hy: 'Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։ Մեր բարմենները պատասխանատու են բարում նստած հաճախորդներին բարձրակարգ սպասարկում մատուցելու համար։', 
          ru: 'Наши профессиональные бармены владеют навыками приготовления различных напитков и отвечают за первоклассное обслуживание клиентов у барной стойки.', 
          en: 'Our professional bartenders are skilled in preparing various types of drinks and providing high-class service at the bar.' 
        },
        price: '25,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724330468263--0.5829426973721912image.webp&w=3840&q=75'
      },
      {
        id: 3,
        title: { hy: 'Խոհարար', ru: 'Повар', en: 'Chef' },
        description: { 
          hy: 'Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Ունենալով հարուստ փորձ և տաղանդ, Մեր խոհարարները ստեղծում են համերի և նրբաճաշակության զարմանալի համադրություններ:', 
          ru: 'Стоимость зависит от количества гостей и меню. Обладая богатым опытом, наши повара создают удивительные сочетания вкусов.', 
          en: 'The price depends on the number of guests and menu. With rich experience and talent, our chefs create amazing combinations of flavors.' 
        },
        fullDescription: { 
          hy: 'Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Ունենալով հարուստ փորձ և տաղանդ, Մեր խոհարարները ստեղծում են համերի և նրբաճաշակության զարմանալի համադրություններ:', 
          ru: 'Стоимость зависит от количества гостей и меню. Обладая богатым опытом и талантом, наши повара создают удивительные сочетания вкусов и изысканности.', 
          en: 'The price depends on the number of guests and menu. With rich experience and talent, our chefs create amazing combinations of flavors and elegance.' 
        },
        price: '35,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331582281--0.8016246618454268image.webp&w=3840&q=75'
      },
      {
        id: 4,
        title: { hy: 'Հանդիսավար', ru: 'Тамада / Ведущий', en: 'Master of Ceremonies' },
        description: { 
          hy: 'Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի), ընտրության հարցում...', 
          ru: 'В этом разделе мы поможем вам с выбором ведущего (тамады)...', 
          en: 'In this section we will try to help you with the choice of the host (tamada)...' 
        },
        fullDescription: { 
          hy: 'Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի), ընտրության հարցում, քանի որ միայն իսկական հանդիսավարը կարող է իր վարպետությամբ ստեղծել հիասքանչ և տոնական մթնոլորտ։', 
          ru: 'В этом разделе мы поможем вам с выбором тамады, так как только настоящий ведущий своим мастерством может создать великолепную и праздничную атмосферу.', 
          en: 'In this section we will help you choose a host, as only a true host can create a wonderful and festive atmosphere with their mastery.' 
        },
        price: '60,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724346434036--0.5362400594372552image.webp&w=3840&q=75'
      },
      {
        id: 5,
        title: { hy: 'Փրփուր Փարթի', ru: 'Пенная вечеринка', en: 'Foam Party' },
        description: { 
          hy: 'Նյութերը սերտիֆիկացված են, աչքերը չեն մռմռացնում, ալերգիա չեն առաջացնում...', 
          ru: 'Материалы сертифицированы, не щиплют глаза, не вызывают аллергию...', 
          en: 'Materials are certified, do not sting the eyes, do not cause allergies...' 
        },
        fullDescription: { 
          hy: 'Նյութերը սերտիֆիկացված են, աչքերը չեն մռմռացնում, ալերգիա չեն առաջացնում, անվնաս են նաև բույսերի և լողավազանի համար:', 
          ru: 'Материалы сертифицированы, не щиплют глаза, не вызывают аллергию, а также безопасны для растений и бассейна.', 
          en: 'Materials are certified, do not sting eyes, do not cause allergies, and are safe for plants and the pool.' 
        },
        price: '26,900',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725721755318--0.3513684578103693image.webp&w=3840&q=75'
      }
    ],
    'Շոու': [
      {
        id: 10,
        title: { hy: 'Դի-Ջեյ', ru: 'Диджей', en: 'DJ' },
        description: { 
          hy: 'Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ և զվարճանք:', 
          ru: 'Диджеи — звезды наших мероприятий, которые создают уникальную атмосферу и развлечения.', 
          en: 'DJs are the stars of our events who create a unique atmosphere and entertainment.' 
        },
        fullDescription: { 
          hy: 'Դիջեյներն Մեր կազմակերպած միջոցառումների աստղերն են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ և զվարճանք:', 
          ru: 'Диджеи — звезды наших мероприятий, которые создают уникальную атмосферу и развлечения.', 
          en: 'DJs are the stars of our events who create a unique atmosphere and entertainment.' 
        },
        price: '50,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724333364490--0.6874775885987816image.webp&w=1920&q=75'
      },
      {
        id: 11,
        title: { hy: 'Երգիչ', ru: 'Певец', en: 'Singer' },
        description: { 
          hy: 'Amaranoc.am ի երգիչները, իրենց զարմանալի ձայնով և տաղանդով, կստեղծեն յուրահատուկ մթնոլորտ։', 
          ru: 'Певцы Amaranoc.am своим удивительным голосом и талантом создадут уникальную атмосферу.', 
          en: 'Amaranoc.am singers, with their amazing voice and talent, will create a unique atmosphere.' 
        },
        fullDescription: { 
          hy: 'Amaranoc.am ի երգիչները, իրենց զարմանալի ձայնով և տաղանդով, կստեղծեն յուրահատուկ մթնոլորտ։', 
          ru: 'Певцы Amaranoc.am своим удивительным голосом и талантом создадут уникальную атмосферу.', 
          en: 'Amaranoc.am singers, with their amazing voice and talent, will create a unique atmosphere.' 
        },
        price: '150,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724334734516--0.3032056818160267image.webp&w=1920&q=75'
      },
      {
        id: 12,
        title: { hy: 'Կրակներով շոու', ru: 'Огненное шоу', en: 'Fire Show' },
        description: { 
          hy: 'Կրակներով շոուն կստեղծի վառ և հիասքանչ ժամանց, որոնք կտպավորվեն մշտեպես Ձեր հիշողության մեջ։', 
          ru: 'Огненное шоу создаст яркое и прекрасное зрелище, которое навсегда останется в вашей памяти.', 
          en: 'The fire show will create bright and wonderful entertainment that will be permanently imprinted in your memory.' 
        },
        fullDescription: { 
          hy: 'Կրակներով շոուն կստեղծի վառ և հիասքանչ ժամանց, որոնք կտպավորվեն մշտեպես Ձեր հիշողության մեջ։', 
          ru: 'Огненное шоу создаст яркое и прекрасное зрелище, которое навсегда останется в вашей памяти.', 
          en: 'The fire show will create bright and wonderful entertainment that will be permanently imprinted in your memory.' 
        },
        price: '50,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724336474729--0.7810543034069704image.webp&w=1920&q=75'
      },
      {
        id: 13,
        title: { hy: 'Ջութակահար', ru: 'Скрипач', en: 'Violinist' },
        description: { 
          hy: 'Մեր տաղանդավոր երաժիշտները կստեղծեն անկրկնելի մթնոլորտ, որը կլցնի Ձեր միջոցառումը երաժշտության հրաշքներով։', 
          ru: 'Наши талантливые музыканты создадут неповторимую атмосферу, наполняющую ваше мероприятие чудесами музыки.', 
          en: 'Our talented musicians will create an unforgettable atmosphere that will fill your event with the wonders of music.' 
        },
        fullDescription: { 
          hy: 'Մեր տաղանդավոր երաժիշտները կստեղծեն անկրկնելի մթնոլորտ, որը կլցնի Ձեր միջոցառումը երաժշտության հրաշքներով։', 
          ru: 'Наши талантливые музыканты создадут неповторимую атмосферу, наполняющую ваше мероприятие чудесами музыки.', 
          en: 'Our talented musicians will create an unforgettable atmosphere that will fill your event with the wonders of music.' 
        },
        price: '80,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724338250161--0.20494831224542853image.webp&w=1920&q=75'
      },
      {
        id: 15,
        title: { hy: 'Մուլտհերոսներ', ru: 'Мультгерои', en: 'Cartoon Characters' },
        description: { 
          hy: 'Մեր մուլտհերոսները կախարդական կերպարներ են, ովքեր ժպիտ ու ուրախություն կպարգևեն երեխաներին:', 
          ru: 'Наши мультгерои — волшебные персонажи, которые подарят улыбки и радость детям.', 
          en: 'Our cartoon characters are magical figures who will bring smiles and joy to children.' 
        },
        fullDescription: { 
          hy: 'Մեր մուլտհերոսները կախարդական կերպարներ են, ովքեր ժպիտ ու ուրախություն կպարգևեն երեխաներին:', 
          ru: 'Наши мультгерои — волшебные персонажи, которые подарят улыбки и радость детям.', 
          en: 'Our cartoon characters are magical figures who will bring smiles and joy to children.' 
        },
        price: '5,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724343085065--0.7151746565655936image.webp&w=1920&q=75'
      },
      {
        id: 16,
        title: { hy: 'Աճպարար', ru: 'Фокусник', en: 'Magician' },
        description: { 
          hy: 'Աճպարարի յուրաքանչյուր ներկայացում առանձնանում է բացառիկությամբ և մոգական միջավայրով։', 
          ru: 'Каждое выступление фокусника отличается эксклюзивностью и магической атмосферой.', 
          en: 'Each magician performance stands out for its exclusivity and magical environment.' 
        },
        fullDescription: { 
          hy: 'Աճպարարի յուրաքանչյուր ներկայացում առանձնանում է բացառիկությամբ և մոգական միջավայրով։', 
          ru: 'Каждое выступление фокусника отличается эксклюзивностью и магической атмосферой.', 
          en: 'Each magician performance stands out for its exclusivity and magical environment.' 
        },
        price: '60,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724345942719--0.8853509893461255image.webp&w=1920&q=75'
      },
    ],
    'Միջոցառումներ': [
      {
        id: 17,
        title: { hy: 'Նշանադրության կազմակերպում', ru: 'Организация помолвки', en: 'Engagement Organization' },
        description: { 
          hy: 'Մեր ընկերությունը կազմակերպում է նշանադրության արարողություն, որը ստեղծում է կախարդական պահեր։', 
          ru: 'Наша компания организует церемонию помолвки, создающую волшебные моменты.', 
          en: 'Our company organizes engagement ceremonies that create magical moments.' 
        },
        fullDescription: { 
          hy: 'Մեր ընկերությունը կազմակերպում է նշանադրության արարողություն, որը ստեղծում է կախարդական պահեր։', 
          ru: 'Наша компания организует церемонию помолвки, создающую волшебные моменты.', 
          en: 'Our company organizes engagement ceremonies that create magical moments.' 
        },
        price: '500,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724354544378--0.6598089632874184image.webp&w=1920&q=75'
      },
      {
        id: 18,
        title: { hy: 'Ծննդյան առիթների կազմակերպում', ru: 'Организация дней рождения', en: 'Birthday Party Organization' },
        description: { 
          hy: 'Մենք մասնագիտացած ենք ստեղծելու անմոռանալի միջոցառումներ հոբելյարների համար:', 
          ru: 'Мы специализируемся на создании незабываемых мероприятий для юбиляров.', 
          en: '我们专注于为庆祝者打造难忘的活动。' 
        },
        fullDescription: { 
          hy: 'Մենք մասնագիտացած ենք ստեղծելու անմոռանալի միջոցառումներ հոբելյարների համար:', 
          ru: 'Мы специализируемся на создании незабываемых мероприятий для юбиляров.', 
          en: 'We specialize in creating unforgettable events for celebrants.' 
        },
        price: '150,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724361248407--0.36711332876830927image.webp&w=1920&q=75'
      },
      {
        id: 19,
        title: { hy: 'Հարսանյաց սենյակի ձևավորում', ru: 'Оформление свадебной комнаты', en: 'Bridal Room Decoration' },
        description: { 
          hy: 'Հարսանյաց սենյակի ձևավորման գործում Ձեզ կօգնի Մեր դիզայներների և ոճաբանների թիմը։', 
          ru: 'В оформлении свадебной комнаты вам поможет наша команда дизайнеров и стилистов.', 
          en: 'Our team of designers and stylists will help you with the decoration of the bridal room.' 
        },
        fullDescription: { 
          hy: 'Հարսանյաց սենյակի ձևավորման գործում Ձեզ կօգնի Մեր դիզայներների և ոճաբանների թիմը։', 
          ru: 'В оформлении свадебной комнаты вам поможет наша команда дизайнеров и стилистов.', 
          en: 'Our team of designers and stylists will help you with the decoration of the bridal room.' 
        },
        price: '80,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724359541230--0.027714150656094505image.webp&w=1920&q=75'
      },
      {
        id: 20,
        title: { hy: 'Ֆոտոզոնաների ձևավորում', ru: 'Оформление фотозон', en: 'Photo Zone Decoration' },
        description: { 
          hy: 'Մենք մասնագիտացած ենք լուսանկարչական գոտիների ստեղծման գործում։', 
          ru: 'Мы специализируемся на создании фотозон.', 
          en: 'We specialize in creating photo zones.' 
        },
        fullDescription: { 
          hy: 'Մենք մասնագիտացած ենք լուսանկարչական գոտիների ստեղծման գործում։', 
          ru: 'Мы специализируемся на создании фотозон.', 
          en: 'We specialize in creating photo zones.' 
        },
        price: '40,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724361086474--0.7968698807367636image.webp&w=1920&q=75'
      },
      {
        id: 21,
        title: { hy: 'Գենդեր փարթի', ru: 'Гендер-пати', en: 'Gender Reveal Party' },
        description: { 
          hy: 'Մեր կրեատիվ թիմը պատրաստ է ամբողջությամբ կազմակերպելու այս գեղեցիկ օրը։', 
          ru: 'Наша креативная команда готова полностью организовать этот прекрасный день.', 
          en: 'Our creative team is ready to fully organize this beautiful day.' 
        },
        fullDescription: { 
          hy: 'Մեր կրեատիվ թիմը պատրաստ է ամբողջությամբ կազմակերպելու այս գեղեցիկ օրը։', 
          ru: 'Наша креативная команда готова полностью организовать этот прекрасный день.', 
          en: 'Our creative team is ready to fully organize this beautiful day.' 
        },
        price: '180,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724362333688--0.9147879453964904image.webp&w=1920&q=75'
      },
    ],
    'Տեխնիկա': [
      {
        id: 22,
        title: { hy: 'Ծանր ծուխ', ru: 'Тяжелый дым', en: 'Heavy Smoke' },
        description: { 
          hy: 'Լավագույն ծանր ծուխը, որը ձեր միջոցառումն կդարձնի էլ ավելի գեղեցիկ և հիշարժան։', 
          ru: 'Лучший тяжелый дым, который сделает ваше мероприятие еще более красивым и запоминающимся.', 
          en: 'The best heavy smoke that will make your event even more beautiful and memorable.' 
        },
        fullDescription: { 
          hy: 'Լավագույն ծանր ծուխը, որը ձեր միջոցառումն կդարձնի էլ ավելի գեղեցիկ և հիշարժան։', 
          ru: 'Лучший тяжелый дым, который сделает ваше мероприятие еще более красивым и запоминающимся.', 
          en: 'The best heavy smoke that will make your event even more beautiful and memorable.' 
        },
        price: '30,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725722472736--0.09950637526125772image.webp&w=1920&q=75'
      },
      {
        id: 23,
        title: { hy: 'Հրավառության ծառայություն', ru: 'Услуга фейерверков', en: 'Fireworks Service' },
        description: { 
          hy: 'Առաջարկում ենք փայլուն և անպայման հիշարժան հրավառություն։', 
          ru: 'Предлагаем яркий и незабываемый фейерверк.', 
          en: 'We offer a brilliant and unforgettable firework.' 
        },
        fullDescription: { 
          hy: 'Առաջարկում ենք փայլուն և անպայման հիշարժան հրավառություն։', 
          ru: 'Предлагаем яркий и незабываемый фейерверк.', 
          en: 'We offer a brilliant and unforgettable firework.' 
        },
        price: '30,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725723065500--0.9235019901431423image.webp&w=1920&q=75'
      },
      {
        id: 24,
        title: { hy: 'Սառը հրավառություն', ru: 'Холодный фейерверк', en: 'Cold Pyrotechnics' },
        description: { 
          hy: 'Անվտանգ և արտասովոր միջոցառման լուծում՝ առանց կրակի և ծխի վտանգի։', 
          ru: 'Безопасное и необычное решение для мероприятия без опасности огня и дыма.', 
          en: 'A safe and unusual event solution without the danger of fire and smoke.' 
        },
        fullDescription: { 
          hy: 'Անվտանգ և արտասովոր միջոցառման լուծում՝ առանց կրակի և ծխի վտանգի։', 
          ru: 'Безопасное и необычное решение для мероприятия без опасности огня и дыма.', 
          en: 'A safe and unusual event solution without the danger of fire and smoke.' 
        },
        price: '30,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1725723989251--0.9080294603522698image.webp&w=1920&q=75'
      },
      {
        id: 25,
        title: { hy: 'Պրոյեկտոր', ru: 'Проектор', en: 'Projector' },
        description: { 
          hy: 'Տրամադրում ենք տարբեր որակի և չափսերի պրոյեկտորներ՝ տեղադրմամբ։', 
          ru: 'Предоставляем проекторы разного качества и размеров с установкой.', 
          en: 'We provide projectors of various quality and sizes with installation.' 
        },
        fullDescription: { 
          hy: 'Տրամադրում ենք տարբեր որակի և չափսերի պրոյեկտորներ՝ տեղադրմամբ։', 
          ru: 'Предоставляем проекторы разного качества и размеров с установкой.', 
          en: 'We provide projectors of various quality and sizes with installation.' 
        },
        price: '15,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726041202793--0.7905783613949644image.webp&w=1920&q=75'
      },
      {
        id: 26,
        title: { hy: 'Նվագարկիչ', ru: 'Аудиосистема / Колонка', en: 'Sound System' },
        description: { 
          hy: 'Առաջարկում ենք բարձր որակի նվագարկիչների օրավարձով վարձակալության ծառայություն։', 
          ru: 'Предлагаем услугу аренды высококачественных колонок посуточно.', 
          en: 'We offer high-quality sound system daily rental service.' 
        },
        fullDescription: { 
          hy: 'Առաջարկում ենք բարձր որակի նվագարկիչների օրավարձով վարձակալության ծառայություն։', 
          ru: 'Предлагаем услугу аренды высококачественных колонок посуточно.', 
          en: 'We offer high-quality sound system daily rental service.' 
        },
        price: '10,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726043750271--0.9652871581106086image.webp&w=1920&q=75'
      },
    ],
    'Օրավարձով գույք': [
      {
        id: 27,
        title: { hy: 'Սպասք', ru: 'Посуда', en: 'Tableware' },
        description: { 
          hy: 'Տրամադրվում է տարբեր ձևի և միանման ամաններ, գդալներ, պատառաքաղներ։', 
          ru: 'Предоставляются одинаковые тарелки, ложки, вилки различной формы.', 
          en: 'Various dishes, spoons, and forks are provided.' 
        },
        fullDescription: { 
          hy: 'Տրամադրվում է տարբեր ձևի և միանման ամաններ, գդալներ, պատառաքաղներ։', 
          ru: 'Предоставляются одинаковые тарелки, ложки, вилки различной формы.', 
          en: 'Various dishes, spoons, and forks are provided.' 
        },
        price: '100',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726042244507--0.7876617191172142image.webp&w=1920&q=75'
      },
      {
        id: 28,
        title: { hy: 'Սեղան և աթոռներ', ru: 'Стол и стулья', en: 'Table and Chairs' },
        description: { 
          hy: 'Հնարավորություն է տալիս վարձակալել բարձր որակի սեղաններ և աթոռներ։', 
          ru: 'Предоставляет возможность арендовать высококачественные столы и стулья.', 
          en: 'Provides the opportunity to rent high quality tables and chairs.' 
        },
        fullDescription: { 
          hy: 'Հնարավորություն է տալիս վարձակալել բարձր որակի սեղաններ և աթոռներ։', 
          ru: 'Предоставляет возможность арендовать высококачественные столы и стулья.', 
          en: 'Provides the opportunity to rent high quality tables and chairs.' 
        },
        price: '5,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726042865918--0.08492032329777777image.webp&w=1920&q=75'
      },
      {
        id: 29,
        title: { hy: 'Տենտ', ru: 'Тент / Шатер', en: 'Tent' },
        description: { 
          hy: 'Հիանալի լուծում են պաշտպանվելու համար ցանկացած եղանակից։', 
          ru: 'Отличное решение для защиты от любой погоды.', 
          en: 'Great solution to protect from any weather.' 
        },
        fullDescription: { 
          hy: 'Հիանալի լուծում են պաշտպանվելու համար ցանկացած եղանակից։', 
          ru: 'Отличное решение для защиты от любой погоды.', 
          en: 'Great solution to protect from any weather.' 
        },
        price: '20,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045237838--0.5117936535743877image.webp&w=1920&q=75'
      },
    ], 
    'Նկարահանում': [
      {
        id: 6,
        title: { hy: 'Ֆոտո Նկարահանում', ru: 'Фотосъемка', en: 'Photo Shoot' },
        description: { 
          hy: 'Մենք առաջարկում ենք պրոֆեսիոնալ ֆոտո նկարահանման ծառայություն...', 
          ru: 'Мы предлагаем профессиональные услуги фотосъемки...', 
          en: 'We offer professional photo shoot services...' 
        },
        fullDescription: { 
          hy: 'Մենք առաջարկում ենք պրոֆեսիոնալ ֆոտո նկարահանման ծառայություն փորձառու մասնագետների կողմից։', 
          ru: 'Мы предлагаем профессиональные услуги фотосъемки опыными специалистами.', 
          en: 'We offer professional photo shoot services by experienced specialists.' 
        },
        price: '20,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045632835--0.6404655108118316image.webp&w=1920&q=75'
      },
      {
        id: 7,
        title: { hy: 'Վիդեո Նկարահանում', ru: 'Видеосъемка', en: 'Video Recording' },
        description: { 
          hy: 'Ձեր տեսանյութերը կստանան բարձր որակ և պրոֆեսիոնալ տեսք...', 
          ru: 'Ваши видео получат высокое качество и профессиональный вид...', 
          en: 'Your videos will get high quality and a professional look...' 
        },
        fullDescription: { 
          hy: 'Ձեր տեսանյութերը կստանան բարձր որակ և պրոֆեսիոնալ տեսք նորագույն տեխնիկայի միջոցով։', 
          ru: 'Ваши видео получат высокое качество и профессиональный вид с помощью новейшей техники.', 
          en: 'Your videos will get high quality and a professional look using the latest equipment.' 
        },
        price: '35,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726045956349--0.40971954076083006image.webp&w=1920&q=75'
      },
      {
        id: 8,
        title: { hy: 'Դրոնով Նկարահանում', ru: 'Съемка с дрона', en: 'Drone Filming' },
        description: { 
          hy: 'Ապահովեք ձեր նախագծերի անկրկնելի տեսարանները մեր պրոֆեսիոնալ դրոններով...', 
          ru: 'Обеспечьте уникальные виды ваших проектов с нашими профессиональными дронами...', 
          en: 'Ensure unique views of your projects with our professional drones...' 
        },
        fullDescription: { 
          hy: 'Ապահովեք ձեր նախագծերի անկրկնելի տեսարանները մեր պրոֆեսիոնալ դրոններով։', 
          ru: 'Обеспечьте уникальные виды ваших проектов с нашими профессиональными дронами.', 
          en: 'Ensure unique views of your projects with our professional drones.' 
        },
        price: '25,000',
        image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1726046177472--0.6775833503340363image.webp&w=1920&q=75'
      }
    ],
    'Ուղևորափոխադրում': [
      {
        id: 9,
        title: { hy: 'Ուղևորափոխադրում', ru: 'Пассажироперевозки', en: 'Transportation' },
        description: { 
          hy: 'Մենք տրամադրում ենք բարձրակարգ փոխադրամիջոցներ՝ ապահովելով Ձեր հարմարավետությունը...', 
          ru: 'Мы предоставляем первоклассный транспорт, обеспечивая ваш комфорт...', 
          en: 'We provide top-class vehicles ensuring your comfort...' 
        },
        fullDescription: { 
          hy: 'Մենք տրամադրում ենք բարձրակարգ փոխադրամիջոցներ՝ ապահովելով Ձեր հարմարավետությունն ու անվտանգությունը։', 
          ru: 'Мы предоставляем первоклассный транспорт, обеспечивая ваш комфорт и безопасность.', 
          en: 'We provide top-class vehicles, ensuring your comfort and safety.' 
        },
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
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center flex-col sm:flex-row gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
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
                    alt={service.title[language] || service.title.hy}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="pt-4 px-2 pb-2 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-black text-lg text-[#1a202c] mb-2">{service.title[language] || service.title.hy}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify line-clamp-3">
                      {service.description[language] || service.description.hy}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-1 font-black text-sm text-[#1a202c]">
                      <span>{service.price} ֏</span>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="border border-gray-200 text-gray-700 hover:bg-[#1a202c] hover:text-white hover:border-[#1a202c] text-[11px] font-bold px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
                    >
                      {t.bookBtn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 text-sm">
            {t.noServices}
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
              <h2 className="text-xl font-black text-[#1a202c]">{selectedService.title[language] || selectedService.title.hy}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                {selectedService.fullDescription[language] || selectedService.fullDescription.hy || selectedService.description[language] || selectedService.description.hy}
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-5 border-t border-gray-50">
              <div className="flex items-center gap-1 font-black text-lg text-[#1a202c]">
                <span>{selectedService.price} ֏</span>
              </div>

              <button
                onClick={() => {
                  alert(`Ամրագրվել է՝ ${selectedService.title[language] || selectedService.title.hy}`);
                  setSelectedService(null);
                }}
                className="bg-[#fca34d] hover:bg-[#f59332] text-white font-black px-8 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
              >
                {t.bookBtn}
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
            {t.listingTitle}
          </h2>
          <p 
            className="m-0 font-light"
            style={{ fontSize: '15px', color: '#e2e8f0', marginBottom: '40px' }}
          >
            {t.listingSubtitle}
          </p>
          
          <form className="flex gap-4 items-center flex-wrap" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder={t.namePlaceholder} 
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
              placeholder={t.phonePlaceholder} 
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
              placeholder={t.emailPlaceholder} 
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
              {t.sendBtn}
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
            {t.contactsTitle}
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
              <span>{t.address}</span>
            </div>
          </div>

          <Link 
            to="/gaxtniutyun" 
            className="block no-underline text-slate-400 hover:text-white cursor-pointer transition-colors" 
            style={{ fontSize: '13px', marginBottom: '35px' }}
          >
            {t.privacyPolicy}
          </Link>

          <p 
            className="text-slate-500 m-0 tracking-wide" 
            style={{ fontSize: '12px' }}
          >
            {t.companyText}
          </p>
        </div>
      </footer>
    </div>
  );
}