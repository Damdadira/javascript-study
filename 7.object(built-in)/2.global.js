console.log(globalThis); //global객체 출력(전역적으로 사용 가능)
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.log(this); //현재 모듈에 있는 정보를 출력

eval('const num = 2; console.log(num)'); //문자열 형태로 작성하면 값으로 평가
console.log(isFinite(1)); //숫자가 유한한지 확인 ->true
console.log(isFinite(Infinity)); //무한대라 false

console.log(parseFloat('12.43')); //문자열 안에 있는 숫자(소수)를 숫자열(타입)로 변환
console.log(parseInt('12.43')); //문자열 안에 들어있는 숫자를 정수로 변환
console.log(parseInt('11'));

//URL (URI, Uniform Resource Identifier 하위 개념)
//아스키 문자로만 구성되어야 함
//한글이나 특수문자는 이스케이프 처리 해야 한다 ->정해진 다른 문자로 변환해줘야 한다
const URL = 'https://드림코딩/com';
const encoded = encodeURI(URL); //이스케이프 처리
console.log(encoded);

const decoded = decodeURI(encoded); //다시 원래대로
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
