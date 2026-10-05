/* Задание 1 */
let hi = 0;

do {
  console.log("Привет!");
  hi++;
} while (hi<2);


/* Задание 2 */
let i = 1;

do {
  console.log(i);
  i++;
} while (i<6);


/*Задание 3 */

for (i=7; i<23; i++) {
console.log (i);
}


/* Задание 4 */
const obj = {
  "Коля": "200",
  "Вася": "300",
  "Петя": "400"
};

for (const name in obj) {
  const salary = obj[name];
  console.log(`${name} — зарплата ${salary} долларов`);
}

/* Задание 5*/
let n = 1000;
let num = 0;
while (n >= 50) {
n = n / 2;
num++;
}
console.log ("Результат", n);
console.log ("Количество операций", num);

/* Задание 6 */
let friday = 2;
while (friday <= 31) {
console.log (`Сегодня пятница ${friday}-е число. Необходимо подготовить отчет.`);
friday += 7;
}