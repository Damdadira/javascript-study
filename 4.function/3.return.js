//return을 명시적으로 하지 않으면 자동으로 undefined가 반환됨!
function add(a, b) {
  //return a + b;
  return undefined;
}
const result = add(1, 2);
console.log(result);

function print(text) {
  console.log(text);
}
const result2 = print('안녕!');
console.log(result2);

//return을 함수 중간에 삽입하게 되면 함수가 종료됨!
//사용 예: 조건이 맞지 않는 경우 함수 도입 부분에서 함수를 일찍이 종료함!
function out(num) {
  if (num < 0) {
    return; //0보다 작으면 종료
  }
  console.log(num);
}
out(12);
out(-12);
