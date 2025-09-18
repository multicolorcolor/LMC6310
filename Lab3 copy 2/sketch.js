//to loop the text I referenced this code - https://editor.p5js.org/jaipack17/sketches/M99fmswxg
let oVectors;
let texts = [] ;
let track1;
let track2;
let vehicle; 
let e;
let e1;
let x;
let speed = 0.1; 
let startX = 0; 
let startY = 0; 
let t = 0;
let timer = 0;
let colorArray = [];
let index = 0;
let colors;
let rn = 15;



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background('white');
  track1 = [
    createVector(width/4, height/2),
    createVector(width/4, height/10),
    createVector(width/2+width/4, height/16),
    createVector(width/2+width/4, height/2),
  ]
  track2 = [
    createVector(width/2+width/4, height/2),
    createVector(width/2+width/4, height/2+height/2),
    createVector(width/4, height/2+height/2),
    createVector(width/4, height/2),
  ]

  //insane amount of classes. Help!

  // vehicle = new LastLetter(startX, startY, speed, t, true);
  // e = new E(startX, startY, speed, t, true);
  // e1 = new E1(startX, startY, speed, t, true);
  // x = new X(startX, startY, speed, t, true);
  // i = new I(startX, startY, speed, t, true);
  // h = new H(startX, startY, speed, t, true);
  // e3 = new E3(startX, startY, speed, t, true);

  letter36 = new Letter36(startX, startY, speed, t, true);
  letter35 = new Letter35(startX, startY, speed, t, true);
  letter34 = new Letter34(startX, startY, speed, t, true);
  letter33 = new Letter33(startX, startY, speed, t, true);
  letter32 = new Letter32(startX, startY, speed, t, true);
  letter31 = new Letter31(startX, startY, speed, t, true);
  letter30 = new Letter30(startX, startY, speed, t, true);
  letter29 = new Letter29(startX, startY, speed, t, true);
  letter28 = new Letter28(startX, startY, speed, t, true);
  letter27 = new Letter27(startX, startY, speed, t, true);
  letter26 = new Letter26(startX, startY, speed, t, true);
  letter25 = new Letter25(startX, startY, speed, t, true);
  letter24 = new Letter24(startX, startY, speed, t, true);
  letter23 = new Letter23(startX, startY, speed, t, true);
  letter22 = new Letter22(startX, startY, speed, t, true);
  letter21 = new Letter21(startX, startY, speed, t, true);
  letter20 = new Letter20(startX, startY, speed, t, true);
  letter19 = new Letter19(startX, startY, speed, t, true);
  letter18 = new Letter18(startX, startY, speed, t, true);
  letter17 = new Letter17(startX, startY, speed, t, true);
  letter16 = new Letter16(startX, startY, speed, t, true);
  letter15 = new Letter15(startX, startY, speed, t, true);
  letter14 = new Letter14(startX, startY, speed, t, true);
  letter13 = new Letter13(startX, startY, speed, t, true);
  letter12 = new Letter12(startX, startY, speed, t, true);
  letter11 = new Letter11(startX, startY, speed, t, true);
  letter10 = new Letter10(startX, startY, speed, t, true);
  letter9 = new Letter9(startX, startY, speed, t, true);
  letter8 = new Letter8(startX, startY, speed, t, true);
  letter7 = new Letter7(startX, startY, speed, t, true);
  letter6 = new Letter6(startX, startY, speed, t, true);
  letter5 = new Letter5(startX, startY, speed, t, true);
  letter4 = new Letter4(startX, startY, speed, t, true);
  letter3 = new Letter3(startX, startY, speed, t, true);
  letter2 = new Letter2(startX, startY, speed, t, true);
  letter1 = new Letter1(startX, startY, speed, t, true);

  for (let i = 0; i < 100; i++) {
		texts.push(new TextClass());
		}
  
  gems = new Group();
  gems.stroke = "white";
	gems.diameter = 20;
	gems.x = () => random(0, width);
	gems.y = () => random(0, height);
  gems.rotationLock = true;
	gems.amount = 150;
}

function draw(){
  background('white');
  for (let i = 0; i < texts.length; i++) {
    texts[i].display();
    texts[i].move();
     }
  //fill("red");
  //quad(20, 30, 80, 30, 80, 70, 20, 70);

  strokeWeight(width/15);
  stroke('white');
  fill("white");
  bezier(track1[0].x, track1[0].y, track1[1].x, track1[1].y, track1[2].x, track1[2].y, track1[3].x, track1[3].y);
  bezier(track2[0].x, track2[0].y, track2[1].x, track2[1].y, track2[2].x, track2[2].y, track2[3].x, track2[3].y);
  strokeWeight(15);
  stroke('black');
  //noFill(0);

  //all those class movements


  //timer++;
  fill("white");
  if (letter36.left) {
    letter36.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter36.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter36.Show();

  if (letter36.left) {
    letter36.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter36.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter36.Show();

  if (letter35.left) {
    letter35.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter35.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter35.Show();

  if (letter34.left) {
    letter34.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter34.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter34.Show();

  if (letter33.left) {
    letter33.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter33.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter33.Show();
  
  if (letter32.left) {
    letter32.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter32.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter32.Show();

  if (letter31.left) {
    letter31.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter31.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter31.Show();

  if (letter30.left) {
    letter30.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter30.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter30.Show();

  if (letter29.left) {
    letter29.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter29.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter29.Show();

  if (letter28.left) {
    letter28.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter28.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter28.Show();

  if (letter27.left) {
    letter27.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter27.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter27.Show();

  if (letter26.left) {
    letter26.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter26.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter26.Show();

  if (letter25.left) {
    letter25.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter25.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter25.Show();

  if (letter24.left) {
    letter24.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter24.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter24.Show();

  if (letter23.left) {
    letter23.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter23.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter23.Show();

  if (letter22.left) {
    letter22.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter22.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter22.Show();

  if (letter21.left) {
    letter21.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter21.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter21.Show();

  if (letter20.left) {
    letter20.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter20.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter20.Show();

  if (letter19.left) {
    letter19.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter19.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter19.Show();

  if (letter18.left) {
    letter18.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter18.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter18.Show();

  if (letter17.left) {
    letter17.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter17.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter17.Show();

  if (letter16.left) {
    letter16.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter16.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter16.Show();

  if (letter15.left) {
    letter15.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter15.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter15.Show();

  if (letter14.left) {
    letter14.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter14.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter14.Show();

  if (letter13.left) {
    letter13.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter13.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter13.Show();

  if (letter12.left) {
    letter12.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter12.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter12.Show();

  if (letter11.left) {
    letter11.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter11.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter11.Show();

  if (letter10.left) {
    letter10.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter10.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter10.Show();

  if (letter9.left) {
    letter9.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter8.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter8.Show();

  if (letter7.left) {
    letter7.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter7.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter7.Show();

  if (letter6.left) {
    letter6.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter6.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter6.Show();

  if (letter5.left) {
    letter5.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter5.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter5.Show();

  if (letter4.left) {
    letter4.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter4.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter4.Show();

  if (letter3.left) {
    letter3.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter3.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter3.Show();

  if (letter2.left) {
    letter2.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter2.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter2.Show();

  if (letter1.left) {
    letter1.Move(track1[0], track1[1], track1[2], track1[3]); 
  } else {
    letter1.Move(track2[0], track2[1], track2[2], track2[3]);
  }
  letter1.Show();


  // if (e.left) {
  //   e.Move(track1[0], track1[1], track1[2], track1[3]); 
  // } else {
  //   e.Move(track2[0], track2[1], track2[2], track2[3]);
  // }
  // e.Show();

 

  // if (x.left) {
  //   x.Move(track1[0], track1[1], track1[2], track1[3]); 
  // } else {
  //   x.Move(track2[0], track2[1], track2[2], track2[3]);
  // }
  // x.Show();

  // if (e1.left) {
  //   e1.Move(track1[0], track1[1], track1[2], track1[3]); 
  // } else {
  // e1.Move(track2[0], track2[1], track2[2], track2[3]);
  // }
  // e1.Show();

  // if (i.left) {
  //   i.Move(track1[0], track1[1], track1[2], track1[3]); 
  // } else {
  // i.Move(track2[0], track2[1], track2[2], track2[3]);
  // }
  // i.Show();

  // if (h.left) {
  // h.Move(track1[0], track1[1], track1[2], track1[3]); 
  // } else {
  // h.Move(track2[0], track2[1], track2[2], track2[3]);
  // }
  // h.Show();

  // if (e3.left) {
  // e3.Move(track1[0], track1[1], track1[2], track1[3]); 
  // } else {
  // e3.Move(track2[0], track2[1], track2[2], track2[3]);
  // }
  // e3.Show();

  noStroke();
}
class TextClass {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, random(1,6));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.width = random(1, 5);
    this.height = random(10, 40);
  }
  display() {
    colors = random(colorArray);
    noStroke();
    fill(this.r, this.g, this.b);
    text('ohuokhai', this.x, this.y);
  }

  move() {
    
    this.pos.add(this.vel);
  }
}




