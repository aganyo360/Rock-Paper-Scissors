//query and select all the button choices
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let displayResults = document.querySelector(".display-results");
let userResult = document.querySelector(".userChoice");
let userScore= 0;
let computerScore =0
let roundPlayed =0;

// lets get computer choice
let getComputerChoice = () => {
  let x = Math.random() * 3;
  // console.log(x) for the purposing of testng whether x is retuning anything

  if (x < 1) {
    return `ROCK`;
  } else if (x >= 1 && x < 2) {
    return `PAPER`;
  } else {
    return `SCISSORS`;
  }
};

let handleClick = (userChoice) => {
  let computerChose = getComputerChoice();
  let humanPick = userChoice.toUpperCase();
  userResult.textContent = `User chose: ${humanPick} | Computer chose: ${computerChose}`;

  // lets compare the values;
    let result = compareChoice(humanPick,computerChose)
    showResults(result)


};

let compareChoice= (userChoice, computerChoice)=>{
    if(userChoice === computerChoice){
        return `It's a tie`
    }
    if (
        (userChoice ==="ROCK" && computerChoice ==="SCISSORS" ) ||
        (userChoice==="PAPER" && computerChoice === "ROCK")||
        (userChoice==="SCISSORS" && computerChoice === "PAPER")
       ){
        userScore++
        return `You Won`
       }
    computerScore++   
    return `computer wins`

}
rock.addEventListener("click", () => {
  if(roundPlayed<5)handleClick("ROCK");
});
paper.addEventListener("click", () => {
  if (roundPlayed<5) handleClick("PAPER");
});
scissors.addEventListener("click", () => {
  if(roundPlayed<5)handleClick("SCISSORS");
});

let showResults  =(result) =>{
    displayResults.innerHTML =''

    let resultDisplay= document.createElement("p")
    resultDisplay.textContent = result;
    displayResults.appendChild(resultDisplay)

    //let now show the current score for each round

    let scoreDisplay = document.createElement("p")
    scoreDisplay.textContent = `Score  - User:${userScore} Computer : ${computerScore    }`
    displayResults.appendChild(scoreDisplay)

    roundPlayed++

    if(roundPlayed===5){
        showFinalWinner();
    }

}

let showFinalWinner= ()=>{
    let finalResult ='';
    if(userScore > computerScore){
        finalResult = `YOU WON THE GAME By ${userScore} Points`
    }
    else if(userScore<computerScore){
        finalResult ="Computer Wins"
    }
    else{
        finalResult =`It's a tie`
    }


    //Display the final results

    displayResults.innerHTML =''
    let finalResultDisplay = document.createElement("p")
    finalResultDisplay.textContent = finalResult
    displayResults.appendChild(finalResultDisplay)

    let restartMessage = document.createElement("p");
    restartMessage.textContent = "Click any button to play again!";
    displayResults.appendChild(restartMessage);


    userScore=0
    computerScore=0;
    roundPlayed=0
}