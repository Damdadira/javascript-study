const dog = { name: '와우', emoji: '강아지' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog); //name이라는 객체에 dog가 있니? true
console.log(dog.hasOwnProperty('name')); //위랑 똑같음 true

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors); //여러개를 받아올 때

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc); //하나만 받아올 때(s 없음)

/**
 * writable: 수정(변경, 추가, 제거) ->방지하고 싶으면 Object.freeze() 함수 사용
 * enumerable: 열거(반복문으로 접근 가능)
 * configurable: 삭제 방지 ->해당 속성을 잠그고, enumerable, configurable을 다시 변경하는 것을 방지(단, writable은 가능)
 */

//하나의 객체
Object.defineProperty(dog, 'name', {
  //수정할게
  value: '멍멍', //값을 멍멍으로
  writable: false, //값 수정 안돼
  enumerable: false, //열거 안해
  configurable: false, //키 수정 안돼
});
console.log(dog.name);

//여러개의 객체
const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
