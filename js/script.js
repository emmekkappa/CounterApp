// Selezione degli elementi HTML
const counterValueElement = document.querySelector('#counterValue');
const incrementButton = document.querySelector('#incrementBtn');
const decrementButton = document.querySelector('#decrementBtn');

// Inizializzazione del valore del contatore
let counter = 0;

// Funzione per aggiornare il valore del contatore
function updateCounterValue() {
    counterValueElement.textContent = counter;
}

// Event listener per il pulsante aumento del contatore
incrementButton.addEventListener("click", function () {
    // Incremento del valore del contatore
    counter++;
    // Aggiornamento del valore del contatore
    updateCounterValue();
});

// Event listener per il pulsante diminuzione del contatore
decrementButton.addEventListener("click", function () {
    // Diminuzione del valore del contatore
    counter--;
    // Aggiornamento del valore del contatore
    updateCounterValue();
});

// Aggiornamento iniziale del contatore
updateCounterValue();
