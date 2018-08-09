var ship;
var enemys = [];
var frameBEnemys = 400;
var bullets = [];
var enemysKilled = 0;


function setup(){
  createCanvas(1000, 600);
  ship = new Ship();
  enemys.push(new Enemy());
  bullets.push(new Bullet(500, 500));

}

function draw(){
  background(0);
  ship.show();
  ship.update();
  ship.move();



  for(var i = enemys.length-1; i >= 0; i--){
    enemys[i].show();
    enemys[i].update();
    if(enemys[i].hit()){

    }
  }
  for(var i = bullets.length-1; i >= 0; i--){
    bullets[i].show();
    bullets[i].move();
    for(var j = enemys.length-1; j >= 0; j--){
      if(bullets[i].hits(enemys[j])){
        //bullets.splice(i, 1);
        bullets[i].y = -10;
        enemys.splice(j, 1);
        enemysKilled++;
        console.log(enemysKilled);
      }
    }
    if(bullets[i].y < -5){
      bullets.splice(i, 1);
    }
  }

  if(frameCount % (frameBEnemys - (enemysKilled*2)) == 0){
    enemys.push(new Enemy());
  }
}

function keyPressed(){
  if(key == 'D'){
    //console.log("D pressed");
    ship.setDir(1);
  }
  if(key == 'A'){
    ship.setDir(-1);
    //console.log("A pressed");
  }
  if(key == 'W' || key == ' '){
    var bullet = new Bullet(ship.x, ship.y)
    bullets.push(bullet);
  }
}

function keyReleased(){
  if(key == 'D'){
    //console.log("D pressed");
    ship.setDir(0);
  }
  if(key == 'A'){
    ship.setDir(0);
    //console.log("A pressed");
  }
}
