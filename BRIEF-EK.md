# BRIEF-EK — Karar Güncellemeleri (nihai)

Bu dosya `landing-page-brief.md`'nin ekidir. Brief'teki açık soruların
(S-2, S-3, S-5, S-6) kararları burada. **Çelişki durumunda bu dosya
geçerlidir.** Brief'in çalışma kuralları (sormadan hiçbir şey yapma,
değer uydurma, yenilik eklemeden sor) aynen geçerlidir.

---

## S-5 KAPANDI — tüm modüller gösterilecek

Karar: el analizi, rüya, fizyonomi ve ebced — dördü de sitede tam
görünürlükte anlatılacak. El analizi alt sıraya itilmeyecek.

Platform gerçeği değişmedi; dürüstlük şart:

- El analizi kartında platform rozeti olacak.
  TR: "Android'de kullanılabilir" · EN: "Available on Android".
  type: caption, zemin: surfaceAlt, mistik öğe yok.
- Rüya her iki platformda da var; rozet gerekmez.
- Fizyonomi ve ebced "Yakında" rozetli kalır (brief §7.0 geçerli).
- Hero metni platformdan bağımsız yazılır; hero'da el analizi görseli
  kullanılacaksa alt metin rüyayı da kapsamalı.

## S-3 KAPANDI — stack

- Astro (güncel stabil sürüm) + Tailwind CSS + TypeScript
- Statik export (`output: 'static'`)
- React YOK. Etkileşim (dil geçişi, tema geçişi, SSS akordiyonu)
  vanilla JS ile. Bir island gerekirse ÖNCE SOR.
- Tailwind config brief §3 ve §4'teki token'lardan beslenecek;
  keyfî değer (arbitrary value, örn. `p-[17px]`) YASAK
- Paket yöneticisi: pnpm
- Deploy hedefi sonra netleşecek; şimdilik `dist/` üreten temiz bir
  statik build yeterli. Deploy adımına gelince SOR — mevcut dört yol
  (brief §0.2) o planda korunacak.

## S-2 KAPANDI — dil

- URL yolu: `/tr` ve `/en`. Kök `/` → `/tr` yönlendirmesi
- Dil değiştirici header'da; kullanıcıyı aynı bölümün karşılığına
  götürür, sayfa başına atmaz
- `hreflang` ve `og:locale` iki dil için de kurulacak
- TR ve EN metinler ayrı yazım — çeviri değil. Bu adımda brief'teki
  ton örneklerine uygun YER TUTUCU koy; nihai metin ayrı adımda
  birlikte yazılacak

## S-6 KAPANDI — sosyal, iletişim ve mağaza

- Instagram TR: https://www.instagram.com/ablacimofficial/
- Instagram EN: https://www.instagram.com/ablaciminternational/
- TikTok: https://www.tiktok.com/@abacimofficial
- Dil eşleşmesi: TR sayfada ablacimofficial, EN sayfada
  ablaciminternational görünür; TikTok her ikisinde de görünür
- E-posta: info@ablacim.com — altbilgide mailto olarak
- Mevcut site: https://www.ablacim.com/ — §0.2'deki dört yol korunacak

Mağaza bağlantıları:

- **Google Play — YAYINDA.** Doğrudan bağlantı:
  `https://play.google.com/store/apps/details?id=com.ablacim.app`
  Takip parametresi EKLEME (`pcampaignid` vb. yok); utm gerekirse
  sonradan config sabitinden eklenir.
- **App Store — HENÜZ YAYINDA DEĞİL.** Apple rozeti KULLANMA — resmî
  rozet yalnız yayındaki uygulamalar için. Bunun yerine Android
  rozetinin yanında tek satır metin:
  TR "iOS sürümü yakında" · EN "Coming soon to iPhone".
  type: caption, color: textSecondary, mistik öğe yok, geri sayım yok.
- Tüm dış bağlantılar tek bir config dosyasında sabit olarak dursun
  (örn. `site.config.ts`); App Store yayına girince rozet tek
  noktadan eklenebilsin, bölüm yeniden yazılmasın.

---

## İLK GÖREVİN

Bu adımda SADECE şunları yap:

1. Astro projesini kur (S-3'teki stack ile)
2. Brief §3'teki renk ramp'lerini ve §4'teki tipografi ölçeğini token
   katmanına çevir: CSS custom property'ler + Tailwind config.
   Semantik adlar brief'teki gibi (bg, surface, textPrimary, accent,
   premium...). Light ve dark değerleri baştan tanımla.
3. `/tr` ve `/en` yollarını, dil değiştiricinin iskeletini ve tema
   geçişinin iskeletini kur — görsel cila yok, ama çalışır durumda
4. Brief §9'daki dokuz bölümün BOŞ iskeletini oluştur: her bölüm
   başlık + yer tutucu metin. Süs yok, animasyon yok, illüstrasyon yok.
5. İçerik envanteri çıkar. Tablo:
   bölüm · içerik türü · TR var mı · EN var mı · kaynak · durum
   Elinde olmayanları "eksik" işaretle ve sor — uydurma.

YAPMA:
- Animasyon, illüstrasyon yerleşimi, nihai metin yazımı
- Brief'te olmayan bölüm, bileşen veya kütüphane
- SEO ince ayarı (temel meta yeterli)
- Deploy konfigürasyonu

Çıktın: çalışan iskelet + içerik envanteri + bana soracakların listesi.

---

## Hâlâ açık olanlar (bloklamıyor — eksikler listende raporla)

- V-1: Logo SVG'si (şu an raster; vektör temin edilecek)
- V-3: İllüstrasyon lisansı doğrulaması (yayın öncesi şart)
- S-1: Masaüstü tipografi ölçeği onayı (brief §4.4)
