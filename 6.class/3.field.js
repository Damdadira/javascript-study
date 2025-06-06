//접근제어자 - 캡슐화(내부에서는 사용 가능하지만 외부에서는 사용 불가능)
//private(#), public(기본), protexted
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '사과');
//apple.#name = '오렌지'; ->#field는 외부에서 접근이 불가능함
console.log(apple);
