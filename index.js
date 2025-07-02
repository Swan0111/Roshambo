let userscr= 0
let compscr = 0

const choices = document.querySelectorAll(".choice");
const m= document.querySelector("#msg");
const userscoreP = document.querySelector(".user-score");
const compscoreP = document.querySelector(".comp-score");
const cc= () => {
    const options = ["rock", "paper", "scissors"];
    const rindx=Math.floor(Math.random()*3)
    return options[rindx];
}
const showwin = (userWon) => {
    if (userWon) {
        userscr++;
        console.log("You won!");
        m.innerText= "You won!";
        userscoreP.innerText = userscr;
    } else {
        compscr++;
        compscoreP.innerText = compscr;
        console.log("You lost!");
        m.innerText= "You lost!";
    }
}
const playgame =(userChoice) => {
    console.log("user choice", userChoice);
    //genrate computer choice
    const computerchoice = cc();
    console.log("computer choice", computerchoice);

    if (userChoice === computerchoice) {
        console.log("It's a tie!") ;
        m.innerText= "It's a tie!";
    }else{
        let userWon = true;
        if (userChoice === "rock") {
            userWon = computerchoice === "scissors"? true : false;
        } else if (userChoice === "paper") {
            userWon = computerchoice === "rock"? true : false;
        }else{
            userWon = computerchoice === "paper"? true : false;
        }
        showwin(userWon);
    }


}
choices.forEach((choice) => {
    console.log("choice", choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playgame(userChoice);
    });
});



