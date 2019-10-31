class Planet {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sprite;
    this.sound;
    this.body;
  }
  setup(url) {
    this.body = Bodies.circle(this.x, this.y, this.r, {
      isStatic: true
    });
    World.add(world, this.body);
    this.sprite = createSprite(this.x, this.y, this.r);
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
  }
}
