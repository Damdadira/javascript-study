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

async function makeFrideEgg() {
  let chicken;
  try {
    chicken = await getChicken(); //
  } catch {
    chicken = '닭';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
makeFrideEgg().then(console.log);

//16.11 강의 다시 들어보기!!!!!!!
