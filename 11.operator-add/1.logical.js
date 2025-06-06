/**
 * 논리연산자 logical Operator
 * && 그리고 ->둘 다 만족해야 true
 * || 또는 ->둘 중 하나라도 만족하면 true
 * 단축평가: short-circuit evaluation
 */

const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: 'Ellie' };

//조건문 안에 있음
if (obj1 || obj2) {
  //값이 들어있으니까
  console.log('둘다 true!'); //true
}

//조건문 밖에 있음(단축평가->obj1이 true이기 때문에 단축평가해서 obj2의 값을 바로 출력)
let result = obj1 && obj2; //{ name: '고양이', owner: 'Ellie' }
console.log(result);

//(단축평가->obj1이 true이기 때문에 단축평가 해서 바로 obj1원 출력->하나만 만족해도 true이니까)
result = obj1 || obj2; //{ name: '강아지' }
console.log(result);

/**
 * 활용 예
 * && 연산자는 조건이 true일 때, 무언가를 해야 할 경우에 사용
 * || 연산자는 조건이 false일 때, 무언가를 해야 할 경우에 사용
 */
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐 주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운 주인!';
}
obj1.owner && changeOwner(obj1); //obj1에 주인이 있으면 obj1을 호출해라
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price; //item이 true이면 item.price를 출력해라
console.log(price);

/**
 * 기본값을 설정
 * default parameter은 전달하지 않거나, undefined인 경우에만 설정
 * || 연산자는 값이 false한 경우 설정(할당): 0, -0, null, undefined, ''(빈 문자열)
 */
function print(message) {
  const text = message || 'hello'; //text에 message가 false라면 'hello'출력해라
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
