let world;
let engine;
let game;
let canvas;
let ground;
let roof;
let wallRight;
let wallLeft;
let player;
let player2;
let planetA;
let planetB;
let enemiesGroup;
let HEIGHT;
let WIDTH;
let percentWIDTH;
let music;
let newEnemySound;
let explosionSound;
let asteroidSound;
const enemies = [];
const asteroids = [];
let gameIsOn = false;
let player2IsOn = false;

document.getElementById("game-over").style.display = "none";
document.getElementById("score-2").style.display = "none";

document.onkeypress = () => {
  if (keyCode === 49) {
    document.getElementById("player-selection").innerHTML =
      "Press s to start the game";
  } else if (keyCode === 50) {
    player2IsOn = true;
    player2 = new Player2(WIDTH / 2, HEIGHT - 20, playerWIDTH, playerHEIGHT);
    player2.setup("assets/img/spaceship.png");
    document.getElementById("score-2").style.display = "block";
    document.getElementById("player-selection").innerHTML =
      "Press s to start the game";
  }
  if (keyCode === 83) {
    document.getElementById("start-page").style.display = "none";
    gameIsOn = true;
  }
};

function preload() {
  music = loadSound("assets/sounds/Interplanetary Odyssey.ogg");
  music.setVolume(0.1);
  percentWIDTH = windowWidth / 100;
  WIDTH = windowWidth - percentWIDTH;
  HEIGHT = 700;
  newEnemySound = loadSound("assets/sounds/newEnemy.wav");
  explosionSound = loadSound("assets/sounds/explosion2.wav");
  explosionSound.setVolume(0.1);
  asteroidSound = loadSound("assets/sounds/asteroidColl1.wav");
  asteroidSound.setVolume(0.05);
  game = new Game();
  game.preload();
}

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;
  music.play();
  game.setup();
}

function draw() {
  Engine.update(engine);
  game.draw();
  if (player2IsOn) {
    player2.draw();
  }
}
