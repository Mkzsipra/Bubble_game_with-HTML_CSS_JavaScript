var timer = 60;
var score = 0;
var hitRn = 0;
function allFunction(){

function makeBubbles(){
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        let rnD = Math.floor(Math.random() * 10 + 1);
        clutter += `<div class="buble">${rnD}</div>`
    }
    document.querySelector(".panel-botm").innerHTML = clutter;
    
}

function runTimer(){
    var intervalTimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer-run").innerHTML = timer;
        }else{
            clearInterval(intervalTimer)
            document.querySelector(".panel-botm").innerHTML = `<h1 class="end-game">Game Over</h1> <h2 class="score-display">Your Score: ${score}<h2> `
        }
    }, 1000)
}

function runHits(){
    hitRn = Math.floor(Math.random() * 10 + 1)
    document.querySelector("#hitval").textContent = hitRn;
}

function increaseScore(){
    score += 5;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector(".panel-botm").addEventListener("click", function(e){
  var clickedNumber = Number(e.target.textContent);
  if(clickedNumber === hitRn){
    increaseScore();
    makeBubbles();
    runHits();
  }
})

runTimer()
makeBubbles();
runHits()
increaseScore()
}
allFunction();
