var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
wall=createSprite(1200, 200,thickness, height/2);
Color(80,80);
 

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
}

function draw() {
  background(0,0,0); 
  



  
  hasCollided();
  drawSprites();
}


function hasCollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
   return false;
}