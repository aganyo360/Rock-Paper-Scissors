    //query and select all the button choices
    let rock = document.querySelector('.rock')
    let paper = document.querySelector('.paper')
    let scissors = document.querySelector('.scissors')

    // lets get computer choice
    let getComputerChoice = ()=>{
        let x = Math.random()*3
        // console.log(x) for the purposing of testng whether x is retuning anything
        
        if(x<1){
            return `ROCK`
        }
        else if(x>=1 && x<2){
            return `PAPER`
        }
        else{
            return `SCISSORS`
        }   
        
    }
    let handleClick = (userChoice)=>{
        let userValue =userChoice.toUpperCase();
        console.log("user selected:", userValue);
        return userValue
    };
    rock.addEventListener('click', ()=>{
        let computerSelection = getComputerChoice()
        handleClick("ROCK")
        console.log(computerSelection)
       
    }
    )
    paper.addEventListener('click', ()=>{
        handleClick("PAPER")                                                            
    })
    scissors.addEventListener('click', ()=>{
        handleClick("SCISSORS") 
    })


// // Now let's dive in for some fun

let playRound =()=>{

}


