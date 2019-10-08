let randomArray = []; //random array 
var compOrder = []; // combination of lights played by computer
let playerOrder = []; //order of player input
var level = 0,
    j = 0,
    i, k = 0, m;

  

//buttons that user can interact with
const oneBox = document.querySelector("#one");
const twoBox = document.querySelector("#two");
const threeBox = document.querySelector("#three");
const fourBox = document.querySelector("#four");
const fiveBox = document.querySelector("#five");
const sixBox = document.querySelector("#six");
const sevenBox = document.querySelector("#seven");
const eightBox = document.querySelector("#eight");
const nineBox = document.querySelector("#nine");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const quit = document.querySelector("#quit");
const levelCounter = document.querySelector("#level");
const scorebox = document.querySelector("#scorebox");
const speedup = document.querySelector("#speedup");
const speeddown = document.querySelector("#speeddown");
const speed = document.querySelector("#speed");





//turn on game
quit.addEventListener("click", function() {
    if (scorebox.classList.contains("blacktext") == true) {
        scorebox.classList.remove("blacktext");
        scorebox.classList.add("redtext");
        levelCounter.classList.remove("blacktext");
        levelCounter.classList.add("redtext");
        console.log("hi");
        levelCounter.innerHTML = "<h3>--</h3>";
        k = 1; 
        console.log("game is on" + k);
        //game is on
    }
    else {
        scorebox.classList.remove("redtext");
        scorebox.classList.add("blacktext");
        levelCounter.classList.remove("redtext");
        levelCounter.classList.add("blacktext");
        console.log("no");
        k = 0; // game is off
    }
});

//when play button is pressed game should begin if game is on
play.addEventListener("click", function() {
    console.log(k);
    if (k == 1) {
        newgame();
    }   else {
            console.log("game is off");
            play.removeEventListener("click", function() {
                newgame();
            });
    }
});

//reset game
function newgame() {
    level++;
    getRandomNumber(level);
    levelCounter.innerHTML = "<h3>" + level + "</h3>";
    console.log("You are on level " + level);
    iterate();
}


//randomize number, push random number into order array. math.random will select
// a random decimal, multiply it by 4 and round down so we get 0 to 3
function getRandomNumber(level) {
    for (i = 0; i < level; i++) {
        var random = (Math.floor(Math.random() * 9));
        randomArray.push(random);
    }
    console.log("These are the random numbers generated " + randomArray);
}


//iterate through randomArray
function iterate() {
    var gameLevel = $('#speed').text(); 

    if (gameLevel == "easy") {
        var time = 1000;
    }
    else if (gameLevel == "medium") {
        var time = 500;
    }
    else {
        var time = 250;
    } 

    console.log(time);
    
    m = setInterval(function() {
        if (randomArray[j] == 0) {
            //style box like this then timeout
            $("#one").addClass("white");
            compOrder.push(0);
             if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            
            
            setTimeout(function() {
                $("#one").removeClass("white");
            }, time);
        }

        else if (randomArray[j] == 1) {
            $("#two").addClass("white");
            compOrder.push(1);
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#two").removeClass("white");
            }, time);
        }

        else if (randomArray[j] == 2) {
            $("#three").addClass("white");
            compOrder.push(2);
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#three").removeClass("white");
            }, time);
           
        }

        else if (randomArray[j] == 3) {
            $("#four").addClass("white");
             compOrder.push(3);
             if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#four").removeClass("white");
            }, time);
        }
        
        else if (randomArray[j] == 4) {
            $("#five").addClass("white");
             compOrder.push(4);
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#five").removeClass("white");
            }, time);
        }
        
        else if (randomArray[j] == 5) {
            $("#six").addClass("white");
             compOrder.push(5);
             if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#six").removeClass("white");
            }, time);
        }
        
        else if (randomArray[j] == 6) {
            $("#seven").addClass("white");
             compOrder.push(6);
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#seven").removeClass("white");
            }, time);
        }
        
        else if (randomArray[j] == 7) {
            $("#eight").addClass("white");
             compOrder.push(7);
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#eight").removeClass("white");
            }, time);
        }
        
        else if (randomArray[j] == 8) {
            $("#nine").addClass("white");
             compOrder.push(8);
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            setTimeout(function() {
                $("#nine").removeClass("white");
            }, time);
        }
        
        j++;
        console.log(compOrder);

        if (j > level) {
            clearInterval(m);
        }
    }, 500);
}

//user play, each button click will add a number to the playerOrder array
$("#one").on("click", function() {
    if (k == 1) {
        playerOrder.push(0);
        $("#one").addClass("white");
        if ($('#soundSwitch').prop("checked")) 
                    {
                        console.log ("sound on"); 
                        $("#yellowSound")[0].play();
                        $("#yellowSound").currentTime = 0;
                    }
        
        setTimeout(function() {
            $("#one").removeClass("white");
        }, 300);
        compare();
        }
    else {
        console.log("the game is off");
    }
});

$("#two").on("click", function() {
    if (k == 1) {
        playerOrder.push(1);
        $("#two").addClass("white");
        if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
        setTimeout(function() {
        $("#two").removeClass("white");
    }, 300);
    compare();
    } else {
        console.log("the game is off")
    }
});

$("#three").on("click", function() {
    if (k == 1) {
         playerOrder.push(2);
    $("#three").addClass("white");
    if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#three").removeClass("white");
    }, 300);
    compare();
    } 
    else {
        console.log("the game is off");
    }
});

$("#four").on("click", function() {
    if (k == 1) {
        playerOrder.push(3);
    $("#four").addClass("white");
     if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#four").removeClass("white");
    }, 300);
    compare();
    }
    else {
        console.log("the game is off");
    }
});

$("#five").on("click", function() {
    if (k == 1) {
        playerOrder.push(4);
    $("#five").addClass("white");
    if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#five").removeClass("white");
    }, 300);
    compare();
    }
    else {
        console.log("the game is off");
    }
    
});

$("#six").on("click", function() {
    if (k == 1) {
        playerOrder.push(5);
    $("#six").addClass("white");
     if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#six").removeClass("white");
    }, 300);
    compare();
    }
    else {
        console.log("the game is off");
    }
    
});

$("#seven").on("click", function() {
    if (k == 1) {
        playerOrder.push(6);
    $("#seven").addClass("white");
     if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#seven").removeClass("white");
    }, 300);
    compare();
    }
    else {
        console.log("the game is off");
    }
    
});

$("#eight").on("click", function() {
    if (k == 1) {
         playerOrder.push(7);
    $("#eight").addClass("white");
     if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#eight").removeClass("white");
    }, 300);
    compare();
    }
    else {
        console.log("the game is off");
    }
   
});

$("#nine").on("click", function() {
    if (k == 1) {
        playerOrder.push(8);
    $("#nine").addClass("white");
     if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
    setTimeout(function() {
        $("#nine").removeClass("white");
    }, 300);
    compare();
    }
    else {
        console.log("the game is off");
    }
    
});



//compare buttons user clicked and computer play
//only compare if user has clicked the same number of computer plays
function compare() {
    console.log("This is computer's play" + compOrder);
    console.log("This is user's play" + playerOrder);
    if (compOrder.length == playerOrder.length) {

        //join values in computer's array 
        //join values in user's array
        //if both numbers are the same, user has passed level
        if (compOrder.join() == playerOrder.join()) {

            if (level <= 3) {
                setTimeout(function() {
                    console.log("not at level 10 yet, keep playing");
                    $(levelCounter).html("<h3>" + level + "</h3>");
                    compOrder = [];
                    playerOrder = [];
                    j = 0;
                    randomArray = [];
                    getRandomNumber(level);
                    iterate();
                }, 1000);
            }

            else {
                console.log("you win");
                 $(scorebox).html("<h3>" + "YOU" + "</h3>");
                 $(levelCounter).html("<h3>" + "WIN!" + "</h3>");
                if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#yellowSound")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            }
        }
        
        else {
            console.log("you loose");
            $(scorebox).html("<h3>" + "YOU" + "</h3>");
            $(levelCounter).html("<h3>" + "LOOSE!" + "</h3>");
            if ($('#soundSwitch').prop("checked")) 
                {
                    console.log ("sound on"); 
                    $("#loose")[0].play();
                    $("#yellowSound").currentTime = 0;
                }
            
        }
        
        level++;
        console.log(level);

    }
}

//reset game
$("#reset").on("click", function() {
    if (k == 1) {
        randomArray = []; 
    compOrder = []; 
    playerOrder = []; 
    level = 0;
    j = 0;
    i = 0;
    k = 1;
    m = 0;
    $(scorebox).html("<h3>" + "LEVEL" + "</h3>");
    $(levelCounter).html("<h3>" + "--" + "</h3>");
    }
    else {
        console.log("the game is off");
    }
});

//Game settings
//Game Speed control
$("#speeddown").on("click", function() {
    var gameLevel = $('#speed').text();
    console.log(gameLevel);
    
    if (gameLevel == "easy") {
        console.log("easy");
         $('#speed').text("hard");
       
   } else if (gameLevel == "hard") {
       console.log("hard");
        $('#speed').text("medium");
   }
   else {
       console.log("medium");
       $('#speed').text("easy");
   }
});

//Game Speed control
$("#speedup").on("click", function() {
var gameLevel = $('#speed').text();
    console.log(gameLevel);
    
    
    if (gameLevel == "easy") {
        console.log("easy");
         $('#speed').text("medium");
       
   } else if (gameLevel == "hard") {
       console.log("hard");
        $('#speed').text("easy");
   }
   else {
       console.log("medium");
       $('#speed').text("hard");
   }
});

//sound setting
$("#soundSwitch").on("click", function() {
    if ($('#soundSwitch').prop("checked")) 
    {
        console.log ("sound on"); 
        
    }
});

 //setting button open
 $("#settingButton").on("click", function() {
     console.log("i was clicked");
    $("#settingBox").removeClass("noDisplay");
    });
    
//close settings
$("#closeSettings").on("click", function() {
     console.log("i was clicked");
    $("#settingBox").addClass("noDisplay");
    });
    
//rule button open
 $("#rules").on("click", function() {
     console.log("i was clicked");
    $("#ruleBox").removeClass("noDisplay");
    });
    
//close rule
$("#closeRules").on("click", function() {
     console.log("i was clicked");
    $("#ruleBox").addClass("noDisplay");
    });