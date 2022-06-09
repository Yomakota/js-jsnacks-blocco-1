// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {

    const allNumbers = numbers[i];

    if ( i % 2 === 0 ) {

        let red = document.getElementById('red').innerHTML += allNumbers;
        console.log(red);
        
    } else {

        let green = document.getElementById('green').innerHTML += allNumbers;
        console.log(green);
    }
}