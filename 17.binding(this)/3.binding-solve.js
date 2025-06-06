//정적 바인딩으로 만들기
function Cat(name) {
  //2. arrow 함수를 사용: arrow 함수는 만드는 그 순간 렉시컬 환경에서의 this를 기억한다
  //화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.name = name;
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  //1. bind함수를 이용해서 수동적으로 바인딩 해주기
  //this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName();
}
printOnMonitor(cat.printName);
