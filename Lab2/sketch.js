let brush1;
let brush2;
let brush3;
let letter1;
let letter2;
let letter3;
let letter4;
let letter5;
let brush1icon;
let brush2icon;
let brush3icon;
let lettericon1;
let lettericon2;
let lettericon3;
let lettericon4;
let lettericon5;
let slider;
let brush;
let brushvalue;
let lettervalue;
let letterIsSelected = false;
let textureIsSelected = true;
let brush1Select = 0;
let brush2Select = 255;
let brush3Select = 255;
let letterSelect1 = 255;
let letterSelect2 = 255;
let letterSelect3 = 255;
let letterSelect4 = 255;
let letterSelect5 = 255;
let rainy = [];

function preload() {
  brush1 = loadImage("assets/brush1.png");
  brush1icon = loadImage("assets/brush1_icon.png");
  brush2 = loadImage("assets/brush3.png");
  brush2icon = loadImage("assets/brush3_icon.png");
  brush3 = loadImage("assets/brush2.png");
  brush3icon = loadImage("assets/brush2_icon.png");
  letter1 = loadImage("assets/letter1.png");
  lettericon1 = loadImage("assets/letter1_icon.png");
  letter2 = loadImage("assets/letter2.png");
  lettericon2 = loadImage("assets/letter2_icon.png");
  letter3 = loadImage("assets/letter3.png");
  lettericon3 = loadImage("assets/letter3_icon.png");
  letter4 = loadImage("assets/letter4.png");
  lettericon4 = loadImage("assets/letter4_icon.png");
  letter5 = loadImage("assets/letter5.png");
  lettericon5 = loadImage("assets/letter5_icon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  brush = createGraphics(windowWidth, windowHeight);
  background('white');
  
  slider = createSlider(0, 500, 500, 0);
  slider.position(width/45, 30);
  slider.size(width/18);
  stroke(0);
  strokeWeight(3);
  textAlign(CENTER);
  brushvalue = brush1;
  //lettervalue = letter1;
  for (let i = 0; i < 100; i++) {
		rainy.push(new Rain());  // pushes onto an array called “cars”
		}
}

function draw() {
  background('white');
  image(brush, width/2,height/2);
  customCursor();
  fill('white');
  stroke('black');
  quad(0,0, width/10, 0, width/10, height, 0, height);
  noStroke();
  fill('black');
  text("Brush size", width/20, 25);
  text("Textures", width/20, height/8);
  text("Letters", width/20, height/2+height/11);
  noFill();
  stroke(brush1Select);
  image(brush1icon, width/20, height/5);
  brush1icon.resize(width/18, 0);
  ellipse(width/20, height/5, brush1icon.width, brush1icon.height);
  image(brush2icon, width/20, height/3);
  brush2icon.resize(width/18, 0);
  stroke(brush2Select);
  ellipse(width/20, height/3, brush1icon.width, brush1icon.height);
  image(brush3icon, width/20, height/2.1);
  brush3icon.resize(width/18, 0);
  stroke(brush3Select);
  ellipse(width/20, height/2.1, brush1icon.width, brush1icon.height);
  stroke(letterSelect1);
  ellipse(width/20, height/2+height/7, lettericon1.width, lettericon1.height);
  stroke(letterSelect2);
  ellipse(width/20, height/2+height/4.7, lettericon1.width, lettericon1.height);
  stroke(letterSelect3);
  ellipse(width/20, height/2+height/3.5, lettericon1.width, lettericon1.height);
  stroke(letterSelect4);
  ellipse(width/20, height/2+height/2.8, lettericon1.width, lettericon1.height);
  stroke(letterSelect5);
  ellipse(width/20, height/2+height/2.3, lettericon1.width, lettericon1.height);
  image(lettericon1, width/20, height/2+height/7);
  image(lettericon2, width/20, height/2+height/4.7);
  image(lettericon3, width/20, height/2+height/3.5);
  image(lettericon4, width/20, height/2+height/2.8);
  image(lettericon5, width/20, height/2+height/2.3);
  //if (mouseIsPressed){
  //  drawLetters();
  //}

  
}

function mouseDragged(){
  if (letterIsSelected == true){
     if (mouseX>width/10){
      let b = slider.value();
      letter1.resize(b,0);
      letter2.resize(b,0);
      letter3.resize(b,0);
      letter4.resize(b,0);
      letter5.resize(b,0);
      brush.image(lettervalue, mouseX-b/2, mouseY-b/2);
      RandomRain();
  }

  }
 
}

function RandomRain(){
  for (let i = 0; i < rainy.length; i++) {
    rainy[i].display();
    rainy[i].move();
     }
}

function mousePressed() {
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/8 && mouseY<height/4){
    brush1Select = 0;
    brush2Select = 255;
    brush3Select = 255;
    brushvalue = brush1;
    letterIsSelected = false;
    letterSelect1 = 255;
    letterSelect2 = 255;
    letterSelect3 = 255;
    letterSelect4 = 255;
    letterSelect5 = 255;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/4 && mouseY<height/2.5){
    brush1Select = 255;
    brush2Select = 0;
    brush3Select = 255;
    brushvalue = brush2;
    letterIsSelected = false;
    letterSelect1 = 255;
    letterSelect2 = 255;
    letterSelect3 = 255;
    letterSelect4 = 255;
    letterSelect5 = 255;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/2.5 && mouseY<height/2+height/15){
    brush1Select = 255;
    brush2Select = 255;
    brush3Select = 0;
    brushvalue = brush3;
    letterIsSelected = false;
    letterSelect1 = 255;
    letterSelect2 = 255;
    letterSelect3 = 255;
    letterSelect4 = 255;
    letterSelect5 = 255;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/2+height/9 && mouseY<height/2+height/6){
    letterIsSelected = true;
    letterSelect1 = 0;
    letterSelect2 = 255;
    letterSelect3 = 255;
    letterSelect4 = 255;
    letterSelect5 = 255;
    brush1Select = 255;
    brush2Select = 255;
    brush3Select = 255;
    brushvalue = letter1;
    lettervalue = letter1;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/2+height/5.8 && mouseY<height/2+height/4){
    letterIsSelected = true;
    letterSelect2 = 0;
    letterSelect1 = 255;
    letterSelect3 = 255;
    letterSelect4 = 255;
    letterSelect5 = 255;
    brush1Select = 255;
    brush2Select = 255;
    brush3Select = 255;
    brushvalue = letter2;
    lettervalue = letter2;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/2+height/4 && mouseY<height/2+height/3.2){
    letterIsSelected = true;
    letterSelect1 = 255;
    letterSelect2 = 255;
    letterSelect3 = 0;
    letterSelect4 = 255;
    letterSelect5 = 255;
    brush1Select = 255;
    brush2Select = 255;
    brush3Select = 255;
    brushvalue = letter3;
    lettervalue = letter3;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/2+height/3.1 && mouseY<height/2+height/2.5){
    letterIsSelected = true;
    letterSelect1 = 255;
    letterSelect2 = 255;
    letterSelect3 = 255;
    letterSelect4 = 0;
    letterSelect5 = 255;
    brush1Select = 255;
    brush2Select = 255;
    brush3Select = 255;
    brushvalue = letter4;
    lettervalue = letter4;
  }
  if (mouseX>width/30 && mouseX<width/14 && mouseY>height/2+height/2.5 && mouseY<height/2+height/2.1){
    letterIsSelected = true;
    letterSelect1 = 255;
    letterSelect2 = 255;
    letterSelect3 = 255;
    letterSelect4 = 255;
    letterSelect5 = 0;
    brush1Select = 255;
    brush2Select = 255;
    brush3Select = 255;
    brushvalue = letter5;
    lettervalue = letter5;
  }
  if (mouseX>width/10){
    let b = slider.value();
    brush1.resize(b,0);
    brush2.resize(b,0);
    brush3.resize(b,0);
    letter1.resize(b,0);
    letter2.resize(b,0);
    letter3.resize(b,0);
    letter4.resize(b,0);
    letter5.resize(b,0);
    brush.image(brushvalue, mouseX-b/2, mouseY-b/2);
  }
}

function customCursor(){
  noFill();
  stroke('black');
  let b = slider.value();
  ellipse(mouseX, mouseY, b, b);
}

class Rain {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, random(1,6));
    this.r = (0);
    this.g = (100, 200);
    this.b = random(150, 255);
    this.width = random(1, 5);
    this.height = random(10, 40);
  }



  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    
    
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x>width) this.pos.x = 0;
    if (this.pos.x<0) this.pos.x = width;
    if (this.pos.y>height) this.pos.y = 0;
    if (this.pos.y<0) this.pos.y = height;
  }


  
}
