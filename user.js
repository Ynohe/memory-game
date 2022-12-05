const modal = document.getElementById("modal");
const gameSection = document.getElementById("gameSection");
const scoreDiv = document.getElementById("scoresDiv");
const userForm = document.getElementById("userForm");
const playButton = document.getElementById("playButton");
let ids = 0;

let localStoreData = [];

if(localStorage.getItem("userScores")) {
    localStoreData = JSON.parse(localStorage.getItem("userScores"));
} else {
localStorage.setItem("userScores", JSON.stringify(localStoreData));
};

const scoresArr = [...localStoreData];

function showScores() {
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

function startGame() {
    modal.showModal();
};

userForm.addEventListener("submit", takeUsername);

function takeUsername(event) {
    ids++
    let username = document.getElementById("username");

    const player = new Scores(ids, username.value, 0);
    scoresArr.unshift(player);

    localStorage.setItem("userScores", JSON.stringify(scoresArr));

    showPlayer();
};

function showPlayer() {
    scoreDiv.innerHTML = "";

    scoresArr.forEach((element, index) => {

        if(index == 0) {
            scoreDiv.innerHTML += `
                <div class="users-score">
                    <h4>${element.user}</h4>
                    <p>Now playing</p>
                </div>
                `
        }

        if(index > 0) {
            scoreDiv.innerHTML += `
            <div class="users-score">
                <h4>${element.user}</h4>
                <p>Time: ${element.time}</p>
            </div>
            `
        }
    });
};



