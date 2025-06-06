//사용예제1
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

//사용예제2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}

let firstName = '영아';
let lastName = '임';
console.log(fullName(firstName, lastName));

let firstName2 = '버논';
let lastName2 = '최';
console.log(fullName(firstName2, lastName2));
