//generate random number from 1 to 100
let generator = Math.floor(Math.random() * 100) + 1;
let score = document.getElementById("score");
let highestScore = 0;
let currentScore = 10;
generator = Math.floor(Math.random() * 100) + 1;

//array that will store user guess length should be 10 because user can only guess 10 times
let guessHistory = [];
let list;
let guessList;
//create function to check for answer
document.getElementById("check").addEventListener("click", checkAnswer);
function checkAnswer(){
    let input = document.getElementById("input").value;
    if(guessHistory.includes(input)){
        let error = document.getElementById("error");
        error.style.display = 'block';
        error.textContent = 'You have already tried this number';
    }else{
        //adding guesses to history list 
        list = document.createElement("li")
        guessList = document.getElementById("guessList");
        list.innerHTML = input;
        guessList.appendChild(list);
        guessHistory.push(input);

        if (input.length === 0 || isNaN(input)) {
            let error = document.getElementById("error");
            error.style.display = 'block';
            error.textContent = 'no input or invalid value';
        }else if(input < 1 || input > 100){
            let error = document.getElementById("error");
            error.style.display = 'block';
            error.textContent = 'You can only enter numbers between 1 and 100';
        }else if(input < generator){
            let error = document.getElementById("error");
            error.style.display = 'block';
            error.textContent = 'Guess is too low';
            currentScore = currentScore - 1;
            score.textContent = currentScore;
        }else if(input > generator){
            let error = document.getElementById("error");
            error.style.display = 'block';
            error.textContent = 'Guess is too high';
            currentScore = currentScore - 1;
            score.textContent = currentScore;
        
        }else if (currentScore > 0 && input == generator){
            if(currentScore>highestScore){
                highestScore = currentScore;
            }
            document.getElementById("highestScore").textContent = highestScore;
            document.getElementById("interact").style.display = 'none';
            document.getElementById("congrats").style.display = 'block';
            document.getElementById("winningScore").textContent = currentScore;
            document.getElementById("best").textContent = highestScore;
            const secretNum = document.getElementById("winGuess").textContent = generator;
            secretNum = Math.floor(Math.random() * 100) + 1;
        }
        
        if(currentScore == 0){
            document.getElementById("secretNumber").textContent = generator;
            document.getElementById("interact").style.display = 'none';
            document.getElementById("resetButton").style.display = 'none';
            document.getElementById("loseGame").style.display = 'block';
            generator = Math.floor(Math.random() * 100) + 1;
            
        }
        if(currentScore < 0){
            currentScore = 10;
            score.textContent = currentScore;
        }
    }
    
}


//try again by reseting score 
document.getElementById("tryAgain").addEventListener("click", tryAgain);
function tryAgain(){
    currentScore = 10;
    score.textContent = currentScore;
    error.textContent = 'Guess a Number';
    input = document.getElementById("input").value = null;
    document.getElementById("interact").style.display = 'block';
    document.getElementById("resetButton").style.display = 'block';
    document.getElementById("loseGame").style.display = 'none';
    generator = Math.floor(Math.random() * 100) + 1;
    guessHistory = [];
    document.getElementById("guessList").textContent = "";
}
document.getElementById("playAgain").addEventListener("click", playAgain);
function playAgain(){
    currentScore = 10;
    score.textContent = currentScore;
    error.textContent = 'Guess a Number';
    input = document.getElementById("input").value = null;
    document.getElementById("interact").style.display = 'block';
    document.getElementById("congrats").style.display = 'none';
    generator = Math.floor(Math.random() * 100) + 1;
    guessHistory = [];
    document.getElementById("guessList").textContent = "";
}

document.getElementById("resetButton").addEventListener("click",reset);
function reset(){
    currentScore = 10;
    score.textContent = currentScore;
    error.textContent = 'Guess a Number';
    input = document.getElementById("input").value = null;
    highestScore = 0;
    document.getElementById("highestScore").textContent = highestScore;
    document.getElementById("interact").style.display = 'block';
    document.getElementById("congrats").style.display = 'none';
    document.getElementById("loseGame").style.display = 'none';
    generator = Math.floor(Math.random() * 100) + 1;
    guessHistory = [];
    document.getElementById("guessList").textContent = "";
}



