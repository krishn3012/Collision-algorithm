var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(300, 200, 50, 100);
  fixedRect.shapeColor= "red";
  fixedRect.debug=true
  movingRect=createSprite(600,200,100,50);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  
}

function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if ((movingRect.x-fixedRect.x<(movingRect.width/2)+(fixedRect.width/2))
  && (fixedRect.x-movingRect.x<(movingRect.width/2)+(fixedRect.width/2)) 
  && (movingRect.y-fixedRect.y<(movingRect.height/2)+(fixedRect.height/2))
  && (fixedRect.y-movingRect.y<(movingRect.height/2)+(fixedRect.height/2))){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  console.log("difference of the x value between both rectangles"+(movingRect.x-fixedRect.x));
  console.log("sum of middle points along x axis"+(movingRect.width/2+fixedRect.width/2));
  console.log("difference of the y value between both rectangles"+(movingRect.y-fixedRect.y));
  console.log("sum of middle points along y axis"+(movingRect.height/2+fixedRect.height/2));

  drawSprites();
}