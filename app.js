// get computer input

let getComputerChoice = ()=>{
    let randomPick = Math.random()*3;
    if(randomPick<1){
        return "rock".toUpperCase()
    }
    else if(randomPick >1 && randomPick< 2){
        return "paper".toUpperCase()
    }
    else if(randomPick>= 2){
        return "scissors".toUpperCase()
    }
}
// get human choice

let getHumanChoice=()=>{
    let humanPick= prompt("Choose a selection: ")
    
    if(humanPick===null || humanPick.trim()==="" ){
        alert("You didn't make a choice");
        return null
    }
    humanPick = humanPick.toUpperCase()
   if(humanPick === "ROCK" || humanPick==="PAPER" || humanPick=="SCISSORS"){
        return humanPick;
    }
    
    else{
        alert("Invalid Choice Pick Rock or Scissors")
        return null;
    }
    
};
// getHumanChoice()

let playRound = (humanChoice,computerChoice)=>{
  

   // lets now set the logic to who will win the round

   if(humanChoice===computerChoice){
        console.log(`it's draw ${humanChoice} and ${computerChoice} are equal`)
        return "draw"
   }

   else if(
    (humanChoice==="ROCK" && computerChoice==="SCISSORS") ||
    (humanChoice==="PAPER" && computerChoice==="ROCK")||
    (humanChoice==="SCISSORS" && computerChoice==="PAPER")
   ){
    console.log(`You win ${humanChoice} beats ${computerChoice}`)
    return "human"
   }
   else{
    console.log(`You lose ${computerChoice} beats ${humanChoice}`)
    return "computer"
   }



}  


let playGame =()=>{
    let computerScore=0
    let humanScore =0
    for(let round= 1; round<6; round++){

        let humanChoice=getHumanChoice()
        let computerChoice=getComputerChoice()
        
        if(humanChoice===null){
            console.log("Invalid input. Skipping Round")
            continue;
        }
        
        console.log(`Round ${round} you chose ${humanChoice}, Computer chose ${computerChoice}`)
        let scores =playRound(humanChoice, computerChoice)
        
        if(scores==="human"){
            humanScore++
        }
        else if(scores==="computer"){
            computerScore++
        }
        
        console.log(`Current Score: YOU: ${humanScore} 
            computer: ${computerScore}`)
        
    }
    if(humanScore> computerScore){
        console.log(`Yown won by ${humanScore} Points`)
    }
    else if(humanScore==computerScore){
        console.log("its a draw")
    }
    else{
        console.log("computer wins by "+ computerScore)
    }
}
playGame()