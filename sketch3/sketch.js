let line1;
let line2 = false;
let line3 = false;
let line4 = false;
let line5 = false;
let line6 = false;
let line7 = false;
let line8 = false;
let line9 = false;
let line10 = false;
let line11= false;
let line12 = false;
let line13 = false;
let line14 = false;



function preload(){
  sound = loadSound ("sect3 auto.mp3")
  vox = loadSound ("sect3 man.mp3")
  special = loadFont ("SpecialElite.ttf")
}
function setup() {
  createCanvas(600, 400);
  sound.play();
   setTimeout(() => {
     line1 = !line1
  }, 800);
  setTimeout(() => {
     line2 = !line2
  }, 2500);
  setTimeout(() => {
     line3 = !line3
  }, 2700);
  setTimeout(() => {
     line4 = !line4
  }, 2900);
   setTimeout(() => {
     line5 = !line5
  }, 3200);
  setTimeout(() => {
     line6 = !line6
  }, 3500);
  setTimeout(() => {
     line7 = !line7
  }, 5000);
  setTimeout(() => {
     line8 = !line8
  }, 6000);
    setTimeout(() => {
     line9 = !line9
  }, 6200);
  setTimeout(() => {
       line1 = !line1
     line2 = !line2
      line3 = !line3
    line4 = !line4
      line5 = !line5
    line6 = !line6
     line7 = !line7
     line8 = !line8
     line9 = !line9
  }, 8250);
    setTimeout(() => {
     line10 = !line10
  }, 9200);
     setTimeout(() => {
     line11 = !line11
  }, 10000);
    setTimeout(() => {
     line12 = !line12
  }, 10250);
    setTimeout(() => {
     line13 = !line13
  }, 10500);
    setTimeout(() => {
     line14 = !line14
  }, 11750);
    setTimeout(() => {
        line10 = !line10
      line11 = !line11
       line12 = !line12
       line13 = !line13
     line14 = !line14
  }, 14000);
}

function draw() {
  background(0);
  if (line1){
    fill(255);
    textFont(special);
    textSize (25)
    text("and all the bricks are scarred", 20,40)
  }
  if (line2){
    fill(255);
    textFont(special);
    textSize (25)
    text("with", 40,80)
  }
  if (line3){
    fill(255);
    textFont(special);
    textSize (25)
    text("jail", 110,80)
  }
  if (line4){
    fill(255);
    textFont(special);
    textSize (25)
    text("house", 165,80)
  }
  if (line5){
    fill(255);
    textFont(special);
    textSize (25)
    text("tat", 190,100)
  }
   if (line6){
    fill(255);
    textFont(special);
    textSize (25)
    text("toos", 230,100)
  }
   if (line7){
    fill(255);
    textFont(special);
    textSize (25)
    text("and everyone is behaving", 200,200)
  }
  if (line8){
    fill(255);
    textFont(special);
    textSize (25)
    text("like", 400,250)
  }
    if (line9){
    fill(255);
    textFont(special);
    textSize (25)
    text("dogs.", 450,290)
  }
  if (line10){
    fill(255);
    textFont(special);
    textSize (25)
    text("And the horses are", 350,30)
  }
    if (line11){
    fill(255);
    textFont(special);
    textSize (25)
    text("coming", 350,80)
  }
      if (line12){
    fill(255);
    textFont(special);
    textSize (25)
    text("down", 350,120)
  }
        if (line13){
    fill(255);
    textFont(special);
    textSize (25)
    text("violin road", 425,120)
  }
     if (line14){
    fill(255);
    textFont(special);
    textSize (25)
    text("and dutch is dead on his feet.", 40,350)
  }
  
}