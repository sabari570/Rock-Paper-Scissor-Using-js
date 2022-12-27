let player_score = document.getElementById("player-score");
let hands = document.getElementById("hands");
let result = document.getElementById("result");
let endGameButton = document.getElementById("endGameButton");


function getComputerChoice() {
    let rpsChoices = ["rock","paper","scissors"];
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
    return computerChoice;
}



function getResult(playerChoice, computerChoice) {
    let score;
    if(playerChoice == computerChoice){
        score = 0;
    }else if(playerChoice == "rock" && computerChoice == "scissors"){
        score = 1;
    }else if(playerChoice == "paper" && computerChoice == "rock"){
        score = 1;
    }else if(playerChoice == "scissors" && computerChoice == "paper"){
        score = 1;
    }else{
        score = -1;
    }
    console.log(score)
    return score;
}


function showResult(score, playerChoice, computerChoice) {
    if(score == 1){
        result.innerText = "You Win!";
    }else if(score == 0){
        result.innerText = "It's a draw!";
    }else{
        result.innerText = "You Lose!";
    }
    player_score.innerText = `${Number(player_score.innerText)+score}`;
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
    computerChoice = getComputerChoice();
    let score = getResult(playerChoice,computerChoice);
    showResult(score,playerChoice,computerChoice);
}
function playGame() {
    console.log("inside playgame()")
    let rpsButtons = document.querySelectorAll(".rpsButton")
    rpsButtons.forEach(rpsButton => {
        console.log("inside forEach()")
        rpsButton.onclick = () => {
            console.log(`Value clicked = ${rpsButton.value}`)
            onClickRPS(rpsButton.value)
        }
    })
    endGameButton.onclick = () => endGame();
}

function endGame() {
    player_score.innerText = "";
    hands.innerText = "";
    result.innerText = "";
}

playGame()
