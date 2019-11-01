let world;
let engine;
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
let asteroidSound;
let newEnemySound;
let asteroidsCounter = 0;
const enemies = [];
const asteroids = [];
let gameIsOn = false;
let player2On = false;

document.getElementById("game-over").style.display = "none";

document.onkeypress = () => {
  if (keyCode === 83) {
    document.getElementById("start-page").style.display = "none";
    gameIsOn = true;
  }
};

function preload() {
  music = loadSound("assets/sounds/Interplanetary Odyssey.ogg");
  music.setVolume(0.1);
  newEnemySound = loadSound("assets/sounds/newEnemy.wav");
  asteroidSound = loadSound("assets/sounds/asteroidColl1.wav");
  asteroidSound.setVolume(0.05);
  percentWIDTH = windowWidth / 100;
  WIDTH = windowWidth - percentWIDTH;
  HEIGHT = 700;

  background = new Background();

  background.preload("assets/img/background.jpg");

  enemiesGroup = new Group();

  ground = new Wall(WIDTH / 2, HEIGHT - 5, WIDTH, 10);

  roof = new Wall(WIDTH / 2, 0 + 5, WIDTH, 10);

  wallLeft = new Wall(0 + 5, HEIGHT / 2, 10, HEIGHT);

  wallRight = new Wall(WIDTH - 5, HEIGHT / 2, 10, HEIGHT);

  for (let i = 0; i < 8; i++) {
    asteroids.push(
      new Asteroid(random(50, WIDTH - 50), random(30, 600), asteroidRADIUS)
    );
  }

  for (let i = 0; i < 3; i++) {
    enemies.push(
      new Enemy(
        random(60, WIDTH - 60),
        random(40, 400),
        enemyWIDTH,
        enemyHEIGHT
      )
    );
  }

  player = new Player(WIDTH / 2, 680, playerWIDTH, playerHEIGHT);

  player.preload();

  planetA = new Planet(250, 200, 70);

  planetB = new Planet(WIDTH - 250, 500, 70);
}

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;
  music.play();
  ground.setup();
  roof.setup();
  wallLeft.setup();
  wallRight.setup();
  planetA.setup("assets/img/planetB.png");
  planetB.setup("assets/img/planetB.png");
  player.setup("assets/img/spaceship.png");

  asteroids.forEach((asteroid, index) => {
    asteroid.setup(`assets/img/Asteroid${index % 8}.png`);
  });

  enemies.forEach(enemy => {
    enemy.setup(`assets/img/enemy1.png`);
    enemiesGroup.add(enemy.sprite);
  });

  setInterval(() => {
    if (gameIsOn) {
      asteroids.push(
        new Asteroid(random(50, WIDTH - 50), random(30, 600), asteroidRADIUS)
      );
      asteroids[asteroids.length - 1].setup(
        `assets/img/Asteroid${asteroidsCounter}.png`
      );
      if (asteroidsCounter < 7) {
        asteroidsCounter++;
      } else {
        asteroidsCounter = 0;
      }
    }
  }, 3000);

  setInterval(() => {
    if (gameIsOn && enemies.length < 8) {
      enemies.push(
        new Enemy(
          random(60, WIDTH - 60),
          random(40, 400),
          enemyWIDTH,
          enemyHEIGHT
        )
      );
      enemies[enemies.length - 1].setup(`assets/img/enemy1.png`);
      enemiesGroup.add(enemies[enemies.length - 1].sprite);
      newEnemySound.play();
    }
  }, 20000);

  setInterval(() => {
    world.gravity.y = random(-0.05, 0.05);
    world.gravity.x = random(-0.05, 0.05);
  }, 400);
}

function draw() {
  if (gameIsOn) {
    Engine.update(engine);
    ground.draw();
    roof.draw();
    wallLeft.draw();
    wallRight.draw();
    background.draw();
    player.draw();
    planetA.draw();
    planetB.draw();
    asteroids.forEach(asteroid => {
      asteroid.draw();
    });
    enemies.forEach(enemy => {
      enemy.draw();
    });
  }
}
