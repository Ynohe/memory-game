const modal = document.getElementById("modal");
const gameSection = document.getElementById("gameSection");
const scoreDiv = document.getElementById("scoresDiv");
const userForm = document.getElementById("userForm");

const scores = [];

class Scores {
    constructor(id, user, time) {
        this.id = id;
        this.user = user;
        this.time = time;
    }
}

window.onload = (event) => {
    modal.showModal();
};

let ids = 0;

userForm.addEventListener("submit", takeUsername);

function takeUsername(event) {
    ids++
    let username = document.getElementById("username");

    const player = new Scores(ids, username.value, 0);
    scores.push(player);

    showPlayer();

    console.log(username)
}

function showPlayer() {
    scoreDiv.innerHTML = "";

    scores.forEach(element => {
        scoreDiv.innerHTML += `
        <div class="users-score">
            <h4>${element.user}</h4>
            <p>Now Playing</p>
        </div>
        `
    });
}



