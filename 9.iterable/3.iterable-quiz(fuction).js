//[Symbol.iterator](): Interator{next():{value, done}};
//0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
//0,1,2,3,...,9
//0,2,4,6,...,18

function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num), done: num > maxValue };
        },
      };
    },
  };
}
const multiple = makeIterable(0, 20, (num) => num * 2);
