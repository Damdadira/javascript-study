/**
 * 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
 * 직원들의 정보: 이름, 부서, 한달 근무 시간
 * 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
 * 정직원은 시간당 10,000원
 * 파트타임 직원은 시간당 8,000원
 */

class Employee {
  constructor(name, department, monthTime, payRate) {
    this.name = name;
    this.department = department;
    this.monthTime = monthTime;
    this.payRate = payRate;
  }
  calculatepay() {
    return this.monthTime * this.payRate;
  }
}

//이렇게도 가능
// class FullTimeEmployee extends Employee {
//   constructor(name, department, monthTime) {
//     super(name, department, monthTime, 10000);
//   }
// }

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;
  constructor(name, department, monthTime) {
    super(name, department, monthTime, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, monthTime) {
    super(name, department, monthTime, PartTimeEmployee.#PAY_RATE);
  }
}

const vernon = new FullTimeEmployee('버논', '힙합', 30);
const dk = new PartTimeEmployee('도겸', '보컬', 20);
console.log(vernon.calculatepay());
console.log(dk.calculatepay());
