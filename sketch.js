var wall,car

var speed,weight

function setup() {
  createCanvas(800,400);
  car=createSprite(60, 200, 20, 20);
  car.shapeColor="white"
  wall = createSprite (770,200,20,100)
  wall.shapeColor="brown"
  
  var weight = random(400,1500)
  var speed = random(55,90)
  car.velocityX=speed
}

function draw() {
  background(0);  
 
  if ( wall.x - car.x < wall.width/2 + car.width/2)
    {
     
      car.velocityX=0
    
      var deformation=0.5*speed*weight*speed/22500
      if(deformation<80){
        car.shapeColor="green"
      }
      if(deformation>80||deformation<180){
     car.shapeColor="yellow"
      }
      if(deformation>180){
        car.shapeColor="red"
      }
    }
  
  
  drawSprites();
}


