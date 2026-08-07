# Ablacım — Marka ve varlıklar

Logo, ikon varyantları, mağaza varlıkları ve üretim akışı.
Arayüz kuralları için → [design-system.md](design-system.md)

**Uyarı:** Bu dosyadaki geometri ve oranlar mevcut varlıklardan
**okunarak** yazılmadı — kaynak tasarım dosyası repoda yok. "Doğrulanacak"
işaretli satırlar tahmin değil, **eksik bilgi**; doldurulması gerekiyor.

---

## 1. Logo

| Varlık | Dosya | Not |
|---|---|---|
| Ana logo | `assets/images/brand-logo.png` | Raster |
| Eski logo | `assets/images/logo-legacy.svg` | Vektör, **kullanımdan kalktı** |

**Geometri — doğrulanacak.** Kaynak vektör (`.ai` / `.fig` / güncel
`.svg`) repoda yok. Logonun ızgarası, çizgi kalınlığı ve güvenli alan
payı yazılı değil. Yeni bir yüzeye (web, e-posta, mağaza görseli) logo
koyulmadan önce bunların netleşmesi gerekiyor.

Geçerli olan tek kural: logo **marka karesinin** içinde durur, tek renk
uygulanır, döndürülmez ve gölgelendirilmez.

## 2. Uygulama ikonu

| Platform | Dosya | Zemin |
|---|---|---|
| Ortak / iOS | `assets/images/icon.png` | Opak, kare |
| Android foreground | `assets/images/android-icon-foreground.png` | Saydam |
| Android background | `assets/images/android-icon-background.png` | Opak |
| Android monochrome | `assets/images/android-icon-monochrome.png` | Themed icon (Android 13+) |
| Web favicon | `assets/images/favicon.png` | |
| Bildirim ikonu | `assets/images/onesignal-notification-icon.png` | Android status bar — tek renk siluet |

Zemin renkleri `app.json` içinde tanımlıdır. **Bunlar native yapılandırma
değerleridir, tasarım token'ı değildir** — `tokens.ts`'e taşınmazlar,
çünkü uygulama açılmadan önce işletim sistemi tarafından okunurlar.

Android adaptive icon'da foreground'un güvenli alanı: ikonun dış %25'i
maske altında kalabilir, önemli hiçbir öğe oraya girmez.

## 3. Splash

| | |
|---|---|
| Görsel | `assets/images/splash-icon.png` |
| Zemin | `app.json` → `expo.splash.backgroundColor` |
| Eski | `splash-icon-legacy.png` — **kullanımdan kalktı** |

Splash zemini uygulamanın light tema ekran zeminiyle aynı tondadır;
açılışta renk sıçraması olmasın diye.

**Doğrulanacak:** dark modda ayrı bir splash zemini gerekiyor mu? Şu an
tek zemin var ve koyu temada açılışta kısa bir açık kare görünüyor.

## 4. UI ikonları

İki ayrı aile, karıştırılmaz:

| Aile | Nerede | Kaynak |
|---|---|---|
| Çizgi ikonlar | Tab bar, satır ikonları, aksiyonlar | `lucide-react-native` ve `@expo/vector-icons` (Ionicons) |
| İllüstrasyon | Hub kartları, boş durumlar | [Thiings](https://www.thiings.co/things) → `assets/icons/thiings/` |

Hub eşlemesi:

| Kart | Dosya |
|---|---|
| El analizi | `assets/icons/thiings/hand.png` |
| Yüz analizi | `assets/icons/thiings/human_face.png` |
| Ebced analizi | `assets/icons/thiings/scroll.png` |
| Rüya analizi | `assets/icons/thiings/dream.png` |

Kurallar:

- Çizgi ikonların rengi **her zaman** `useTheme()`'den gelir; ikon
  dosyasına renk gömülmez.
- İllüstrasyon PNG'leri tema değiştirmez — bu yüzden yalnızca nötr
  zeminli yüzeylerde kullanılır.
- **Doğrulanacak:** Thiings lisansı ticari kullanıma açık mı, atıf
  gerektiriyor mu? Mağaza yayınından önce netleşmeli.
- İki ailenin ikonu aynı satırda yan yana gelmez.

## 5. Mağaza varlıkları

**Doğrulanacak — repoda yok.** Aşağıdakiler App Store Connect ve Play
Console'da tutuluyor, sürüm kontrolünde değil:

- App Store: 6.7" ve 6.5" ekran görüntüleri, uygulama önizleme videosu
- Play: feature graphic (1024×500), telefon ekran görüntüleri
- Mağaza açıklaması metinleri (TR/EN)

Bunların repoda `assets/store/` altında versiyonlanması öneriliyor;
şu an kaynak tek nüsha ve mağaza panellerinde.

## 6. Üretim akışı

Şu an **manuel**. Bir ikon güncellenecekse:

1. Kaynak görseli hazırla (kare, saydamlık kuralına uygun).
2. İlgili dosyayı `assets/images/` altında **aynı adla** değiştir.
3. `app.json`'daki yolun değişmediğini doğrula.
4. Native yapılandırma değiştiği için **OTA yetmez** — yeni build gerekir.
5. Simülatörde ve gerçek cihazda açılışı kontrol et.

**Doğrulanacak:** boyut varyantlarını (1x/2x/3x, adaptive katmanlar)
üreten bir script yok. Expo'nun kendi ikon üreticisi kullanılıyorsa
akışa yazılmalı.

---

## Açık sorular

| # | Konu |
|---|---|
| M-1 | Logonun kaynak vektörü nerede? Repoya alınacak mı? |
| M-2 | Güvenli alan ve minimum boyut kuralı var mı? |
| M-3 | Thiings lisansı ticari kullanıma uygun mu? |
| M-4 | Dark mode için ayrı splash zemini gerekiyor mu? |
| M-5 | Mağaza görselleri repoda versiyonlansın mı? |
