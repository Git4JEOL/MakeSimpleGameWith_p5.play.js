var box;
function setup() {
  createCanvas(800, 400);
  box = createSprite(width/2, height/2,
    40, 40);
  box.shapeColor = color(255);
  box.velocity.y = 0;
}
function draw() {
  background(0);
  if (box.position.y >= height) {
    box.velocity.y *= -1;
    box.position.y = height;
  }

  box.addSpeed(0.2, 90);
  drawSprites();
  if(mouseIsPressed){
    box.attractionPoint(0.3,mouseX,mouseY);
  }
}
function mousePressed() {
  box.position.y = mouseY;

}
