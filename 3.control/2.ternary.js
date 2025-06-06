//삼항 조건 연산자
//조건식 ? 참인 경우 : 거짓인 경우
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('사과');
} else {
  console.log('오렌지');
}

fruit === 'apple' ? console.log('사과') : console.log('오렌지');

let emoji = fruit === 'apple' ? '사과' : '오렌지';
console.log(emoji);
