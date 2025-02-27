// const globalVariable = "Men globalman!";

// function testFunction() {
//     console.log(globalVariable); // Men globalman!
// }

// testFunction();
// console.log(globalVariable); // Men globalman!


// function testFunction() {
//     let localVariable = "Men funksiya ichidaman!";
//     console.log(localVariable); // Men funksiya ichidaman!
// }

// testFunction();
// console.log(localVariable); // Xatolik! localVariable mavjud emas

// if (true) {
//     let blockVariable = "Men blok ichidaman!";
//     console.log(blockVariable); // Men blok ichidaman!
// }

// console.log(blockVariable); // Xatolik! blockVariable mavjud emas

// const globalVar = "Men globalman!";

// function outerFunction() {
//     const outerVar = "Men tashqi funksiya ichidaman!";

//     function innerFunction() {
//         const innerVar = "Men ichki funksiya ichidaman!";
//         console.log(globalVar); // Men globalman!
//         console.log(outerVar); // Men tashqi funksiya ichidaman!
//         console.log(innerVar); // Men ichki funksiya ichidaman!
//         // console.log(notDefinedVar);
//     }

//     innerFunction();
// }

// outerFunction();

// if (true) {
//     let a = "let";
//     const b = "const";
//     var c = "var";
// }
// // console.log(a); // Xato: a aniqlanmagan
// // console.log(b); // Xato: b aniqlanmagan
// console.log(c); // Ishlaydi, chunki `var` blok scope'ni hisobga olmaydi

// function testFunction() {
//     let localVariable = "Men funksiya ichidaman!";
//     console.log(localVariable); // Men funksiya ichidaman!
// }

// testFunction();
// console.log(localVariable); // Xatolik! localVariable mavjud emas

// function sayHello(name) {
//     console.log("Salom, " + name);
// }

// sayHello("Ulugbek"); // Natija: Salom, undefined

// function sayHello(name = "mehmon") {
//     console.log("Salom, " + name);
// }

// sayHello(); // Natija: Salom, mehmon
// sayHello("Ulugbek"); // Natija: Salom, Ulugbek

// function sum(...numbers) {
//     let total = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }

//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5)); // Natija: 10

// function introduce({ name, age }) {
//     console.log(`Mening ismim ${name} va yoshim ${age}.`);
// }

// introduce({ name: "Ulugbek", age: 27 });
// // Natija: Mening ismim Ulugbek va yoshim 27.

// function showCoordinates([x, y]) {
//     console.log(`X: ${x}, Y: ${y}`);
// }

// showCoordinates([10, 20]);
// // Natija: X: 10, Y: 20

// function example(a, b) {
//     console.log(a, b);
// }

// example(1, 2); // Natija: 1, 2

// function sayHello(name = "mehmon") {
//     console.log("Salom, " + name);
// }

// sayHello(); // Natija: Salom, mehmon

// function example(a, ...rest) {
//     console.log(a, rest);
// }

// example(1, 2, 3, 4); // Natija: 1, [2, 3, 4]

// function example(a, b, ...others) {
//     console.log(a, b, others);
// }

// example(1, 2, 3); // Natija: 1, 2 (3 e’tiborsiz qoldiriladi)

function example(a, b) {
    console.log(a, b);
}

example(1); // Natija: 1, undefined