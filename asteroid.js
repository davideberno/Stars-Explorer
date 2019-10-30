class Asteroid {
  constructor(x, y, r) {
    this.body = Bodies.circle(x, y, r);
    World.add(world, this.body);
    this.r = r;
    this.sprite = null;
  }
  setup(url) {
    const pos = this.body.position;
    this.sprite = createSprite(pos.x, pos.y, this.w, this.h);
    this.sprite.setCollider("circle", 0, 0, this.r);
    this.sprite.addAnimation("floating", url);
  }
  draw() {
    const pos = this.body.position;
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    drawSprites();
    if (this.sprite.collide(player.sprite)) {
      const index = asteroids.findIndex(el => el === this);
      asteroids.splice(index, 1);
      this.sprite.remove();
      World.remove(world, this.body);
      baseScorePlayer1 += 100;
      scorePlayer1.innerText = baseScorePlayer1;
    }
  }
}
