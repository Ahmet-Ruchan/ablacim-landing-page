/**
 * TR metinler — İLK TASLAK (adım 2). Birlikte revize edilecek.
 * "BİREBİR" işaretli satırlar brief/BRIEF-EK'ten aynen alındı — değiştirme.
 * Ses kuralları: nötr ürün dili; Abla'nın sesi yalnız hero, "Abla kim" ve
 * kapanış CTA'da. Hitap bütçesi: kuzum/canım sayfa genelinde en fazla 3
 * (bu taslakta 2: hero + Abla kim). Ünlem yok, kesinlik iddiası yok,
 * keşif dili (§0.1).
 */
export const tr = {
  meta: {
    title: 'Ablacım — Kendini daha yakından tanı',
    description:
      'Avucundaki izler ve rüyaların üzerine Abla ile sakin, kişisel bir yansıma; aklına takılanı sohbetle sorabilirsin.',
  },

  // Web uygulamasına giden CTA butonları (hedef: siteConfig.webAppUrl)
  cta: {
    start: 'Hemen analize başla',
    tryIt: 'Ablacım’ı dene',
  },

  header: {
    brand: 'Ablacım',
    // Pil kontrolleri — etiketler talimattan birebir (iki tema segmenti)
    themeGroup: 'Tema seçimi',
    themeLight: 'Açık tema',
    themeDark: 'Koyu tema',
    langGroup: 'Dil seçimi',
    langTr: 'Türkçe',
    langEn: 'İngilizce',
    langTrShort: 'TR',
    langEnShort: 'EN',
  },

  // Mağaza rozeti — Hero ve İndir bölümlerinde ortak (StoreBadge).
  // EK S-6'daki "iOS sürümü yakında" satırının yerini App Store çipi aldı
  // (talimat). Resmî Apple rozeti bilinçli olarak YOK (EK S-6 yasağı).
  store: {
    googlePlayAlt: "Google Play'den indir",
    appStoreSoonLabel: 'Yakında',
    appStoreName: 'App Store',
  },

  // Play Store'daki mevcut tanıtım görselleri (adım 3) — alt metinler TASLAK
  screens: {
    reportAlt:
      'Ablacım tanıtım görseli: el analizi raporu ve bölümlerini gösteren uygulama ekranları',
    chatAlt:
      'Ablacım tanıtım görseli: analiz geçmişi ve Abla ile sohbeti gösteren uygulama ekranları',
    welcomeAlt:
      'Ablacım tanıtım görseli: karşılama ekranı ve özellik listesini gösteren uygulama ekranları',
  },

  // Abla'nın sesi burada duyulur (hitap 1/3: "kuzum")
  hero: {
    heading: 'Kendini daha yakından tanı',
    sub: 'Elini aç ya da rüyanı yaz, kuzum; Abla gerisini sakin sakin yorumlar. Aklına takılanı da birlikte konuşursunuz.',
    // Görsel alt metni — TASLAK (hero ↔ fizyonomi takası sonrası)
    imageAlt: 'Gözleri kapalı, sakin bir yüz portresi',
  },

  // Abla'nın sesi burada duyulur (hitap 2/3: "canım")
  ablaKim: {
    title: 'Abla kim',
    body: 'Abla, Türk kültüründeki abla figüründen doğdu: yakın, sıcak, yargılamayan bir ses. Kesin konuşmaz; ne gördüğünü anlatır, kararı sana bırakır. Acelesi de yoktur — dinler, sorarsan açar, canım.',
  },

  // Nötr ürün dili; hitap yok
  ozellikler: {
    title: 'Özellikler',
    intro: 'El analizi ve rüya bugün kullanılabilir; fizyonomi ve ebced yakında.',
    statusAvailable: 'Kullanılabilir',
    statusSoon: 'Yakında',
    cards: [
      {
        title: 'El analizi',
        imageAlt: 'Avuç içi çizgileri ve parmak izi detayıyla açık bir el çizimi',
        status: 'available',
        // S-5 notu sahip talebiyle güncellendi: web'de de kullanılabiliyor
        platformNote: "Android'de ve web'de kullanılabilir",
        desc: 'Avucunun fotoğrafını ve birkaç bilgini paylaşırsın; Abla çizgilere ve elin genel karakterine bakarak kişisel bir yansıma hazırlar. Rapor altı bölümden oluşur ve üzerine sohbet açıktır.',
        // Kart arkası — bölüm başlıkları BİREBİR (brief §7.1)
        back: {
          title: 'Raporun altı bölümü',
          items: [
            'Genel Bakış',
            'Aşk ve Bağ',
            'Kariyer ve Yol',
            'Para ve Bolluk',
            'Uyarı',
            'Önümüzdeki 30 Gün',
          ],
        },
      },
      {
        title: 'Rüya',
        imageAlt:
          'Not satırları ile anahtar, kuş ve kapı sembolleri olan açık bir rüya defteri',
        status: 'available',
        platformNote: "Android'de ve web'de kullanılabilir",
        desc: 'Rüyanı kendi cümlelerinle yazarsın; Abla sembolleri seninle birlikte ele alır ve senin için ne ifade edebileceğini yansıtır. Sonrasında 24 saatlik bir soru penceresi açılır; geçmiş yansımaların rüya günlüğünde saklanır.',
        // Kart arkası — brief §7.2 olguları
        back: {
          title: 'Nasıl işler',
          items: [
            'Rüyanı kendi cümlelerinle yazarsın.',
            'Onayınla yansıman hazırlanır.',
            '24 saatlik soru penceresi açılır.',
            'Geçmiş yansımaların rüya günlüğünde saklanır.',
          ],
        },
      },
      {
        // Brief §7.3: tek satırdan fazlası yazılmaz — vaat yok
        title: 'Fizyonomi',
        imageAlt:
          'Parmak izi, notlar ve tablolar taşıyan kâğıt kartları birbirine bağlayan tek bir çizgi',
        status: 'soon',
        platformNote: null,
        desc: 'Yüz hatları ve oranlarıyla yorum.',
        // Kart arkası — §7.3 sınırı: izinli tek satırdan fazlası yazılmadı
        back: {
          title: 'Yakında',
          items: ['Yüz hatları ve oranlarıyla yorum.'],
        },
      },
      {
        // Brief §7.4: hesaplama anlatılır, sonuç vaadi verilmez
        title: 'Ebced',
        imageAlt: 'Harf ve sayı tabloları olan açık bir defter ile kamış kalem',
        status: 'soon',
        platformNote: null,
        desc: 'İsim ve soyisimden harflerle hesaplanan yorum.',
        // Kart arkası — §7.4: hesaplama anlatılabilir, sonuç vaadi verilmez
        back: {
          title: 'Yakında',
          items: [
            'İsim ve soyisimdeki harflerin ebced değerleri üzerinden hesaplanan bir yorum.',
          ],
        },
      },
    ],
  },

  // Nötr; adımlar davet kipinde değil, anlatı kipinde (emir yok)
  nasilCalisir: {
    title: 'Nasıl çalışır',
    steps: [
      'Avucunun fotoğrafını yükler ya da rüyanı yazarsın.',
      'Abla paylaştıklarını acele etmeden okur.',
      'Sana özel hazırlanan yansımanı alırsın.',
      'Aklına takılanı sohbette sorarsın.',
    ],
  },

  // Nötr; demo keşif dilinde, hitapsız, sahte kanıt cümlesi yok
  sohbetFarki: {
    title: 'Sohbet farkı',
    intro:
      'Rapor okuyup bırakmıyorsun; aklına takılanı sorabiliyorsun. Abla bağlamı bilir — yansımanın neresinden devam etmek istersen.',
    youLabel: 'Sen',
    ablaLabel: 'Abla',
    demo: [
      {
        from: 'you',
        text: 'Rüyamda eski evimizin merdiveninden iniyordum; basamaklar bir türlü bitmiyordu.',
      },
      {
        from: 'abla',
        text: 'Merdiven, bir dönemden diğerine geçişi düşündürür; inmek her zaman kayıp değildir, bazen yükün hafiflemesidir. Basamakların bitmemesi, bu geçişin sende henüz tamamlanmamış bir his bıraktığına işaret ediyor olabilir.',
      },
      {
        from: 'you',
        text: 'Peki eski ev ne anlama geliyor olabilir?',
      },
      {
        from: 'abla',
        text: 'Eski ev çoğu zaman alışılmış olanı temsil eder; oradan inmek, tanıdık bir düzenden yavaşça uzaklaştığını gösteriyor olabilir. Sen bu aralar neyi geride bırakıyorsun?',
      },
    ],
  },

  // Nötr; üç madde ve not brief'ten birebir
  gizlilik: {
    title: 'Gizlilik',
    intro: 'Rüya metnin gönderilmeden önce onayın açıkça istenir:',
    // BİREBİR (brief §7.2) — üç onay maddesi
    items: [
      'Yazdığın rüya metni, yansımanı hazırlamak için üçüncü taraf yapay zekâ sağlayıcılarına iletilir.',
      'Metnin yalnızca kişisel yansımanı üretmek için işlenir; reklam veya pazarlama amacıyla satılmaz.',
      'Dilediğin zaman vazgeçebilir, hesabını ve verilerini silmeyi talep edebilirsin.',
    ],
    // BİREBİR (brief §7.1 gizlilik notu)
    note: 'Gizliliğine öncelik veriyoruz. Veriler güvenli sunucularımızda geçici olarak depolanır ve anonimliğini korumak için anonimleştirilir.',
  },

  // Nötr; cevaplar brief §7 ve §8 olgularına dayanır
  sss: {
    title: 'SSS',
    items: [
      {
        q: 'Ablacım ücretsiz mi?',
        // Neyin ücretsiz olduğu brief'te yazmıyor — ücret iddiası yok; SORULDU.
        a: 'El analizi tek seferlik satın almayla, rüya tarafı abonelikle çalışır; gerekirse ek mesaj hakkı da uygulama içinden alınabilir. Fiyatlar sitede değil, uygulamada — kendi para biriminde görünür.',
      },
      {
        q: 'Verilerim ne oluyor?',
        a: 'Paylaştıkların yalnızca kişisel yansımanı üretmek için işlenir; reklam ya da pazarlama amacıyla satılmaz. Veriler güvenli sunucularda geçici olarak depolanır ve anonimliğini korumak için anonimleştirilir. Dilediğin zaman hesabını ve verilerini silmeyi talep edebilirsin.',
      },
      {
        q: 'Aboneliği nasıl iptal ederim?',
        a: "Abonelik Google Play üzerinden yönetilir. İptal için Play Store'da Profil → Ödemeler ve abonelikler → Abonelikler yolunu izleyebilirsin. İptal ettiğinde erişimin dönem sonuna kadar sürer; iptal edilmedikçe abonelik dönem sonunda kendiliğinden yenilenir.",
        // App Store yayınlanınca AÇILACAK iOS iptal satırı (şimdi render edilmez — Q3).
        // Taslak, birlikte teyit edilecek:
        // "iOS'ta abonelik App Store üzerinden yönetilir."
      },
      {
        q: 'Neden 18 yaş ve üzeri?',
        a: 'Ablacım 18 yaş ve üzeri için tasarlandı. Bu yüzden el analizi başlangıcında doğum tarihin sorulur ve yaş sınırı uygulanır.',
      },
    ],
  },

  // Kapanış CTA — Abla'nın sesi tonda duyulur, hitap yok (indir hitapsız)
  indir: {
    title: 'İndir',
    body: "Ablacım şu an Google Play'de. Ne zaman istersen gel; avucunla ya da bir rüyayla başlarsın.",
    currencyNote: 'Fiyatlar uygulamada, kendi para biriminde görünür.',
    // Q3 aktifleştirildi — otomatik yenileme tek satır caption
    autoRenewNote:
      'Abonelik, iptal edilmedikçe dönem sonunda kendiliğinden yenilenir; Google Play üzerinden yönetilir.',
  },

  // Nötr — sütun başlıkları adım 3 talimatındaki gruplardan
  footer: {
    colLinks: 'Bağlantılar',
    colSocial: 'Sosyal',
    colLegal: 'Yasal',
    colCompany: 'Şirket',
    instagram: 'Instagram',
    instagramAria: 'Ablacım Instagram hesabını aç',
    tiktok: 'TikTok',
    tiktokAria: 'Ablacım TikTok hesabını aç',
    privacyPolicy: 'Gizlilik Politikası',
    distanceSales: 'Mesafeli Satış Sözleşmesi',
    company: 'Mehmethan Yasa Ltd (UK Limited, Companies House #17103773)',
    // BİREBİR (brief §0.1) — görünür durması mağaza gereği
    disclaimer:
      'Eğlence ve kişisel içgörü amaçlıdır; tıbbi, hukuki veya finansal tavsiye yerine geçmez.',
    // BİREBİR (Q4) — iki dilde de aynı kalır
    playTrademark:
      'Google Play and the Google Play logo are trademarks of Google LLC.',
  },
};
