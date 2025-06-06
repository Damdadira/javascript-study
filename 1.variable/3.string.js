let string = '안녕! 나는 영아야!';
console.log(string);
string = "'안녕!'"; //따옴표 사용하고 싶을 때
console.log(string);

//줄바꿈, 띄어쓰기
string = '안녕!\n 내이름은\t영아야!';
console.log(string);

//템플릿 리터럴(Template Literal)
let id = '영아';
let greetings = '안녕!, ' + id + '\n즐거운 하루 보내요!';
console.log(greetings);

greetings = `안녕, ${id} 
즐거운 하루 보내!`;
console.log(greetings);
