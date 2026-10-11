/*
    Nama            : Muhammad Faizzudin A.
    Tanggal         : 10-10-2026
    Tujuan Program  : Membuat Data Kedai & Hitungan Kasir
*/ 

// BAGIAN 2 : DATA KEDAI
const kedai = {
    nama: "Kedai 7 Naga",
    pemilik: "Koh Aliong",
    kota: "Surabaya",
    tahunBerdiri: 2022,
    sedangBuka: true,
    nomorWhatsapp: "082558439751",
    webseite: null,
    jamOperasional: {
        buka: "09:00",
        tutup: "21:00",
    },
};

let menu = [
    {
        nama: "Nasi Goreng",
        kategori: "Makanan",
        harga: 15000,
        stok: 10,
        tersedia: true,
    },

    {
        nama: "Soto Ayam",
        kategori: "Makanan",
        harga: 25000,
        stok: 7,
        tersedia: true,
    },

    {
        nama: "Sate Kambing",
        kategori: "Makanan",
        harga: 35000,
        stok: 5,
        tersedia: true,
    },

    {
        nama: "Teh (Dingin/Panas)",
        kategori: "Minuman",
        harga: 5000,
        stok: 0,
        tersedia: false,
    },

    {
        nama: "Jeruk (Dingin/Panas)",
        kategori: "Minuman",
        harga: 7000,
        stok: 5,
        tersedia: true,
    },

    {
        nama: "Soda Gembira",
        kategori: "Minuman",
        harga: 12000,
        stok: 4,
        tersedia: true,
    },
];

let transaksi = [
    // TRANSAKSI 1
    {
        kode: "TRX-001",
        pelanggan: "Budianto",
        sudahMember: false,
        uangBayar: 50000,
        catatan: "Terima Kasih",
        pesanan: [
            menu[0],
            2,
        ],
    },

    // TRANSAKSI 2
    {
        kode: "TRX-002",
        pelanggan: "Aminah",
        sudahMember: true,
        uangBayar: 90000,
        catatan: null,
        pesanan: [
            menu[4],
            3,
        ],
    },

    // TRANSAKSI 3
    {
        kode: "TRX-003",
        pelanggan: "Alfiyan",
        sudahMember: true,
        uangBayar: 80000,
        catatan: null,
        pesanan: [
            menu[5],
            4,
        ],
    },
];

console.log("Nama Kedai         : " + kedai.nama);
console.log("Nama Kota          : " + kedai["kota"]);
console.log("Jam Tutup          : " + kedai.jamOperasional.tutup + " WIB");
console.log("Menu Awal & Akhir  : "); 
console.log(menu[0], menu[5]);
console.log("Nama Pelanggan Transaksi Ke-2 : " + transaksi[1].pelanggan);
console.log("Menu yang dipesan  : " + transaksi[2].pesanan);
console.log("Hasil kedai.tahunBerdiri   : " + typeof kedai.tahunBerdiri);
console.log("Hasil kedai.sedangBuka     : " + typeof kedai.sedangBuka);
console.log("Hasil kedai.website        : " + typeof kedai.website);
console.log("Hasil kedai.jamOperasional : " + typeof kedai.jamOperasional);
console.log("Hasil menu                 : " + typeof menu);
console.log("Hasil transaksi[0].catatan : " + typeof transaksi[0].catatan);

let catatanKasir;
console.log("Hasil dari catatanKasir : " + catatanKasir);
/*
PERTANYAAN :
1. Kenapa `nomorWhatsApp` disimpan sebagai string, bukan number?
    - Karena angka yang dimasukkan tujuannya adalah sebagai teks, bukan sebagai angka untuk perhitungan.
2. Kenapa `website` diisi `null`, sedangkan `catatanKasir` dibiarkan tanpa nilai?
 v   - Karena nilai dari website memang sengaja dikosongkan, nantinya akan diisi nilai, sedangkan catatanKasir
3. Jika `menu` berisi 6 item, apa hasil `menu[6]`? Kenapa?
    - hasilnya adalah undefined karena, secara program data indeks dimulai dari 0, sehingga jika ingin memunculkan harus memakai indeks angka sebelumnya yaitu 5.
4. Apa hasil `typeof menu`? Kenapa hasilnya begitu?
    - hasilnya adalah object karena, data yang 
5. Kenapa `menu` dibuat sebagai array, sedangkan `kedai` dibuat sebagai object?
    - karena didalamnya termuat beberapa menu dan memuat informasi menu, sedangkan kedai dibuat object karena satu nilai yang didalamnya mengandung nilai yang 
      terstruktur dan memiliki atribut yang terkait satu dengan yang lainnya.
*/


// BAGIAN 3 : PENGHITUNGAN TRANSAKSI

// --- TRANSAKSI 1 ---
const subtotal1 = transaksi[0].pesanan[0].harga * transaksi[0].pesanan[1];
const potongan1 = transaksi[0].sudahMember ? subtotal1 * 0.10 : 0;
const pajak1 = (subtotal1 - potongan1) * 0.11;
const totalBayar1 = (subtotal1 - potongan1) + pajak1;
const kembalian1 = transaksi[0].uangBayar - totalBayar1;
const uangCukup1 = transaksi[0].uangBayar >= totalBayar1;
const gratisAntar1 = subtotal1 >= 100000 || transaksi[0].pesanan[1] >= 5;
const semuaMenuTersedia1 = transaksi[0].pesanan[0].tersedia;
const sisaPecahan50k1 = kembalian1 >= 0 ? kembalian1 % 50000 : null;
const sisaPecahan20k1 = kembalian1 >= 0 ? sisaPecahan50k1 % 20000 : null;

// --- TRANSAKSI 2 ---
const subtotal2 = transaksi[1].pesanan[0].harga * transaksi[1].pesanan[1];
const potongan2 = transaksi[1].sudahMember ? subtotal2 * 0.10 : 0;
const pajak2 = (subtotal2 - potongan2) * 0.11;
const totalBayar2 = (subtotal2 - potongan2) + pajak2;
const kembalian2 = transaksi[1].uangBayar - totalBayar2;
const uangCukup2 = transaksi[1].uangBayar >= totalBayar2;
const gratisAntar2 = subtotal2 >= 100000 || transaksi[1].pesanan[1] >= 5;
const semuaMenuTersedia2 = transaksi[1].pesanan[0].tersedia;
const sisaPecahan50k2 = kembalian2 >= 0 ? kembalian2 % 50000 : null;
const sisaPecahan20k2 = kembalian2 >= 0 ? sisaPecahan50k2 % 20000 : null;

// --- TRANSAKSI 3 ---
const subtotal3 = transaksi[2].pesanan[0].harga * transaksi[2].pesanan[1];
const potongan3 = transaksi[2].sudahMember ? subtotal3 * 0.10 : 0;
const pajak3 = (subtotal3 - potongan3) * 0.11;
const totalBayar3 = (subtotal3 - potongan3) + pajak3;
const kembalian3 = transaksi[2].uangBayar - totalBayar3;
const uangCukup3 = transaksi[2].uangBayar >= totalBayar3;
const gratisAntar3 = subtotal3 >= 100000 || transaksi[2].pesanan[1] >= 5;
const semuaMenuTersedia3 = transaksi[2].pesanan[0].tersedia;
const sisaPecahan50k3 = kembalian3 >= 0 ? kembalian3 % 50000 : null;
const sisaPecahan20k3 = kembalian3 >= 0 ? sisaPecahan50k3 % 20000 : null;

// --- LAPORAN HARIAN ---
let pendapatanHarian = 0;
pendapatanHarian += totalBayar1;
pendapatanHarian += totalBayar2;
pendapatanHarian += totalBayar3;

let jumlahTransaksi = 0;
jumlahTransaksi++;
jumlahTransaksi++;
jumlahTransaksi++;

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
const selisihTerbesar = Math.max(totalBayar1, totalBayar2, totalBayar3) - Math.min(totalBayar1, totalBayar2, totalBayar3);
const persentaseTransaksiPertama = (totalBayar1 / pendapatanHarian) * 100;
const hargaKopiTigaBulan = menu[0].harga * (1.05 ** 3);

// --- CETAK LAPORAN ---
console.log(`========================================`);
console.log(`       LAPORAN HARIAN KEDAI SENJA       `);
console.log(`       (${kedai.nama} - ${kedai.kota})`);
console.log(`========================================`);

console.log(`\n--- RINGKASAN TRANSAKSI ---`);
console.log(`1. ${transaksi[0].kode} | Pelanggan: ${transaksi[0].pelanggan} | Total: Rp${totalBayar1} | Kembalian: Rp${kembalian1} | Gratis Antar: ${gratisAntar1}`);
console.log(`2. ${transaksi[1].kode} | Pelanggan: ${transaksi[1].pelanggan} | Total: Rp${totalBayar2} | Kembalian: Rp${kembalian2} | Gratis Antar: ${gratisAntar2}`);
console.log(`3. ${transaksi[2].kode} | Pelanggan: ${transaksi[2].pelanggan} | Total: Rp${totalBayar3} | Kembalian: Rp${kembalian3} | Gratis Antar: ${gratisAntar3}`);

console.log(`\n--- STATISTIK HARIAN ---`);
console.log(`Total Pendapatan Harian    : Rp${pendapatanHarian.toFixed(2)}`);
console.log(`Jumlah Transaksi           : ${jumlahTransaksi}`);
console.log(`Rata-rata Pendapatan       : Rp${rataRataPendapatan.toFixed(2)}`);
console.log(`Selisih Terbesar (Max-Min) : Rp${selisihTerbesar.toFixed(2)}`);
console.log(`Porsi Transaksi Pertama    : ${persentaseTransaksiPertama.toFixed(2)}%`);
console.log(`Simulasi Harga Menu 0 (3B) : Rp${hargaKopiTigaBulan.toFixed(2)}`);
console.log(`========================================`);

/*
JAWABAN PERTANYAAN BAGIAN 3:

1. Perhitungan manual untuk Transaksi 1:
   - Subtotal: 2 porsi Nasi Goreng @15000 = 30000.
   - Karena sudahMember = false, potongan = 0.
   - Subtotal setelah potongan = 30000.
   - Pajak 11% dari 30000 = 3300.
   - Total Bayar = 30000 + 3300 = 33300.
   - Uang Bayar = 50000.
   - Kembalian = 50000 - 33300 = 16700.
   Hasil manual sama persis dengan hasil eksekusi program.

2. Penggantian operator `||` menjadi `&&` pada `gratisAntar`:
   - Sebelum (`||`): Jika salah satu syarat terpenuhi (subtotal >= 100000 ATAU jumlah item >= 5), maka `gratisAntar` bernilai `true`.
   - Sesudah (`&&`): Kedua syarat harus terpenuhi secara bersamaan (subtotal >= 100000 DAN jumlah item >= 5) agar bernilai `true`.
   - Alasan berbeda: Menggunakan `||` lebih longgar karena hanya butuh satu kondisi benar, sedangkan `&&` jauh lebih ketat karena mewajibkan seluruh kondisi terpenuhi.

3. Contoh perhitungan yang berubah jika tanda kurung dihapus:
   - Dengan kurung: `const pajak1 = (subtotal1 - potongan1) * 0.11;` -> hasilnya menghitung pajak dari subtotal yang sudah dikurangi diskon.
   - Tanpa kurung: `const pajak1 = subtotal1 - potongan1 * 0.11;` -> berdasarkan urutan prioritas operator (operator perkalian lebih dulu daripada pengurangan), program akan menghitung `potongan1 * 0.11` terlebih dahulu baru dikurangkan ke `subtotal1`, menghasilkan nilai yang salah.

4. 3 Variabel `const` dan 3 Variabel `let`:
   - `const subtotal1`: Nilainya tetap dan tidak perlu diubah setelah dihitung.
   - `const kedai`: Referensi objek data kedai bersifat konstan agar tidak tertimpa objek lain.
   - `const totalBayar1`: Hasil kalkulasi akhir transaksi yang bersifat final.
   - `let pendapatanHarian`: Nilainya terus bertambah seiring masuknya transaksi baru (`+=`).
   - `let jumlahTransaksi`: Nilainya terus bertambah setiap ada transaksi (`++`).
   - `let menu`: Array menu dapat dimodifikasi atau diperbarui isinya sewaktu-waktu.

5. Kenapa `hargaKopiTigaBulan` tidak dihitung dengan `harga * 1.05 * 3`?
   - `1.05 * 3` adalah kenaikan linier sederhana (menambahkan 5% dari harga awal sebanyak 3 kali lipat secara akumulasi tetap). Sedangkan `1.05 ** 3` menghitung kenaikan bunga majemuk (*compound interest*) di mana harga bulan berikutnya naik 5% dari harga bulan sebelumnya secara bertingkat.

6. Pembuktian apakah harga menu yang diubah ikut berubah otomatis:
   - Tidak, karena nilai variabel `subtotal1`, `totalBayar1`, dll. dihitung secara *eager evaluation* (disimpan sebagai nilai primitif angka saat baris kode tersebut dieksekusi, bukan sebagai rumus referensi yang dinamis). 
   - Bukti kode:
     let hargaAwal = menu[0].harga; // 15000
     let sub = hargaAwal * 2;       // 30000
     menu[0].harga = 20000;        // Ubah harga menu
     console.log(sub);             // Hasilnya tetap 30000, tidak berubah otomatis menjadi 40000.
*/
