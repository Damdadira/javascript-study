/**
 * 옵셔널 체이닝 연산자 Optional Chaning Operator
 * ES11(ECMAScript 2020)
 * ?.
 * null 또는 undefined을 확인할 때
 */
let item = { price: 1 };
// const price = item && item.price;
const price = item?.price; //item이 있으면 접근하고 아니면 접근 하지마
console.log(price);

let obj = { name: '강아지', owner: { name: '엘리' } };
const ownerName = obj?.owner?.name;
console.log(obj);
