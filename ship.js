function Ship(){

  this.x = width/2;
  this.y = 500;
  this.speed = 10;
  this.xdir = 0;

  this.show = function(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, 20, 20);
  }

  this.move = function(){
    this.x += this.speed * this.xdir;
  }

  this.setDir = function(dir){
    this.xdir = dir;
  }

  this.update = function(){
    if(this.x >= width){
      this.x = width;
    }
    if(this.x <= 0){
      this.x = 0;
    }
  }
}
