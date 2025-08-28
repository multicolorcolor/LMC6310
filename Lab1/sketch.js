let goldenratio;

function preload() {
  //goldenratio = loadImage("assets/ratio.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background('white');
  //image(goldenratio, windowWidth/2, windowHeight/2);
  
  noStroke(0);
  fill('white');
  quad(0,0, width/8, 0, width/8, height/8, 0, height/8);
  fill('black');
  textSize(20);
  text(mouseX + ", " + mouseY, 20, 20);
  
  for (let j = 0; j <= height; j += 20){
    for (let i = 0; i <= width; i += 25){
      fill('black');
      textSize(21);
      text("h", i, j, 20, 20);

    }
    
  }
   fill('white');
  quad(0,0, width/8, 0, width/8, height/16, 0, height/16);
  fill('black');
  textSize(20);
  text(mouseX + ", " + mouseY, 20, 20);
  quad(0, height/2+height/4, width, height/2+height/4, width, height, 0, height);
  
   for (let j = 0; j <= height; j += height/5){
    for (let i = 0; i <= width; i += width/3){
      
      stroke('purple');
      strokeWeight(width/50);
      noFill(0);
      bezier(width/16+i, height/2+j, width/8+i, height/10+j, width/2+i, height/16+j, width/2+width/16+i, height/2+j);
      bezier(width/2+width/16+i, height/2+j, width/2+width/8+i, height/2+height/2+j, width/10+i, height/2+height/2+j, width/16+i, height/2+height/20+j);
      bezier(width/16+i, height/2+height/20+j, width/12+i, height/2+height/16+j, width/2+width/14+i, height/3+j, width/2+width/16+i, height/2+j)


    }
    
  }
  for (let j = 0; j <= height; j += height/4.7){
    for (let i = 0; i <= width; i += width/3){
      stroke('black');
      strokeWeight(width/50);
      noFill(0);
      bezier(width/16+i, height/2+j, width/8+i, height/10+j, width/2+i, height/16+j, width/2+width/16+i, height/2+j);

    }
  }
  for (let j = 0; j <= height; j += height/4.3){
    for (let i = 0; i <= width; i += width/3){
      stroke('brown');
      strokeWeight(width/50);
      noFill(0);
      bezier(width/16+i, height/2+j, width/8+i, height/10+j, width/2+i, height/16+j, width/2+width/16+i, height/2+j);

    }
  }
  
  for (let j = 0; j <= height; j += height/4){
    for (let i = 0; i <= width; i += width/3){
      stroke('lightblue');
      strokeWeight(width/50);
      noFill(0);
      bezier(width/16+i, height/2+j, width/8+i, height/10+j, width/2+i, height/16+j, width/2+width/16+i, height/2+j);

    }
  }
   for (let j = 0; j <= height; j += height/3.8){
    for (let i = 0; i <= width; i += width/3){
      stroke('lightpink');
      strokeWeight(width/50);
      noFill(0);
      bezier(width/16+i, height/2+j, width/8+i, height/10+j, width/2+i, height/16+j, width/2+width/16+i, height/2+j);

    }
  }
   for (let j = 0; j <= height; j += height/3.6){
    for (let i = 0; i <= width; i += width/3){
      stroke('white');
      strokeWeight(width/50);
      noFill(0);
      bezier(width/16+i, height/2+j, width/8+i, height/10+j, width/2+i, height/16+j, width/2+width/16+i, height/2+j);

    }
  }
  
  //letter0stroke
  stroke('black');
  strokeWeight(width/15);
  noFill(0);
  bezier(width/16, height/2, width/8, height/10, width/2, height/16, width/2+width/16, height/2);
  bezier(width/2+width/16, height/2, width/2+width/8, height/2+height/2, width/10, height/2+height/2, width/16, height/2+height/20);
  bezier(width/16, height/2+height/20, width/12, height/2+height/16, width/2+width/14, height/3, width/2+width/16, height/2);
  
  //letterO
  stroke('red');
  strokeWeight(width/25);
  noFill(0);
  bezier(width/16, height/2, width/8, height/10, width/2, height/16, width/2+width/16, height/2);
  bezier(width/2+width/16, height/2, width/2+width/8, height/2+height/2, width/10, height/2+height/2, width/16, height/2+height/20);
  bezier(width/16, height/2+height/20, width/12, height/2+height/16, width/2+width/14, height/3, width/2+width/16, height/2);
  
  //letterhStroke
  stroke('black');
  strokeWeight(width/13);
  noFill(0);
  bezier(width/2+width/9, height/16, width/2+width/9, height/4+height/6, width/2+width/10, height/3, width/2+width/8, height/2+height/5);
  bezier(width/2+width/8, height/2+height/5, width/2+width/12, height/3, width/2+width/12, height/3, width/2+width/4, height/4);
  bezier(width/2+width/4, height/4, width/2+width/3, height/2, width/2+width/3, height/2, width/2+width/3, height/2+height/14);
  
  //letterh
  stroke('orange');
  strokeWeight(width/25);
  noFill(0);
  bezier(width/2+width/9, height/16, width/2+width/9, height/4+height/6, width/2+width/10, height/3, width/2+width/8, height/2+height/5);
  bezier(width/2+width/8, height/2+height/5, width/2+width/12, height/3, width/2+width/12, height/3, width/2+width/4, height/4);
  bezier(width/2+width/4, height/4, width/2+width/3, height/2, width/2+width/3, height/2, width/2+width/3, height/2+height/14);
  
   //letter5Stroke
  stroke('black');
  strokeWeight(width/15);
  noFill(0);
  bezier(width/2+width/3, height/16, width/2+width/4, height/16, width/2+width/4, height/16, width/2+width/2.75, height/3);
  bezier(width/2+width/3, height/4, width, 0, width, height/2, width/2+width/4, height/2);
  
  //letter5
  stroke('yellow');
  strokeWeight(width/25);
  noFill(0);
  bezier(width/2+width/3, height/16, width/2+width/4, height/16, width/2+width/4, height/16, width/2+width/2.75, height/3);
  bezier(width/2+width/3, height/4, width, 0, width, height/2, width/2+width/4, height/2);
  
  //letterYStroke
  stroke('black');
  strokeWeight(width/15);
  noFill(0);
  bezier(width/2+width/6, height/2+height/5, width/2+width/4, height/2+height/3, width/2+width/4, height/2+height/6, width/2+width/4, height/2+height/6);
  bezier(width/2+width/4, height/2+height/6, width/2+width/4, height/2+height/6, width/2+width/5, height/2+height/6, width/2+width/5, height/2+height/2.2);
  
  //letterY
  stroke('green');
  strokeWeight(width/30);
  noFill(0);
  bezier(width/2+width/6, height/2+height/5, width/2+width/4, height/2+height/3, width/2+width/4, height/2+height/6, width/2+width/4, height/2+height/6);
  bezier(width/2+width/4, height/2+height/6, width/2+width/4, height/2+height/6, width/2+width/5, height/2+height/6, width/2+width/5, height/2+height/2.2);
  
  //letterHStroke
  stroke('black');
  strokeWeight(width/15);
  noFill(0);
  bezier(width/2+width/3, height/2+height/8, width/2+width/3, height, width/2+width/5, height, width/2+width/3, height/2+height/4);
  bezier(width/2+width/3, height/2+height/4, width/2+width/3, height/2+height/5, width/2+width/3, height/2+height/4, width/2+width/2.5, height/2+height/5);
  bezier(width/2+width/2.5, height/2+height/3, width/2+width/2.2, height/2+height/9, width/2+width/2.8, height/2+height/8, width/2+width/2.1, height/2+height/8);
  
  //letterH
  stroke('blue');
  strokeWeight(width/30);
  noFill(0);
  bezier(width/2+width/3, height/2+height/8, width/2+width/3, height, width/2+width/5, height, width/2+width/3, height/2+height/4);
  bezier(width/2+width/3, height/2+height/4, width/2+width/3, height/2+height/5, width/2+width/3, height/2+height/4, width/2+width/2.5, height/2+height/5);
  bezier(width/2+width/2.5, height/2+height/3, width/2+width/2.2, height/2+height/9, width/2+width/2.8, height/2+height/8, width/2+width/2.1, height/2+height/8);
}

