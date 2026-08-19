import React from 'react';
import { useLanguageStore } from './useLanguageStore'; // Ներմուծում ենք լեզվի store-ը

export default function Gaxtniutyun() {
  // Լեզվի ստացումը store-ից
  const { language } = useLanguageStore();

  // Բազմալեզու բառարան
  const translations = {
    hy: {
      pageTitle: "Գաղտնիության քաղաքականություն",
      agreementTitle: "Համաձայնագիր «Amaranoc.am» կայքի օգտագործման վերաբերյալ.",
      agreementIntro: "Այս համաձայնագիրը օրինականորեն պարտադիր փաստաթուղթ է կայքի բոլոր օգտատերերի համար: Կայքից և դրա ծառայություններից օգտվելիս օգտվողը և գովազդի սեփականատերը համաձայնում են սույն պայմանագրի պայմաններին:",
      
      termsTitle: "Տերմինների սահմանումներ",
      term1: "1.1. Amaranoc.am-ը կայք է, որը նախատեսված է ամառանոցների, հանգստյան գոտիների որոնման և վարձակալության, ինչպես նաև շուկայական ծառայություններ մատուցելու համար:",
      term2: "1.2. Օգտատեր՝ ֆիզիկական կամ իրավաբանական անձ, որն օգտագործում է կայքը և դրա ծառայությունները՝ հանգստյան գոտիներ փնտրելու, վարձակալություն կազմակերպելու և շուկայական ծառայություններից օգտվելու համար:",
      term3: "1.3. Գովազդի սեփականատերը ֆիզիկական կամ իրավաբանական անձ է, ով կայքում հայտարարություն է տեղադրել օրավարձով առանձնատան կամ հանգստյան գոտու առաջարկի մասին:",

      registrationTitle: "Գրանցում կայքում",
      reg1: "2.1. Կայքից և դրա ծառայություններից օգտվելու համար դուք պետք է անցնեք գրանցման ընթացակարգը:",
      reg2: "2.2. Գրանցվելիս օգտատերը հավաստի տեղեկատվություն է տրամադրում իր մասին։",
      reg3: "2.3. Գովազդի սեփականատերը կայքում գովազդ տեղադրելու ժամանակ նույնպես պարտավոր է հավաստի տեղեկատվություն տրամադրել իր և գույքի մասին",
      reg4: "2.4. Amaranoc.am ընկերությունը պատասխանատվություն չի կրում օգտատիրոջ կամ գովազդի սեփականատիրոջ կողմից տրամադրված տեղեկատվության ճշգրտության համար:",

      usageTitle: "Կայքի և դրա ծառայությունների օգտագործումը",
      usage1: "3.1. Օգտատերը և գովազդի սեփականատերը պարտավորվում են օգտագործել կայքը և դրա ծառայությունները միայն օրինական նպատակներով և կիրառելի օրենսդրությանը համապատասխան:",
      usage2: "3.2. Օգտատերը և գովազդի սեփականատերը իրավունք չունեն օգտվել կայքից և նրա ծառայություններից՝ կիրառելի օրենսդրությանը հակասող տեղեկատվություն տարածելու, ինչպես նաև խարդախություն և այլ անօրինական գործողություններ իրականացնելու համար:",
      usage3: "3.3. Amaranoc.am ընկերությունը իրավունք ունի սահմանափակել կամ դադարեցնել մուտքը կայք և դրա ծառայություններ՝ օգտատիրոջ կամ սեփականատիրոջ կողմից սույն պայմանագրի պայմանների մասին հայտարարության խախտման դեպքում:",

      adsTitle: "Կայքում գովազդի տեղադրում",
      ads1: "4.1. Գովազդի սեփականատերը պարտավորվում է կայքում տեղադրել միայն վստահելի տեղեկատվություն օրավարձով առաջարկվող առանձնատան կամ հանգստյան գոտու մասին:",
      ads2: "4.2. Հայտարարության սեփականատերն ամբողջությամբ պատասխանատվություն է կրում տեղադրված գովազդի բովանդակության, ինչպես նաև տրամադրված լուսանկարների և գույքի նկարագրության համար:",
      ads3: "4.3. Amaranoc.am ընկերությունը պատասխանատվություն չի կրում կայքում տեղադրված գովազդի բովանդակության, ինչպես նաև օրավարձով առաջարկվող առանձնատան կամ հանգստյան գոտու որակի համար։",

      paymentTitle: "Ծառայությունների համար վճարում",
      pay1: "5.1. Կայքի ծառայություններիից օգտվելիս օգտատերը և գովազդի սեփականատերը պարտավոր են վճարել համապատասխան վճար ամրագրումը հաստատելու համար:",
      pay2: "5.2. Amaranoc.am ընկերությունը իրավունք ունի ցանկացած պահի փոխել ծառայությունների արժեքը և սակագները՝ այդ մասին նախապես տեղեկացնելով գովազդի սեփականատերերին:",
      pay3: "5.3. Ծառայությունների դիմաց վճարումը կատարվում է վճարման պահին գործող սակագներով:",
      pay4: "5.4. Amaranoc.am ընկերությունը պատասխանատվություն չի կրում կայքի ծառայությունների համար վճարելիս վճարային համակարգերի կողմից գանձվող հնարավոր միջնորդավճարների համար:",

      privacyTitle: "Գաղտնիություն",
      priv1: "6.1. Amaranoc.am ընկերությունը պարտավորվում է պահպանել օգտատիրոջ և գովազդի սեփականատիրոջ կողմից տրամադրված տեղեկատվության գաղտնիությունը կայքում գրանցվելիս և դրա ծառայություններից օգտվելիս:",
      priv2: "6.2. Amaranoc.am ընկերությունը իրավունք ունի օգտագործելու օգտատերերի և գովազդի սեփականատերերի տրամադրած տեղեկատվությունը միայն կայքի ծառայությունների որակը բարելավելու և օգտատերերին կայքի նոր ծառայությունների և գործառույթների մասին տեղեկացնելու համար:",

      responsibilityTitle: "Պատասխանատվություն",
      resp1: "7.1. Amaranoc.am ընկերությունը պատասխանատվություն չի կրում օգտատերերի կամ գովազդի սեփականատերերի կողմից կայքի և նրա ծառայություններից օգտվելու հետևանքով կրած վնասների համար:",
      resp2: "7.2. Ցուցակման սեփականատերը բացառապես պատասխանատվություն է կրում առանձնատան կամ հանգստյան գոտու վարձակալության ժամանակ օրենքի պահանջների պահպանման, ինչպես նաև առանձնատան կամ հանգստյան գոտու վերաբերյալ տրամադրվող տեղեկատվության համար:",
      resp3: "7.3. Գովազդի օգտատերը և սեփականատերը պատասխանատվություն են կրում կայքից և նրա ծառայություններից օգտվելիս իրենց կողմից թույլ տրված ցանկացած խախտման համար:",

      taxTitle: "Հարկային պարտավորություն",
      tax1: "8.1. Amaranoc.am ընկերությունը հարկային պարտավորություն չի կրում գովազդի սեփականատերերի համար և հարկային գործակալ չէ գովազդի սեփականատերերի հետ կապված:",
      tax2: "8.2. Ցուցակման սեփականատերը լիովին պատասխանատու է բնակարանների վարձակալության հետ կապված բոլոր հարկերի և տուրքերի վճարման համար՝ կիրառելի օրենսդրությանը համապատասխան:",

      provisionsTitle: "Համաձայնագրի դրույթները",
      prov1: "10.1. Սույն պայմանագիրը օգտատերերի, գովազդի սեփականատերերի և Amaranoc.am ընկերության միջև միակ համաձայնությունն է կայքի և դրա ծառայությունների օգտագործման վերաբերյալ:",
      prov2: "10.2. Սույն պայմանագիրը կարգավորվում է Հայաստանի Հանրապետության գործող օրենսդրությամբ։",
      prov3: "10.3. Եթե պարզվի, որ սույն պայմանագրի որևէ դրույթ անվավեր է կամ անիրագործելի, դա չի ազդի պայմանագրի մնացած դրույթների վավերականության կամ կիրառելիության վրա:",
      prov4: "10.4. Amaranoc.am ընկերությունը իրավունք ունի ցանկացած պահի փոխել սույն պայմանագիրը՝ նախապես տեղեկացնելով գովազդի օգտատերերին և սեփականատերերին:",
      prov5: "10.5. Սույն համաձայնագիրն ուժի մեջ է մտնում օգտատերերի և գովազդի սեփականատերերի կայքում գրանցման պահից և ուժի մեջ է մինչև կայքից հեռացնելը:",

      privacy2Title: "Գաղտնիություն",
      priv2_1: "11.1. Amaranoc.am ընկերությունը պարտավորվում է պահպանել օգտատերերի բոլոր անձնական տվյալների գաղտնիությունը և գովազդի սեփականատերը՝ Հայաստանի Հանրապետության օրենսդրությանը համապատասխան",
      priv2_2: "11.2. Գովազդի օգտատերերը և սեփականատերերը պարտավորվում են կայքում գրանցվելիս տրամադրել ճշգրիտ և հավաստի տվյալներ, ինչպես նաև չհրապարակել իրենց անձնական տվյալները երրորդ անձանց:",

      ipTitle: "Մտավոր սեփականություն",
      ip1: "12.1. Amaranoc.am կայքում տեղադրված ապրանքային նշանների, լոգոների, դիզայնի, գրաֆիկայի, ծրագրային ապահովման, տվյալների բազաների և այլ նյութերի նկատմամբ բոլոր իրավունքները պատկանում են Amaranoc.am ընկերությանը։",
      ip2: "12.2. Կայքում տեղադրված ոչ մի նյութ չի կարող պատճենվել, վերարտադրվել, փոփոխվել, տարածվել կամ օգտագործվել առանց Garant.am-ի կամ նրա գործընկերների նախնական գրավոր թույլտվության:",

      resp2Title: "Պատասխանատվություն",
      resp2_1: "13.1. Amaranoc.am ընկերությունը պատասխանատվություն չի կրում կայքի կամ նրա ծառայությունների օգտագործման հետևանքով առաջացած ուղղակի կամ անուղղակի վնասի համար:",
      resp2_2: "13.2. Amaranoc.am ընկերությունը պատասխանատվություն չի կրում կայքում տեղադրված կացարանի որակի, անվտանգության կամ օրինականության, ինչպես նաև գովազդի սեփականատերերի կամ օգտատերերի գործողությունների կամ անգործության համար:",
      resp2_3: "13.3. Գովազդի օգտատերերը և սեփականատերերը լիովին պատասխանատու են կայքից և նրա ծառայություններից օգտվելիս գործող օրենսդրության խախտման համար:",

      detailsTitle: "Մանրամասներ",
      det1: "15.1. Սույն պայմանագիրը ստորագրվում է օգտատերերի և գովազդի սեփականատերերի կողմից էլեկտրոնային ձևով կայքում գրանցվելիս:",
      det2: "15.2. Սույն պայմանագիրը չի պահանջում Amaranoc.am ընկերության ստորագրությունը և համարվում է կնքված՝ կայքում օգտատերերի և գովազդի սեփականատերերի գրանցման պահից:",

      modTitle: "Պայմանագրում փոփոխություն և լրացում",
      mod1: "16.1. Amaranoc.am ընկերությունը իրավունք ունի ցանկացած ժամանակ փոխել սույն պայմանագրի պայմանները՝ իր կայքում տեղադրելով պայմանագրի նոր տարբերակը:",
      mod2: "16.2. Սույն պայմանագրում փոփոխություններն ու լրացումները ուժի մեջ են մտնում կայքում տեղադրվելու պահից:",
      mod3: "16.3. Գովազդի օգտատերերը և սեփականատերերը պարտավորվում են պարբերաբար ստուգել amaranoc.am կայքը՝ պայմանագրի պայմանների փոփոխության համար:",

      disputeTitle: "Վեճերի լուծում",
      disp1: "17.1. Սույն Համաձայնագրի կատարման ընթացքում կողմերի միջև ծագած բոլոր վեճերն ու տարաձայնությունները լուծվում են կողմերի միջև բանակցությունների միջոցով:",
      disp2: "17.2. Եթե բանակցությունների արդյունքում կողմերը համաձայնության չեն գալիս, ապա վեճերը Հայաստանի Հանրապետության օրենսդրությամբ սահմանված կարգով ուղարկվում են դատական մարմիններին:",
      disp3: "18.1. Սույն պայմանագիրը կողմերի միջև եղած ամբողջ համաձայնությունն է և փոխարինում է կողմերի միջև բոլոր նախկին պայմանավորվածություններին և փոխըմբռնմանը:",
      disp4: "18.2. Եթե սույն պայմանագրի որևէ դրույթ անվավեր է ճանաչվում, դա չի ազդում պայմանագրի այլ դրույթների վավերականության վրա:",
      disp5: "18.3. Սույն պայմանագիրը կարգավորվում և մեկնաբանվում է Հայաստանի Հանրապետության օրենսդրությանը համապատասխան:",
      disp6: "18.4. Սույն պայմանագիրն ուժի մեջ է մտնում amaranoc.am կայքում օգտատերերի և գովազդի սեփականատերերի գրանցման պահից և ուժի մեջ է մինչև կողմերից մեկի կողմից պայմանագրի պայմաններին համապատասխան դադարեցվելը:"
    },
    ru: {
      pageTitle: "Политика конфиденциальности",
      agreementTitle: "Соглашение об использовании сайта «Amaranoc.am»:",
      agreementIntro: "Данное соглашение является юридически обязательным документом для всех пользователей сайта. Используя сайт и его сервисы, пользователь и владелец рекламы соглашаются с условиями настоящего соглашения.",
      
      termsTitle: "Определения терминов",
      term1: "1.1. Amaranoc.am — это сайт, предназначенный для поиска и аренды дач, зон отдыха, а также для предоставления рыночных услуг.",
      term2: "1.2. Пользователь — физическое или юридическое лицо, использующее сайт и его сервисы для поиска зон отдыха, организации аренды и пользования рыночными услугами.",
      term3: "1.3. Владелец рекламы — физическое или юридическое лицо, разместившее на сайте объявление о сдаче в посуточную аренду особняка или зоны отдыха.",

      registrationTitle: "Регистрация на сайте",
      reg1: "2.1. Для использования сайта и его сервисов вы должны пройти процедуру регистрации.",
      reg2: "2.2. При регистрации пользователь предоставляет достоверную информацию о себе.",
      reg3: "2.3. Владелец рекламы при размещении рекламы на сайте также обязан предоставить достоверную информацию о себе и имуществе.",
      reg4: "2.4. Компания Amaranoc.am не несет ответственности за точность информации, предоставленной пользователем или владельцем рекламы.",

      usageTitle: "Использование сайта и его сервисов",
      usage1: "3.1. Пользователь и владелец рекламы обязуются использовать сайт и его сервисы исключительно в законных целях и в соответствии с применимым законодательством.",
      usage2: "3.2. Пользователь и владелец рекламы не имеют права использовать сайт и его сервисы для распространения информации, противоречащей применимому законодательству, а также для совершения мошенничества и иных незаконных действий.",
      usage3: "3.3. Компания Amaranoc.am имеет право ограничить или прекратить доступ к сайту и его сервисам в случае нарушения пользователем или владельцем условий настоящего соглашения.",

      adsTitle: "Размещение рекламы на сайте",
      ads1: "4.1. Владелец рекламы обязуется размещать на сайте только достоверную информацию об особняке или зоне отдыха, предлагаемых посуточно.",
      ads2: "4.2. Владелец объявления несет полную ответственность за содержание размещенной рекламы, а также за предоставленные фотографии и описание имущества.",
      ads3: "4.3. Компания Amaranoc.am не несет ответственности за содержание рекламы, размещенной на сайте, а также за качество предлагаемых посуточно особняков или зон отдыха.",

      paymentTitle: "Оплата услуг",
      pay1: "5.1. При использовании сервисов сайта пользователь и владелец рекламы обязаны выплатить соответствующий сбор для подтверждения бронирования.",
      pay2: "5.2. Компания Amaranoc.am имеет право в любое время изменять стоимость услуг и тарифы, предварительно уведомив об этом владельцев рекламы.",
      pay3: "5.3. Оплата услуг производится по тарифам, действующим на момент оплаты.",
      pay4: "5.4. Компания Amaranoc.am не несет ответственности за возможные комиссионные сборы платежных систем при оплате услуг сайта.",

      privacyTitle: "Конфиденциальность",
      priv1: "6.1. Компания Amaranoc.am обязуется соблюдать конфиденциальность информации, предоставленной пользователем и владельцем рекламы при регистрации на сайте и использовании его сервисов.",
      priv2: "6.2. Компания Amaranoc.am имеет право использовать информацию, предоставленную пользователями и владельцами рекламы, исключительно для улучшения качества сервисов сайта и информирования пользователей о новых услугах и функциях.",

      responsibilityTitle: "Ответственность",
      resp1: "7.1. Компания Amaranoc.am не несет ответственности за ущерб, понесенный пользователями или владельцами рекламы в результате использования сайта и его сервисов.",
      resp2: "7.2. Владелец листинга несет исключительную ответственность за соблюдение требований закона при аренде особняка или зоны отдыха, а также за информацию, предоставляемую об особняке или зоне отдыха.",
      resp3: "7.3. Пользователь и владелец рекламы несут ответственность за любые нарушения, допущенные ими при использовании сайта и его сервисов.",

      taxTitle: "Налоговые обязательства",
      tax1: "8.1. Компания Amaranoc.am не несет налоговых обязательств за владельцев рекламы и не является налоговым агентом в отношении владельцев рекламы.",
      tax2: "8.2. Владелец листинга несет полную ответственность за уплату всех налогов и сборов, связанных с арендой жилья, в соответствии с применимым законодательством.",

      provisionsTitle: "Положения соглашения",
      prov1: "10.1. Настоящее соглашение является единственным соглашением между пользователями, владельцами рекламы и компанией Amaranoc.am относительно использования сайта и его сервисов.",
      prov2: "10.2. Настоящее соглашение регулируется действующим законодательством Республики Армения.",
      prov3: "10.3. Если какое-либо положение настоящего соглашения будет признано недействительным или неисполнимым, это не повлияет на действительность или применимость остальных положений соглашения.",
      prov4: "10.4. Компания Amaranoc.am имеет право в любое время изменять настоящее соглашение, предварительно уведомив пользователей и владельцев рекламы.",
      prov5: "10.5. Настоящее соглашение вступает в силу с момента регистрации пользователей и владельцев рекламы на сайте и действует до удаления с сайта.",

      privacy2Title: "Конфиденциальность",
      priv2_1: "11.1. Компания Amaranoc.am обязуется сохранять конфиденциальность всех личных данных пользователей, а владелец рекламы — в соответствии с законодательством Республики Армения.",
      priv2_2: "11.2. Пользователи и владельцы рекламы обязуются при регистрации на сайте предоставлять точные и достоверные данные, а также не разглашать свои личные данные третьим лицам.",

      ipTitle: "Интеллектуальная собственность",
      ip1: "12.1. Все права на товарные знаки, логотипы, дизайн, графику, программное обеспечение, базы данных и другие материалы, размещенные на сайте Amaranoc.am, принадлежат компании Amaranoc.am.",
      ip2: "12.2. Никакие материалы, размещенные на сайте, не могут быть скопированы, воспроизведены, изменены, распространены или использованы без предварительного письменного разрешения Garant.am или его партнеров.",

      resp2Title: "Ответственность",
      resp2_1: "13.1. Компания Amaranoc.am не несет ответственности за прямой или косвенный ущерб, возникший в результате использования сайта или его сервисов.",
      resp2_2: "13.2. Компания Amaranoc.am не несет ответственности за качество, безопасность или законность жилья, размещенного на сайте, а также за действия или бездействие владельцев рекламы или пользователей.",
      resp2_3: "13.3. Пользователи и владельцы рекламы несут полную ответственность за нарушение действующего законодательства при использовании сайта и его сервисов.",

      detailsTitle: "Детали",
      det1: "15.1. Настоящее соглашение подписывается пользователями и владельцами рекламы в электронной форме при регистрации на сайте.",
      det2: "15.2. Настоящее соглашение не требует подписи компании Amaranoc.am и считается заключенным с момента регистрации пользователей и владельцев рекламы на сайте.",

      modTitle: "Изменение и дополнение соглашения",
      mod1: "16.1. Компания Amaranoc.am имеет право в любое время изменять условия настоящего соглашения, разместив новую версию соглашения на своем сайте.",
      mod2: "16.2. Изменения и дополнения в настоятельное соглашение вступают в силу с момента их размещения на сайте.",
      mod3: "16.3. Пользователи и владельцы рекламы обязуются регулярно проверять сайт amaranoc.am на предмет изменения условий соглашения.",

      disputeTitle: "Разрешение споров",
      disp1: "17.1. Все споры и разногласия, возникающие между сторонами в ходе исполнения настоящего Соглашения, решаются путем переговоров между сторонами.",
      disp2: "17.2. Если в результате переговоров стороны не приходят к согласию, споры передаются в судебные органы в порядке, установленном законодательством Республики Армения.",
      disp3: "18.1. Настоящее соглашение представляет собой полное соглашение между сторонами и заменяет все предыдущие договоренности и понимания между сторонами.",
      disp4: "18.2. Если какое-либо положение настоящего соглашения признается недействительным, это не влияет на действительность других положений соглашения.",
      disp5: "18.3. Настоящее соглашение регулируется и толкуется в соответствии с законодательством Республики Армения.",
      disp6: "18.4. Настоящее соглашение вступает в силу с момента регистрации пользователей и владельцев рекламы на сайте amaranoc.am и действует до прекращения одной из сторон в соответствии с условиями соглашения."
    },
    en: {
      pageTitle: "Privacy Policy",
      agreementTitle: "Agreement on the use of the «Amaranoc.am» website:",
      agreementIntro: "This agreement is a legally binding document for all users of the website. By using the website and its services, the user and the ad owner agree to the terms of this agreement.",
      
      termsTitle: "Definitions of Terms",
      term1: "1.1. Amaranoc.am is a website designed for searching and renting country houses, recreation areas, and providing market services.",
      term2: "1.2. User: An individual or legal entity that uses the website and its services to search for recreation areas, organize rentals, and use market services.",
      term3: "1.3. Ad Owner: An individual or legal entity that has posted an advertisement on the website offering a mansion or recreation area for daily rent.",

      registrationTitle: "Website Registration",
      reg1: "2.1. To use the website and its services, you must go through the registration procedure.",
      reg2: "2.2. Upon registration, the user provides accurate information about themselves.",
      reg3: "2.3. When placing an ad on the website, the ad owner is also obliged to provide accurate information about themselves and the property.",
      reg4: "2.4. Amaranoc.am company is not responsible for the accuracy of the information provided by the user or the ad owner.",

      usageTitle: "Use of the Website and its Services",
      usage1: "3.1. The user and the ad owner undertake to use the website and its services only for lawful purposes and in accordance with applicable legislation.",
      usage2: "3.2. The user and the ad owner have no right to use the website and its services to distribute information contrary to applicable legislation, as well as to commit fraud and other illegal actions.",
      usage3: "3.3. Amaranoc.am company has the right to restrict or terminate access to the website and its services in case of violation of the terms of this agreement by the user or owner.",

      adsTitle: "Placing Advertisements on the Website",
      ads1: "4.1. The ad owner undertakes to post on the website only reliable information about the mansion or recreation area offered for daily rent.",
      ads2: "4.2. The owner of the listing bears full responsibility for the content of the posted advertisement, as well as for the provided photos and property description.",
      ads3: "4.3. Amaranoc.am company is not responsible for the content of advertisements posted on the website, nor for the quality of the mansion or recreation area offered for daily rent.",

      paymentTitle: "Payment for Services",
      pay1: "5.1. When using the website's services, the user and the ad owner are required to pay a corresponding fee to confirm the reservation.",
      pay2: "5.2. Amaranoc.am company has the right to change the cost of services and tariffs at any time by notifying ad owners in advance.",
      pay3: "5.3. Payment for services is made according to the tariffs effective at the time of payment.",
      pay4: "5.4. Amaranoc.am company is not responsible for possible intermediary fees charged by payment systems when paying for website services.",

      privacyTitle: "Privacy",
      priv1: "6.1. Amaranoc.am company undertakes to maintain the confidentiality of information provided by the user and the ad owner upon registration on the website and use of its services.",
      priv2: "6.2. Amaranoc.am company has the right to use the information provided by users and ad owners solely to improve the quality of website services and inform users about new services and features.",

      responsibilityTitle: "Liability",
      resp1: "7.1. Amaranoc.am company is not responsible for damages incurred by users or ad owners as a result of using the website and its services.",
      resp2: "7.2. The listing owner bears exclusive responsibility for compliance with legal requirements during the rental of a mansion or recreation area, as well as for the information provided regarding them.",
      resp3: "7.3. The user and the ad owner are responsible for any violations committed by them while using the website and its services.",

      taxTitle: "Tax Liability",
      tax1: "8.1. Amaranoc.am company bears no tax liability for ad owners and is not a tax agent in relation to ad owners.",
      tax2: "8.2. The listing owner is fully responsible for paying all taxes and fees related to housing rentals in accordance with applicable legislation.",

      provisionsTitle: "Provisions of the Agreement",
      prov1: "10.1. This agreement is the sole agreement between users, ad owners, and Amaranoc.am company regarding the use of the website and its services.",
      prov2: "10.2. This agreement is governed by the current legislation of the Republic of Armenia.",
      prov3: "10.3. If any provision of this agreement is found to be invalid or unenforceable, it will not affect the validity or enforceability of the remaining provisions.",
      prov4: "10.4. Amaranoc.am company has the right to change this agreement at any time by notifying users and ad owners in advance.",
      prov5: "10.5. This agreement enters into force from the moment of registration of users and ad owners on the website and remains valid until deletion from the website.",

      privacy2Title: "Privacy",
      priv2_1: "11.1. Amaranoc.am company undertakes to maintain the confidentiality of all personal data of users, and the ad owner—in accordance with the legislation of the Republic of Armenia.",
      priv2_2: "11.2. Users and ad owners undertake to provide accurate and reliable data when registering on the website, as well as not to disclose their personal data to third parties.",

      ipTitle: "Intellectual Property",
      ip1: "12.1. All rights to trademarks, logos, design, graphics, software, databases, and other materials posted on the Amaranoc.am website belong to Amaranoc.am company.",
      ip2: "12.2. No materials posted on the website may be copied, reproduced, modified, distributed, or used without the prior written permission of Garant.am or its partners.",

      resp2Title: "Liability",
      resp2_1: "13.1. Amaranoc.am company is not responsible for direct or indirect damage caused by the use of the website or its services.",
      resp2_2: "13.2. Amaranoc.am company is not responsible for the quality, safety, or legality of accommodation posted on the website, nor for the actions or inactions of ad owners or users.",
      resp2_3: "13.3. Users and ad owners are fully responsible for violating current legislation when using the website and its services.",

      detailsTitle: "Details",
      det1: "15.1. This agreement is signed by users and ad owners in electronic form when registering on the website.",
      det2: "15.2. This agreement does not require the signature of Amaranoc.am company and is considered concluded from the moment of registration of users and ad owners on the website.",

      modTitle: "Modification and Supplement to the Agreement",
      mod1: "16.1. Amaranoc.am company has the right to change the terms of this agreement at any time by posting a new version of the agreement on its website.",
      mod2: "16.2. Amendments and additions to this agreement enter into force from the moment they are posted on the website.",
      mod3: "16.3. Users and ad owners undertake to regularly check the amaranoc.am website for changes to the terms of the agreement.",

      disputeTitle: "Dispute Resolution",
      disp1: "17.1. All disputes and disagreements arising between the parties during the execution of this Agreement shall be resolved through negotiations between the parties.",
      disp2: "17.2. If the parties fail to reach an agreement through negotiations, disputes shall be submitted to judicial authorities in the manner established by the legislation of the Republic of Armenia.",
      disp3: "18.1. This agreement constitutes the entire agreement between the parties and supersedes all prior agreements and understandings between the parties.",
      disp4: "18.2. If any provision of this agreement is held invalid, it does not affect the validity of other provisions of the agreement.",
      disp5: "18.3. This agreement is governed and interpreted in accordance with the legislation of the Republic of Armenia.",
      disp6: "18.4. This agreement enters into force from the moment of registration of users and ad owners on the amaranoc.am website and remains in force until terminated by one of the parties in accordance with the terms of the agreement."
    }
  };

  const t = translations[language] || translations.hy;

  return (
    <div 
      className="font-sans text-neutral-800" 
      style={{ padding: '50px' }}
    >
      <h3 
        className="absolute font-bold text-xl text-neutral-900"
        style={{ top: '10px' }}
      >
        {t.pageTitle}
      </h3>

      <div 
        className="absolute text-sm font-normal leading-relaxed text-neutral-700"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        <h4 className="font-semibold text-base mt-6 mb-3 text-neutral-900">
          {t.agreementTitle}
        </h4>
        
        <p className="mb-4">
          {t.agreementIntro}
        </p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.termsTitle}</p>
        <p className="mb-2">{t.term1}</p>
        <p className="mb-2">{t.term2}</p>
        <p className="mb-4">{t.term3}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.registrationTitle}</p>
        <p className="mb-2">{t.reg1}</p>
        <p className="mb-2">{t.reg2}</p>
        <p className="mb-2">{t.reg3}</p>
        <p className="mb-4">{t.reg4}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.usageTitle}</p>
        <p className="mb-2">{t.usage1}</p>
        <p className="mb-2">{t.usage2}</p>
        <p className="mb-4">{t.usage3}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.adsTitle}</p>
        <p className="mb-2">{t.ads1}</p>
        <p className="mb-2">{t.ads2}</p>
        <p className="mb-4">{t.ads3}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.paymentTitle}</p>
        <p className="mb-2">{t.pay1}</p>
        <p className="mb-2">{t.pay2}</p>
        <p className="mb-2">{t.pay3}</p>
        <p className="mb-4">{t.pay4}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.privacyTitle}</p>
        <p className="mb-2">{t.priv1}</p>
        <p className="mb-4">{t.priv2}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.responsibilityTitle}</p>
        <p className="mb-2">{t.resp1}</p>
        <p className="mb-2">{t.resp2}</p>
        <p className="mb-4">{t.resp3}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.taxTitle}</p>
        <p className="mb-2">{t.tax1}</p>
        <p className="mb-4">{t.tax2}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.provisionsTitle}</p>
        <p className="mb-2">{t.prov1}</p>
        <p className="mb-2">{t.prov2}</p>
        <p className="mb-2">{t.prov3}</p>
        <p className="mb-2">{t.prov4}</p>
        <p className="mb-4">{t.prov5}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.privacy2Title}</p>
        <p className="mb-2">{t.priv2_1}</p>
        <p className="mb-4">{t.priv2_2}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.ipTitle}</p>
        <p className="mb-2">{t.ip1}</p>
        <p className="mb-4">{t.ip2}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.resp2Title}</p>
        <p className="mb-2">{t.resp2_1}</p>
        <p className="mb-2">{t.resp2_2}</p>
        <p className="mb-4">{t.resp2_3}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.detailsTitle}</p>
        <p className="mb-2">{t.det1}</p>
        <p className="mb-4">{t.det2}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.modTitle}</p>
        <p className="mb-2">{t.mod1}</p>
        <p className="mb-2">{t.mod2}</p>
        <p className="mb-4">{t.mod3}</p>

        <p className="font-semibold mt-4 mb-1 text-neutral-900">{t.disputeTitle}</p>
        <p className="mb-2">{t.disp1}</p>
        <p className="mb-4">{t.disp2}</p>
        <p className="mb-2">{t.disp3}</p>
        <p className="mb-2">{t.disp4}</p>
        <p className="mb-2">{t.disp5}</p>
        <p className="mb-4">{t.disp6}</p>
      </div>
    </div>
  );
}