const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var score =0;
var particle;
var turn = 0;
var gameState = "start"
var particles = [];
var boundry;

function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height-0,1200,20);
  division1 = new Divisions(0,height-100,10,200);
  division2 = new Divisions(80,height-100,10,200);
  division3 = new Divisions(160,height-100,10,200);
  division4 = new Divisions(240,height-100,10,200);
  division5 = new Divisions(320,height-100,10,200);
  division6 = new Divisions(400,height-100,10,200);
  division7 = new Divisions(480,height-100,10,200);
  plinko1 = new Plinko(55,200,10);
  plinko2 = new Plinko(130,200,10);
  plinko3 = new Plinko(205,200,10);
  plinko4 = new Plinko(280,200,10);
  plinko5 = new Plinko(345,200,10);
  plinko6 = new Plinko(420,200,10);
  plinko7 = new Plinko(25,250,10);
  plinko8 = new Plinko(90,250,10);
  plinko9 = new Plinko(165,250,10);
  plinko10 = new Plinko(240,250,10);
  plinko11 = new Plinko(315,250,10);
  plinko12 = new Plinko(380,250,10);
  plinko13 = new Plinko(455,250,10);
  plinko14 = new Plinko(55,300,10);
  plinko15 = new Plinko(130,300,10);
  plinko16 = new Plinko(205,300,10);
  plinko17 = new Plinko(280,300,10);
  plinko18 = new Plinko(345,300,10);
  plinko19 = new Plinko(420,300,10);
  plinko20 = new Plinko(25,350,10);
  plinko21 = new Plinko(90,350,10);
  plinko22 = new Plinko(165,350,10);
  plinko23 = new Plinko(240,350,10);
  plinko24 = new Plinko(315,350,10);
  plinko25 = new Plinko(380,350,10);
  plinko26 = new Plinko(455,350,10);

  boundry = createSprite(240,450,480,10);
  boundry.shapeColor = "yellow";
  
}

function draw() {
  background(0);
  textSize(30)
  fill("white")
  text("SCORE : "+score,20,30);
  text("TURN : "+turn,300,30);
  textSize(20)
  text("500", 20,500)
  text("500", 100,500)
  text("200", 180,500)
  text("200", 260,500)
  text("100", 340,500)
  text("100", 420,500)

  Engine.update(engine);

  /*if(turn === 5){
    gameState = "end"
  }*/

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //score++;
    turn++;
  }

  for (var j = 0; j < particles.length; j++) {
   particles[j].display();
  }

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();  

  drawSprites();
}

function mousePressed(){
  if(gameState != "end"){
    turn++;
    particle = new Particle(mouseX,10,10);
  }
}