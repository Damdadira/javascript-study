//Iterable 하다는건! 순회가 가능하다는 거지!
//[Symbol.iterator](): Iterator;
//심볼 정의를 가진 객체나, 특정한 함수가 Iterator을 리턴한다는 것은
//'순회가 가능한 객체이다' 라는 것을 알 수 있음
//순회가 가능하면 무엇을 할 수 있나? for...of, spread
const array = [1, 2, 3];
for (const item of array) {
  //배열 안에 있는 아이템들을 순회(of)
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const item in array) {
  //key를 출력
  console.log(item);
}

const iterator = array.values(); //value에는 실제 값을, done은 반복이 끝났는지 아닌지 제일 마지막 아이템을 확인해줌
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done); //done이 true이면 반복이 끝났다.

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
