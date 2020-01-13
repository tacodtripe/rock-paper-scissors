let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("userScore");
let compScore_span = document.getElementById("compScore");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let text_h1 = document.getElementById("text");




function getCompChoice(){
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function win( userChoice, compChoice) {
    userScore_span.innerHTML = ++userScore;
    text_h1.innerHTML = "Your " + userChoice + " won the computer's " + compChoice;
}

function lose(userChoice , compChoice) {
    compScore_span.innerHTML = ++compScore;
    text_h1.innerHTML = "Your " + userChoice + " lost to the computer's " + compChoice;
}

function draw(userChoice , compChoice) {
    text_h1.innerHTML = "It's a draw."
}





function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice , compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice , compChoice);
            break;

    } 
}


rock_div.addEventListener('click', function(){
   game("rock")
})

paper_div.addEventListener('click', function(){
    game("paper")
})

scissors_div.addEventListener('click', function(){
    game("scissors")
})
