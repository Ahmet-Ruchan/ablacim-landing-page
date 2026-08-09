# Logo ve Favicon — Landing Page

Landing page'de marka görsellerinin açık/koyu temaya göre nasıl yönetildiği.

## Özet

**İki ayrı mekanizma var, sebebi de önemli:**

| | Favicon | Site içi logolar |
|---|---|---|
| Dosya sayısı | 1 (tek SVG) | 2 (açık + koyu varyant) |
| Tema kaynağı | `prefers-color-scheme` (işletim sistemi) | `html[data-theme]` (site içi tema pili) |
| Takas yöntemi | SVG'nin içinde `@media` ile dolgu değişimi | CSS `display` ile dosya takası |

Ayrılığın sebebi: site teması işletim sistemi tercihiyle değil, **2 durumlu tema
piliyle** yönetiliyor. Bir SVG'nin içindeki medya sorgusu bu pili izleyemez.
Favicon ise tarayıcı sekmesinde durduğu için sayfanın `data-theme` niteliğini
okuyamaz — o da OS tercihine bakmak zorunda.

## 1. Favicon

### `public/favicon.svg` (1.2 KB)

`Base.astro:32` — `<link rel="icon" type="image/svg+xml">`

`Icon_BeyazÜstü` ve `Icon_SiyahÜstü` tek dosyada birleştirilmiş: **geometri
ortak**, yalnızca dolgular tarayıcı temasına göre değişiyor. Kare `viewBox`
için yatayda ortalanmış (`viewBox="-2.42 0 116.9 116.9"`).

```svg
<style>
  .tepe  { fill: #cfa34c; }   /* altın — tepe daire */
  .govde { fill: #45264d; }   /* koyu mor — gövde */
  .kanat { fill: #cdb0d3; }   /* açık mor — kanat */
  @media (prefers-color-scheme: dark) {
    .tepe  { fill: #e0be74; }
    .govde { fill: #8e5e9b; }
  }
</style>
```

`.kanat` her iki temada aynı kalıyor; sadece `.tepe` ve `.govde` açılıyor.

### `public/apple-touch-icon.png`

`Base.astro:33`. Düz PNG, **tema varyantı yok** — iOS ana ekran ikonlarında
tema duyarlılığı desteklenmiyor.

## 2. Site içi logolar

### Kullanılan dosyalar

Landing page `public/logo/` altındaki ~20 dosyadan yalnızca **4 SVG**'yi
kullanıyor:

| Dosya | Tema | Baskın renkler |
|---|---|---|
| `logo/yatay-beyaz-ustu.svg` | açık | `#45264d` koyu mor, `#cfa34c` altın, `#cdb0d3` |
| `logo/yatay-siyah-ustu.svg` | koyu | `#8e5e9b` açık mor, `#e0be74` açık altın, `#f3eef4` yazı |
| `logo/icon-beyaz-ustu.svg` | açık | koyu varyant, yazısız ikon |
| `logo/icon-siyah-ustu.svg` | koyu | açık varyant, yazısız ikon |

### İsimlendirme mantığı

**"beyaz-üstü" = beyaz zeminin üzerine konacak** → koyu mürekkepli → **açık
tema** logosu. "siyah-üstü" bunun tersi: koyu zemine konacak, açık renkli,
**koyu tema** logosu.

Sınıf adları tema tarafını söyler, dosya adı ise zemin tarafını:
`.logo-acik` → `yatay-beyaz-ustu.svg`. İlk bakışta ters gibi durabilir,
tutarlıdır.

### Kullanım yerleri

| Bileşen | Satır | Sınıflar | Boyut |
|---|---|---|---|
| `Header.astro` | 44, 52 | `.logo-acik` / `.logo-koyu` | 123×35 · 123×34 |
| `Footer.astro` | 45, 54 | `.logo-acik` / `.logo-koyu` | — |
| `sections/Indir.astro` | 28, 37 | `.ikon-acik` / `.ikon-koyu` | 40×40, `loading="lazy"` |

Üçünde de aynı desen: iki `<img>` yan yana basılır, biri CSS ile gizlenir.
Her ikisi de `alt="" aria-hidden="true"` — dekoratif sayılıyor; erişilebilir
ad sarmalayan `<a aria-label={d.brand}>`'dan geliyor.

### Takas kuralı

`Header.astro:115-123` (Footer'da aynısı, Indir'de `ikon-` önekiyle):

```css
.logo-koyu { display: none; }                              /* varsayılan: açık tema */
:global(html[data-theme='dark']) .logo-koyu { display: block; }
:global(html[data-theme='dark']) .logo-acik { display: none; }
```

Boyutlandırma responsive: mobilde `height: 28px`, `min-width: 768px`'ten
sonra `40px`; `object-fit: contain`, `object-position: left center`.

### Neden inline SVG değil?

`Header.astro:38-41`'deki nota göre iki gerekçe var:

1. SVG içi medya sorgusu `prefers-color-scheme`'e bakar, tema pilini izlemez.
2. İki SVG de aynı `.cls-1/2/3` sınıflarını **farklı renklerle** tanımlıyor.
   Inline gömülselerdi `<style>` blokları belge geneline sızıp birbirini
   ezerdi.

Bu yüzden `<img>` ile dışarıdan yükleniyorlar — SVG'nin stil kapsamı dosya
içinde kalıyor.

## Tema mekanizması

`html` üzerinde iki nitelik taşınıyor:

- **`data-theme`** — görsel tema (`light` / `dark`), logo takası buna bakar
- **`data-theme-pref`** — kullanıcı tercihi, tema pilinin thumb konumunu sürer

`Base.astro:71-72`'deki FOUC scripti sayfa boyanmadan önce ikisini de yazar;
`ThemePill.astro:101-102` pil tıklanınca günceller.

## UI ikonları (logo değil)

`assets/icons/` altındakiler `?raw` ile **inline gömülüyor** — logolardan
farklı olarak stil çakışması riski yok, tek renk kullanıyorlar:

| Dosya | Nerede |
|---|---|
| `sun.svg`, `moon.svg` | `ThemePill.astro` — tema pili |
| `instagram.svg`, `tiktok.svg` | `Header.astro`, `Footer.astro` |
| `apple.svg` | `StoreBadge.astro` |
| `avuc-cizgisi.svg` | `PalmDivider.astro` — bölüm ayracı, imza öğesi |

## Bilinen sınırlar

### Favicon tema pilini izlemez

Favicon işletim sistemi tercihine bakar, site ise pile. Kullanıcı pili koyuya
alıp OS'i açıkta bırakırsa **favicon açık varyantta kalır**.

Tarayıcı sekmesi sayfa durumunu okuyamadığı için bu kaçınılmaz. Hata değil,
kabul edilmiş sınır. (Tek çare JS ile `<link rel="icon">`'u runtime'da
değiştirmek olurdu; sekme ikonu için bu karmaşıklık gerekçesiz.)

### `public/logo/` şişkin

Klasörde ~20 dosya var: `Ablacım.ai` kaynak dosyası, android adaptive ikon
seti (foreground / background / monochrome), `splash.png`,
`ios-app-icon-1024.png`, çeşitli jpg/png varyantları. Landing page bunların
**hiçbirini kullanmıyor**, yalnızca yukarıdaki 4 SVG'yi çekiyor.

Gerisi mobil uygulama için olmalı. Landing page deploy'una gereksiz yük
biniyor — ayrı bir marka varlıkları deposuna taşınabilir.

## Yeni bir yere logo eklerken

1. Zemin açık temada mı koyu temada mı duracak, ona göre `beyaz-ustu` /
   `siyah-ustu` çiftini seç.
2. İki `<img>` bas, `alt=""` ve `aria-hidden="true"` ver; erişilebilir adı
   sarmalayan öğeye `aria-label` olarak koy.
3. Yukarıdaki üç satırlık `display` kuralını kopyala — `:global()` şart,
   çünkü `data-theme` `html` üzerinde ve Astro stilleri kapsamlı.
4. `width`/`height` niteliklerini gerçek oranla ver (CLS için), boyutu CSS'ten
   sür.
