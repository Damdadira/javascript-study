/**
 * 논리연산자
 * && 그리고 ->둘 다 만족해야 true
 * || 또는 ->둘 중 하나라도 만족하면 true
 * ! 부정
 * !! 불리언값으로 변환(true, false)
 */

let num = 7;
if (num != 9) {
  console.log('gooooood!');
}

console.log(true && true); //true
console.log(true && false); //false ->두개 중 하나라도 다르면
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.clear();

console.log(!'text'); //false
console.log(!!'text'); //true
