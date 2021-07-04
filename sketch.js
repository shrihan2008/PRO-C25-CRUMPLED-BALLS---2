
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball1 
var bin,bin1,bin2
var ground
var launch
var launch1

function preload() {
   launch=loadImage("bin.png")
  
}

  function setup() 
  {
    createCanvas(700, 700);
      
    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    Engine.run(engine);
    ball= new Ball(200,200,70);
    
bin=new Dustbin(565,625,10,100  );   // left wall
bin1=new Dustbin(625,680,130,10)    //bottom wall
bin2=new Dustbin(685,625,10,100);  // right wall
ground=new Ground(0,700,10000,40);
launch1=createSprite(625,625)
launch1.addImage(launch)
launch.resize(125,100)

  
  }



  function draw() 
  {
    rectMode(CENTER);
    background("white"); 
    ball.display()
    ground.display()
    bin.display()
    bin1.display()
    bin2.display()
    
    //keyPressed();    
    drawSprites();
  
  }
  function keyPressed()
  {
    if(keyCode===UP_ARROW  ){
      
    Matter.Body.applyForce(ball.body,ball.body.position,{x:800,y:85});
  }
}






