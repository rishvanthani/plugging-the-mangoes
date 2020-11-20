var ground
var tree,girl
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8
var launcherObject,stoneObj
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundIng=loadImage("forest1.jpg")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=new Ground(300,690,1000,30)
	tree=new Tree(650,500,300,800)
	girl=new Girl(600,600,90,400)
	stoneObj=new Stone(530,500,30); 
	mango1 = new Mango(580, 400, 50, 50)
	mango2 = new Mango(650,400, 50, 50)
	mango3 = new Mango(699, 400, 50,  50)
	mango4 = new Mango(600, 450, 50, 50)
	mango5 = new Mango(640, 220, 50, 50)
	mango6 = new Mango(600, 300, 50, 50)
	mango7 = new Mango(650, 300, 50, 50)
	mango8 = new Mango(670, 320, 50, 50)





	launcherObject =new launcher(stoneObj.body,{x:300,y:500})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundIng);
  
  drawSprites();

 ground.display()
 tree.display()
 girl.display()
 stoneObj.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()

 
 detectcollosion(stoneObj, mango1)
 detectcollosion(stoneObj, mango2)
 detectcollosion(stoneObj, mango3)
 detectcollosion(stoneObj, mango4)
 detectcollosion(stoneObj, mango5)
 detectcollosion(stoneObj, mango6)
 detectcollosion(stoneObj, mango7)
 detectcollosion(stoneObj, mango8)

launcherObject.display()
strokeWeight(3);
textSize(32);
stroke(255,205, 227 );
fill(176,140,255);
text('Can you crack the game?', 30, 30);

strokeWeight(1);
textSize(20);
stroke(255, 255, 255);
fill(184, 184, 184);
text('Press space to get another chance! ', 20, 100);


}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x : mouseX, y : mouseY})
}


function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:400, y:350}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

function detectcollosion(Lstone, Lmango){
mangoBodyPosition = Lmango.body.position
stoneBodyPosition = Lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if (distance <= Lmango.r + Lstone.r  ){

	Matter.Body.setStatic(Lmango.body,false);
}
}
 








