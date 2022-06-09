// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero.

let numbers = prompt('inserisci numero');

let sum = 0;

for ( let i = 0; i < numbers.length; i++) {
    
    let number = parseInt(numbers[i]);

    sum += number;
    console.log(sum);
}