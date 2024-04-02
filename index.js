function randomnum() {
    let RandNum = Math.floor(Math.random() * 3); 
    return RandNum
 }

 
 function getComputerChoice() {
     
     let RandomNumber = randomnum()
     if (RandomNumber === 0) {
  return "rock"
}

else if (RandomNumber === 1) {
  return "paper"
}

else {
  return "scissors"
}

 }

//  console.log(getComputerChoice())

  function getPlayerChoice() {
  let UserInput = prompt("What would you like to play?")
  return UserInput.toLowerCase().trim()
}

//  console.log (getPlayerChoice())

 let ComputerScore = 0
 let playerScore = 0

function playRound(ComputerChoice, PlayerChoice) {
 
  console.log("Computer played " + ComputerChoice)
  console.log("Player picked " + PlayerChoice)

if (!(PlayerChoice == "scissors" || PlayerChoice == "rock" || PlayerChoice == "paper")){
    return "You picked the wrong option, fool"
}

  if (ComputerChoice == PlayerChoice) {
    return "draw"
  }

else if (ComputerChoice == "rock" && PlayerChoice == "scissors") {
    ComputerScore++; 
    return("Computer Wins! Score is: Computer: " + ComputerScore + " Player: " + playerScore)
  }

  else if (ComputerChoice == "paper" && PlayerChoice == "rock") {
    ComputerScore++; 
    return("Computer Wins! Score is: Computer: " + ComputerScore + " Player: " + playerScore)
  }

  else if (ComputerChoice == "scissors" && PlayerChoice == "paper") {
    ComputerScore++; 
    return("Computer Wins! Score is: Computer: " + ComputerScore + " Player: " + playerScore)
    
  }

  else {
    playerScore++;
    return("Player Wins! Score is: Computer: " + ComputerScore + " Player: " + playerScore)
  }
}

for (let index = 0; index < 5; index++) {
    
     console.log(playRound(getComputerChoice(),getPlayerChoice()))

    
}

console.log(playerScore == ComputerScore?"The game was a draw": ((playerScore > ComputerScore?"player ": "computer ") + "Wins the game!"))