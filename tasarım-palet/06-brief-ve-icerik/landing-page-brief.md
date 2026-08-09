# Ablacım — Landing Page Brief

**Kime:** Landing page'i sıfırdan tasarlayacak/geliştirecek kişiye
**Proje:** Yeni, bağımsız web projesi
**Hazırlanma:** 6 Ağustos 2026

---

## Bu proje nedir

Ablacım'ın mobil uygulaması var. Sen **yeni, sıfırdan bir landing page**
üreteceksin. Mobil uygulamanın koduna, deposuna veya varlıklarına erişimin
yok ve olmayacak.

**Elinde olacak iki şey:**

1. **Bu doküman.** Renk, tipografi, ölçek, kural — hepsi burada yazılı.
   Değer için başka bir yere bakman gerekmiyor.
2. **Sana verilecek kaynak klasör.** Tasarım sistemi dosyaları ve görsel
   varlıklar orada olacak (bkz. §10, §11).

Bu bir "mobil uygulamayı web'e çevir" işi **değil**. Yeni bir yaratıcı iş.
Tasarım sistemi sana kısıt olarak veriliyor — palet, tipografi ve kurallar
sabit. Bunların içinde kalarak yeni bir şey kuracaksın.

**Kapsam:** Tek sayfalık tanıtım sitesi. Backend yok, veritabanı yok,
kullanıcı hesabı yok, form yok. Tanıtım + mağaza yönlendirmesi + sosyal
bağlantılar.

---

## Çalışma kuralları — hepsinden önce bu

Bu maddelerin istisnası yoktur.

**1. Sormadan hiçbir şey yapma.**
Bu dokümanda veya sohbette karşılığı olmayan bir şeyle karşılaştığında
kendi kararını verme, varsayımda bulunma, "muhtemelen böyledir" deyip
ilerleme. **Sor.** Eksik bilgi bir engel değil, normal akışın parçası.

**2. Yenilik eklemeden önce sor.**
Brief'te yazmayan bir bölüm, bileşen, animasyon, ikon, illüstrasyon,
renk, font, kütüphane veya etkileşim eklemek istiyorsan **önce sor.**
Fikrin iyi olabilir — ama onay almadan girmesin.

**3. Değer uydurma.**
Ölçekte olmayan bir boşluk, ölçekte olmayan bir font boyutu, palette
olmayan bir renk — hiçbiri uydurulmaz. Ölçekte yoksa en yakınını kullan
veya sor.

**4. Ürün içeriğini uydurma.**
Özelliklerin ne yaptığına dair bu dokümanda yazmayan bir şey ekleme.
Özellikle fizyonomi ve ebced için: bunlar henüz yapılmadı, ne
yapacaklarına dair vaat yazma.

**5. Çelişki olursa kaynak klasör geçerlidir.**
Bu brief'teki değerler klasördeki dosyalardan okundu ve doğru. Yine de
bir uyuşmazlık görürsen klasördeki dosya esastır — ve bana haber ver.

---

## 0. Önce bunu oku — iki kritik uyarı

### 0.1 App Store dil kapısı (en önemli madde)

Uygulama App Store'dan **4.3(b) "doygun kategori"** gerekçesiyle bir kez
reddedildi. Sonrasında iOS tarafındaki tüm metinler "fal" dilinden
**"kendini keşfetme" (self-discovery)** diline çevrildi.

Apple, inceleme sırasında uygulamanın pazarlama sitesine bakabilir.
Sitede "kaderini öğren", "geleceğini gör", "el falı" gibi ifadeler varsa
bir sonraki incelemede aynı gerekçe yeniden gündeme gelebilir.

**Landing page metni keşif dilini kullanmalı.**

| Kullanma | Bunun yerine |
|---|---|
| El falı, falına bak | El analizi, avucundaki izler |
| Geleceğini öğren / gör | Kendini daha yakından tanı |
| Kaderin, kader haritan | Yolun, eğilimlerin |
| Rüya tabiri | Rüya yansıması, rüya günlüğü |
| Ebced ile geleceğin | İsim ve harflerle yorum |
| Kesin, olacak, çıkacak | Olabilir, işaret ediyor, düşündürüyor |

Sitede şu ibare **görünür bir yerde** bulunmalı:

> "Eğlence ve kişisel içgörü amaçlıdır; tıbbi, hukuki veya finansal
> tavsiye yerine geçmez."

Bu bir tercih değil, mağaza gereği.

### 0.2 Mevcut site yapısı bozulmamalı

`www.ablacim.com` canlı ve **mobil uygulama bu adreslere kod içinden
gidiyor.** Landing page bunları ezmemeli:

| Yol | Kim kullanıyor |
|---|---|
| `/privacy-policy` | Uygulama içi gizlilik bağlantıları |
| `/distance-sales-agreement` | Satın alma ekranı — yasal zorunluluk |
| `/auth/reset-password` | Şifre sıfırlama derin bağlantısı |
| `/palm` | Uygulama içi bağlantı |

Landing page kök dizine (`/`) gelir; bu dört yol çalışmaya devam eder.
Deploy planı bunu garanti etmeli — **nasıl yapılacağını bana sor.**

---

## 1. Ürün nedir

**Ablacım**, Türk kültüründeki "abla" figürü üzerine kurulmuş bir kişisel
içgörü uygulaması. Kullanıcı avucunun fotoğrafını yükler veya rüyasını
yazar; "Abla" sıcak, kişisel bir yansıma hazırlar. Kullanıcı bu yansıma
üzerine Abla ile sohbet edebilir.

- **Şirket:** Mehmethan Yasa Ltd (UK Limited, Companies House #17103773)
- **Platformlar:** iOS ve Android
- **Kategori:** Entertainment (birincil) / Lifestyle (ikincil)
- **Diller:** Türkçe ve İngilizce — **site de iki dilli olmalı**

### Marka sesi: "Abla"

Ürünün karakteri bir kişi. Bu, sitenin metin tonunu belirler.

- **Sıcak ve yakın, ama abartısız.** Hitap: "kuzum", "canım", "aslanım".
  İngilizcede karşılığı "love" — birebir çeviri değil, ton karşılığı.
- **Kesin konuşmaz.** "Şöyle olacak" değil, "bu şuna işaret ediyor".
- **Sakin.** Ünlem yok, büyük harfle bağırma yok, aciliyet yok,
  geri sayım yok.
- **Yargılamaz.** Kullanıcıyı uyarırken bile şefkatli.

Uygulamadan birebir örnekler — tonu buradan yakala:

> "Ablacın elini yorumlarken sana nasıl hitap etsin."
>
> "Elini açık tut, kuzum. Çizgilerin net görünsün; Abla gerisini sakin
> sakin yorumlar."
>
> "Bu yolculuk 18 yaş ve üzeri için, kuzum."
>
> "Rüyanı yaz, sembollerini Abla ile birlikte yansıt."
>
> "Bu okumanın kapısı kapanmadı, kuzum."

---

## 2. Tasarım yönü

Tek cümlelik yön: **"Mistik içerik / temiz kabuk."**

Arayüz iskeleti sakin, okunaklı ve güven veren bir wellness ürünü gibi
davranır. Mistik olan şey; içerik metni, illüstrasyon, tek vurgu rengi ve
açılış hareketi.

> Ticari gerekçe: kullanıcı fotoğrafını yükleyip ödeme ekranına kadar
> gidiyor. Koyu-altın-yıldızlı bir arayüz o akışta güven kaybettirir.

**Site "fal sitesi" gibi değil, sakin bir wellness ürünü sitesi gibi
görünmeli.** Yıldız alanı, kristal küre, mor duman, parlayan neon,
dönen kart, tarot estetiği — hiçbiri yok.

### Mistiklik bütçesi

| Bölüm | İzin verilen |
|---|---|
| Hero, özellik bölümleri, kapanış CTA | 1 illüstrasyon + accent |
| Fiyat, SSS, altbilgi, yasal | Mistik öğe yok. Tamamen nötr. |

### İmza öğesi: avuç çizgisi

Markanın tek dekoratif öğesi: **tek, ince, elle çizilmiş kavisli bir
çizgi.** Mobilde üç yerde iş yapıyor — ilerleme göstergesi, bölüm ayracı,
sonuç açılışı.

Web'de bölüm ayracı olarak kullanılabilir. **Çoğaltıp süse dönüştürme.**
Şablon görünmemeyi sağlayan şey tek bir öğenin tutarlı kullanımı.

> Bu çizginin vektörü sana verilecek. Yeniden çizmen gerekirse **sor** —
> marka imzası, serbest yorumlanmaz.

---

## 3. Renk

Değerlerin tamamı burada. Site **hem açık hem koyu temayı** desteklemeli.

### 3.1 Ham ramp'ler

**Kül — nötr.** Sıcak ama krem değil; çok hafif mor alt tonu var, bu
sayede accent ile aynı aileden durur.

| | Hex |
|---|---|
| `kul-0` | `#FFFFFF` |
| `kul-50` | `#F7F4F6` |
| `kul-100` | `#EFEAEE` |
| `kul-200` | `#E2DAE1` |
| `kul-300` | `#CDC2CC` |
| `kul-400` | `#A599A4` |
| `kul-500` | `#7D717C` |
| `kul-600` | `#5C525B` |
| `kul-700` | `#423A41` |
| `kul-800` | `#2A242A` |
| `kul-900` | `#1B1419` |

**Mor — vurgu.** Derin patlıcan moru. Kategorinin sinyali ama neon değil.

| | Hex |
|---|---|
| `mor-50` | `#F4ECF5` |
| `mor-100` | `#E6D7E9` |
| `mor-200` | `#CDB0D3` |
| `mor-300` | `#AE85B8` |
| `mor-400` | `#8E5E9B` |
| `mor-500` | `#74437F` |
| `mor-600` | `#5C3466` |
| `mor-700` | `#45264D` |
| `mor-800` | `#2F1936` |
| `mor-900` | `#1C0E21` |

**Bakır — premium / marka imzası.**

| | Hex |
|---|---|
| `bakir-100` | `#F6EBD8` |
| `bakir-300` | `#E0BE74` |
| `bakir-400` | `#CFA34C` |
| `bakir-500` | `#A87C2C` |
| `bakir-600` | `#7F5C1E` |

### 3.2 Semantik eşleme — bileşende bunu kullan

Ham ramp adı bileşende geçmez. CSS custom property olarak semantik
adlarla tanımla (`--color-accent`, `--color-surface`).

| Amaç | Light | Dark |
|---|---|---|
| `bg` — sayfa zemini | `#F7F4F6` | `#150F19` |
| `surface` — kart, panel | `#FFFFFF` | `#1E1723` |
| `surfaceAlt` — ikincil blok, boş durum | `#EFEAEE` | `#281F2E` |
| `surfacePressed` — basılı hâl | `#E2DAE1` | `#332839` |
| `surfaceTranslucent` — yapışkan başlık | `rgba(255,255,255,.92)` | `rgba(30,23,35,.92)` |
| `border` | `#E2DAE1` | `#362B3C` |
| `borderStrong` | `#CDC2CC` | `#483B4E` |
| `textPrimary` | `#1B1419` | `#F3EEF4` |
| `textSecondary` | `#5C525B` | `#B7ACB8` |
| `textMuted` | `#7D717C` | `#8A7F8B` |
| `textInverse` | `#FFFFFF` | `#1B1419` |
| `accent` | `#5C3466` | `#AE85B8` |
| `accentPressed` | `#45264D` | `#CDB0D3` |
| `accentSubtle` | `#F4ECF5` | `rgba(174,133,184,.14)` |
| `accentBorder` | `#E6D7E9` | `rgba(174,133,184,.28)` |
| `onAccent` — accent üstü metin | `#FFFFFF` | `#1C0E21` |
| `premium` | `#A87C2C` | `#E0BE74` |
| `premiumSubtle` | `#F6EBD8` | `rgba(224,190,116,.14)` |
| `success` | `#2F7D5C` | `#5FB08A` |
| `successBg` | `#E6F1EC` | `rgba(95,176,138,.14)` |
| `warning` | `#A87C2C` | `#E0BE74` |
| `warningBg` | `#F6EBD8` | `rgba(224,190,116,.14)` |
| `danger` | `#B3423A` | `#E08279` |
| `dangerBg` | `#F7E7E5` | `rgba(224,130,121,.14)` |
| `scrim` — örtü | `rgba(27,20,25,.55)` | `rgba(8,5,10,.65)` |
| `skeleton` | `#EFEAEE` | `#281F2E` |

**Dikkat:** dark tema light'ın ters çevrilmiş hâli değil. Zemin ve
yüzeyler ayrı elle seçilmiş mor-siyah tonlar. Otomatik `invert` veya
`filter` kullanma.

### 3.3 Renk kuralları

**Tek accent kuralı.** Bir görüntü alanında iki `accent` dolgulu buton
yan yana gelmez. İkincil aksiyon `surface` zemin + `border` çerçeve olur.
Tint dolgu (`accentSubtle`) bu kuralı ihlal etmez; kural solid accent
dolgu içindir.

> İki eşit vurgu hiyerarşiyi yok eder.

**Bakır (`premium`) iki ayrı iş yapar — karıştırma:**

| Kullanım | İzin |
|---|---|
| **Doygun dolgu ve metin** | Yalnızca ödeme, plan, kilit, "Yakında" rozeti |
| **Çizgi işi** — 1px hairline, ayraç, ≤6px nokta, SVG konturu, süs glifi, `premiumSubtle` illüstrasyon dolgusu | Her yerde serbest — marka imzası |

Kısıt: `premium` doygun bir dolgu olarak bilgi taşıyan bir yüzeyi
kaplayamaz (kart zemini, buton, etiket).

> İnce bir çizgi "bu ücretli" demez, "bu Ablacım" der.

**Solid bakır dolgu yasak.** Bakır zemin gerekiyorsa `premiumSubtle`
zemin + `premium` metin.

**Gradyan yasak.** Hero'da, kartta, butonda, metinde — hiçbir yerde.
Katman farkı yüzey rengiyle verilir.

> Gradyan iki temada farklı davranır ve tutarlılığı bozar.

---

## 4. Tipografi

### 4.1 Aileler

| Rol | Font | Ağırlık |
|---|---|---|
| Display / başlık | **Newsreader** | 600 SemiBold |
| Arayüz / gövde | **Inter** | 400 Regular · 500 Medium · 600 SemiBold |

İkisi de Google Fonts'ta ücretsiz — doğrudan alabilirsin.

Newsreader marka sesini taşır. Inter Türkçe diakritikleri (ı / İ / ğ / ş)
doğru çizer ve ekran için tasarlanmıştır.

**Yalnızca bu dört ağırlığı kullan.** 300, 700, 800 kullanma. Variable
font kullanabilirsin ama ara ağırlık uydurma.

### 4.2 Ölçek

| Token | Font | Boyut / satır | Harf aralığı | Kullanım |
|---|---|---|---|---|
| `display` | Newsreader 600 | 34 / 40 | −0.3 | En büyük başlık |
| `h1` | Newsreader 600 | 28 / 34 | −0.2 | Sayfa başlığı |
| `h2` | Newsreader 600 | 22 / 28 | −0.1 | Bölüm başlığı |
| `h3` | **Inter 600** | 18 / 24 | −0.1 | Kart başlığı |
| `bodyLg` | Inter 400 | 17 / 26 | 0 | Uzun metin |
| `body` | Inter 400 | 15 / 23 | 0 | Gövde |
| `bodyStrong` | Inter 500 | 15 / 23 | 0 | Vurgulu gövde |
| `caption` | Inter 400 | 13 / 18 | 0 | Yardımcı metin |
| `label` | Inter 500 | 12 / 16 | +0.6, **BÜYÜK HARF** | Eyebrow / kategori |
| `button` | Inter 600 | 16 / 20 | 0 | Buton |

### 4.3 Tipografi kuralları

**Serif yalnız `display`, `h1`, `h2`.** `h3` ve altındaki her şey Inter.
Buton, sekme, form etiketi, hata mesajı, tablo **asla** serif olmaz.

> Serif marka sesini taşır; işlevsel metinde okunabilirliği düşürür.

**Bir görüntü alanında en fazla 2 serif satır.**

**Ölçek dışına çıkma.** Serbest `font-size` yazılmaz.

### 4.4 Masaüstü ölçeği — onay bekliyor

Yukarıdaki ölçek telefon için tasarlandı. 1440px genişlikte 34px'lik bir
hero başlığı küçük kalır. Önerim: **oranları ve token adlarını koru,
büyük ekranda akışkan büyüt.**

| Token | Mobil | Masaüstü (öneri) |
|---|---|---|
| `display` | 34 / 40 | `clamp(34px, 5vw, 64px)` — satır yüksekliği 1.15 |
| `h1` | 28 / 34 | `clamp(28px, 3.4vw, 44px)` — 1.2 |
| `h2` | 22 / 28 | `clamp(22px, 2.2vw, 30px)` — 1.28 |
| `h3` | 18 / 24 | sabit |
| `bodyLg` ve altı | — | sabit |

Gövde metni büyütülmez; 17px masaüstünde rahat okunur. Satır uzunluğu
**65–75 karakteri geçmesin** (`max-width: 68ch`).

> **Bu bir öneri, onaylanmadı.** Uygulamadan önce sor.

---

## 5. Boşluk, yarıçap, çizgi, gölge, hareket

### 5.1 Boşluk — 4'ün katları

| Token | px |
|---|---|
| `xxs` | 2 |
| `xs` | 4 |
| `sm` | 8 |
| `md` | 12 |
| `base` | 16 |
| `lg` | 20 |
| `xl` | 24 |
| `xxl` | 32 |
| `xxxl` | 40 |
| `huge` | 48 |
| `section` | 64 |

Ara değer uydurulmaz — `padding: 17px` gibi bir şey yazılmaz. Ölçekte
yoksa en yakın token kullanılır.

> Dikey ritim ancak sınırlı bir ölçekle tutarlı kalır.

**Kenar boşluğu:** mobilde `lg` (20). Masaüstünde içerik `max-width` ile
ortalanır; kenar boşluğu `xxl` (32) veya `section` (64).

**Bölüm arası dikey boşluk:** mobilde `section` (64), masaüstünde bunun
bir katı (96 veya 128).

### 5.2 Yarıçap

`xs 6` · `sm 10` · `md 14` · `lg 20` · `xl 28` · `pill 999`

Kart **`lg` (20)**. Büyük panel `xl` (28). Rozet, chip, avatar `pill`.

### 5.3 Çizgi

`hairline 1` · `thick 1.5`

`thick` yalnızca odak halkasında kullanılır.

### 5.4 Gölge

Gölge rengi **siyah değil, mor-mürekkep** (`#2F1936`).

> Siyah gölge sıcak zeminde kirli gri görünür.

| Token | CSS | Kullanım |
|---|---|---|
| `soft` | `0 4px 12px rgba(47,25,54,.06)` | Kart, satır |
| `lifted` | `0 10px 24px rgba(47,25,54,.10)` | Yükseltilmiş panel |

**Kural:** Ayrım önce `border` ile kurulur, sonra gölge. Light modda
gölge minimum. **Dark modda gölge yok** — katman farkı yüzey renginin
açılmasıyla verilir.

### 5.5 Hareket

| Süre | ms |
|---|---|
| `instant` | 120 |
| `fast` | 180 |
| `base` | 260 |
| `slow` | 420 |
| `reveal` | 700 |

| Eğri | cubic-bezier | Ne zaman |
|---|---|---|
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | Yer değiştirme |
| `decelerate` | `cubic-bezier(0, 0, 0, 1)` | Giriş |
| `accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | Çıkış |

Ardışık öğelerin takip gecikmesi: **90ms**.

**Kural:** Arayüz hızlı ve sessiz. Yavaş ve teatral olan tek an sonuç
açılışıdır (`reveal` + 90ms stagger).

Web karşılığı: bölümler scroll'a girerken kısa fade + yukarı kayma
(`base`, `decelerate`). Örnek okuma gösterimi varsa orada `reveal` +
stagger.

**Yasak:** parallax, scroll-jacking, dönen kart, sonsuz marquee, imleç
takip eden öğe, otomatik oynayan sesli video.

> Aynı işi yapan iki geçişin farklı hızda olması sistemi rastgele
> gösterir.

### 5.6 Dokunma hedefi

Minimum **48×48px**. Görsel öğe daha küçük olabilir, tıklama kutusu
olamaz. (WCAG 2.5.5 alt sınırı.)

Buton yüksekliği 52. Liste satırı min 56.

---

## 6. Zorunlu davranışlar

### 6.1 Reduce Motion

`prefers-reduced-motion: reduce` açıkken **dönme, kayma ve parlama
olmaz**; içerik statik gösterilir ve **bilgi kaybolmaz**.

Scroll ile açılan bölümler varsa, reduce-motion'da hepsi baştan görünür
olmalı. "Animasyon yoksa içerik de yok" durumu kabul edilemez.

> Vestibüler rahatsızlık; erişilebilirlik gereği, tercih değil.

### 6.2 İki dil

Kullanıcıya görünen **her** metin çeviri katmanından geçer. Sabit string
gömülmez. TR ve EN ayrı yazılır.

İngilizce birebir çeviri değil, **ton karşılığıdır** ("kuzum" → "love").

`alt` ve `aria-label` metinleri de dahil.

Tarih biçimleri elle yazılmaz — `Intl.DateTimeFormat` kullanılır. Elle
yazılmış ay listesi tutulmaz.

> **Dil seçimi nasıl çalışacak** (URL yolu mu, alt alan adı mı, tarayıcı
> dili mi) — karar verilmedi. **Sor.**

### 6.3 Yükleme

Görsel yüklenirken **spinner değil iskelet**. Skeleton'da shimmer yok,
düz `skeleton` rengi.

> Spinner düzeni bozar; iskelet gelecek içeriğin ritmini korur.

Sahte ilerleme gösterilmez: yüzde, sahte adım listesi, dönen mesaj havuzu.

### 6.4 Erişilebilirlik

- Kontrast WCAG AA: gövde 4.5:1, büyük metin 3:1. `textMuted` üzerinde
  küçük metin kullanırken kontrolü yap.
- Klavye ile tam gezinilebilir; görünür odak halkası (`accent`, 1.5px).
- Sayfada tek `h1`; başlık seviyesi atlanmaz.
- Anlamlı görsellerde `alt`, dekoratiflerde `alt=""`.
- `<html lang="tr">` / `lang="en"` doğru kurulur.

---

## 7. Özellikler

Sitede dört özellik yer alacak. İkisi **şu an var**, ikisi **yakında**.

| Özellik | Durum | Sitede |
|---|---|---|
| **El analizi** | Çalışıyor | **Şu an var** — belirgin |
| **Rüya** | Çalışıyor | **Şu an var** — belirgin |
| Abla ile sohbet | Çalışıyor | İkisinin ortak devamı |
| Fizyonomi | Yapılmadı | **Yakında** |
| Ebced | Yapılmadı | **Yakında** |

### 7.0 İki durumun görsel ayrımı — zorunlu

Sitenin en kritik tasarım işi bu. Kullanıcı karta bakar bakmaz "bunu
şimdi kullanabilirim" ile "bu henüz yok"u ayırt edebilmeli.

**Var olanlar — el analizi, rüya:**

- Tam opaklık, tam kontrast
- `surface` zemin + `border` çerçeve + `radii.lg` (20)
- Aktif aksiyon taşır (indirme CTA'sına götürür)
- Kartın içi dolu: görsel + somut çıktı bilgisi
- İstersen `accentSubtle` zemin + `accent` metinli "Kullanılabilir"
  rozeti — **ama tek accent kuralına dikkat**

**Yakında olanlar — fizyonomi, ebced:**

- `premiumSubtle` zemin + `premium` metinli **"Yakında"** rozeti
- Aksiyon **yok**: buton yok, tıklanabilir değil, hover'da tepki vermez
- Metin `textSecondary` — hiyerarşide geride durur
- **`opacity: 0.4`'e inme.** Kart okunur kalmalı, sadece geri çekilmeli.
  Soluk kart "bozuk" gibi durur.

**Dört kart aynı şablonu paylaşır.** İkisinin yakında olması şablonu
değiştirmez — sadece rozet, aksiyon ve metin rengi değişir. Farklı
şablon ürünü parçalı gösterir.

**Sıra:** önce var olanlar, sonra yakında olanlar. Yakında olanlar öne
alınmaz.

---

### 7.1 El analizi — ŞU AN VAR

**Ne yapıyor:** Kullanıcı avucunun fotoğrafını ve birkaç bilgisini
paylaşır; Abla avuç çizgilerine ve elin genel karakterine bakarak
kişiselleştirilmiş bir yansıma hazırlar. Sonrasında bu yansıma üzerine
Abla ile sohbet edilebilir.

**Kullanıcıdan toplananlar** (gerçek akış sırası):

| Adım | Sorulan | Seçenekler |
|---|---|---|
| 1 | İsim | Ad + soyad |
| 2 | Hitap / cinsiyet | Kadın · Erkek |
| 3 | Baskın el | Sol · Sağ · Her ikisi |
| 4 | Başparmak biçimi | **Muz parmak** (ucu geriye, yay gibi kıvrık) · **Cetvel parmak** (dümdüz) |
| 5 | Doğum tarihi | Gün / ay / yıl — **18 yaş sınırı** |
| 6 | Öncelik | Kendimi tanımak · İlişki ve aşk · Kariyer · Para · Genel |
| 6b | Serbest not | Opsiyonel |
| 7 | Avuç fotoğrafı | 1–5 fotoğraf |

Neden bu bilgiler: isim hitap için, cinsiyet yorumun dilini ve imgelerini
biçimlendirmek için, baskın el hangi elin okunacağı için, başparmak
karakter okuması için, doğum tarihi yaş kapısı için, öncelik raporun
ağırlık merkezi için.

**Fotoğraf rehberi** — kullanıcıya verilen dört talimat. "Nasıl çalışır"
bölümünde kullanılabilir:

1. Avuç içi yukarı, parmaklar hafif açık ve rahat.
2. İyi aydınlatılmış ortam; gölge düşmesin, doğal ışık ideal.
3. El yakından ve net kadrajda — çizgiler okunabilir olsun.
4. Çektikten sonra kontrol et: bulanık veya karanlıksa tekrar dene.

**Gizlilik notu** (birebir kullanılabilir):

> "Gizliliğine öncelik veriyoruz. Veriler güvenli sunucularımızda geçici
> olarak depolanır ve anonimliğini korumak için anonimleştirilir."

**Çıktı — raporun sabit altı bölümü:**

| # | TR | EN |
|---|---|---|
| 1 | Genel Bakış | Overview |
| 2 | Aşk ve Bağ | Love and Connection |
| 3 | Kariyer ve Yol | Work and Path |
| 4 | Para ve Bolluk | Money and Abundance |
| 5 | **Uyarı** | A Caution |
| 6 | Önümüzdeki 30 Gün | The Next 30 Days |

"Uyarı" bölümü farklı tonda gösterilir (`warning` rengi). Sitede örnek
rapor gösterilecekse **bu altı başlık görünmeli** — ürünün somut çıktısı
bu ve en ikna edici şey.

**Paylaşım:** Kullanıcı okumasını görsel kart olarak paylaşabiliyor.
Sosyal medya döngüsü burada.

---

### 7.2 Rüya — ŞU AN VAR

**Ne yapıyor:** Kullanıcı rüyasını serbest metin olarak yazar; Abla
rüyadaki sembolleri kullanıcıyla birlikte ele alır ve onun için ne ifade
edebileceğini yansıtır. Sonrasında **24 saatlik bir soru penceresi**
açılır.

**Akış:** Rüyayı yaz → yapay zekâ onayı → yansıma hazırlanır → 24 saat
sohbet → geçmişte saklanır.

**Yapay zekâ onayı.** Rüya metni gönderilmeden önce açık onay ekranı
gösteriliyor. Üç madde (birebir):

1. "Yazdığın rüya metni, yansımanı hazırlamak için üçüncü taraf yapay
   zekâ sağlayıcılarına iletilir."
2. "Metnin yalnızca kişisel yansımanı üretmek için işlenir; reklam veya
   pazarlama amacıyla satılmaz."
3. "Dilediğin zaman vazgeçebilir, hesabını ve verilerini silmeyi talep
   edebilirsin."

**Bu üç madde sitede de görünmeli.** Şeffaflık burada bir satış argümanı
— "verini satmıyoruz" güven kuruyor, KVKK/GDPR tarafında da doğru duruş.

**Çıktı:** Yansıma metni + **rüyadan çıkarılan semboller listesi.**
Semboller ürünün görsel olarak en gösterişli parçası; sitede sembol
etiketleri üzerinden anlatılabilir (ör. "su", "merdiven", "kapı").

**Geçmiş:** Tüm rüya yansımaları kaydediliyor ve geri dönülebiliyor.
"Rüya günlüğü" fikri olarak anlatılabilir.

---

### 7.3 Fizyonomi — YAKINDA

**Bu özellik henüz yapılmadı.** Sitede "Yakında" olarak yer alacak.

| | |
|---|---|
| Başlık | Fizyonomi |
| Rozet | **Yakında** — `premiumSubtle` zemin, `premium` metin |
| Açıklama | Yüz hatları ve oranlarıyla yorum |
| Aksiyon | **Yok** |

> **Bundan fazlasını yazma.** "Neye bakıyoruz" sorusunun doğrulanmış
> cevabı yok — özellik yapılmadı. Yukarıdaki tek satır, uygulamanın kendi
> "yakında" metninden türetildi ve söylenebilecek tek şey bu.
>
> Karta daha fazla metin gerektiğini düşünüyorsan **sor.** Kendin yazma;
> yapmadığımız bir şeye vaat vermek hem kullanıcıya hem mağazaya karşı
> sorun olur.

---

### 7.4 Ebced — YAKINDA

**Bu özellik henüz yapılmadı.** Sitede "Yakında" olarak yer alacak.

| | |
|---|---|
| Başlık | Ebced |
| Rozet | **Yakında** — `premiumSubtle` zemin, `premium` metin |
| Açıklama | İsim ve soyisimden harflerle hesaplanan yorum |
| Aksiyon | **Yok** |

**Dil sınırı — buna uy.** Hesaplamanın kendisi anlatılabilir; sonucun ne
söyleyeceği konusunda vaat verilmez.

| Yazma | Yaz |
|---|---|
| İsminden geleceğini hesapla | İsim ve soyisminden harflerle hesaplanan yorum |
| Ebced ile kaderini öğren | İsmindeki harflerin ne söylediğine bak |
| Kesin sonuç, çıkacak, olacak | Yorum, işaret, düşündürür |

> Gerekçe §0.1'de: gelecek vaat eden bir çerçeve App Store incelemesinde
> 4.3(b) tartışmasını yeniden açabilir. "Hesaplama var" demek sorun
> değil; "geleceğini söyler" demek sorunlu.

---

### 7.5 Abla ile sohbet — ŞU AN VAR

Ayrı bir menü öğesi değil; **el analizi ve rüyanın ortak devamı.**

**Ne yapıyor:** Analiz hazır olduktan sonra kullanıcı Abla ile o okuma
üzerine yazışır. Abla bağlamı biliyor; kullanıcı "peki kariyer kısmını
biraz daha açar mısın" diyebiliyor.

**Nasıl çalışıyor:**

- Mesaj hakkı **kotalı.** El analizinde üç plan: **Tanışma** (Intro) ·
  **Detaylı** (Detailed) · **Tam** (Full). Rüyada abonelik aylık kota
  veriyor.
- Kota bitince sohbet kapanmıyor; ek mesaj paketi alınabiliyor.
- Yanıtlar biçimli metin (başlık, liste, vurgu) olarak geliyor.
- Kullanıcı bir yanıtı **uzun basarak bildirebiliyor** (uygunsuz /
  yanıltıcı içerik). Mağaza gereği — UGC moderasyonu.
- Beklerken özel bir düşünme göstergesi var: dönen üç yaylı bir halka +
  metnin üzerinden soldan sağa geçen bir parlama. Ürünün en karakteristik
  mikro-etkileşimi.

**Sitede ne anlatmalı:** *"Rapor okuyup bırakmıyorsun — sorabiliyorsun."*
Ayırt edici özellik bu; rakiplerin çoğu tek yönlü rapor veriyor.

Küçük, **statik** bir sohbet demosu (önceden yazılmış balonlar) çok iş
görür. Gerçek bir sohbet simülasyonu kurma — sahte etkileşim güven
kaybettirir.

---

## 8. Ticaret modeli

**Sitede fiyat yazma.**

Fiyatlar App Store ve Play tarafından kullanıcının kendi para biriminde
belirleniyor. Sitede sabit bir "₺199" yazmak farklı ülkedeki kullanıcı
için yanlış olur ve mağaza kurallarıyla çelişir.

> Uygulamada bağlayıcı kural: gösterilen tutar tahsil edilenle aynı olmak
> zorunda. Sitede de aynı ilke geçerli.

**Yapılabilecek:** ürün ailelerini isim ve kapsam olarak anlat, fiyatı
"uygulamada, kendi para biriminde" diye bırak.

| Aile | Ne | Tip |
|---|---|---|
| Rüya aboneliği | Aylık mesaj kotası | Abonelik (otomatik yenilenen) |
| Rüya ekstra mesaj | Kota bitince ek mesaj | Tek seferlik |
| Avuç analizi | Tek analiz + sohbet hakkı | Tek seferlik |
| Avuç ekstra mesaj | Sohbet hakkı ekler | Tek seferlik |

Abonelik olduğu için sitede bulunmalı:

- Otomatik yenileme açıklaması
- Gizlilik Politikası bağlantısı → `/privacy-policy`
- Mesafeli Satış Sözleşmesi bağlantısı → `/distance-sales-agreement`
- İptal yolu açıklaması
- "Fiyatlar kendi para biriminde görünür" notu

---

## 9. Sayfa yapısı — öneri

Öneridir, kural değil. Ama sıralama ürünün mantığını takip ediyor.
**Değiştirmek istersen sor.**

| # | Bölüm | İçerik | Mistiklik |
|---|---|---|---|
| 1 | **Hero** | Logo, tek satır serif başlık (`display`), bir cümle alt metin (`bodyLg`), mağaza rozetleri | 1 illüstrasyon + accent |
| 2 | **Abla kim** | Ürünün karakteri — sıcak, kişisel, yargılamayan | 1 illüstrasyon |
| 3 | **Özellikler** | Dört kart: önce var olanlar, sonra yakında olanlar (§7.0) | Sadece accent |
| 4 | **Nasıl çalışır** | 3–4 adım: paylaş → Abla okur → yansımanı al → sor | Sadece accent |
| 5 | **Sohbet farkı** | Statik sohbet demosu | Sadece accent |
| 6 | **Gizlilik** | §7.2'deki üç madde; veri satılmıyor | Mistik öğe yok |
| 7 | **SSS** | Ücretsiz mi, veriler ne oluyor, iptal nasıl, 18+ neden | Mistik öğe yok |
| 8 | **İndir** | Mağaza rozetleri | Sadece accent |
| 9 | **Altbilgi** | Instagram, e-posta, yasal bağlantılar, şirket bilgisi, sorumluluk reddi | Mistik öğe yok |

**Tek accent hatırlatması:** her bölümde en fazla bir solid accent buton.
Hero'da mağaza rozetleri resmi Apple/Google rozet görselleriyse ikisi de
accent sayılmaz — sorun yok.

---

## 10. Varlıklar

Mobil depoya erişimin olmadığı için varlıklar sana **klasörle** verilecek.

### 10.1 Sana verilecekler

| Varlık | Not |
|---|---|
| Logo | **SVG isteniyor** — şu an yalnızca PNG mevcut, temin edilecek |
| Uygulama ikonu | PNG |
| Favicon | PNG |
| Avuç çizgisi (imza öğesi) | Vektör — §2'deki imza öğesi |
| Dört özellik illüstrasyonu | El, yüz, ebced (parşömen), rüya |
| Uygulama ekran görüntüleri | Mağaza için üretilenler |

### 10.2 Kendin alabileceklerin

| Varlık | Kaynak |
|---|---|
| Newsreader (600) | Google Fonts |
| Inter (400/500/600) | Google Fonts |
| Çizgi ikonlar | [Lucide](https://lucide.dev) — uygulamada da bu kullanılıyor |
| App Store / Google Play rozetleri | Apple ve Google'ın resmi marka sayfaları |

**İki ikon ailesi karıştırılmaz.** Çizgi ikon ile illüstrasyon aynı
satırda yan yana gelmez.

### 10.3 Çözülmesi gereken — bana sor

| # | Konu |
|---|---|
| V-1 | **Logo SVG'si.** Şu an sadece raster var; web için vektör şart. |
| V-2 | Logo güvenli alan ve minimum boyut kuralı yazılı değil. |
| V-3 | **İllüstrasyonların lisansı ticari kullanıma açık mı, atıf gerekiyor mu — doğrulanmadı.** Yayına girmeden netleşmeli. |
| V-4 | Dark mode için ayrı hero görseli gerekiyor mu? |
| V-5 | **Instagram adresi** — bende yok, verilecek. |
| V-6 | **İletişim e-postası** — bende yok, verilecek. |
| V-7 | **App Store ve Google Play bağlantıları** — verilecek. |

---

## 11. Sana verilecek kaynak klasör

Tasarım sistemi dosyaları ayrı bir klasörle verilecek. **Bu brief'teki
değerler o dosyalardan okundu ve doğru** — değer için başka yere bakmana
gerek yok. Klasör derinleşmek istediğinde var.

| Dosya adı | Ne var | Ne zaman aç |
|---|---|---|
| **`design-reference.html`** | **Görsel referans.** Palet, tipografi ölçeği ve bileşenler canlı duruyor. | **İlk bunu tarayıcıda aç.** En hızlı başlangıç. |
| `tokens.ts` | Tüm token'ların tek kaynağı | Bir değeri doğrulamak istediğinde |
| `design-system.md` | Kuralların tamamı ve her birinin gerekçesi | Bir şeyin neden öyle olduğunu merak ettiğinde |
| `design-decisions.md` | Numaralı karar kaydı — ne, neden, hangi alternatif elendi | Bir kuralı değiştirmeyi düşündüğünde (önce sor) |
| `design-exceptions.md` | Kuralların bilerek delindiği **kapalı** liste | İstisna gerektiğini düşündüğünde. Liste kapalıdır — **sor.** |
| `brand.md` | Marka varlıkları ve üretim akışı | Görsel varlık ararken |

`tokens.ts` bir TypeScript dosyası ama içi düz bir değer listesi;
okumak için TypeScript bilmen gerekmiyor.

> Klasörün adı ve konumu ayrıca verilecek. Dosya adları değişmeyecek.

---

## 12. Teknik

Yeni bir proje olduğu için stack büyük ölçüde sana kalmış. Ama şu
kısıtlar sabit:

- **Statik site.** Backend yok, veritabanı yok, form gönderimi yok.
- **İki dil** (TR/EN) — mimari buna baştan hazır olmalı, sonradan
  eklenmez.
- **Açık ve koyu tema** — ikisi de tam desteklenmeli.
- **Mevcut dört yol korunacak** (§0.2). Deploy planı bunu garanti etmeli.
- **Performans:** Lighthouse yeşil. Ağır kütüphane, gereksiz JS yok.
- **SEO:** başlık, açıklama, Open Graph, `hreflang` (iki dil için).

> **Stack seçimini bana danış.** Framework, hosting ve deploy yöntemi
> mevcut sitenin dört yolunu etkiliyor — birlikte karar verelim.

---

## 13. Kabul kriterleri

- [ ] Hiçbir yerde gradyan yok
- [ ] Bir görüntü alanında en fazla bir solid accent buton
- [ ] Serif yalnızca `display` / `h1` / `h2`'de; buton, form, etiket Inter
- [ ] Bir görüntü alanında en fazla 2 serif satır
- [ ] Renkler CSS custom property olarak semantik adlarla tanımlı
- [ ] Light ve dark tema ayrı ayrı kontrol edildi; dark'ta gölge yok
- [ ] Boşluklar 4'ün katı; ölçek dışı değer yok
- [ ] Tüm tıklama hedefleri ≥ 48px
- [ ] `prefers-reduced-motion` açıkken tüm içerik erişilebilir
- [ ] TR ve EN tam; hiçbir sabit string gömülü değil
- [ ] Fiyat yazılmamış
- [ ] "Eğlence ve kişisel içgörü amaçlıdır" ibaresi görünür
- [ ] Yasal bağlantılar çalışıyor, mevcut dört yol bozulmamış
- [ ] El analizi ve rüya **var olan** özellik olarak belirgin
- [ ] Fizyonomi ve ebced **"Yakında"** rozetli, aksiyonsuz
- [ ] Dört kart aynı şablonu paylaşıyor
- [ ] Metin keşif dilinde (§0.1 tablosu)
- [ ] Ebced metninde gelecek vaadi yok (§7.4)
- [ ] Brief'te olmayan hiçbir şey sorulmadan eklenmemiş
- [ ] Uydurulmuş değer yok
- [ ] Lighthouse: erişilebilirlik ve performans yeşil

---

## 14. Bana sorman gereken maddeler

Bunlar bilerek açık bırakıldı. Başlamadan önce netleştirelim.

| # | Konu | Bkz. |
|---|---|---|
| S-1 | Masaüstü tipografi ölçeği onaylanıyor mu? | §4.4 |
| S-2 | Dil seçimi nasıl çalışacak (URL yolu / alt alan adı / tarayıcı dili)? | §6.2 |
| S-3 | Stack, hosting ve deploy — mevcut dört yol nasıl korunacak? | §12, §0.2 |
| S-4 | Sayfa yapısı önerisi kabul mü, değişecek mi? | §9 |
| S-5 | El analizi sitede ne kadar öne çıkacak? | aşağıda |
| S-6 | Instagram, e-posta, mağaza bağlantıları | §10.3 |
| S-7 | Logo SVG'si, illüstrasyon lisansı | §10.3 |

**S-5 üzerine not:** El analizi ürünün en olgun özelliği, ama şu an
**yalnızca Android'de kullanılabiliyor** — iOS'ta ürün kararıyla
gizlenmiş durumda. Sitede öne çıkarılırsa iPhone'dan indiren kullanıcı
vaat edileni bulamaz.

İki yol var: sitede platform notu düşmek ("Android'de kullanılabilir"),
ya da hero'da rüyayı öne çıkarıp el analizini alt sırada anlatmak.
Dönüşüm oranını doğrudan etkileyen bir karar — **birlikte verelim.**
