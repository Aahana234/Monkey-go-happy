
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 var survivalTime =0;
}



function setup() { 
 createCanvas(400,400); 
  
    survivalTime=0;
  
  
  //creating monkey
 monkey = createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1; 
  
 ground = createSprite(400,350,800,10); 
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
 score = 0; 
  
  
  
}


function draw() {

 background("light blue"); 
  
 if(ground.x<0){
  ground.x = ground.width/2;  
    } 
  
 if(keyDown("space")){
 monkey.velocityY = -12;   
    } 
 monkey.velocityY = monkey.velocityY + 0.8; 
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  
 drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score,500,50);
  
  if(obstaclesGroup.isTouching(monkey)){
     ground.velocityX = 0;
     monkey.velocityY = 0;
    
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
    
     }
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  
}

function spawnFood (){
  if(frameCount % 80 === 0){
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage);
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.scale = 0.1;
    
    //assigning lifetime to the variable
    banana.lifetime = 300;
    
    //adjust the depth
    monkey.depth = banana.depth + 1;
    
    //adding each banana to the group
    FoodGroup.add(banana);
    
     }
}

function spawnObstacles () {
 if(frameCount % 300 === 0){
    obstacles = createSprite(500,320,10,40);
    obstacles.velocityX = -6;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.10;
   
   //assigning lifetime to the variable
   obstacles.lifetime = 300;
   
   //adding each obstacles to the group
   obstaclesGroup.add(obstacles);
   
   
    } 
   
}


