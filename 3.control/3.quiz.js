//num의 숫자가 짝수이면 '업', 홀수이면 '다운'을 출력하도록
let num = 2;

//if
if (num % 2 === 0) {
  console.log('업');
} else {
  console.log('다운');
}

//ternary
num % 2 === 0 ? console.log('업') : console.log('다운');
