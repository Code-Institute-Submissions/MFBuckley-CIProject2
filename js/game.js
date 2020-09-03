playerSeq = [] // array stores user input/sequence
compSeq = [] // array used to compare user sequence vs computer sequence to see if the users input was correct
const NUM_LEVELS = 3;
let id, color, level = 0;
var strict = false;
var boardSound = [
  "http://www.soundjay.com/button/sounds/button-4.mp3", //green
  "http://www.soundjay.com/button/sounds/button-09.mp3", //red
  "http://www.soundjay.com/button/sounds/button-10.mp3", //yellow 
  "http://www.soundjay.com/button/sounds/button-7.mp3" //blue   
];


$(document).ready(function(){


/* Start listener - start game by clicking START button which increases the level counter by 1 and 
initialises computerSequence function below */
    $('#start-game').click(function(){
        level++;
        computerSequence();
    })

// Check if strict mode on - text on button remains italic while in strict mode

    $('strict-mode').click(function() {  
        $('#strict-mode').css("font-style", "italic",)
        level++;
        playerSeq = [];
        compSeq = [];
        level = 0;
        strict = true;
        computerSequence();
    })      


// Computer plays a sequence of sounds and color 'flashes' 
     function computerSequence(){
        console.log(level)
        $('#level-counter').text(level);
        getRandomNum();
        var i = 0
        var myInterval = setInterval(function(){
            id = compSeq[i]; //  first selected pad
            color = $('#'+id).attr('class').split(' ')[1];
            console.log(id+' '+color) //Check which colors and id's are being generated
            addClassSound(id, color);
            i++;
            if(i == compSeq.length) {
                clearInterval(myInterval);
            }
        }, 1000);
        
    }

// Randomly selects which pad involved in sequence
    function getRandomNum() {    
        var random = Math.floor(Math.random() * 4);
        compSeq.push(random);    
    }

// Player tries to copy computer sequence
    function playerSequence(){
        playerSeq.push(id);
        console.log(id+' '+color);
        addClassSound(id, color);
/* Check if player sequence is incorrect before game moves on to next level*/
        if(!checkPlayerCorrect()) {
        $("#lose-level").modal('show'); 
            if(strict) {
            console.log("strict");
            simonSeq = [];
            level = 1; 
        playerSeq();
        computerSequence();  
    }
}

/* Player pad listener. (this) refers to which pad is being clicked by the player. */
    
    $('.pad').click(function(){
        id = $(this).attr('id');
        color = $(this).attr('class').split(' ')[1];
        console.log(id+' '+color);
        addClassSound(id, color);

/* Player sequence versus computer sequence */
    function checkPlayerCorrect(){
        for(var i = 0; i < playerSeq.length; i++){
            if(playerSeq[i] != compSeq[i]) {
                return false;
            }            
        }
        return true
    }
    

/*Check for game winners */
    if(playerSeq.length == NUM_LEVELS && compSeq.length == NUM_LEVELS) {
        $("#win-game").modal('show');      
    }


/* Length of the player and computer sequences are compared. 
    If they are equal, 1 is added to the level counter, the player sequence array is emptied and 
    the computer sequence function is called again*/
    if(playerSeq.length == compSeq.length){
        level++;
        playerSeq = [];
        computerSequence();
        }
    })


/* Add temporary class to change color briefly to create flash effect, 
then remove this class using setTimeout function to return to original color and 
 play the associated sound depending on the pad color */
    function addClassSound(id, color){
        $('#'+id).addClass(color+'-active');
        playSound(id);
        setTimeout(function(){
            $('#'+id).removeClass(color+'-active')
        }, 500);
    }

// Play a sound
    function playSound(id){
        var sound = new Audio(boardSound[id]);
        sound.play();
    };    					
});