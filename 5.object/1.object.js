//Object Literal {key: value}
//new objcet();
//object.creat();
//key - 문자, 숫자, 문자열, 심볼
//value - 원시값, 객체(함수)

let apple = {
  name: 'apple',
  hello: '안녕',
  0: 1,
  ['bye']: '잘가',
};

//속성, 데이터에 접근하기 위해서는
console.log(apple.name);
apple.name; //마침표 표기법(dot notation)
console.log(apple['hello']); //대괄호 표기법(bracket notation)
apple['name'];

//속성 추가
apple.emoji = '사과';
console.log(apple.emoji);
console.log(apple);

//속성 삭제
delete apple.emoji;
console.log(apple);
