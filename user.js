const userModal = document.getElementById("usernameModal");
const gameSection = document.getElementById("gameSection");
const scoreDiv = document.getElementById("scoresDiv");
const userForm = document.getElementById("userForm");
const playButton = document.getElementById("playButton");
let ids = 0;

let localStoreData = [];

let scoresArr;

let hardMode;

function showScores() {
    scoreDiv.innerHTML = "";

    if (localStorage.getItem("userScores")) {
        localStoreData = JSON.parse(localStorage.getItem("userScores"));
    } else {
        localStorage.setItem("userScores", JSON.stringify(localStoreData));
    };

    scoresArr = [...localStoreData]
    
    scoresArr.forEach(item => {
        scoreDiv.innerHTML += `
                    <div class="users-score">
                        <h4>${item.user}</h4>
                        <p>Time: ${item.time}</p>
                    </div>
                    `
    })
}

showScores();


class Scores {
    constructor(id, user, time) {
        this.id = id;
        this.user = user;
        this.time = time;
    };
};

playButton.addEventListener("click", startGame);

function startGame(event) {
    card.forEach(item => {
        item.classList.remove("flip");
    })
    userModal.classList.add("modal--show");

    if(event.target.matches('.easyMode')){
    hardMode = false;
    }else if(event.target.matches('.hardMode')){
        hardMode = true;
    }

    shuffle();
};

userForm.addEventListener("submit", takeUsername);

function takeUsername(event) {
    event.preventDefault();

    userModal.classList.remove("modal--show");

    ids++
    let username = document.getElementById("username");

    const player = new Scores(ids, username.value, 0);
    scoresArr.unshift(player);

    localStorage.setItem("userScores", JSON.stringify(scoresArr));

    showPlayer();

    timeCount();
};

let timer;
let milisecondsSpend = 0;
let timeSpendPlaying = 0;
let x;

function timeCount() { 
    const counterMiliseconds = 1;
    timer = setInterval(() => {
        milisecondsSpend += 1;
        if (milisecondsSpend === 1000) {
            milisecondsSpend = 0;
            timeSpendPlaying += 1;
        }
    }, counterMiliseconds)
}

function finishTime(){
        clearInterval(timer);

        x = timeSpendPlaying + ',' + milisecondsSpend;
        milisecondsSpend = 0;
        timeSpendPlaying = 0;
}

function showPlayer() {
    scoreDiv.innerHTML = "";

    scoresArr.forEach((element, index) => {

        if (index == 0) {
            scoreDiv.innerHTML += `
                <div class="users-score" style="color:red">
                    <h4>${element.user}</h4>
                    <p>Now playing</p>
                </div>
                `
        }

        if (index > 0) {
            scoreDiv.innerHTML += `
            <div class="users-score">
                <h4>${element.user}</h4>
                <p>Time: ${element.time}</p>
            </div>
            `
        }
    });
};