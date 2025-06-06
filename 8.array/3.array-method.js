//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['사과', '바나나', '오렌지'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //true
console.log(Array.isArray({})); //false ->빈 오브젝트

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('오렌지')); //2
console.log(fruits.indexOf('사과')); //0

//배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('사과')); //true
console.log(fruits.includes('딸기')); //false

//추가 - 제일 뒤
let length = fruits.push('복숭아'); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

//추가 - 제일 앞
length = fruits.unshift('딸기'); //배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

//삭제 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

//삭제 - 제일 앞
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

//중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); //시작하는 위치((1)->0,1,2)에서 하나를 삭제할거야
console.log(fruits); //배열 자체를 수정(업데이트)
console.log(deleted);

fruits.splice(1, 0, '배', '포도'); //시작하는 위치(1)에 이것을 추가할거야, 0은 하나도 삭제 안한다는 뜻
console.log(fruits); //배열 자체를 수정(업데이트)

//잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); //어디서부터 어디까지 자를건지
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(1); //1부터 끝까지
console.log(newArr);

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); //두개가 합쳐진 새로운 배열을 반환
console.log(arr3);

//배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
//기본적으로 1단계까지만
console.log(arr.flat()); //하나 하나씩 풀어서 나열(배열 안의 배열은 하지 않음)
//2단계까지
console.log(arr.flat(2));
arr = arr.flat(3);

//특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3); //1부터 3까지 채울건데 끝은 포함되지 않음(1~2까지만 채움)
console.log(arr);

arr.fill('a', 5); //5번째에 1개만 채워짐
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);
