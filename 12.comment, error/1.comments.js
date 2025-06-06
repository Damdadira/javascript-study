//주석 Comments
//한줄 짜리 주석을 작성할 때 씀
//TODO(엘리): 해야할 일을 작성
//TODO(엘리): xx기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음
 * (단, 정말 필요한 경우에만)
 */

//외부에서 많은 쓰이는 함수인 API인 경우 JS DOC사이트 이용
//https://github.com/jsdoc/jsdoc

/**  코드 먼저 작성하고 /**치고 엔터 치면 알아서 나옴
 *
 * @param {*} a 숫자1
 * @param {*} b 숫자2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
