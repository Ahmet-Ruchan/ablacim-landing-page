# Tasarım istisnaları

> **Bu liste kapalıdır. Yeni istisna eklemek bir tasarım kararıdır, kod
> incelemesi olmadan eklenmez.**

Sistem kurallarının bilerek delindiği yerler. Bir kural burada yazılı
değilse istisna değildir — ihlaldir ve düzeltilir.

`scripts/design-lint.sh` bu dosyayı okumaz; istisnalar script içinde
dosya yolu ile ayrıca yazılıdır. İki yeri birden değiştirmek gerekir,
yani hiçbir istisna sessizce giremez.

Kurallar: [design-system.md](design-system.md) · Kararlar:
[design-decisions.md](design-decisions.md)

---

## Onaylı istisnalar

### İ-1 — Düşünme göstergesinin SVG maske gradyanı

| | |
|---|---|
| **Çiğnenen kural** | Gradyan yasağı (K-4) |
| **Nerede** | `src/shared/ui/thinking-indicator.tsx` |
| **Neden** | Metnin üzerinden geçen parlama efekti, `react-native-svg` mask + `linearGradient` ile yapılıyor. Bu bir **görüntü gradyanı değil, maske**: yumuşak kenarlı bandın kendisi. Alternatif olan `MaskedView` projede kurulu değil ve maskelediği alt ağacı ekran dışı katmana çizip her karede yeniden kompozitliyor. |
| **Onaylayan** | Kullanıcı — "Komut 1: sistemde gradyan yasağı devam ediyor, bu tek istisna" (bdecbc4), sonra "Komut 3: react-native-svg'de mask + linearGradient ile ya da MaskedView ile yap" (dfe3805) |
| **Yeniden ele al** | `MaskedView` bağımlılığı başka bir sebeple projeye girerse performans karşılaştırması tekrarlanır. |

### İ-2 — Düşünme göstergesinin üç yay rengi

| | |
|---|---|
| **Çiğnenen kural** | Ekranda tek accent (K-3) |
| **Nerede** | `thinkingArc1` / `thinkingArc2` / `thinkingArc3` token'ları, yalnızca `thinking-indicator.tsx` |
| **Neden** | Halkanın üç ayrı renkli yaya bölünmesi beklemenin canlı ama gürültüsüz okunmasını sağlıyor. Gerçek bir gradyan değil, ayrık üç yay. |
| **Onaylayan** | Kullanıcı — Komut 1 spesifikasyonu, token değerleri dahil |
| **Yeniden ele al** | Gösterge yeniden tasarlanırsa. |

### İ-3 — Satın alma listesinde çoklu accent

| | |
|---|---|
| **Çiğnenen kural** | Ekranda tek accent (K-3) |
| **Nerede** | `src/features/purchases/purchases-screen.tsx` — her kartın kendi satın alma butonu |
| **Neden** | Liste yapısı gereği her kart kendi eylemini taşımak zorunda; tek accent kuralı burada okunabilirliği bozar. |
| **Onaylayan** | Kullanıcı — "Ekranda tek accent kullanımı kuralı burada gevşer: her kartın kendi butonu accent olabilir, çünkü liste yapısı bunu gerektiriyor" |
| **Yeniden ele al** | Ekran tek sütun kart listesinden çıkarsa. |

### İ-4 — `app/+html.tsx` içindeki hex renkler

| | |
|---|---|
| **Çiğnenen kural** | Hex literal yasağı (K-1) |
| **Nerede** | `app/+html.tsx` |
| **Neden** | expo-router'ın web kabuğu. React ağacının dışında çalışır, `useTheme()` erişimi yoktur. |
| **Onaylayan** | — (yapısal zorunluluk, tartışmaya açık değil) |
| **Yeniden ele al** | Web hedefi ciddi bir ürün hâline gelirse. |

### İ-5 — Okuma kartlarındaki parlama ve spinner gradyanları

| | |
|---|---|
| **Çiğnenen kural** | Gradyan yasağı (K-3) |
| **Nerede** | `analysis/reading-card.tsx` (açılış parlaması), `readings/analysis-pending-card.tsx` (dönen kenarlık) |
| **Neden** | İkisi de **zemin gradyanı değil, animasyonlu efekt**: yumuşak kenarlı bir bandın hareketi. İ-1'deki düşünme göstergesi parlamasıyla işlevsel olarak aynı şey; aynı gerekçe geçerli. |
| **Onaylayan** | Kullanıcı — B-1…B-5 karar turu ("b-1 düz zemin" ile birlikte, B-2'nin parlama kısmı istisnaya alındı) |
| **Yeniden ele al** | Efektler kaldırılırsa veya tek bir paylaşılan bileşene taşınırsa. |


---

## Onay bekleyen — istisna DEĞİL, açık ihlal

Yok. `npm run design-lint` temiz ve CI'da zorunlu.

Buraya yalnızca `design-lint`'in raporladığı, henüz karara bağlanmamış
kullanımlar yazılır. Karara bağlandıklarında ya yukarıdaki kapalı
istisna listesine geçerler, ya kural değişir
([design-decisions.md](design-decisions.md)), ya da kod düzeltilir.

> Son kapanan: B-6 — `premium` motif kuralı dışındaki 4 kullanım.
> İstisna olarak değil, K-2 tanımı genişletilerek çözüldü (KR-024).
