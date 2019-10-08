# Simon

Simon is a fun user interactive game for all ages. Match the pattern (if you can) and improve your memory at the same time!
There are 3 levels to choose from, Easy for beginners, Medium for the brave, and Fast for the insane!
If you enjoy a challenge, this game is for you.
 
## UX
 
The Simon game is meant to be an interactive memory game that uses numbers and colors to challenge the user's memory.
This game is built in the mobile first approach, large numbers and bright inviting colors are implemented
to make this game visually appealing and easy to play. 
 
As a user, I want to play a fun memory game on my desktop and mobile device.
- CSS media queries are used to ensure user is able to comfortably play game on various screen sizes.

As a user, I want to choose the level of difficulty of the game to challenge myself.
- The user can change the level of the game by changing the speed of the game, there are 3 levels (easy, medium & hard) each one is increasingly faster.

As a user, I want to be able to start the game over without having to refresh my browser, and play games back to back.
- The user is able to reset the game back once they have finished playing by clicking the 'Reset' button.

As a user, I want to see the level that I am on whilst playing the game.
- The user may see the level they are on the GUI display beneath the 'ON/OFF' buttons. The value increases as the user progreses through the game.

As a user, I want to be notified when I win or loose the game.
- The user will be notified when they win or loose the game on the GUI display beneath the 'ON/OFF' buttons.

As a user, I want to be able to turn the sound of the game off and on.
- The user may turn the sound off/on by toggling the switch in the settings window.

As a user, I want to have access to the rules of the game.
- The user may read the rules of the game by opening the rules window.

[Wireframe](https://github.com/noblesaleka/Simon_Memory_Game/issues/1)

## Features

- Title: The name of the game is displyed at the top of the page. The title will change size according to screensize.
- Numberpad: This is the main area that the user will interact with; the numbered squares will flash, displaing a pattern. The user must press these buttons to repeat the pattern and advance through the game.
- Play button: This button is used to start the game once the game is turned on. Pressing the button whilst the game is off will result in no action.
- Reset button: This button is used to reset the game once the game is turned on. Pressing the button whilst the game is off will result in no action.
- ON/OFF button: This button is used to turn the game on and off. Games will no begin unless it is tuned on.
- Level display: This section displays the level of the current game that the user is on.
- S button: This button opens the settings window. Here the user may adjust the speed of the game and the sound.
- R button: This button opens the rules window. Here the user may read the rules of the game.
 

### Features Left to Implement
- Allowing the user to change the color theme with the click of a button in the settings window.

## Technologies Used

- Languages
    - HTML, CSS, Javascript

- [Bootstrap CDN](https://getbootstrap.com)
    - Achieve mobile first development.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

#### As a user, I want to play a fun memory game on my desktop and mobile device.
1. Click "ON/OFF" button. Level should be displyed as "- -"
2. Click Play button. Pattern should automatically start.
3. Use number pad to repeat pattern.
4. Repeat pattern correctly, level increases.
5. Continue until all 4 rounds are complete.
6. Disply indicates "You Win!"

#### As a user, I want to choose the level of difficulty of the game to challenge myself.
1. Click "ON/OFF" button to turn on game.
2. Click "S" button, setting window will open. 
3. Change level of game using the "<" and ">" buttons. 
4. Click "Close" button.
5. Click "Play button" and play game.

#### As a user, I want to be able to start the game over without having to refresh my browser, and play games back to back.
1. Click "ON/OFF" button. Level should be displyed as "- -".
2. Click Play button. Pattern should automatically start.
3. Use number pad to repeat pattern.
4. Repeat pattern correctly, level increases.
5. Continue until all 4 rounds are complete.
6. Disply indicates "You Win!"he user is able to reset the game back once they have finished playing by clicking the 'Reset' button.
7. Click "Reset" button, Level should be displyed as "- -".
8. Click "Play" button to begin another game.

#### As a user, I want to see the level that I am on whilst playing the game.
1. Click "ON/OFF" button. Level should be displyed as "- -".
2. Click Play button. Pattern should automatically start.
3. Use number pad to repeat pattern.
4. Repeat pattern correctly, level increases.
5. Level should continually increase until all 4 rounds are complete.

#### As a user, I want to be notified when I win or loose the game.
1. Click "ON/OFF" button. Level should be displyed as "- -".
2. Click Play button. Pattern should automatically start.
3. Use number pad to repeat pattern.
4. Repeat pattern incorrectly, display shows "You Loose!"

#### As a user, I want to be able to turn the sound of the game off and on.
1. Click "ON/OFF" button to turn on game.
2. Click "S" button, setting window will open. 
3. Turn the sound OFF or ON by toggling the switch.
4. Click "Close" button.
5. Click "Play button" and play game. Sound should play according to setting selected.

#### As a user, I want to have access to the rules of the game.
1. Click "ON/OFF" button to turn on game.
2. Click "R" button, rules window will open. 
3. Read rules.
4. Click "Close" button.

### Browsers and Screensizes
- The look and feel of the game does not vary between screensizes.
- Page is working as expected in Chrome, IE 10, Avast, and Edge.

### Bugs
- If a pattern is played with repeating numbers back to back, the sound of the second number is not heard.
- In mobile view, when user clicks any button, the hover effect style remains.


## Deployment

This project was deployed to GitHub.

It can be accessed via this link: [https://noblesaleka.github.io/Simon_Memory_Game/]

## Credits

### Content
- The text content of this project is original and not sourced from another location.

### Media
- The sound clips in this project were obtained from soundbible.com

### Acknowledgements

- I received inspiration for this project from the game Simon