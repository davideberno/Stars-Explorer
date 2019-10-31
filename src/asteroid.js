class Asteroid {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sprite = null;
    this.sound;
    this.body;
  }
  preload() {
    this.sound = loadSound("assets/sounds/asteroidColl1.wav");
    this.sound.setVolume(0.05);
  }
  setup(url) {
    this.body = Bodies.circle(this.x, this.y, this.r);
    World.add(world, this.body);
    this.sprite = createSprite(this.x, this.y, this.r);
    this.sprite.setCollider("circle", 0, 0, this.r);
    this.sprite.addAnimation("floating", url);
  }
  draw() {
    const pos = this.body.position;
    push();
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    pop();
    drawSprites();
    if (this.sprite.collide(player.sprite)) {
      const index = asteroids.findIndex(el => el === this);
      asteroids.splice(index, 1);
      this.sprite.remove();
      World.remove(world, this.body);
      baseScorePlayer1 += 100;
      scorePlayer1.innerText = baseScorePlayer1;
      this.sound.play();
    }
  }
}
