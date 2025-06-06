//생성자 함수
function Fruit(name, emoji) {
  //Fruit할 때 F는 대문자로 써야함
  this.name = name; //본인꺼 가져오기 위해 this 사용
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; //생략가능
}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
