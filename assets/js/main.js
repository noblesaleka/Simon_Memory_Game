let randomArray = []; //random array 
var compOrder = []; // combination of lights played by computer
let playerOrder = []; //order of player input
var id, color, level = 0, j = 0, i, k;
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
    newgame();
});


//reset game
function newgame() {
    getRandomNumber();
    level++;
    levelCounter.innerHTML = "<h3>" + level + "</h3>";
    console.log("You are on level " + level);
    
    for (k=0; k<level; k++) {
    iterate();
    }
    $("h1").css("color", "blue");
    

   
   
   
    }
    
    
    
    
//randomize number, push random number into order array. math.random will select
// a random decimal, multiply it by 4 and round down so we get 0 to 3
function getRandomNumber() {
    for(i=0; i<20; i++) {
    var random = (Math.floor(Math.random() * 4));
        randomArray.push(random);
    }
    console.log("These are the random numbers generated" + randomArray);
};




    
//iterate through randomArray, if user is on level 1, the iteration should occur once.
//if user is on level 3, the iteration should occur 3 times, etc
function iterate() {
    if (randomArray[j] == 0) {
        //style box like this then timeout
        $("#yellow").addClass("white");
        compOrder.push(0);
        
            setTimeout(function() {
                $("#yellow").removeClass("white"); 
            }, 1000)
    }
    
    
    
    else if (randomArray[j] == 1) {
         $("#green").addClass("white");
        compOrder.push(0);compOrder.push(1);
        
         setTimeout(function() {
                $("#green").removeClass("white"); 
            }, 1000)
    }
    
    else if (randomArray[j] == 2) {
         $("#red").addClass("white");
         setTimeout(function() {
                $("#red").removeClass("white"); 
            }, 1000)
        
        compOrder.push(2);
    }

    else if (randomArray[j] == 3) {
        $("#blue").addClass("white");
        setTimeout(function() {
                $("#blue").removeClass("white"); 
            }, 1000)
       
        compOrder.push(3);
    }
    
    j++;
    console.log(compOrder)
}
    
    

