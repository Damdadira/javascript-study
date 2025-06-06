//함수 선언문 function name() {}
//함수 표현식 const name = function() {}
let add = function (a, b) {
  return a + b;
};
console.log(add(3, 4));

/**
 * 화살표 함수
 * fuction name() {}
 * const name = () => {}
 */
const sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 4));

const mutiple = (x, y) => {
  return x * y;
};
console.log(mutiple(3, 4));

//생성자 함수 const object = new Function(); ->뒤에 객체편에서 다룸

//IIFE(Immediately Invoked Function Expression)->즉각적으로 호출되는 함수
(function run() {
  console.log('good!');
})();
