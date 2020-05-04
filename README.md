# Interactive Frontend Project - Milestone Project 2 - Code Institute, Dublin, Ireland

A computerised version of a game of Simon - an interactive audio/visual game. A series of tones and lights are generated randomly by the computer. A player is rerquired to repeat the sequence correctly. 
If the player succeeds, each round becomes progressively longer and more complex.
Depending on which mode is played, if the user fails the game is over and the player must start all over again(strict mode) or 
further attempts at the level are possible until successful (non-strict mode).

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

Instructions modal button in top left corner of page.

## Existing Features

Audio/visual user interacton features via .wav files and "flashing" colored quadrants in a randomised sequence.
Click buttons/quadrants allow users to start and play the game. Check boxes "power" the game on or 
make the game a little more difficult by resetting to the start every time an error is made.
Instructions button opens a text box to reveal the simple rules of the game.


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
    * used for creating responsive, interactive web page, enhancing user experience.

## Testing

[HTML Validator](https://validator.w3.org/)

Validated by direct input.

2 Warnings found: 

"Consider adding a lang attribute to the html start tag to declare the language of this document."

"The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment."

1 Error found:

"Stray end tag source."

[CSS Validator](https://jigsaw.w3.org/css-validator/)

Validated by direct input.

1 Warning found:

"This document appears to be written in English. Consider adding lang="en" (or variant) to the html start tag."

2 Errors found:

"Non-space characters found without seeing a doctype first. Expected <!DOCTYPE html>."

"Element head is missing a required instance of child element title."





Instructions modal button opens and closes as expected.
Both Power and Start buttons needed to start game.
Counter incrementing by 1.

## Deployment

Github Pages.

## Credits

### Content

Youtube: 

[Source 1](https://www.youtube.com/watch?v=n_ec3eowFLQ). Helped while creating the game initially.

[Source 2](https://www.youtube.com/watch?v=6ophW7Ask_0). Helped when creating modal button for game instructions.

### Media

Bell tones downloaded [here](https://freesound.org/).

### Acknowledgements

Thank you to my mentor Sindhu Kolli for all of her help trying to get my original project off the ground.
We faltered on rendering to a localhost: 8000.
