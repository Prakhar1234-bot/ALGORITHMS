var rect1,rect2
function setup() {
  createCanvas(800,600);
  rect1 = createSprite(400, 200, 100, 50);
  rect1.shapeColor = "red";
  rect1.velocityY = 2
  
  rect2 = createSprite(400,400,50,100);
  rect2.shapeColor = "green";
  rect2.velocityY = -2;
}

function draw() {
  background(255,255,255);

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect2.width/2 + rect1.width/2){
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1);
    }
  if( rect1.y - rect2.y <
    rect1.height/2 + rect2.height/2 && rect2.y - rect1.y < rect2.height/2 + rect1.height/2 ){
      rect1.velocityY = rect1.velocityY * (-1);
      rect2.velocityY = rect2.velocityY* (-1);
    }

  //rect2.x = World.mouseX
  //rect2.y = World.mouseY 
  /*if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x < rect2.width/2 + rect1.width/2 && rect1.y - rect2.y <
     rect1.height/2 + rect2.height/2 && rect2.y - rect1.y < rect2.height/2 + rect1.height/2 ){
      rect1.shapeColor = "blue";
    }
    else {
      rect1.shapeColor = "red";
    }*/
  drawSprites();
}