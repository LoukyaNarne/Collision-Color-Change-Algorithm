var moveRect, fixRect, fixRect2, fixRect3, fixRect4

function setup() {
  createCanvas(800,400);
  moveRect=createSprite(200, 200, 50, 50);
  moveRect.shapeColor= "green";
  
  fixRect=createSprite(100, 200, 50, 50);
  fixRect.shapeColor= "pink";
  fixRect.velocityY=0
  fixRect.velocityX=0

  fixRect2=createSprite(200, 200, 50, 50);
  fixRect2.shapeColor= "pink";
  fixRect2.velocityY=0
  fixRect2.velocityX=0

  fixRect3=createSprite(300, 200, 50, 50);
  fixRect3.shapeColor= "pink";
  fixRect3.velocityY=0
  fixRect3.velocityX=0

  fixRect4=createSprite(400, 200, 50, 50);
  fixRect4.shapeColor= "pink";
  fixRect4.velocityY=0
  fixRect4.velocityX=0
}

function draw() {
  background("black");  
  moveRect.x=mouseX;
  moveRect.y=mouseY;

  if(isTouching(fixRect, moveRect)){
    fixRect.shapeColor= "blue";
    moveRect.shapeColor= "yellow";

    bounceoff(fixRect, moveRect)
  }
  else{
    moveRect.shapeColor= "green";
    fixRect.shapeColor= "pink";

  }

  if(isTouching(fixRect2, moveRect)){
    fixRect2.shapeColor= "blue";
    moveRect.shapeColor= "yellow";

    bounceoff(fixRect2, moveRect)
  }
  else{
    moveRect.shapeColor= "green";
    fixRect2.shapeColor= "pink";
  }

  if(isTouching(fixRect3, moveRect)){
    fixRect3.shapeColor= "blue";
    moveRect.shapeColor= "yellow";

    bounceoff(fixRect3, moveRect)
  }
  else{
    moveRect.shapeColor= "green";
    fixRect3.shapeColor= "pink";
    }

  if(isTouching(fixRect4, moveRect)){
    fixRect4.shapeColor= "blue";
    moveRect.shapeColor= "yellow";

    bounceoff(fixRect4, moveRect)
  }
  else{
    moveRect.shapeColor= "green";
    fixRect4.shapeColor= "pink";
  }

  drawSprites();
}

