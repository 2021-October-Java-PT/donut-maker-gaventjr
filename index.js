let score = 0;

score = score + 1;

let donutMultiplier = 10;
let multipliers = 0;
let autoClicker = 100;
let clickers = 0;
let clickingPower = 1;

//Functions

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function buyMultiplier() {
  if (score >= donutMultiplier) {
    score = score - donutMultiplier;
    multipliers = multipliers + 1;

    document.getElementById("score").innerHTML = score;
    document.getElementById("donutMultiplier").innerHTML = donutMultiplier;
    document.getElementById("multipliers").innerHTML = multipliers;
    updateDonutsPerSecond();
  }
}

function buyAutoClicker() {
  if (score >= autoClicker) {
    score = score - autoClicker;
    clickers = clickers + 1;

    document.getElementById("score").innerHTML = score;
    document.getElementById("autoClicker").innerHTML = autoClicker;
    document.getElementById("clickers").innerHTML = clickers;
    updateDonutsPerSecond();
  }
}

function updateDonutsPerSecond() {
  donutsPerSecond = multipliers + clickers * 5;
  document.getElementById("donutspersecond").innerHTML = donutsPerSecond;
}

setInterval(function () {
  score = score + multipliers;
  document.getElementById("multipliers").innerHTML = score;
}, 1000);

setInterval(function () {
  score = score + multipliers;
  score = score + clickers + 1;
  document.title = score + "Donuts - Donut Clicker";
  S;
  document.getElementById("clickers").innerHTML = score;
}, 1000);
