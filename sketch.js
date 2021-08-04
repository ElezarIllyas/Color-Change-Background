
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  background('blue','yellow');

  if(keyIsDown(DOWN_ARROW))
  {
    background('red');
    //background('yellow');
  }

  drawSprites();
}




