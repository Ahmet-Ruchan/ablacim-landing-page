# Ablacım Landing Page — Devir Notu

Bu dosya, projeyi hiç görmemiş bir oturumun (insan veya Claude) sıfırdan
bağlam kurabilmesi için yazıldı. Tarih: 24 Ağustos 2026 · Dal: `main` ·
Son commit: `a86c147`.

Proje dili Türkçe: kod yorumları, commit mesajları, dosya adları ve
dokümanlar Türkçe. Aynı dilde devam et.

---

## 1. Ürün ne, bu repo ne

**Ablacım**, Türk kültüründeki "abla" figürü üzerine kurulmuş bir kişisel
içgörü uygulaması. Kullanıcı avucunun fotoğrafını yükler veya rüyasını
yazar; "Abla" sıcak, kişisel bir yansıma hazırlar; kullanıcı bu yansıma
üzerine Abla ile sohbet edebilir.

- Şirket: Mehmethan Yasa Ltd (UK Limited, Companies House #17103773)
- Platform: Android (Google Play'de **yayında**), iOS (**henüz yayında değil**)
- Diller: Türkçe + İngilizce
- Kategori: Entertainment (birincil) / Lifestyle (ikincil)

**Bu repo mobil uygulama değildir.** Uygulamanın koduna erişim yok ve
olmayacak. Burası **sıfırdan yazılmış, tek sayfalık, statik tanıtım
sitesi**: backend yok, veritabanı yok, form yok, kullanıcı hesabı yok.
İşi: anlatmak + mağazaya/web uygulamasına yönlendirmek + sosyal
bağlantılar.

Dört özellik anlatılıyor: **el analizi** (çalışıyor, yalnız Android),
**rüya** (çalışıyor, iki platform), **fizyonomi** ve **ebced** (henüz
yapılmadı — "Yakında" rozetli, aksiyonsuz). "Abla ile sohbet" ayrı
özellik değil, ilk ikisinin ortak devamı.

---

## 2. Nerede duruyor, nasıl çalıştırılır

| | |
|---|---|
| Yerel yol | `/Users/ruch/Desktop/ABLACIM/landing-page` |
| Git remote | `git@github.com:Ahmet-Ruchan/ablacim-landing-page.git` |
| Dal | yalnız `main` (12 commit) |
| Stack | Astro 7.2 + Tailwind CSS 4.3 + TypeScript (strict) |
| Paket yöneticisi | pnpm (lockfile var) · Node 22 |
| Çıktı | `output: 'static'` → `dist/` (3 sayfa: `/`, `/tr/`, `/en/`) |

```bash
pnpm dev       # geliştirme sunucusu
pnpm build     # dist/ üretir
pnpm preview   # dist'i servis eder
```

### Bu makinede iki tuzak (ikisini de yaşadım)

1. **`pnpm build` corepack yüzünden düşüyor.** Kurulu pnpm sürümü
   lockfile'ınkinden farklı; pnpm `node_modules`'ü silmek için TTY
   onayı istiyor, alamayınca `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`
   veriyor. Ajan oturumunda çözüm: **astro'yu doğrudan çağır** —
   `./node_modules/.bin/astro build`. (Kullanıcı terminalde `pnpm install`
   çalıştırıp onay verirse `pnpm build` de düzelir.)

2. **Bayat `dist/` derlemeyi kırıyor.** "Rearranging server assets"
   adımında `ENOENT: ... rename dist/.prerender/_astro/...css` hatası
   geliyor. Çözüm: `rm -rf dist .astro` sonra tekrar derle. Temiz
   derleme ~30 sn, 3 sayfa, dist ~6 MB, sıfır JS bundle (tüm script'ler
   inline).

Derlemenin şu an **geçtiği doğrulandı** (24 Ağustos 2026, temiz build).

### Lint/test yok

`package.json`'da `dev`/`build`/`preview` dışında script yok. Test yok,
`astro check` script'i yok, `scripts/design-lint.sh` **bu repoda yok**
(o mobil uygulamanın aracı — `design-exceptions.md` ondan bahsediyor).
Doğrulama gözle ve ekran görüntüsüyle yapılıyor (`docs/` altında).

---

## 3. Kod haritası

```
astro.config.ts        i18n (tr/en, prefixDefaultLocale), base, tailwind vite eklentisi
src/
  site.config.ts       TÜM dış bağlantılar tek noktada + withBase() yardımcısı
  i18n/
    index.ts           t(locale), otherLocale, localePath — Dict tipi tr'den türer
    tr.ts  en.ts       sözlükler (288–303 satır)
  layouts/Base.astro   <head>, SEO/OG/hreflang, FOUC tema scripti, hareket scripti,
                       atlama bağlantısı, Header + <slot> + Footer
  pages/
    index.astro        kök / → /tr yönlendirmesi (boş dosya, rota için)
    tr/index.astro     Base + Landing
    en/index.astro     Base + Landing
  components/
    Landing.astro      bölüm sırası burada
    Header.astro       yapışkan header: logo + sosyal ikonlar + dil pili + tema pili
    Footer.astro       marka bloğu + 3 sütun + alt bant
    LangPill.astro     TR·EN segmentli pil (gerçek <a>'lar)
    ThemePill.astro    Açık·Koyu segmentli pil (radiogroup, roving tabindex)
    CtaButton.astro    web uygulamasına giden tek accent pill buton
    StoreBadge.astro   Google Play rozeti + tıklanamaz "Yakında" App Store çipi
    IllustrationSlot.astro  astro:assets ile WebP + srcset 1x/2x + CLS kilidi
    PalmDivider.astro  imza öğesi: avuç çizgisi (tek örnek)
    sections/          Hero, AblaKim, Ozellikler, NasilCalisir, SohbetFarki,
                       Gizlilik, Sss, Indir, Sosyal, Iletisim
  styles/
    tokens.css         ham ramp → semantik → Tailwind @theme (KANONİK KAYNAK)
    global.css         tailwind import + base katman kuralları + hareket bütçesi
assets/                build'e giren kaynaklar (illüstrasyon PNG, ikon SVG, avuç çizgisi)
public/                olduğu gibi kopyalanan varlıklar (logo, badges, screens, og, favicon)
```

**Sayfa sırası** (`Landing.astro`): Hero → PalmDivider → Abla kim →
Özellikler → Nasıl çalışır → Sohbet farkı → Gizlilik → SSS → İndir →
Sosyal → İletişim → (Altbilgi, Base içinde).

Brief'teki 9 bölüme Sosyal ve İletişim sonradan eklendi (sahip talebi):
kapanış CTA'sı seyrelmesin diye İndir'in **ardına** kondu.

---

## 4. Bilmen gereken mekanizmalar

### İki dil
- Her görünen metin `t(locale)` sözlüğünden gelir. `alt` ve `aria-label`
  dahil. **Sabit string gömme.**
- `Dict = typeof tr` — TR sözlüğün şekli EN için bağlayıcı. EN'de anahtar
  eksikse **derleme hatası** verir. Ekleme yaparken iki dosyayı da yaz.
- EN çeviri değil, **ton karşılığı** ("kuzum" → "love").
- Bölüm id'leri iki dilde aynı; dil pili tıklama anında mevcut bölüm
  çapasını href'e ekler, kullanıcıyı sayfa başına atmaz.

### Tema
- İki durum: `light` | `dark`. "Sistem" segmenti **yok**.
- `html[data-theme]` niteliğiyle sürülür; `prefers-color-scheme` ile
  **değil**. Bu yüzden SVG içi medya sorgusu işe yaramaz — logo takası iki
  `<img>` + CSS `display` ile yapılıyor (Header/Footer/İndir'de aynı desen).
- Kalıcılık: `localStorage['ablacim-theme']`. Seçim yoksa sistemden türer
  ve sistem değişimini takip eder.
- QA zorlaması: `?theme=dark` / `?theme=light` URL parametresi.
- FOUC scripti `Base.astro` içinde `is:inline`, ilk boyamadan önce çalışır.
- **Dikkat:** `<meta name="theme-color">` hex'leri (`#f7f4f6` / `#150f19`)
  elle yazılı ve `tokens.css`'teki `--bg` değerleriyle eşleşmek zorunda.
  Birini değiştirirsen ötekini de değiştir.

### Base yolu (test yayını)
- `astro.config.ts` `base`'i `PUBLIC_BASE` env'inden alır; **yalnız CI'da**
  set ediliyor. Üretimde değişken yok → `base = '/'`.
- `public/` altındaki varlıkların yolu `withBase('/logo/...')` ile
  çözülmeli — çıplak `/logo/...` yazarsan test yayınında 404 olur.
- `assets/` altındakiler import edildiği için bu sorunu yaşamaz.

### Hareket bütçesi
- Bölüm girişleri IntersectionObserver + `.motion` sınıfı ile; JS yoksa
  veya `prefers-reduced-motion: reduce` ise sınıf hiç eklenmez → içerik
  anında görünür. **"Animasyon yoksa içerik de yok" durumu kabul edilemez.**
- Avuç çizgisi ayracı görünür olunca soldan sağa çizilir (800 ms).
  `non-scaling-stroke` yüzünden dash uzunluğu ekran ölçeğine göre
  hesaplanıyor — `Base.astro`'daki yorumu okumadan dokunma.
- Özellik kartları hover/tıklama ile çevriliyor (1000 ms). PRM'de dönmez,
  içerik anında takas olur.
- Yasak: parallax, scroll-jacking, sonsuz marquee, imleç takibi,
  otomatik oynayan sesli video.

### Görseller
- `IllustrationSlot` build sırasında WebP (kalite 82) üretir, 1x/2x srcset
  taşır, `width`/`height` + `aspect-ratio` ile CLS'i kilitler.
- Koyu temada **filtre/invert yok** — açık zeminli görsel "kâğıt öğesi"
  gibi durur, hairline kenarla ayrılır.
- Hero eager + `fetchpriority=high` (LCP adayı), kartlar lazy.

---

## 5. Tasarım sistemi — pazarlık dışı kurallar

Yön tek cümle: **"Mistik içerik / temiz kabuk."** Arayüz sakin, okunaklı,
güven veren bir wellness ürünü gibi davranır. Mistik olan tek şey içerik,
illüstrasyon ve tek vurgu rengi. Yıldız alanı, kristal küre, mor duman,
neon, tarot estetiği — hiçbiri yok.

Ticari gerekçesi var: kullanıcı fotoğrafını yükleyip ödeme ekranına kadar
gidiyor; koyu-altın-yıldızlı arayüz o akışta güven kaybettiriyor.

**Kanonik değer kaynağı `src/styles/tokens.css`.** Diğer her doküman
ondan türetilmiştir; çelişkide o geçerlidir.

- Bileşende **hex yazılmaz, ham ramp adı kullanılmaz.** Yalnız semantik
  adlar: `bg`, `surface`, `textPrimary`, `accent`, `premium`, `border`…
- **Dark tema light'ın tersi değil** — elle seçilmiş mor-siyah tonlar.
- **Gradyan yasak.** **Dark temada gölge yok** (katman farkı yüzey rengiyle).
- **Bir görüntü alanında en fazla bir solid accent buton.** Resmî mağaza
  rozetleri accent sayılmaz.
- **Serif (Newsreader) yalnız `display`/`h1`/`h2`.** Buton, form, etiket
  Inter. Bir görüntü alanında en fazla 2 serif satır.
- **Boşluk 4'ün katları**, ara değer uydurulmaz. Tailwind'in varsayılan
  ölçekleri kapatıldı (`--spacing-*: initial` vb.) — ölçek dışı utility
  zaten derlenmez.
- **Keyfî değer (`p-[17px]`) yasak.**
- **Dokunma hedefi min 48×48** (buton 52, liste satırı 56).
- Odak halkası: `accent`, 1.5px, offset 2.
- **Bakır (`premium`) tonu:** ödeme sinyali değil, marka motifi —
  "çizgi işi" olarak serbest (hairline, sıra numarası, ayraç). Karar KR-024.

### Tailwind ad çakışması tuzağı
`--spacing-xs/sm/md/lg/xl` Tailwind'in container adlarıyla çakışıyor:
`max-w-sm` container yerine **8px**'e çözülür. `max-w-{xs,sm,md,lg,xl}`
**kullanma** — kesir (`w-3/4`), çakışmayan container (`max-w-3xs`,
`max-w-6xl`, `max-w-page`, `max-w-demo`) veya `w-full` kullan.

---

## 6. İçerik kuralları — mağaza gereği, tercih değil

### 6.1 App Store dil kapısı (en kritik madde)

Uygulama App Store'dan **4.3(b) "doygun kategori"** gerekçesiyle bir kez
reddedildi. Sonrasında iOS metinleri "fal" dilinden **"kendini keşfetme"**
diline çevrildi. Apple inceleme sırasında pazarlama sitesine bakabiliyor.

| Kullanma | Bunun yerine |
|---|---|
| El falı, falına bak | El analizi, avucundaki izler |
| Geleceğini öğren / gör | Kendini daha yakından tanı |
| Kaderin, kader haritan | Yolun, eğilimlerin |
| Rüya tabiri | Rüya yansıması, rüya günlüğü |
| Ebced ile geleceğin | İsim ve harflerle yorum |
| Kesin, olacak, çıkacak | Olabilir, işaret ediyor, düşündürüyor |

Şu ibare sitede **görünür** durmak zorunda (altbilgi marka bloğunda,
`footer.disclaimer`):

> "Eğlence ve kişisel içgörü amaçlıdır; tıbbi, hukuki veya finansal
> tavsiye yerine geçmez."

Ebced metninde gelecek vaadi yok — "hesaplama var" demek sorun değil,
"geleceğini söyler" demek sorunlu.

### 6.2 Fiyat yazılmaz

Fiyatlar mağaza tarafından kullanıcının para biriminde belirleniyor.
Sitede sabit tutar yazmak yanlış olur ve mağaza kurallarıyla çelişir.
Ürün ailelerini isim/kapsam olarak anlat, fiyatı "uygulamada, kendi para
biriminde" diye bırak. Abonelik olduğu için otomatik yenileme açıklaması,
iptal yolu ve yasal bağlantılar sitede bulunmak zorunda — hepsi İndir
bölümü ve SSS içinde duruyor.

### 6.3 Marka sesi

Sıcak ve yakın ama abartısız; hitap "kuzum", "canım" (EN'de "love").
Kesin konuşmaz. Ünlem yok, büyük harfle bağırma yok, aciliyet yok, geri
sayım yok. Yargılamaz.

**Hitap bütçesi tutuluyor:** TR'de "kuzum" ×1 + "canım" ×1 (tavan 3),
EN'de "love" ×2 (tavan 2). Abla'nın sesi yalnız hero, "Abla kim" ve
kapanış CTA'da duyulur; geri kalan bölümler nötr ürün dili kullanır.
Metin eklerken bu bütçeyi bozma.

### 6.4 Platform dürüstlüğü

- El analizi kartında **"Android'de kullanılabilir"** rozeti var (EK S-5).
- Fizyonomi ve ebced **"Yakında"** rozetli; buton yok, tıklanabilir değil,
  hover'da tepki vermiyor. `opacity: 0.4` yasak — kart okunur kalmalı.
- Dört kart **aynı şablonu** paylaşır; yalnız rozet, aksiyon ve metin
  rengi değişir.
- **App Store rozeti:** resmî Apple rozeti yalnız yayındaki uygulamalar
  için — kullanmak yasak. Yerine `StoreBadge.astro` içinde Play rozetiyle
  aynı ölçüde, **tıklanamaz** (`role="img"`, link değil), üst satırı
  "Yakında" olan bir çip çiziliyor. Apple glifi simple-icons'tan (CC0).
  Bu sahibin bilinçli kararı; EK S-6'daki uyarı iki kez yapıldı.

---

## 7. Dış bağlantılar ve mevcut sitenin korunması

Tüm dış adresler `src/site.config.ts`'te. Yeni adres kod içine gömme.

| Ne | Değer |
|---|---|
| Web uygulaması (CTA hedefi) | `https://www.ablacim.com/` |
| Google Play | `.../details?id=com.ablacim.app` — takip parametresi **yok** |
| App Store | `null` (yayına girince buradan açılır) |
| Instagram TR | `@ablacimofficial` |
| Instagram EN | `@ablaciminternational` |
| TikTok | `@abacimofficial` (adı böyle — yazım hatası değil, teyit edildi) |
| E-posta | `info@ablacim.com` |
| Yasal | `/privacy-policy`, `/distance-sales-agreement` (mutlak adres) |

Dil eşleşmesi: TR sayfada `ablacimofficial`, EN sayfada
`ablaciminternational`; TikTok ikisinde de. Header, Footer ve Sosyal
bölümü aynı kuralı uyguluyor.

### ⚠️ Mevcut sitenin dört yolu bozulamaz

`www.ablacim.com` canlı ve **mobil uygulama bu adreslere kod içinden
gidiyor**:

| Yol | Kim kullanıyor |
|---|---|
| `/privacy-policy` | Uygulama içi gizlilik bağlantıları |
| `/distance-sales-agreement` | Satın alma ekranı — yasal zorunluluk |
| `/auth/reset-password` | Şifre sıfırlama derin bağlantısı |
| `/palm` | Uygulama içi bağlantı |

Landing page köke (`/`) gelecek; bu dört yol çalışmaya devam etmeli.
**Üretim deploy planı henüz kararlaştırılmadı** — bu garantiyi nasıl
vereceğini sahiple konuşmadan deploy adımına girme.

### Şu anki yayın: yalnız test

`.github/workflows/deploy-test.yml` → GitHub Pages, alt yolda
(`PUBLIC_BASE=/ablacim-landing-page`). **Kalıcı üretim dağıtımı değildir**;
iş akışı silinerek yayın kapanır. `main`'e push'ta tetiklenir.

---

## 8. Dokümanlar — hangisi ne zaman okunur

| Dosya | Ne | Not |
|---|---|---|
| `landing-page-brief.md` | Orijinal brief (899 satır): ürün, ton, renk, tipografi, bölüm bölüm özellik anlatımı, kabul kriterleri | Ana kaynak |
| `BRIEF-EK.md` | Açık soruların kararları (S-2 dil, S-3 stack, S-5 modüller, S-6 bağlantılar) | **Çelişkide bu geçerli** |
| `design-system.md` | K-1…K-20 kuralları ve gerekçeleri | Mobil+web ortak |
| `design-decisions.md` | KR-001…KR-024 numaralı karar kaydı | Kural değiştirmeyi düşünürken |
| `design-exceptions.md` | Kuralların bilerek delindiği **kapalı** liste (İ-1…İ-5) | Hepsi mobil uygulamaya ait; liste kapalı |
| `brand.md` | Logo, ikon varyantları, mağaza varlıkları | Geometri/oranlar **doğrulanmamış** |
| `icons.md` | UI ikon stil referansı | |
| `tokens.ts` | Mobil uygulamanın ham token dosyası | Web için `tokens.css` esas |
| `design-reference.html` | Sistem ve ekranlar tek sayfada, canlı | Tarayıcıda aç |
| `icerik-envanteri.md` | İçerik envanteri | **Adım 1 tarihli, güncel değil** — o zamanki eksiklerin çoğu kapandı |
| `docs/kopya-dokumu.md` | TR+EN metin dökümü, ses/ton notlarıyla | Adım 2 taslağı; sözlükler bundan ilerledi |
| `docs/dogrulama-*/` | 29 doğrulama ekran görüntüsü (390/768/1440, light/dark) | |
| `tasarım-palet/` | Tüm tasarım paketinin **kopyası** (BASLA-BURADAN.md ile) | Paylaşım için; **deploy etme**, canlı hâli repo kökünde |

---

## 9. Çalışma kuralları — sahip bunları açıkça koydu

Bunların istisnası yok; önceki oturumlar boyunca uygulandı:

1. **Sormadan hiçbir şey yapma.** Brief'te veya sohbette karşılığı olmayan
   bir şeyle karşılaşınca varsayma, sor.
2. **Yenilik eklemeden önce sor.** Brief'te yazmayan bölüm, bileşen,
   animasyon, ikon, illüstrasyon, renk, font, kütüphane veya etkileşim —
   fikir iyi olabilir ama onaysız girmez.
3. **Değer uydurma.** Ölçekte olmayan boşluk/punto/renk yok.
4. **Ürün içeriğini uydurma.** Özellikle fizyonomi ve ebced için: henüz
   yapılmadılar, ne yapacaklarına dair vaat yazılmaz.
5. **React yok.** Etkileşim vanilla JS ile. Bir island gerekirse önce sor.

Kod içindeki Türkçe yorumlar bu kararların gerekçelerini taşıyor — bir
satırı değiştirmeden önce üstündeki yorumu oku. Çoğu "bu neden böyle"
sorusunun cevabı orada (ör. logo neden iki `<img>`, avuç çizgisi dash'i
neden ölçekleniyor, SSS'te 70ch tavanı neden kaldırıldı).

---

## 10. Açık kalanlar / dikkat edilecekler

**Karar bekleyenler**
- **Üretim deploy planı** — dört yolun korunması nasıl garanti edilecek (S-3'ün açık kalan yarısı).
- **V-3: İllüstrasyon lisansı** ticari kullanıma açık mı, atıf gerekiyor mu — **yayın öncesi netleşmeli**.
- **App Store yayını** — girince `site.config.ts`'te `appStoreUrl` doldurulur, `StoreBadge`'deki "Yakında" çipi resmî rozetle değişir, `Sss.astro` sözlüğünde yorum satırında bekleyen iOS iptal cümlesi açılır (`src/i18n/tr.ts` SSS 3. madde).
- `brand.md` içindeki logo geometrisi ve oranları **doğrulanmamış** — `public/logo/Ablacım.ai` dosyasından teyit edilmeli.
- Kaynak tasarım dosyası (Figma) yok; elde `Ablacım.ai` ve export'lar var.

**Repo hijyeni**
- `public/logo.zip` (767 KB) **takip edilmiyor** ve `dist/`'e kopyalanır — repoya girecek mi, silinecek mi belli değil.
- `public/fizyonomi-deneme.png` (2.3 MB) **hiçbir yerde kullanılmıyor** ama `public/` altında olduğu için her derlemede `dist/`'e kopyalanıyor. Muhtemelen `assets/illustrations/` altına taşınmalı veya silinmeli.
- `public/logo/` 28 dosya; landing page bunlardan yalnız 4 SVG kullanıyor (`yatay-beyaz-ustu`, `yatay-siyah-ustu`, `icon-beyaz-ustu`, `icon-siyah-ustu`). Gerisi mobil uygulama için.
- `robots.txt` ve `sitemap.xml` yok.
- Otomatik test/lint yok; `astro check` script olarak tanımlı değil.

---

## 11. İlk beş dakikada ne yap

```bash
cd /Users/ruch/Desktop/ABLACIM/landing-page
rm -rf dist .astro && ./node_modules/.bin/astro build   # yeşil olmalı
./node_modules/.bin/astro dev                            # localhost:4321/tr/
```

Sonra sırayla: `BRIEF-EK.md` (kararlar) → `src/styles/tokens.css`
(değerler) → `src/components/Landing.astro` (sayfa iskeleti) →
`src/i18n/tr.ts` (tüm metin). `docs/dogrulama-gorseller/` sitenin şu anki
hâlini gösteriyor.

Bir şeye dokunmadan önce: brief'te karşılığı var mı? Yoksa **sor**.
