let count = 0;
//이거 하나만 외부로 노출할거야
//여러개 노출할거면 default로 지우면 됨!
export default function increase() {
  count++;
  console.log(count);
}
export function getCounter() {
  return count;
}

//15.4강의!!!! 다시 들어봐!!!!!
