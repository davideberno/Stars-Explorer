class Game {
  constructor() {
    this.engine = Engine.create();
    this.world = this.engine.world;
    this.background = new Background();
    this.ground = new Wall(WIDTH / 2, HEIGHT - 5, WIDTH, 10);
    this.roof = new Wall(WIDTH / 2, 0 + 5, WIDTH, 10);
    this.wallLeft = new Wall(0 + 5, HEIGHT / 2, 10, HEIGHT);
    this.wallRight = new Wall(WIDTH - 5, HEIGHT / 2, 10, HEIGHT);
    this.player = new Player(WIDTH / 2, HEIGHT - 20, playerWIDTH, playerHEIGHT);
    this.enemies = [];
    this.asteroids = [];
    this.enemiesGroup = new Group();
    this.gravityY = this.world.gravity.y;
    this.gravityX = this.world.gravity.x;
  }
  preload() {
    this.background.preload("img/T_17-01.jpg");
  }
  setup() {
    this.player.setup("img/spaceship.png");
    for (let i = 0; i < 8; i++) {
      this.asteroids.push(
        new Asteroid(random(50, 950), random(30, 600), asteroidRADIUS)
      );
    }
    this.asteroids.forEach((asteroid, index) => {
      asteroid.setup(`img/Asteroid${index}.png`);
    });
    for (let i = 0; i < 5; i++) {
      this.enemies.push(
        new Enemy(
          random(60, WIDTH - 60),
          random(40, HEIGHT - 300),
          enemyWIDTH,
          enemyHEIGHT
        )
      );
    }
    this.enemies.forEach(enemy => {
      enemy.setup(`img/enemy1.png`);
      this.enemiesGroup.add(enemy.sprite);
    });
    // setInterval(() => {
    //   this.gravityY = random(-0.05, 0.05);
    //   this.gravityX = random(-0.05, 0.05);
    // }, 500);
  }
  draw() {
    this.ground.draw();
    this.roof.draw();
    this.wallLeft.draw();
    this.wallRight.draw();
    this.background.draw();
    this.player.draw();
    this.asteroids.forEach(asteroid => {
      asteroid.draw();
    });
    this.enemies.forEach(enemy => {
      enemy.draw();
    });
  }
}
