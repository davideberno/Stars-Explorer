class Wall {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body;
  }
  setup() {
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
      isStatic: true
    });
    World.add(world, this.body);
  }
  draw() {
    push();
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
