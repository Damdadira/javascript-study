const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); //number
console.log(typeof num2); //object

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// if (num === Number.NaN) {
// }
// if (Number.isNaN(num1)) {
// }

//지수표기법(매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 123.456;
console.log(num4.toFixed());

console.log(num4.toString()); //숫자열을 문자열로
console.log(num4.toLocaleString('ar-EG')); //그 나라에 맞는 언어로(아랍어)

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); //전체 자릿수 표기가 안될때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

const num = 0.1 + 0.4 - 0.2; //0.3
console.log(num);

function isEqual(original, expected) {
  //함수 2개가 같은지 비교해주는거
  //return original === expected; //비교만함(num=0.1, 0.1비교할때 true가 나와야하는데 num이 실제로는 0.10000000이라 false)
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 1)); //fasle
console.log(isEqual(num, 0.1)); //false
