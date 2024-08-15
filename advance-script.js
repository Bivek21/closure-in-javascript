// function f() {
//   let a = "a";
//   if (true) {
//     let a = "zzz";
//     console.log(a);
//   }
// }
// f();

// function f() {
//   let counter = 0;

//   return function () {
//     return counter++;
//   };
// }
// const v1 = f();
// console.log(v1());
// console.log(v1());
// console.log(v1());
// console.log(v1());
// console.log(v1());
let counter = 0;

for (let i = 0; i < 5; i++) {
  function print() {
    console.log(i + "but counter is  " + counter++);
  }

  setTimeout(print, 0);
}
