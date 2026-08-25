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
      'Kişilik haritan, ilişki stilin, rüyaların ve avucundaki izler tek bir portrede. Abla sakin, kişisel bir yansıma hazırlar; aklına takılanı sohbetle sorabilirsin.',
  },

  // Web uygulamasına giden CTA butonları (hedef: siteConfig.webAppUrl)
  cta: {
    start: 'Hemen analize başla',
    tryIt: 'Ablacım’ı dene',
  },

  header: {
    brand: 'Ablacım',
    // Klavye kullanıcısı için atlama bağlantısı — yalnız odaklanınca görünür
    skipToContent: 'İçeriğe geç',
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
    sub: 'Birkaç soruyu yanıtla, rüyanı yaz ya da elini aç, kuzum; Abla gördüklerini sakin sakin yansıtır ve zamanla hepsini tek bir portrede toplar.',
    // Görsel alt metni — 25 Ağu: yeni hero.png teslim edildi, alt yenilendi
    imageAlt:
      'Gözleri kapalı, başı hafifçe yukarı dönük sakin bir yüz portresi; ardında ışık noktalarından oluşan bir ağ',
  },

  // Abla'nın sesi burada duyulur (hitap 2/3: "canım" — body'de, bir kez).
  // Bölüm genişletildi (sahip talebi: "daha detaylı bir aktarım"); eklenen
  // metinlerde YENİ hitap yok, hitap bütçesi 2/3'te kalır.
  ablaKim: {
    title: 'Abla kim',
    eyebrow: 'Ablacım’ın sesi',
    body: 'Abla, Türk kültüründeki abla figüründen doğdu: yakın, sıcak, yargılamayan bir ses. Kesin konuşmaz; ne gördüğünü anlatır, kararı sana bırakır. Acelesi de yoktur — dinler, sorarsan açar, canım.',
    paragraphs: [
      'Abla bir falcı değil, bir yorumcu. Avucundaki çizgilere ya da anlattığın rüyaya bakarken geleceği bildiğini söylemez; o işaretlerin geleneksel olarak neye bağlandığını anlatır ve senin hayatında neye denk düşebileceğini birlikte düşünür.',
      'Anlattığı şey de senin hakkında bir hüküm değil, bir başlangıç. Yansımayı okuduktan sonra sohbet açık kalır: bir cümleye takıldıysan sorarsın, Abla bağlamı bilir ve oradan devam eder.',
    ],
    principles: [
      {
        title: 'Yargılamaz',
        desc: 'Ne anlattığın tonu değiştirmez. Doğru–yanlış diye ayırmaz, utandırmaz.',
      },
      {
        title: 'Kesin konuşmaz',
        desc: 'Cümleleri “olabilir”, “işaret ediyor olabilir” diliyle kurulur. Bir ihtimali anlatır, kehanet söylemez.',
      },
      {
        title: 'Acele etmez',
        desc: 'Yansıma birkaç satırla geçiştirilmez; okunacak kadar uzun, sıkmayacak kadar sade yazılır.',
      },
    ],
    notTitle: 'Abla ne yapmaz',
    // §0.1 sorumluluk reddiyle aynı çizgide — yeni bir iddia eklemez
    notItems: [
      'Tıbbi, hukuki ya da finansal tavsiye vermez.',
      'Kimse hakkında kesin bir yargı ya da tanı koymaz.',
      'Söylediklerini kanıt diye sunmaz.',
    ],
  },

  // Nötr ürün dili; hitap yok
  ozellikler: {
    title: 'Özellikler',
    intro:
      'Beş modül bugün kullanılabilir: el analizi, rüya, kişilik haritası, ilişki stilin ve dijital ikizin. Fizyonomi ile ebced yakında.',
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
          'Hilal ay içinde yıldızlı bir gökyüzü ve yandan bir yüz profili; çevresinde bulutlar ve dalgalanan çizgiler',
        status: 'available',
        // Platform notu YOK: kalıcı bir platform sınırı yalnız el analizinde
        // var. Rüya iki platforma da açık; "bugün Android'de" bilgisi İndir
        // bölümünde zaten duruyor, kartta tekrarlanmıyor.
        platformNote: null,
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
        // Uygulamadaki modül adı birebir: "Kişilik Haritası"
        // (src/features/personality/personality-strings.ts hubTitle).
        // Olgular ölçeğin kendisinden: 60 madde, ~7 dk, beş boyut,
        // 120 maddelik derin ölçüm ayrı bir oturum.
        title: 'Kişilik Haritası',
        imageAlt:
          'Renk katmanlarından oluşan bir daire ve merkezinden dört yöne uzanan pusula yıldızı',
        status: 'available',
        platformNote: null,
        desc: 'Kısa cümleler okur, sana ne kadar uyduğunu işaretlersin. Sonunda beş boyutta nerede durduğunu gösteren bir harita çıkar.',
        back: {
          title: 'Nasıl işler',
          items: [
            '60 madde, yaklaşık 7 dakika.',
            'İstediğin an ara verir, kaldığın yerden dönersin.',
            'Beş boyutta konumunu gösteren bir harita çıkar.',
            'Derin ölçüm 120 maddedir; alt boyutları da açar.',
          ],
        },
      },
      {
        // Uygulamadaki modül adı birebir: "İlişki Stilin"
        // (src/features/interpersonal/interpersonal-strings.ts hubTitle).
        title: 'İlişki Stilin',
        imageAlt:
          'Kesişen iki daire içinde birbirine dönük iki figür ve aralarında akan çizgiler',
        status: 'available',
        platformNote: null,
        desc: 'İnsanlarla nasıl ilişki kurduğunu iki eksende konumlandırır: ne kadar yönlendirdiğin ve ne kadar yakınlık kurduğun.',
        back: {
          title: 'Nasıl işler',
          items: [
            '32 madde, yaklaşık 5 dakika.',
            'İstediğin an ara verir, kaldığın yerden dönersin.',
            'İki eksen: yönlendirme ve yakınlık.',
            'Sonunda stilini gösteren bir harita çıkar.',
          ],
        },
      },
      {
        // Uygulamadaki modül adı birebir: "Senin Dijital İkizin"
        // (src/features/twin/twin-strings.ts hubTitle). Üç parça adı da
        // ekrandan: Kişilik Haritan · İlişki Stilin · Rüya Dünyan.
        title: 'Dijital İkizin',
        imageAlt:
          'Bir yanı suluboya portre, öbür yanı nokta ve çizgilerden oluşan veri ağı olan yandan bir profil',
        status: 'available',
        platformNote: null,
        desc: 'Ablacım’ın seninle ilgili ölçtüğü ve yazdığı her şey tek yerde toplanır: kişilik haritan, ilişki stilin ve rüya dünyan.',
        back: {
          title: 'Üç parça',
          items: [
            'Kişilik Haritan',
            'İlişki Stilin',
            'Rüya Dünyan',
          ],
        },
      },
      {
        // Ad "Fizyonomi" (sahip kararı, 25 Ağu). Uygulamadaki hub kartı
        // "Yüz Analizi" diyor; sitede modülün adı Fizyonomi olarak kalıyor.
        // Brief §7.3 sınırı sürüyor: vaat yazılmaz.
        title: 'Fizyonomi',
        imageAlt:
          'Önden bir yüz portresi; üzerinde oran çizgileri, iki yana uzanan eksenler ve alında bir ışık noktası',
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
        imageAlt:
          'Renk dilimlerine bölünmüş bir çember ve dört yönünde Arap harfleri taşıyan tablo kartları',
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
      'Bir modül seçersin: soruları yanıtlar, rüyanı yazar ya da avucunun fotoğrafını yüklersin.',
      'Abla paylaştıklarını acele etmeden okur.',
      'Sana özel hazırlanan haritanı ya da yansımanı alırsın.',
      'Aklına takılanı sohbette sorarsın; sonuç ikizine eklenir.',
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

  /*
   * Bölüm 5 / Dijital ikizin — YENİ (25 Ağu). Uygulamadaki en büyük modül
   * sitede hiç anlatılmıyordu. Metinler ekrandan türedi:
   * src/features/twin/twin-strings.ts (üç parça, istatistikler, portre) ve
   * src/features/twin/match/match-strings.ts (eşleşme akışı).
   * Nötr ürün dili; hitap yok — hitap bütçesi 2/3'te kalır.
   */
  ikiz: {
    title: 'Dijital ikizin',
    eyebrow: 'Hepsinin buluştuğu yer',
    // Bölüm görseli — kart ile aynı illüstrasyon (dijital-ikiz.png)
    imageAlt:
      'Bir yanı suluboya portre, öbür yanı nokta ve çizgilerden oluşan veri ağı olan yandan bir profil',
    intro:
      'Her modül tek başına bir parça. Ablacım’ın seninle ilgili ölçtüğü ve yazdığı her şey, dijital ikizinde tek bir portrede toplanır.',
    partsTitle: 'Üç parçadan oluşur',
    parts: [
      {
        title: 'Kişilik Haritan',
        desc: 'Beş boyutta nerede durduğun; ölçümü tekrarladıkça zaman içindeki değişimin.',
      },
      {
        title: 'İlişki Stilin',
        desc: 'İki eksende — ne kadar yönlendirdiğin ve ne kadar yakınlık kurduğun.',
      },
      {
        title: 'Rüya Dünyan',
        desc: 'Yazdığın rüyalardan biriken semboller ve tekrar eden temalar.',
      },
    ],
    extrasTitle: 'İkiz ekranında ayrıca',
    extras: [
      'Abla’nın gözünden yazılmış bir portre metni.',
      'Ölçümlerini sırasıyla gösteren bir zaman çizgisi.',
      'Basamağın, ışık puanın ve serin.',
      'İstersen paylaşabileceğin bir kart.',
    ],
    matchTitle: 'İkiz Eşleşmesi',
    matchBody:
      'Kodunu bir arkadaşınla paylaşır ya da onun kodunu girersin. İki taraf da onay verince iki ikiz bant düzeyinde karşılaştırılır; bağlantıyı her an bitirebilirsin.',
    matchSteps: [
      'Kodunu paylaşır ya da bir kod girersin.',
      'Karşı taraf kabul edince kıyas hazırlanır.',
      'Kişilik ve ilişki bantlarınız yan yana okunur.',
      'Bağlantıyı istediğin an, iki taraf da bitirebilir.',
    ],
    matchPremiumNote: 'İkiz Eşleşmesi ve kıyasın tamamı premium üyelikle açılır.',
  },

  /*
   * Bölüm 6 / Zamanla derinleşir — YENİ (25 Ağu). İki arka plan katmanı:
   * Gözlemler (src/features/synthesis) ve Yolculuğun (src/features/gamification).
   * Gözlem metni ekrandaki yardım sayfasından türedi; "her zaman söyleyecek
   * bir şey olmayabilir" cümlesi bilinçli korundu — vaat üretmiyor.
   */
  derinlesme: {
    title: 'Zamanla derinleşir',
    intro:
      'Ablacım tek seferlik bir okuma değil. Uğradıkça ve yazdıkça iki katman arka planda birikir.',
    cards: [
      {
        title: 'Gözlemler',
        desc: 'Abla yazdığın rüyaları tek tek değil, birlikte okur. Son 180 günde tekrar eden bir sembol ya da tema çıkarsa sana bir gözlem yazar.',
        items: [
          'Birkaç rüya birikmesi gerekir.',
          'Neye dayandığını her gözlemde gösterir.',
          'Tekrar eden bir şey yoksa susar — konuşmuş olmak için bir şey uydurmaz.',
        ],
      },
      {
        title: 'Yolculuğun',
        desc: 'Her uğrayışın ışık puanı olarak birikir. Basamaklar yükselir, seri tutulur, rozetler açılır.',
        items: [
          'Işık puanı, güncel seri ve en uzun seri.',
          'Basamaklar ve her basamağın getirdikleri.',
          'Haftalık üç hedef ve rozetler.',
        ],
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

  /*
   * Bölüm 8 / Premium üyelik — YENİ (25 Ağu). Kapsam
   * src/features/subscriptions/subscriptions-strings.ts ve
   * docs/premium-ayricaliklar-backend-request.md'den birebir.
   * FİYAT YAZILMAZ (brief §6.2): tutar mağazada, kullanıcının para
   * biriminde. Burada yalnız kapsam anlatılır.
   */
  premium: {
    title: 'Premium üyelik',
    intro:
      'Modüllerin çoğu tek tek de alınabilir. Premium üyelik, üstüne her dönem yenilenen haklar ve ikiz tarafındaki kilitleri açar.',
    items: [
      {
        title: 'İkiz Eşleşmesi',
        desc: 'Bir arkadaşınla bağlantı kurup iki ikizi karşılaştırma ve kıyasın tamamını görme.',
      },
      {
        title: 'Her dönem yenilenen haklar',
        desc: 'Bir el analizi ve bir rüya yansıması, üyelik dönemin boyunca hakkın olarak durur.',
      },
      {
        title: 'Derin kişilik ölçümü',
        desc: '120 maddelik derin ölçüm ve onunla açılan alt boyutlar üyeliğe dahildir.',
      },
    ],
    plansNote: 'Aylık ve yıllık olmak üzere iki dönem var.',
    // Fiyat yazılmaz — brief §6.2
    priceNote:
      'Fiyatlar sitede yazmaz; uygulamada, kendi para biriminde görünür. Abonelik iptal edilmedikçe dönem sonunda kendiliğinden yenilenir ve mağaza üzerinden yönetilir.',
  },

  // Nötr; cevaplar brief §7 ve §8 olgularına dayanır
  sss: {
    title: 'SSS',
    items: [
      {
        q: 'Ablacım ücretsiz mi?',
        // Neyin ücretsiz olduğu brief'te yazmıyor — ücret iddiası yok; SORULDU.
        // 25 Ağu: kişilik/ilişki ölçümlerinin girişi ve premium kapsamı eklendi.
        a: 'Kişilik Haritası ve İlişki Stilin ölçümlerine ücretsiz başlarsın. El analizi tek seferlik satın almayla, rüya tarafı abonelikle çalışır; gerekirse ek mesaj hakkı da uygulama içinden alınabilir. Premium üyelik ikiz eşleşmesini, kıyasın tamamını, derin kişilik ölçümünü ve her dönem yenilenen hakları kapsar. Fiyatlar sitede değil, uygulamada — kendi para biriminde görünür.',
      },
      {
        q: 'Kişilik Haritası ile İlişki Stilin arasındaki fark ne?',
        a: 'Kişilik Haritası seni beş boyutta konumlandırır; 60 madde, yaklaşık 7 dakika sürer. İlişki Stilin ise insanlarla kurduğun ilişkiyi iki eksende — ne kadar yönlendirdiğin ve ne kadar yakınlık kurduğun — konumlandırır; 32 madde, yaklaşık 5 dakika. İkisi de dijital ikizinin ayrı birer parçası olur.',
      },
      {
        q: 'Dijital ikiz ne işe yarar?',
        a: 'Modüllerin sonuçları dağınık kalmasın diye tek bir yerde toplanır: kişilik haritan, ilişki stilin ve rüya dünyan. Zaman çizgisinde ölçümlerin sırayla durur; istersen bir arkadaşınla eşleşip iki ikizi karşılaştırabilirsin.',
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
    body: "Ablacım şu an Google Play'de. Ne zaman istersen gel; bir ölçümle, bir rüyayla ya da avucunla başlarsın.",
    currencyNote: 'Fiyatlar uygulamada, kendi para biriminde görünür.',
    // Q3 aktifleştirildi — otomatik yenileme tek satır caption
    autoRenewNote:
      'Abonelik, iptal edilmedikçe dönem sonunda kendiliğinden yenilenir; Google Play üzerinden yönetilir.',
  },

  // Bölüm 9 / Sosyal — nötr ürün dili, hitap yok. Sayfanın geri kalanı
  // ikinci tekil ("sen") konuşur; başlık da o çizgide tutuldu.
  sosyal: {
    title: 'Bizi takip et',
    intro:
      'Yeni özellikler, kısa yorumlar ve perde arkası sosyal hesaplarımızda paylaşılıyor.',
    instagramDesc: 'Günlük paylaşımlar, yeni özellikler ve okur soruları.',
    tiktokDesc: 'Kısa videolar: semboller, çizgiler ve küçük yorumlar.',
  },

  // Bölüm 10 / İletişim — nötr; yanıt süresi vaadi bilinçli olarak YOK
  iletisim: {
    title: 'Bize ulaş',
    intro:
      'Aklına takılan, bir önerin ya da bir aksaklık varsa aşağıdaki adrese yazabilirsin.',
    emailLabel: 'E-posta',
    note: 'Hesabının ve verilerinin silinmesini de bu adresten talep edebilirsin.',
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
