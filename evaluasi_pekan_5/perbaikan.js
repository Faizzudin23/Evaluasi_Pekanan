/* Program hitung transaksi Kedai Senja */  // FIX : Menutup comment dengan (*/) agar data dibawahnya bisa dieksekusi.
let namaKedai = "Kedai Senja";      // FIX : Mengganti deklarasi dari const menjadi let agar nilainya bisa diubah.
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = 2;     // FIX : Mengubah tipe data dari string menjadi number.
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;   // FIX : Memperbaiki typo variabel jumlahkopi menjadi jumlahKopi (K jadi besar).

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
let pajak = (subtotal - 10000) * TARIF_PAJAK;       // FIX : Menambahkan operasi perhitungan berupa () agar operasi didalamnya didahulukan.

// Total bayar. Seharusnya: 82140
let totalBayar = subtotal - 10000 + pajak;      // FIX : Menambahkan ';' untuk menutup perintah dibagian akhir kode yang sesuai dengan aturan penulisan kode.

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
let uangCukup = uangBayar > totalBayar;     // FIX : Mengganti operasi perbandingan dari '=' menjadi '>' untuk menentukan output.

// Kembalian. Seharusnya: 17860
let kembalian = uangBayar - totalBayar;     // FIX : Mengubah letak variabel uangDibayar diletakkan dahulu lalu variabel totalBayar.

// Jumlah item genap? Seharusnya: false
let itemGenap = jumlahItem % 2 === 0;       // FIX : Mengubah nilai 1 menjadi 0 karena jika genap, seharusnya harus bisa dibagi 2 hingga habis / 0.

// Transaksi selesai bertambah 1. Seharusnya: 1
transaksiSelesai += 1;      // FIX : Mengubah operasi penghitungan dari '+' menjadi '+=' untuk memproses dan menyimpan nilai hitungan.

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
namaKedai = "Kedai Senja Baru";     // FIX : Menghapus deklarasi let karena variabel namaKedai sudah dibuat sebelumnya.

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// TARIF_PAJAK = 0.12;      // FIX : Menambahkan komen agar baris ini tidak dieksekusi, dan nilai yang diambil tetap sama.

console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai); // FIX : Mengubah typo 'Console.log' menjadi 'console.log'.

/*
==========CATATAN BUG==========
1.  Baris 1     : Menutup comment dengan bintang garis miring, agar data dibawahnya bisa dieksekusi.    (tidak error tapi tidak akan dieksekusi)
2.  Baris 2     : Mengganti deklarasi dari const menjadi let agar nilainya bisa diubah.     (tidak error tapi nilainya tidak akan bisa diubah)
3.  Baris 7     : Mengubah tipe data dari string menjadi number.        (tidak error tapi nilai yang dihasilkan akan berbeda)
4.  Baris 14    : Memperbaiki typo variabel jumlahkopi menjadi jumlahKopi (K jadi besar).       (program menjadi error karena variabel tidak akan terdeteksi)
5.  Baris 17    : Menambahkan operasi perhitungan berupa () agar operasi didalamnya didahulukan.        (tidak error tapi outputnya akan berbeda)
6.  Baris 20    : Menambahkan ';' untuk menutup perintah dibagian akhir kode yang sesuai dengan aturan penulisan kode.      (tidak error tapi untuk menyesuaikan penulisan)
7.  Baris 24    : Mengganti operasi perbandingan dari '=' menjadi '>' untuk menentukan output.      (tidak error tapi outputnya akan berbeda)
8.  Baris 27    : Mengubah letak variabel uangDibayar diletakkan dahulu lalu variabel totalBayar.       (tidak error tapi outputnya akan berbeda)
9.  Baris 30    : Mengubah nilai 1 menjadi 0 karena jika genap, seharusnya harus bisa dibagi 2 hingga habis / 0.        (tidak error tapi outputnya akan berbeda)
10. Baris 33    : Mengubah operasi penghitungan dari '+' menjadi '+=' untuk memproses dan menyimpan nilai hitungan.     (tidak error tapi outputnya akan berbeda)
11. Baris 36    : Menghapus deklarasi let karena variabel namaKedai sudah dibuat sebelumnya.        (error karena variabel sudah dibuat dengan constant)
12. Baris 39    : Menambahkan komen agar baris ini tidak dieksekusi, dan nilai yang diambil tetap sama.     (error karena variabel sudah dibuat dengan constant)
13. Baris 41    : Mengubah typo 'Console.log' menjadi 'console.log'.        (error yang bisa menghentikan program)

*/
