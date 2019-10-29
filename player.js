class Player {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h, {
      density: 0.05
    });
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  setup(url) {
    const pos = this.body.position;
    this.sprite = createSprite(pos.x, pos.y, this.w, this.h);
    this.sprite.addAnimation("floating", url);
  }
  draw() {
    const pos = this.body.position;
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    drawSprites();
  }

  right() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0.01, y: 0 });
  }
  left() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: -0.01, y: 0 });
  }
  jump() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0, y: -0.01 });
  }
  down() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0, y: +0.01 });
  }
}
