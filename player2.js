class Player2 extends Player {
  constructor(x, y, w, h) {
    super(x, y, w, h);
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
