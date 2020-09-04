playerSeq = []; // array stores user input/sequence
compSeq = []; // array used to compare user sequence vs computer sequence to see if the users input was correct
const NUM_LEVELS = 20;
var level = 0;
var id;
var color;
var strict = false;
var boardSound = [
  "https://www.soundjay.com/button/sounds/button-4.mp3", //green
  "https://www.soundjay.com/button/sounds/button-09.mp3", //red
  "https://www.soundjay.com/button/sounds/button-10.mp3", //yellow 
  "https://www.soundjay.com/button/sounds/button-7.mp3" //blue   
];


$(document).ready(function() {
/*---------------------------------------------------------------Event Listeners*/
    $('#start-game').click(function(){
        level++;
        computerSequence();
    })

    $('#strict-mode').click(function(){
        computerSequence();
    })

    $('.pad').click(function(){
        id = $(this).attr('id');
        playerSeq.push(id);
        color = $('#'+ (this.id)).attr('class').split(" ")[1];
        console.log(id+' '+color); // test colors/pads clicked by user
        addClassSound(id, color);
        console.log("Player Seq " + playerSeq.length);
        console.log("Comp Seq " + compSeq.length);
        // Check player sequence correct
        if(!checkPlayerCorrect()) {
            $('#lose-level').modal('show')
            playerSeq = [];
            //$('#repeat-level').click(function(){

           // })
           if(strict=true){
               $('#play-again').click(function(){
                   location.reload();
               })
           }
        }
        // Checking if sequence completed by user 
        if(playerSeq.length == compSeq.length && playerSeq.length < NUM_LEVELS) {
            console.log("ENTERED THE IF BLOCK")
            level++;
            playerSeq = [];
            computerSequence();
        }

        // Check for game winners 
        if(playerSeq.length == NUM_LEVELS) {
            $("#win-game").modal('show');      
        }
    })
})
/*---------------------------------------------------------------Functions---*/
// Player sequence versus computer sequence 
    function checkPlayerCorrect(){
        for(var i = 0; i < playerSeq.length; i++){
            if(playerSeq[i] != compSeq[i]) {
                return false;
            }            
        }
        return true;
    }

// Computer generates a sequence of sounds and color 'flashes' 
    function computerSequence(){
        console.log(level);
        $('#level-counter').text(level);
        getRandomNum();
        var i = 0;
        var myInterval = setInterval(function(){
            id = compSeq[i]; //  first selected pad
            color = $('#'+ (this.id)).attr('class').split(" ")[1];
            console.log(id+' '+color); //Check which colors and id's are being generated
            playSound(id);
            //addClassSound(id, color);
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

/* Add temporary class to change color briefly to create flash effect, 
then remove this class using setTimeout function to return to original color and 
 play the associated sound depending on the pad color */
    function addClassSound(id, color){
        $('#'+(this.id)).addClass(color+'-active');
        playSound(id);
        setTimeout(function(){
            $('#'+(this.id)).removeClass(color+'-active');
        }, 500);
    }

// Play a sound
    function playSound(id){
        var sound = new Audio(boardSound[id]);
        sound.play();
    }


