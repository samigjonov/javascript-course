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

const result = ~5; // ~00000101 = 11111010 (ikkilik ko‘rinishda -6)
console.log(result); // Natija: -6