let backgroundPicture;
let flower;
let hand1;
let handHover;
let HandButton;
var x = 0;
var HandX = 0;
let hand2;
let handHover2;
let HandButton2;
var x2 = 0;
var HandX2 = 0;
let startMoving = false;
let CanIClick = true;
let biirge;
let together;
let Finished = false;
let HandFinish1;
let HandFinish2;

function preload() {
  backgroundPicture = loadImage("assets/background.jpg");
  flower = loadImage("assets/flower.png");
  hand1 = loadImage("assets/hand.png");
  handHover = loadImage("assets/hand_hover.png");
  HandButton = loadImage("assets/hand.png");
  hand2 = loadImage("assets/hand2.png");
  handHover2 = loadImage("assets/hand2_hover.png");
  HandButton2 = loadImage("assets/hand2.png");
  biirge = loadImage("assets/biirge.png");
  together = loadImage("assets/together.png");
  HandFinish1 = loadImage("assets/handEnd1.png");
  HandFinish2 = loadImage("assets/handEnd2.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw(){
  HandX = width/15+x;
  HandX2 = width/2+width/2.5-x;
  background('white');
  image(backgroundPicture, width/2,height/2);
  backgroundPicture.resize(width, height);
  image(flower, width/6, height-height/8);
  flower.resize(width/4, 0);
  handHover.resize(width/2+width/10, 0);
  hand1.resize(width/2+width/10, 0);
  HandFinish1.resize(width/2+width/10, 0);
  image(HandButton, HandX, height-height/3);
  HandButton.resize(width/2+width/10, 0);
  handHover2.resize(width/2+width/10, 0);
  hand2.resize(width/2+width/10, 0);
  HandFinish2.resize(width/2+width/10, 0);
  image(HandButton2, HandX2, height-height/3);

  


  biirge.resize(0, height/2);
  image(biirge, width/2, height/4);

  




  
  if (CanIClick == true){
    if (mouseX<width/2.8 && mouseY>height/2+height/8){
      HandButton = handHover;
    }
    else if (mouseX>width/2 && mouseY>height/2+height/8){
      HandButton2 = handHover2;
    }
    else {
      HandButton = hand1;
      HandButton2 = hand2;
    }
    if (startMoving == true){
    x +=1;
    if (HandX > width/3.5){
      startMoving = false;
      CanIClick = false;
      Finished = true
      //together.resize(0, height/2);
      //image(together, width/2, height/3);
    }
  }
  }

  else {
    HandButton = HandFinish1;
    HandButton2 = HandFinish2;
    together.resize(width/3, 0);
    image(together, width/2, height/2);
  }

  

  
  
}
function mousePressed(){
  if (mouseX<width/2.8 && mouseY>height/2+height/8){
    startMoving = true;
  }
  if (mouseX>width/2 && mouseY>height/2+height/8){
    startMoving = true;
  }
}
