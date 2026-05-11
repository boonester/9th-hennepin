let line1, line2, line3, line4, line5, line6, line7, line8, line5c, cry1, cry2, cry3,cry4,cry5,cry6, line9, line10, line11, line12, line13, line14, line15, line16, line17 = false

const DROP_X = 140; 
const DROP_Y = 140;  
const DROP_W = 100; 
const DROP_H = 100
let dragging = false;
let offsetX, offsetY;
let isPlaying = false;
let img;
let imgX,imgY;

function preload(){
  tear = loadImage("tear.png")
  tsound = loadSound("tattoosound.mp3")
  special = loadFont("SpecialElite.ttf");
  sound = loadSound("sect5 auto.mp3");
  vox = loadSound("sect5 man.mp3");
  eye = loadImage("eye-2.png");
  stencil = loadImage("tear stencil-2.png")
  gun = loadImage("tattoo gun-1.png")
  voxc = loadSound("sect 6 auto.mp3")
}

function setup() {
  createCanvas(600, 400);
  sound.play()
   setTimeout(() => {
     line1 = !line1
  }, 800);
   setTimeout(() => {
     line2 = !line2
  }, 4000);
     setTimeout(() => {
     line3 = !line3
  }, 5200);
    setTimeout(() => {
     line4 = !line4
  }, 5500);
    setTimeout(() => {
     line4 = !line4
      line3 = !line3
      line2 = !line2
       line1 = !line1
  }, 7000);
  
    setTimeout(() => {
     line5 = !line5
  }, 8000);
  imgX = 400;
  imgY = 200;
}

function draw() {

  
  let overDrop = isOverDrop(imgX, imgY);
  imageMode(CENTER)
  background(0);
  if(line1){
    fill(255);
    textSize(25);
    textFont(special);
    text("and no one brings anything small", 30, 50)
    text("into a bar around here.", 30, 70)
  }
    if(line2){
    fill(255);
    textSize(25);
    textFont(special);
    text("they all started out with", 180, 200)
  }
  if(line3){
    fill(255);
    textSize(25);
    textFont(special);
    text("bad", 100, 260)
  }
    if(line4){
    fill(255);
    textSize(25);
    textFont(special);
    text("directions.", 150, 270)
  }
  if(line5){
    fill(255);
    textSize(25);
    textFont(special);
    text("and the girl behind the counter", 150, 270)
    text("has a __________",150, 300)
    image(eye, 110,90)
    image(stencil, 180,150)
    image(gun, imgX,imgY)
  }
  if(line5c){
    fill(255);
    textSize(25);
    textFont(special);
    text("and the girl behind the counter", 150, 270)
    text("has a tattoed tear",150, 300)
    image(eye, 110,90)
    image(tear, 180,150)
 
  }
    if(line6){
    fill(255);
    textSize(25);
    textFont(special);
    text("one for every year he's away", 150, 270)
    image(eye, 110,90)
    image(tear, 180,150)
  }
   if(line7){
    fill(255);
    textSize(25);
    textFont(special);
    text("she",150, 300)
  }
   if(line8){
    fill(255);
    textSize(25);
    textFont(special);
    text("said.",200, 300)
  }
    if(cry1){
       image(tear, 250,150)
  }
     if(cry2){
       image(tear, 320,150)
  }
   if(cry3){
       image(tear, 390,150)
  }
   if(cry4){
       image(tear, 460,150)
  }
    if(cry5){
       image(tear, 530,150)
  }
    if(cry6){
       image(tear, 600,150)
  }
   if(line9){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("such a crumbling beauty.",width/2, height/2)
  }
    if(line10){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("ah,",width/2, height/2 -30)
  }
    if(line11){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("there's nothing wrong with her",width/2, height/2)
  }
   if(line12){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("that a hundred dollars won't fix.",width/2, height/2 +30)
  }
    if(line13){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("she has that razor sadness", 350, 40)
  }
   if(line14){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("that only gets worse with the", 350, 70)
  }
    if(line15){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("clang", 350, 120)
  }
     if(line16){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("and the thunder", 250, 150)
  }
    if(line17){
    textAlign(CENTER)
    fill(255);
    textSize(25);
    textFont(special);
    text("of the southern pacific going by.", 300, 300)
  }
  
}
function isOverDrop(cx, cy) {
  return (
    cx > DROP_X && cx < DROP_X + DROP_W && cy > DROP_Y && cy < DROP_Y + DROP_H
  );
}
function mousePressed() {
  if (
    mouseX > imgX - gun.width / 2 &&
    mouseX < imgX + gun.width / 2 &&
    mouseY > imgY - gun.height / 2 &&
    mouseY < imgY + gun.height / 2
  ) {
    dragging = true;
    offsetX = mouseX - imgX;
    offsetY = mouseY - imgY;
  }
}

function mouseDragged() {
  if (dragging) {
    imgX = mouseX - offsetX;
    imgY = mouseY - offsetY;
    tsound.loop();

    if (isOverDrop(imgX, imgY) && !isPlaying) {
      vox.play();
      isPlaying = true;
       dragging = false;
      line5 = !line5
      line5c = !line5c
    setTimeout(() => {
    line5c = !line5c;
    line6 = !line6;
  }, 3500);
    setTimeout(() => {
      cry1 = !cry1;
    }, 4000);
    setTimeout(() => {
      cry2 = !cry2;
    }, 4500);
    setTimeout(() => {
      cry3 = !cry3;
    }, 5000);  
    setTimeout(() => {
      cry4 = !cry4;
    }, 5500);  
    setTimeout(() => {
      cry5 = !cry5;
    }, 6000);  
    setTimeout(() => {
      cry6 = !cry6;
    }, 6500);  
    setTimeout(() => {
      line7 = !line7;
    }, 5250);
    setTimeout(() => {
      line8 = !line8;
    }, 5550);
    setTimeout(() => {
      line6 = !line6;
      line7 = !line7;
      line8 = !line8;
       cry6 = !cry6;
       cry5 = !cry5;
       cry4 = !cry4;
       cry3 = !cry3;
       cry2 = !cry2;
       cry1 = !cry1;
      voxc.play();
    }, 7000);
    setTimeout(() => {
      line9 = !line9;
    }, 7500);
        setTimeout(() => {
      line9 = !line9;
    }, 9000);
    setTimeout(() => {

      line10 = !line10;
    }, 9750);
    setTimeout(() => {
      line11 = !line11;
    }, 10250);
    setTimeout(() => {
      line12 = !line12;
    }, 11250);
    setTimeout(() => {
      line10 = !line10;
      line11 = !line11;
      line12 = !line12;
    }, 13000);
    setTimeout(() => {
      line13 = !line13;
    }, 14000);
    setTimeout(() => {
      line14 = !line14;
    }, 15500);
     setTimeout(() => {
      line15= !line15;
    }, 16750);
       setTimeout(() => {
      line16 = !line16;
    }, 17500);
      setTimeout(() => {
      line17 = !line17;
    }, 18500);
    } else if (!isOverDrop(imgX, imgY) && isPlaying) {
      tsound.stop();
      isPlaying = false;
    
    }
  }
}

function mouseReleased() {
  dragging = false; // stop tracking the drag regardless of where the image lands
  tsound.stop()
}
