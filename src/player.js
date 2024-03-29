class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite;
    this.body;
    this.isAlive = true;
  }
  setup(url) {
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
      density: 0.05
    });
    World.add(world, this.body);
    this.sprite = createSprite(this.x, this.y, this.w, this.h);
    this.sprite.setCollider("circle", 0, 0, this.w - 10);
    this.sprite.addAnimation("player", url);
    this.sprite.addAnimation(
      "explosion",
      "assets/img/Explosions_kenney/regularExplosion00.png",
      "assets/img/Explosions_kenney/regularExplosion08.png"
    );
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
    if (this.sprite.collide(game.enemiesGroup)) {
      this.sprite.changeAnimation("explosion");
      explosionSound.play();

      setTimeout(() => {
        this.sprite.remove();
        World.remove(world, this.body);
        this.isAlive = false;
        if (!player2) {
          gameIsOn = false;
          document.getElementById("canvas").style.display = "none";
          document.getElementById("game-over").style.display = "flex";
        } else if (player2.isAlive === false) {
          gameIsOn = false;
          document.getElementById("canvas").style.display = "none";
          document.getElementById("game-over").style.display = "flex";
        }
      }, 500);
      if (!player2) {
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (player2.isAlive === false) {
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    }
  }

  right() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0.03, y: 0 });
  }
  left() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: -0.03, y: 0 });
  }
  jump() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0, y: -0.03 });
  }
  down() {
    const pos = this.body.position;
    Body.applyForce(this.body, { x: pos.x, y: pos.y }, { x: 0, y: +0.03 });
  }
  keyPressed() {
    if (keyCode === 39) {
      game.player.right();
    } else if (keyCode === 37) {
      game.player.left();
    } else if (keyCode === 38) {
      game.player.jump();
    } else if (keyCode === 40) {
      game.player.down();
    }
  }
}
