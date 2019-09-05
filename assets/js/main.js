let order = []; //order of lights flashing
let playerOrder = []; //order of player input
let flash; //  number of flashes appeared in game
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
const blueBlox = document.querySelector("#blue");
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
    }
    else {
        scorebox.classList.remove("redtext");
        scorebox.classList.add("blacktext");
        levelCounter.classList.remove("redtext");
        levelCounter.classList.add("blacktext");
        console.log("no");
    };
});
    