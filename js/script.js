function playGame(playerInput){
  clearMessages();
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
 // console.log('Gracz wpisał: ' + playerInput);

  //let computerMove = getMoveName(argMoveId);

  function getMoveName(argMoveId){
    console.log('wywołano getMoveName ');
    console.log ('argument: ' + argMoveId);
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } else{
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      } 
  }

  getMoveName(playerInput) //ruch gracza
  getMoveName(randomNumber) //ruch komputera

  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    console.log('wywołano displayResult ');
    console.log('argumenty: ' + argComputerMove + ',' + argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }

  }

  displayResult(getMoveName(randomNumber), getMoveName(playerInput));
}
  let playRock = document.getElementById('play-rock');
  playRock.addEventListener('click', function(){
    playGame('1')
  });
  let playPaper = document.getElementById('play-paper');
  playPaper.addEventListener('click', function(){
    playGame('2')
  });
  let playScissors = document.getElementById('play-scissors');
  playScissors.addEventListener('click', function(){
    playGame('3')
  });



//playGame(3);


/*
if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber == 2){
  computerMove = 'papier';
}else if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
*/




/*
if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerInput == '2'){
  playerMove = 'papier';
}else if(playerInput == '3'){
  playerMove = 'nożyce';
}
*/

//printMessage('Twój ruch to: ' + playerMove);

/*if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}else if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty Wygrywasz!');
}else if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Komputer Wygrywa!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Komputer Wygrywa!');
}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty Wygrywasz!');
}

if( computerMove == 'papier', 'nożyce', 'kamień' && playerMove == 'nieznany ruch'){
  printMessage('Nieznany ruch!');
}

if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}else if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!')
}

*/

/*document.getElementById('test-button').addEventListener('click', 
  function(){
    printMessage('Guzik został kliknięty');
  }
);*/