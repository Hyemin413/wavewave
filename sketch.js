let start = 0.0;
let xoff = 0.0;
let inc = 0.0002;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  
  var colorList = [ "#bbe6e1", "#ffffff"]
   bubbles = [];
   for (let i = 0; i < 160; i++) {
      bubbles.push({
         x: random(width/2-900,width/2+900),
         y: random(height),   
         color: random(colorList),
         size: random(5+i/5),
         speed: random(-2, 2),
      });
    }
}
let bubbles;
  
function draw() {
  background(255,56,15);
  for (let i = 0; i < 40; i++) {
      noStroke();
      fill(bubbles[i].color);
      circle(bubbles[i].x, bubbles[i].y, bubbles[i].size+mouseX*0.02);
      if (bubbles[i].y >= height) {
          bubbles[i].speed *= -1;
      }
      if (bubbles[i].y <= 0) {
          bubbles[i].speed *= -1;
      }
      bubbles[i].y += bubbles[i].speed;
  }
  wave1();
  for (let i = 40; i < 80; i++) {
      noStroke();
      fill(bubbles[i].color);
      circle(bubbles[i].x, bubbles[i].y, bubbles[i].size+mouseX*0.04);
      if (bubbles[i].y >= height) {
          bubbles[i].speed *= -1;
      }
      if (bubbles[i].y <= 0) {
          bubbles[i].speed *= -1;
      }
      bubbles[i].y += bubbles[i].speed;
  }
  wave2();
  for (let i = 80; i < 120; i++) {
      noStroke();
      fill(bubbles[i].color);
      circle(bubbles[i].x, bubbles[i].y, bubbles[i].size+mouseY*0.02);
      if (bubbles[i].y >= height) {
          bubbles[i].speed *= -1;
      }
      if (bubbles[i].y <= 0) {
          bubbles[i].speed *= -1;
      }
      bubbles[i].y += bubbles[i].speed;
  }
  
   wave3();
  for (let i = 120; i < 160; i++) {
      noStroke();
      fill(bubbles[i].color);
      circle(bubbles[i].x, bubbles[i].y, bubbles[i].size+mouseX*0.02);
      if (bubbles[i].y >= height) {
          bubbles[i].speed *= -1;
      }
      if (bubbles[i].y <= 0) {
          bubbles[i].speed *= -1;
      }
      bubbles[i].y += bubbles[i].speed;
  }
}

function wave1() {
  xoff = start;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff*1) * height;
    c = color(200,200,200,20);
    stroke(c);
    line(x, y, x, height);
    xoff += inc;
    start += inc / 300;
  }

}

function wave2() {
  xoff = start - 10;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff*1) * height+100;
    c = color(200,100,200,50);
    stroke(c);
    line(x, y, x, height);
    xoff += inc;
    start += inc / 200;
  }
}

function wave3() {
  xoff = start - 20;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff*1) * height+100;
    c = color(200,10,100,30);
    stroke(c);
    line(x, y, x, height);
    xoff += inc;
    start += inc / 100;
  }
}

function mousePressed(){
  save('wave.jpg');
}