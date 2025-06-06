//내부 함수로부터 외부 함수에 접근할 수 있는 권한을 준다
const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner:  ${x}`);
  }
  inner();
}
outer();
