var HotAirBallon1,HotAirBallon2,HotAirBallon3,HotAirBallon4





function preload() {

HotAirBallon=loadimage("Images/Hot Air Ballon-01.png");
HotAirBallon=loadimage("Images/Hot Air Ballon-02.png");
HotAirBallon=loadimage("Images/Hot Air Ballon-03.png");
HotAirBallon=loadimage("Images/Hot Air Ballon-04.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function draw() {
  background(255,255,255);  
  drawSprites();
}