function getUserChoice(userInput){
    userInput = userInput.toLowerCase();

    if(userInput === 'rock'){
        return userInput;
    }
    else if(userInput ==='paper'){
        return userInput;
    }
    else if(userInput=='scissors'){
        return userInput;
    }
    else{
        return console.log("error");
    }
}

function getComputerChoice(){
    
    var ran = Math.floor(3*Math.random());
    if(ran == 0){
        return 'rock';
    }
    else if(ran == 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice){
    
    if (userChoice===computerChoice) {
        return console.log("Tie");
    }
    
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return console.log("Computer Won");
        }
        else{
            return console.log("User Won");
        }
    }

    if(userChoice==="paper"){
        if(computerChoice==='scissors'){
            return console.log("Computer Won");
        }
        else{
            return console.log("User Won");
        }
    }

    if(userChoice==='scissors'){
        if(computerChoice==='rock'){
            return console.log("Computer Won");
        }
        else{
            return console.log("User Won");
        }
    }
}

function  playGame() {
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice();

    console.log("userChoice: "+userChoice+"\ncomputerChoice: "+computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();