// ИГРА 1: Угадай число

// Находим кнопки первой игры (и в десктопной, и в мобильной версии)
const guessButtons = document.querySelectorAll('.guess-start-btn');

guessButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // чтобы не «прыгала» страница из-за href="#"
        runGuessGame();
    });
});

function runGuessGame() {
    // Загадываем случайное число от 1 до 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    alert('Я загадал число от 1 до 100. Попробуй угадать!');

    while (true) {
        const input = prompt(`Попытка № ${attempts + 1}. Введи число от 1 до 100:`);

        // Пользователь нажал «Отмена» — прерываем игру
        if (input === null) {
            alert('Игра прервана. Загаданное число было: ' + secretNumber);
            return;
        }

        const guess = parseInt(input.trim(), 10);

        // Проверка на корректный ввод
        if (Number.isNaN(guess) || guess < 1 || guess > 100) {
            alert('Пожалуйста, введи целое число от 1 до 100.');
            continue; // попытка не засчитывается
        }

        attempts++;

        if (guess < secretNumber) {
            alert(`Загаданное число БОЛЬШЕ, чем ${guess}. Попыток: ${attempts}`);
        } else if (guess > secretNumber) {
            alert(`Загаданное число МЕНЬШЕ, чем ${guess}. Попыток: ${attempts}`);
        } else {
            alert(`🎉 Победа! Ты угадал число ${secretNumber} за ${attempts} попыток!`);
            return; // игра завершена
        }
    }
}

//ИГРА 2: Простая арифметика

// Находим кнопки второй игры (и в десктопной, и в мобильной версии)
const mathButtons = document.querySelectorAll('.math-start-btn');

mathButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // чтобы страница не «прыгала» из-за href="#"
        runMathGame();
    });
});

function runMathGame() {
    const TOTAL_QUESTIONS = 5; // количество задач
    let score = 0;

    alert(`Привет! Я дам тебе ${TOTAL_QUESTIONS} задач на +, −, × и ÷. Поехали!`);

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        // Генерируем случайную задачу
        const task = generateMathTask();

        // Запрашиваем ответ у пользователя
        const input = prompt(`Задача ${i + 1} из ${TOTAL_QUESTIONS}:\n\n${task.text} = ?`);

        // Пользователь нажал «Отмена» — прерываем игру
        if (input === null) {
            alert('Игра прервана.');
            return;
        }

        const userAnswer = parseFloat(input.trim().replace(',', '.'));

        // Проверка на корректный ввод
        if (Number.isNaN(userAnswer)) {
            alert('Это не похоже на число. Задача пропущена.');
            continue;
        }

        // Проверяем ответ
        if (Math.abs(userAnswer - task.answer) < 0.0001) {
            score++;
            alert(`Верно! ${task.text} = ${task.answer}`);
        } else {
            alert(`Ошибка. Правильный ответ: ${task.text} = ${task.answer}`);
        }
    }

    // Выводим итоговый результат
    alert(`Раунд завершён! Ты решил правильно ${score} из ${TOTAL_QUESTIONS} задач.`);
}

function generateMathTask() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let num1, num2, text, answer;

    switch (operation) {
        case '+':
            num1 = Math.floor(Math.random() * 50) + 1; // 1–50
            num2 = Math.floor(Math.random() * 50) + 1;
            answer = num1 + num2;
            text = `${num1} + ${num2}`;
            break;

        case '-':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            // Чтобы ответ не был отрицательным — ставим большее число первым
            if (num2 > num1) {
                [num1, num2] = [num2, num1];
            }
            answer = num1 - num2;
            text = `${num1} - ${num2}`;
            break;

        case '*':
            num1 = Math.floor(Math.random() * 9) + 2;  // 2–10
            num2 = Math.floor(Math.random() * 9) + 2;
            answer = num1 * num2;
            text = `${num1} * ${num2}`;
            break;

        case '/':
            num2 = Math.floor(Math.random() * 9) + 2;  // 2–10, делитель не ноль
            answer = Math.floor(Math.random() * 9) + 2; // частное — целое 2–10
            num1 = num2 * answer;                       // делимое гарантирует целый ответ
            text = `${num1} / ${num2}`;
            break;
    }

    return { text, answer };
}


//ИГРА 3: Переверни текст
// Находим кнопки третьей игры (и в десктопной, и в мобильной версии)
const reverseButtons = document.querySelectorAll('.reverse-start-btn');

reverseButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // чтобы страница не «прыгала» из-за href="#"
        runReverseGame();
    });
});

function runReverseGame() {
    const input = prompt('Введи любой текст — я переверну его наоборот:');

    // Пользователь нажал «Отмена» — выходим
    if (input === null) {
        alert('Игра прервана.');
        return;
    }

    // Если пользователь ничего не ввёл или нажал ОК с пустой строкой
    if (input.trim() === '') {
        alert('Ты не ввёл текст. Попробуй ещё раз!');
        return;
    }

    const reversedText = reverseText(input);

    alert(
        `Исходный текст:\n${input}\n\n` +
        `Перевернутый текст:\n${reversedText}`
    );
}

function reverseText(text) {
    // split('') разбивает строку на массив символов,
    // reverse() переворачивает массив,
    // join('') собирает обратно в строку
    return text.split('').reverse().join('');
}



/*Задание1
const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);  //'JS'
*/

/*Задание 2
function filterByPrefix(arr, prefix) {
  const lowerPrefix = prefix.toLowerCase();
  return arr.filter(item => item.toLowerCase().startsWith(lowerPrefix));
}

const words = ['MicrosoftCompany', 'Microsoft', 'MICROSOFT', 'Company', 'microsoftCompany', 'mIcRoSoFtCoMpAnY'];
console.log(filterByPrefix(words, 'microsoft')); 
// Ответ: ['MicrosoftCompany', 'Microsoft', 'MICROSOFT', 'microsoftCompany', 'mIcRoSoFtCoMpAnY']
*/

/*Задание 3
const num = 32.58884;

console.log('До меньшего целого:', Math.floor(num));     // 32
console.log('До большего целого:', Math.ceil(num));     // 33
console.log('До ближайшего целого:', Math.round(num)); // 33

*/

/*Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('Минимальное значение:', min);   // 21
console.log('Максимальное значение:', max); // 77

*/

/*Задание 5
function printRandomNumber() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}

printRandomNumber();

*/

/*Задание 6
function generateRandomArray(num) {
  const length = Math.floor(num / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (num + 1)));
  }

  return result;
}

console.log(generateRandomArray(9)); // ответ из 4 элементов

*/

/*Задание 7
function getRandomInRange(min, max) {
  // Гарантируем, что min <= max (на случай, если числа перепутали)
  const bigger = Math.max(min, max);
  const smaller = Math.min(min, max);

  return Math.floor(Math.random() * (bigger - smaller + 1)) + smaller;
}

console.log(getRandomInRange(-10, 10));


/*Задание 8
const currentDate = new Date();
console.log(currentDate);

*/

/*Задание 9
const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
// в копию переменной добавляем 73 дня с помощью setDate()
console.log(futureDate);

*/

/*Задание 10
function formatRussianDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}


console.log(formatRussianDate(new Date()));

*/



