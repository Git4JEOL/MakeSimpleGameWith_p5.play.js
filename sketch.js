var food;
var r,g,b; //random value
var score=0; //score
function setup() {
  createCanvas(800, 400);
  player=createSprite(0,0,50,50);
  food = new Group();
  //food
   for (var i = 0; i < 10; i++) {
     var prey =createSprite(random(0,width),random(0,height),60,60);
     prey.shapeColor= color(0,100,100);
     food.add(prey);
   }
   obstacles = new Group();
   for (var i = 0; i < 10; i++) {
     var block =createSprite(random(0,width),random(0,height),random(20,50),random(20,50));
     block.shapeColor= color(255);
     obstacles.add(block);
   }

}

function draw() {
  background(50);
  if(mouseIsPressed){ //move while mouseIsPressed
    player.position.x=mouseX;
    player.position.y=mouseY;
    r=random(0,255);
    g=random(0,255);
    b=random(0,255);
    player.shapeColor = color(r,g,b);//player color change random
  }
    player.overlap(food,eat);
  if(player.overlap(obstacles)){//overlap
    player.remove();//remove if overlap
    food.remove();
    box2.remove();
    fill(0);
    rect(0,0,800,400);//game over white background
    noStroke();
    textAlign(CENTER, CENTER);
     textSize(72);
    fill(255);
    text('Game over', width/2,height/2);
    noLoop();//stop game
  }
  drawSprites();

}

function eat(player,food)
{
  food.remove();
  score += 1;
}
