var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var BottomBox, LeftBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var package_options = {
		isStatic : true
	
	}

	packageSprite=createSprite(width/2, 80, 10,10, package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	BottomBox = new Box (400, 650, 200, PI);
	LeftBox = new Box (300, 650, 200, PI/2);
	RightBox = new Box (500, 700, 200, PI);
	

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);
  
  background(0);
  
  if (keyDown (LEFT_ARROW)) {
	helicopterSprite.x= helicopterSprite.x - 10;
}

  if (keyDown (RIGHT_ARROW)) {
	helicopterSprite.x= helicopterSprite.x + 10;
  }
 
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y

  drawSprites();
  BottomBox.display();
  LeftBox.display();
  RightBox.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Body.setStatic(packageBody, false)
	packageBody.restitution = 0
  }
}
