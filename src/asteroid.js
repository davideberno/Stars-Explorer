class Asteroid {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sprite;
    this.body;
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
    if (this.sprite.collide(game.player.sprite)) {
      const index1 = game.asteroids.findIndex(el => el === this);
      game.asteroids.splice(index1, 1);
      this.sprite.remove();
      World.remove(world, this.body);
      valueScorePlayer1 += 100;
      scorePlayer1.innerText = valueScorePlayer1;
      asteroidSound.play();
    }
    if (player2IsOn) {
      if (this.sprite.collide(player2.sprite)) {
        const index2 = game.asteroids.findIndex(el => el === this);
        game.asteroids.splice(index2, 1);
        this.sprite.remove();
        World.remove(world, this.body);
        valueScorePlayer2 += 100;
        scorePlayer2.innerText = valueScorePlayer2;
        asteroidSound.play();
      }
    }
  }
}
