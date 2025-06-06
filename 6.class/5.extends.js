class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('주황');
console.log(tiger);
tiger.sleep();

class Dog extends Animal {
  constructor(color, owerName) {
    super(color);
    this.owerName = owerName;
  }
  play() {
    console.log('놀자');
  }
  eat() {
    super.eat();
    console.log('강아지가 먹는다');
  }
}

const dog = new Dog('하얀', '엘리');
console.log(dog);
dog.play();
dog.sleep();
dog.eat();
