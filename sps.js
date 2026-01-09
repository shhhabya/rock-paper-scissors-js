let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
let bottomtext = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let rstbtn = document.querySelector("#rst-btn");

rstbtn.addEventListener("click",() =>{
    userscore.textContent = 0;
    compscore.textContent = 0;
    bottomtext.textContent = "Play Your Move.";
});
const AI = () => {
    const options = ["rock", "paper", "scissor"];
    let compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];
}
const draw = () => {
    bottomtext.textContent = "Game was draw.";
}
const showWinner = (userWin) => {
    if (userWin === true) {
        userscore.textContent++;
    }
    else {
        compscore.textContent++;
    }
}
const result = (userChoice, userWin) => {
    if (userChoice === "rock") {
        if (userWin == true) {
            bottomtext.textContent = "WIN! Computer chose scissors.";
        }
        else {
            bottomtext.textContent = "Lost! Computer chose paper.";
        }
    }
    else if(userChoice==="paper") { 
        if (userWin == true) {
            bottomtext.textContent = "WIN! Computer chose rock.";
        }
        else {
            bottomtext.textContent = "Lost! Computer chose scissor.";
        }
    }
    else{
        if (userWin == true) {
            bottomtext.textContent = "WIN! Computer chose paper.";
        }
        else {
            bottomtext.textContent = "Lost! Computer chose rock.";
        }
    }
}
const playGame = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
        result(userChoice,userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice, AI());
    });
});