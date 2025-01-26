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

const fruit = "banan";
switch (fruit) {
    case "banan":
        console.log("Banan");
        break;
    case "olma":
        console.log("Olma");
        break;
    default:
        console.log("Meva turi aniqlanmadi");
}