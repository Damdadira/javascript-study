//static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  static makeRandomFruit() {
    return new Fruit('banana', '바나나');
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '사과');
console.log(apple);
