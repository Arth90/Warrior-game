








class Player1 {

  constructor(ctx, x, y) {
    this.ctx = ctx;
    
    this.y0 = y;

    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;

    this.vx = 0;
    this.vy = 0;
    this.ay = 0.1;

    this.sprite = new Image();
    this.sprite.src = '/assets/img/warriorwalk.png';
    this.sprite.verticalFrames = 1;
    this.sprite.verticalFrameIndex = 0;
    this.sprite.horizontalFrames = 8;
    this.sprite.horizontalFrameIndex = 0;
    this.sprite.onload = () => {
      this.sprite.isReady = true;
      this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
      this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
    }

    this.animationTick = 0;
  }

  animate() {
    this.animationTick++;
    if (this.animationTick > 10) {
      this.animationTick = 0;
      this.sprite.horizontalFrameIndex++;
      if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames -1) {
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
    }
  }
