var r,g,b; //random value
function setup() {
  createCanvas(800, 400);
  player=createSprite(0,0,50,50);
  box1=createSprite(200,100,200,300);
  box2=createSprite(600,300,200,300);
  food = new Group();
  //food
   for (var i = 0; i < 10; i++) {
     var prey =createSprite(random(0,width),random(0,height));
     food.add(prey);
   }
   food.draw = function() { ellipse(0,0,10,10) }
   //obstacles = new group();
   /*for (var i = 0; i < 5; i++) {
     var prey =createSprite(random(0,width),randim(0,height));
     block.add(prey);
   }
   */
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
  player.overlap(food,eat);
  if(player.overlap(box1)||player.overlap(box2)){//overlap
    player.remove();//remove if overlap
    food.remove();
    box2.remove();
    fill(255);
    rect(0,0,800,400);//game over white background
    textSize(50);
    fill(100,200,300);
    text('Game over', 300, 200);
    noLoop();//stop game
  }
  drawSprites();
}
function eat(player,food)
{
  food.remove();
}
