let argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, playerResultValue, computerResultValue;
buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
playerResultValue = +document.getElementById('player-result-value').textContent;
computerResultValue = +document.getElementById('computer-result-value').textContent;


function buttonClicked(argButtonName){
  clearMessages();
  console.log(argButtonName + "został kliknięty");


function getMoveName(argMoveId) {
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
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerResultValue++;
    printPlayerResult(playerResultValue);
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerResultValue++;
    printPlayerResult(playerResultValue);
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerResultValue++;
    printPlayerResult(playerResultValue);
  } else if (argPlayerMove == computerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
    computerResultValue++;
    printComputerResult(computerResultValue);
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
computerMove = getMoveName(randomNumber);
displayResult(playerMove, computerMove);

}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

let playerResultElement = document.getElementById('player-result-value');
let computerResultElement = document.getElementById('computer-result-value');

function changeColorResult() {
  if (computerResultValue < playerResultValue) {
    playerResultElement.classList.add("win");
    computerResultElement.classList.remove("win");
    computerResultElement.classList.add("lose");
    computerResultElement.classList.remove("draw");
    playerResultElement.classList.remove("draw");
  } else if (computerResultValue > playerResultValue) {
    computerResultElement.classList.add("win");
    playerResultElement.classList.remove("win");
    playerResultElement.classList.add("lose");
    computerResultElement.classList.remove("draw");
    playerResultElement.classList.remove("draw");
  } else if (computerResultValue == playerResultValue) {
    playerResultElement.classList.remove("win");
    playerResultElement.classList.remove("lose");
    computerResultElement.classList.remove("win");
    computerResultElement.classList.remove("lose");
    playerResultElement.classList.add("draw");
    computerResultElement.classList.add("draw");
  }
}

buttonRock.addEventListener('click', function() {changeColorResult()});
buttonPaper.addEventListener('click', function() {changeColorResult()});
buttonScissors.addEventListener('click', function() {changeColorResult()});