# Renk Paleti — Ablacım

Bu dosya `tokens.css`'in insan okuyabilir özetidir. **Kaynak `tokens.css`'tir**;
çelişki olursa o geçerlidir.

## Temel ilke

> Dark tema, light'ın tersi **değildir**. Elle seçilmiş mor-siyah tonlardır.
> `invert`/`filter` kullanılmaz.

Bileşenler ham ramp adı (`--mor-400` gibi) **kullanmaz**. Yalnızca semantik ad
kullanılır (`bg`, `surface`, `textPrimary`, `accent`, `premium`…). Ham ramp'ler
sadece semantik katmanı türetmek içindir.

Yön: **"mistik içerik / temiz kabuk"** — arayüz sakin ve okunaklı; mistik olan
tek şey içerik, illüstrasyon ve tek bir vurgu rengi. Navigasyon, ayarlar, form
ve yasal ekranlarda mistik hiçbir öğe kullanılmaz.

---

## 1. Ham ramp'ler

Üç ramp var. Bunlar doğrudan kullanılmaz, semantik katman bunlardan türer.

### Kül (nötr)

| Token | Hex | |
|---|---|---|
| `--kul-0` | `#ffffff` | ⬜ |
| `--kul-50` | `#f7f4f6` | |
| `--kul-100` | `#efeaee` | |
| `--kul-200` | `#e2dae1` | |
| `--kul-300` | `#cdc2cc` | |
| `--kul-400` | `#a599a4` | |
| `--kul-500` | `#7d717c` | |
| `--kul-600` | `#5c525b` | |
| `--kul-700` | `#423a41` | |
| `--kul-800` | `#2a242a` | |
| `--kul-900` | `#1b1419` | ⬛ |

Nötr ama saf gri değil — hafif mor kırılımlı ("kül" adı buradan).

### Mor (marka / vurgu)

| Token | Hex |
|---|---|
| `--mor-50` | `#f4ecf5` |
| `--mor-100` | `#e6d7e9` |
| `--mor-200` | `#cdb0d3` |
| `--mor-300` | `#ae85b8` |
| `--mor-400` | `#8e5e9b` |
| `--mor-500` | `#74437f` |
| `--mor-600` | `#5c3466` |
| `--mor-700` | `#45264d` |
| `--mor-800` | `#2f1936` |
| `--mor-900` | `#1c0e21` |

### Bakır (premium / imza)

| Token | Hex |
|---|---|
| `--bakir-100` | `#f6ebd8` |
| `--bakir-300` | `#e0be74` |
| `--bakir-400` | `#cfa34c` |
| `--bakir-500` | `#a87c2c` |
| `--bakir-600` | `#7f5c1e` |

---

## 2. Semantik renkler

Kullanılacak olan bunlar. Sol sütun Tailwind'de `bg-surface`, `text-textPrimary`
gibi utility'lere karşılık gelir.

### Yüzeyler

| Semantik ad | Light | Dark |
|---|---|---|
| `bg` | `#f7f4f6` | `#150f19` |
| `surface` | `#ffffff` | `#1e1723` |
| `surfaceAlt` | `#efeaee` | `#281f2e` |
| `surfacePressed` | `#e2dae1` | `#332839` |
| `surfaceTranslucent` | `rgba(255,255,255,.92)` | `rgba(30,23,35,.92)` |
| `skeleton` | `#efeaee` | `#281f2e` |

### Kenarlıklar

| Semantik ad | Light | Dark |
|---|---|---|
| `border` | `#e2dae1` | `#362b3c` |
| `borderStrong` | `#cdc2cc` | `#483b4e` |

### Metin

| Semantik ad | Light | Dark |
|---|---|---|
| `textPrimary` | `#1b1419` | `#f3eef4` |
| `textSecondary` | `#5c525b` | `#b7acb8` |
| `textMuted` | `#7d717c` | `#8a7f8b` |
| `textInverse` | `#ffffff` | `#1b1419` |

### Vurgu (mor)

| Semantik ad | Light | Dark |
|---|---|---|
| `accent` | `#5c3466` | `#ae85b8` |
| `accentPressed` | `#45264d` | `#cdb0d3` |
| `accentSubtle` | `#f4ecf5` | `rgba(174,133,184,.14)` |
| `accentBorder` | `#e6d7e9` | `rgba(174,133,184,.28)` |
| `onAccent` | `#ffffff` | `#1c0e21` |

Dikkat: dark'ta `accentPressed`, `accent`'ten **daha açık**. Koyu zeminde
basılı hâl açılarak belirtilir, koyulaşarak değil.

### Premium (bakır)

| Semantik ad | Light | Dark |
|---|---|---|
| `premium` | `#a87c2c` | `#e0be74` |
| `premiumSubtle` | `#f6ebd8` | `rgba(224,190,116,.14)` |
| `premiumHairline` | `color-mix(in srgb, premium 55%, transparent)` | aynı formül |

`premiumHairline` marka imzası olan bakır çizgi tonudur; tek tanım her iki
temada da doğru çözülür çünkü `premium` zaten temaya göre değişir.

### Durum renkleri

| Semantik ad | Light | Dark |
|---|---|---|
| `success` | `#2f7d5c` | `#5fb08a` |
| `successBg` | `#e6f1ec` | `rgba(95,176,138,.14)` |
| `warning` | `#a87c2c` | `#e0be74` |
| `warningBg` | `#f6ebd8` | `rgba(224,190,116,.14)` |
| `danger` | `#b3423a` | `#e08279` |
| `dangerBg` | `#f7e7e5` | `rgba(224,130,121,.14)` |

`warning` = `premium` ile aynı bakır. Bilinçli.

### Diğer

| Semantik ad | Light | Dark |
|---|---|---|
| `scrim` | `rgba(27,20,25,.55)` | `rgba(8,5,10,.65)` |
| `bubbleUserSurface` | `#f6ebd8` | `rgba(224,190,116,.12)` |
| `bubbleUserBorder` | `rgba(207,163,76,.45)` | `rgba(224,190,116,.28)` |

Sohbet balonu token'ları **yalnız kullanıcı balonu** içindir. Asistan balonu
`surface` + `border` kullanır.

---

## 3. Gölge

| | Light | Dark |
|---|---|---|
| `shadow-soft` | `0 4px 12px rgba(47,25,54,.06)` | **yok** |
| `shadow-lifted` | `0 10px 24px rgba(47,25,54,.1)` | **yok** |

Gölge rengi siyah değil **mor mürekkep** (`#2f1936`). Dark temada gölge hiç
yoktur — katman farkı yüzey rengiyle verilir.

---

## 4. Tipografi

İki aile:

- **Display:** `'Newsreader', Georgia, serif`
- **Gövde:** `'Inter', system-ui, sans-serif`

| Ad | Boyut | Satır | Harf aralığı | Ağırlık |
|---|---|---|---|---|
| `display` | `clamp(34px → 44px)` | 1.12 | −0.3px | 600 |
| `h1` | `clamp(28px → 34px)` | 1.15 | −0.2px | 600 |
| `h2` | `clamp(22px → 24px)` | 1.25 | −0.1px | 600 |
| `h3` | 18px | 24px | −0.1px | 600 |
| `bodyLg` | 17px | 26px | — | — |
| `body` | 15px | 23px | — | — |
| `bodyStrong` | 15px | 23px | — | 500 |
| `caption` | 13px | 18px | — | — |
| `label` | 12px | 16px | +0.6px | 500 |
| `button` | 16px | 20px | — | 600 |

Not: `display`/`h1`/`h2` tavanları sahip talebiyle küçültüldü ("çok büyük
çarpıyor göze"): display 56→44, h1 40→34, h2 30→24. Harf aralıkları değişmedi.

---

## 5. Boşluk

4'ün katları. **Ara değer üretilmez.**

| Ad | px | | Ad | px |
|---|---|---|---|---|
| `xxs` | 2 | | `xxl` | 32 |
| `xs` | 4 | | `xxxl` | 40 |
| `sm` | 8 | | `huge` | 48 |
| `md` | 12 | | `section` | 64 |
| `base` | 16 | | `section-lg` | 96 |
| `lg` | 20 | | `section-xl` | 128 |
| `xl` | 24 | | | |

`section-lg` / `section-xl` masaüstü (≥1024px) bölüm araları içindir.
`section-xl` **yalnız** hero ve kapanış CTA'sında kullanılabilir.

> ⚠️ **Tuzak:** `xs/sm/md/lg/xl` adları Tailwind'in container adlarıyla çakışır.
> `max-w-sm` container yerine bu spacing değerine çözülür (yani 8px olur).
> `max-w-{xs,sm,md,lg,xl}` **kullanma** — kesir (`w-3/4`), çakışmayan container
> (`max-w-3xs`, `max-w-6xl`) veya `w-full` kullan.

---

## 6. Yarıçap

| Ad | px |
|---|---|
| `xs` | 6 |
| `sm` | 10 |
| `md` | 14 |
| `lg` | 20 |
| `xl` | 28 |
| `pill` | 999 |

---

## 7. Hareket

| Eğri | Değer |
|---|---|
| `ease-standard` | `cubic-bezier(.2, 0, 0, 1)` |
| `ease-decelerate` | `cubic-bezier(0, 0, 0, 1)` |
| `ease-accelerate` | `cubic-bezier(.3, 0, 1, 1)` |

| Süre | ms | Not |
|---|---|---|
| `instant` | 120 | |
| `fast` | 180 | |
| `base` | 260 | |
| `slow` | 420 | |
| `reveal` | 700 | yalnız sonuç açılışı |
| `flip` | 1000 | kart çevirme — sahip talebi: yavaş ve yumuşak |
| `stagger` | 90 | sıralı giriş gecikmesi |

---

## 8. Dokunma hedefi ve ölçüler

| Token | Değer | Not |
|---|---|---|
| `hit-min` | 48px | WCAG 2.5.5 alt sınırı |
| `hit-button` | 52px | |
| `hit-row` | 56px | |
| `header-height` | 56px → 64px | ≥1024px'te 64 |
| `container-page` | 1200px | sayfa konteyneri |
| `container-demo` | 640px | dar içerik genişliği |

---

## 9. Tema nasıl değişiyor

`<html>` üzerinde iki nitelik:

- **`data-theme`** — `light` / `dark`. Görsel tema; tüm token'lar buna bakar.
- **`data-theme-pref`** — kullanıcı tercihi; tema pilinin thumb konumunu sürer.

Sayfa boyanmadan önce bir inline script ikisini de yazar (FOUC önleme).
Tema **işletim sistemi tercihiyle değil, site içi 2 durumlu pille** yönetilir.

Tek istisna favicon: tarayıcı sekmesi sayfa durumunu okuyamadığı için
`prefers-color-scheme`'e bakar. Ayrıntı → `04-referans/logo-favicon.md`.
