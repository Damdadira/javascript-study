/**
 * Nullish Coalescing Operator
 * ES11(ECMAScript 2020)
 * ?? null, undefined
 * || false한 경우 설정(할당) 0, -0, '', null, undefined
 */
let num = 0;
console.log(num || '-1'); //-1
console.log(num ?? '-1'); //0

// ||는 첫번째 truthy값을 반환
// ??는 첫번째 정의된(값)을 반환
