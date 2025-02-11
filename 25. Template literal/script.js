// const sum = 5 + 3; // '+' qo'shish operatori
// console.log(sum); // 8

// const isEqual = 5 === 5; // '===' solishtirish operatori
// console.log(isEqual); // true

// const str = "5";
// const num = +str; // "5" (matn)ni 5 (son)ga aylantiradi
// console.log(num); // 5

// const num = 5;
// const neg = -num; // Qiymatni manfiy qiladi
// console.log(neg); // -5

// const a = 10;
// const b = 5;
// const result = a + b; // Qo‘shish operatori
// console.log(result); // Natija: 15

// const a = 10;
// const b = 3;
// const result = a - b; // Ayirish operatori
// console.log(result); // Natija: 7

// const a = 4;
// const b = 3;
// const result = a * b; // Ko‘paytirish operatori
// console.log(result); // Natija: 12

// const a = 20;
// const b = 4;
// const result = a / b; // Bo‘lish operatori
// console.log(result); // Natija: 5

// const a = 10;
// const b = 3;
// const result = a % b; // Qoldiqni olish operatori
// console.log(result); // Natija: 1

// const base = 2;
// const exponent = 3;
// const result = base ** exponent; // Darajaga oshirish operatori
// console.log(result); // Natija: 8

// let x = 5;
// let y = x++;
// console.log(x); // 6 (x avval y ga qiymatini beradi, keyin 1 ga oshadi)
// console.log(y); // 5 (x ning dastlabki qiymati y ga berilgan)

// let x = 5;
// let y = ++x;
// console.log(x); // 6 (x avval 1 ga oshadi)
// console.log(y); // 6 (x ning yangi qiymati y ga berilgan)

// let x = 5;
// let y = x--;
// console.log(x); // 4 (x avval y ga qiymatini beradi, keyin 1 ga kamayadi)
// console.log(y); // 5 (x ning dastlabki qiymati y ga berilgan)

// let x = 5;
// let y = --x;
// console.log(x); // 4 (x avval 1 ga kamayadi)
// console.log(y); // 4 (x ning yangi qiymati y ga berilgan)

// const a = 5;
// const b = "5";
// console.log(a == b); // true, qiymat teng bo'lgani uchun

// const a = 5;
// const b = "5";
// console.log(a === b); // false, chunki turi har xil

// const a = 5;
// const b = 3;
// console.log(a != b); // true, qiymatlar teng emas

// const a = 7;
// const b = 5;
// console.log(a > b); // true, 7 katta 5 dan

// const a = 10;
// const b = 10;
// console.log(a <= b); // true, 10 kichik yoki teng 10 ga

// const a = 5; // a ga 5 qiymati tayinlandi
// console.log(a); // 5

// let a = 5;
// a += 3; // a = a + 3
// console.log(a); // 8

// let a = 10;
// a -= 2; // a = a - 2
// console.log(a); // 8

// let a = 4;
// a *= 3; // a = a * 3
// console.log(a); // 12

// let a = 20;
// a /= 4; // a = a / 4
// console.log(a); // 5

// let a = 2;
// a **= 3; // a = a ** 3
// console.log(a); // 8

// let a = 10;
// a %= 3; // a = a % 3
// console.log(a); // 1

// const isAdult = true;
// const hasTicket = true;

// console.log(isAdult && hasTicket);

// const isStudent = false;
// const isSenior = true;

// console.log(isStudent || isSenior);

// const isMember = false;

// console.log(!isMember);

// const age = 20;
// const hasTicket = true;

// console.log(age >= 18 && hasTicket);

// const result = 5 & 3; // 00000101 & 00000011 = 00000001
// console.log(result); // Natija: 1

// const result = 5 | 3; // 00000101 | 00000011 = 00000111
// console.log(result); // Natija: 7

// const result = 5 ^ 3; // 00000101 ^ 00000011 = 00000110
// console.log(result); // Natija: 6

// const result = ~5; // ~00000101 = 11111010 (ikkilik ko‘rinishda -6)
// console.log(result); // Natija: -6

// const result = 10 + 5 * 2; // Natija: 20 (birinchi 5 * 2, keyin 10 + 10)
// console.log(result);

// const result = 5 > 3 && 10 > 2;
// // Natija: true (solishtirish birinchi, keyin AND bajariladi)
// console.log(result);

// let x = 10;
// x += 5; // x = x + 5; Natija: 15
// console.log(x);

// const result = true || false && !true;
// // Natija: true (birinchi NOT, keyin AND, oxirida OR bajariladi)
// console.log(result)

// const x = 5;
// const y = 10;
// const z = x + y > 15 && y - x < 10; // Natija nima bo'ladi?
// console.log(z);

// const result = 3 + 5 * 2 > 10 && 10 - 5 < 5 || false;
// console.log(result);

// console.log('Kabinetga yonaltirish...');
// console.log('Login sahifasiga yonaltirish...');

// const number = 2;
// if (number > 0) {
//     console.log('Berilgan son musbat');
// }

// console.log("if'dan keyingi qator");

// const score = 59;

// if (score >= 60) {
//     console.log("Tabriklaymiz! Siz imtihondan o'tdingiz.");
// }

// let productPrice = 100; // Mahsulot narxi
// const isMember = true; // Do‘kon a'zosi
// const hasCoupon = true; // Chegirma kuponiga ega

// if (isMember) {
//     console.log("A'zolikka chegirma qo'llanildi: 10%.");
//     productPrice *= 0.9; // 10% chegirma
// }

// if (hasCoupon) {
//     console.log("Kupon chegirmasi qo'llanildi: 5%.");
//     productPrice *= 0.95; // 5% chegirma
// }

// if (productPrice < 50) {
//     console.log("Qo'shimcha chegirma: 5%.");
//     productPrice *= 0.95; // Qo'shimcha 5% chegirma
// }

// console.log(`Jami to'lov: $${productPrice.toFixed(2)}`);

// const number = -2;
// if (number > 0) {
//     console.log('Berilgan son musbat');
// } else {
//     console.log('Berilgan son manfiy');
// }

// // Natija: Berilgan son musbat

// const productId = 67897;
// let price = 100;

// if (productId === 12345) {
//     console.log("Chegirma mavjud!");
//     price *= 0.9; // 10% chegirma
// } else {
//     console.log("Chegirma yo'q.");
// }

// console.log(`Mahsulot narxi: ${price}`);

// const number = -2;
// if (number > 0) {
//     console.log('Berilgan son musbat');
// } else if (number === 0) {
//     console.log('Berilgan son 0');
// } else {
//     console.log('Berilgan son manfiy');
// }

// Natija: Berilgan son musbat

// const age = 60;
// let ticketPrice;

// if (age < 12) {
//     ticketPrice = 5; // Bolalar uchun chegirma
// } else if (age >= 12 && age <= 18) {
//     ticketPrice = 8; // O‘smirlar uchun chegirma
// } else {
//     ticketPrice = 12; // Kattalar uchun narx
// }
// console.log(`Bilet narxi: $${ticketPrice}`);

// // Natija: Bilet narxi: $8

// const isLoggedIn = false; // Foydalanuvchi tizimga kirganmi?
// const isAdmin = true; // Foydalanuvchi adminmi?

// if (isLoggedIn) {
//     if (isAdmin) {
//         console.log("Xush kelibsiz, Admin!");
//     } else {
//         console.log("Xush kelibsiz, Foydalanuvchi!");
//     }
// } else {
//     console.log("Avval tizimga kiring.");
// }

// if/else if
const num = 60;

// if (num > 15) {
//   console.log("15 dan katta.");
// } else if (num > 5) {
//   console.log("5 dan katta, lekin 15 dan kichik.");
// }

// // Bir nechta if
// if (num > 15) {
//     console.log("15 dan katta.");
// }

// if (num > 5) {
//     console.log("5 dan katta.");
// }

// const number = 10;
// let output;

// switch (number) {
//     case 1:
//         output = 'bir';
//         break;
//     case 2:
//         output = 'ikki';
//         break;
//     default:
//         output = 'topilmadi';
//         break;
// }
// console.log(`Qiymat: ${output}`);

// const fruit = "uzum";

// switch (fruit) {
//     case "banan":
//         console.log("Bu banan.");
//         break;
//     case "olma":
//         console.log("Bu olma.");
//         break;
//     case "apelsin":
//         console.log("Bu apelsin.");
//         break;
//     default:
//         console.log("Meva turi aniqlanmadi.");
// }

// // Natija: Bu olma.

// const number = -5;
// const result = number > 0 ? "Positive" : "Negative";
// console.log(result); // Natija: Positive

// const age = 17;
// const canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
// console.log(canVote); // Natija: Yes, you can vote.

// const isLoggedIn = false;
// const message = isLoggedIn ? "Welcome back!" : "Please log in.";
// console.log(message); // Natija: Welcome back!

// const score = 10;
// const grade = score >= 90
//     ? "A"
//     : score >= 80
//         ? "B"
//         : score >= 70
//             ? "C"
//             : "F";
// console.log(grade); // Natija: B

// const fruit = "banan";
// switch (fruit) {
//     case "banan":
//         console.log("Banan");
//         break;
//     case "olma":
//         console.log("Olma");
//         break;
//     default:
//         console.log("Meva turi aniqlanmadi");
// }

// console.log(0);
// console.log(1);
// console.log(2);
// // ...
// console.log(9);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log('Loopdan tashqarida');

// for (let i = 0; i < 5; i++) {
//     console.log("Salom, bu " + i + "-takror!");
// }

// let sum = 0;
// for (let i = 1; i <= 6; i++) {
//     sum += i; // sum = sum + i
// }
// console.log("Yig'indisi: " + sum);
// // 1 + 2 + 3 + 4 + 5 + 6 = 21

// // Natija: Yig'indisi: 15

// for (let i = 0; i >= 0; i++) { // Shart hech qachon false bo'lmaydi
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Loop to'xtatildi, chunki i = 5");
//         break;
//     }
//     console.log(i);
// }

// // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) { // Agar i toq bo'lsa
//         continue; // Toq sonlarni o'tkazib yuboradi
//     }
//     console.log(i); // Faqat juft sonlar chop etiladi
// }

// let i = 0;

// while (i < 10) {
//     console.log('Salom dunyo');
//     i++;
// }
// console.log("While dan keyingi kod qatori...");

// let i = 1, sum = 0;

// while (i <= 5) {
//     sum += i;
//     i++;
// }

// console.log(`Yig'indi: ${sum}`);
// // Natija: Yig'indi: 15

// let parol = "";
// while (parol !== "1234") {
//     parol = prompt("Parolni kiriting:");
// }
// console.log("To'g'ri parol kiritildi!");

// let i = 0;

// while (i < 10) {
//     if (i === 5) {
//         console.log("Loop to'xtatildi, chunki i = 5");
//         break; // Loop to'liq to'xtaydi
//     }
//     console.log(i);
//     i++;
// }

// let i = 0;

// while (i < 10) {
//     i++;
//     if (i % 2 !== 0) {
//         continue; // Toq sonlarni o'tkazib yuboradi
//     }
//     console.log(i); // Faqat juft sonlar chop etiladi
// }

// let i = 0;

// do {
//     console.log('Salom dunyo');
//     i++;
// } while (i < 10)

// let i = 10;

// while (false) {
//     console.log(i);
// }

// do {
//     console.log(i);
//     i++;
// } while (false);

// let parol;

// do {
//     parol = prompt("Parolni kiriting:");
// } while (parol !== "1234");

// console.log("To'g'ri parol kiritildi!");

// function sayHello() {
//     console.log("Salom, dunyo!");
// }
// sayHello(); // Natija: Salom, dunyo!

// function add(num1, num2) {
//     return num1 + num2;
// }
// const result = add(5, 7);
// console.log(result); // Natija: 12

// function sayHello(ism = "Mehmon") {
//     console.log(`Salom, ${ism}!`);
// }
// sayHello(); // Natija: Salom, Mehmon!
// sayHello("Ulugbek"); // Natija: Salom, Ulugbek!

// function sayHello(ism = "Mehmon") {
//     console.log(`Salom, ${ism}!`);
// }
// sayHello(); // Natija: Salom, Mehmon!
// sayHello("Ulugbek"); // Natija: Salom, Ulugbek!

// sayHello(); // Natija: Salom, dunyo!

// function sayHello() {
//     console.log("Salom, dunyo!");
// }

// function sayHello() {
//     console.log("Salom, dunyo!");
// }

// function anotherFunction() {
//     console.log("Bu boshqa funksiyani chaqirayotgan funksiya.");
//     sayHello(); // Oldindan e'lon qilingan funksiyani chaqirish
//     console.log('Another function tugadi...');
// }

// anotherFunction();

// function add(a, b) {
//     return a + b;
// }

// function calculate() {
//     const result = add(5, 7); // add funksiyasini chaqirish
//     console.log("Yig‘indi:", result);
// }

// calculate(); // Natija: Yig‘indi: 12

// function square(value) {
//     return value * value;
// }

// function cube(value) {
//     return value * value * value;
// }

// function calculate(value) {
//     console.log(`${value} ning kvadrati:`, square(value));
//     console.log(`${value} ning kubi:`, cube(value));
// }

// calculate(3);

// function firstFunction() {
//     console.log("Bu birinchi funksiya.");
//     console.log("First function tugadi...");
// }

// function secondFunction() {
//     console.log("Bu ikkinchi funksiya.");
//     firstFunction(); // Birinchi funksiyani chaqirish
//     console.log("Second function tugadi...");
// }

// function thirdFunction() {
//     console.log("Bu uchinchi funksiya.");
//     secondFunction(); // Ikkinchi funksiyani chaqirish
//     console.log("Third function tugadi...");
// }

// thirdFunction();

// const sayHello = function () {
//     console.log("Salom, dunyo!");
// };

// sayHello(); // Natija: Salom, dunyo!

// const add = function (a, b) {
//     return a + b;
// };

// console.log(add(5, 7)); // Natija: 12

// const sayHello = function (ism = "Do‘st") {
//     console.log(`Salom, ${ism}!`);
// };

// sayHello(); // Natija: Salom, Do‘st!
// sayHello("Ulugbek"); // Natija: Salom, Ulugbek!

// const calculate = function add(a, b) {
//     return a + b;
// };

// console.log(calculate(3, 4)); // Natija: 7
// // console.log(add(3, 4)); // Xato: add is not defined

// const sayHello = () => {
//     console.log("Salom, dunyo!");
// };

// sayHello(); // Natija: Salom, dunyo!

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(5, 7)); // Natija: 12

// const add = (a, b) => a + b;
// console.log(add(5, 7));

// const cube = (x) => x * x * x;
// console.log(cube(3)); // Natija: 27

// const sayHello = () => "Salom, dunyo!";

// console.log(sayHello()); // Natija: Salom, dunyo!

// const square = x => x * x;
// console.log(square(4)); // Natija: 16

// const fruits = ["olma", "banan", "olcha"];
// console.log(fruits);

// const fruits = new Array("olma", "banan", "olcha");
// console.log(fruits);

// const fruits = ["olma", "banan", "olcha", "gilos"];
// console.log(fruits[0]); // Natija: "olma"
// console.log(fruits[1]); // Natija: "banan"
// console.log('Uzunligi', fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// const fruits = ["olma", "banan"];
// fruits.push("olcha");
// console.log(fruits); // Natija: ["olma", "banan", "olcha"]

// const fruits = ["olma", "banan", "olcha"];
// const removed = fruits.pop();
// console.log(fruits); // Natija: ["olma", "banan"]
// console.log(removed); // Natija: "olcha"

// const fruits = ["olma", "banan", "olcha"];
// const removed = fruits.shift();
// console.log(fruits); // Natija: ["banan", "olcha"]
// console.log(removed); // Natija: "olma"

// const fruits = ["banan", "olcha"];
// fruits.unshift("olma");
// console.log(fruits); // Natija: ["olma", "banan", "olcha"]

// const numbers = [1, 2, 3];
// console.log(numbers);

// // Oxiriga qo'shish
// numbers.push(4);
// console.log(numbers); // Natija: [1, 2, 3, 4]

// // Oxiridan o'chirish
// numbers.pop();
// console.log(numbers); // Natija: [1, 2, 3]

// // Boshiga qo'shish
// numbers.unshift(0);
// console.log(numbers); // Natija: [0, 1, 2, 3]

// // Boshidan o'chirish
// numbers.shift();
// console.log(numbers); // Natija: [1, 2, 3]

// const numbers = [1, 2, 3, 4];
// console.log(numbers);

// numbers.reverse();
// console.log(numbers); // [4, 3, 2, 1]

// const fruits = ["olma", "banan", "olcha"];

// // // Elementni o'zgartirish
// // fruits[0] = "uzum";

// // // Yangi element qo'shish
// // fruits.push("gilos");

// // console.log(fruits); // ["uzum", "banan", "olcha", "gilos"]

// console.log(typeof fruits);

// const fruits = ["olma", "banan", "olcha", "uzum"];
// const slicedFruits = fruits.slice(1, 3);

// console.log(slicedFruits); // ["banan", "olcha"]
// console.log(fruits);       // ["olma", "banan", "olcha", "uzum"]

// const fruits = ["olma", "banan", "olcha", "uzum"];

// const part = fruits.slice(2);
// console.log(part); // ["olcha", "uzum"]

// const fruits = ["olma", "banan", "olcha", "uzum"];

// const part = fruits.slice(-3, -1);
// console.log(part); // ["banan", "olcha"]

// const fruits = ["olma", "banan", "olcha", "uzum"];
// const removed = fruits.splice(1, 2);

// console.log(fruits);  // ["olma", "uzum"]
// console.log(removed); // ["banan", "olcha"]

// const fruits = ["olma", "uzum"];
// fruits.splice(1, 0, "banan", "olcha");

// console.log(fruits); // ["olma", "banan", "olcha", "uzum"]

// const fruits = ["olma", "banan", "olcha", "uzum"];
// fruits.splice(1, 2, "gilos", "xurmo");

// console.log(fruits); // ["olma", "gilos", "xurmo", "uzum"]

// const numbers = [1, 2, 3, 4, 5];

// // `slice` bilan nusxa olish
// const sliced = numbers.slice(1, 4);
// console.log(sliced); // [2, 3, 4]
// console.log(numbers); // [1, 2, 3, 4, 5]

// // `splice` bilan o'zgartirish
// const spliced = numbers.splice(1, 3, 9, 10);
// console.log(spliced); // [2, 3, 4]
// console.log(numbers); // [1, 9, 10, 5]

// const findNumber = (num, i, array) => {
//     console.log('Asl array', array);
//     console.log('Element', num);
//     console.log('Index', i);
//     return num > 3
// };

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.find(findNumber);

// console.log(result); // 4 (birinchi shartga mos kelgan element)

// const numbers = [1, 2, 3];
// const result = numbers.find(num => num > 5);

// console.log(result); // undefined

// const numbers = [1, 2, 3, 4, 5];
// const filtered = numbers.filter(num => num > 2);

// console.log(filtered); // [3, 4, 5]
// console.log(numbers);

// const numbers = [1, 2, 3];
// const filtered = numbers.filter(num => num > 5);

// console.log(filtered); // []

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };
// console.log(engineer);

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };

// console.log(engineer.languages); // Ulugbek

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "7 years",
//     languages: ["JS", "Python", "PHP"]
// };

// console.log(engineer['ism']); // Ulugbek

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };

// // Mavjud qiymatni o'zgartirish
// engineer.age = 28;

// // Yangi qiymat qo'shish
// engineer.isActive = true;

// console.log(engineer);

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "7 years",
//     languages: ["JS", "Python", "PHP"]
// };

// // "delete" operatoridan foydalanamiz
// delete engineer.age;

// console.log(engineer);

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "7 years",
//     languages: ["JS", "Python", "PHP"],
//     address: {
//         country: 'Uzbekistan',
//         city: 'Tashkent'
//     }
// };

// console.log(engineer.address.city); // Natija: Tashkent

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "7 years",
//     languages: ["JS", "Python", "PHP"],
//     address: {
//         country: 'Uzbekistan',
//         city: 'Tashkent'
//     },
//     sayHello: function () {
//         console.log('Salom!');
//     }
// };

// engineer.sayHello(); // Natija: Salom!

// const obj1 = { name: "Ulugbek", age: 27 };
// const obj2 = obj1; // obj2 obj1 ning reference'ini oladi

// obj1.age = 30;

// console.log(obj1.age); // 30 (obj1 ham o‘zgardi!)
// console.log(obj2.age); // 30

// const arr1 = [1, 2, 3];
// const arr2 = arr1; // arr2 arr1 ning reference'ini oladi

// arr2[0] = 99;

// console.log(arr1); // [99, 2, 3] (arr1 ham o'zgardi)
// console.log(arr2); // [99, 2, 3]

// console.log(typeof arr1);

// const fruits = ['olma', 'banan', 'olcha'];
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];
// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);

// const fruits = ["olma", "banan", "olcha"];

// // Massivdan qiymatlarni ajratish
// const [first, second, third] = fruits;

// console.log(first); // Natija: olma
// console.log(second); // Natija: banan
// console.log(third); // Natija: olcha

// const fruits = ["olma", "banan", "olcha", "uzum"];

// // Faqat birinchi va to'rtinchi elementni olish
// const [first, , , fourth] = fruits;

// console.log(first); // Natija: olma
// console.log(fourth); // Natija: uzum

// const engineer = {
//     name: "Ulugbek",
//     age: 27
// }

// const firstname = engineer.name;
// const age = engineer.age;
// console.log(firstname);
// console.log(age);

// const engineer = {
//     name: 'Ulugbek',
//     age: 27
// };

// // Obyektdan qiymatlarni olish
// const { name, age } = engineer;

// console.log(name); // Natija: Ulugbek
// console.log(age); // Natija: 27

// const engineer = {
//     name: 'Ulugbek',
//     age: 27
// };

// // O'zgacha nomlar bilan ajratish
// const { name: firstname, age } = engineer;

// console.log(firstname); // Natija: Ulugbek
// console.log(age); // Natija: 27

// const engineer = {
//     name: 'Ulugbek',
//     age: 27,
//     experience: "9 years"
// };

// // Experience yo'q, default qiymat "Aniqlanmagan"
// const { name, experience = "Aniqlanmagan" } = engineer;

// console.log(experience); // Natija: Aniqlanmagan

// const engineer = {
//     name: 'Ulugbek',
//     age: 27,
//     address: {
//         country: 'Uzbekistan',
//         city: 'Tashkent'
//     }
// };

// // Ichki obyektni ajratish
// const { address } = engineer;
// const { country, city } = address;

// console.log(country); // Natija: Uzbekistan
// console.log(city); // Natija: Tashkent
// console.log(address);

// const engineer = {
//     name: 'Ulugbek',
//     age: 27
// };

// function sayHello({ name, age }) {
//     return `Salom, mening ismim ${name}, yoshim ${age}.`;
// }

// console.log(sayHello(engineer));
// // Natija: Salom, mening ismim Ulugbek, yoshim 27.

// const fruits = ["olma", "banan", "olcha"];
// const newFruits = [...fruits, "gilos", "uzum"];

// console.log(newFruits);
// // Natija: ["olma", "banan", "olcha", "gilos", "uzum"]

// const jsFrameworks = ["Angular", "React", "Vue"];
// const pythonFrameworks = ["Django", "FastAPI"];

// const mergedFrameworks = [...jsFrameworks, ...pythonFrameworks];
// console.log(mergedFrameworks);
// // Natija: ["Angular", "React", "Vue", "Django", "FastAPI"]

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };
// const engineerWithStatus = { ...engineer, isActive: true };

// console.log(engineerWithStatus);

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };
// const education = { faculty: "Software Engineering", university: "IUT" };

// const engineerWithEducation = { ...engineer, ...education };
// console.log(engineerWithEducation);

// function sum(...numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5, 6)); // Natija: 15

// function separate(a, b, ...qolganQiymatlar) {
//     console.log("a:", a); // Birinchi qiymat
//     console.log("b:", b); // Ikkinchi qiymat
//     console.log("Qolgan qiymatlar:", qolganQiymatlar); // Qolgan barcha qiymatlar
// }

// separate(1, 2, 3, 4, 5);
// // Natija:
// // a: 1
// // b: 2
// // Qolgan qiymatlar: [3, 4, 5]

// const engineer = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };

// const { name, ...anotherProperties } = engineer;

// console.log(name);
// console.log(anotherProperties);

// const originalArray = [1, 2, 3, 4];
// const newArray = [...originalArray];

// console.log(newArray); // Natija: [1, 2, 3, 4]

// // Asl massivni o'zgartirish nusxaga ta'sir qilmaydi
// originalArray[0] = 100;
// console.log(originalArray); // Natija: [100, 2, 3, 4]
// console.log(newArray);    // Natija: [1, 2, 3, 4]

// const originalArray = [[1, 2], [3, 4]];
// const newArray = [...originalArray];

// // Asl massivni o'zgartirish nusxaga ta'sir qiladi (yuzaki nusxa)
// originalArray[0][0] = 100;
// console.log(originalArray); // Natija: [[100, 2], [3, 4]]
// console.log(newArray);    // Natija: [[100, 2], [3, 4]]

// const originalObject = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"]
// };
// const newObject = { ...originalObject };

// console.log(newObject);

// // Asl obyektni o'zgartirish nusxaga ta'sir qilmaydi
// originalObject.age = 28;

// console.log(originalObject);
// console.log(newObject);

// const originalObject = {
//     name: "Ulugbek",
//     age: 27,
//     experience: "9 years",
//     languages: ["JS", "Python", "PHP"],
//     address: {
//         country: "Uzbekistan",
//         city: "Tashkent"
//     }
// };

// const newObject = { ...originalObject };

// // Ichki obyektni o'zgartirish nusxaga ta'sir qiladi
// originalObject.address.country = "Singapore";
// console.log(originalObject);
// console.log(newObject);

// const greeting = `Salom, mening ismim Ulugbek.`;
// console.log(greeting);
// // Natija: Salom, mening ismim Ulugbek.

// const name = "Ulugbek";

// const greeting = `Salom, mening ismim ${name}.`;
// console.log(greeting);
// // Natija: Salom, mening ismim Ulugbek;

// const number1 = 10;
// const number2 = 20;

// const result = `10 + 20 = ${number1 + number2}`;
// console.log(result);
// // Natija: 10 + 20 = 30

// // Oddiy satr bilan
// const text = "Bu birinchi qator.\nBu ikkinchi qator.";
// console.log(text);

// // Template literal bilan
// const textWithTemplateLiteral = `Bu birinchi qator.
// Bu ikkinchi qator.`;
// console.log(textWithTemplateLiteral);

// function sayHello(name) {
//     return `Salom, ${name}!`;
// }

// const name = "Ulugbek";
// const greeting = `Funksiya natijasi: ${sayHello(name)}`;
// console.log(greeting);
// // Natija: Salom, Ulugbek!

// const product = "Laptop";
// const price = 1500;
// const message = `Mahsulot: ${product}, Narx: ${price} USD`;
// console.log(message);
// // Natija: Mahsulot: Laptop, Narx: 1500 USD

// const matn = `Bu birinchi qator.
// Bu ikkinchi qator.
// Bu uchinchi qator.`;
// console.log(matn);

const x = 5;
const y = 10;
const result = `5 * 10 = ${x * y}`;
console.log(result);
// Natija: 5 * 10 = 50