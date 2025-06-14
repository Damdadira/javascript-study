/**엄격 모드 Strict mode
 * 자바스크립트가 묵인했던 에러들의 에러 메시지를 발생시킴
 * 엄격하게 문법 검사를 하겠다
 * 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
 */
'use strict';
var x = 1;
//delete x;

function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this); //undefined
}
add(1);

const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
