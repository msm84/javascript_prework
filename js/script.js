/**
 * Describe this function...
 */
let playerResult = 0; //zadeklarowałem początkową wartość wyników gracza i komputera//
let computerResult = 0;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    /**
     * Później opisać
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }
    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
            playerResult++; //zwiększam wynik gracza o 1//
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
            playerResult++;
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
            playerResult++;
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis!');
        } else {
            printMessage('Przegrywasz :(');
            computerResult++; //zwiększam wynik komputera o 1//
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    let playerInput;
    let playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    let results = document.getElementById('results'); //pobieram DIV results do zmiennej results//
    results.innerHTML = playerResult + ' : ' + computerResult; //wstawiam wynik gry do DIVa results//
}

let buttonRock = document.getElementById('button-rock');
let buttonPaper = document.getElementById('button-paper');
let buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function() { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function() { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function() { buttonClicked('nożyce'); });