const card = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let finish = 0;
const winnerModal = document.getElementById("winnerModal");
const winPopup = document.getElementById("winPopup");
const allImages = document.querySelectorAll(".card-face");

function flipCard(){
    if (lockBoard) return;
    this.classList.add("flip");
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard= this;
    hasFlippedCard= false;
    
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards(){
    
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    finish++
    console.log(finish);
    if (finish === 8){ 
        finishTime();
        winnerModal.classList.add("modal--show");
        winPopup.innerHTML += `
            <p>Your time is ${x} seconds</p>
        `
        scoresArr[0].time = x;
        localStorage.setItem("userScores", JSON.stringify(scoresArr));
        finish = 0;

        allImages.forEach(item => {
            item.removeAttribute("style");
        })
    }

}

function unflipCards(){
    lockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
    }, 1500);
}

winnerModal.addEventListener("click", (e) => {
    if(e.target.matches("#playAgainButton")) {
        
        winnerModal.classList.remove("modal--show");
        winPopup.lastElementChild.remove();

        startGame();
        
    };

    if(e.target.matches("#spanClose")) {
        winnerModal.classList.remove("modal--show");
        winPopup.lastElementChild.remove();

        showScores();
    };
})

