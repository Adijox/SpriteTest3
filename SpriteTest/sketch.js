var img;
var spritescroll = 0;
var maxscroll;
var sound1;
var time = 0;
function preload() {
    img = loadImage("spritesheet.png");
    sound1 = loadSound("music.mp3");
}
setInterval(spriteClock, 150);
function setup() {
    createCanvas(400, 400);
    sound1.setVolume(0.1);
    imageMode(CENTER);
    maxscroll = 108;
     sound1.play();
}

function draw() {
    print(time);
  
    background(51);
    if(keyIsDown(83)) {
        noSmooth();
        image(img, 200, 200, 31, 65, spritescroll, 0, 31, 43);
    
    }
    if(keyIsDown(81)) {
        noSmooth();
        image(img, 200, 200, 31, 65, spritescroll, 49, 31, 43);
      
    }
    if(keyIsDown(68)) {
        noSmooth();
        image(img, 200, 200, 31, 65, spritescroll, 96, 31, 43);
    }
    if(keyIsDown(90)) {
        
    }
    if(keyIsDown(32)) {
        maxscroll = 221;
    }
}
function spriteClock() {
    spritescroll += 32;
    if(spritescroll > maxscroll) {
        spritescroll = 0;
        time += 1;
}
}