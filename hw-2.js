/*Первоезадание*/
let password = ("Пароль");
let answerPassword = prompt ('Введите пароль');
alert (answerPassword);
if (answerPassword === password) {
  console.log ("Пароль введен верно");
} else {
  console.log ("Пароль введен неверно");
}


/*Второе задание*/
let c = 2;
if (c > 0 && c < 10) {
  console.log ("Верно");
} else {
  console.log ("Неверно");
}

 /*-3,0,10 - неверно; 2 - верно.*/

/*Третье задание*/
let d = 78;
let e = 145;
if ( d > 100 || e > 100) {
  console.log ("Верно");
} else {
  console.log ("Неверно");
}


/*Четвертое задание*/
let a = '2';
let b = '3';
alert(+a + +b);


/*Пятое задание*/
let monthNumber = Number(prompt("Введите номер месяца"));
if (monthNumber < 1 || monthNumber > 12) {
  console.log ("Введите корректное значение");
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log ("Зима");
    break;
    case 3:
    case 4:
    case 5:
      console.log ("Весна");
    break;
    case 6:
    case 7:
    case 8:
      console.log ("Лето");
    break;
    case 9:
    case 10:
    case 11:
      console.log ("Осень");
    break;
  }
}

/*Дополнительное задание 1*/
let msg = prompt('Пожалуйста, введите любое число');
let number = Number(msg);

if (Number.isNaN(number)) {
  alert('Вы ввели не число!');
} else if (number % 2 === 0) {
  alert('Число чётное');
} else {
  alert('Число нечётное');
}

/*Дополнительное задание 2*/
let clientOSInput = prompt('Укажите операционную систему телефона: 0 — iOS, 1 — Android');
let clientOS = Number(clientOSInput);
let message = '';

if (Number.isNaN(clientOS)) {
  message = 'Пожалуйста, введите корректные числовые значения.';
}
 else if (clientOS === 0) {
  message = 'Установите версию приложения для iOS по ссылке';
} else if (clientOS === 1) {
  message = 'Установите версию приложения для Android по ссылке';
} else {
  message = 'Не удалось определить операционную систему устройства';
}
console.log(message);

/*Дополнительное задание 3*/
let clientOSInput = prompt('Укажите операционную систему телефона: 0 — iOS, 1 — Android');
let clientDeviceYearInput = prompt('Введите год выпуска телефона (например, 2015)');
let clientOS = Number(clientOSInput);
let clientDeviceYear = Number(clientDeviceYearInput);
let message = '';

if (Number.isNaN(clientOS) || Number.isNaN(clientDeviceYear)) {
message = 'Пожалуйста, введите корректные числовые значения.';
}
else if (clientOS === 0 && clientDeviceYear >= 2015) {
message = 'Установите приложение для iOS по ссылке';
}
else if (clientOS === 0 && clientDeviceYear < 2015) {
message = 'Установите облегченную версию приложения для iOS по ссылке';
}
else if (clientOS === 1 && clientDeviceYear >= 2015) {
message = 'Установите приложение для Android по ссылке';
}
else if (clientOS === 1 && clientDeviceYear < 2015) {
message = 'Установите облегченную версию приложения для Android по ссылке';
}
else {
message = 'Не удалось определить операционную систему устройства';
}
console.log(message);