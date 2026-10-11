// BAGIAN 5.1 : TEBAK, EKSPERIMEN, DAN JELASKAN
console.log(5 + "5");           // Hasil Tebakan : 55 karena, keduanya memiliki tipe data yang berbeda, jika tipe datanya sama maka hasilnya 10.
console.log("10" - 4);          // Hasil Tebakan : 104 karena, keduanya memiliki tipe data yang berbeda, jika tipe datanya sama maka hasilnya 6.
console.log("10" * "2");        // Hasil Tebakan : 1010 karena, keduanya memiliki tipe data yang berbeda, jika tipe datanya sama maka hasilnya 6.
console.log(typeof ("5" + 5));  // Hasil Tebakan : string karena, string 5 ditambah number 5 hasilnya 55 yang terdaftar sebagai string bukan number.
console.log(9 % 4);             // Hasil Tebakan : 1 karena 9-4-4 menyisakan 1.
console.log((2 + 3) ** 2);      // Hasil Tebakan : 25 karena 2+3 didahulukan lalu hasilnya dipangkatkan 2 jadi hasil akhirnya 25
console.log(10 / 4);            // Hasil Tebakan : 2.5 karena 10 dibagi 4 hasilnya 2.5 termasuk number desimal.
console.log(1 / 0);             // Hasil Tebakan : infinity, karena berapapun angkanya dibagi 0 tidak bisa dilakukan.
console.log("abc" * 2);         // Hasil Tebakan : "abcabc" karena nilai string dikalikan 2.
console.log(typeof NaN);        // Hasil Tebakan : Tidak Tahu
console.log((5 > 3 && 2 > 4) || 1 === 1);       // Hasil Tebakan : true karena, nilai di dalam kurung adalah false tetapi nilai perbandingan setelahnya adalah true maka salah satu syarat perbandingan or telah terpenuhi.
console.log(!true || !false);   // Hasil Tebakan : true karena, hasil dari !true adalah false dan !false menghasilkan true, dan karena operator pembandingnya adalah or maka salah satu syarat sudah terpenuhi.
console.log("5" == 5 && "5" !== 5);     // Hasil Tebakan : false karena nilai pertama adalah true dan nilai kedua adalah false, operator pembanding && menuntut kedua nilai true
console.log(typeof [] === typeof {});   // Hasil Tebakan : false karena dengan operator pembanding yang ketat, array tidak sama dengan object
console.log([10, 20, 30][1] + [10, 20, 30][2]);     // Hasil Tebakan : Tidak Tahu 

/* 
HASIL ASLI DI TERMINAL
55
6
20
string
1
25
2.5
Infinity
NaN
number
true
true
true
true
50
*/


// BAGIAN 5.2 : EKSPERIMEN
{
    let x = 10;
}
//console.log(x);

{
    var y = 20;
}
console.log(y);

var nama = "amin";
var nama = "budi";

let hobi = "belajar"; 
//let hobi = "main"; 


/* BAGIAN 5.3 : JELASKAN
1. Kenapa `5 + "5"` dan `"10" - 4` hasilnya berbeda jenis?
    - 5 + "5": Operator plus (+) digunakan untuk dua fungsi di JavaScript: penjumlahan matematika dan penggabungan teks (concatenation). 
      Karena salah satu operandnya adalah string, JavaScript memilih melakukan penggabungan teks, sehingga menghasilkan string "55".
    - "10" - 4: Operator minus (-) hanya memiliki satu fungsi yaitu operasi matematika. JavaScript otomatis mengubah string "10" menjadi 
      angka (type coercion) lalu menguranginya, sehingga menghasilkan tipe data number yaitu 6.
2. `typeof NaN` hasilnya `"number"`. Apa artinya `NaN`, dan kenapa tipenya number?
    - Arti NaN: Singkatan dari Not a Number. Ini adalah nilai khusus yang menandakan bahwa hasil dari suatu operasi matematika tidak 
      valid atau gagal menghasilkan angka (contoh: "abc" * 2).
    - Kenapa tipenya number?: Secara spesifikasi bahasa pemrograman JavaScript (mengikuti standar ECMAScript), NaN secara teknis tetap 
      dikategorikan sebagai tipe data number karena ia mewakili nilai numerik yang gagal dihitung, bukan mewakili tipe data lain seperti string atau boolean.
3. Jelaskan urutan evaluasi `5 > 3 && 2 > 4 || 1 === 1` langkah demi langkah.
    - Mengikuti prioritas operator (operator relasional dulu, lalu logika && (AND), baru || (OR)):
        (a) Evaluasi perbandingan pertama: 5 > 3 bernilai true.
        (b) Evaluasi perbandingan kedua: 2 > 4 bernilai false.
        (c) Evaluasi perbandingan ketiga: 1 === 1 bernilai true.
        (d) Masuk ke operasi logika AND (&&): true && false menghasilkan false.
        (e) Terakhir, operan OR (||): false || true menghasilkan true. Hasil akhirnya adalah true.
4. `typeof []` hasilnya `"object"`. Bagaimana kamu membedakan array dari object biasa di kodemu?
    -   cara membedakannya adalah melihat kurung apa yang dipakai apakah siku / kurawal.
        const data = [1, 2, 3];
        console.log(Array.isArray(data)); // Menghasilkan true jika itu array
5. Dari kode `let hasil = 5 + 10;` lalu `console.log(hasil * 2);`: sebutkan semua statement dan expression, dan nilai tiap expression.
    - let artinya mendeklarasikan variabel
    - hasil adalah nama variabel yang dibuat
    - = artinya penugasan
    - 5 adalah nilai pertama
    - + adalah operasi pertambahan
    - 10 adalah nilai kedua
    - console.log adalah perintah untuk menjalankan program dan menampilkan di terminal
    - hasil * 2 adalah pemanggilan nilai variabel hasil dikalikan 2 hasilnya 30.
6. `eksperimen.js` dijalankan di mana dan oleh apa? Apa bedanya dengan menjalankan JavaScript lewat Node.js? Kenapa modul ini memakai `let` dan `const`, bukan `var`?
    - Dijalankan di mana & oleh apa: File ini dijalankan di browser (seperti Chrome/Firefox) dan dieksekusi oleh JavaScript Engine bawaan browser (misal V8 di Chrome).
    - Bedanya dengan Node.js: Jika di browser JavaScript berinteraksi dengan elemen halaman web (DOM), di Node.js JavaScript berjalan di lingkungan backend (server) tanpa 
      antarmuka browser, sehingga bisa mengakses sistem file komputer.
    - Kenapa pakai let dan const: let dan const memiliki sistem block scope yang lebih aman dan mencegah kesalahan variabel bocor atau tidak sengaja tertimpa (re-declared), 
      yang merupakan masalah klasik pada var.
7. Apa hasil eksperimen `var` dan `let` milikmu? Jelaskan apa yang terjadi di setiap kasus.
    - Variabel var bisa diakses dari luar blok {} karena cakupannya berbasis fungsi (function scope), dan bisa dideklarasikan ulang tanpa pesan error.
    - Variabel let membatasi cakupannya hanya di dalam blok tempat ia dibuat (block scope), dan akan langsung memunculkan error SyntaxError jika dideklarasikan ulang di 
      cakupan yang sama.
8. Berikan satu contoh nyata di program besar yang bisa menimbulkan bug karena `var` bocor keluar blok atau dideklarasikan ulang.
    - var i = 10;
        for (var i = 0; i < 3; i++) {
        // melakukan sesuatu
        }
        console.log(i); // Hasilnya: 3 (Bukan lagi 10!)
    - Karena var tidak memiliki block scope, variabel i di luar perulangan tertimpa (override) tanpa sengaja oleh nilai i di dalam perulangan for. Dalam program besar, 
      hal ini sangat berbahaya karena variabel global bisa berubah nilainya secara diam-diam dan memicu bug yang sulit dilacak.
*/
