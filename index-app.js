let score = 0;

score = score;

let donutMultiplier = 10;
let multipliers = 0;
let autoClicker = 100;
let clickers = 0;
let clickingPower = 1;

//Functions

function buyMultiplier() {
  if (score >= donutMultiplier) {
    score = score - donutMultiplier;
    multipliers = multipliers + 1;

    document.getElementById("score").innerHTML = score;
    document.getElementById("donutMultiplier").innerHTML = score;
    document.getElementById("multipliers").innerHTML = multipliers;
    updateDonutsPerSecond();
  }
}

function buyAutoClicker() {
  if (score >= autoClicker) {
    score = score - autoClicker;
    clickers = clickers + 1;
    autoClicker = Math.round(autoClicker * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("autoClicker").innerHTML = score;
    document.getElementById("clickers").innerHTML = clickers;
    updateDonutsPerSecond();
  }
}

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function updateDonutsPerSecond() {
  donutsPerSecond = multipliers + clickers * 5;
  document.getElementById("donutsPerSecond").innerHTML = donutsPerSecond;
  document.title = score + "donuts + Donut Clicker";
}

setInterval(function () {
  score = score + multipliers;
  score = score + clickers;
  document.getElementById("score").innerHTML = score;
  // document.getElementById("donutMultiplier").innerHTML = score;
  // document.getElementById("autoClicker").innerHTML = autoClicker;
}, 1000);

function enableAutoClicker() {
  if (score >= autoClicker) {
    acBtn.removeAttribute("disabled");
  } else {
    acBtn.disabled = true;
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
