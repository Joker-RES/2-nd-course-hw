const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Находим все кнопки "Играть!" с классом quiz-start-btn
const startButtons = document.querySelectorAll('.quiz-start-btn');

startButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        runQuizWithPrompt();
    });
});

function runQuizWithPrompt() {
  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
        const q = quiz[i];
        while (true) {         
          // Формируем текст вопроса с вариантами
          const questionText = `${q.question}\n\nВарианты:\n${q.options.join('\n')}`;

          // Спрашиваем пользователя через prompt
          const userAnswer = prompt(questionText);

          if (userAnswer === null) {
            // Если пользователь нажал "Отмена"
            alert("Викторина прервана.");
            return;
          }

          // Очищаем ввод от пробелов и приводим к числу
          const cleanAnswer = parseInt(userAnswer.trim());
          
          // Проверка: не пустой ли ввод и есть ли цифра
          if (!userAnswer.trim()) {
            alert("Пожалуйста, введите номер варианта (1, 2 или 3).");
            continue; // запрашиваем ответ снова для этого же вопроса
          }

          // Проверка: число ли это и попадает ли в диапазон вариантов
          if (Number.isNaN(cleanAnswer) || cleanAnswer < 1 || cleanAnswer > q.options.length) {
            alert(`Пожалуйста, введите корректный номер варианта: от 1 до ${q.options.length}.`);
            continue;
          } 

          // Проверяем ответ
          if (cleanAnswer === q.correctAnswer) {
            score++;
          }
          break; // переходим к следующему вопросу
        }
  }  

    
  // Выводим результат через alert
  alert(`Ты правильно ответил на ${score} из ${quiz.length} вопросов!`);
}  
  

/*Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  if (arr[i] === 10) {
    break;
  }
}

*/

/*Задание 2
const arr = [1, 5, 4, 10, 0, 3];
let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    index = i;
    break;
  }
}

console.log(index);
*/

/*Задание 3
const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');

console.log(result); 
*/

/*Задание 4
const rows = 3;
const columns = 3;
const arr = [];

for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
  arr[i][j] = 1;
  }
}

console.log(arr); 

*/

/*Задание 5
const arr = [1, 1, 1];
arr.push(2, 2, 2);

console.log(arr);
*/

/*Задание 6
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort() 
  
console.log('После сортировки:', arr); 
const filteredArr = arr.filter(item => item !== 'a');
console.log('Итоговый массив:', filteredArr); 

*/

/*Задание 7
const arr = [9, 8, 7, 6, 5];

const userInput = prompt('Угадай число из массива [9, 8, 7, 6, 5]:');
const answeredNumber = Number(userInput);

if (arr.includes(answeredNumber)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}
*/

/*Задание 8
const str = 'abcdef';

const reversed = str.split('').reverse().join('');

console.log(reversed);
*/

/*Задание 9
const arr = [[1, 2, 3], [4, 5, 6]];
const flattened = arr.flat();

console.log(flattened);
*/

/*Задание 10
const numbers = [3, 7, 2, 9, 5];

for (let i = 0; i < numbers.length - 1; i++) {
  const real = numbers[i];
  const next = numbers[i + 1];
  const sum = real + next;

  console.log(`Сумма элемента ${real} (индекс ${i}) и следующего ${next} (индекс ${i + 1}): ${sum}`);
}
*/

/*Задание 11
const input = [2, 4, 5, 7, 9];

function squares(numbers) {
  return numbers.map(num => num * num);
}

const result = squares(input);

console.log(result);
*/

/*Задание 12
const input = ['стол', 'табурет', 'кресло', 'диван'];

function wordLengths(words) {
  return words.map(word => word.length);
}

const result = wordLengths(input);

console.log(result);
*/

/*Задание 13
const input = [3, -1, 0, -7, 5, -2, 10];
function negativeNumbers(numbers) {
  return numbers.filter(num => num < 0);
}

const result = negativeNumbers(input);

console.log(result);
*/


/*Задание 14
// 1. Генерируем исходный массив из 10 чисел в диапазоне от 0 до 10
const originalArray = [];
for (let i = 0; i < 10; i++) {
  // Math.random() даёт число от 0 до 1, умножаем на 10 и округляем до целого
  const randomNum = Math.floor(Math.random() * 11); // *11, чтобы включать и 10
  originalArray.push(randomNum);
}

// 2. Фильтруем чётные значения с помощью filter()
const evenNumbers = originalArray.filter(num => num % 2 === 0);

// 3. Выводим оба массива в консоль
console.log('Исходный массив:', originalArray);
console.log('Массив с чётными значениями:', evenNumbers);
*/

/*Задание 15

const numbers = [];
for (let i = 0; i < 6; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1; 
  numbers.push(randomNum);
}

const sum = numbers.reduce((acc, current) => acc + current, 0);

const average = sum / numbers.length;

console.log('Массив:', numbers);
console.log('Сумма:', sum);
console.log('Среднее арифметическое:', average);
*/