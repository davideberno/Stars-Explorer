class Enemy {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h, {
      isStatic: true
    });
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.direction = 1;
    this.sprite = null;
  }
  setup(url) {
    const pos = this.body.position;
    this.sprite = createSprite(pos.x, pos.y, this.w, this.h);
    this.sprite.setDefaultCollider();
    this.sprite.addAnimation("floating", url);

    setInterval(() => {
      this.direction = Math.round(random(1, 4));
    }, 5000);
  }
  draw() {
    const pos = this.body.position;
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    drawSprites();
    this.randomMovement();
  }
  randomMovement() {
    const pos = this.body.position;
    if (pos.y <= 32) {
      this.direction = 3;
    } else if (pos.y >= 668) {
      this.direction = 1;
    } else if (pos.x <= 68) {
      this.direction = 4;
    } else if (pos.x >= 932) {
      this.direction = 2;
    }
    if (pos.y >= 30 && pos.y <= 670 && this.direction === 3) {
      Body.translate(this.body, { x: 0, y: +2 });
    } else if (pos.y >= 30 && pos.y <= 670 && this.direction === 1) {
      Body.translate(this.body, { x: 0, y: -2 });
    } else if (pos.x >= 60 && pos.x <= 934 && this.direction === 2) {
      Body.translate(this.body, { x: -2, y: 0 });
    } else if (pos.x >= 60 && pos.x <= 934 && this.direction === 4) {
      Body.translate(this.body, { x: +2, y: 0 });
    }
  }
}
