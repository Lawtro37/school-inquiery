var player, playerX = 400, playerY
var gameState = "start"
var houseX = 300, houseY = playerY, floudX = -250

function loading()
{

}

function peload()
{
  
}

function setup() {
  fullscreen();
  createCanvas(windowWidth, windowHeight-1);
  playerY = windowHeight/2
}

function draw() 
{
  rectMode(CENTER)
  
  background("Lime");
  player = rect(playerX ,playerY, 50, 50);
  //playerControler(5)
  
  if(gameState === "start")
  {
    push();
    textSize(50);
    text("click to start", windowWidth/2-100, windowHeight/2+15)
    pop();

    rect(300, playerY, 250, 250)

    if (mouseIsPressed === true) 
    {
      gameState = "play"
    }

    

  }

  if(gameState === "play")
  {

    rect(houseX, windowHeight/2, 250, 250)
    houseX -= 5

    push();
    fill("blue")
    rect(floudX, 400, 500, 1000)
    pop();

    if(floudX < 20)
    {
      floudX += 1
    }

    playerControler(5)

    playerX -= 0.2;

  }

  
}

function playerControler(speed)
{
  if(keyIsDown(UP_ARROW))
  {
    playerY -= speed
  }

  if(keyIsDown(DOWN_ARROW))
  {
    playerY += speed
  }
  
  if(keyIsDown(LEFT_ARROW))
  {
    playerX -= speed/5
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    playerX += speed/5
  }


}

//function summonObsticles(tipe)