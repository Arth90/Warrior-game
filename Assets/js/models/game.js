
// Al constructor del GAME se le añade el canvasId y this.canvas como atributo
// Canvas es la etiqueta de html, necesita un contexto "2d"




// PINTA / BORRA / PINTA / BORRA

class Game {

  constructor(canvasId) {
      this.canvas = document.getElementById(canvasId); // Esto es el lienzo
      this.ctx = this.canvas.getContext('2d'); // Esto es el pincel

      this.drawIntervalId = undefined;
      this.fps = 60;

      this.background = new Background(this.ctx);
      this.square = new Square(this.ctx, 10, 10);
      this.player1 = new Player1(this.ctx, 20, 20);
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
      }, 1000 / this.fps);
    }
  }

  stop() {
    clearInterval (this.drawIntervalId);
    this.drawIntervalId = undefined; // para volver a arrancar en la siguiente llamada al start
  }

  onKeyDown(event) {
    this.square.onKeyDown(event);
  }

  onKeyUp(event) {
    this.square.onKeyUp(event);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  move() {
    this.square.move();
    this.background.move();
  }

  draw() {
    this.background.draw();
    this.square.draw();
    this.player1.draw();
  }


}












