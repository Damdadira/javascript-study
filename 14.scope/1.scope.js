//코드 블럭: {}, if() {}, for() {}, function() {}
//블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음
{
  const a = 'a';
  console.log(a);
}
//console.log(a); ->접근 불가능해서 출력 안됨(crush)
const b = 'b';

//함수 외부에서는 함수 내부의 변수를 참조할 수 없음
function print() {
  const message = 'hello world!';
  console.log(message); //출력
}
console.log(message); //출력X

//함수 외부에서는 함수의 매개변수를 참조할 수 없음
function sum(a, b) {
  console.log(a, b); //출력
}
console.log(a, b); //출력X
