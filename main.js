function preload() {
  background = new Background();
  background.preload("img/T_17-01.jpg");
}
let mouse;
let world;
let engine;
let canvas;
let mouseConstraint;
let ground;
let roof;
let wallRightUp;
let wallRightDown;
let wallLeftUp;
let wallLeftDown;
let wallLeft;
let wallCenter;
let player;
let planetA, planetB, planetC, planetD, planetE, planetF, planetG, planetH;

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
  ground = new Wall(WIDTH / 2, HEIGHT - 5, WIDTH, 10);
  roof = new Wall(WIDTH / 2, 0 + 5, WIDTH, 10);
  //wallRightUp = new Wall(WIDTH - 5, 180, 10, 300);
  //wallRightDown = new Wall(WIDTH - 5, 520, 10, 300);
  //wallLeftUp = new Wall(0 + 15, 180, 30, 300);
  //wallLeftDown = new Wall(0 + 15, 520, 30, 300);
  wallLeft = new Wall(0 + 5, HEIGHT / 2, 10, HEIGHT);
  wallRight = new Wall(WIDTH - 5, HEIGHT / 2, 10, HEIGHT);
  //wallCenter = new Wall(WIDTH / 2, 350, 10, HEIGHT - 200);
  player = new Player(200, 200, 40, 44);
  player.setup("img/spaceship.png");
  planetA = new Asteroid(30, 30, 16);
  planetB = new Asteroid(60, 60, 16);
  planetC = new Asteroid(80, 80, 16);
  planetD = new Asteroid(100, 100, 16);
  planetE = new Asteroid(120, 120, 16);
  planetF = new Asteroid(140, 140, 16);
  planetG = new Asteroid(160, 160, 16);
  planetH = new Asteroid(180, 180, 16);
  planetA.setup("img/Asteroids_02/Asteroids_32x32_001.png");
  planetB.setup("img/Asteroids_02/Asteroids_32x32_002.png");
  planetC.setup("img/Asteroids_02/Asteroids_32x32_003.png");
  planetD.setup("img/Asteroids_02/Asteroids_32x32_004.png");
  planetE.setup("img/Asteroids_02/Asteroids_32x32_005.png");
  planetF.setup("img/Asteroids_02/Asteroids_32x32_006.png");
  planetG.setup("img/Asteroids_02/Asteroids_32x32_007.png");
  planetH.setup("img/Asteroids_02/Asteroids_32x32_008.png");
  world.gravity.y = 0;
}

function draw() {
  Engine.update(engine);
  ground.draw();
  roof.draw();
  wallLeft.draw();
  wallRight.draw();
  background.draw();
  player.draw();
  planetA.draw();
  planetB.draw();
  planetC.draw();
  planetD.draw();
  planetE.draw();
  planetF.draw();
  planetG.draw();
  planetH.draw();
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

// Events.on(engine, "afterUpdate", function() {
//   if (
//     mouseConstraint.mouse.button === -1 &&
//     (ball.position.x > 190 || ball.position.y < 130)
//   ) {
//     elastic.bodyB = null;
//     ball = Bodies.circle(170, HEIGHT / 2, 10, {
//       density: 0.002,
//       restitution: 0.8
//     });
//     World.add(engine.world, ball);
//     elastic.bodyB = ball;
//     balls.push(ball);
//   }
// });

// let directionUp = true;

// Events.on(engine, "afterUpdate", function() {
//   if (wallCenter.position.y === 280) {
//     directionUp = false;
//   } else if (wallCenter.position.y === 420) {
//     directionUp = true;
//   }
//   if (
//     wallCenter.position.y >= 280 &&
//     wallCenter.position.y <= 420 &&
//     directionUp === false
//   ) {
//     Body.translate(wallCenter, { x: 0, y: +1 });
//   } else if (
//     wallCenter.position.y >= 280 &&
//     wallCenter.position.y <= 420 &&
//     directionUp === true
//   ) {
//     Body.translate(wallCenter, { x: 0, y: -1 });
//   }
// });

// Events.on(engine, "afterUpdate", function() {
//   balls.forEach((ball, index) => {
//     if (SAT.collides(ball, ground)) {
//       Composite.remove(world, ball);
//       balls.splice(balls[index], 1);
//     }
//   });
// });
