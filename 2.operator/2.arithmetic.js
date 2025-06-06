//산술연산자(+ - * / %(나머지값) **(제곱))
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(5 ** 3);

//+ 연산자 주의점
let text = '오늘도 ' + '화이팅';
console.log(text); //가능
text = 1;
console.log(text);
text = '1' + 2; //숫자와 문자열을 더하면 문자열로 변환
console.log(text); //숫자는 노랑색, 문자열은 흰색으로 출력됨
