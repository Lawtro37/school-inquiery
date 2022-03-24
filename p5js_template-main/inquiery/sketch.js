
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = "play";

var player, playerX = 200, playerY = 340, playerImg, playerSpeed = 10;
var randomPolygon;
var lastKey = "none";

function playercontroler()
{
	//slide

	if(keyIsDown(SHIFT)) //fast
	{
		if(keyIsDown(UP_ARROW))
		{
			playerY -= playerSpeed + 5;
			lastKey = "up"
		}
	
		if(keyIsDown(DOWN_ARROW))
		{
			playerY -= playerSpeed + 5;
			lastKey = "down"
		}

		if(keyIsDown(LEFT_ARROW))
		{
			playerX -= playerSpeed + 5;
			lastKey = "left"
		}
	
		if(keyIsDown(RIGHT_ARROW))
		{
			playerX -= playerSpeed + 5;
			lastkey = "right"
		}

		//dash

		if(keyIsDown("SPACE"))
		{
			playerX -= playerSpeed + 20;
		}
	}
	else //not fast
	{
		if(keyIsDown(UP_ARROW))
		{
			playerY -= playerSpeed;
			lastKey = "up"
		}
		
		if(keyIsDown(DOWN_ARROW))
		{
			playerY += playerSpeed;
			lastKey = "down"
		}

		if(keyIsDown(LEFT_ARROW))
		{
			playerX -= playerSpeed;
			lastKey = "left"
		}
		
		if(keyIsDown(RIGHT_ARROW))
		{
			playerX += playerSpeed;
			lastKey = "right"
		}
	}
	


}

function slide()
{
	if(lastKey === "up")
	{
		for()
	}
}

function preload()
{
	playerImg = loadImage("./assets/player.png");
}

function setup() {

	createCanvas(windowWidth, windowHeight-5);

	engine = Engine.create(); 
	world = engine.world;

	//Create the Bodies.


	Engine.run(engine);
  
}


function draw() 
{
	rectMode(CENTER);
	background(20);


	
	//resizeCanvas(windowWidth, windowHeight+5);
	
	if(gameState === "play")
	{
	drawSprites();
	
	push();
	fill("BLUE");
	player = rect(playerX, playerY, 50, 50);
	image(playerImg, playerX-25, playerY-25, 50, 50);
	pop();

	playercontroler();
	}
	else// if(gameState === "")
	{

	}
}



