# Evaluasi Pekan 5: Kedai Senja

**Waktu pengerjaan:** pukul 09.00 – 22.30 WIB
**Pengumpulan:** link repository GitHub paling lambat pukul 22.30 WIB.

---

## Aturan

- Kerjakan sendiri. Tidak boleh bertanya atau berbagi kode dengan teman.
- Boleh membuka materi dan dokumentasi. **Tidak boleh memakai AI dalam bentuk apapun**.

---

## Cerita Soal

Kamu membuat program pencatat transaksi untuk **Kedai Senja**, sebuah kedai kopi UMKM. Semua soal dikerjakan dalam satu proyek bernama `evaluasi-pekan-5`.

## Struktur Proyek

```
evaluasi-pekan-5/
├── index.html          ← memanggil script.js (Bagian 2 dan 3)
├── script.js
├── perbaikan.html      ← memanggil perbaikan.js (Bagian 4)
├── perbaikan.js
├── eksperimen.html     ← memanggil eksperimen.js (Bagian 5)
├── eksperimen.js
├── .gitignore
└── README.md
```

Setiap halaman HTML hanya memanggil satu file JavaScript miliknya sendiri.

---

## Bagian 1: Persiapan Proyek

1. Lewat **terminal**, buat folder `evaluasi-pekan-5`. Di dalamnya buat `index.html`, `script.js`, `.gitignore`, dan `README.md`.
2. `index.html` berisi kerangka HTML dasar lengkap dengan `<title>` dan memanggil `script.js`.
3. Isi `.gitignore` dengan minimal: `node_modules/`, `.env`, dan satu file sampah sistem operasi.
4. Jalankan `git init`. Buat commit pertama di branch `main` dengan format `tipe: deskripsi`.
5. Buat repository GitHub **public** bernama `evaluasi-pekan-5`, lalu hubungkan dan push `main`.

### Alur Git Selama Ujian

- Setiap bagian dikerjakan di **branch sendiri**, lalu di-merge ke `main` setelah selesai:

| Bagian | Nama branch           |
| ------ | --------------------- |
| 2      | `feat/data-kedai`     |
| 3      | `feat/hitungan-kasir` |
| 4      | `fix/perbaikan-kode`  |
| 5      | `docs/tebak-jelaskan` |

- Setiap bagian punya minimal 2 commit. Total commit proyek minimal 10.
- Semua pesan commit memakai format `tipe: deskripsi` yang jelas.
- Sebelum push terakhir, branch `main` di GitHub harus sudah berisi seluruh hasil.

---

## Bagian 2: Data Kedai

Kerjakan di `script.js`, branch `feat/data-kedai`.

Di bagian paling atas `script.js`, tulis **komentar banyak baris** berisi nama, tanggal, dan tujuan program.

1. Buat **object** `kedai` berisi: `nama`, `pemilik`, `kota`, `tahunBerdiri`, `sedangBuka`, `nomorWhatsApp`, `website`, dan `jamOperasional`. `website` belum ada. `jamOperasional` adalah object berisi `buka` dan `tutup`.
2. Buat **array** `menu` berisi **minimal 6 object**. Tiap object punya `nama`, `kategori`, `harga`, `stok`, dan `tersedia`. Syarat:
   - minimal 2 kategori berbeda,
   - minimal 1 menu dengan `tersedia: false` dan `stok: 0`.
3. Buat **array** `transaksi` berisi **3 object**. Tiap object punya:
   - `kode` (contoh: `"TRX-001"`),
   - `pelanggan`,
   - `sudahMember`,
   - `uangBayar`,
   - `catatan`,
   - `pesanan`: array berisi minimal 2 object `{ indeksMenu, jumlah }`. `indeksMenu` adalah nomor indeks menu di array `menu`.

   Syarat data:
   - minimal 1 transaksi dengan `sudahMember: true` dan minimal 1 dengan `false`,
   - minimal 1 transaksi punya `catatan` berupa teks, sisanya belum ada catatan,
   - `uangBayar` dipilih agar ada minimal 1 transaksi yang uangnya **kurang** dan minimal 2 yang **cukup** (hitung setelah Bagian 3 selesai, ubah data jika perlu).

4. Cetak ke console:
   - nama kedai (notasi titik),
   - kota (notasi kurung siku),
   - jam tutup,
   - menu pertama dan menu terakhir (pakai indeks),
   - nama pelanggan pada transaksi kedua,
 v  - nama menu yang dipesan pada item kedua di transaksi ketiga (ambil dari array `menu` lewat `indeksMenu`),
   - hasil `typeof` untuk: `kedai.tahunBerdiri`, `kedai.sedangBuka`, `kedai.website`, `kedai.jamOperasional`, `menu`, dan `transaksi[0].catatan`.
5. Buat variabel `catatanKasir` **tanpa nilai**, lalu cetak.

**Jawab dalam komentar:**

1. Kenapa `nomorWhatsApp` disimpan sebagai string, bukan number?
2. Kenapa `website` diisi `null`, sedangkan `catatanKasir` dibiarkan tanpa nilai?
3. Jika `menu` berisi 6 item, apa hasil `menu[6]`? Kenapa?
4. Apa hasil `typeof menu`? Kenapa hasilnya begitu?
5. Kenapa `menu` dibuat sebagai array, sedangkan `kedai` dibuat sebagai object?

---

## Bagian 3: Perhitungan Transaksi dan Laporan Harian

Lanjutkan di `script.js`, branch `feat/hitungan-kasir` (buat dari `main` setelah Bagian 2 di-merge).

**Aturan perhitungan:**

- Harga tiap item diambil dari array `menu` lewat `indeksMenu`.
- Pelanggan yang `sudahMember: true` mendapat potongan **10% dari subtotal**. Pelanggan yang bukan member tidak mendapat potongan.
- Pajak **11%** dihitung dari subtotal **setelah** dipotong.
- `totalBayar` = subtotal dikurangi potongan, ditambah pajak.

**Untuk setiap dari 3 transaksi**, hitung dan simpan dalam variabel:

1. `subtotal`
2. `potongan`
3. `pajak`
4. `totalBayar`
5. `kembalian` (uang bayar dikurangi total bayar)
6. Tiga variabel Boolean:
   - `uangCukup`,
   - `gratisAntar`: gratis antar jika subtotal minimal 100000 **atau** jumlah seluruh item minimal 5,
   - `semuaMenuTersedia`: semua menu yang dipesan berstatus tersedia.
7. Untuk transaksi yang `kembalian`-nya tidak negatif: hitung sisa kembalian setelah dibagi pecahan 50000, lalu sisa setelah dibagi pecahan 20000 (pakai `%`).

Beri nama variabel yang jelas untuk membedakan ketiga transaksi.

**Laporan harian:**

1. `pendapatanHarian` mulai dari 0, lalu ditambah `totalBayar` tiap transaksi memakai `+=`.
2. `jumlahTransaksi` mulai dari 0, lalu bertambah memakai `++` tiap transaksi.
3. `rataRataPendapatan`: pendapatan harian dibagi jumlah transaksi.
4. `selisihTerbesar`: total bayar tertinggi dikurangi total bayar terendah (pakai `Math.max` dan `Math.min`).
5. `persentaseTransaksiPertama`: porsi total bayar transaksi pertama terhadap pendapatan harian, dalam persen.
6. `hargaKopiTigaBulan`: simulasi harga `menu[0]` jika naik **5% per bulan selama 3 bulan** (pakai `**`).

**Cetak:**

- Ringkasan tiap transaksi dan laporan harian dengan **template literal**, tampilan rapi.
- Judul "LAPORAN HARIAN KEDAI SENJA" beserta nama kedai dari object `kedai`.

**Jawab dalam komentar:**

1. Tulis perhitungan **manual** untuk satu transaksi pilihanmu dari subtotal sampai kembalian. Apakah sama dengan hasil program?
2. Pilih satu transaksi. Ganti `||` pada `gratisAntar` menjadi `&&`. Tulis hasil sebelum dan sesudah, lalu jelaskan kenapa berbeda.
3. Tulis satu perhitunganmu yang hasilnya berubah jika tanda kurungnya dihapus. Berapa hasil dengan dan tanpa kurung?
4. Sebutkan 3 variabelmu yang memakai `const` dan 3 yang memakai `let`. Jelaskan alasan masing-masing.
5. Kenapa `hargaKopiTigaBulan` tidak dihitung dengan `harga * 1.05 * 3`? Apa bedanya `1.05 ** 3` dengan `1.05 * 3`?
6. Jika `harga` pada `menu[0]` diubah di data, apakah hasil perhitungan yang sudah tercetak ikut berubah otomatis? Buktikan dengan kode.

---

## Bagian 4: Perbaiki Kode

Buat `perbaikan.html` dan `perbaikan.js`, branch `fix/perbaikan-kode`.

Salin kode di bawah ke `perbaikan.js`. Kode ini punya **12 kesalahan**. Komentar `Seharusnya` menunjukkan hasil yang benar.

```javascript
/* Program hitung transaksi Kedai Senja
const namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = "2";
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahkopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = subtotal - 10000 * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar = totalBayar;

// Kembalian. Seharusnya: 17860
let kembalian = totalBayar - uangBayar;

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 1;

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai + 1;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
let namaKedai = "Kedai Senja Baru";

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
TARIF_PAJAK = 0.12;

Console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);
```

**Yang dikerjakan:**

1. Perbaiki ke-12 kesalahan. Tandai tiap perbaikan dengan komentar `// FIX: ...`.
2. Hasil akhir di console harus: `Kedai Senja Baru 5 84000 8140 82140 true 17860 false 1`.
3. Buat **Catatan Bug** dalam komentar. Untuk tiap kesalahan tulis: **jenisnya** (menghentikan program dengan error / tidak error tapi hasil salah) dan **penyebabnya**.

---

## Bagian 5: Tebak, Eksperimen, dan Jelaskan

Buat `eksperimen.html` dan `eksperimen.js`, branch `docs/tebak-jelaskan`. Bagian ini digabungkan ke `main` lewat **Pull Request** (lihat Bagian 6).

### 5.1 Tebak

Tulis kode di bawah di `eksperimen.js`. Untuk **setiap baris**, tulis **tebakan** di komentar **sebelum** menjalankan kode. Lalu jalankan dan tulis **hasil aslinya**.

```javascript
console.log(5 + "5");
console.log("10" - 4);
console.log("10" * "2");
console.log(typeof ("5" + 5));
console.log(9 % 4);
console.log((2 + 3) ** 2);
console.log(10 / 4);
console.log(1 / 0);
console.log("abc" * 2);
console.log(typeof NaN);
console.log((5 > 3 && 2 > 4) || 1 === 1);
console.log(!true || !false);
console.log("5" == 5 && "5" !== 5);
console.log(typeof [] === typeof {});
console.log([10, 20, 30][1] + [10, 20, 30][2]);
```

### 5.2 Eksperimen `var` dan `let`

Di bawah bagian tebak, tulis kode yang **membuktikan sendiri**:

1. Variabel `var` yang dibuat di dalam blok `{ }` tetap bisa dibaca dari luar blok, sedangkan `let` tidak.
2. Variabel `var` dengan nama sama bisa dideklarasikan dua kali tanpa error, sedangkan `let` tidak.

Untuk kode yang menimbulkan error, jadikan baris itu komentar dan tulis pesan error yang muncul jika diaktifkan. Di bagian ini, `var` boleh dipakai.

### 5.3 Jelaskan

**Jawab dalam komentar:**

1. Kenapa `5 + "5"` dan `"10" - 4` hasilnya berbeda jenis?
2. `typeof NaN` hasilnya `"number"`. Apa artinya `NaN`, dan kenapa tipenya number?
3. Jelaskan urutan evaluasi `5 > 3 && 2 > 4 || 1 === 1` langkah demi langkah.
4. `typeof []` hasilnya `"object"`. Bagaimana kamu membedakan array dari object biasa di kodemu?
5. Dari kode `let hasil = 5 + 10;` lalu `console.log(hasil * 2);`: sebutkan semua statement dan expression, dan nilai tiap expression.
6. `eksperimen.js` dijalankan di mana dan oleh apa? Apa bedanya dengan menjalankan JavaScript lewat Node.js? Kenapa modul ini memakai `let` dan `const`, bukan `var`?
7. Apa hasil eksperimen `var` dan `let` milikmu? Jelaskan apa yang terjadi di setiap kasus.
8. Berikan satu contoh nyata di program besar yang bisa menimbulkan bug karena `var` bocor keluar blok atau dideklarasikan ulang.

---

## Bagian 6: Konflik Merge dan Pull Request

### 6.1 Konflik Merge

Simulasikan skenario **merge conflict** pada proyek ini, lalu selesaikan konflik tersebut.

Yang dinilai:

- Riwayat Git (`git log --graph` atau visual graph) membuktikan terjadinya konflik dan terdapat **merge commit** hasil penyelesaian.
- Pesan commit penyelesaian konflik jelas dan bermakna.
- Branch sementara/eksperimen yang digunakan untuk simulasi sudah dihapus/dibersihkan.

### 6.2 Pull Request

Gabungkan branch `docs/tebak-jelaskan` ke `main` melalui alur **Pull Request (PR)** di GitHub.

Yang dinilai / bukti yang dibutuhkan:

- Terdapat Pull Request di repository GitHub dari `docs/tebak-jelaskan` ke `main` dengan status **Merged**.
- PR memiliki judul dan deskripsi yang jelas serta informatif (menjelaskan apa yang diubah dan tujuannya).
- Branch `main` di lokal sudah ditarik (`pull`) dan sinkron dengan hasil merge remote.

---

## Bagian 7: README dan Riwayat Git

Isi `README.md` dengan:

1. **Judul proyek**, deskripsi singkat, cara menjalankan, teknologi yang digunakan, dan nama penulis.
2. Hasil perintah `git log --oneline --graph` (tempel apa adanya).
3. Hasil `git blame index.html` untuk baris `<title>`. Tulis siapa dan commit apa yang terakhir mengubah baris itu.
4. Jawaban tiga pertanyaan berikut dengan bahasa sendiri:
   - Apa beda `git add` dan `git commit`?
   - Kenapa konflik terjadi pada Bagian 6.1, dan bagaimana kamu menyelesaikannya?
   - Apa beda `fork` dan `clone`? Apa gunanya Pull Request?

---

## Yang Dikumpulkan

Kirim **link repository GitHub** `evaluasi-pekan-5` di google form paling lambat pukul 22.30 WIB. Pastikan:

- repository bersifat public,
- branch `main` sudah berisi seluruh hasil,
- semua file ada: `index.html`, `script.js`, `perbaikan.html`, `perbaikan.js`, `eksperimen.html`, `eksperimen.js`, `.gitignore`, `README.md`.
