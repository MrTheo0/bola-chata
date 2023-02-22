
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rotator1, rotator2, rotator3;
var rectangle0;
var angle1 = 360;
var angle2 = 240;
var angle3 = 120;

var block1;
var block2;
var ground;

var ball1;
var ball2;
var ball45;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
  var ball_options =
  {
      restitution: 0.05,
      friction : 0.04,
  }
	var rotator_options = 
	{
		isStatic: true
	}

	ground = Bodies.rectangle(400,690,800,20,rotator_options);
	World.add(world, ground);

	ball1 = Bodies.circle(250,20,20, ball_options);
	ball2 = Bodies.circle(250,40,20, ball_options);
	ball45 = Bodies.circle(250,60,20, ball_options);
	
	//Crie os Corpos aqui.
	rectangle0 = Bodies.circle(250,0,20,20, ball_options);
	World.add(world, rectangle0);

	block1 = Bodies.rectangle(175, 400, 30 ,50);
	block2 = Bodies.rectangle(375, 400, 30 ,50);



	rotator1 = Bodies.rectangle(250,200, 150, 20,rotator_options);
	rotator2 = Bodies.rectangle(250,200, 150, 20,rotator_options);
	rotator3 = Bodies.rectangle(250,200, 150, 20,rotator_options);

	World.add(world,rotator1,rotator2,rotator3) ;
	

	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(250,125,125);
  fill("white");
  Engine.update(engine);

//usar ellipse
  
  Matter.Body.rotate (rotator1, angle1)
  push();
  translate ( rotator1.position.x, rotator1.position.y) ;
  rotate(angle1) ;
  rect(0,0,150,20);
  pop();
  angle1 +=0.3;

  
  Matter.Body.rotate (rotator2, angle2);
  push();
  translate ( rotator2.position.x, rotator2.position.y) ;
  rotate(angle2) ;
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;
  
  
  Matter.Body.rotate (rotator3, angle3);
  push();
  translate ( rotator3.position.x, rotator3.position.y) ;
  rotate(angle3) ;
  rect(0,0,150,20);
  pop();
  angle3 +=0.3;
  
   

  ellipse(rectangle0.position.x, rectangle0.position.y, 20,20); 
  rect(block1.position.x, block1.position.y, 150,20);
  rect(block2.position.x, block2.position.y, 150,20);
  rect(ground.position.x, ground.position.y, 800,20);
  

  ellipse(ball1.position.x, ball1.position.y, 20, 20);
  ellipse(ball2.position.x, ball2.position.y, 20, 20);
  ellipse(ball45.position.x, ball45.position.y, 20, 20);


  drawSprites();
  
  




}



