
function cubic(p0, p1, p2, p3, t) {
  let v1 = quadratic(p0, p1, p2, t);
  let v2 = quadratic(p1, p2, p3, t);
  let x = lerp(v1.x, v2.x, t);
  let y = lerp(v1.y, v2.y, t);
  
  return createVector(x, y);
}

function quadratic(p0, p1, p2, t) {
  let x1 = lerp(p0.x, p1.x, t);
  let y1 = lerp(p0.y, p1.y, t);
  let x2 = lerp(p1.x, p2.x, t);
  let y2 = lerp(p1.y, p2.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  
  return createVector(x, y);
}

class LastLetter {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("й", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    if (this.t >= 1) {
      this.Reset();
      this.left = !this.left;
    } else {
      this.t += 0.01 * this.speed;
    }

    let pos = cubic(p0, p1, p2, p3, this.t);
    this.x = pos.x;
    this.y = pos.y;
  }
}

class Letter1 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("оhуохайдыыр", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {

    
    timer++;
      if (timer > 400 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter2 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("hуо", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 380 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter3 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("уох", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 350 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter4 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("о", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 340 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter5 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("х", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 310 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter6 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("айдыы", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 310 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter7 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("й", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 300 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter8 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("д", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 290 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter9 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("ыыр", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 280 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter10 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("ыр", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 260 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter11 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("р", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 250 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

//word2
class Letter12 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("оhуохай", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 240 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter13 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("h", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 230 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter14 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("у", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 220 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter15 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("о", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 210 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter16 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("х", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 200 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter17 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("а", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 190 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter18 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("й", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 180 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

//word3
class Letter19 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("эhиэхэйдиир", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 170 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter20 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("h", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 160 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter21 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("и", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 150 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter22 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("э", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 140 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter23 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("х", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 130 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter24 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("э", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 120 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter25 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("й", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 110 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter26 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("д", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 100 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter27 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("и", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 90 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter28 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("и", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 80 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter29 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("р", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 70 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

//word4
class Letter30 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("эhиэхэй", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 60 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter31 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("h", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 50 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter32 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("и", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 40 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}

class Letter33 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("э", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 30 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter34 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("х", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 20 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter35 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("э", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
    timer++;
      if (timer > 10 * 60) {
        if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      }
}}
class Letter36 {
  constructor(x, y, speed, t, left) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.t = t;
    this.left = left;
  }
  
  Show() {
    
    textSize(width/16);
    text("й", this.x, this.y);
  }
  
  Reset() {
    this.x = 0;
    this.y = 0;
    this.t = 0;
  }
  
  Move(p0, p1, p2, p3) {
  
      if (this.t >= 1) {
        this.Reset();
        this.left = !this.left;
      } 
      else {
        this.t += 0.01 * this.speed;
      }
      let pos = cubic(p0, p1, p2, p3, this.t);
      this.x = pos.x;
      this.y = pos.y; 
      
}}
