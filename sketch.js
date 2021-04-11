//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg1,dogImg2;
function preload()
{
	//load images here
  dogImg1=loadImage("images/dogImg.png")
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg1);
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
  
}


function draw() {  
background(46,139,87)
if(keyWentDown("UP_ARROW")){
  writeStock(foodS);
  dog.addImage(dogImg2);
}
  drawSprites();
  fill("black");
  stroke(" red");
  textSize(25)
  text("Food Remaining :"+foodS,170,80);
  text("Press the up arrow key to feed your Dog",10,20)


  //add styles here

}

function readstock(data){
foodS=data.val();


}
function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1;
}
database.ref('/').update({
  Food:x
})
}



