








class Axe {

  constructor(ctx, x, y) {

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    

    this.bullets = []
  }

  checkCollisionsbullet(enemy) {
    this.bullets.forEach((bullet) => {
      console.log(bullet);
      const colx = bullet.x + bullet.w >= enemy.x || bullet.x < enemy.x + enemy.w;
      const coly = bullet.y + bullet.h >= enemy.y || bullet.y < enemy.y + enemy.h;
    
      if(colx && coly) {
        return true;
      }
    })
    return false;
  }

  shoot() {
    const newBullet = new Bullet (this.ctx, this.x, this.y);
    this.bullets.push(newBullet);
  }

  draw() {
    this.bullets.forEach((bullet) => {
      bullet.draw();
    });
  }

  move() {
    this.bullets.forEach((bullet) => {
      bullet.move();
    });
  }
}











