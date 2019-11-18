var r,g,b; //random value
function setup() {
  createCanvas(800, 400);
  player=createSprite(0,0,50,50);
  box1=createSprite(200,100,200,300);
  box2=createSprite(600,300,200,300);
  collect = new group();
   for (var i = 0; i < 10; i++) {
     var prey =createSprite(random(0,width),randim(0,height));
     collect.add(prey);
   }
}

function draw() {
  background(100,200,300);
  fill(100,200,300);
  if(mouseIsPressed){ //move while mouseIsPressed
    player.position.x=mouseX;
    player.position.y=mouseY;
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
    player.shapeColor = color(r,g,b);//player color change random
  }
  if(player.overlap(box1)||player.overlap(box2)){//overlap  check
    fill(255);
    rect(0,0,800,400);//game over white background
    player.remove();//remove if overlap
    box1.remove();
    box2.remove();
    textSize(50);
    fill(100,200,300);
    text('Game over', 300, 200);
    noLoop();//stop game
  }
  drawSprites();
}
