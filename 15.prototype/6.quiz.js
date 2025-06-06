//클래스를 베이스로한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('같이 놀자옹!');
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('사냥하자!');
  }
}

const dog1 = new Dog('멍멍', '강아지', '엘리');
const tiger1 = new Tiger('어흥', '호랑이');
console.log(dog1);
dog1.printName();
dog1.play();
console.log(tiger1);
tiger1.printName();
tiger1.hunt();
