'use strict';

// variabili per ciclo 
let contatoreInizio = 1;
let contatoreFine = 100;
// 1) Definisco un ciclo per un conteggio incrementato da 1 a 100 e stampo ogni numero in console.
for (let i=contatoreInizio; i<= contatoreFine; i++){

    // 2) Stabilisco delle condizioni che: 

    // se è multipo di 3 e di 5 stampo FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    // se è multiplo di 5 stampo Buzz. 
    } else if (i % 5 === 0){
        console.log('Buzz');
    // se è multiplo di 3 stampo Fizz.
    } else if (i % 3 === 0){
        console.log('Fizz');
    // altrimenti stampo la mia variabile ciclo. 
    } else {
        console.log(i);
    }
    
}

