var trex, trex_running, edges;
var groundImage, ground, groundInvisivel;
var nuvem, nuvemImagem;

function preload(){  //Carrega a imagem
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  nuvemImagem = loadImage("cloud.png");
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

  //movimento do chão
  ground.velocityX = -2;
  if (ground.x < 0){
    ground.x = ground.width / 2;  // Faz a repetição do chão 
  }
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y > 100){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5; // Faz com que o T-Rex retorne ao chão
  // Criar nuvens
  criarNuvens ();
  console.log(frameCount);
 //impedir que o trex caia
  trex.collide(groundInvisivel);
  drawSprites(); 

}

function criarNuvens(){
  if (frameCount % 50 == 0){
    nuvem = createSprite(600,100,40,10);
    nuvem.velocityX = -5;
    nuvem.addImage(nuvemImagem);
    nuvem.y = random(30,100);
    nuvem.scale = 0.6;
  }
}