let oVectors;
let texts = [] ;


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background('white');
  oVectors = [
    createVector(width/4, height/2),
    createVector(width/4, height/10),
    createVector(width/2+width/4, height/16),
    createVector(width/2+width/4, height/2),
    createVector(width/2+width/4, height/2),
    createVector(width/2+width/4, height/2+height/2),
    createVector(width/4, height/2+height/2),
    createVector(width/4, height/2),
  ]
  for (let i = 0; i < 100; i++) {
		texts.push(new TextClass());
		}
  //gems = new Group();
  //gems.shapeColor = 'white';
	//gems.diameter = 20;
	//gems.x = () => random(0, width);
	//gems.y = () => random(0, height);
  //gems.rotationLock = true;
	//gems.amount = 150;
}

function draw(){
  background('white');

  
  

  //strokeWeight(width/25);
  stroke('black');
  noFill(0);
  bezier(oVectors[0].x, oVectors[0].y, oVectors[1].x, oVectors[1].y, oVectors[2].x, oVectors[2].y, oVectors[3].x, oVectors[3].y);
  bezier(oVectors[4].x, oVectors[4].y, oVectors[5].x, oVectors[5].y, oVectors[6].x, oVectors[6].y, oVectors[7].x, oVectors[7].y);
  OhuokhaiTexts();
}

function OhuokhaiTexts(){
  noStroke();
  for (let i = 0; i < texts.length; i++) {
    texts[i].display();
    //texts[i].move();
     }
}

class TextClass {
  constructor(){
    //this.x = oVectors[random(0,7)].x;
    //this.y = oVectors[random(0,7)].y;
    
    this.x = random(oVectors.x);
    this.y = random(oVectors.y);
    this.pos = createVector(oVectors[0].x, oVectors[0].y);
    this.vel = createVector(0, random(1,6));
    this.r = (0);
    this.g = (100, 200);
    this.b = random(150, 255);
    this.width = random(1, 5);
    this.height = random(10, 40);
    //this.nextcurve = nextcurve;

  }
  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, this.width, this.height);
    //bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    let nextcurve = true;
    //this.nextcurve = nextcurve;
    let t = 0.5 * sin(frameCount * 0.5) + 0.5;
    let x = bezierPoint(oVectors[0].x, oVectors[1].x, oVectors[2].x, oVectors[3].x, t);
    let y = bezierPoint(oVectors[0].y, oVectors[1].y, oVectors[2].y, oVectors[3].y, t);
    //let x = bezierPoint(oVectors[4].x, oVectors[5].x, oVectors[6].x, oVectors[7].x, t);
    //let y = bezierPoint(oVectors[4].y, oVectors[5].y, oVectors[6].y, oVectors[7].y, t);
    //if(nextcurve == true){
    //  let t = 0.5 * sin(frameCount * 0.5) + 0.5;
    //  let x = bezierPoint(oVectors[4].x, oVectors[5].x, oVectors[6].x, oVectors[7].x, t);
    //  let y = bezierPoint(oVectors[4].y, oVectors[5].y, oVectors[6].y, oVectors[7].y, t);

    //}
    this.x = x;
    this.y = y;
    text('ohuokhai', this.x, this.y);
    //text('ohuokhai', this.x+10, this.y+10);
    //if (this.x == oVectors[3].x && this.y == oVectors[3].y){
    //  let x = bezierPoint(oVectors[4].x, oVectors[5].x, oVectors[6].x, oVectors[7].x, t);
    //  let y = bezierPoint(oVectors[4].y, oVectors[5].y, oVectors[6].y, oVectors[7].y, t);

    //}
    
    
    
  }

  move() {
    
    this.pos.add(this.vel);
    //if (this.pos.x>width) this.pos.x = 0;
    //if (this.pos.x<0) this.pos.x = width;
    //if (this.pos.y>height) this.pos.y = 0;
    //if (this.pos.y<0) this.pos.y = height;
    //if (this.t >= 1) {
      //this.Reset();
    //  //this.nextcurve = !this.nextcurve;
    //} else {
      //this.t += 0.01 * this.speed;
   // }
  }
}
