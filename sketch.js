var fixedRect, movingRect;
var object1, object2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  /*object1 = createSprite(100,80,30,30);
  object1.shapeColor = "green"

  object2 = createSprite(200,80,30,30);
  object2.shapeColor = "green"*/

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 //movingRect.y = World.mouseY;

  
 /*if(isTouching(movingRect,object1)){

 movingRect.shapeColor = "red";
 object1.shapeColor = "red";
 }
 else {
 movingRect.shapeColor = "green";
 object1.shapeColor = "green";
 }*/

bounceOff(movingRect,fixedRect);

  drawSprites();
}

