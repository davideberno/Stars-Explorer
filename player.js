class Player {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h, {
      density: 0.05
    });
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.sprite = null;
  }
  setup(url) {
    const pos = this.body.position;
    this.sprite = createSprite(pos.x, pos.y, this.w, this.h);
    this.sprite.setCollider("circle", 0, 0, this.w - 10);
    this.sprite.addAnimation("player", url);
    this.sprite.addAnimation(
      "explosion",
      "img/Explosions_kenney/regularExplosion00.png",
      "img/Explosions_kenney/regularExplosion08.png"
    );
  }
  draw() {
    const pos = this.body.position;
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    drawSprites();
    if (this.sprite.collide(enemiesGroup)) {
      this.sprite.changeAnimation("explosion");
      setTimeout(() => {
        this.sprite.remove();
        World.remove(world, this.body);
        noLoop();
      }, 500);
    }
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
