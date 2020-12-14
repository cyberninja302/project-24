
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var box1, box2, box3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,500)

	ground = new Ground(400,680,800,10)

	box1 = new Box (550,620,10,100)
	box2 = new Box (600,670,100,10)
	box3 = new Box (650,620,10,100)

	Engine.run(engine);
  
}


function draw() {

 background("white")
 
	paper.display();
  
	ground.display();

	box1.display();
	box2.display();
	box3.display();

  

  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
console.log("uparrow key is pressed")
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-100})
	}
}




