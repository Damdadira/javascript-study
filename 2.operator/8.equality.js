//동등 비교 관계 연산자
/**
 * == 값이 같음
 * != 값이 다름
 * === 값과 타입이 둘다 같음(제일 많이 쓰임!!)
 * !== 값과 타입이 다름
 */

console.log(2 == 2); //true
console.log(2 !== 2); //false
console.log(2 !== 3);
console.log(2 == '2'); //true ->타입은 다르지만 숫자가 같음
console.log(2 === '2'); //false ->타입이 다름
console.log(true == 1); //true=1, false=0
console.log(true === 1); //false ->타입이 다름
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
  //0x111
  name: 'js',
};

const obj2 = {
  //0x112
  name: 'js',
};

console.log(obj1 == obj2); //false ->서로 다른 메모리 주소를 가지고 있음
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name); //true ->값이 같음
console.log(obj1.name === obj2.name); //true

let obj3 = obj2;
console.log(obj3 == obj2); //true-> 값도 똑같고, 동일한 메모리 주소라
console.log(obj3 === obj2); //true
