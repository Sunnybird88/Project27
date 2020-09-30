const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDi;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobDi = 90;

	bob1 = new Bob(220,500,45,false);
	bob2 = new Bob(310,500,45,false);
	bob3 = new Bob(400,500,45,false);
	bob4 = new Bob(490,500,45,false);
	bob5 = new Bob(580,500,45,false);

	roof = new Roof(400,100,800,100);

	rope1 = new Rope(bob1,roof,-bobDi*2,0)
	rope2 = new Rope(bob2,roof,-bobDi,0)
	rope3 = new Rope(bob3,roof,0,0)
	rope4 = new Rope(bob4,roof,bobDi,0)
	rope5 = new Rope(bob5,roof,bobDi*2,0)

	Engine.run(engine);
}


function draw() {

  background(230,230,230);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  boost();
}

function boost(){

	if(keyDown("up")){
		
		Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:0});
		
	}

}

