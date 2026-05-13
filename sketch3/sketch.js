let sound, special, bed, dream;
let D, R, E, A, M, S;
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
let line15 = false;
let line16 = false;
let line16B = false;
let vox;
let checkD = false, checkR = false, checkE = false, checkA = false, checkM = false, checkS = false;
let draggingD = false, draggingR = false, draggingE = false, draggingA = false, draggingM = false, draggingS = false;
let DimgX, DimgY, RimgX, RimgY, EimgX, EimgY, AimgX, AimgY, MimgX, MimgY, SimgX, SimgY;
let offsetX, offsetY;
let isPlaying = false;
const DDROP_X = 305;
const DDROP_Y = 70;
const DDROP_W = 15;
const DDROP_H = 35;

const RDROP_X = 330;
const RDROP_Y = 70;
const RDROP_W = 15;
const RDROP_H = 35;

const EDROP_X = 355;
const EDROP_Y = 70;
const EDROP_W = 15;
const EDROP_H = 35;

const ADROP_X = 380;
const ADROP_Y = 70;
const ADROP_W = 15;
const ADROP_H = 35;

const MDROP_X = 405;
const MDROP_Y = 70;
const MDROP_W = 15;
const MDROP_H = 35;

const SDROP_X = 430;
const SDROP_Y = 70;
const SDROP_W = 15;
const SDROP_H = 35;



function preload(){
  sound = loadSound ("sect3 auto.mp3")
  vox = loadSound ("sect3 man.mp3")
  special = loadFont ("SpecialElite.ttf")
  bed = loadImage("sleeper.png")
  dream = loadImage("dream2.png")
  D = loadImage("D.png")
  R = loadImage("R.png")
  E = loadImage("E.png")
  A = loadImage("A.png")
  M = loadImage("M.png")
  S = loadImage("S.png")

}
function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
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
  setTimeout(() => {
     line15 = !line15
  }, 14500);
  setTimeout(() => {
     line16 = !line16
  }, 16000);
DimgX = 150;  DimgY = 235;
RimgX = 250; RimgY = 235;
EimgX = 50; EimgY = 235;
AimgX = 450; AimgY = 235;
MimgX = 350; MimgY = 235;
SimgX = 550; SimgY = 235;
}

function draw() {
  background(0);
  fill(255)

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
       if (line15){
    fill(255);
    textFont(special);
    textSize (25)
    text("and all the rooms they smell like diesel", 40, 50)
  }
    if (line16){
    fill(255);
    textFont(special);
    textSize (25)
    text("and you take on the  _ _ _ _ _ _  of", 40,100)
    text("the ones who have slept there", 40,150)
    image(bed, 0, 350)
    image(bed, 100, 350)
    image(bed, 200, 350)
    image(bed, 300, 350)
    image(bed, 400, 350)
    image(bed, 500, 350)
    image(dream, 60, 240)
    image(dream, 160, 240)  
    image(dream, 260, 240) 
    image(dream, 360, 240)
    image(dream, 460, 240)
    image(dream, 560, 240) 
    image(D, DimgX, DimgY)
    image(R, RimgX, RimgY)
    image(E, EimgX, EimgY)
    image(A, AimgX, AimgY)
    image(M, MimgX, MimgY)
    image(S, SimgX, SimgY)
  }
    if (line16B){
    fill(255);
    textFont(special);
    textSize (25)
    text("and you take on the  D R E A M S  of", 40,100)
    text("the ones who have slept there.", 40,150)
    image(bed, 0, 350)
    image(bed, 100, 350)
    image(bed, 200, 350)
    image(bed, 300, 350)
    image(bed, 400, 350)
    image(bed, 500, 350)
    image(dream, 60, 240)
    image(dream, 160, 240)  
    image(dream, 260, 240) 
    image(dream, 360, 240)
    image(dream, 460, 240)
    image(dream, 560, 240)   
  }
  
}
// function isOverDropD(cx, cy) {
//   return (
//     cx > DDROP_X && cx < DDROP_X + DDROP_W && cy > DDROP_Y && cy < DDROP_Y + DDROP_H
//   );
// }
// function isOverDropR(cx, cy) {
//   return (
//     cx > RDROP_X && cx < RDROP_X + RDROP_W && cy > RDROP_Y && cy < RDROP_Y + RDROP_H
//   );
// }
// function isOverDropE(cx, cy) {
//   return (
//     cx > EDROP_X && cx < EDROP_X + EDROP_W && cy > EDROP_Y && cy < EDROP_Y + EDROP_H
//   );
// }
// function isOverDropA(cx, cy) {
//   return (
//     cx > ADROP_X && cx < ADROP_X + ADROP_W && cy > ADROP_Y && cy < ADROP_Y + ADROP_H
//   );
// }
// function isOverDropM(cx, cy) {
//   return (
//     cx > MDROP_X && cx < MDROP_X + MDROP_W && cy > MDROP_Y && cy < MDROP_Y + MDROP_H
//   );
// }
// function isOverDropS(cx, cy) {
//   return (
//     cx > SDROP_X && cx < SDROP_X + SDROP_W && cy > SDROP_Y && cy < SDROP_Y + SDROP_H
//   );
// }
function isOverDropD(cx, cy) { return cx > DDROP_X && cx < DDROP_X + DDROP_W && cy > DDROP_Y && cy < DDROP_Y + DDROP_H; }
function isOverDropR(cx, cy) { return cx > RDROP_X && cx < RDROP_X + RDROP_W && cy > RDROP_Y && cy < RDROP_Y + RDROP_H; }
function isOverDropE(cx, cy) { return cx > EDROP_X && cx < EDROP_X + EDROP_W && cy > EDROP_Y && cy < EDROP_Y + EDROP_H; }
function isOverDropA(cx, cy) { return cx > ADROP_X && cx < ADROP_X + ADROP_W && cy > ADROP_Y && cy < ADROP_Y + ADROP_H; }
function isOverDropM(cx, cy) { return cx > MDROP_X && cx < MDROP_X + MDROP_W && cy > MDROP_Y && cy < MDROP_Y + MDROP_H; }
function isOverDropS(cx, cy) { return cx > SDROP_X && cx < SDROP_X + SDROP_W && cy > SDROP_Y && cy < SDROP_Y + SDROP_H; }

function mousePressed() {
  if (!line16) return; // letters not visible yet

  if (mouseX > DimgX - D.width/2 && mouseX < DimgX + D.width/2 &&
      mouseY > DimgY - D.height/2 && mouseY < DimgY + D.height/2) {
    draggingD = true; offsetX = mouseX - DimgX; offsetY = mouseY - DimgY;
  }
  if (mouseX > RimgX - R.width/2 && mouseX < RimgX + R.width/2 &&
      mouseY > RimgY - R.height/2 && mouseY < RimgY + R.height/2) {
    draggingR = true; offsetX = mouseX - RimgX; offsetY = mouseY - RimgY;
  }
  if (mouseX > EimgX - E.width/2 && mouseX < EimgX + E.width/2 &&
      mouseY > EimgY - E.height/2 && mouseY < EimgY + E.height/2) {
    draggingE = true; offsetX = mouseX - EimgX; offsetY = mouseY - EimgY;
  }
  if (mouseX > AimgX - A.width/2 && mouseX < AimgX + A.width/2 &&
      mouseY > AimgY - A.height/2 && mouseY < AimgY + A.height/2) {
    draggingA = true; offsetX = mouseX - AimgX; offsetY = mouseY - AimgY;
  }
  if (mouseX > MimgX - M.width/2 && mouseX < MimgX + M.width/2 &&
      mouseY > MimgY - M.height/2 && mouseY < MimgY + M.height/2) {
    draggingM = true; offsetX = mouseX - MimgX; offsetY = mouseY - MimgY;
  }
  if (mouseX > SimgX - S.width/2 && mouseX < SimgX + S.width/2 &&
      mouseY > SimgY - S.height/2 && mouseY < SimgY + S.height/2) {
    draggingS = true; offsetX = mouseX - SimgX; offsetY = mouseY - SimgY;
  }
}

function mouseDragged() {
  if (draggingD) { DimgX = mouseX - offsetX; DimgY = mouseY - offsetY; }
  if (draggingR) { RimgX = mouseX - offsetX; RimgY = mouseY - offsetY; }
  if (draggingE) { EimgX = mouseX - offsetX; EimgY = mouseY - offsetY; }
  if (draggingA) { AimgX = mouseX - offsetX; AimgY = mouseY - offsetY; }
  if (draggingM) { MimgX = mouseX - offsetX; MimgY = mouseY - offsetY; }
  if (draggingS) { SimgX = mouseX - offsetX; SimgY = mouseY - offsetY; }
}

function mouseReleased() {
  // on release, check if each letter landed in its drop zone
  if (draggingD) { checkD = isOverDropD(DimgX, DimgY); draggingD = false; }
  if (draggingR) { checkR = isOverDropR(RimgX, RimgY); draggingR = false; }
  if (draggingE) { checkE = isOverDropE(EimgX, EimgY); draggingE = false; }
  if (draggingA) { checkA = isOverDropA(AimgX, AimgY); draggingA = false; }
  if (draggingM) { checkM = isOverDropM(MimgX, MimgY); draggingM = false; }
  if (draggingS) { checkS = isOverDropS(SimgX, SimgY); draggingS = false; }


  if (checkD && checkR && checkE && checkA && checkM && checkS && !isPlaying) {
    vox.play();
    isPlaying = true;
    line16 = false;
    line16B = true;
  }
}