function a() {
  console.log(this);
}

const b = function () {
  console.log(this);
};

const c = () => {
  console.log(this);
};

// 객체의 메서드를 정의할때는 consise method를 사용하는게 좋다.
// 객체의 메서드 안에서 함수를 정의할때는 arrow function이 좋다.

const user = {
  grades: [10, 50, 100],
  totalGrades() {
    let total = 0;
    this.grades.forEach((item) => {
      // console.log( item );
      total += item;
    });

    return total;
  },
  get gr() {
    return this.grades;
  },
  set gr(value) {
    this.grades.push(value);
    // return this.grades
  },
};

user.totalGrades();

function isEven(n) {
  // if (n % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  n % 2 === 0 ? "짝수" : "홀수";
  return  n % 2 === 0
}

function pow(num1, num2) {
  let total = 1;
  for(let i=0; i<num2; i++) {
    total *= num1
  }

  return total
}