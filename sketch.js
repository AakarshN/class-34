const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20)
    
    //created boxes
    box1= new Box(450,700,100,100)
    box2= new Box(450,600,100,100)
    box3= new Box(450,500,100,100)
    box4= new Box(450,400,100,100)
    box5= new Box(450,300,100,100)
    box6= new Box(450,200,100,100)
    
    box7= new Box(550,700,100,100)
    box8= new Box(550,600,100,100)
    box9= new Box(550,500,100,100)
    box10= new Box(550,400,100,100)
    box11= new Box(550,300,100,100)


    //created ball
     ball= new Ball(300,200)

     string = new String(ball.body, {x: 300,y: 100 });
}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display();

    ball.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();


    string.display();
}

function mouseDragged(){
    Matter.Body.setPosition( ball.body, {x: mouseX, y: mouseY});
}