function makeBubble() {
  var clutter = "";

  for (var i = 1; i < 300; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}
makeBubble();

// bubble part is done using loops for and randon Number function

var timmer = 60;
function runRimmer() {
  var timmerclear = setInterval(function () {
    if (timmer > 0) {
      timmer--;
      document.querySelector("#timerVal").textContent = timmer;
    } else {
      clearInterval(timmerclear);
      document.querySelector(".pbtm").innerHTML =`<h1>Game Over</h1>`
    }
  }, 1000);
}

runRimmer();

//  timmer function is done
var rn;
function getnewhit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hhitVal").textContent = rn;
}

getnewhit();

var score = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scorval").textContent = score;
}

// increaseScore();  score increase of 10  done

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  var clikedNum = Number(dets.target.textContent);
  if (clikedNum === rn) {
    increaseScore();
    makeBubble();
    getnewhit();
  }
});
