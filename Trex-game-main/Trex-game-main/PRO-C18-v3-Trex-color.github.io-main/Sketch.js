function preload(){
  trex_running=loadAnimation("trex_1.png", "trex_2.png", "trex_3.png");
  ground_img=loadImage("ground.png");
  cloud_img=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  trex=createSprite(90,630,20,20);
  ground=createSprite(width/2,height-30,width+1000,200);
  groundInv=createSprite(width/2,height+25,width+1000,200)
  ground.x=width/2;
  ground.addImage("moving", ground_img);
  trex.addAnimation("running", trex_running);
  trex.scale=0.2;
  trex.depth=ground.depth;
  trex.depth=trex.depth+1;
  groundInv.depth=ground.depth;
  groundInv.depth=ground.depth-1;
}
function draw(){
  background("lightblue");
  ground.velocityX=-7;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space")){
    trex.velocityY=-7;
  }
  trex.velocityY=trex.velocityY+0.8
  spawnClouds();
  spawnObstacles();
  trex.collide(groundInv);
  drawSprites();
}
function spawnClouds(){
  if (frameCount%130==0){
  var cloud=createSprite(1500,80,20,20);
  cloud.y=Math.round(random(50,200));
  cloud.addImage("moving", cloud_img);
  cloud.velocityX=-7;
  }
}
function spawnObstacles(){
  if (frameCount%130==0){
  var obstacle=createSprite(windowWidth-500,620,10,10);
  obstacle.scale=.85;
  obstacle.velocityX=-7;
  //generate random obstacles;
  var rand=Math.round(random(1,2));
  switch(rand){
    case 1: obstacle.addImage(obstacle1);
            break;
    case 2: obstacle.addImage(obstacle2);
            break;
    default: break;
  }
  }
}