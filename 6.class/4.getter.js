//접근자 프로퍼티(Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //접근할 때
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  //할당할 때
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('안나', '김');
console.log(student);
console.log(student.firstName);
console.log(student.fullName); //get
student.fullName = '김철수'; //set 할당한 값
