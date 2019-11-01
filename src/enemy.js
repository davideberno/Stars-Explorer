class Enemy {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.direction = Math.round(random(1, 4));
    this.sprite;
    this.body;
  }
  setup(url) {
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
      density: 0.5
    });
    World.add(world, this.body);
    this.sprite = createSprite(this.x, this.y, this.w, this.h);
    this.sprite.setDefaultCollider();
    this.sprite.addAnimation("floating", url);

    setInterval(() => {
      this.direction = Math.round(random(1, 4));
    }, 7000);
  }
  draw() {
    const pos = this.body.position;
    push();
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    pop();
    drawSprites();
    this.randomMovement();
  }
  randomMovement() {
    const pos = this.body.position;
    if (pos.y <= 32) {
      this.direction = 3;
    } else if (pos.y >= HEIGHT - 32) {
      this.direction = 1;
    } else if (pos.x <= 68) {
      this.direction = 4;
    } else if (pos.x >= WIDTH - 68) {
      this.direction = 2;
    }
    if (pos.y >= 30 && pos.y <= HEIGHT - 30 && this.direction === 3) {
      Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0, y: +0.3 });
    } else if (pos.y >= 30 && pos.y <= HEIGHT - 30 && this.direction === 1) {
      Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0, y: -0.3 });
    } else if (pos.x >= 60 && pos.x <= WIDTH - 66 && this.direction === 2) {
      Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: -0.3, y: 0 });
    } else if (pos.x >= 60 && pos.x <= WIDTH - 66 && this.direction === 4) {
      Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0.3, y: 0 });
    }
  }
}
