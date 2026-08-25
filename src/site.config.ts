/**
 * Tüm dış bağlantılar tek noktada (BRIEF-EK S-6).
 * App Store yayına girince rozet buradan eklenecek; bölüm yeniden yazılmayacak.
 */
/** Kök-göreli varlık yollarını base'e göre çözer (test yayını alt yolda). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.endsWith('/') ? base.slice(0, -1) : base}${path}`;
}

export const siteConfig = {
  /*
   * BU SİTENİN kendi adresi — canonical, hreflang ve og:url buradan türer.
   *
   * DİKKAT (25 Ağu): burası uzun süre 'https://www.ablacim.com' yazıyordu.
   * Site kendi alan adına (app.ablacim.com) taşınırken bu değer kalsaydı
   * canonical ANA SİTEYİ gösterecekti — ablacim.com'un kendi landing'i de
   * indeksli olduğu için Google iki sayfayı çakıştırırdı. Tam kaçındığımız
   * şey. Değeri astro.config.ts'in `site` alanıyla AYNI kaynaktan alıyoruz.
   *
   * Aşağıdaki webAppUrl ve legal.* ise ANA SİTEYE gider; onlar bilerek
   * www.ablacim.com'da kalıyor. İkisini karıştırma.
   */
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'https://app.ablacim.com',
  // Web uygulaması — sayfadaki "analize başla" CTA'larının hedefi (ANA SİTE)
  webAppUrl: 'https://www.ablacim.com/',

  store: {
    // Takip parametresi yok (BRIEF-EK S-6); utm gerekirse buradan eklenir.
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.ablacim.app',
    // App Store henüz yayında değil — resmî rozet yalnız yayındaki uygulamalar için.
    appStoreUrl: null as string | null,
  },

  social: {
    instagramTr: 'https://www.instagram.com/ablacimofficial/',
    instagramEn: 'https://www.instagram.com/ablaciminternational/',
    tiktok: 'https://www.tiktok.com/@abacimofficial',
  },

  contact: {
    email: 'info@ablacim.com',
  },

  // Mevcut sitedeki korunacak yollar (brief §0.2) — mutlak adres,
  // yeni site deploy edilene kadar da çalışır.
  legal: {
    privacyPolicy: 'https://www.ablacim.com/privacy-policy',
    distanceSalesAgreement: 'https://www.ablacim.com/distance-sales-agreement',
  },
} as const;
