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

