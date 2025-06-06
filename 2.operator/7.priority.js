//연산자 우선순위
let a = 2;
let b = 3;

let result = a + b * 4; //b * 4 + a ->14
console.log(result);
result = (a + b) * 4; //(a + b) * 4 ->20
console.log(result);
