let displayPoints;
// get last results of the user
let lastPoints = localStorage.getItem('result');

if(lastPoints === null){
    displayPoints = 0;
}else{
    displayPoints = lastPoints;
}

const actualUserDisplay = document.getElementById('pointsActualUser');
actualUserDisplay.innerText = displayPoints + ' score';

const counterMiliseconds = 1;
let milisecondsSpend = 0;
let timeSpendPlaying = 0;
let timer = setInterval(()=>{
    actualUserDisplay.innerText = 'Actual playing...';
    milisecondsSpend += 1;
    if(milisecondsSpend === 1000){
        milisecondsSpend = 0;
        timeSpendPlaying += 1;
    }
    console.log(timeSpendPlaying + ',' + milisecondsSpend)
}, counterMiliseconds)

//test 
let h2 = document.querySelector('h2');
h2.addEventListener('click', stopClock)

function stopClock(){
    clearInterval(timer);

    let matchResult = timeSpendPlaying + '.' + milisecondsSpend;
    let newResult = +displayPoints + +matchResult;
    
    localStorage.setItem('result', newResult)

    actualUserDisplay.innerText = newResult + ' score';
}