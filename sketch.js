const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var btn;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn = createImg('right.png');
  btn.position(160,100);
  btn.size(80,80);
  btn.mouseClicked(helloFnct);

}

function draw() 
{
  background(51);

  Engine.update(engine);
}


function helloFnct()
{
  console.log("Hello there");
}
