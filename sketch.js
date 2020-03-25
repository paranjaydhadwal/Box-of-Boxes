const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 
var boxes = [];
var gSlider;
var ground;
var box1;
 
 
function setup() {
    createCanvas(400, 400);

    
    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
   // ground1 = new Ground(20,50,80,290);
 
  ground = new Ground(200,height,1200,20);
 //  box10= new Hi2(10,10,10,5)

}
 
function mousePressed() {
    if (mouseY < 350) {

        box1=new Box(mouseX,mouseY,random(10,50),random(10,50));
        boxes.push(box1);
        // Every time a mouse press occures create a new box.
    }
}
 
function draw() {
    background("red");
    Engine.update(engine);
    // Draw all the elements including the slider that 
     ground.display();
  //   box10.display();
  
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    //box1.display();
    // Use a for loop to show all the boxes
    for(var i=0;i<boxes.length;i++){
        boxes[i].display();
    }
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
   