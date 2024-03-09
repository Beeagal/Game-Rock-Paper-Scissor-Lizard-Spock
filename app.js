let userScore= 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissor_div= document.getElementById("s");
const lizard_div= document.getElementById("l");
const spock_div= document.getElementById("k");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";
    if (letter === "l") return "Lizard";
    return "Spock";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub() ;
    const smallCompWord = "comp".fontsize(3).sub() ;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML= `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord} You Win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub() ;
    const smallCompWord = "comp".fontsize(3).sub() ;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML= `${convertToWord(computerChoice)} ${smallCompWord} beats ${convertToWord(userChoice)} ${smallUserWord} You Lost... 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);

}

function draw (userChoice, computerChoice) {

    
    const smallUserWord = "user".fontsize(3).sub() ;
    const smallCompWord = "comp".fontsize(3).sub() ;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML= `It's a Draw... `;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 400);

}


function game(userChoice) {
  const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    case "sl":
    case "rl":
    case "lk":
    case "ks":
    case "lp":
    case "pk":
    case "kr":
        win(userChoice, computerChoice);
        break;
    case "sr":
    case "rp":
    case "ps":
    case "ls":
    case "lr":
    case "kl":
    case "sk":
    case "pl":
    case "kp":
    case "rk":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "kk":
        draw(userChoice, computerChoice);
        break;
   }

}


function main () {
    rock_div.addEventListener('click', () =>game("r"));
    paper_div.addEventListener('click', () =>game("p"));
    scissor_div.addEventListener('click', () =>game("s"))
    lizard_div.addEventListener('click', () =>game("l"))
    spock_div.addEventListener('click', () =>game("k"))
}
main();

