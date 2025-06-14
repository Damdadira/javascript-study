//조건문
//정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우
let day = 3;
let dayName;

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음');
}
console.log(dayName);

let condition = 'okay';
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
}
console.log(text);

let eat = '상한';
let testy;
switch (eat) {
  case '과일':
    text = '맛있다';
    break;
  case '상한 과일':
    text = '맛없다';
    break;
  default:
    text = '과일이 아닙니다';
}
console.log(text);
