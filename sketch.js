const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0;
var lives=25;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //The ground
  ground = new Ground();

  //for the stands which are holding the blocks
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //The blocks
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one of second stage
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);

  //level two of second stage
  block22=new Block(670,135,30,40)
  block23=new Block(700,135,30,40)
  block24=new Block(730,135,30,40)

  //top of second stage
  block25=new Block(700,95,30,40)
  
  //The Polygon
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)

  //The slingShot
  slingShot = new Slingshot(this.polygon,{x:100,y:200})
  
 

}
function draw() {
  background(48,6,6); 
  //The text
  textSize(20);
  fill("white")
  text("Drag the polygon to hit the blocks and press Space to reload the polygon. Destroy all blocks to win",20,30)
  //extra(other than the assigned project)
  //to show the number of polygons used
  text("Number of polygons used:"+score,20,60)
  //to show the number of blocks left
  text("Number of blocks left:"+lives,20,90)
  fill("lightYellow");

  //To display all the objects
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

 

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("skyblue")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();

  fill("pink")
  block25.display();

  //To show the polygon image
  imageMode (CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)

  slingShot.display();

  //extra(other than the assigned project)
  //to count the remaining number of balls
  if(block1.visibility===10){
    lives=lives-1;
  }

  if(block2.visibility===10){
    lives=lives-1;
  }

  if(block3.visibility===10){
    lives=lives-1;
  }

  if(block4.visibility===10){
    lives=lives-1;
  }

  if(block5.visibility===10){
    lives=lives-1;
  }

  if(block6.visibility===10){
    lives=lives-1;
  }

  if(block7.visibility===10){
    lives=lives-1;
  }

  if(block8.visibility===10){
    lives=lives-1;
  }

  if(block9.visibility===10){
    lives=lives-1;
  }

  if(block10.visibility===10){
    lives=lives-1;
  }

  if(block11.visibility===10){
    lives=lives-1;
  }

  if(block12.visibility===10){
    lives=lives-1;
  }

  if(block13.visibility===10){
    lives=lives-1;
  }

  if(block14.visibility===10){
    lives=lives-1;
  }

  if(block15.visibility===10){
    lives=lives-1;
  }

  if(block16.visibility===10){
    lives=lives-1;
  }

  if(block17.visibility===10){
    lives=lives-1;
  }

  if(block18.visibility===10){
    lives=lives-1;
  }

  if(block19.visibility===10){
    lives=lives-1;
  }

  if(block20.visibility===10){
    lives=lives-1;
  }

  if(block21.visibility===10){
    lives=lives-1;
  }

  if(block22.visibility===10){
    lives=lives-1;
  }

  if(block23.visibility===10){
    lives=lives-1;
  }

  if(block24.visibility===10){
    lives=lives-1;
  }

  if(block25.visibility===10){
    lives=lives-1;
  }

  
  //extra(other than the assigned project)
  //To end the game when the number of bllocks is 0
  if(lives===0){
    textSize("100")
    stroke("green")
    strokeWeight(4)
    text("You Won, Refresh the page to restart",250,200);
    World.remove(world,polygon)
  }

}

//The mouse Dragged function
function mouseDragged(){
   Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

//the mouseReleased funtion
function mouseReleased(){
   slingShot.fly();

}

//The keyPressed funtion
function keyPressed(){
    if(keyCode===32){
      slingShot.attach(polygon)
      //to increase the number of polygons used with each keyPress
      score=score+1
    }
}
