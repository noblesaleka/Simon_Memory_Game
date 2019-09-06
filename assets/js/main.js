let compOrder = []; //order of lights flashing
let playerOrder = []; //order of player input
var id, color, level = 0;
var sound = [
    "assets/audio/Baby Sneeze-SoundBible.com-431839106.mp3",
    "assets/audio/Banana Peel Slip-SoundBible.com-580403617.mp3",
    "assets/audio/service-bell_daniel_simion.mp3",
    "assets/audio/Sharp Punch-SoundBible.com-1947392621.mp3"
    ]

let turn; //user's number of turns
let good; //true or false, has player hit right colors
let compTurn; //whos turn
let intervalID; 
let noise = true; // sound effects on
let on = false; // game on
let win; //has player won?

//buttons that user can interact with
const yellowBox = document.querySelector("#yellow");
const greenBox = document.querySelector("#green");
const redBox = document.querySelector("#red");
const blueBox = document.querySelector("#blue");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const quit = document.querySelector("#quit");
const levelCounter = document.querySelector("#level");
const scorebox = document.querySelector("#scorebox");

//turn on game
quit.addEventListener("click", function(){
    if (scorebox.classList.contains("blacktext") == true ) {
        scorebox.classList.remove("blacktext");
        scorebox.classList.add("redtext");
        levelCounter.classList.remove("blacktext");
        levelCounter.classList.add("redtext");
        console.log("hi");
        on = true;
        levelCounter.innerHTML = "<h3>--</h3>";
    }
    else {
        scorebox.classList.remove("redtext");
        scorebox.classList.add("blacktext");
        levelCounter.classList.remove("redtext");
        levelCounter.classList.add("blacktext");
        console.log("no");
        on = false;
        clearColour();
        clearInterval();
    };
});

//when play button is pressed game should begin
play.addEventListener("click", function(){
    level++;
    newgame();
});

//what level am i on?
function newgame() {
    //clear compOrder array-- to be added
    levelCounter.innerHTML = "<h3>" + level+ "</h3>";
    console.log("You are on level " + level);
    
    
    getRandomNumber();
    console.log("The random number generated is " + getRandomNumber());
    id = getRandomNumber();
    console.log("The id generated is " + id);
    
    };
    
//randomize number, push random number into order array. math.random will select
// a random decimal, multiply it by 4 and round down so we get 0 to 3
 //add 1 since 0 can never be an option, and number must be able to reach a value of 4 
function getRandomNumber() {
    var random = (Math.floor(Math.random() * 4));
        compOrder.push(random);
    };
    
function flash (color) {
    color.classList.remove("yellow");
    color.classList.add("white");
    setTimeout(function() {
        color.classList.remove("white");
        color.classList.add("yellow");
    }, 250)
    
}

