const textObj = new String('hello world');
const text = 'hello world';
console.log(textObj);
console.log(text);
console.log(text.length); //문자의 총 길이

console.log(text[0]); //_번째 있는 문자는?
console.log(text[3]);
console.log(text[8]);
console.log(text.charAt(0));
console.log(text.charAt(3));
console.log(text.charAt(8));

console.log(text.indexOf('l')); //이 문자가 몇번째 있는지(앞에서 부터)
console.log(text.lastIndexOf('l')); //뒤에서 부터

console.log(text.includes('tx')); //이 문자를 포함하는지
console.log(text.includes('d'));

console.log(text.startsWith('he')); //이걸로 시작하는지 아닌지
console.log(text.endsWith('d')); //이걸로 끝나는지 아닌지

console.log(text.toUpperCase()); //모두 대문자로
console.log(text.toLowerCase()); //모두 소문자로

console.log(text.substring(0, 2)); //시작 위치부터 _번째까지 문자를 가져오겠다
console.log(text.slice(2)); //자르고 그 뒤에부터 가져오겠다(앞에서 부터)
console.log(text.slice(-2)); //뒤에서 부터

const space = '             sapce'; //공백 많음
console.log(space.trim()); //공백제거

const longText = 'get to the point';
console.log(longText.split(' ')); //스페이스바로 눌러진 부분을 끊어주겠다
console.log(longText.split(' ', 2)); //끊어진 부분 중 2개만 출력
