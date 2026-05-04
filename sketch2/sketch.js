
let start1;
let start2;
let start3;
let start4;
let start5;
let isPlaying = false;
let currentImage;
let umbrella;
let deadBird;
let showText = false;
let op
let hasClicked = false;
let showMoreText = false;
let moreText = false;

function preload(){
  special = loadFont("SpecialElite.ttf")
  umbrella = loadImage("live bird-1.png")
  deadBird = loadImage("dead bird-1.png")
  // grill = loadImage("grill")
  // steam = loadImage("steam")
  // c = loadImage("cursor.png")
  sound = loadSound ("sect2 auto.mp3")
  vox = loadSound ("sect2 man.mp3")
  
}

function setup() {
  createCanvas(600,400);
  imageMode(CENTER)
  textSize(20)
  op = 255
  currentImage = umbrella
  sound.play();
  setTimeout(() => {
    start1 = true;
  }, 500);
   setTimeout(() => {
    start2 = true;
  }, 2500);
     setTimeout(() => {
    start3 = true;
  }, 4000);
  setTimeout(() => {
    start4 = true;
  }, 7000);
    setTimeout(() => {
    start5 = true;
  }, 2000);
}

function draw() {
  background(0);
   fill(op);
  textFont(special)
 if (start1){
     text("and the moon's teeth marks", 20, 50)
  }
if (start2){
  text("are on the sky", 40,70)
}
if (start3){
  text("like a tarp thrown all over this", 60,100)
}
if (start4){
  image(currentImage,100,250)
}
  if (showText){
    fill(255)
    textFont (special)
    text("And the broken umbrellas", 20, 50)
    text("like dead birds", 40, 70)
  }
  if (showMoreText){
    fill(255);
    textFont (special);
    text("the steam comes out of the grill", 200, 100) 
  }
  if (moreText){
    fill (255);
    textFont (special)
    text("like the whole goddamned town's ready to blow", 60,125)
  }
}
function mouseClicked() {
  if (!hasClicked) {
    console.log("This only runs once!");
  if (currentImage === umbrella) {
    currentImage = deadBird;} 
  // else {
  //   currentImage = umbrella;
  // }
  if (op === 255){
    op = 0
  } else {
    op = 255
  }
    showText = !showText;
  vox.play()
  hasClicked = true;
setTimeout(() => {
    showMoreText = !showMoreText
  }, 2300);
  setTimeout(() => {
    moreText = !moreText
  }, 4100);
  }

}