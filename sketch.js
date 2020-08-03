
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy_img = loadImage("boy.png");
	tree_img = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	stone = new Stone();
	//tree = new Tree();
	
	launcher = new Launcher({x: 272, y: 576}, stone.body);

	mango1 = new Mango(700, 100);
	mango2 = new Mango(640, 140);
	mango3 = new Mango(744, 150);
	mango4 = new Mango(570, 245);
	mango5 = new Mango(700, 265);
	mango6 = new Mango(817, 285);

	Engine.run(engine);
  
}


function draw() {
	background("lightblue");

	//console.log(mouseX + " , " + mouseY);
	
	image (boy_img, 350, 670, 250, 400);
	image (tree_img, 700, 400, 400, 800);

  	ground.display();
	//tree.display();
	stone.display();
	launcher.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
}

function detectCollision(stoneObject, mangoObject){
 var stonePos = stoneObject.body.position;
 var mangoPos = mangoObject.body.position;

 var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
 console.log(distance);

 if(distance <= stoneObject.radius + mangoObject.radius){
	 Matter.Body.setStatic(mangoObject.body, false);
 }
}

function mouseDragged(){
	Matter.Body.setPosition( stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode == 32){
		launcher.attach(stone.body);
	}
}

