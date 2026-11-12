// ИГРА 4: камень(rock), ножницы(scissors), бумага(paper)

const rpsChoices = ['камень', 'ножницы', 'бумага'];

document.querySelectorAll('.rps-start-btn').forEach(startBtn => {
  startBtn.addEventListener('click', (event) => {
    event.preventDefault(); // кнопка — ссылка <a href="#">, отменяем переход

    // 1. Выбор пользователя
    const input = prompt('Ваш выбор: камень, ножницы или бумага?');
    if (input === null) return; // пользователь нажал «Отмена» — выходим

    const userChoice = input.toLowerCase().trim();

    // Проверка ввода
    if (!rpsChoices.includes(userChoice)) {
      alert('Некорректный ввод! Нужно ввести: камень, ножницы или бумага.');
      return;
    }

    // 2. Выбор компьютера
    const computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

    // 3. Определение победителя
    let result;
    if (userChoice === computerChoice) {
      result = 'Ничья!';
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      result = 'Поздравляем, вы победили!';
    } else {
      result = 'К сожалению, вы проиграли.';
    }

    // 4. Вывод результата
    console.log('Вы выбрали:', userChoice);
    console.log('Компьютер выбрал:', computerChoice);
    console.log(result);

    alert(`Вы: ${userChoice}\nКомпьютер: ${computerChoice}\n${result}`);
  });
});





/* Задание 1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

// Сортируем по возрастанию возраста с помощью колбэка
people.sort((a, b) => a.age - b.age);

console.log(people);

*/

/* Задание 2

function isPositive(item) {
    return item > 0;
}

function isMale(item) {
    return item.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        // Если функция-правило вернула true — добавляем элемент в результат
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));
// => [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));
// => [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

*/


/* Задание 3

const intervalId = setInterval(() => {
    console.log(new Date());
}, 3000);

// Через 30 секунд останавливаем интервал и выводим финальное сообщение
setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

*/



/* Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

*/


/* Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

delayForSecond(function () {
    sayHi('Глеб');
});

*/

