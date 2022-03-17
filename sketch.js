const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball1;
var ball2;
var ground;
var ground1;
var ground2;

function setup(){
createCanvas (windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;

var ball_options = {
  restitution: 0.95,
  frictionAir:0.01
}

var ball1_options = {
  restitution: 0.95,
  frictionAir:0.01

}

var ball2_options = {
   restitution: 0.95,
   frictionAir: 0.01

}

var ground_options ={
  isStatic: true
}

var ground1_options = {
  isStatic: true

}

var ground2_options = {

  isStatic: true
}

ball = Bodies.circle(100,10,20,ball_options);
ball1 = Bodies.circle(200,10,20,ball_options);
ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball);
  World.add(world,ball1);
  World.add(world,ball2);
  ground=Bodies.rectangle(0,380,200,10,ground_options);
  ground1=Bodies.rectangle(200,380,300,10,ground_options);
  ground2=Bodies.rectangle(300,380,100,10,ground_options);
  World.add(world,ground);
  World.add(world,ground1);
  World.add(world,ground2);





    }

    



function draw(){
    background("lightgreen");
  Engine.update(engine);


  fill("blue");
  ellipse(ball.position.x,ball.position.y,20);
  fill("black");
  rect(ground.position.x,ground.position.y,400,20);
  fill("orange");
  ellipse(ball1.position.x,ball1.position.y,30);
  fill("purple");
  rect(ground1.position.x,ground1.position.y,400,10);
  fill("pink");
  ellipse(ball2.position.x,ball2.position.y,30);
  fill("green");
  rect(ground2.position.x,ground2.position.y,400,10);
}
