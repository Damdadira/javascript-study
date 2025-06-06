//주어진 배열에서 중복을 제거하라
const fruits = ['바나나', '사과', '포도', '바나나', '사과', '복숭아'];

//console.log(new Set(fruits)); ->자동으로 중복 제거되고 Set 생성

// function removeDuplication(array) { //배열로 변경
//   return [...new Set(array)];
// }
// console.log(removeDuplication(fruits));

console.log([...new Set(fruits)]); //배열로 변경

//주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}
console.log(findIntersection(set1, set2));

/**
 * Map은 순서가 보장되지 않고 Key값의 중복은 허용하지 않지만 Value값의 중복은 허용된다
 * Set은 순서가 보장되지 않고 데이터들의 중복을 허용하지 않는다
 * */
