//5번에서 한 퀴즈의 답을 고차함수로 변경해보기!

//1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

const array = ['바나나', '딸기', '포도', '딸기'];
const result = replace(array, '딸기', '키위');
console.log(result);

//2. 배열의 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
function count(array, item) {
  //   return array.filter((value) => value === item).length;
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0);
}
console.log(count(['바나나', '키위', '포도', '키위'], '키위'));

//3. 배열1, 배열2 두개의 배열을 전달받아,
//배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(
  match(['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기'])
);

//4. 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums //
  .filter((nums) => nums > 5) //[16,25,34,21];
  .reduce((avg, nums, _, array) => avg + nums / array.length, 0); //0으로 초기화(시작값)
console.log(result2);

//filter: 빙글빙글 돌면서 조건 탐색(필터링)
//reduce: 결과값 반환
