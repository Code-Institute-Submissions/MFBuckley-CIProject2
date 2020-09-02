playerSeq = [] // array stores user input/sequence
compSeq = [0, 2, 1] // array used to compare user sequence vs computer sequence to see if the users input was correct
let id, color, level = 0;
var boardSound = [
  "http://www.soundjay.com/button/sounds/button-4.mp3", //green
  "http://www.soundjay.com/button/sounds/button-09.mp3", //red
  "http://www.soundjay.com/button/sounds/button-10.mp3", //yellow 
  "http://www.soundjay.com/button/sounds/button-7.mp3" //blue   
];


$(document).ready(function(){

// Turn on game by clicking ON button
    $('#game-on').click(function(){
        $('#game-on').css('background-color','#d9534f'),
            $('#game-on').text('OFF');		    
    });

// Start game by clicking START button which increases the level counter by 1 initialises startSequence function below
    $('#start-game').click(function(){
        level++;
        startSequence();
    })

    function startSequence(){
        console.log(level)
        $('#level-counter').text(level);
       // getRandomNum();
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
        //playSound(id);
        setTimeout(function(){
            $('#'+id).removeClass(color+'-active')
        }, 500);
    }

// Play a sound
    function playSound(id){
        
    }




// Turn on strict mode by clicking strict button - text on button remains itali


    
    
					
});