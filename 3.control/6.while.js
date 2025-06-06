//while(조건) {}
//조건이 false가 될때까지 {} 코드를 반복 실행

let num = 5; //계속 반복(무한 루프)
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('아직 살아있다!');
  if (i === 10) {
    break;
  }
  i++;
}

//do {} while(isActive) ->꼭 한번은 실행해야 할 때 사용
