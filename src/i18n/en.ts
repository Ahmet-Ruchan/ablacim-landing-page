import type { Dict } from './index';

/**
 * EN metinler — İLK TASLAK (adım 2). Birlikte revize edilecek.
 * Birebir çeviri değil, aynı bilginin kendi ritmiyle yazımı.
 * "VERBATIM" işaretli satırlar BRIEF-EK/Q4'ten aynen alındı.
 * Ses kuralları: nötr ürün dili; "love" en fazla 2 (bu taslakta 2:
 * hero + Who is Abla). Ünlem yok, kesinlik iddiası yok, keşif dili.
 */
export const en: Dict = {
  meta: {
    title: 'Ablacım — Get to know yourself a little better',
    description:
      'Your personality map, your relational style, your dreams and your palm lines in a single portrait. Abla writes a calm, personal reflection — and a chat for whatever stays on your mind.',
  },

  cta: {
    start: 'Start your analysis',
    tryIt: 'Try Ablacım',
  },

  header: {
    brand: 'Ablacım',
    skipToContent: 'Skip to content',
    themeGroup: 'Theme selection',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    langGroup: 'Language selection',
    langTr: 'Turkish',
    langEn: 'English',
    langTrShort: 'TR',
    langEnShort: 'EN',
  },

  // EK S-6'daki "Coming soon to iPhone" satırının yerini App Store çipi aldı
  store: {
    googlePlayAlt: 'Get it on Google Play',
    appStoreSoonLabel: 'Coming soon',
    appStoreName: 'App Store',
  },

  // Play Store görselleri şu an Türkçe (EN varyant mağazada yok) — alt TASLAK
  screens: {
    /* 25 Ağu: üç görsel de yenilendi — bkz. tr.ts'teki not. */
    welcomeAlt:
      'Ablacım promotional image: the Discover Yourself screen with observations and module cards',
    reportAlt:
      'Ablacım promotional image: a measurement result placing a relational style on a two-axis map',
    chatAlt:
      'Ablacım promotional image: the chat with Abla that opens after a dream reflection',
  },

  // Abla'nın sesi ("love" 1/2)
  hero: {
    heading: 'Get to know yourself better',
    sub: 'Answer a few questions, write your dream or open your palm, love; Abla takes her time with it, and over time gathers everything into a single portrait.',
    // Görsel alt metni — 25 Ağu: yeni hero.png teslim edildi, alt yenilendi
    imageAlt:
      'Portrait of a calm face with closed eyes and the head tilted slightly up, against a network of points of light',
  },

  // Abla'nın sesi ("love" 2/2 — yalnız body'de). Bölüm genişletildi
  // (sahip talebi); eklenen metinlerde yeni hitap yok.
  ablaKim: {
    title: 'Who is Abla',
    eyebrow: 'The voice of Ablacım',
    body: "Abla comes from the Turkish word for an older sister: a close, warm voice that never judges. She doesn't deal in certainties; she tells you what she sees and leaves the deciding to you. And she's in no hurry — she listens, and if you ask, she opens things up, love.",
    paragraphs: [
      'Abla is not a fortune teller but an interpreter. Looking at the lines on your palm or at the dream you describe, she never claims to know the future; she tells you what those signs have traditionally been tied to, and thinks with you about what they might touch in your own life.',
      'And what she tells you is not a verdict about you — it is a place to start. Once you have read the reflection, the chat stays open: if a sentence catches you, you ask, and Abla knows the context and picks it up from there.',
    ],
    principles: [
      {
        title: 'She does not judge',
        desc: 'Whatever you bring, her tone stays the same. She does not sort things into right and wrong, and she does not shame.',
      },
      {
        title: 'She avoids certainty',
        desc: 'Her sentences are built on “may” and “might point to”. She offers a possibility, never a prophecy.',
      },
      {
        title: 'She is in no hurry',
        desc: 'A reflection is not a couple of lines dashed off; it is long enough to sit with and plain enough to read.',
      },
    ],
    notTitle: 'What Abla does not do',
    // §0.1 sorumluluk reddiyle aynı çizgide — yeni bir iddia eklemez
    notItems: [
      'She gives no medical, legal or financial advice.',
      'She makes no firm verdict or diagnosis about anyone.',
      'She does not present what she says as proof.',
    ],
  },

  ozellikler: {
    title: 'Features',
    intro:
      'Five modules are available today: palm analysis, dreams, your personality map, your relational style and your digital twin. Physiognomy and abjad are on the way.',
    statusAvailable: 'Available',
    statusSoon: 'Coming soon',
    cards: [
      {
        title: 'Palm analysis',
        imageAlt:
          'An open palm with its lines showing, ringed by concentric circles, waves reaching out to either side and small moon motifs',
        status: 'available',
        // S-5 notu sahip talebiyle güncellendi: web'de de kullanılabiliyor
        platformNote: 'Available on Android and on the web',
        desc: 'You share a photo of your palm and a few details; Abla looks at the lines and the overall character of the hand, then prepares a personal reflection. The report comes in six sections, and the chat stays open afterwards.',
        // Kart arkası — bölüm başlıkları VERBATIM (brief §7.1 EN sütunu)
        back: {
          title: 'The six sections of the report',
          items: [
            'Overview',
            'Love and Connection',
            'Work and Path',
            'Money and Abundance',
            'A Caution',
            'The Next 30 Days',
          ],
        },
      },
      {
        title: 'Dreams',
        imageAlt:
          'A starry sky and a face in profile held within a crescent moon, with clouds and flowing lines around them',
        status: 'available',
        // Platform notu YOK — kalıcı platform sınırı yalnız el analizinde.
        platformNote: null,
        desc: 'You write your dream in your own words; Abla walks through its symbols with you and reflects on what they might mean for you. A 24-hour question window follows, and past reflections are kept in your dream journal.',
        back: {
          title: 'How it flows',
          items: [
            'You write the dream in your own words.',
            'Your reflection is prepared with your consent.',
            'A 24-hour question window opens.',
            'Past reflections are kept in your dream journal.',
          ],
        },
      },
      {
        // Uygulamadaki modül adı birebir: "Personality Map"
        title: 'Personality Map',
        imageAlt:
          'A circle of colour layers with a compass star reaching out from its centre in four directions',
        status: 'available',
        platformNote: null,
        desc: 'You read short statements and mark how well each one fits you. At the end you get a map of where you stand on five traits.',
        back: {
          title: 'How it flows',
          items: [
            '60 items, about 7 minutes.',
            'Pause whenever you like and pick up where you left off.',
            'You get a map of your position across five traits.',
            'The deep measure is 120 items and opens the subscales too.',
          ],
        },
      },
      {
        // Uygulamadaki modül adı birebir: "Your Relational Style"
        title: 'Your Relational Style',
        imageAlt:
          'Two figures facing each other inside two overlapping circles, with lines flowing between them',
        status: 'available',
        platformNote: null,
        desc: 'It places how you relate to people on two axes: how much you lead and how much warmth you build.',
        back: {
          title: 'How it flows',
          items: [
            '32 items, about 5 minutes.',
            'Pause whenever you like and pick up where you left off.',
            'Two axes: leading and warmth.',
            'At the end you get a map of your style.',
          ],
        },
      },
      {
        // Uygulamadaki modül adı birebir: "Your Digital Twin"
        title: 'Your Digital Twin',
        imageAlt:
          'A profile in side view, one half a watercolour portrait and the other a network of dots and lines',
        status: 'available',
        platformNote: null,
        desc: 'Everything Ablacım has measured and written about you gathers in one place: your personality map, your relational style and your dream world.',
        back: {
          title: 'Three parts',
          items: [
            'Your Personality Map',
            'Your Relational Style',
            'Your Dream World',
          ],
        },
      },
      {
        // Ad "Physiognomy" (sahip kararı, 25 Ağu) — TR'deki "Fizyonomi"nin
        // karşılığı. Brief §7.3 sınırı sürüyor: vaat yazılmaz.
        title: 'Physiognomy',
        imageAlt:
          'A face seen from the front, with proportion lines across it, axes reaching out to either side and a point of light on the brow',
        status: 'soon',
        platformNote: null,
        desc: 'Interpretation through facial features and proportions.',
        back: {
          title: 'Coming soon',
          items: ['Interpretation through facial features and proportions.'],
        },
      },
      {
        // Brief §7.4: hesaplama anlatılır, sonuç vaadi verilmez
        title: 'Abjad',
        imageAlt:
          'A circle divided into colour segments, with tablet cards carrying Arabic letters at its four sides',
        status: 'soon',
        platformNote: null,
        desc: 'An interpretation calculated from the letters of your name and surname.',
        back: {
          title: 'Coming soon',
          items: [
            'An interpretation calculated from the abjad values of the letters in your name.',
          ],
        },
      },
    ],
  },

  nasilCalisir: {
    title: 'How it works',
    steps: [
      'You pick a module: answer the questions, write a dream, or upload a photo of your palm.',
      'Abla reads what you shared, without hurry.',
      'You receive the map or the reflection prepared just for you.',
      'You ask whatever stays on your mind in chat, and the result joins your twin.',
    ],
  },

  sohbetFarki: {
    title: 'The chat difference',
    intro:
      "You don't just read a report and walk away — you can ask. Abla knows the context, wherever you want to pick the thread back up.",
    youLabel: 'You',
    ablaLabel: 'Abla',
    demo: [
      {
        from: 'you',
        text: 'I dreamt I was going down the stairs of our old house; the steps never seemed to end.',
      },
      {
        from: 'abla',
        text: "Stairs often speak of passing from one period into another; going down isn't always a loss — sometimes it's a load getting lighter. The steps never ending may be a sign that this passage still feels unfinished to you.",
      },
      {
        from: 'you',
        text: 'And the old house — what could that mean?',
      },
      {
        from: 'abla',
        text: "An old house usually stands for what's familiar; leaving it step by step may suggest you're slowly moving away from a known order. What might you be leaving behind these days?",
      },
    ],
  },

  // Bölüm 5 / Dijital ikizin — YENİ (25 Ağu). TR ile aynı olgular.
  ikiz: {
    title: 'Your digital twin',
    eyebrow: 'Where it all comes together',
    // Bölüm görseli — kart ile aynı illüstrasyon (dijital-ikiz.png)
    imageAlt:
      'A profile in side view, one half a watercolour portrait and the other a network of dots and lines',
    intro:
      'On its own, each module is one piece. Everything Ablacım has measured and written about you gathers into a single portrait in your digital twin.',
    partsTitle: 'It is made of three parts',
    parts: [
      {
        title: 'Your Personality Map',
        desc: 'Where you stand across five traits — and how that shifts as you repeat the measure.',
      },
      {
        title: 'Your Relational Style',
        desc: 'On two axes — how much you lead and how much warmth you build.',
      },
      {
        title: 'Your Dream World',
        desc: 'The symbols and recurring themes that build up from the dreams you write.',
      },
    ],
    extrasTitle: 'Also on the twin screen',
    extras: [
      'A portrait written through Abla’s eyes.',
      'A timeline that lays out your measures in order.',
      'Your step, your light points and your streak.',
      'A card you can share if you want to.',
    ],
    matchTitle: 'Twin Match',
    matchBody:
      'You share your code with a friend, or enter theirs. Once both sides agree, the two twins are compared at band level; you can end the link whenever you like.',
    matchSteps: [
      'You share your code, or enter one.',
      'Once the other side accepts, the comparison is prepared.',
      'Your personality and relational bands are read side by side.',
      'Either side can end the link at any time.',
    ],
    matchPremiumNote:
      'Twin Match and the full comparison are opened by a premium membership.',
  },

  // Bölüm 6 / Zamanla derinleşir — YENİ (25 Ağu).
  derinlesme: {
    title: 'It deepens over time',
    intro:
      'Ablacım is not a one-off reading. Two layers build up in the background as you visit and as you write.',
    cards: [
      {
        title: 'Observations',
        desc: 'Abla reads the dreams you write together, not one by one. If a symbol or a theme repeats across the last 180 days, she writes you an observation.',
        items: [
          'It takes a few dreams to build up.',
          'Every observation shows what it is based on.',
          'If nothing repeats, she stays quiet — she does not invent something just to be talking.',
        ],
      },
      {
        title: 'Your journey',
        desc: 'Every visit builds up as light points. Steps rise, the streak is kept, badges open.',
        items: [
          'Light points, current streak and longest streak.',
          'Steps, and what each step brings with it.',
          'Three weekly goals, and badges.',
        ],
      },
    ],
  },

  gizlilik: {
    title: 'Privacy',
    intro: 'Before your dream text is sent, your consent is asked for openly:',
    // TR'si birebir (brief §7.2); EN taslak — yayın öncesi onay kontrolü önerilir
    items: [
      'The dream text you write is passed to third-party AI providers to prepare your reflection.',
      'Your text is processed only to create your personal reflection; it is not sold for advertising or marketing.',
      'You can opt out at any time and request that your account and data be deleted.',
    ],
    // TR'si birebir (brief §7.1); EN taslak
    note: 'Your privacy comes first. Data is stored temporarily on secure servers and anonymised to protect your identity.',
  },

  // Bölüm 8 / Premium üyelik — YENİ (25 Ağu). FİYAT YAZILMAZ (brief §6.2).
  premium: {
    title: 'Premium membership',
    intro:
      'Most modules can also be bought one at a time. A premium membership adds credits that renew each period, and opens what is locked on the twin side.',
    items: [
      {
        title: 'Twin Match',
        desc: 'Link up with a friend, compare the two twins, and see the whole comparison.',
      },
      {
        title: 'Credits that renew each period',
        desc: 'One palm analysis and one dream reflection stay yours as credits throughout your membership period.',
      },
      {
        title: 'The deep personality measure',
        desc: 'The 120-item deep measure, and the subscales it opens, are included in the membership.',
      },
    ],
    plansNote: 'There are two periods: monthly and yearly.',
    // Fiyat yazılmaz — brief §6.2
    priceNote:
      'Prices are not written on this site; they appear in the app, in your own currency. Subscriptions renew automatically at the end of each period unless cancelled, and are managed through the store.',
  },

  sss: {
    title: 'FAQ',
    items: [
      {
        q: 'Is Ablacım free?',
        // Neyin ücretsiz olduğu brief'te yazmıyor — ücret iddiası yok; SORULDU.
        // 25 Ağu: kişilik/ilişki ölçümlerinin girişi ve premium kapsamı eklendi.
        a: 'You start the Personality Map and Your Relational Style for free. Palm analysis works as a one-time purchase, and the dream side runs on a subscription; extra message credits are also available in the app. A premium membership covers Twin Match, the full comparison, the deep personality measure and credits that renew each period. Prices are shown in the app, in your own currency — not on this site.',
      },
      {
        q: 'What is the difference between the Personality Map and Your Relational Style?',
        a: 'The Personality Map places you across five traits; it is 60 items and takes about 7 minutes. Your Relational Style places how you relate to people on two axes — how much you lead and how much warmth you build; it is 32 items and takes about 5 minutes. Each becomes a separate part of your digital twin.',
      },
      {
        q: 'What is the digital twin for?',
        a: 'So the results of the modules do not stay scattered, they gather in one place: your personality map, your relational style and your dream world. The timeline keeps your measures in order, and if you like, you can match with a friend and compare the two twins.',
      },
      {
        q: 'What happens to my data?',
        a: 'What you share is processed only to create your personal reflection; it is not sold for advertising or marketing. Data is stored temporarily on secure servers and anonymised. You can request deletion of your account and data at any time.',
      },
      {
        q: 'How do I cancel the subscription?',
        a: 'Subscriptions are managed through Google Play. To cancel, follow Play Store → Profile → Payments and subscriptions → Subscriptions. Your access continues until the end of the period, and the subscription renews automatically unless cancelled.',
        // App Store yayınlanınca AÇILACAK iOS iptal satırı (şimdi render edilmez — Q3).
        // Taslak, birlikte teyit edilecek:
        // "On iOS, subscriptions are managed through the App Store."
      },
      {
        q: 'Why 18 and over?',
        a: 'Ablacım is designed for adults aged 18 and over. That is why your date of birth is asked at the start of palm analysis and an age limit is applied.',
      },
    ],
  },

  // Kapanış CTA — sıcak ton, hitap yok
  indir: {
    title: 'Download',
    body: 'Ablacım is on Google Play today. Come whenever it suits you — a measure, a dream or a palm is enough to begin.',
    currencyNote: 'Prices appear in the app, in your own currency.',
    // Q3 aktifleştirildi — otomatik yenileme tek satır caption
    autoRenewNote:
      'Subscriptions renew automatically at the end of each period unless cancelled; they are managed through Google Play.',
  },

  // Bölüm 9 / Sosyal
  sosyal: {
    title: 'Follow us',
    intro:
      'New features, short readings and a little behind the scenes go out on our social accounts.',
    instagramDesc: 'Daily posts, new features and reader questions.',
    tiktokDesc: 'Short videos: symbols, lines and small readings.',
  },

  // Bölüm 10 / İletişim — yanıt süresi vaadi bilinçli olarak YOK
  iletisim: {
    title: 'Get in touch',
    intro:
      'A question, a suggestion or something that went wrong — write to the address below.',
    emailLabel: 'Email',
    note: 'You can also request deletion of your account and data at this address.',
  },

  footer: {
    colLinks: 'Links',
    colSocial: 'Social',
    colLegal: 'Legal',
    colCompany: 'Company',
    instagram: 'Instagram',
    instagramAria: 'Open the Ablacım Instagram account',
    tiktok: 'TikTok',
    tiktokAria: 'Open the Ablacım TikTok account',
    privacyPolicy: 'Privacy Policy',
    distanceSales: 'Distance Sales Agreement',
    company: 'Mehmethan Yasa Ltd (UK Limited, Companies House #17103773)',
    // TR'si birebir (brief §0.1); EN taslak — yayın öncesi onay kontrolü önerilir
    disclaimer:
      'For entertainment and personal insight; not a substitute for medical, legal or financial advice.',
    // VERBATIM (Q4) — iki dilde de aynı kalır
    playTrademark:
      'Google Play and the Google Play logo are trademarks of Google LLC.',
  },
};
