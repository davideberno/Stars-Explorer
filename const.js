//MATTER ALIASES
const {
  Engine,
  World,
  Bodies,
  Body,
  Constraint,
  Mouse,
  MouseConstraint
} = Matter;
// DIMENSIONS
const WIDTH = 1000;
const HEIGHT = 700;
const playerWIDTH = 40;
const playerHEIGHT = 44;
const enemyWIDTH = 116;
const enemyHEIGHT = 44;
const asteroidRADIUS = 16;

gameOver = function() {
  console.log("game over");
  document.getElementById("game-over").style.display = "block";
};
