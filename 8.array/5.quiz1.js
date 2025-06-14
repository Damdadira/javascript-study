//1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const array = ['바나나', '딸기', '포도', '딸기'];
const result = replace(array, '딸기', '키위');
console.log(result);

//2. 배열의 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['바나나', '키위', '포도', '키위'], '키위'));

//3. 배열1, 배열2 두개의 배열을 전달받아,
//배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(
  match(['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기'])
);
