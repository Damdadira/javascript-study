//단항연산자
let a = 5;
a = -a;
console.log(a); //-5
a = -a;
console.log(a); //5

a = -a; //-5
a = +a; //+(-5)
console.log(a); //-5

let boolean = true;
console.log(boolean); //true
console.log(!boolean); //flase
console.log(!!boolean); //true

console.clear();

//+ 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.log(+false); //0
console.log(+null); //0
console.log(+''); //0
console.log(+true); //1
console.log(+'text'); //NaN
console.log(+undefined); //NaN
