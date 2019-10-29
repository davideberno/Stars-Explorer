class Background {
  constructor() {
    this.background = 0;
  }
  preload(url) {
    this.background = loadImage(url);
  }
  draw() {
    image(this.background, 0, 0, width, height);
  }
}
