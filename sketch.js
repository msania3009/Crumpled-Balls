var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ballI,ground, bin, rope;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(600, 200);


	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 180, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 ball = new Ball(100, 50);
	 bin = new Bin(500, 130);
	 rope = new Rope(ball.body, {x:100, y:120})
  
	Engine.run(engine);

}


function draw() {
  ellipseMode(RADIUS);
  background(220);
  ball.display();
  bin.display();
  rope.display();
  drawSprites();
}
//function keyPressed(){
	//if(keyCode === UP_ARROW){
		//Matter.Body.applyForce(ball.body, ball.body.position,{x:12, y:-12})
	//}
//}


function mouseDragged(){
          Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope.fly();
}