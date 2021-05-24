

var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
wall = createSprite(1200,200,thickness,height/2)
  speed=random(223,321)
  weight=random(30,52)
  thickness=ranom(22,83)
  
}

function draw() {
  background(255,255,255);  
 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor="green"
    }
    
  }


  drawSprites();

  }
  