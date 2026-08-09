# Ablacım — Tasarım Paketi

Bu klasör Ablacım'ın tüm tasarım varlıklarını, renk paletini, tema kurallarını
ve tasarım kararlarını içerir. Landing page ve mobil uygulama için tek kaynak.

**Bu bir kopyadır.** Dosyaların canlı hâli `landing-page/` altındadır; buradaki
kopyalar üzerinde çalışıp değişiklikleri geri bildirin, doğrudan bu klasörü
deploy etmeyin.

---

## Nereden başlamalı

| Sıra | Dosya | Neden |
|---|---|---|
| 1 | `02-tokenlar/palet.md` | **Buradan başla.** Tüm renkler, tipografi, boşluk, yarıçap tek sayfada |
| 2 | `01-kurallar/design-system.md` | Sistemin kuralları — neyin nasıl kullanılacağı |
| 3 | `04-referans/design-reference.html` | Tarayıcıda aç — sistem ve ekranlar canlı |
| 4 | `05-mevcut-ekranlar/` | Sitenin şu anki hâli, light/dark, 3 kırılım noktası |

---

## Klasörler

### `01-kurallar/` — Tasarım kuralları

| Dosya | İçerik |
|---|---|
| `design-system.md` | **Sistemin kuralları.** v1.0.0, platformdan bağımsız. Hex yazmaz, semantik token adı kullanır |
| `design-decisions.md` | Karar kaydı (`KR-nnn`). Her kararın gerekçesi ve tarihi |
| `design-exceptions.md` | Kuralların **bilerek** delindiği yerler (`İ-n`). Liste kapalıdır |
| `brand.md` | Logo, ikon varyantları, mağaza varlıkları, üretim akışı |
| `icons.md` | UI ikon stil referansı (Thiings koleksiyonu) |

Numaralandırma: kararlar `KR-nnn`, kurallar `K-n`, istisnalar `İ-n`. Karıştırma.

> `design-exceptions.md` başında şu uyarı var: *"Bu liste kapalıdır. Yeni
> istisna eklemek bir tasarım kararıdır, kod incelemesi olmadan eklenmez.
> Bir kural burada yazılı değilse istisna değildir — ihlaldir ve düzeltilir."*

### `02-tokenlar/` — Değerler

| Dosya | İçerik |
|---|---|
| `palet.md` | **İnsan okuyabilir özet.** Renk tabloları (light + dark), tipografi, boşluk, yarıçap, hareket |
| `tokens.css` | **Kanonik kaynak.** Web token katmanı — ham ramp'ler + semantik eşleme + Tailwind teması |
| `tokens.ts` | Mobil uygulamanın ham token dosyası |
| `global.css` | Temel global stiller |

Çelişki olursa `tokens.css` geçerlidir; `palet.md` ondan türetilmiştir.

### `03-varliklar/` — Görsel varlıklar

| Klasör | İçerik |
|---|---|
| `logo/` | 28 dosya — SVG varyantları, `Ablacım.ai` kaynak dosyası, android adaptive ikon seti, iOS ikonu, splash, jpg/png varyantları, `logo.zip` |
| `ikonlar/` | UI ikonları (`sun`, `moon`, `instagram`, `tiktok`, `apple`) + imza öğesi `avuc-cizgisi.svg` |
| `illustrasyonlar/` | 5 modül illüstrasyonu (hero, el analizi, rüya, ebced, fizyonomi) + `fizyonomi-deneme.png` (deneme) |
| `uygulama-ekranlari/` | Mobil uygulama ekran görüntüleri (3 jpg) |
| `magaza/` | `favicon.svg`, `apple-touch-icon.png`, OG görselleri (tr/en), Google Play rozetleri (tr/en) |

### `04-referans/`

| Dosya | İçerik |
|---|---|
| `design-reference.html` | **Tarayıcıda aç.** Tasarım sistemi ve ekranlar tek sayfada, canlı |
| `logo-favicon.md` | Logoların ve favicon'un açık/koyu temada nasıl takas edildiği — dosya adları, CSS kuralı, gerekçeler |

### `05-mevcut-ekranlar/` — Sitenin şu anki hâli

29 ekran görüntüsü. Doğrulama amaçlı çekilmiş; tasarım referansı olarak da
kullanılabilir.

İsimlendirme: `{dil}-{tema}-{genişlik}.png` → `tr-dark-1440.png`,
`en-light-390.png`. Kırılım noktaları **390 / 768 / 1440**. Ayrıca bölüm bazlı
detay çekimleri var (`nasil-*`, `cta-*`, `kartlar-*`, `bakir-dark`).

### `06-brief-ve-icerik/` — Bağlam

| Dosya | İçerik |
|---|---|
| `landing-page-brief.md` | Landing page'in orijinal brief'i — proje ne, ton nasıl |
| `BRIEF-EK.md` | Brief'in eki, açık soruların kararları. **Çelişkide bu geçerlidir** |
| `icerik-envanteri.md` | Hangi bölümde ne içerik var, TR/EN durumu |
| `kopya-dokumu.md` | Metin dökümü (TR + EN), ses ve ton notlarıyla |

---

## Bilmen gereken 5 şey

**1. Dark tema light'ın tersi değil.**
Elle seçilmiş mor-siyah tonlar. `invert`/`filter` yok. Her token'ın iki teması
ayrı ayrı tanımlı.

**2. Hex yazılmaz, semantik token kullanılır.**
`--mor-400` gibi ham ramp adları bileşende geçmez. `bg`, `surface`,
`textPrimary`, `accent`, `premium` kullanılır. Ham ramp'ler sadece semantik
katmanı türetir.

**3. Değer uydurulmaz.**
Boşluk 4'ün katları, ara değer üretilmez. Tailwind'in varsayılan ölçekleri
kapatılmış (`--spacing-*: initial`) — ölçek dışı utility derlemede engellenir.

**4. Dark temada gölge yoktur.**
Katman farkı yüzey rengiyle verilir. Light'ta gölge var ama minimum, ve rengi
siyah değil mor mürekkep (`#2f1936`).

**5. Yön: "mistik içerik / temiz kabuk".**
Arayüz sakin ve okunaklı. Mistik olan tek şey içerik, illüstrasyon ve tek bir
vurgu rengi. Navigasyon, ayarlar, form ve yasal ekranlarda mistik hiçbir öğe
kullanılmaz.

---

## Eksikler / dikkat

- **`brand.md` içindeki geometri ve oranlar doğrulanmamış.** Dosyanın kendi
  uyarısı: *"Bu dosyadaki geometri ve oranlar mevcut varlıklardan okunarak
  yazılmadı — kaynak tasarım dosyası repoda yok. 'Doğrulanacak' işaretli
  satırlar tahmin değil, eksik bilgi; doldurulması gerekiyor."* Logo
  ölçülerini `Ablacım.ai` dosyasından teyit et.

- **Figma / kaynak tasarım dosyası yok.** Elde `Ablacım.ai` (Illustrator) ve
  export'lar var. Sistemin tek yazılı kaynağı bu klasördeki dokümanlar.

- **`logo/` klasörü şişkin.** 28 dosyanın çoğu mobil uygulama için. Landing
  page bunlardan sadece 4 SVG kullanıyor: `yatay-beyaz-ustu`,
  `yatay-siyah-ustu`, `icon-beyaz-ustu`, `icon-siyah-ustu`. Detay →
  `04-referans/logo-favicon.md`.

- **İllüstrasyonlar ağır.** 5 PNG toplam ~11 MB, tek tek 1.7–2.7 MB. Web için
  optimize edilmemiş; WebP/AVIF'e çevrilmeleri gerekiyor.

- **Tailwind spacing/container ad çakışması.** `max-w-{xs,sm,md,lg,xl}`
  kullanılamaz — spacing token'ına çözülür. Ayrıntı `palet.md` §5.
