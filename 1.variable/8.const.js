//let은 재할당이 가능
let a = 1;
a = 2;
console.log(a);

//const는 재할당이 불가능
const text = 'hello';
//text = 'hi'; ->에러 발생
console.log(text);

const apple = {
  name: 'apple',
  color: 'red',
};
//apple = {}; ->에러 발생
console.log(apple);
apple.name = 'orange';
console.log(apple); //{name: orange, color: red}
