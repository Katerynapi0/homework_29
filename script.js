'use strict';
/*Створити програму для відображення результатів голосування. З наступними умовами:

- Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
- Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
- При натисканні на смайл - під ним змінюється значення лічильника.
- Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.*/

const option = [
    {emoji: "🐸", counter: 0},
    {emoji: "🌸", counter: 0},
    {emoji: "🐼", counter: 0},
    {emoji: "🦋", counter: 0},
    {emoji: "🦦", counter: 0}
];

function displayResult(){
    const showVoitResult = document.getElementById("voitResult");
    showVoitResult.innerHTML = "";

    option.forEach(option => {
        showVoitResult.innerHTML += `<div>Загальна кількість голосів за ${option.emoji} становить: ${option.counter}</div>`
    });
}

function vote(index){
    option[index].counter++;
    displayResult();
}

displayResult();