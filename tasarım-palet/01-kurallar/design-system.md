# Ablacım — Tasarım Sistemi

**v1.0.0** · Platformdan bağımsız. iOS üzerinde geliştirildi; kurallar
Android ve yeni modüller için de aynen geçerlidir.

Bu dosya **kuralları** taşır. Değerler `src/shared/theme/tokens.ts`
içindedir — burada hex yazılmaz, yalnızca semantik token adı geçer.

- Kararların gerekçesi ve geçmişi → [design-decisions.md](design-decisions.md)
- Bilerek delinen yerler → [design-exceptions.md](design-exceptions.md)
- Marka ve varlıklar → [brand.md](brand.md)
- Görsel referans → [design-reference.html](design-reference.html)
- Denetim → `npm run design-lint` — yedi kuralı makine zorlar:
  hex, `rgba()`, `tokens` import, gradyan, `t()` dışı metin, ölçek dışı
  `fontSize`, kapsam dışı `premium`

---

## Yön

**Mistik içerik / temiz kabuk.** Arayüz iskeleti sakin, okunaklı ve güven
veren bir wellness ürünü gibi davranır. Mistik olan; içerik metni,
illüstrasyon, tek vurgu rengi ve sonuç ekranının açılış hareketidir.

> Ticari karar: kullanıcı fotoğrafını yükleyip ödeme ekranına kadar
> gidiyor. Koyu-altın-yıldızlı bir arayüz o akışta güven kaybettirir.

### Mistiklik bütçesi

| Ekran türü | İzin verilen |
|---|---|
| Karşılama, sonuç, paylaşım | 1 illüstrasyon + accent |
| Analiz akışı, kamera, yükleme | Sadece accent |
| Ana sayfa, geçmiş, liste | Sadece accent |
| Ayarlar, hesap, ödeme, yasal | Mistik öğe yok. Tamamen nötr. |

### İmza öğesi: avuç çizgisi

Tek, ince, elle çizilmiş kavisli bir çizgi. Üç yerde iş yapar: ilerleme
göstergesi, bölüm ayracı, sonuç açılışı. Bu çizgi dışında dekorasyon yok.

> Şablon görünmemeyi sağlayan şey tek bir öğenin tutarlı kullanımı.

---

## K-1 — Renk yalnızca `useTheme()` ile alınır

Komponent dosyalarında hex, `rgb()`, `rgba()` veya renk adı yazılmaz.
`tokens.ts` doğrudan import edilmez; tek giriş noktası `useTheme()`.

> İki tema tek kaynaktan türesin ve bir rengin değişmesi tek dosyada olsun diye.

**Semantik aile:**

| Amaç | Token |
|---|---|
| Ekran zemini | `bg` |
| Kart, sheet, input zemini | `surface` |
| İkincil blok, boş durum | `surfaceAlt` |
| Basılı hâl | `surfacePressed` |
| Yarı saydam chrome (blur yok) | `surfaceTranslucent` |
| Çizgi | `border`, `borderStrong` |
| Metin | `textPrimary`, `textSecondary`, `textMuted`, `textInverse` |
| Vurgu | `accent`, `accentPressed`, `accentSubtle`, `accentBorder`, `onAccent` |
| Durum | `success`/`successBg`, `warning`/`warningBg`, `danger`/`dangerBg` |
| Örtü | `scrim` |
| İskelet | `skeleton` |

Nötr zemin krem değil, **çok hafif mor alt tonlu bir kül** — accent ile
aynı aileden gelir.

## K-2 — Kullanımı kısıtlı token'lar

Bu bağlamların dışında kullanılmaz:

| Token | Yalnızca |
|---|---|
| `premium`, `premiumSubtle` | **Doygun dolgu ve metin olarak:** ödeme, plan, kilit. **Çizgi işi olarak:** her yerde — bkz. aşağıdaki bakır motif |
| `noteSurface` | Abla'nın günlük notu kartı |
| `noteBorder` | Günlük not kartı çerçevesi **ve** tab bar üst kenarındaki bakır marka çizgisi |
| `userBubble`, `userBubbleBorder` | Kullanıcı sohbet balonu |
| `thinkingArc1/2/3` | Düşünme göstergesi halkası |

Solid bakır dolgu yasak — `premiumSubtle` zemin + `premium` metin.

> Renk bir sinyal taşır; her yerde kullanılırsa sinyal olmaktan çıkar.

**Bakır marka motifi.** `premium` rengi bir de markanın çizgi
imzasıdır. Şu biçimlerde bağlam kısıtı YOKTUR:

| Biçim | Örnek |
|---|---|
| 1px hairline | bölüm üstü parıltı, tab bar üst kenarı |
| Ayraç | okuma kartındaki 56×1px çizgi, sohbet metnindeki `hr` |
| ≤6px nokta | bölüm noktası, rehber noktası |
| SVG kontur (`stroke`) | ilerleme halkasının kat edilmemiş rayı, avuç çiziminin konturu |
| Süs glifi | okuma kartı başlığındaki serif süs |
| `premiumSubtle` illüstrasyon dolgusu | avuç çizimi — çizim, bilgi taşıyan yüzey değil |

Kısıt şudur: `premium` **doygun bir dolgu olarak bilgi taşıyan yüzeyi
kaplayamaz** — kart zemini, buton, rozet, etiket. Çizgi, kontur, süs
glifi ve soluk illüstrasyon tonu markanın imzasıdır, fiyat sinyali değil.

> Sinyali taşıyan şey rengin *doygun dolgu olarak kapladığı alan*. İnce bir
> çizgi "bu ücretli" demez, "bu Ablacım" der. İki kullanım farklı işler
> ve karıştırılmamalı.

## K-3 — Gradyan yasak

Katman farkı yüzey rengiyle verilir. Splash ve app icon zemini marka
varlığıdır, kod tarafını ilgilendirmez.

> Gradyan iki temada farklı davranır ve token'laştırılması ekranlar arası
> tutarlılığı bozar.

İstisnalar kapalı listede: [design-exceptions.md](design-exceptions.md).

## K-4 — Ekranda tek accent

İki `accent` renkli buton yan yana gelmez. Tint dolgu (`accentSubtle`)
bu kuralı ihlal etmez; kural solid accent dolgu içindir.

> İki eşit vurgu hiyerarşiyi yok eder.

## K-5 — Serif yalnız `display`, `h1`, `h2`

`h3` ve altındaki her şey Inter. Buton, sekme, form etiketi, hata mesajı,
tablo asla serif olmaz. Serif başlık ekran başına en fazla 2 satır.

> Serif marka sesini taşır; işlevsel metinde okunabilirliği düşürür.

## K-6 — Ağırlık `fontFamily` ile seçilir

`fontWeight` kullanılmaz. Kalınlık `sans` / `sansMedium` / `sansSemiBold`
aileleri arasında seçilir.

> Android'de `fontWeight` sahte bold üretir ve Türkçe diakritikleri bozar.

## K-7 — Tipografi ölçeği dışına çıkılmaz

`display` · `h1` · `h2` · `h3` · `bodyLg` · `body` · `bodyStrong` ·
`caption` · `label`. Serbest `fontSize` yazılmaz. Rapor metni `bodyLg`.

> Ölçek dışına çıkan her değer sonraki ekranda yeniden tartışılır.

## K-8 — Boşluk 4'ün katları

`spacing` ölçeği dışında değer yazılmaz; ölçekte yoksa en yakın token
kullanılır. Ekran kenar boşluğu her yerde `screenPadding`.

> Dikey ritim ancak sınırlı bir ölçekle tutarlı kalır.

## K-9 — Yarıçap ölçekten gelir

`radii.sm` · `md` · `lg` · `xl` · `pill`. Kart `lg`, alt sayfa üst
köşeleri `xl`, tam yuvarlak öğeler `pill`.

## K-10 — Ayrım önce border, sonra gölge

Light mode'da gölge minimum. **Dark mode'da gölge yok** — katman farkı
yüzey rengiyle verilir.

> Koyu zeminde gölge görünmez, yalnızca render maliyeti oluşturur.

## K-11 — Dokunma hedefi minimum 48

`hit.minTarget`. Görsel öğe daha küçük olabilir; dokunma kutusu olamaz.

> WCAG 2.5.5 alt sınırı.

## K-12 — Hareket ölçekten gelir

Süre `motion.duration.*`, eğri `motion.easing.*`. Giriş `decelerate`,
çıkış `accelerate`, yer değiştirme `standard`. Arayüz hızlı ve sessiz;
yavaş ve teatral olan tek an sonuç açılışı (`reveal` + `staggerMs`).

> Aynı işi yapan iki geçişin farklı hızda olması sistemi rastgele gösterir.

## K-13 — Geçişler elle sürülür

Modal ve alt sayfa geçişlerinde platform varsayılanına (`animationType`,
`presentationStyle`) güvenilmez. Backdrop ve içerik tek bir ilerleme
değerinden beslenir, aynı anda başlar.

> Varsayılan geçiş sunum başlarken opak bir kare bırakır.

## K-14 — Reduce Motion karşılanır

`isReduceMotionEnabled` açıkken dönme, kayma ve parlama olmaz; içerik
statik gösterilir, bilgi kaybolmaz.

> Vestibüler rahatsızlık; her iki platformun erişilebilirlik gereği.

## K-15 — Kullanıcıya görünen her metin `t()`'den geçer

Sabit string yazılmaz. Anahtarlar özellik bazlı `*-strings.ts`
dosyalarında, TR ve EN ayrı yazılır.

> Tek dil varsayımı, ikinci dil eklendiğinde her ekranı yeniden açmayı
> gerektirir.

## K-16 — Bekleme sahte ilerleme göstermez

Yüzde, sahte adım listesi veya dönen mesaj havuzu kullanılmaz. Süre
yapay olarak uzatılmaz.

> Gerçek ilerleme verisi yokken gösterilen ilerleme yalandır.

## K-17 — Yükleme iskeletle anlatılır

Liste ve kart yüzeylerinde spinner değil iskelet. Skeleton'da shimmer
yok, düz `skeleton` rengi.

> Spinner düzeni bozar; iskelet gelecek içeriğin ritmini korur.

## K-18 — Bölümler bağımsız çöker

Bir veri kaynağı düşerse yalnızca o bölüm hata gösterip yeniden dene
sunar; ekranın tamamı boşalmaz.

## K-19 — Sabit header yalnız sohbet ekranlarında

Diğer ekranlarda başlık içeriğin ilk elemanıdır ve geri butonu
(`ScreenBackButton`) ile birlikte scroll'da kayar. Header zemini `bg`,
altında çizgi/gölge yok.

> Boş bir header şeridi ekranın üstünde ölü alan bırakır.

## K-20 — Fiyat yalnızca mağazadan gelir

Satın alma yüzeylerinde gösterilen tutar yalnızca mağazanın lokalize
fiyatı olabilir. Backend fiyatı fallback olarak bile render edilmez;
fiyat yoksa iskelet gösterilir ve buton kapalıdır.

> Gösterilen tutar tahsil edilenle aynı olmak zorunda.

---

## Yerleşik desenler

- **Info bloğu:** `surfaceAlt` zemin + `border` + `textSecondary` metin.
  Accent tonu kullanılmaz — tıklanabilir sanılır.
- **Sohbet balonları:** kullanıcı `userBubble` + `userBubbleBorder`,
  asistan `surface` + `border`, metin ikisinde `textPrimary`.
- **Tab bar zemini:** `surfaceTranslucent`.
- **Input odak:** border `accent`, kalınlık `borderWidth.thick`.
- **Zorunlu tema:** kamera/çekim ekranı her modda dark
  (`forcedMode="dark"`); paylaşım kartı her zaman light.

## Mağaza notları

- "Eğlence ve kişisel içgörü amaçlıdır" onboarding'de görünür olmalı.
- Kamera/galeri izninden **önce** açıklama ekranı.
- Abonelik varsa: restore purchases, plan koşulları, iptal yolu,
  KVKK/mesafeli satış metinleri app içinde ekran olarak bulunmalı.
- İlk analizi kayıt istemeden aldır.

---

## Yeni token gerekiyorsa

Uydurma — **sor.** Yeni token bir tasarım kararıdır;
[design-decisions.md](design-decisions.md)'ye kayıt düşer ve kod
değişikliğiyle **aynı commit'te** gider.

---

## Platform içerik kapısı — tasarım kuralı DEĞİLDİR

Bu bölüm ürün/uyumluluk kararıdır, tasarım sistemine ait değildir.
Karıştırma.

- **iOS'ta avuç (el) analizi ürünleri gösterilmez.** Avuç analizi
  planları ve avuç ekstra mesaj paketleri render edilmez; ilgili uçlara
  **istek de atılmaz**.
- **Android'de dört ürün ailesinin hepsi görünür.**
- Desen: `Platform.OS !== 'ios'` sonucu sorgunun `enabled` bayrağına
  bağlanır.

Bunun dışında iOS ve Android arasında tasarım farkı yoktur. Aynı
token'lar, aynı ölçekler, aynı kurallar.
