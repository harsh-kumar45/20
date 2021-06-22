var gameState = "serve";
var PLAY = 1;
var END = 0;


var player,car,car1,car2,car3;
function preload() {
    //load the images here
}

function setup(){
    createCanvas(800,windowHeight);
  

}

function draw() {

    background(0);
    if(gameState === "serve"){
        fill("grey")
            text("press P  to play",width/2.5,height/5);
      }
    
    
    if(keyDown("p")&& gameState === "serve"){
        player = createSprite(width/2,height/1);
      gameState = PLAY;
    }

    if(gameState === PLAY){
background.velocityX = 3;

//if(background.y > height/2 ){
//background.y = width/2;
//}


 car = createSprite(width/3,height/1)

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
