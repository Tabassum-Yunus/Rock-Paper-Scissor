let userScore = document.querySelector("#user-score");
let sysScore = document.querySelector("#sys-score");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");

const choices = document.querySelectorAll(".box");
let uScore = 1;
let sScore = 1;

newGame.addEventListener("click", () =>{
    userScore.innerText = 0;
    sysScore.innerText = 0;
    uScore = 1;
    sScore =1;
    msg.innerText = `Play your move`;
    msg.style.backgroundColor = "rgb(32, 31, 31)";
})

const genSysChoice = () =>{
    let options = ["rock", "paper", "scissor"];
    let randomIndx = Math.random()*3;           // random no between 0 - 2
    let SysChoice = options[Math.floor(randomIndx)];
    return SysChoice;
}

choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame = (userChoice) =>{
    // Generate system choice
    const sysChoice = genSysChoice();
    console.log(`Me: ${userChoice}`);
    console.log(`System: ${sysChoice}`);
    if(userChoice === sysChoice){
        console.log("DRAAW");
        msg.innerText = `Game was draw. Play again.`;
        msg.style.backgroundColor = " rgb(79, 71, 71)";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (sysChoice === "paper" ? false : true);
        }
        else if(userChoice === "paper"){
            userWin = (sysChoice === "scissor" ? false : true);
        }
        else{
            userWin = (sysChoice === "rock" ? false : true);
        }
        showWinner(userWin, userChoice, sysChoice);
    }
}

const showWinner = (userWin, userChoice, sysChoice) =>{
    if(userWin){
        userScore.innerText = uScore++;
        console.log("YOU WIN");
        msg.innerText = `You won! ${userChoice} beats ${sysChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        sysScore.innerText = sScore++;
        console.log("SYSTEM WIN");
        msg.innerText = `You lose. ${sysChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}






