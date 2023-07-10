








class Bullet {

  constructor(ctx, x, y) {

    this.ctx = ctx;
    this.x = x;
    this.y = y;

    this.w = 40;
    this.h = 40;

    this.vx = 8;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;

    this.sprite = new Image();
    this.sprite.src = '/assets/img/axe.png';
    this.sprite.onload = () => {
      this.sprite.isReady = true;
  }
  }

  draw() {
    if (this.sprite.isReady) {
      this.ctx.drawImage(
      this.sprite,
      this.x,
      this.y,
      this.w = 40,
      this.h = 40
    );
    }
  }


  // A LAS VELOCIDADES SE LE SUMAN LAS ACELERACIONES
  // A LAS POSICIONES, SE LE SUMAN LAS VELOCIDADES
  
  move() { 
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
  }


}





