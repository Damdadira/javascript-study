//유일한 키를 생성할 수 있음(map, object에서 유용하게 사용)
const map = new Map();
// const key1 = 'key'; //문자열이 똑같은 값이라 k1으로 값을 넣어도 k2도 hello로 출력
// const key2 = 'key';
const key1 = Symbol('key'); //문자열이 똑같지만 서로 다른 값으로 봄
const key2 = Symbol('key');
map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2);

//문자열에 대해 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
//전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(Symbol.keyFor(k1)); //key ->레지스트리를 통해서 만듦
console.log(Symbol.keyFor(key1)); //undefined ->레지스트리를 통해서 만들지 않음

const obj = { [k1]: 'hello', [Symbol('key')]: 1 }; //여기 Symbol과
console.log(obj); //{ [Symbol(key)]: 'hello', [Symbol(key)]: 1 }
console.log(obj[k1]); //hello
console.log(obj[Symbol('key')]); //여기 Symbol은 달라서 접근할 수 없음(undefined)
