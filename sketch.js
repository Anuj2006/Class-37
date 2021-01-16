 var database;
var gameState=0;
var playerCount;
var form,game,player;
var allPlayer;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount===4){
     gameState=1
  }
  if(gameState===1){
    game.play();
  }
  
  
}


