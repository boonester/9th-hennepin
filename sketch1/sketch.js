// 
let img;
let sound;
let showStart;
let showEnd;
let donut;


// image position and drag state
let imgX, imgY;
let dragging = false; // whether the user is currently dragging the image
let offsetX, offsetY; // distance from mouse to image center when drag starts

let isPlaying = false; //whether the music is currently playing

// Drop zone rectangle — edit these four values to reposition or resize it
const DROP_X = 250; // x position of the drop zone (from left edge)
const DROP_Y = 200; // y position of the drop zone (from top edge)
const DROP_W = 160; // width of the drop zone
const DROP_H = 50; // height of the drop zone


// load in assets
function preload() {
  img = loadImage("small donut.png");
  sound = loadSound("sect1 man.mp3");
  song =loadSound("instrumental.mp3")
  vox = loadSound("sect 1 auto.mp3")
  special = loadFont("SpecialElite.ttf")
  c = loadImage("cursor.png")
}

function setup() {
  createCanvas(600, 400);
  // place the image in the center of the canvas to start
  imageMode(CENTER);
  imgX = 70;
  imgY = 350;
  song.loop()
  vox.play()
  textFont(special)
  setTimeout(() => {
    showStart = true;
  }, 8000);
   setTimeout(() => {
    showEnd = true;
  }, 11000);
    setTimeout(() => {
    donut = true;
  }, 11000);
 noCursor();
  fade = 0
}

function draw() {
  background(0);
  let overDrop = isOverDrop(imgX, imgY);
  strokeWeight(2);
  if (overDrop) {

  } else {


    fill("rgba(255,255,255)");
  }
  textAlign(LEFT);
  textSize(25);
  if (showStart){
     text("well it's 9th and hennepin.", 20, 50)
  }
 if (showEnd){
    text("all the                have names", 170,230)
  text("that sound like prostitutes.", 150, 285)
  stroke(2)
  
 }
if (donut){
    image(img, imgX, imgY);
}

 image(c, mouseX, mouseY)
}

function isOverDrop(cx, cy) {
  return (
    cx > DROP_X && cx < DROP_X + DROP_W && cy > DROP_Y && cy < DROP_Y + DROP_H
  );
}

function mousePressed() {

  if (
    mouseX > imgX - img.width / 2 &&
    mouseX < imgX + img.width / 2 &&
    mouseY > imgY - img.height / 2 &&
    mouseY < imgY + img.height / 2
  ) {
    dragging = true;
    // Record how far the mouse is from the image center so the image
    // doesn't snap its center to the cursor on pickup
    offsetX = mouseX - imgX;
    offsetY = mouseY - imgY;
  }
}

// mouseDragged() fires every frame the mouse moves while a button is held
function mouseDragged() {
  if (dragging) {
    // Move the image center to follow the mouse, preserving the grab offset
    imgX = mouseX - offsetX;
    imgY = mouseY - offsetY;

    if (isOverDrop(imgX, imgY) && !isPlaying) {
      // Image center just entered the drop zone — start looping the music
      sound.play();
      isPlaying = true;
    } else if (!isOverDrop(imgX, imgY) && isPlaying) {
      // Image center just left the drop zone — stop the music
      sound.stop();
      isPlaying = false;
    }
  }
}

// mouseReleased() fires once when the mouse button is let go
function mouseReleased() {
  dragging = false; // stop tracking the drag regardless of where the image lands
}
