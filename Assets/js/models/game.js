
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
      this.player1 = new Player1(this.ctx, 10, this.canvas.height - 187);
      
      
      this.enemies = [];
      this.ghosts = [];
      
      this.axe = new Axe (this.ctx, 10, this.canvas.height - 187)

      this.gameOverAudio = new Audio('Assets/audio/lose.mp3');

      this.audio = new Audio('/Assets/audio/Ruined_Place.ogg');
      this.audio. volume = 0.5;

      this.tick = 0;
  }

  start() {
    if (!this.drawIntervalId) {
      this.audio.play();

      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
        this.checkCollisions();
        this.killenemy();
        this.addEnemy();
        this.addGhost();
      }, 1000 / this.fps);
    }
  }

  stop() {
    clearInterval (this.drawIntervalId);
    this.audio.pause();
    this.drawIntervalId = undefined; // para volver a arrancar en la siguiente llamada al start
  }

  addGhost() {
    this.tick++;

    if(this.tick > 300) {
      this.tick = 0;
      this.ghosts.push(new Ghost(this.ctx));
      }
  }

  addEnemy() {
    this.tick++;

    if(this.tick > 300) {
      this.tick = 0;
      this.enemies.push(new Enemy(this.ctx));
      }
  }

 

    killenemy() {
      this.enemies.forEach((e) => {
        const itsCollision = this.axe.checkCollisionsbullet(e);
        console.log(itsCollision)
        if (itsCollision) {
          console.log("kill")
        }
      });    
      
  }

  checkCollisions() {
    const m = this.player1;
    
    this.enemies.forEach((e) => {
    const colx = m.x + m.w >= e.x && m.x < e.x + e.w;
    const coly = m.y + m.h >= e.y && m.y < e.y + e.h;

    if (colx && coly) {
      this.gameOver();
    }
  });
  }
  

  gameOver() {
    this.gameOverAudio.play();
    this.stop();
    alert("Game Over Warrior");
  }

  onKeyDown(event) {
    this.player1.onKeyDown(event);
  }

  onKeyUp(event) {
    this.player1.onKeyUp(event);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  move() {
    this.background.move();
    this.player1.move();
    this.axe.move();
    this.enemies.forEach((e) => e.move());
    this.ghosts.forEach((ghost) => ghost.move());
  }

  draw() {
    this.background.draw();
    this.player1.draw();
    this.axe.draw();
    this.enemies.forEach((e) => e.draw());
    this.ghosts.forEach((ghost) => ghost.draw());
  }

}












