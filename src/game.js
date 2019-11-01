class Game {
  constructor() {
    this.background;
    this.ground;
    this.roof;
    this.wallLeft;
    this.wallRight;
    this.planetA;
    this.planetB;
    this.player;
    this.asteroidsCounter = 0;
    this.enemies = [];
    this.asteroids = [];
    this.enemiesGroup = new Group();
  }
  preload() {
    this.background = new Background();
    this.background.preload("assets/img/background.jpg");

    this.ground = new Wall(WIDTH / 2, HEIGHT - 5, WIDTH, 10);

    this.roof = new Wall(WIDTH / 2, 0 + 5, WIDTH, 10);

    this.wallLeft = new Wall(0 + 5, HEIGHT / 2, 10, HEIGHT);

    this.wallRight = new Wall(WIDTH - 5, HEIGHT / 2, 10, HEIGHT);

    this.planetA = new Planet(250, 200, 70);

    this.planetB = new Planet(WIDTH - 250, 500, 70);

    this.player = new Player(WIDTH / 2, HEIGHT - 20, playerWIDTH, playerHEIGHT);

    for (let i = 0; i < 8; i++) {
      this.asteroids.push(
        new Asteroid(random(50, WIDTH - 50), random(30, 600), asteroidRADIUS)
      );
    }

    for (let i = 0; i < 3; i++) {
      this.enemies.push(
        new Enemy(
          random(68, WIDTH - 68),
          random(40, 400),
          enemyWIDTH,
          enemyHEIGHT
        )
      );
    }
  }
  setup() {
    this.ground.setup();
    this.roof.setup();
    this.wallLeft.setup();
    this.wallRight.setup();
    this.planetA.setup("assets/img/planetB.png");
    this.planetB.setup("assets/img/planetB.png");
    this.player.setup("assets/img/spaceship.png");
    this.asteroids.forEach((asteroid, index) => {
      asteroid.setup(`assets/img/Asteroid${index % 8}.png`);
    });

    this.enemies.forEach(enemy => {
      enemy.setup(`assets/img/enemy1.png`);
      this.enemiesGroup.add(enemy.sprite);
    });
    setInterval(() => {
      if (gameIsOn) {
        this.asteroids.push(
          new Asteroid(random(50, WIDTH - 50), random(30, 600), asteroidRADIUS)
        );
        this.asteroids[this.asteroids.length - 1].setup(
          `assets/img/Asteroid${this.asteroidsCounter}.png`
        );
        if (this.asteroidsCounter < 7) {
          this.asteroidsCounter++;
        } else {
          this.asteroidsCounter = 0;
        }
      }
    }, 3000);

    setInterval(() => {
      if (gameIsOn && this.enemies.length < 8) {
        this.enemies.push(
          new Enemy(
            random(60, WIDTH - 60),
            random(40, 400),
            enemyWIDTH,
            enemyHEIGHT
          )
        );
        this.enemies[this.enemies.length - 1].setup(`assets/img/enemy1.png`);
        this.enemiesGroup.add(this.enemies[this.enemies.length - 1].sprite);
        newEnemySound.play();
      }
    }, 20000);

    setInterval(() => {
      world.gravity.y = random(-0.05, 0.05);
      world.gravity.x = random(-0.05, 0.05);
    }, 400);
  }
  draw() {
    if (gameIsOn) {
      this.ground.draw();
      this.roof.draw();
      this.wallLeft.draw();
      this.wallRight.draw();
      this.background.draw();
      this.player.draw();
      this.planetA.draw();
      this.planetB.draw();
      this.asteroids.forEach(asteroid => {
        asteroid.draw();
      });
      this.enemies.forEach(enemy => {
        enemy.draw();
      });
    }
  }
}
