var objeto;

function setup() {
  createCanvas(400,400);
  objeto = createSprite (200, 77, 24, 68);
}

function draw() {

  background("black");

  if (KeyIsDown(RIGHT_ARROW)) {
    objeto.position.x = objeto.position.x +2;
  }

  drawSprites();

}




