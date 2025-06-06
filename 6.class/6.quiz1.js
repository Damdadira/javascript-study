//카운터 만들기
//0 이상의 값으로 초기화 한 뒤 하나씩 증가할 수 있는 카운터를 만들기
//Counter 클래스 만들기
class Counter {
  #value;
  constructor(startVaule) {
    if (isNaN(startVaule) || startVaule < 0) {
      this.#value = 0;
    } else {
      this.#value = startVaule;
    }
  }
  get vaule() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.vaule);
