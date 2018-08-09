function Bullet(x, y){

  this.x = x;
  this.y = y;
  this.speed = 5;
  this.r = 5;

  this.show = function(){
    fill(255,255,0);
    rectMode(CENTER);
    rect(this.x, this.y, this.r, 8);
  }
  this.move = function(){
    this.y -= this.speed;
  }
  this.hits = function(enemy) {
    var d = dist(this.x, this.y, enemy.x, enemy.y);
    if(d < this.r/2 + enemy.r/2){
      return true;
    }else{
      return false;
    }
  }
}
