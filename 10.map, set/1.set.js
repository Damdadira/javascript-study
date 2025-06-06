const set = new Set([1, 2, 3]);
console.log(set);

//사이즈 확인
console.log(set.size);

//값이 존재하는지 확인
console.log(set.has(2)); //true
console.log(set.has(8)); //false

//순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//추가
set.add(6);
console.log(set);
set.add(6); //중복 불가능
console.log(set);

//삭제
set.delete(6);
console.log(set);

//전부 삭제
set.clear();
console.log(set);

//오브젝트 세트
const obj1 = { name: '사과', price: 8 };
const obj2 = { name: '오렌지', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//퀴즈1
obj1.price = 10;
objs.add(obj1);
console.log(objs);

//퀴즈2
const obj3 = { name: '바나나', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);

/**
 * Set(데이터의 집합)
 * Set(3) { 1, 2, 3 }
 * 중복을 허용하지 않음
 */

/**
 * Map(key, value로 이루어진 데이터의 집합)
 * Map(3) { 'key1' => '사과', 'key2' => '바나나', 'key3' => '키위' }
 * key의 중복은 허용하지 않음, value는 중복 가능
 */
