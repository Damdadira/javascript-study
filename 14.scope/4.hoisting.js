//함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
//함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('hello');
}

/**
 * 변수(let, const)와 클래스는 선언만 호이스팅이 되고
 * 초기화는 안됨
 * 초기화 전, 변수에 접근하면 컴파일(빌드)에 에러가 발생
 * */
console.log(hi); //출력X->에러
let hi = hi; //선언된 부분만 호이스팅 되고, 초기화는 해당 코드 라인에 와야지만 출력됨
let func1 = function () {};

const cat = new Cat();
class Cat {}

let x = 0;
{
  console.log(x);
  let x = 2;
}
