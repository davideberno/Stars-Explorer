class Wall {
  constructor(x, y, w, h) {
    this.body = Bodies.rectangle(x, y, w, h, {
      isStatic: true
    });
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  draw() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
