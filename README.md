# FizzBuzz

## Consegna
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

### Svolgimento
1) Definisco un ciclo per un conteggio incrementato da 1 a 100 e stampo ogni numero in console.
2) Stabilisco delle condizioni che:
- se è multiplo di 3 e 5 stampo FizzBuzz.
- se è multiplo di 5 stampo Buzz.
- se è multipo di 3 stampo Fizz.
- altrimenti stampo la mia variabile ciclo.


## BONUS 1
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

### Svolgimento Bonus1
1) aggiungo un elemento \<ul> all'interno del file index.html e una variabile in js.
2) creo in js l'elemento \<li> con le sue variabili e cosa deve contenere.
3) nelle condizioni stabilite dall'esercizio precedente dico cosa "stampare" in html.
4) tramite js inserisco l'elemento \<li> e il suo contenuto come figlio di \<ul> all'interno del codice html.


## BONUS 2
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

### Svolgimento
Nel mio foglio style.css creo delle classi personalizzate, successivamente tramite js le aggiungo nel codice html in base alle condizioni stabilite con gli IF e all'interno del mio ciclo FOR. 
