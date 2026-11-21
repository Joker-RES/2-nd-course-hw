// Задание 1
// Получаем ссылки на элементы через querySelector
const instruction = document.querySelector('.instruction');
const button = document.querySelector('.toggle-btn');

// По клику на кнопку переключаем видимость заголовка
button.addEventListener('click', () => {
    // Проверяем, скрыт ли заголовок сейчас
    if (instruction.style.display === 'none') {
        instruction.style.display = ''; // показываем
        button.textContent = 'Скрыть';
    } else {
        instruction.style.display = 'none'; // скрываем
        button.textContent = 'Показать';
    }
});

// Задание 2 
const paragraph = document.querySelector('.text-paragraph');
const colorBtn = document.querySelector('.color-btn');
let isBlue = false; 

colorBtn.addEventListener('click', () => {
    if (!isBlue) {
        // Если сейчас не синий — делаем синим
        paragraph.style.color = 'blue';
        isBlue = true;
    } else {
        // Если синий — возвращаем чёрный
        paragraph.style.color = 'black';
        isBlue = false;
    }
});

// Задание 3
const dynamicTitle = document.querySelector('.dynamic-title');
const changeTextBtn = document.querySelector('.change-text-btn');
        
// Сохраняем исходный текст, чтобы потом его вернуть
const originalText = dynamicTitle.textContent;
const newText = 'Привет, мир!';
let isChanged = false;

changeTextBtn.addEventListener('click', () => {
    if (!isChanged) {
        // Если текст не меняли — ставим новый
        dynamicTitle.textContent = newText;
        isChanged = true;
    } else {
        // Если уже меняли — возвращаем исходный
        dynamicTitle.textContent = originalText;
        isChanged = false;
    }
});

/*
// Задание 4
// Находим элементы с классом description
const descriptions = document.querySelectorAll('.description');

// Перебираем найденные элементы и меняем их текст
 descriptions.forEach(item => {
    item.textContent = 'Измененный текст';
});
*/

// Задание 5
// Находим все элементы с классом description
const descriptions = document.querySelectorAll('.description');

// Перебираем найденные элементы и меняем текст
descriptions.forEach(item => {
    item.textContent = 'Новый текст';
});

// Задание 6
const addElementBtn = document.querySelector('.add-element-btn');

addElementBtn.addEventListener('click', () => {
    // Создаём новый элемент <p>
    const newParagraph = document.createElement('p');
    // Вводим текст внутри элемента
    newParagraph.textContent = 'Новый абзац';
    // Добавляем элемент в конец документа (в body)
    document.body.appendChild(newParagraph);
});

// Задание 7 
const removeElementBtn = document.querySelector('.remove-element-btn');

removeElementBtn.addEventListener('click', () => {
    // Находим первый элемент с классом description
    const firstDescription = document.querySelector('.description');
    // Если элемент найден — удаляем его
    if (firstDescription) {
        firstDescription.remove();
    }
});