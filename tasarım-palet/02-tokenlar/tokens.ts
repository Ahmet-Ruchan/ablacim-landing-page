/**
 * Ablacım — Design Tokens
 * ---------------------------------------------------------------
 * Yön: "mistik içerik / temiz kabuk".
 * Arayüz sakin ve okunaklı; mistik olan tek şey içerik, illüstrasyon
 * ve tek bir vurgu rengi. Navigasyon, ayarlar, form ve yasal
 * ekranlarda mistik hiçbir öğe kullanılmaz.
 *
 * Bu dosya ham değerleri tutar. Semantik isimler (bg, textPrimary,
 * accent...) theme/index.tsx içindedir. Komponentlerde DOĞRUDAN bu
 * dosyayı import etme — useTheme() kullan.
 */

/* ---------------------------------------------------------------
 * 1. Renk ramp'leri
 * ------------------------------------------------------------- */

/** Nötr. Sıcak ama krem değil — çok hafif mor alt tonu var,
 *  bu sayede accent ile aynı ailedenmiş gibi durur. */
/** Nötr ramp. Zemin, yüzey, çizgi ve metin buradan türer. Komponentte doğrudan kullanılmaz — `useTheme().color` üzerinden gelir. */
export const kul = {
  0: '#FFFFFF',
  50: '#F7F4F6',
  100: '#EFEAEE',
  200: '#E2DAE1',
  300: '#CDC2CC',
  400: '#A599A4',
  500: '#7D717C',
  600: '#5C525B',
  700: '#423A41',
  800: '#2A242A',
  900: '#1B1419',
} as const;

/** Vurgu. Derin patlıcan moru — kategorinin sinyali ama neon değil.
 *  Ekranda tek bir yerde kullanılır. */
/** Vurgu ramp'i. Tek accent kuralına tabidir; dekorasyon için kullanılmaz. */
export const mor = {
  50: '#F4ECF5',
  100: '#E6D7E9',
  200: '#CDB0D3',
  300: '#AE85B8',
  400: '#8E5E9B',
  500: '#74437F',
  600: '#5C3466',
  700: '#45264D',
  800: '#2F1936',
  900: '#1C0E21',
} as const;

/**
 * Bakır. Doygun dolgu/metin olarak SADECE premium/ödeme/kilit — sinyal.
 * Çizgi işi olarak (hairline, ayraç, ≤6px nokta, SVG konturu, süs glifi,
 * `premiumSubtle` illüstrasyon dolgusu) marka imzası; bağlam kısıtı yok.
 * Bkz. docs/design-system.md K-2 ve KR-024.
 */
export const bakir = {
  100: '#F6EBD8',
  300: '#E0BE74',
  400: '#CFA34C',
  500: '#A87C2C',
  600: '#7F5C1E',
} as const;

/** Durum renkleri. Mistik palete karışmaz, bilerek nötr-fonksiyoneldir. */
export const durum = {
  success: '#2F7D5C',
  successBg: '#E6F1EC',
  warning: '#A87C2C',
  warningBg: '#F6EBD8',
  danger: '#B3423A',
  dangerBg: '#F7E7E5',
} as const;

/**
 * Abla'nın günlük notu kartı — TEK istisna yüzey.
 * noteSurface/noteBorder YALNIZCA günlük not kartında kullanılır; başka
 * hiçbir bileşende kullanılmaz. Genel vurgu için mor, premium sinyali
 * için bakır ramp'ine dön.
 */
export const gunlukNot = {
  surfaceLight: '#F2DDE3',
  surfaceDark: 'rgba(242, 221, 227, 0.10)',
  borderLight: bakir[400],
  borderDark: bakir[300],
} as const;

/**
 * Sohbet balonu — SADECE kullanıcı mesajı.
 * userBubble/userBubbleBorder yalnızca kullanıcının kendi balonunda
 * kullanılır; asistan balonu surface + border kullanır, başka hiçbir
 * yüzey bu ikisine dokunmaz. Amaç: konuşmada "ben" ile "Abla" arasındaki
 * farkı tek bir sıcak tonla kurmak, accent'i harcamadan.
 *
 * Light zemin bakir[100], kenar bakir[400] %45 — dark tarafta ikisi de
 * bakir[300] üzerinden düşük alfa, çünkü koyu yüzeyde opak bakır ağır durur.
 */
export const sohbetBalonu = {
  userSurfaceLight: bakir[100],
  userSurfaceDark: 'rgba(224, 190, 116, 0.12)',
  userBorderLight: 'rgba(207, 163, 76, 0.45)',
  userBorderDark: 'rgba(224, 190, 116, 0.28)',
} as const;

/**
 * Düşünme göstergesi — dönen halkanın üç yayı.
 * Bu üç token YALNIZCA düşünme göstergesinde (shared/ui/thinking-indicator)
 * kullanılır; başka hiçbir bileşen bunlara dokunmaz.
 *
 * Sistemdeki gradyan yasağı sürüyor. Halkanın üç renkli yaya bölünmesi
 * bu kuralın TEK istisnası: gerçek bir gradyan değil, ayrık üç yay —
 * amaç beklemenin canlı ama gürültüsüz okunması.
 *
 * Dark tarafta arc2 açılır (mor[600] koyu zeminde kaybolur, mor[200] durur).
 */
export const dusunmeGostergesi = {
  arc1: mor[300], // #AE85B8
  arc2Light: mor[600], // #5C3466
  arc2Dark: mor[200], // #CDB0D3
  arc3: bakir[400], // #CFA34C
} as const;

/* ---------------------------------------------------------------
 * 2. Tipografi
 * ------------------------------------------------------------- */

/**
 * Display: Newsreader (statik instance'lar — RN'de variable eksenler
 *   güvenilir çalışmıyor, bu yüzden 'Newsreader_600SemiBold' gibi
 *   sabit ağırlıklar yükle).
 * UI/Gövde: Inter — Türkçe diakritikleri (ı/İ/ğ/ş) doğru çizer,
 *   ekran için tasarlanmıştır.
 *
 * KURAL: Serif sadece display/h1/h2'de. h3 ve altındaki her şey Inter.
 * Ekran başına en fazla 2 serif satır. Buton, sekme, form, tablo,
 * hata mesajı asla serif olmaz.
 */
export const fontFamily = {
  display: 'Newsreader_600SemiBold',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansSemiBold: 'Inter_600SemiBold',
} as const;

/** Tipografi ölçeği. Serbest `fontSize` yazılmaz; serif yalnız display/h1/h2. */
export const typeScale = {
  display: {
    fontFamily: fontFamily.display,
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: -0.3,
  },
  h1: {
    fontFamily: fontFamily.display,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.2,
  },
  h2: {
    fontFamily: fontFamily.display,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.1,
  },
  h3: {
    fontFamily: fontFamily.sansSemiBold,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.1,
  },
  bodyLg: {
    fontFamily: fontFamily.sans,
    fontSize: 17,
    lineHeight: 26,
    letterSpacing: 0,
  },
  body: {
    fontFamily: fontFamily.sans,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0,
  },
  bodyStrong: {
    fontFamily: fontFamily.sansMedium,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0,
  },
  caption: {
    fontFamily: fontFamily.sans,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
  },
  /** Eyebrow / kategori etiketi. Büyük harf, seyrek kullan. */
  label: {
    fontFamily: fontFamily.sansMedium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
    textTransform: 'uppercase' as const,
  },
  button: {
    fontFamily: fontFamily.sansSemiBold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
  },
} as const;

/* ---------------------------------------------------------------
 * 3. Boşluk, yarıçap, çizgi
 * ------------------------------------------------------------- */

/** 4'ün katları. Ara değer uydurma. */
export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  section: 64,
} as const;

/** Ekran kenar boşluğu — her ekranda aynı. */
export const screenPadding = spacing.lg; // 20

/** Yarıçap ölçeği. Kart `lg`, alt sayfa üst köşeleri `xl`, tam yuvarlak `pill`. */
export const radii = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

/** Çizgi kalınlığı. Ayrım önce border ile kurulur; `thick` yalnız input odağında. */
export const borderWidth = {
  hairline: 1,
  thick: 1.5,
} as const;

/* ---------------------------------------------------------------
 * 4. Gölge
 * ------------------------------------------------------------- */

/**
 * Gölge rengi siyah değil, mor-mürekkep. Siyah gölge sıcak zeminde
 * kirli gri görünür. Light mode'da gölge minimum; ayrım öncelikle
 * border ile kurulur. Dark mode'da gölge YOK — katman farkı
 * yüzey renginin açılmasıyla verilir.
 */
export const shadow = {
  none: {},
  /** Kart, liste satırı */
  soft: {
    shadowColor: '#2F1936',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  /** Sheet, floating buton, sonuç kartı */
  lifted: {
    shadowColor: '#2F1936',
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
} as const;

/* ---------------------------------------------------------------
 * 5. Hareket
 * ------------------------------------------------------------- */

/**
 * Genel arayüz hızlı ve sessiz. Yavaş/teatral hareket SADECE
 * analiz sonucunun açılışında kullanılır — "çizgi izleniyor" hissi
 * ürünün imzası orada.
 */
export const motion = {
  duration: {
    instant: 120,
    fast: 180,
    base: 260,
    slow: 420,
    /** Sonuç açılışı — satır satır reveal */
    reveal: 700,
  },
  /** Reanimated Easing ile eşleştir */
  easing: {
    standard: [0.2, 0, 0, 1] as const,
    decelerate: [0, 0, 0, 1] as const,
    accelerate: [0.3, 0, 1, 1] as const,
  },
  /** Sonuç satırlarının birbirini takip etme gecikmesi */
  staggerMs: 90,
} as const;

/* ---------------------------------------------------------------
 * 6. Dokunma hedefleri
 * ------------------------------------------------------------- */

/** Dokunma hedefleri. `minTarget` alt sınırdır, görsel öğe daha küçük olabilir. */
export const hit = {
  /** iOS 44pt / Android 48dp — küçüğüne izin verme */
  minTarget: 48,
  buttonHeight: 52,
  inputHeight: 52,
  listRowMinHeight: 56,
  tabBarHeight: 56,
  /** Ekran başlığı şeridi — safe-area'nın altında, tab bar ile aynı yükseklik. */
  headerHeight: 56,
} as const;

/* ---------------------------------------------------------------
 * 7. Opaklık
 * ------------------------------------------------------------- */

/** Opaklık. Basılı hâl ve devre dışı görünüm; renk soldurmak için kullanılmaz. */
export const opacity = {
  disabled: 0.4,
  pressed: 0.85,
  scrim: 0.55,
} as const;
