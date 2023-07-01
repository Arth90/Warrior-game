








class Square {

  constructor(ctx, x, y, color = 'blue') {
    this.ctx = ctx;
    
    this.x = x;
    this.y = y;

    this.y0 = y; // para saber si estoy saltando

    this.w = 50;
    this.h = 50;

    this.vy = 0;
    this.vx = 0;
    this.ay = SQUARE_AY;

    this.color = color;

  }


  onKeyDown(event) {
    switch (event.keyCode) {
      case KEY_UP:
        this.jump();
        break;
      case KEY_DOWN:
        break;
      case KEY_RIGHT:
        this.vx = SQUARE_SPEED;
        break;
      case KEY_LEFT:
        this.vx = - SQUARE_SPEED;
        break;
    }
  }

  onKeyUp(event) {
    switch (event.keyCode) {
      case KEY_UP:
        break;
      case KEY_DOWN:
        break;
      case KEY_RIGHT:
        this.vx = 0;
        break;
      case KEY_LEFT:
        this.vx = 0;
        break;
    }
  }

  jump() {
    if (this.y === this.y0) { // si la this.y es < de this.y0 estoy saltando
      this.vy = -SQUARE_JUMP; // negativo porque la y se resta 
    }

  }

  move() {
    this.x += this.vx; 
    this.y += this.vy;
    this.vy += this.ay;

    if (this.x + this.w > this.ctx.canvas.width) { // el if es para no salirse del canvas
      this.x = this.ctx.canvas.width - this.w;
    } else if (this.x < 0) {
      this.x = 0;
    }

    if (this.y > this.y0) {
      this.y = this.y0;
      this.vy = 0;
    }
  } 


  draw() {
    this.ctx.save();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x,this.y, this.w, this.h);
    this.ctx.restore();
  }


}