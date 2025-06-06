/**
 * 동결!
 * Object.freeze -> 추가, 삭제, 쓰기, 속성 재정의 XXX
 * (단, 얕은 꽁꽁 얼림!)
 * */
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '강아지', owner: ellie };
Object.freeze(dog); //동결된 객체는 수정, 추가, 삭제가 안됨
dog.name = '멍멍';
console.log(dog); //변경X
ellie.name = '엘리당'; //참조하는 객체까지는 꽁꽁 얼려주지 않음(얕은 레벨만)
console.log(dog); //변경O

/**
 * 밀봉!
 * Object.seal -> 값의 수정은 가능하나
 * 추가, 삭제 속성 재정의 XXX
 */
const cat = { ...dog };
//Object.assign(cat, dog); //복사해옴
console.log(cat);
Object.seal(cat);
cat.name = '냐옹';
console.log(cat); //수정O
delete cat.emoji;
console.log(cat); //삭제X

console.log(Object.isFrozen(dog)); //동결되었는지 확인
console.log(Object.isSealed(cat)); //밀봉되었는지 확인

//확장 금지 추가만 안됨!
const tiger = { name: '어흥' };
Object.preventExtensions(tiger); //새로운 속성이 객체에 추가되는 것을 방지
console.log(Object.isExtensible(tiger)); //확장 가능한지 확인
tiger.name = '어흐흥';
console.log(tiger); //수정O
delete tiger.name;
console.log(tiger); //삭제O
tiger.age = 1;
console.log(tiger); //추가X
