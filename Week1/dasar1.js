//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// variabel bisa menampung tipe data string (text), integer/number, boolean, array, object

let nama = 'louis' // string
let umur = 19 // number
let apakahBenar = true; // boolean
let uang = 5000.5; // number namun ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2, "pertambahan"); // penambahan
console.log(angka1 - angka2, 'pengurangan'); // pengurangan
console.log(angka1 * angka2, 'perkalian'); // perkalian
console.log(angka1 / angka2, 'pembagian'); // pembagian
console.log(angka1 % angka2, 'modulus'); // modulus

// disini kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

//string juga bisa ditambah namun string gabisa dikurang secara dengan operator aritmatika
let firstname = 'Agus';
let lastname = 'Setiawan';
let fullname = firstname + ' ' + lastname;
console.log(fullname);
console.log(firstname + ' ' + lastname);
console.log(firstname - lastname);

// alur pembacaan code !!INI WAJIB!!
// untuk membaca kode, kalian harus membacanya dari kiri ke kanan dan atas ke bawah
// contoh

let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10

// pertanyaan? kenapa false - 10 tetap menjadi 10?? karena false dianggap sebagai angka 0, dan 0 + 10 = 10 (false = 0, true = 1);
console.log(true + 10);

// membaca error
// error itu jangan kalian takut, justru kalian harus takut kalau tida ada yang namanya error dalam pemrograman
// karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer rada muak buat mencari errornya atau letak kesalahannya

//contoh error
const hewan = 'jerapah';
console.log(hewan);
hewan = 'buaya';