let line1 = false;
let line2 = false;
let line3 = false;
let line4 = false;
let line4c = false;
let inter = false;
let imgX, imgY;
let dragging = false;
let offsetX, offsetY;
let isPlaying = false;
const DROP_X = 300;
const DROP_Y = 200;
const DROP_W = 200;
const DROP_H = 200;
let sleep;

function preload (){
  auto = loadSound("sect 4 auto.mp3");
  man = loadSound("sect 4 man.mp3");
  special = loadFont("SpecialElite.ttf")
  sleeper = loadImage("sleeper.png")
  hat = loadImage("hat.png")
}
function setup() {
  createCanvas(600, 400);
  auto.play();
   setTimeout(() => {
     line1 = !line1
  }, 1000);
  setTimeout(() => {
     line2 = !line2
  }, 3000);
    setTimeout(() => {
     line3 = !line3
  }, 4500);
    setTimeout(() => {
     line4 = !line4;
      inter = !inter;
      sleep =!sleep;
  }, 6500);
  imgX = 70;
  imgY = 300;
  imageMode(CENTER)
}

function draw() {
  background(0);
  let overDrop = isOverDrop(imgX, imgY);
  if (line1){
    fill(255);
    textFont(special);
    textSize(25);
    text("and i'm lost in the window", 20, 40)
  }
    if (line2){
    fill(255);
    textFont(special);
    textSize(25);
    text("and i hide on the stairway", 50, 70)
  }
    if (line3){
    fill(255);
    textFont(special);
    textSize(25);
    text("and i hang in the curtain", 80, 100)
  }
    if (line4){
    fill(255);
    textFont(special);
    textSize(25);
    text("and i _____ in your hat", 150, 150)
  }
   if (line4c){
    fill(255);
    textFont(special);
    textSize(25);
    text("and i sleep in your hat", 150, 150)
  }
  if (sleep){
    image(sleeper, imgX, imgY);
    image(hat, DROP_X, DROP_Y+90);
}
    
}
function isOverDrop(cx, cy) {
  return (
    cx > DROP_X && cx < DROP_X + DROP_W && cy > DROP_Y && cy < DROP_Y + DROP_H
  );
}
function mousePressed() {

  if (
    mouseX > imgX - sleeper.width / 2 &&
    mouseX < imgX + sleeper.width / 2 &&
    mouseY > imgY - sleeper.height / 2 &&
    mouseY < imgY + sleeper.height / 2
  ) {
    dragging = true;
    // Record how far the mouse is from the image center so the image
    // doesn't snap its center to the cursor on pickup
    offsetX = mouseX - imgX;
    offsetY = mouseY - imgY;
  }
}
function mouseDragged() {
  if (dragging) {
    // Move the image center to follow the mouse, preserving the grab offset
    imgX = mouseX - offsetX;
    imgY = mouseY - offsetY;

    if (isOverDrop(imgX, imgY) && !isPlaying) {
      // Image center just entered the drop zone — start looping the music
      man.play();
      isPlaying = true;
      line4 = !line4
      line4c = !line4c
      dragging = false;
      sleep = !sleep
      
    } else if (!isOverDrop(imgX, imgY) && isPlaying) {
      // Image center just left the drop zone — stop the music
      man.stop();
      isPlaying = false;
    }
  }
}

// mouseReleased() fires once when the mouse button is let go
function mouseReleased() {
  dragging = false; // stop tracking the drag regardless of where the image lands
}