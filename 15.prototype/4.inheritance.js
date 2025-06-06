//프로토타입을 베이스로 한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  //super(name, emoji)
  Animal.call(this, name, emoji); //부모 호출
  this.owner = owner; //나 자신 호출
}
//Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자!');
};

const dog1 = new Dog('멍멍', '강아지', '엘리');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', '호랑이');
tiger1.hunt();
tiger1.printName();

//누구를 상속하고 있는지 알고 있음(어떤 프로토타입을 따르고 있는지)
console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //true
console.log(dog1 instanceof Tiger); //false
console.log(tiger1 instanceof Dog); //false
console.log(tiger1 instanceof Animal); //true
console.log(tiger1 instanceof Tiger); //true
