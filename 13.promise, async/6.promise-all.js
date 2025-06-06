function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('바나나');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('사과');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Eroor('no orange'));
}

//바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log('race', fruits));

//Promise.all 병렬적으로 한번에 모든 promise들을 수행
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

Promise.allSettled([getBanana(), getApple(), getOrange]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);

//16.6-8 강의 다시 보기!!!!
