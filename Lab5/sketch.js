let player;
let figure1;
let figure2;
let distance;
let distance2;
let map;
let keepFollowing = true;
let snow = [{x: 100, y: 200, diameter: 5},
  {x: 300, y: 400, diameter: 10}, 
  {x: 500, y: 600, diameter: 15}];

function preload(){
  map = new Sprite(400, 300, 5725, 3000, "none");
  map.image = "assets/map01.png";
  player = new Sprite(-windowWidth, windowHeight/2+windowHeight/8, windowWidth/16, windowHeight/3);
  player.addAnimation("walk", "assets/379x483_2.png", {size: [379, 483], frames: 8});
  player.rotationLock = true;
  figure1 = new Sprite(-windowWidth-windowWidth/8, windowHeight/2+windowHeight/8, windowWidth/16, windowHeight/3);
  figure1.addAnimation("walk", "assets/329x495.png", {size: [329, 495], frames: 4});
  figure2 = new Sprite(-windowWidth-windowWidth/6, windowHeight/2+windowHeight/8, windowWidth/16, windowHeight/3);
  figure2.addAnimation("walk", "assets/328x488.png", {size: [328, 488], frames: 4});
  trigger1 = new Sprite(0, windowHeight/2+windowHeight/8, windowWidth/16, windowHeight/3, "static");
  trigger2 = new Sprite(windowWidth+windowWidth/3, windowHeight/2+windowHeight/8, windowWidth/16, windowHeight/3, "static");
  trigger3 = new Sprite(windowWidth+windowWidth+windowWidth, windowHeight/2+windowHeight/8, windowWidth/16, windowHeight/3, "static");
  trigger1.visible = false;
  trigger2.visible = false;
  trigger3.visible = false;
  text01 = new Sprite(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/6, "none");
  text01.image = "assets/text01.png";
  text02 = new Sprite(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/6, "none");
  text02.image = "assets/text02.png";
  text02.visible = false;
  text03 = new Sprite(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/6, "none");
  text03.image = "assets/text03.png";
  text03.visible = false;
  
  //backgroundPicture = loadImage("assets/map01.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  //imageMode(CENTER);
}

function draw(){
  background("black");
  //map.visible = true;
  //camera.off();
  //image(backgroundPicture, 0 ,0);
  player.scale = 0.5;
  figure1.scale = 0.5;
  figure2.scale = 0.5;
  text01.scale = 0.5;
  text02.scale = 0.5;
  text03.scale = 0.5;
  movement();
  camera.on();
  camera.x = player.x+width/4;
  text01.x = camera.x;
  text02.x = camera.x;
  text03.x = camera.x;
  //camera.x = player.x + 52;
	//camera.y = player.y;
  
  distance = dist(player.x, player.y, figure1.x, figure1.y);
  if (distance > 50) {
		//figure1.direction = figure1.angleTo(player);
    if (keepFollowing == false){
      figure1.moveTo(trigger2.x, trigger2.y);
      figure1.speed = 0;
      figure1.ani.playing = false;
    }
    else{
      figure1.moveTo(player.x, player.y);
      figure1.speed = 4.8;
      figure1.ani = "walk";
      figure1.ani.playing = true;
    }
		
	} 
  else if (distance < 50) {
    figure1.speed = 0;
    figure1.ani.playing = false;
  }

  distance2 = dist(player.x, player.y, figure2.x, figure2.y);
  if (distance2 > 125) {
    if (keepFollowing == false){
      figure2.moveTo(trigger2.x, trigger2.y);
      figure2.speed = 0;
      figure2.ani.playing = false;
    }
    else{
      figure2.moveTo(player.x, player.y);
      figure2.speed = 4.8;
      figure2.ani = "walk";
      figure2.ani.playing = true;
    }
		
	} 
  else if (distance2 < 125) {
    figure2.speed = 0;
    figure2.ani.playing = false;
  }

  //clear();
	if (player.overlaps(trigger1)) {
    trigger1.delete();
    text01.visible = false;
    text02.visible = true;
    
  }

  if (player.overlaps(trigger2)) {
    //trigger1.delete();
    text02.visible = false;
    text03.visible = true;
    camera.x = width/4;
    camera.off();
    player.vel.y = 10;
    distance = dist(trigger2.x, trigger2.y, figure1.x, figure1.y);
    distance2 = dist(trigger2.x, trigger2.y, figure2.x, figure2.y);
    keepFollowing = false;
    figure1.speed = 0;
    figure1.ani.playing = false;
    
  }

  if (figure1.overlaps(trigger2)){
    figure1.speed = 0;
    figure1.ani.playing = false;
    figure2.speed = 0;
    figure2.ani.playing = false;
    
  }

  if (figure2.overlaps(trigger2)){
    
  }

  text("Click anywhere to start", -windowWidth, height/8);
  //ellipse(mouseX, mouseY, 30, 50);

  for (let i = 0; i < snow.length; i++){
    fill("white");
    noStroke();
    ellipse(snow[i].x, snow[i].y, snow[i].diameter, snow[i].diameter);
  }
}

function movement(){
  if (kb.pressing("d")||kb.pressing("right")){
    player.ani = "walk";
    player.mirror.x = false;
    
    if (keepFollowing == false){
      player.vel.x = 0;
    }
    else{
      player.vel.x = 5;
    }
    //figure1.ani = "walk";
    //figure1.mirror.x = false;
    //figure2.mirror.x = false;
    //figure1.vel.x = 5;
  }
  else if (kb.pressing("a")||kb.pressing("left")){
    player.ani = "walk";
    player.mirror.x = true;
    
    if (keepFollowing == false){
      player.vel.x = 0;
    }
    else{
      player.vel.x = -5;
    }
    //figure1.ani = "walk";
    //figure1.mirror.x = true;
    //figure2.mirror.x = true;
    //figure1.vel.x = -5;
  }
  else {
    player.vel.x = 0;
    //figure1.vel.x = 0;
  }
  if (kb.pressing('a') || kb.pressing('d')||kb.pressing("arrowRight")||kb.pressing("arrowLeft")){
    player.ani.playing = true; 
    //figure1.ani.playing = true;
  }
  else {
    player.ani.playing = false;
    figure1.ani.playing = false;
    figure2.ani.playing = false;
  }
}

function mousePressed() {
  // Create a new circle object and add it to the array
  let newCircle = {
    x: mouseX,
    y: mouseY,
    diameter: random(20, 50),
  };
  
  snow.push(newCircle);
}

function overlay(player, trigger1){
  //trigger1.delete;
  camera.x = player.x + 52;

}