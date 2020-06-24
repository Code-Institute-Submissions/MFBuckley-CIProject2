let order = []; //order in which lights will flash
let playerOrder = []; //order player is pressing lights in
let flash; //integer number of flashes that have appeared in the game
let turn;
let good; //Boolean: whether or not player is doing well
let compTurn; //Boolean: whos turn is it player/computer
let intervalId; 
let strict = false; //Boolean: apply strict button T/F?
let sound = true; //Boolean: playing sounds T/F?
let on = false; //Boolean: power button on/off?
let win; //has player won game?

//reference HTML element with css selector

const turnCounter = document.querySelector("#turn"); //pass in css selector with query Selector
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//Strict Button is either on or off. Increases difficulty if on as every mistake implies starting over again.
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

//Turn power button on reveals underscore in Counter
onButton.addEventListener('click', (event) => {
    if(onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "_";
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearInterval(intervalId);
    }
});
//Define start event. Begins game either when turned on or when game has been won
startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

//Play game
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    // fill order array with random number between 1 and 4
    for (var i = 0; i < 10; i++) {
        order.push(Math.floor(Math.random() * 4)) //Math.floor rounds down decimal to nearest integer. Math.random returns a random number between 0 (inclusive) and 1 (exclusive)
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 1100); //flashes every 1100ms until interval is cleared (when all lights have flashed)
};


//whose turn is it? 
function gameTurn() {
    on = false;
//players turn
    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }
//computers turn
    if (compTurn) {
        clearColor(); //clears last clicked color by player
        setTimeout(() => {
            if (order[flash] == 1) one();//green flashes
            if (order[flash] == 2) two(); //red flashes
            if (order[flash] == 3) three();//yellow flashes
            if (order[flash] == 4) four(); //blue flashes
            flash++;
        },1000);
    }
}

//Adds sounds to light flashes green turns light green for 1s and bicycle bell sounds etc.
function one() {
    if (sound) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    sound = true;
    topLeft.style.backgroundColor = "lightgreen";
}

function two() {
    if (sound) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    sound = true;
    topRight.style.backgroundColor = "#dc143c";
}

function three() {
    if (sound) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    sound = true;
    bottomLeft.style.backgroundColor = "#eee8aa";
}

function four() {
    if (sound) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    sound = true;
    bottomRight.style.backgroundColor = "#B0E0E6";
}

//Returns colors to original state
function clearColor(){
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";

}

// Changes colors from original state to temporary state
function flashColor(){
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "#dc143c";
    bottomLeft.style.backgroundColor = "#eee8aa";
    bottomRight.style.backgroundColor = "#B0E0E6";

}

topLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 1000);
        }
    }
});

topRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 1000);
        }
    }
});

bottomLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 1000);
        }
    }
});

bottomRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 1000);
        }
    }
});

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) 
    good = false;
//player completes 10 rounds correctly
    if (playerOrder.length == 10 && good == true) {
        winGame(); 
    }
  //player clicks a color incorrectly all quadrants flash 
    if (good == false) {
        flashColor();
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();
//strict mode of play resets game to beginning if player gets something wrong
            if (strict) {
                play();
            } else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn, 1100);
            }
        }, 1100);

        sound = false;
    }

    //won a round but not a game - go to next round
    if (turn == playerOrder.length && good == true && !win)
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 1100);
}

function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}


//--------------------------------Modal Instructions Open & Close button interaction

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });