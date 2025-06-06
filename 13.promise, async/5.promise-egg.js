function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>계란`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg}=>후라이`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가져올 수 없음!'));
  //return Promise.resolve(`정원=>계란`);
}

//그대로 쓴 코드
// getChicken() //
//   .catch((error) => {
//     //실패하면 이 '닭'을 가져온다
//     console.log(error.name);
//     return '닭';
//   })
//   .then((chicken) => fetchEgg(chicken)) //그리고 이 치킨을 이용해서 계란을 가져오고
//   .then((egg) => fryEgg(egg)) //계란을 후라이 한 다음에
//   .then((friedEgg) => console.log(friedEgg)); //콘솔에 출력한다

//간결하게 쓴 코드
getChicken() //
  .catch(() => '닭')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
