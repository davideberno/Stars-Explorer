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
let enemiesGroup;
const enemies = [];
const asteroids = [];

function preload() {
  background = new Background();
  background.preload("img/T_17-01.jpg");
}

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  engine = Engine.create();
  world = engine.world;
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      render: {
        visible: false
      },
      stiffness: 0.8
    }
  });
  World.add(world, mouseConstraint);
  enemiesGroup = new Group();

  ground = new Wall(WIDTH / 2, HEIGHT - 5, WIDTH, 10);
  roof = new Wall(WIDTH / 2, 0 + 5, WIDTH, 10);
  wallLeft = new Wall(0 + 5, HEIGHT / 2, 10, HEIGHT);
  wallRight = new Wall(WIDTH - 5, HEIGHT / 2, 10, HEIGHT);
  player = new Player(WIDTH / 2, 680, playerWIDTH, playerHEIGHT);
  player.setup("img/spaceship.png");
  for (let i = 0; i < 8; i++) {
    asteroids.push(
      new Asteroid(random(50, 950), random(30, 640), asteroidRADIUS)
    );
  }
  asteroids.forEach((asteroid, index) => {
    asteroid.setup(`img/Asteroid${index}.png`);
  });
  for (let i = 0; i < 5; i++) {
    enemies.push(
      new Enemy(random(60, 940), random(40, 660), enemyWIDTH, enemyHEIGHT)
    );
  }
  enemies.forEach(enemy => {
    enemy.setup(`img/enemy1.png`);
    enemiesGroup.add(enemy.sprite);
  });
  world.gravity.y = 0;

  // setInterval(() => {
  //   world.gravity.y = random(-0.1, 0.1);
  //   world.gravity.x = random(-0.1, 0.1);
  // }, 1000);
}

function draw() {
  //player.sprite.debug = true;
  Engine.update(engine);
  ground.draw();
  roof.draw();
  wallLeft.draw();
  wallRight.draw();
  background.draw();
  player.draw();
  asteroids.forEach(asteroid => {
    asteroid.draw();
  });
  enemies.forEach(enemy => {
    enemy.draw();
  });
  keyPressed();
}

function keyPressed() {
  if (keyCode === 39) {
    player.right();
  } else if (keyCode === 37) {
    player.left();
  } else if (keyCode === 38) {
    player.jump();
  } else if (keyCode === 40) {
    player.down();
  }
}
