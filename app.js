var ctx;
var currentColor;
var xprediction;
var yprediction;
var paused;

window.onload = function(){ 

    // Initialize buttons and canvas
    initButtons();

    paused = true;
    var gameStart = false;
    var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.moveTo(500,300);    // starting point
    ctx.lineWidth=2;
    currentColor = (jQuery('#currcolor').css("background-color"));  //init color

    window.setInterval(getPredictionAndDraw, 500);  // run drawing every .5 sec

    //start/stop by button or by hitting any key
    document.getElementById("play").onclick = gamePlay;
    document.onkeypress = gamePlay;


    function gamePlay(){ 
        var state = document.getElementById("play").value;
        if (state == "start") {
            document.getElementById("play").value = "stop";
            if (gameStart == true){
                webgazer.resume();
                paused = false;
            } else { // If game hasn't been started, and you've pressed start

                    webgazer.begin();   

                    getPredictionAndDraw();
                    
                    gameStart = true;
                    paused = false;
            }
        } else {
            document.getElementById("play").value = "start";
            webgazer.pause();
            paused = true;
  
        }
    };

};  //end of onLoad

function getPredictionAndDraw() {

    if (!paused) {
        console.log("In drawing part... ");
        var prediction = webgazer.getCurrentPrediction();
        if (prediction) {
            xprediction = prediction.x;
            yprediction = prediction.y;
        }
        getCurrentColor();
        ctx.lineTo(xprediction,yprediction);
        ctx.stroke();
    }
}

function initButtons () {
    document.getElementById("buttonDarkRed").onclick = function(){
            document.getElementById("currcolor").style = "background-color: DarkRed";
    };
    document.getElementById("buttonRed").onclick = function(){
            document.getElementById("currcolor").style = "background-color: red";
    };
    document.getElementById("buttonOrange").onclick = function(){
            document.getElementById("currcolor").style = "background-color: orange";
    };
    document.getElementById("buttonYellow").onclick = function(){
            document.getElementById("currcolor").style = "background-color: yellow";
    };
    document.getElementById("buttonGreen").onclick = function(){
            document.getElementById("currcolor").style = "background-color: green";
    };
    document.getElementById("buttonTurquoise").onclick = function(){
            document.getElementById("currcolor").style = "background-color: turquoise";
    };
    document.getElementById("buttonBlue").onclick = function(){
            document.getElementById("currcolor").style = "background-color: blue";
    };
    document.getElementById("buttonNavy").onclick = function(){
            document.getElementById("currcolor").style = "background-color: navy";
    };
    document.getElementById("buttonPurple").onclick = function(){
            document.getElementById("currcolor").style = "background-color: purple";
    };
    document.getElementById("buttonPink").onclick = function(){
            document.getElementById("currcolor").style = "background-color: fuchsia";
    };
    document.getElementById("buttonBlack").onclick = function(){
            document.getElementById("currcolor").style = "background-color: black";
    };
}

// Updates drawing color
function getCurrentColor() {
    var newColor = (jQuery('#currcolor').css("background-color"));
    if (newColor != currentColor) {
        console.log ("new color!");
        ctx.beginPath();
        ctx.moveTo(xprediction, yprediction);    // start new line
        ctx.strokeStyle = newColor;
        currentColor = newColor;
    }
}

