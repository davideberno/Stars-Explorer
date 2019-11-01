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

const playerWIDTH = 40;
const playerHEIGHT = 44;
const enemyWIDTH = 116;
const enemyHEIGHT = 44;
const asteroidRADIUS = 16;
const scorePlayer1 = document.getElementById("scorePlayer1");
const scorePlayer2 = document.getElementById("scorePlayer2");
let valueScorePlayer1 = 0;
let valueScorePlayer2 = 0;
