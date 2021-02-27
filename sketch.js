const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var maxDrops = 100;

var drop = []
function preload(){
  thunder1=loadImage("images/thunderbolt/1.png");
  thunder2=loadImage("images/thunderbolt/2.png");
  thunder3=loadImage("images/thunderbolt/3.png");
  thunder4=loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  if(frameCount % 150 === 0){
    for (let i = 0; i < maxDrops; i++) {
      drop.push(new Drops(random(0,400), (0,400))) ;
    }
  }
  
}

function draw(){
 background(0);

rand = Math.round(random(1,4));
if (frameCount %80===0) {
  thunderCreatedFrame=frameCount;
  thunder = createSprite(random(10,370),random(10,30),10,10);
  switch(rand){
  case 1: thunder.addImage(thunder1);
  break;
  case 2: thunder.addImage(thunder2);
  break;
  case 3: thunder.addImage(thunder3);
  break;
  default: break;
  }
thunder.scale = random(0.3,0.6)
}


 for(var i = 0; i<maxDrops; i++){
  drop[i].display();
  drop[i].update();
 }
}   

