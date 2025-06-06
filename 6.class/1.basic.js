//객체를 손쉽게 만들 수 있는 템플릿
/**
 * 생성자 함수(오래된 고전적인 방법) ->더이상 쓰이지 않음
 * 클래스(최신!!)
 */

//클래스 Class
class Fruit {
  //생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name; //본인꺼 가져올려면 this 사용해야함
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

//apple은 Fruit 클래스의 인스턴스이다. 왜냐? class를 통해서 만들어졌기 때문
const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');
console.log(apple);
console.log(apple.name);
console.log(orange);

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다. 왜냐? class를 통해서 만들어지지 않았기 때문
const obj = { name: 'ellie' };
