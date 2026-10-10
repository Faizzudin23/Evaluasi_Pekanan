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
        buka: true,
        tutup: false,
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

/*
PERTANYAAN :
1. Kenapa `nomorWhatsApp` disimpan sebagai string, bukan number?
2. Kenapa `website` diisi `null`, sedangkan `catatanKasir` dibiarkan tanpa nilai?
3. Jika `menu` berisi 6 item, apa hasil `menu[6]`? Kenapa?
4. Apa hasil `typeof menu`? Kenapa hasilnya begitu?
5. Kenapa `menu` dibuat sebagai array, sedangkan `kedai` dibuat sebagai object?
*/

// BAGIAN 3 : HITUNGAN KASIR

/* 
PERTANYAAN :
1. Tulis perhitungan **manual** untuk satu transaksi pilihanmu dari subtotal sampai kembalian. Apakah sama dengan hasil program?
2. Pilih satu transaksi. Ganti `||` pada `gratisAntar` menjadi `&&`. Tulis hasil sebelum dan sesudah, lalu jelaskan kenapa berbeda.
3. Tulis satu perhitunganmu yang hasilnya berubah jika tanda kurungnya dihapus. Berapa hasil dengan dan tanpa kurung?
4. Sebutkan 3 variabelmu yang memakai `const` dan 3 yang memakai `let`. Jelaskan alasan masing-masing.
5. Kenapa `hargaKopiTigaBulan` tidak dihitung dengan `harga * 1.05 * 3`? Apa bedanya `1.05 ** 3` dengan `1.05 * 3`?
6. Jika `harga` pada `menu[0]` diubah di data, apakah hasil perhitungan yang sudah tercetak ikut berubah otomatis? Buktikan dengan kode.
*/
