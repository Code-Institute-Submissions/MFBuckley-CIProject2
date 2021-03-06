# Interactive Frontend Project - Milestone Project 2 - Code Institute, Dublin, Ireland

Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, working with software programming by Lenny Cope. 
The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. 
Once the user fails they either play the level again or the game is over. 
My goal here is to reproduce this game in a similar format as a computer game though with the variation that the game always resets to level 0 and has to be played completely from the beginning.

## UX

### User Stories

 AS A | I WANT TO | SO THAT 
:------ |:-----------: | ---------:
player | play an interactive game |  to have some fun
player | be presented with a random series of flashing quadrants/pads | for visual interaction
player | hear a sound that corresponds to each flash | for acoustic interaction
player | follow the sequence of both visual and acoustic stimuli | to repeat the pattern by manually clicking on pads
player | press pads in correct sequence | to win level, progress to next level and/or win game
player | be informed if I press incorrect sequence | to play game again from beginning
player | console should be very simplistic | for ease of use
player | instructions should be available at the click of a button | so rules of games are clear.
player | should be able to play on different screen sizes | for mobile phone play for example

## Game Instructions

Your task is to repeat the sequence of tones and lights played/shown by the computer 
by clicking on the respective quadrants immediately after the computer has finished its sequence.

1. Click "Start" button.

1. The computer will play a sequence of tones complementary to a sequece of flashing pads in the circle.

1. When the computer has finished, repeat the sequence by clicking on the red, yellow, blue and green pads/quadrants 
in the correct order to make it to the next level.

1. Complete all 20 rounds to win the game.

The instructions button at the top can be clicked to reveal the simple rules of the game. Click on Close to close the instructions.

## Features

### Existing Features

#### 1. Landing page
Kept as simple as possible with the game title at the top, followed by the instructions modal, 
On/Off, Start and Strict buttons as well as the pad all in rows and centered one below the other.
The backgrond image is of the night sky.

#### 2. Font Used

* Electrolize is a Google [font](https://fonts.google.com/?query=electrolize) with a squarish geometric typeface with humanistic proportions.

#### 3. Instructions modal

* A Bootstrap modal containing instructions on how to play the game, winning and losing.

#### 4. Start button

* Bootstrap button starts the game, the level counter increases by 1 and the computer sequence is called.

#### 5. Simon Game pads/quadrants

* Four colored pads red, green, blue yellow arranged in a circle and at right angles to one another 
with a 5px black border separating each pad.

### Features left to implement

1. Player profiles - capability of seeing player game history with data such as win rate, loss rate, average time-taken per level.

2. More than 20 levels with increasing difficulty levels.

3. Add a timer and play against the clock.

## Technologies Used

* [Gitpod](https://www.gitpod.io/)
    * gitpod is a cloud based IDE used to write and develop coding projects.

* [Github](https://github.com/)
    * used to save/store code, for version control purposes. 
    Github also allows code to be cloned and multiple individuals may work on the same project at the same time remotely.

* [HTML](https://html.spec.whatwg.org/)
    * used to create the web page, to arrange graphics on the webpage, 
    to link to different pages within the website.

* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    * for adding style to web documents.

* [Javascript](https://www.javascript.com/)
    * used for creating the interactive part of the web page, enhancing user experience.

* [Bootstrap](https://getbootstrap.com/)
    * used for creating resposive webpage elements that adjust for screen size.

* [Google Fonts](https://fonts.google.com/)
    * hosts a large selection of fonts so fonts can be personalised as well as clean and eye-catching

## Testing

[HTML Validator](https://validator.w3.org/nu/#textarea)

Validated by direct input.
* No errors or warnings found

[CSS Validator](https://jigsaw.w3.org/css-validator/)

Validated by direct input.
* No errors found.

[Javascript Validator](http://beautifytools.com/javascript-validator.php)

Validated by direct input.

Played game multiple times to test game functionality. 
Within javascript code itself there are multiple console.log()functions to print out what values are being generated in terms of ids, colors, 
computer and player sequences selected as well as a check to see if the if statement to check player sequence completion is being implemented or not.

## Bugs

Pad clicks possible while computer sequence is playing - to be addressed at a later date.

## Deployment

Version control via Github.

This project was deployed to Github Pages. Full details on how to deploy a github repository to Github Pages may be found [here](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

## Credits

### Content

These sources showed me how to approach the game and think about it from a coding perspective.

Youtube: 

* [Source 1](https://www.youtube.com/watch?v=n_ec3eowFLQ).

* [Source 2](https://www.youtube.com/watch?v=9MTR3V2XpRI). 

* [jQuery](https://www.youtube.com/watch?v=3nrLc_JOF7k&list=PLillGF-RfqbYJVXBgZ_nA7FTAAEpp_IAc) refresher.

Mozilla Developer Network explains jquery methods among others. e.g. [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)


### Media

Backgound image: [Night Sky](https://www.google.com/search?q=night+sky&rlz=1CANPDX_enDE869&tbm=isch&source=iu&ictx=1&fir=agfrQcTk3n2a3M%252CK4k5liDe0HTjtM%252C_&vet=1&usg=AI4_-kSidife2hZrjQwc0j2JjjBF0H3bMg&sa=X&ved=2ahUKEwiYv-jbjMjrAhVIyaQKHX3NCqsQ9QF6BAgNEDI&biw=1410&bih=789&dpr=1.6#imgrc=agfrQcTk3n2a3M)

Sounds: 

* [0](http://www.soundjay.com/button/sounds/button-4.mp3)
* [1](http://www.soundjay.com/button/sounds/button-09.mp3)
* [2](http://www.soundjay.com/button/sounds/button-10.mp3)
* [3](http://www.soundjay.com/button/sounds/button-7.mp3)

