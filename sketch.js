const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,20);
	ground = new Ground(500,380,1000,20);

	dustbin1 = new Dustbin(600, 380, 150, 20);
	dustbin2 = new Dustbin(530, 340, 20, 100);
	dustbin3 = new Dustbin(670, 340, 20, 100);
	
	 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}

	
}
