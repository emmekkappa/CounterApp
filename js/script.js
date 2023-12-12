// Funzione per la creazione di un pulsante con contenuto e ID specificato
function createButton(id, textContent) {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = textContent;
    return button;
}

// Funzione per la creazione della Counter App
function createCounterApp() {
    // Creazione del container della Counter App
    const counterContainer = document.createElement('div');
    counterContainer.classList.add('counter');

    // Creazione dell'elemento valore del contatore
    const counterValueElement = document.createElement('h1');
    counterValueElement.id = 'counterValue';
    counterValueElement.textContent = '0';

    // Creazione del container dei pulsanti
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Creazione del pulsante incremento
    const incrementButtonWrapper = document.createElement('div');
    incrementButtonWrapper.classList.add('button-wrapper');
    const incrementButton = createButton('incrementBtn', '+');

    // Creazione del pulsante diminuzione
    const decrementButtonWrapper = document.createElement('div');
    decrementButtonWrapper.classList.add('button-wrapper');
    const decrementButton = createButton('decrementBtn', '-');

    // Aggiunta degli elementi al documento
    document.body.appendChild(counterContainer);
    counterContainer.appendChild(counterValueElement);
    counterContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(decrementButtonWrapper);
    buttonContainer.appendChild(incrementButtonWrapper);
    decrementButtonWrapper.appendChild(decrementButton);
    incrementButtonWrapper.appendChild(incrementButton);

    // Inizializzazione del valore del contatore
    let counter = 0;

    // Funzione per aggiornare il valore del contatore
    function updateCounterValue() {
        counterValueElement.textContent = counter;
    }

    // Event listener per i click pulsante 
    buttonContainer.addEventListener('click', function (event) {

        // Controlla se elemento cliccato è bottone
        if (event.target.tagName === 'BUTTON') {

        // Aumento o diminuzione del contatore in base al pulsante cliccato
            counter += event.target.id === 'incrementBtn' ? 1 : -1;

        // Aggiornamento del contatore
        updateCounterValue();
        }
    });

    // Aggiornamento iniziale del contatore
    updateCounterValue();
}

// Creazione di Counter App
createCounterApp();
