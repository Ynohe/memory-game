const seconds = document.getElementById("seconds");
seconds.addEventListener("click", threeSeconds);
const startFront = document.querySelectorAll(".front-image");
const startBack = document.querySelectorAll(".back-image");


function threeSeconds() {
    startFront.forEach(front => {
        front.style.animation = "start-front 3s";
    });
    
    startBack.forEach(back => {
        back.style.animation = "start-back 3s";
    });

    card.forEach(cards => cards.addEventListener("click", flipCard));
}