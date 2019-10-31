class Player2 extends Player {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  }
  draw() {
    const pos = this.body.position;
    push();
    rectMode(CENTER);
    this.sprite.position.x = pos.x;
    this.sprite.position.y = pos.y;
    pop();
    drawSprites();
    this.keyPressed();
    if (this.sprite.collide(enemiesGroup)) {
      this.sprite.changeAnimation("explosion");
      this.explosion.play();
      setTimeout(() => {
        this.sprite.remove();
        World.remove(world, this.body);
        startGame = false;
        document.getElementById("canvas").style.display = "none";
        document.getElementById("game-over").style.display = "flex";
      }, 500);
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
  keyPressed() {
    if (keyCode === 68) {
      player2.right();
    } else if (keyCode === 65) {
      player2.left();
    } else if (keyCode === 87) {
      player2.jump();
    } else if (keyCode === 83) {
      player2.down();
    }
  }
}
