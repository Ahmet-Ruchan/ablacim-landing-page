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
      'A calm, personal reflection on your palm lines and your dreams, with Abla — and a chat for whatever stays on your mind.',
  },

  common: {
    imagePlaceholder: 'Image goes here', // adım 3 talimatı, birebir
  },

  header: {
    brand: 'Ablacım',
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
    reportAlt:
      'Ablacım promotional image: app screens showing the palm analysis report and its sections',
    chatAlt:
      'Ablacım promotional image: app screens showing analysis history and the chat with Abla',
    welcomeAlt:
      'Ablacım promotional image: app screens showing the welcome screen and feature list',
  },

  // Abla'nın sesi ("love" 1/2)
  hero: {
    heading: 'Get to know yourself better',
    sub: 'Open your palm or tell your dream, love; Abla takes her time with it. Whatever stays on your mind, you talk it through together.',
  },

  // Abla'nın sesi ("love" 2/2)
  ablaKim: {
    title: 'Who is Abla',
    body: "Abla comes from the Turkish word for an older sister: a close, warm voice that never judges. She doesn't deal in certainties; she tells you what she sees and leaves the deciding to you. And she's in no hurry — she listens, and if you ask, she opens things up, love.",
  },

  ozellikler: {
    title: 'Features',
    intro: 'Palm analysis and dreams are available today; physiognomy and abjad are on the way.',
    statusAvailable: 'Available',
    statusSoon: 'Coming soon',
    cards: [
      {
        title: 'Palm analysis',
        status: 'available',
        platformNote: 'Available on Android', // VERBATIM (BRIEF-EK S-5)
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
        status: 'available',
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
        // Brief §7.3: tek satırdan fazlası yazılmaz — vaat yok
        title: 'Physiognomy',
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
      'You upload a photo of your palm, or write down a dream.',
      'Abla reads what you shared, without hurry.',
      'You receive a reflection prepared just for you.',
      'You ask whatever stays on your mind, in chat.',
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

  sss: {
    title: 'FAQ',
    items: [
      {
        q: 'Is Ablacım free?',
        // Neyin ücretsiz olduğu brief'te yazmıyor — ücret iddiası yok; SORULDU.
        a: 'Palm analysis works as a one-time purchase, and the dream side runs on a subscription; extra message credits are also available in the app. Prices are shown in the app, in your own currency — not on this site.',
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
    body: 'Ablacım is on Google Play today. Come whenever it suits you — a palm or a dream is enough to begin.',
    currencyNote: 'Prices appear in the app, in your own currency.',
    // Q3 aktifleştirildi — otomatik yenileme tek satır caption
    autoRenewNote:
      'Subscriptions renew automatically at the end of each period unless cancelled; they are managed through Google Play.',
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
