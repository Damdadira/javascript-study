// import increase from './counter';
// import { increase as increase1 } from './counter.js'; ->여러개 받아오고 싶을 때

// import { increase, getCount } from './counter.js';
// increase();
// increase();
// console.log(getCount());

import * as counter from './counter.js'; //하나로 묶어서 여러개 가져온다
counter.increase();
counter.increase();
console.log(counter.getCount());
