let card = document.querySelectorAll(".card");
let hasFlippedCard= false;
let lockBoard = false;
let firstCard, secondCard;
let finish = 0;
let winwin = document.getElementById("winwin");

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
        winwin.showModal()
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

card.forEach(cards => cards.addEventListener("click", flipCard));


