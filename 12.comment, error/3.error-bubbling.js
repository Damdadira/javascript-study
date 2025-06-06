//Bubbling up, Propagating
function a() {
  throw new Error('Error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같다');
    throw error;
  }
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
