'use strict';
// parte 1 bonus1 
let elementUl = document.querySelector('ul.list');

// variabili per ciclo 
let contatoreInizio = 1;
let contatoreFine = 100;

// 1) Definisco un ciclo per un conteggio incrementato da 1 a 100 e stampo ogni numero in console.
for (let i=contatoreInizio; i<= contatoreFine; i++){
    // bonus1 2) 
    let elementLi = document.createElement('li');
    let listText = '';

    // 2) Stabilisco delle condizioni che: 

    // se è multipo di 3 e di 5 stampo FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
        // bonus1 3) 
        listText = 'FizzBuzz';
        // bonus2 
        elementLi.classList.add('fizzBuzz');
    // se è multiplo di 5 stampo Buzz. 
    } else if (i % 5 === 0){
        console.log('Buzz');
        // bonus1 3) 
        listText = 'Buzz';
        // bonus2 
        elementLi.classList.add('buzz');
    // se è multiplo di 3 stampo Fizz.
    } else if (i % 3 === 0){
        console.log('Fizz');
        // bonus1 3) 
        listText = 'Fizz';
        // bonus2 
        elementLi.classList.add('fizz');
    // altrimenti stampo la mia variabile ciclo. 
    } else {
        console.log(i);
        // bonus1 3) 
        listText = i;
    }

    // bonu1 4) 
    elementLi.textContent = listText;
    elementUl.append(elementLi);

    // bonus2 
    elementLi.classList.add('mioBox');
}
