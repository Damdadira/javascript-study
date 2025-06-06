function a() {
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result);

/**
 * 동기(sync) ->이전 작업의 실행이 끝나야 다음 작업 실행을 시작(ex-은행)
 * 비동기(async) ->이전 작업의 실행과 무관하게 다음 작업을 실행(ex-카페)
 * 비동기->동기 방식으로 변환해줘야 함
 * 1. callback 함수(setTimeout)
 * 2. promise ->성공할 때는 resolve 함수를 호출하고, 실패할 때는 reject 함수를 호출
 *
 */
