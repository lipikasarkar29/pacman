var cell = 20

var textMap;
var textMap2;
var blocks = []
var block;
var pointThings = []
var points;
var redGhost;
var blueGhost;
var orangeGhost;
var pinkGhost;

var pacmanMoveUp = false;
var pacmanMoveDown = false;
var pacmanMoveLeft = false;
var pacmanMoveRight = false;

var goingPacManX;
var goingPacManY;
var goingRed = 'left';
var goingBlue = 'right';
var goingOrange = 'left';
var goingPink = 'right';

var gamestate = 'start';
var score = 0;
var scatter = true;
var scatterCount = 0;
var started = false;

function preload(){
  pacmanRight = loadAnimation('pacman.png');
  pacmanLeft = loadAnimation('pacman-left.png');
  pacmanDown = loadAnimation('pacman-down.png');
  pacmanUp = loadAnimation('pacman-up.png');
  ghostRed = loadAnimation('ghost-red.png');
  ghostBlue = loadAnimation('ghost-blue.png');
  ghostPink = loadAnimation('ghost-pink.png');
  ghostOrange = loadAnimation('ghost-orange.png');
  blueTarget1 = loadAnimation('blueX.png');
  orangeTarget1 = loadAnimation('redX.png');
  pinkTarget1 = loadAnimation('pinkX.png');
}

function setup() {
  var cnv = createCanvas(540, 600);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);
  
  frameRate(15);

  pacman = createSprite(275, 110, 1, 1);
  //pacman.debug = true;
  pacman.addAnimation('pacman', pacmanDown);
  pacman.addAnimation('pacman1', pacmanUp);
  pacman.addAnimation('pacman2', pacmanLeft);
  pacman.addAnimation('pacman3', pacmanRight);
  pacman.scale = 0.075;

  map1 = new MAP();
  map1.create();

  /*
  blueTargetDraw = createSprite(1 * 20 + 1, 10 * 20 + 10, 1, 1);
  orangeTargetDraw = createSprite(1 * 20 + 1, 10 * 20 + 10, 1, 1);
  pinkTargetDraw = createSprite(1 * 20 + 1, 10 * 20 + 10, 1, 1);
  */

  /*
  leftButton = createButton('Move Left');
  leftButton.style('background-color', color(150, 150, 150, 255));
  leftButton.mousePressed(moveLeft);
  leftButton.mouseReleased(stopMoveLeft);
  leftButton.position(cnvx - 100, cnvy);
  leftButton.size(100, 600);
  */

  buttonReset = createButton('Reset');
  buttonReset.position(cnvx + 245, cnvy + 275);
  buttonReset.mousePressed(reset);
  buttonReset.hide();
}

function draw() {
  background(0);

  if (gamestate == 'start'){
    if (keyDown(UP_ARROW) || keyDown(DOWN_ARROW) || keyDown(LEFT_ARROW) || keyDown(RIGHT_ARROW) || started == true){    
      gamestate = 'playing';

      redGhost.position.x = 230;
      redGhost.position.y = 230;

      blueGhost.position.x = 310;
      blueGhost.position.y = 230;

      orangeGhost.position.x = 250;
      orangeGhost.position.y = 230;

      pinkGhost.position.x = 290;
      pinkGhost.position.y = 230;

      redGhost.velocityX = -4;
      blueGhost.velocityX = 4;
      orangeGhost.velocityX = -4;
      pinkGhost.velocityX = 4;
    }
  }

  for(var i = 0; i < blocks.length; i++){
    pacman.collide(blocks[i]);
    redGhost.collide(blocks[i]);
    blueGhost.collide(blocks[i]);
    orangeGhost.collide(blocks[i]);
    pinkGhost.collide(blocks[i]);
  }

  if (gamestate == 'playing'){

    if (keyDown(UP_ARROW) || pacmanMoveUp == true){
      pacman.velocityY = -5;
      pacman.changeAnimation('pacman1', pacmanUp);
      goingPacManY = 'up';
    }
    else if (keyDown(DOWN_ARROW) || pacmanMoveDown == true){
      pacman.velocityY = 5;
      pacman.changeAnimation('pacman', pacmanDown);
      goingPacManY = 'down';
    }
    else{
      pacman.velocityY = 0;
    }
    if (keyDown(LEFT_ARROW) || pacmanMoveLeft == true){
      pacman.velocityX = -5;
      pacman.changeAnimation('pacman2', pacmanLeft);
      goingPacManX = 'left'
    }
    else if (keyDown(RIGHT_ARROW || pacmanMoveRight == true)){
      pacman.velocityX = 5;
      pacman.changeAnimation('pacman3', pacmanRight);
      goingPacManX = 'right';
    }
    else{
      pacman.velocityX = 0;
    }

  // map1.mapUpdate();

  if(frameCount%5 == 0){
    redGhostMove(pacman.position.x, pacman.position.y, redGhost.position.x, redGhost.position.y);
    blueGhostMove(pacman.position.x, pacman.position.y, blueGhost.position.x, blueGhost.position.y);
    orangeGhostMove(pacman.position.x, pacman.position.y, orangeGhost.position.x, orangeGhost.position.y);
    pinkGhostMove(pacman.position.x, pacman.position.y, pinkGhost.position.x, pinkGhost.position.y);
  }

  if (scatter == true && scatterCount <= 75){

    if (frameCount%2 == 0){
      scatterCount++
    }
  }

  if (scatterCount >= 75){
    scatter = false;
  }

  if (frameCount%500 == 0){
    scatter = true;
    scatterCount = 0;
  }

    if (pacman.position.x > 540){
      pacman.position.x = 5;
    }
    if (pacman.position.x < 0){
      pacman.position.x = 535;
    }
    if (redGhost.position.x < 0){
      redGhost.position.x = 535;
    }
    if (redGhost.position.x > 540){
      redGhost.position.x = 5;
    }
    if (blueGhost.position.x < 0){
      blueGhost.position.x = 535;
    }
    if (blueGhost.position.x > 540){
      blueGhost.position.x = 5;
    }
    if (orangeGhost.position.x < 0){
      orangeGhost.position.x = 535;
    }
    if (orangeGhost.position.x > 540){
      orangeGhost.position.x = 5;
    }
    if (pinkGhost.position.x < 0){
      pinkGhost.position.x = 535;
    }
    if (pinkGhost.position.x > 540){
      pinkGhost.position.x = 5;
    }


    for(var i = 0; i < pointThings.length; i++){
      if(pacman.overlap(pointThings[i]) == true){
        addScore(i);
      }     
    }
  }

  drawSprites();

  if (gamestate == 'start'){
    if (frameCount % 10 >= 3){
      push();
      fill('white');
      textSize(30);
      text('Arrow Keys to Move and Start', 125, 100);
      pop();
    }
    
  }

  showScore();
  showTime();
  
  if (score >= 290){
    victory();
  }

  redGhost.collide(pacman, lose);
  blueGhost.collide(pacman, lose);
  orangeGhost.collide(pacman, lose);
  pinkGhost.collide(pacman, lose);

  if (gamestate == 'lost'){
    lose();
  }
  
  /*
  push();
  fill('white');
  text(Math.round(mouseX), 10, 15);
  text(Math.round(mouseY), 35, 15);
  pop();
  */
  
}

function addScore(sprite){
  score++
  pointThings[sprite].remove();
}

/*
function moveDown(){
  pacmanMoveDown = true;
  started = true;
}
function stopMoveDown(){
  pacmanMoveDown = false;
}
function moveLeft(){
  pacmanMoveLeft = true;
  started = true;
}
function stopMoveLeft(){
  pacmanMoveLeft = false;
}
function moveRight(){
  pacmanMoveRight = true;
  started = true;
}
function stopMoveRight(){
  pacmanMoveRight = false;
}
function moveUp(){
  pacmanMoveUp = true;
  started = true;
}
function stopMoveUp(){
  pacmanMoveUp = false;
}
*/

function redGhostMove(targetX, targetY, ghostX, ghostY){
  var mapGhostX = Math.round(ghostX/20 - 0.05);
  var mapGhostY = Math.round(ghostY/20 - 0.05);

  if (scatter == false){
    var mapTargetX = Math.round(targetX/20 - 0.05);
    var mapTargetY = Math.round(targetY/20 - 0.05);
  }
  else if (scatter == true){
    var mapTargetX = 1;
    var mapTargetY = 1;
  }

  /*
  if (goingRed == 'down'){
    mapGhostX = Math.round((ghostY - 10)/20 - 0.05);
  }
  if (goingRed == 'left'){
    mapGhostX = Math.round((ghostX - 10)/20 - 0.05);
  }
  if the area around it is not a wall then calculate the distance
  */

  var oneUp = dist(mapGhostX, mapGhostY - 1, mapTargetX, mapTargetY);
  var oneLeft = dist(mapGhostX - 1, mapGhostY, mapTargetX, mapTargetY);
  var oneDown = dist(mapGhostX, mapGhostY + 1, mapTargetX, mapTargetY);
  var oneRight = dist(mapGhostX + 1, mapGhostY, mapTargetX, mapTargetY);
  var oneUpWall = mapGhostY - 1;
  var oneLeftWall = mapGhostX - 1;
  var oneDownWall = mapGhostY + 1;
  var oneRightWall = mapGhostX + 1;

  /*
  find out which distance is the lowest then go in that direction 
  or calculate all the distances anyway then when comparing them check if the spot is a wall
  and make sure this function only runs when the ghost is at an intersection. So something like:
  
  if (in the world the ghosts position == the reference world I for intersection){
    then run this function to decide which way the ghost will go and use velocity to move the ghost
  }
  */

  if (map1.referenceWorld[mapGhostY][mapGhostX] == 'I'){

    redGhost.position.x = mapGhostX * 20 + 10;
    redGhost.position.y = mapGhostY * 20 + 10;

    if (map1.world[oneUpWall][mapGhostX] == '0'){
      oneUp = 1000;
    }
    if (map1.world[mapGhostY][oneLeftWall] == '0'){
      oneLeft = 1000;
    }
    if (map1.world[oneDownWall][mapGhostX] == '0'){
      oneDown = 1000;
    }
    if (map1.world[mapGhostY][oneRightWall] == '0'){
      oneRight = 1000;
    }

    if (goingRed == 'down'){
      oneUp = 1000;
    }
    if (goingRed == 'right'){
      oneLeft = 1000;
    }
    if (goingRed == 'up'){
      oneDown = 1000;
    }
    if (goingRed == 'left'){
      oneRight = 1000;
    }

    var smallest = Math.min(oneUp, oneLeft, oneRight, oneDown);
    // console.log(oneUp, oneLeft, oneDown, oneRight);
    
    if (smallest == oneUp){
      redGhost.velocityY = -4;
      redGhost.velocityX = 0;
      goingRed = 'up'
    }
    else if (smallest == oneLeft){
      redGhost.velocityX = -4;
      redGhost.velocityY = 0;
      goingRed = 'left';
    }
    else if (smallest == oneDown){
      redGhost.velocityY = 4;
      redGhost.velocityX = 0;
      goingRed = 'down';
    }
    else if (smallest == oneRight){
      redGhost.velocityX = 4;
      redGhost.velocityY = 0;
      goingRed = 'right';
    }
  }
}

function blueGhostMove(targetX, targetY, ghostX, ghostY){

  var mapGhostX = Math.round(ghostX/20 - 0.05);
  var mapGhostY = Math.round(ghostY/20 - 0.05);

  var mapTargetX = Math.round(targetX/20 - 0.05);
  var mapTargetY = Math.round(targetY/20 - 0.05);

  if (scatter == false){
    var blueTargetX = mapTargetX + mapTargetX - Math.round(redGhost.position.x/20 - 0.05);
    var blueTargetY = mapTargetY + mapTargetY - Math.round(redGhost.position.y/20 - 0.05);
  }
  else if (scatter == true){
    var blueTargetX = 27;
    var blueTargetY = 1;
  }

  /*
  blueTargetDraw.position.x = blueTargetX * 20 + 10;
  blueTargetDraw.position.y = blueTargetY * 20 + 10;
  blueTargetDraw.addAnimation('blue target', blueTarget1);
  blueTargetDraw.scale = 0.15;
  */

  var oneUp = dist(mapGhostX, mapGhostY - 1, blueTargetX, blueTargetY);
  var oneLeft = dist(mapGhostX - 1, mapGhostY, blueTargetX, blueTargetY);
  var oneDown = dist(mapGhostX, mapGhostY + 1, blueTargetX, blueTargetY);
  var oneRight = dist(mapGhostX + 1, mapGhostY, blueTargetX, blueTargetY);
  var oneUpWall = mapGhostY - 1;
  var oneLeftWall = mapGhostX - 1;
  var oneDownWall = mapGhostY + 1;
  var oneRightWall = mapGhostX + 1;

  if (map1.referenceWorld[mapGhostY][mapGhostX] == 'I'){

    blueGhost.position.x = mapGhostX * 20 + 10;
    blueGhost.position.y = mapGhostY * 20 + 10;

    if (map1.world[oneUpWall][mapGhostX] == '0'){
      oneUp = 1000;
    }
    if (map1.world[mapGhostY][oneLeftWall] == '0'){
      oneLeft = 1000;
    }
    if (map1.world[oneDownWall][mapGhostX] == '0'){
      oneDown = 1000;
    }
    if (map1.world[mapGhostY][oneRightWall] == '0'){
      oneRight = 1000;
    }

    if (goingBlue == 'down'){
      oneUp = 1000;
    }
    if (goingBlue == 'right'){
      oneLeft = 1000;
    }
    if (goingBlue == 'up'){
      oneDown = 1000;
    }
    if (goingBlue == 'left'){
      oneRight = 1000;
    }

    var smallest = Math.min(oneUp, oneLeft, oneRight, oneDown);
    
    if (smallest == oneUp){
      blueGhost.velocityY = -4;
      blueGhost.velocityX = 0;
      goingBlue = 'up'
    }
    else if (smallest == oneLeft){
      blueGhost.velocityX = -4;
      blueGhost.velocityY = 0;
      goingBlue = 'left';
    }
    else if (smallest == oneDown){
      blueGhost.velocityY = 4;
      blueGhost.velocityX = 0;
      goingBlue = 'down';
    }
    else if (smallest == oneRight){
      blueGhost.velocityX = 4;
      blueGhost.velocityY = 0;
      goingBlue = 'right';
    }
  }
}

function pinkGhostMove(targetX, targetY, ghostX, ghostY){

  var mapGhostX = Math.round(ghostX/20 - 0.05);
  var mapGhostY = Math.round(ghostY/20 - 0.05);

  var mapTargetX = Math.round(targetX/20 - 0.05);
  var mapTargetY = Math.round(targetY/20 - 0.05);

  mapTargetX = 2;
  mapTargetY = 2;

  if (scatter == false){
    var pinkTargetX = random(27);
    var pinkTargetY = random(30);
  }
  else if (scatter == true){
    var pinkTargetX = 27;
    var pinkTargetY = 30;
  }

  /*
  pinkTargetDraw.position.x = pinkTargetX * 20 + 10;
  pinkTargetDraw.position.y = pinkTargetY * 20 + 10;
  pinkTargetDraw.addAnimation('pink target', pinkTarget1);
  pinkTargetDraw.scale = 0.05;
  */
  

  var oneUp = dist(mapGhostX, mapGhostY - 1, pinkTargetX, pinkTargetY);
  var oneLeft = dist(mapGhostX - 1, mapGhostY, pinkTargetX, pinkTargetY);
  var oneDown = dist(mapGhostX, mapGhostY + 1, pinkTargetX, pinkTargetY);
  var oneRight = dist(mapGhostX + 1, mapGhostY, pinkTargetX, pinkTargetY);
  var oneUpWall = mapGhostY - 1;
  var oneLeftWall = mapGhostX - 1;
  var oneDownWall = mapGhostY + 1;
  var oneRightWall = mapGhostX + 1;

  if (map1.referenceWorld[mapGhostY][mapGhostX] == 'I'){

    pinkGhost.position.x = mapGhostX * 20 + 10;
    pinkGhost.position.y = mapGhostY * 20 + 10;

    if (map1.world[oneUpWall][mapGhostX] == '0'){
      oneUp = 1000;
    }
    if (map1.world[mapGhostY][oneLeftWall] == '0'){
      oneLeft = 1000;
    }
    if (map1.world[oneDownWall][mapGhostX] == '0'){
      oneDown = 1000;
    }
    if (map1.world[mapGhostY][oneRightWall] == '0'){
      oneRight = 1000;
    }

    if (goingPink == 'down'){
      oneUp = 1000;
    }
    if (goingPink == 'right'){
      oneLeft = 1000;
    }
    if (goingPink == 'up'){
      oneDown = 1000;
    }
    if (goingPink == 'left'){
      oneRight = 1000;
    }

    var smallest = Math.min(oneUp, oneLeft, oneRight, oneDown);
    
    if (smallest == oneUp){
      pinkGhost.velocityY = -4;
      pinkGhost.velocityX = 0;
      goingPink = 'up'
    }
    else if (smallest == oneLeft){
      pinkGhost.velocityX = -4;
      pinkGhost.velocityY = 0;
      goingPink = 'left';
    }
    else if (smallest == oneDown){
      pinkGhost.velocityY = 4;
      pinkGhost.velocityX = 0;
      goingPink = 'down';
    }
    else if (smallest == oneRight){
      pinkGhost.velocityX = 4;
      pinkGhost.velocityY = 0;
      goingPink = 'right';
    }
  }
}

function orangeGhostMove(targetX, targetY, ghostX, ghostY){

  var mapGhostX = Math.round(ghostX/20 - 0.05);
  var mapGhostY = Math.round(ghostY/20 - 0.05);

  var mapTargetX = Math.round(targetX/20 - 0.05);
  var mapTargetY = Math.round(targetY/20 - 0.05);

  if (scatter == false){
    if (goingPacManY = 'up'){
      orangeTargetY = mapTargetY - 5;
      // console.log(frameCount);
    }
    if (goingPacManX = 'left'){
      orangeTargetX = mapTargetX - 5;
    }
    if (goingPacManY = 'down'){
      orangeTargetY = mapTargetY + 5;
    }
    if (goingPacManX = 'right'){
      orangeTargetX = mapTargetX + 5;
    }
  }
  else if (scatter == true){
    orangeTargetX = 1;
    orangeTargetY = 30;
  }

  /*
  orangeTargetDraw.position.x = orangeTargetX * 20 + 10;
  orangeTargetDraw.position.y = orangeTargetY * 20 + 10;
  orangeTargetDraw.addAnimation('orange target', orangeTarget1);
  orangeTargetDraw.scale = 0.05;
  */

  var oneUp = dist(mapGhostX, mapGhostY - 1, orangeTargetX, orangeTargetY);
  var oneLeft = dist(mapGhostX - 1, mapGhostY, orangeTargetX, orangeTargetY);
  var oneDown = dist(mapGhostX, mapGhostY + 1, orangeTargetX, orangeTargetY);
  var oneRight = dist(mapGhostX + 1, mapGhostY, orangeTargetX, orangeTargetY);
  var oneUpWall = mapGhostY - 1;
  var oneLeftWall = mapGhostX - 1;
  var oneDownWall = mapGhostY + 1;
  var oneRightWall = mapGhostX + 1;

  if (map1.referenceWorld[mapGhostY][mapGhostX] == 'I'){

    orangeGhost.position.x = mapGhostX * 20 + 10;
    orangeGhost.position.y = mapGhostY * 20 + 10;

    if (map1.world[oneUpWall][mapGhostX] == '0'){
      oneUp = 1000;
    }
    if (map1.world[mapGhostY][oneLeftWall] == '0'){
      oneLeft = 1000;
    }
    if (map1.world[oneDownWall][mapGhostX] == '0'){
      oneDown = 1000;
    }
    if (map1.world[mapGhostY][oneRightWall] == '0'){
      oneRight = 1000;
    }

    if (goingOrange == 'down'){
      oneUp = 1000;
    }
    if (goingOrange == 'right'){
      oneLeft = 1000;
    }
    if (goingOrange == 'up'){
      oneDown = 1000;
    }
    if (goingOrange == 'left'){
      oneRight = 1000;
    }

    var smallest = Math.min(oneUp, oneLeft, oneRight, oneDown);
    
    if (smallest == oneUp){
      orangeGhost.velocityY = -4;
      orangeGhost.velocityX = 0;
      goingOrange = 'up'
    }
    else if (smallest == oneLeft){
      orangeGhost.velocityX = -4;
      orangeGhost.velocityY = 0;
      goingOrange = 'left';
    }
    else if (smallest == oneDown){
      orangeGhost.velocityY = 4;
      orangeGhost.velocityX = 0;
      goingOrange = 'down';
    }
    else if (smallest == oneRight){
      orangeGhost.velocityX = 4;
      orangeGhost.velocityY = 0;
      goingOrange = 'right';
    }
  }
}

function showScore(){
  push();
  textSize(30);
  fill('white');
  text('Score:', 20, 205);
  textSize(25);
  text(score, 20, 240);
  pop();
}

function showTime(){
  if (gamestate == 'start' || gamestate == 'playing'){
    push();
    textSize(30);
    fill('white');
    text('Time:', 430, 205);
    textSize(25);
    text(frameCount, 430, 240);
    pop();
  }
}

function victory(){
  //if score >= 290
  gamestate = 'won';

  pacman.velocityX = 0;
  pacman.velocityY = 0;
  redGhost.velocityX = 0;
  redGhost.velocityY = 0;
  blueGhost.velocityX = 0;
  blueGhost.velocityY = 0;
  orangeGhost.velocityX = 0;
  orangeGhost.velocityY = 0;
  pinkGhost.velocityX = 0;
  pinkGhost.velocityY = 0;

  push();
  fill('green');
  textSize(55);
  text('You Won!', 175, 200);
  pop();
}

function lose(){

  gamestate = 'lost';

  pacman.velocityX = 0;
  pacman.velocityY = 0;
  redGhost.velocityX = 0;
  redGhost.velocityY = 0;
  blueGhost.velocityX = 0;
  blueGhost.velocityY = 0;
  orangeGhost.velocityX = 0;
  orangeGhost.velocityY = 0;
  pinkGhost.velocityX = 0;
  pinkGhost.velocityY = 0;

  buttonReset.show();

  push();
  fill('red');
  textSize(55);
  text('You Lost!', 175, 200);
  pop();
}

function reset(){
  location.reload();
}

// 9.502, 7.304, 9.101, 17.086

/*
if redghost is above and to the left of pacman so pacmamx > ghostx and pacmany > ghosty
pacmanx - redghostx = positive
targetx = pacmanx + pacmanx - ghostx
*/

/*
for (var i = 0; i < array.length; i++){
  if (array[value i or smth] == 'wall'){
    walls.push(new Sprite(wall stuff))
  }
  if (array[value i or smth] == 'dot thing'){
    dots.push(new Sprite(dots))
  }
  if (array[value i or smth] == 'special dot thing'){
    dotty.push(new Sprite or smth)
  }
}

array[
  wall, wall, wall, wall, wall,
  wall, dot, dot, wall, wall,

]
*/
