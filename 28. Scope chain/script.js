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

function testFunction() {
    let localVariable = "Men funksiya ichidaman!";
    console.log(localVariable); // Men funksiya ichidaman!
}

testFunction();
console.log(localVariable); // Xatolik! localVariable mavjud emas