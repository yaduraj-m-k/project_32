const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9;
var brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick22;
var finishing_point,player;

function setup() {
    createCanvas(410,400);

    engine = Engine.create();
    world = engine.world;

    brick1= new Brick(41,83,80,10);
    brick2= new Brick(120,0,10,230);
    brick3= new Brick(0,140,350,10);
    brick4= new Brick(169,85,10,100);
    brick5= new Brick(172,30,50,10);
    brick6= new Brick(240,85,10,125);
    brick7= new Brick(270,147,70,10);
    brick8= new Brick(305,177,10,70);
    brick9= new Brick(349,209,97,10);
    brick10= new Brick(350,78,100,10);
    brick11= new Brick(190,185,100,10);
    brick12= new Brick(235,220,10,70);
    brick13= new Brick(330,254,200,10);
    brick14= new Brick(107,225,100,10);
    brick15= new Brick(52,228,10,100);
    brick16= new Brick(40,328,100,10);
    brick17= new Brick(156,350,10,100);
    brick18= new Brick(268,365,10,70);
    brick19= new Brick(264,329,120,10);
    brick20= new Brick(200,328,10,100);
    brick21= new Brick(363,289,10,70);
    brick22= new Brick(358,116,10,80);

    finishing_point= new Fininshing_point(5,40,10,70)
    player =new Player(395,369,15,15);

    Engine.run(engine);

}

function draw() {
  background(1,48,30);  

  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick17.display();
  brick18.display();
  brick19.display();
  brick20.display();
  brick21.display();
  brick22.display();

  finishing_point.display();
  player.display(); 
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
    Matter.Body.setStatic(player.body, false);
    Matter.Body.setPosition(player.body, {x:player.body.position.x-1,y:player.body.position.y});
		// Matter.Body.applyForce(player.body,player.body.position,{x:-10,y:0})
	}
  if(keyCode === 	RIGHT_ARROW){
    Matter.Body.setStatic(player.body, false);
		Matter.Body.applyForce(player.body,player.body.position,{x:10,y:0})
	}
  if(keyCode === 	UP_ARROW){
    Matter.Body.setStatic(player.body, false);
		Matter.Body.applyForce(player.body,player.body.position,{y:-10,x:0});
	}
  if(keyCode === 	DOWN_ARROW){
    Matter.Body.setStatic(player.body, false);
		Matter.Body.applyForce(player.body,player.body.position,{y:10,x:0});
	}}

