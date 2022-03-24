var player, playerX = 400, playerY, playerPushBack = 0.2
var gameState = "start"
var houseX = 300, houseY = playerY, floudX = -250, floudWidth = 500
var funFacts = ["Fun fact: this is a fun fact", "fun fact: Between 2000 and 2012, natural disasters caused $1.7 trillion in damage and affected 2.9 billion people.", "fun fact: 2012 marked the third consecutive year of worldwide natural disaster damage exceeding $100 billion. 2011 reached a record high of $371 billion.", "fun fact: Worldwide in 2011, there were 154 floods, 16 droughts, and 15 cases of extreme temperature.", "fun fact: Over 1/2 of the victims of both Hurricane Katrina and Hurricane Sandy were senior citizens over the age of 65. ", "fun fact: Floods are the most widespread natural disaster aside from wildfires. 90% of all US natural disasters declared by the president involve some sort of flooding.", "fun fact: Earthquakes are disasters that cause associated destruction of man-made structures and instigate other natural disasters such as tsunamis, avalanches, and landslides.", "fun fact: In 2012 there were 905 natural catastrophes worldwide including severe storms, droughts, tornadoes, earthquakes, floods, hail storms, typhoons, wildfires, and ciclones.", "fun fact: Nearly 50% of the fatalities caused by natural disasters in 2012 were due to hydrological events like flooding or mass movements.", "fun fact: “Hurricanes” are large, spiraling tropical storms that can pack wind speeds of over 160 miles an hour and unleash more than 2.4 trillion gallons of rain a day. Hurricanes can be coupled with storm surges and severe flooding.", "fun fact: Damage paths of tornadoes can be in excess of one mile wide and 50 miles long.", "fun fact: Landslides often accompany earthquakes, floods, storm surges, hurricanes, wildfires, or volcanic activity. They are often more damaging and deadly than the triggering event."]
var funfact
var restartImg, debres1, houseImg, runImg
var obsticles,  obsticlesY, obsticlesX, obsticlesSpeed = 2
var score = 0, highScore = 0, isHighScore = true


function loading()
{
  text("Losding assetst...", 10, 20);
  restartImg = loadImage('./assets/restart.png');
  debres1 = loadImage('./assets/fier.gif');
  houseImg = loadImage('./assets/run1.gif');
  runImg = loadImage('./assets/house.png');
  text("done!", 10, 20);

}


function setup() {
  fullscreen();
  createCanvas(windowWidth, windowHeight-1);
  playerY = windowHeight/2
  cooseFunFacts();
  obsticlesY = Math.round(random(50, windowHeight-50));
  obsticlesX = windowWidth + 50;
  //image(restartImg, 200, 200, 200, 200);

  loading();
  
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
    text("click to start", windowWidth/2-100, windowHeight/2+15);
    pop();

    rect(300, playerY, 250, 250);
    

    if (mouseIsPressed === true) 
    {
      gameState = "play"
      
    }

    
    
    
    

  }

  if(gameState === "play")
  { 
    push();
    fill("red")
    obsticles = rect(obsticlesX, obsticlesY, 100, 100);
    obsticlesX -= obsticlesSpeed
    if(obsticlesX <= 0)
    {
      obsticlesY = Math.round(random(10, windowHeight));
      obsticlesX = windowWidth + 10;
    }
    pop();

    rect(houseX, windowHeight/2, 250, 250)
    houseX -= 5

    push();
    fill("blue")
    rect(floudX, 400, 500, 1000)
    pop();

    score += 1
    

    if(obsticlesSpeed < 25)
    {
      obsticlesSpeed += score/100000
    }
    


    push();
    textSize(20);
    text("score: " + score, 10, 20);
    pop();



    if(floudX < 20)
    {
      floudX += 1
    }

    playerControler(5)
    if(playerPushBack < 2)
    {
    playerPushBack += score/10000000
    }
    playerX -= playerPushBack;


    if (playerX > windowWidth)
    {
       playerX -= 5
    }

    if(playerY <= 0)
    {
      playerY += 5
    }

    if(playerY > windowHeight)
    {
      playerY -= 5
    }


    if(playerX <= 280)
    {
      gameState = "lose"
    }

    if(playerX > obsticlesX-50
      && playerX < obsticlesX+50
      && playerY < obsticlesY+50
      && playerY > obsticlesY-50)
      {
        gameState = "lose"
      }





  }
  if(gameState === "lose")
  {
    push();
    fill("blue")
    rect(floudX, 400, floudWidth, 1000)
    pop();
    floudWidth += 25
    playerX -= 5

    if(score > highScore)
  {
    highScore = score
    isHighScore = true
    
    
  }

    push();

    textSize(50);
    text("you lost!", windowWidth/2-100, windowHeight/2-100)

    textSize(15);
    //text("high score: " + highScore, windowWidth/2-50, windowHeight/2-150)
    text("your score: " + score, windowWidth/2-50, windowHeight/2-170);

    if(isHighScore === true)
    {
      text("new high score!", windowWidth/2-50, windowHeight/2-150)
    }
    else  
    {
      text("high score: " + highScore, windowWidth/2-50, windowHeight/2-150)
    }

    text(funfact, 50, windowHeight/2+100)

    pop();

    if(mouseIsPressed === true) 
    {
      reset();
      gameState = "play"
      score = 0
      isHighScore = false
    }
    


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
    playerX -= speed/5+playerPushBack
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    playerX += speed/5+playerPushBack
  }


}

function cooseFunFacts()
{
  funfact = random(funFacts);

}

function reset()
{
  floudWidth = 500;
  playerX = 400
  playerY = windowHeight/2
  floudX = -250
  playerPushBack = 0.2
  obsticlesSpeed = 2

  cooseFunFacts();

  

  obsticlesY = Math.round(random(50, windowHeight-50));
  obsticlesX = windowWidth + 50;

  rect(houseX, windowHeight/2, 250, 250)
  houseX = 300

  push();
  fill("blue")
  rect(floudX, 400, 500, 1000)
  pop();
}






