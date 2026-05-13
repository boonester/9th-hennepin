var y = 125
let hasClicked = false;
let fauc = true;
let line1 = true;
let line1b =false;
let line2=false;
let line3=false;
let line4=false;
let line5=false;
let line6=false;
let line7=false;
let line8=false;
function preload(){
  drop = loadImage("tear.png")
  faucet = loadImage("faucet.png")
  special = loadFont("SpecialElite.ttf")
  vox = loadSound("sect 6 man.mp3")
  drip = loadSound("plop.mp3")
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  if(fauc){
    image(faucet, 400, 50)
  }
   if(drop){
     image(drop, 300, y)
   }
  if(line1){
    fill(255)
    textFont(special)
    textSize(25)
    text("and the clock ticks out", 50, 250)
     text("like a ________ faucet", 275, 325)
  }
    if(line1b){
    fill(255)
    textFont(special)
    textSize(25)
    text("and the clock ticks out", 50, 250)
     text("like a dripping faucet", 275, 325)
  }
  if(line2){
    fill(255)
    textFont(special)
    textSize(25)
    text("til you're full of", 50, 100)
  }
    if(line3){
    fill(255)
    textFont(special)
    textSize(25)
    text("rag water", 150, 150)
  }
    if(line4){
    fill(255)
    textFont(special)
    textSize(25)
    text("bitters", 100, 200)
  }
     if(line5){
    fill(255)
    textFont(special)
    textSize(25)
    text("and blue ruin.", 150, 250)
  }
  
     if(line6){
    fill(255)
    textFont(special)
    textSize(25)
    text("and you spill out over the side to", 50, 250)
    text("anyone who'll listen.", 50, 280)
  }
    if(line7){
    fill(255)
    textFont(special)
    textSize(25)
    text("i've seen it all.", 100, 350)
  }
   if(line8){
    fill(255)
    textFont(special)
    textSize(25)
    text("I've seen it all through", 20, 350)
    text("the yellow windows of the evening train.", 20, 380)
  }
}
function mouseClicked() {
  if (!hasClicked) {
    console.log("This only runs once!");
    line1 = !line1;
    line1b = !line1b;
    vox.play()
    drip.play()
    drop = !drop
    setTimeout(() => {
       line1b = !line1b
  }, 2500);
    setTimeout(() => {
       line2 = !line2
  }, 3000);
        setTimeout(() => {
       line3 = !line3
  }, 4000);
           setTimeout(() => {
       line4 = !line4
  }, 5000);
         setTimeout(() => {
       line5 = !line5
  }, 5500);
      setTimeout(() => {
       line5 = !line5
         line4 = !line4
          line3 = !line3
          line2 = !line2
  }, 6500);
     setTimeout(() => {
       line6 = !line6
  }, 7500);
      setTimeout(() => {
       line6 = !line6
        fauc = !fauc
  }, 11000);
    setTimeout(() => {
       line7 = !line7
  }, 12000);
      setTimeout(() => {
       line7 = !line7
  }, 13500);
     setTimeout(() => {
       line8 = !line8
  }, 15000);
  }
}