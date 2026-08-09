# İkon kaynağı — Thiings

**Kaynak:** [The Thiings Collection](https://www.thiings.co/things)

Ablacım mobilde **UI ikonları** (tab, boş durum, küçük illüstrasyonlar vb.) için stil referansı olarak Thiings koleksiyonu kullanılacak.

## Kullanım notları

- Siteden uygun görselleri **lisans / kullanım koşullarına** uygun şekilde export et (PNG veya SVG).
- Export’ları repoda örn. `assets/icons/thiings/` altında topla; kodda `Image` / `expo-image` veya küçük SVG’ler için mevcut SVG pipeline ile kullan.
- **Uygulama mağaza ikonu** (`app.json` → `icon`, Android adaptive) ile **UI ikonları** ayrı: mağaza ikonu marka karesine uygun; Thiings daha çok içerik/empty state için uygun olabilir.

## Hub menü eşlemesi (Thiings PNG)

| Kart | Dosya |
|------|--------|
| El analizi | `assets/icons/thiings/hand.png` |
| Yüz analizi | `assets/icons/thiings/human_face.png` |
| Ebced analizi | `assets/icons/thiings/scroll.png` |
| Rüya analizi | `assets/icons/thiings/dream.png` |

Kullanım: `src/features/hub/hub-screen.tsx` içinde `expo-image` ile `require(...)`.

## İlgili dosyalar

- `app.json` — native icon / splash
- `assets/images/` — logo ve büyük görseller
