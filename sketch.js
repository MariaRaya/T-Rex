var trex, trex_running, edges;
var groundImage, ground, groundInvisivel;

function preload(){  //Carrega a imagem
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running); // Associa a imagem ao sprite 
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50

  // Chão
  ground = createSprite(200,180,400,20);
  ground.x = ground.width / 2; //Situa a posição x do chão
  ground.addAnimation("chão", groundImage);

  //Chão invisível
  groundInvisivel = createSprite(200,190,400,10);
  groundInvisivel.visible = false;
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");

  console.log(trex.y);

  //movimento do chão
  ground.velocityX = -2;
  if (ground.x < 0){
    ground.x = ground.width / 2;  // Faz a repetição do chão 
  }

  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y > 100){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5; // Faz com que o T-Rex retorne ao chão
  
 //impedir que o trex caia
  trex.collide(groundInvisivel);
  drawSprites();
}