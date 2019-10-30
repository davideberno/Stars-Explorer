let mouse;
let world;
let engine;
let canvas;
let mouseConstraint;
let ground;
let roof;
let wallRight;
let wallLeft;
let player;
let player2;
let enemiesGroup;
let HEIGHT;
let WIDTH;
let percentWIDTH;
const enemies = [];
const asteroids = [];
let startGame = false;
let player2On = false;

document.onkeypress = () => {
  if (keyCode === 49) {
    document.getElementById("player-selection").innerHTML =
      "Press s to start the game";
  } else if (keyCode === 50) {
    player2On = true;
    document.getElementById("score-2").style.display = "block";
    document.getElementById("player-selection").innerHTML =
      "Press s to start the game";
  }
  if (keyCode === 83) {
    document.getElementById("start-page").style.display = "none";
    startGame = true;
  }
};

function preload() {
  background = new Background();
  background.preload("img/T_17-01.jpg");
  document.getElementById("game-over").style.display = "none";
  document.getElementById("score-2").style.display = "none";
}

function setup() {
  percentWIDTH = windowWidth / 100;
  WIDTH = windowWidth - percentWIDTH;
  HEIGHT = 700;
  canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;

  enemiesGroup = new Group();
  ground = new Wall(WIDTH / 2, HEIGHT - 5, WIDTH, 10);
  roof = new Wall(WIDTH / 2, 0 + 5, WIDTH, 10);
  wallLeft = new Wall(0 + 5, HEIGHT / 2, 10, HEIGHT);
  wallRight = new Wall(WIDTH - 5, HEIGHT / 2, 10, HEIGHT);
  player = new Player(WIDTH / 2, 680, playerWIDTH, playerHEIGHT);
  player.setup("img/spaceship.png");
  if (player2On) {
    player2 = new Player2(WIDTH / 2, 680, playerWIDTH, playerHEIGHT);
    player2.setup("img/spaceship.png");
  }
  for (let i = 0; i < 8; i++) {
    asteroids.push(
      new Asteroid(random(50, 950), random(30, 600), asteroidRADIUS)
    );
  }
  asteroids.forEach((asteroid, index) => {
    asteroid.setup(`img/Asteroid${index % 8}.png`);
  });
  for (let i = 0; i < 5; i++) {
    enemies.push(
      new Enemy(random(60, 940), random(40, 400), enemyWIDTH, enemyHEIGHT)
    );
  }
  enemies.forEach(enemy => {
    enemy.setup(`img/enemy1.png`);
    enemiesGroup.add(enemy.sprite);
  });

  let counter = 0;
  setInterval(() => {
    asteroids.push(
      new Asteroid(random(50, 950), random(30, 600), asteroidRADIUS)
    );
    asteroids[asteroids.length - 1].setup(`img/Asteroid${counter}.png`);
    if (counter < 7) {
      counter++;
    } else {
      counter = 0;
    }
  }, 3000);

  setInterval(() => {
    enemies.push(
      new Enemy(random(60, 940), random(40, 400), enemyWIDTH, enemyHEIGHT)
    );
    enemies[enemies.length - 1].setup(`img/enemy1.png`);
    enemiesGroup.add(enemies[enemies.length - 1].sprite);
  }, 15000);

  setInterval(() => {
    world.gravity.y = random(-0.05, 0.05);
    world.gravity.x = random(-0.05, 0.05);
  }, 500);
}

function draw() {
  if (startGame) {
    Engine.update(engine);
    ground.draw();
    roof.draw();
    wallLeft.draw();
    wallRight.draw();
    background.draw();
    player.draw();
    if (player2On) {
      player2.draw();
    }
    asteroids.forEach(asteroid => {
      asteroid.draw();
    });
    enemies.forEach(enemy => {
      enemy.draw();
    });
  }
}

// function windowResized() {
//   resizeCanvas(WIDTH, HEIGHT);
// }
// mouse = Mouse.create(canvas.elt);
// mouse.pixelRatio = pixelDensity();
// mouseConstraint = MouseConstraint.create(engine, {
//   mouse: mouse,
//   constraint: {
//     render: {
//       visible: false
//     },
//     stiffness: 0.8
//   }
// });
// World.add(world, mouseConstraint);

// player.sprite.debug = true;
// enemies.forEach(enemy => {
//   enemy.sprite.debug = true;
// });
