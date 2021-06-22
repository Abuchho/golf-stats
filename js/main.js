
// Input Color

function inputColor(e){
    e.style.background= '#dde8ed';
}

function colorInputExit(e){
    e.style.background= '#fff';
}

//------------------------------

function golfHole (fairway, green, distance, putts, score) {
    this.fairway = fairway;
    this.green = green;
    this.distance = distance;
    this.putts = putts;
    this.score = score;

}




var currentHole = 'Hole 1';

let holesDataArr = {};

const gatherData = function(event){
    let getFairwayRadio = document.querySelector('input[name = Fairway]:checked').value;

    let getGreenRadio = document.querySelector('input[name = Green]:checked').value;

    let getDistance = document.getElementById('drivingInput').value;

    let getPutts = document.getElementById('puttsInput').value;

    let getScore = document.getElementById('scoreInput').value;


    event.preventDefault();

    let hole = new golfHole (getFairwayRadio, getGreenRadio, getDistance, getPutts, getScore);

    holesDataArr[currentHole] = hole;

    document.querySelector('form').reset();

    let toString = JSON.stringify(holesDataArr);

    localStorage.setItem('holeData', toString);

}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('submitInput').addEventListener('click', gatherData);

    document.getElementById('holesList').addEventListener('click', function(event){
        console.log(event.target.innerText);

        currentHole = event.target.innerText;

        document.getElementById('holeBtn').innerText = currentHole;


    });

});











