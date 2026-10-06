/* Задание 1*/
function getMin(a, b) {
  return a < b ? a : b;
}

console.log(getMin(8, 4));  // 4
console.log(getMin(6, 6));  // 6
console.log(getMin(-3, 10)); // -3

/* Задание 2 */

function evenOdd(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}
console.log(evenOdd(7)); 

/* Задание 3 */

function exponent(n) {
  return n ** 2;
}
console.log(exponent(3));

/* Задание 4 */

function correctAge(age) {
    const numAge = Number(age);
  
  if (isNaN(numAge) || numAge < 0) {
    return 'Вы ввели неправильное значение';
  }  if (numAge >= 0 && numAge <= 12) {
    return 'Привет, друг!';
  }  if (numAge >= 13) {
    return 'Добро пожаловать!';
  }
}
alert (correctAge(prompt('Сколько вам лет?')));

/* Задание 5 */

function multNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
  console.log('Одно или оба значения не являются числом');
  } else
  return numA * numB;
}
console.log(multNumbers('a', 5));
console.log(multNumbers(6, 5));
console.log(multNumbers(6, 'b'));

/* Задание 6 */

function cubeNumber(n) {
  let num = Number(n);
  
  if (isNaN(num)) {
    return'Переданный параметр не является числом';
  }
  
  let cube = n ** 3;
    return `${num} в кубе равняется  ${cube}`
}
console.log(cubeNumber(0));
console.log(cubeNumber(1));
console.log(cubeNumber(2));
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(5));
console.log(cubeNumber(6));
console.log(cubeNumber(7));
console.log(cubeNumber(8));
console.log(cubeNumber(9));
console.log(cubeNumber(10));

/* Задание 7 */

const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

console.log('circle1 площадь:', circle1.getArea());
console.log('circle1 периметр:', circle1.getPerimeter());
console.log('circle2 площадь:', circle2.getArea());
console.log('circle2 периметр:', circle2.getPerimeter()); 