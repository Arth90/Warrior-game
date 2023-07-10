








class Player1 {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    
    this.y0 = y;

    this.x = x;
    this.y = x;
    this.w = 100;
    this.h = 110;

    this.vx = 0;
    this.vy = 0;
    this.ay = PLAYER1_AY;

    this.axe = new Axe(this.ctx,this.x + this.w, this.y + this.h / 2);

    this.walkSound = new Audio('/Assets/audio/pasos.wav');
    this.walkSound.volume = 0.3;

    this.jumpSound = new Audio('/Assets/audio/jumper.wav');
    this.jumpSound.volume = 0.5;
    

    this.sprite = new Image();
    this.sprite.src = '/assets/img/warriorrun.png';
    this.sprite.verticalFrames = 1;
    this.sprite.verticalFrameIndex = 0;
    this.sprite.horizontalFrames = 6;
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.onload = () => {
      this.sprite.isReady = true;
      this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
      this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
    }

    this.animationTick = 0;
   }

  onKeyDown(event) {
    switch (event.keyCode) {
      case SPACE_BAR:
        this.axe.shoot();
        break;
      case KEY_UP:
        this.jump();
        break;
      case KEY_DOWN:
        break;
      case KEY_RIGHT:
        this.vx = PLAYER1_SPEED;
        break;
      case KEY_LEFT:
        this.vx = - PLAYER1_SPEED;
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

  move () {
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    
    this.walkSound.play();

    this.axe.x = this.x + this.w;
    this.axe.y = this.y + this.h / 2;
    this.axe.move();

    if (this.vx === 0) {
      this.walkSound.pause();
    }

    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.w > this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w;
    }

    if (this.y > this.y0) {
      this.y =this.y0;
      this.vy = 0; // IMPORTANTE quitar velocidad para no llegar al numero negativo
    }
  }

  jump() {
    if (this.y === this.y0) {
      this.vy = - PLAYER1_JUMP;
      this.jumpSound.play();
    }
  }

  animate() {
    this.animationTick++;

    if (this.animationTick > PLAYER1_RUN_ANIMATION_TICK) {
      this.animationTick = 0; // importante volver a 0
      this.sprite.horizontalFrameIndex++;
      
      if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames -1) { // esto itera con 0, 1, 2.. 0, 1, 2...
        this.sprite.horizontalFrameIndex = 0;
      }
    }

  }



    draw() {
      if (this.sprite.isReady) {
          this.ctx.drawImage(
          this.sprite,
          this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
          this.sprite.verticalFrameIndex * this.sprite.frameHeight,
          this.sprite.frameWidth,
          this.sprite.frameHeight,
          this.x,
          this.y,
          this.w,
          this.h
        );

        this.animate();
      }

      this.axe.draw();
    }
  
  
  
  }



