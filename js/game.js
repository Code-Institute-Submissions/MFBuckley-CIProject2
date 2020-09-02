playerSeq = [] // array stores user input/sequence
compSeq = [] // array used to compare user sequence vs computer sequence to see if the users input was correct
const NUM_LEVELS = 3;
let id, color, level = 0;
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

/* Player pad listener. (this) refers to pad being clicked by the player. Adds to player sequences array.*/
    
    $('.pad').click(function(){
        id = $(this).attr('id');
        color = $(this).attr('class').split(' ')[1];
        playerSeq.push(id);
        console.log(id+' '+color);
        addClassSound(id, color);

/* Check if player sequence is incorrect before game moves on to next level*/
    if(!checkPlayerCorrect()) {
        $("#lose-level").modal('show'); 
        playerSeq();   
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

/* Player sequence versus computer sequence */
    function checkPlayerCorrect(){
        for(var i = 0; i < playerSeq.length; i++){
            if(playerSeq[i] != compSeq[i]) {
                return false;
            }
            
        }
        return true
    }

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

// randomly selects which pad involved in initial start sequence
    function getRandomNum() {    
        var random = Math.floor(Math.random() * 4);
        compSeq.push(random);    
    }
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
    }




// Turn on strict mode by clicking strict button - text on button remains italic

    $('strict-mode').click(function){
        computerSequence();
        level++;
        if(playerSeq.length !== compSeq.length) {
            playerSeq = [];
            compSeq = [];
            level = 0;
        }
        
        
    }
    
    
					
});