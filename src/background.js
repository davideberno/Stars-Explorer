class Background {
  constructor() {
    this.background;
  }
  preload(url) {
    this.background = loadImage(url);
  }
  draw() {
    image(this.background, 0, 0, WIDTH, HEIGHT);
  }
}
