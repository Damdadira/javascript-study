//데이터 타입을 확인
let variable;
console.log(typeof variable); //undifined

variable = '';
console.log(typeof variable); //string

variable = 123;
console.log(typeof variable); //number

variable = {};
console.log(typeof variable); //object

variable = function () {};
console.log(typeof variable); //function

variable = Symbol;
console.log(typeof variable); //function

console.log(typeof 123); //number
console.log(typeof '123'); //string
