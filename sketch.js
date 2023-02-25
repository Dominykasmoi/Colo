function preload(){

  bgimg = loadImage("assets/bg.png")
}


function setup (){

  createCanvas (800,600)
  bg = createSprite (185,685,1,1);
  bg.addImage (bgimg)
  bg.scale = 2.5 

  ground = createSprite (300,590,1200,60)

 
}

function draw (){
background (0)
var jerry = createSprite(200,500,20,50);
  drawSprites();
}