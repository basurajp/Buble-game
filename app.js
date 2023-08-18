function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 150; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".pbottom").innerHTML = clutter;
}

makeBubble();

var timer = 60;

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;

      document.querySelector("#timmer").textContent = timer;
    } else {

      clearInterval(timerint);
      document.querySelector('.pbottom').innerHTML=`<h1>GAME OVER </h1>` // later added this 
    }
  }, 1000);
}

runTimer();
var ranqNumHit;
function hitval() {
  ranqNumHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = ranqNumHit;
}

hitval();

var score = 0;

function increasScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

increasScore();

// event bubbling
document.querySelector(".pbottom").addEventListener("click", function (dets) {
  var  clicednum =Number(dets.target.textContent);
  if (ranqNumHit===clicednum){
    increasScore();
    makeBubble();
    hitval()
  }
});




