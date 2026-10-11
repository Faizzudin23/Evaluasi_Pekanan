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
