function Enemy(){

  this.x = random(1000);
  this.y = random(300);
  this.r = 20;

  this.show = function(){
    fill(255, 0, 0);
    rect(this.x, this.y, this.r, this.r);
  }

  this.update = function(){
    this.dir = random(1);
    if(this.dir === 0){
      this.x += random(50);
    }else if (this.dir === 1) {
      this.x -= random(50);
    }
  }

  this.hit = function() {

  }
}
