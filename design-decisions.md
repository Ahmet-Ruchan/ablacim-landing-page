# Tasarım karar kaydı

Numaralı, kalıcı kayıt. Bir karar verildiğinde buraya satır düşülür ve
**kod değişikliğiyle aynı commit'te** gider.

Numaralandırma: kararlar `KR-nnn`, kurallar `K-n`
([design-system.md](design-system.md)), istisnalar `İ-n`
([design-exceptions.md](design-exceptions.md)). Karıştırma.

Kurallar: [design-system.md](design-system.md) ·
İstisnalar: [design-exceptions.md](design-exceptions.md)

**"Doğrulanacak"** işareti: karar koddan okunuyor ama gerekçesi yazılı
kayıtta yok. Tahmin yürütülmedi — sorulup netleştirilecek.

---

## KR-001 — Renk yalnızca `useTheme()` üzerinden

**Karar.** Komponent dosyalarında hex, rgb veya renk adı yazılmaz. Renk
yalnızca `useTheme()` ile alınır. `tokens.ts` doğrudan import edilmez.

**Neden.** İki tema (light/dark) tek kaynaktan türesin; bir rengin
değişmesi tek dosyada olsun. Doğrudan import, tema anlık görüntüsünü
donduruyor ve tema değişiminde güncellenmiyordu.

**Elenen alternatif.** Renkleri komponent seviyesinde tutup dark mode'da
`useColorScheme()` ile dallanmak — her komponentte tekrarlanan koşul.

**Yeniden ele al.** Üçüncü bir tema (ör. yüksek kontrast) eklenirse.

**Kaynak.** `f6cf992`, `docs/design-system.md`

---

## KR-002 — Ağırlık `fontFamily` ile seçilir, `fontWeight` ile değil

**Karar.** `fontWeight` kullanılmaz. Kalınlık `Inter_400Regular` /
`Inter_500Medium` / `Inter_600SemiBold` aileleri arasında seçilir.

**Neden.** Android'de `fontWeight` sahte bold üretiyor ve Türkçe
diakritikleri (ğ, ş, ı, İ) bozuyor.

**Elenen alternatif.** Platform bazlı dallanma — her metin stilinde
tekrar eden koşul.

**Yeniden ele al.** Variable font'a geçilirse.

**Kaynak.** `docs/design-system.md`, `tokens.ts` `fontFamily`

---

## KR-003 — Serif yalnız `display`, `h1`, `h2`

**Karar.** Newsreader yalnızca bu üç ölçekte. `h3` ve altı Inter. Buton,
sekme, form etiketi, hata mesajı, tablo asla serif olmaz.

**Neden.** Serif marka sesini taşır; işlevsel metinde okunabilirliği
düşürüyor ve arayüzü ağırlaştırıyor.

**Yeniden ele al.** Marka kimliği yenilenirse.

**Kaynak.** `tokens.ts` `typeScale`

---

## KR-004 — Gradyan yasağı

**Karar.** Gradyan kullanılmaz. Katman farkı yüzey rengiyle verilir.

**Neden.** Gradyan iki temada farklı davranıyor, token'laştırılması zor
ve ekranlar arasında tutarsızlık üretiyor.

**Elenen alternatif.** Gradyanı token'laştırmak — durak sayısı, yön ve
tema varyantı kombinasyonu token setini şişiriyordu.

**Açık borç.** Avuç akışının 9 ekranı ve 3 okuma kartı hâlâ
`LinearGradient` kullanıyor; bunlar bu karardan önce yazıldı. Bkz.
[design-exceptions.md](design-exceptions.md) B-1, B-2.

**Kaynak.** `f6cf992`, Komut 1 (bdecbc4)

---

## KR-005 — Dark mode'da gölge yok

**Karar.** `buildTheme` dark modda `shadow`'u boş nesneye çeviriyor.
Katman farkı yüzey rengiyle verilir.

**Neden.** Koyu zeminde gölge görünmüyor, sadece render maliyeti
oluşturuyor.

**Kaynak.** `theme/index.tsx` `buildTheme`

---

## KR-006 — Dokunma hedefi minimum 48

**Karar.** Basılabilir her öğe en az 48×48. `hit.minTarget`.

**Neden.** WCAG 2.5.5 ve Material'ın alt sınırı; küçük hedefler
Türkçe'de uzun etiketlerle birlikte ıskalanıyordu.

**Kaynak.** `tokens.ts` `hit`

---

## KR-007 — Ekranda tek accent

**Karar.** Bir ekranda tek bir accent vurgusu olur. İki accent butonu
yan yana gelmez.

**Neden.** İki eşit vurgu, hiyerarşiyi yok ediyor; kullanıcı hangisinin
birincil olduğunu okuyamıyor.

**İstisna.** Kart listesi ekranları — bkz. [İ-3](design-exceptions.md).

---

## KR-008 — `premium` rengi yalnız ödeme bağlamında

**Karar.** Bakır (`premium`, `premiumSubtle`) yalnızca ödeme, plan ve
kilit bağlamında. Dekorasyon olarak kullanılmaz.

**Neden.** Renk bir sinyal taşıyor; her yerde kullanılırsa sinyal
olmaktan çıkıyor.

---

## KR-009 — Boşluk 4'ün katları, ara değer uydurulmaz

**Karar.** `spacing` ölçeği dışında değer yazılmaz. Ölçekte yoksa en
yakın token kullanılır.

**Neden.** Dikey ritim ancak sınırlı bir ölçekle tutarlı kalıyor.

**Kaynak.** `tokens.ts` `spacing`

---

## KR-010 — Bekleme durumu: balonsuz tek satır gösterge

**Karar.** Sohbette bekleme "REFLECTION etiketi + yatay çizgi + metin"
balonuyla değil, kullanıcı mesajının altında balonsuz tek satır
göstergeyle anlatılır. Avuç ve rüya sohbeti aynı bileşeni kullanır.

**Neden.** Yatay çizgi ilerleme çubuğu gibi okunuyordu — sahte bir
ilerleme sinyali veriyordu.

**Elenen alternatif.** Dönen mesaj havuzu, sahte adım listesi, yüzde
göstergesi. Hepsi bilerek reddedildi: gerçek ilerleme verisi yok.

**Kaynak.** `bdecbc4`, `dfe3805`

---

## KR-011 — Gösterge ağ çağrısını beklemez

**Karar.** Gönder aksiyonunda sıra: (1) kullanıcı mesajı listeye, (2)
gösterge listeye, (3) input temizlenir, (4) **ancak sonra** ağ çağrısı.
Gösterge bir `isLoading` bayrağına değil, listedeki geçici mesaj
öğesine bağlıdır.

**Neden.** Bayrağa bağlıyken gösterge POST dönene kadar (1–2 sn)
görünmüyordu.

**Kaynak.** `d6d4f50`

---

## KR-012 — Sabit header yalnız sohbet ekranlarında

**Karar.** Kendi başlığını içerikte taşıyan ekranlarda sabit header
yoktur; başlık içeriğin ilk elemanıdır ve geri butonu
(`ScreenBackButton`) ile birlikte scroll'da kayar. Sabit header yalnızca
avuç ve rüya sohbetinde kalır.

**Neden.** Boş bir header şeridi ekranın üstünde ölü alan bırakıyordu.
Sohbette ise mesajlar akarken başlığın sabit kalması doğru.

**Kaynak.** `bc8fbb0`

---

## KR-013 — Header zemini `color.bg`, alt çizgi yok

**Karar.** `ScreenHeader` zemini düz `color.bg`; `borderBottomWidth: 0`,
`elevation: 0`, `shadowOpacity: 0`.

**Neden.** `surfaceTranslucent` zemin, blur olmadığı için arkasındaki
içerikle karışıp gövdeden farklı bir ton üretiyordu (light'ta beyaz,
dark'ta açık mor).

**Kaynak.** Bu commit

---

## KR-014 — Navigation teması token'dan türetilir

**Karar.** React Navigation'ın `DefaultTheme`/`DarkTheme`'i
kullanılmaz; `buildNavigationTheme(th)` token'lardan türetir.
`colors.card` bilerek `color.bg`.

**Neden.** Türetilmezse status bar ve safe-area bölgelerinde yabancı bir
şerit kalıyordu.

**Kaynak.** `da073b3`

---

## KR-015 — Modal geçişi elle sürülür

**Karar.** Alt sayfalarda `animationType` varsayılanına güvenilmez.
Backdrop ve sheet tek bir `progress` değerinden beslenir; süre
`motion.duration.base`, giriş `easing.decelerate`, çıkış
`easing.accelerate`.

**Neden.** `animationType="slide"` tüm modal içeriğini birlikte
kaydırıyor ve sunum başlarken bir kare opak zemin bırakıyordu.

**Kaynak.** Bu commit

---

## KR-016 — Fiyat yalnızca mağazadan

**Karar.** Satın alma ekranlarında gösterilen fiyat yalnızca
RevenueCat'in `localizedPrice`'ı olabilir. Backend'in
`originalPrice`/`discountedPrice` alanları fallback olarak bile
render edilmez. Fiyat yoksa iskelet gösterilir ve buton kapalıdır.

**Neden.** Backend fiyatı mağaza vergisini içermiyor; gösterilen tutar
tahsil edilenle uyuşmuyordu. Apple bunu review'da reddediyor.

**Yan sonuç.** Para birimi kullanıcının mağaza hesabından gelir,
uygulama dilinden değil.

**Kaynak.** "Planlar ve satın alımlar" komutu

---

## KR-017 — Reduce Motion her animasyonda karşılanır

**Karar.** `AccessibilityInfo.isReduceMotionEnabled` açıkken dönme,
kayma ve parlama yok; içerik statik gösterilir.

**Neden.** Vestibüler rahatsızlık; Apple ve Android erişilebilirlik
kılavuzlarının gereği.

**Kaynak.** `shared/hooks/use-reduced-motion.ts`, `thinking-indicator`,
`confirm-sheet`

---

## KR-018 — Tasarım denetimi otomatik

**Karar.** `scripts/design-lint.sh` yedi kuralı makine ile denetler:
hex literal, `rgba()` literal, `tokens` doğrudan import, `LinearGradient`,
`t()`'den geçmeyen metin, ölçek dışı `fontSize`, kapsam dışı `premium`.
`npm run design-lint` ile çalışır, CI'da koşar.

**Neden.** Yazılı kural, zorlanmadığı sürece unutuluyor. Android ve yeni
modüller aynı sistemi devralacaksa denetim kod tarafında olmalı.

**Elenen alternatif.** ESLint kuralı yazmak — hex ve gradyan için
çalışırdı ama "kullanıcıya görünen metin" ve "kapsam dışı token" AST
üzerinden güvenilir yakalanmıyor; sezgisel grep daha az yanlış pozitif
üretti.

**Şu an bloklamıyor.** 143 açık ihlal var (bkz.
[design-exceptions.md](design-exceptions.md) B-1…B-5); CI'da
`continue-on-error: true`. Borç kapandığında o satır silinip denetim
zorunlu hâle gelecek.

**Kaynak.** Bu commit

---

## KR-019 — Bakır hairline marka motifidir, ödeme sinyali değil

**Karar.** `premium` rengi iki ayrı iş yapar ve ikisi karıştırılmaz:
**dolgu ve metin** olarak yalnızca ödeme/plan/kilit bağlamında;
**1px hairline, ayraç ve ≤6px nokta** olarak markanın çizgi imzasıdır ve
bağlam kısıtı yoktur.

**Neden.** Kod tarandığında `premium`'un 14 "kapsam dışı" kullanımının
hepsinin hairline, ayraç veya nokta olduğu görüldü — hiçbiri dekoratif
dolgu değildi. Kural tek bir yeri (tab bar bakır çizgisi) istisna sayıp
motifin kendisini tarif etmemişti. Sinyali taşıyan şey rengin *kapladığı
alan*: ince bir çizgi "bu ücretli" demez, "bu Ablacım" der.

**Elenen alternatif.** 14 kullanımı `accent`/`border`'a çekmek — görsel
kimliği düzleştiriyordu.

**Yaptırım.** `design-lint` kapalı bir stil-adı listesi tutar
(`topGlow`, `chapterDot`, `starOne`, `divider`, `hr`, `guidanceDot`).
Yeni ad eklemek script'i değiştirmeyi, yani kod incelemesini gerektirir.

**Açık.** Motif tanımına girmeyen 4 kullanım kaldı — bkz.
[design-exceptions.md](design-exceptions.md) B-6.

**Kaynak.** B-1…B-5 karar turu

---

## KR-020 — Avuç akışının zemin gradyanları kaldırıldı

**Karar.** 9 avuç ekranı ve paylaşım kartındaki
`[bg, surface, surfaceAlt]` gradyan zemini düz `color.bg` oldu.

**Neden.** Onboarding imzası değil, tasarım sistemi v0.1 öncesinden kalan
borçtu. Gradyan yasağı (K-3) artık gerçekten yasak.

**Kaynak.** B-1 kararı

---

## KR-021 — Tipografi ölçeği yaptırıma bağlandı

**Karar.** 69 ham `fontSize` ölçek token'ına bağlandı. Ölçek dışı
değerler en yakın kademeye yuvarlandı (14→body, 10/11→label, 24→h2,
20→h3). İki muafiyet: paylaşım kartı (ekran değil, ViewShot ile üretilen
360×640 sabit görsel — kendi tipografisi var) ve emoji glifleri
(tipografi değil illüstrasyon).

**Neden.** Ölçek yazılıydı ama zorlanmıyordu; 75 yerde delinmişti.

**Kaynak.** B-4 kararı (A+C)

---

## KR-022 — Locale sızıntısı denetime bağlandı

**Karar.** Tek dilli metin koda gömülmez. `design-lint`'e iki kural
eklendi: `TR-LEAK` (Türkçe'ye özgü harf içeren string literali) ve
`TR-JSX` (ifade içerdiği için tek literal olmayan JSX metin gövdesi).

**Neden.** İlk denetim yalnızca `title`/`label`/`placeholder` gibi belirli
JSX prop'larına bakıyordu; `.ts` dosyalarındaki hata mesajlarını,
`Intl` yerine elle yazılmış ay listelerini ve
`<Text>Ayda {n} mesaj hakkı</Text>` gibi ifadeli metinleri kaçırıyordu.

**Muafiyetler (satır bazlı, kodda yazılı).** Geliştirici log'ları
(`console.*`, `safeWarn`), backend Türkçe yanıtını *eşleştiren* çağrılar
(`.includes('süre')`), `Localized` nesnesinin `tr` alanı, JSX yorumları
ve marka adı.

**Kaynak.** Locale sızıntısı turu

---

## KR-023 — Tarih locale'den gelir

**Karar.** Elle yazılmış ay listesi tutulmaz. `shared/utils/format-date.ts`
tek kaynak: `formatDateShort`, `formatDateLong`, `monthNamesFromLocale`.
Hepsi `Intl.DateTimeFormat` ile cihaz locale'inden üretir.

**Neden.** İki ayrı elle liste vardı (`birth-date.ts` 24 satır,
`dream-strings.monthsShort`); her yeni dil üçüncü bir liste demekti.
`Intl` ay adını, sırayı, ayracı ve sayı biçimini birlikte doğru veriyor.

**Kaynak.** Locale sızıntısı turu

---

## KR-024 — Bakır motif "çizgi işi" olarak tanımlandı

**Karar.** K-2'nin bakır motif tanımı genişletildi. Ayırt edici ölçüt
artık *biçim* (hairline / nokta / ayraç) değil, **doygunluk ve işlev**:
`premium` doygun bir dolgu olarak bilgi taşıyan bir yüzeyi kaplayamaz
(kart zemini, buton, rozet, etiket). Çizgi işi — SVG konturu, süs glifi
ve `premiumSubtle` illüstrasyon dolgusu — her yerde serbesttir.

Kapsama giren dört kullanım:

| Dosya | Ne | Hangi biçim |
|---|---|---|
| `analysis/reading-card.tsx` `ornament` | Serif süs glifi | Süs glifi |
| `chat/analysis-journey.tsx` | İlerleme halkasının kat edilmemiş rayı | SVG kontur |
| `palm-upload/palm-upload-screen.tsx` | Avuç çiziminin dolgusu | `premiumSubtle` illüstrasyon |
| `palm-upload/palm-upload-screen.tsx` | Avuç çiziminin konturu | SVG kontur |

**Neden.** Eski tanım biçimi ölçüyordu, sinyali değil. "1px hairline
serbest ama 3px stroke yasak" ayrımının arkasında bir gerekçe yok;
ikisi de aynı şeyi yapıyor — marka izini bırakıyor, fiyat sinyali
vermiyor. Asıl sinyali taşıyan şey rengin **doygun dolgu olarak
kapladığı alan**: bir buton bakır olduğunda "bu ücretli" der, bir
illüstrasyonun konturu bakır olduğunda "bu Ablacım" der.

**Elenen alternatif.** Dört kullanımı `accent` / `noteBorder`'a çekmek.
Elendi çünkü ilerleme halkasının rayı `accent` olsa kat edilen kısımla
(zaten `accent`) ayırt edilemezdi, avuç çizimi de uygulamanın tek marka
illüstrasyonu — onu `accent`'e çekmek ekrandaki tek accent kuralıyla
(K-4) çakışırdı.

**Denetim karşılığı.** `scripts/design-lint.sh` kural 7: `stroke={...premium}`
ve `fill={...premiumSubtle}` elenir; `backgroundColor` ve doygun
`fill={...premium}` hâlâ ihlaldir. Ayrımın çalıştığı sahte dosya ile
doğrulandı.

**Ne zaman gözden geçirilmeli.** Bakır kullanımı ekranda üçten fazla
noktaya çıkarsa; o noktada motif imza olmaktan çıkıp gürültü olur.

**Kaynak.** B-6 kararı (kullanıcı: "kapsam genişlesin")

---

## Doğrulanacak

Aşağıdakiler koddan okunuyor ama gerekçesi yazılı kayıtta yok.
Uydurmadım — netleştirilecek.

| # | Karar | Soru |
|---|---|---|
| D-1 | `kul` / `mor` / `bakir` ramp'lerinin tam değerleri | Bu ramp'ler bir marka paletinden mi türedi, yoksa deneyerek mi seçildi? Kaynağı nedir? |
| D-2 | `gunlukNot` ve `sohbetBalonu` ayrı token aileleri | Neden semantik `surface` ailesinden türetilmediler? |
| D-3 | `motion.easing` eğrilerinin seçimi | `standard [0.2,0,0,1]` ve `decelerate [0,0,0,1]` bir sistemden mi alındı (Material?) yoksa elle mi ayarlandı? |
| D-4 | `radii` ölçeği | Değerler nereden geldi? `pill` dışında hangi kural var? |
| D-5 | Avuç akışındaki gradyanlar | Bilinçli bir "onboarding imzası" mı, yoksa v0.1 öncesinden kalan borç mu? (Bkz. B-1) |
| D-6 | `opacity.pressed` değeri | Basılı hâl için tek bir opaklık mı, yoksa yüzeye göre değişmeli mi? |

---

## KR-025 — Site içerik kapsamı uygulamaya hizalandı (yedi modül)

**Karar.** Özellikler ızgarası dört karttan **yedi karta** çıktı ve iki
modül adı ürünle hizalandı:

| Kart | Durum | Not |
|---|---|---|
| El Analizi | Kullanılabilir | Yalnız kalıcı platform notu burada |
| Rüya | Kullanılabilir | Platform notu KALDIRILDI |
| Kişilik Haritası | Kullanılabilir | YENİ — 60 madde, beş boyut |
| İlişki Stilin | Kullanılabilir | YENİ — 32 madde, iki eksen |
| Dijital İkizin | Kullanılabilir | YENİ — üç parçayı birleştirir |
| Fizyonomi | Yakında | Ad korundu (bkz. aşağıda) |
| Ebced | Yakında | Uygulamada hub kartı yok (sahip kararı: kalsın) |

**Neden.** Site 24 Ağustos'ta dört modül anlatıyordu; uygulamada o gün
dokuz modül açıktı. Kişilik Haritası iOS'ta **birincil** kart — App Store
4.3(b) çözümünün "ilk açılışta görünen ana akış" iddiası ona dayanıyor.
Sitenin ondan hiç söz etmemesi, inceleme sırasında pazarlama sitesine
bakan Apple için tutarsızlık üretirdi.

Aktif modül adları uygulamadan **birebir** alındı (`hub-strings.ts`,
`personality-strings.ts`, `interpersonal-strings.ts`, `twin-strings.ts`).

**Tek istisna Fizyonomi.** İlk turda kart adı uygulamadaki "Yüz Analizi"ne
çekilmişti; sahip aynı gün geri aldı — sitede modülün adı **Fizyonomi**
kalıyor (EN: *Physiognomy*). Uygulamada o kart "Yüz Analizi" diyor ve
öyle kalıyor; iki yüzey bu tek adda bilerek ayrışıyor. Ad, illüstrasyon
dosya adıyla (`fizyonomi.png`) da örtüşüyor.

Ad ayrışması App Store 4.3(b) açısından sorun değil: iki ad da fal dili
taşımıyor, ikisi de "yakında" rozetli bir karta ait ve kart aksiyonsuz.

**Rüya kartındaki platform notu kaldırıldı.** Not yedi kartın beşinde
tekrarlanınca gürültü oluyordu ve rüya iki platforma da açık; "bugün
Android'de" bilgisi İndir bölümünde zaten duruyor. Kalıcı platform sınırı
yalnız el analizinde var (iOS'ta 4.3(b) yüzünden hiç çizilmiyor), not
orada kaldı.

**Elenen alternatif.** Aktif modülleri ızgarada, "yakında"ları ayrı bir
alt şeritte toplamak. Elendi: rozet (KULLANILABİLİR / YAKINDA) ayrımı
zaten yapıyor, ikinci bir yapı katmanı brief'te karşılığı olmayan bir
yenilik olurdu.

**Izgara.** `md:grid-cols-2 lg:grid-cols-4` — ≥1024px'te 4+3. "Dört kart
tek sıra" sahip talebiydi, ilk sıra olarak korundu. 768–1023px'te dört
sütun yedi kartla çok darlaşıyordu, o aralık ikiye indi. Telefonda tek
sütun değişmedi.

**Kaynak.** Kullanıcı: "ne var ne yoksa her şeyi bu landing page içerisine
koyacağız en güncel hale getireceğiz" (25 Ağu).

---

## KR-026 — Üç yeni bölüm: Dijital ikizin, Zamanla derinleşir, Premium

**Karar.** Sayfaya üç bölüm eklendi. Yeni sıra:

Hero → Abla kim → Özellikler → **Dijital ikizin** → **Zamanla derinleşir**
→ Nasıl çalışır → Sohbet farkı → Gizlilik → **Premium** → SSS → İndir →
Sosyal → İletişim

**Neden ızgaraya kart olarak eklenmediler.**

- **Dijital ikizin** diğer modülleri *birleştiren* katman. Kart ölçüsünde
  anlatılınca beşinci bir modül gibi okunuyor; asıl işi — üç parçayı tek
  portrede toplaması — kaybolur. Izgaradaki kart giriş olarak duruyor,
  anlatım hemen ardındaki bölümde.
- **Gözlemler ve Yolculuğun** modül değil, arka plan katmanı. Kart olarak
  konsalar tek seferlik bir akış gibi görünürlerdi; oysa ikisinin de tek
  iddiası zamanla birikmeleri.
- **Premium** bir özellik değil, ticari kapsam. Gizlilik ile SSS arasına
  kondu: kapsam → sık sorulanlar (iptal, fiyat) → İndir. Kapanış CTA'sının
  önüne geçmiyor.

**Accent bütçesi.** Üç bölümde de solid accent buton YOK. Kapanış CTA'sı
İndir'de tek başına duruyor; K-4 ("bir görüntü alanında en fazla bir solid
accent buton") korunuyor. Premium bölümü bakır (`premium`) çerçeve ve
`premiumSubtle` zemin kullanıyor — ödeme bağlamı, kuralın asıl kullanım
alanı.

**Fiyat.** Premium bölümünde tutar YOK (brief §6.2). Yalnız kapsam, dönem
adları (aylık/yıllık) ve mağaza gereği görünmesi gereken otomatik yenileme
cümlesi var.

**Hareket.** Yeni animasyon eklenmedi; üç bölüm de mevcut
`data-section` / `data-stagger` bütçesini kullanıyor.

**Kaynak.** Kullanıcı seçimi (25 Ağu): "6 kart + 2 yeni bölüm" ve
"Premium: evet, kendi bölümü".

---

## KR-027 — Üç yeni modülün illüstrasyonları

**Karar.** Kişilik Haritası, İlişki Stilin ve Dijital İkizin kartları
`assets/illustrations/` altındaki gerçek illüstrasyonları kullanıyor:

| Kart | Dosya |
|---|---|
| Kişilik Haritası | `kisilik-haritan.png` |
| İlişki Stilin | `iliski-stilin.png` |
| Dijital İkizin | `dijital-ikiz.png` |

`dijital-ikiz.png` iki yerde kullanılıyor: Özellikler kartında ve
"Dijital ikizin" bölümünün başında. Aynı görsel bilinçli olarak
tekrarlanıyor — kart girişi ile bölüm arasındaki bağı kuran işaret o.

**Ara çözümün tarihi.** İlk turda (25 Ağu) bu üç modül için illüstrasyon
kaynağı yoktu; yerine `ModuleEmblem.astro` yazılmıştı — inline SVG çizgi
işi amblemler (beş eksenli harita, iki eksenli düzlem, üç halkanın
buluşması). Sahip aynı gün gerçek illüstrasyonları teslim edince bileşen
**silindi**. Kayıt burada duruyor çünkü aynı boşluk tekrar açılırsa
(yeni modül, kaynağı gelmemiş görsel) izlenecek yol belli olsun:
görselsiz kart bırakmak yerine, modülün gerçek çıktısının şemasını çiz.

**Alt metinler.** Amblem döneminden kalan `imageAlt` değerleri şemayı
tarif ediyordu; illüstrasyonlar gelince TR ve EN'de yeniden yazıldı.
Ekran okuyucu görseli değil şemayı duyuyordu.

**Kaynak.** Sahip teslimi (25 Ağu): "yeni kullanman gereken görselleri
koydum, isimleri direkt dosya adından eşleştir".

---

## KR-028 — Site kendi alan adına taşındı: app.ablacim.com

**Karar.** Landing page **app.ablacim.com** adresinde yayınlanır. GitHub
Pages, özel alan adı, kökte (alt yol yok). `www.ablacim.com`'a **hiç
dokunulmaz**.

**Neden ana siteye girmedi.** Üç yol değerlendirildi:

| Yol | Neden elendi / seçildi |
|---|---|
| İçeriği Next.js'e port et | Teknik olarak en bütünlüklü, ama ana siteyi değiştirmeyi gerektiriyordu |
| Vercel rewrite ile `/`'e bağla | Kökte iki sistem; ana sitenin davranışı değişirdi |
| **Ayrı alan adı** | **Seçildi** — ana site tek satır bile değişmiyor |

Sahip kararı kesin ve gerekçesi tek cümle: *"mevcut olan landing-page
sayfasını asla bozma."* `www.ablacim.com` canlı bir dönüşüm hattı —
ölçülmüş bir hero, quiz akışı (`/gender`) ve uygulamanın kod içinden
gittiği dört yol orada. Yeni bir tanıtım sayfası için o hattı riske
atmanın karşılığı yok.

**Ana sitenin dokunulmazlığı artık yapısal.** Bu repo ayrı bir alan
adına, ayrı bir altyapıya (GitHub Pages) yayınlanıyor. `ablacim-frontend`
(Next.js/Vercel) ile aralarında ortak dosya, ortak deploy ve ortak DNS
kaydı yok. Brief §0.2'nin dört yolu — `/privacy-policy`,
`/distance-sales-agreement`, `/auth/reset-password`, `/palm` — bu repodan
etkilenemez. DEVIR-NOTU §7'de açık duran "üretim deploy planı" maddesi
böylece kapandı.

### canonical tuzağı — bu taşınmanın asıl riski

`src/site.config.ts`'te `siteUrl` sabit `https://www.ablacim.com`
yazıyordu ve canonical, hreflang, og:url üçü de ondan türüyordu. Alan adı
değişirken bu değer kalsaydı yeni sayfa **kendi canonical'ında ana siteyi
gösterecekti**. Ana sitenin kendi landing'i de indeksli olduğundan Google
iki sayfayı çakıştırırdı — yani tam kaçınmak için ayrı alan adına
çıktığımız şey, ayrı alan adında da başımıza gelirdi.

Değer `PUBLIC_SITE_URL`'e bağlandı; `astro.config.ts`'in `site` alanı da
aynı değişkeni okuyor, tek kaynak. Ayrım şöyle korunuyor:

| Alan | Nereyi gösterir |
|---|---|
| `siteConfig.siteUrl` | **Bu site** — app.ablacim.com |
| `siteConfig.webAppUrl` | Ana site — CTA hedefi |
| `siteConfig.legal.*` | Ana site — gizlilik, mesafeli satış |

Derlemede doğrulandı: canonical/hreflang/og:url app.ablacim.com; ana
siteye giden yalnız üç adres var, üçü de yukarıdaki ikinci ve üçüncü
satır.

### İndeksleme

Sayfa arama motorlarına **açık** (sahip kararı). `robots.txt` ve
`sitemap.xml` endpoint olarak eklendi — ikisi de `site` alanından türer,
alan adı değişince elle senkron tutma derdi yok. `@astrojs/sitemap`
kurulmadı: site üç sayfa ve bu makinede `pnpm install` corepack yüzünden
TTY onayı istiyor (DEVIR-NOTU §2); bağımlılık kazandırdığından çok
sürtünme getirirdi.

Bilinen risk: ablacim.com'un kendi landing'i de indeksli, iki sayfa aynı
kelimelerde yarışabilir. Sahibe söylendi, risk bilerek alındı. Geri almak
gerekirse `robots.txt.ts` içinde `Disallow: /` yeter.

**Kaynak.** Sahip kararı (25 Ağu): "paylasim.ablacim.com gibi düşün, yani
asıl ablacim.com'u bozmayacak şekilde." Ad `app.ablacim.com` seçildi —
sayfanın iki dili var, Türkçe bir ad (tanitim/kesfet) EN ziyaretçiye
anlamsız gelirdi.
