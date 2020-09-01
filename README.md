# Interactive Frontend Project - Milestone Project 2 - Code Institute, Dublin, Ireland

## UX

### User Stories

 AS A | I WANT TO | SO THAT 
:------ |:-----------: | ---------:
Player | play an interactive game |  to have some fun
Player | be presented with a random series of flashing quadrants/pads | for visual interaction
Player | hear a sound that corresponds to each flash | for acoustic interaction
Player | follow the sequence of both visual and acoustic stimuli | to repeat the pattern by manually clicking on pads
Player | press pads in correct sequence | to win level, progress to next level and/or win game
Player | be informed if I press incorrect sequence | to play level again
Player | play in strict mode - if my sequence is incorrect I must start game from beginning | to increase difficulty level


## Game Instructions

Your task is to repeat the sequence of tones and lights played/shown by the computer 
by clicking on the respective quadrants immediately after the computer has finished.

1. Select checkbox "Power" to load game.

1. Click "Start" button.

1. The computer will play a sequence of tones complementary to a sequece of flashing pads in the circle.

1. When the computer has finished, repeat the sequence by clicking on the red, yellow, blue and green quadrants 
in the correct order to make it to the next level.

1. Complete all 20 rounds to win the game.

Strict mode causes the game to reset to the very start if an error is made by the player.

The instructions button at the top can be clicked to reveal the simple rules of the game. Click on Close to close the instructions.

## Existing Features

### Font Used

Electrolize is a Google [font](https://fonts.google.com/?query=electrolize) with a squarish geometric typeface with humanistic proportions.

Audio/visual user interacton features via .wav files and "flashing" colored quadrants in a randomised sequence.
Click buttons/quadrants allow users to start and play the game. Buttons "power" the game on or 
make the game a little more difficult by resetting to the start every time an error is made.
Instructions modal button opens a text box containing the games instructions.


### Features left to implement

Quadrant borders light up on hover.


## Technologies Used

* [HTML](https://html.spec.whatwg.org/)
    * used to create the web page, to arrange graphics on the webpage, 
    to link to different pages within the website.

* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    * for adding style to web documents.

* [Javascript](https://www.javascript.com/)
    * used for creating the interactive part of the web page, enhancing user experience.

* [Bootstrap](https://getbootstrap.com/)
    * used for creating resposive webpage elements that adjust for screen size.

## Testing

[HTML Validator](https://validator.w3.org/nu/#textarea)

Validated by direct input.

1 Warning found: 

"The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment."

This warning occurs because of the format of comments in the html5 code in index.html.
Comments are designed in this way to both separate blocks of code for easier reading and to explain what each block of code does.
As the document will not be mapped to XML 1.0 - this warning is not a major issue here.


[CSS Validator](https://jigsaw.w3.org/css-validator/)

Validated by direct input.

No errors found.


## Deployment

This project was deployed to Github Pages. Full details on how to deploy a github repository to Github Pages may be found [here](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

## Credits

### Content

Youtube: 

[Source 1](https://www.youtube.com/watch?v=n_ec3eowFLQ). Inspiration while creating the game initially.


### Media

Audio tones are - Bell tones and were downloaded [here](https://freesound.org/).


