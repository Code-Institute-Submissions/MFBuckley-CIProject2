# Interactive Frontend Project - Milestone Project 2 - Code Institute, Dublin, Ireland

## User Story
As a site editor I want to create a computerised version of a game of Simon - an interactive audio/visual game - to practice my coding skills and have a little fun. 
The game begins when a series of tones and lights are generated randomly by the computer.
Once the cimputer has finished its audio/visual sequence, a player is required to repeat the sequence correctly. 
If the player succeeds, each round becomes progressively longer and more complex.
Depending on which mode is played, if the user fails, the game is over and the player must start all over again (strict mode) or in non-strict mode
further attempts at the level are possible until successful.

## Game Instructions

Your task is to repeat the sequence of tones and lights played/shown by the computer 
by clicking on the respective quadrants immediately after the computer has finished.

1. Select checkbox "Power" to load game.

1. Click "Start" button.

1. The computer will play a sequence of tones complementary to a sequece of flashing quadrants in the circle.

1. When the computer has finished, repeat the sequence by clicking on the red, yellow, blue and green quadrants 
in the correct order to make it to the next level.

1. Complete all 10 rounds to win the game.

Strict mode causes the game to reset to the very start if an error is made by the player.

The instructions button in the top left corner can be clicked to reveal the simple rules of the game. Click on Close to close the instructions.

## Existing Features

Audio/visual user interacton features via .wav files and "flashing" colored quadrants in a randomised sequence.
Click buttons/quadrants allow users to start and play the game. Check boxes "power" the game on or 
make the game a little more difficult by resetting to the start every time an error is made.
Instructions modal button in top left corner of page opens a text box containing the games instructions.


### Features left to implement
Quadrant borders light up on hover.
Replace checkboxes with slide buttons.
Increase the number of rounds that can be played overall.

## Technologies Used

* [HTML](https://html.spec.whatwg.org/)
    * used to create the web page, to arrange graphics on the webpage, 
    to link to different pages within the website.

* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    * for adding style to web documents.

* [Javascript](https://www.javascript.com/)
    * used for creating the interactive part of the web page, enhancing user experience.

* [Materialize CSS](https://www.youtube.com/watch?v=gCZ3y6mQpW0)
    *used for creating resposive webpage elements that adjust for screen size.

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

[Source 1](https://www.youtube.com/watch?v=n_ec3eowFLQ). Helped while creating the game initially.

[Source 2](https://www.youtube.com/watch?v=6ophW7Ask_0). Helped when creating modal button for game instructions.

[Materialize CSS](https://www.youtube.com/watch?v=gCZ3y6mQpW0). Learned how to use Materialize CSS froma series of youtube videos made by "The Net Ninja". 
See link provided for the first video in the series.

### Media

Audio tones are - Bell tones and were downloaded [here](https://freesound.org/).


