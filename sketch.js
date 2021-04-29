var kletka;
var madworld;
var nurnberg;
var saddest;

///

var amp;

let play;
let glitch

///

//let kletkavideo
let madvideo
let nurnvideo
let sadvideo

//////////////////////////////////////


function preload() {
  kletka = loadSound('kletka.mp3');
  madworld = loadSound('madworld.mp3');
  nurnberg = loadSound('nurnberg.mp3');
  saddest = loadSound('saddest.mp3');
  
  play = loadImage('playimage.jpg');
  glitch = loadImage('glitch.jpg');
  
  ///kletkavideo
  test = loadImage('words.jpg');
  
  ///madvideo
  
  
  ///nurnvideo
  
  
  ///sadvideo
  
  
}


//////////////////////////////////////


function setup() {
  createCanvas(600, 400);
  
  kletka.setVolume(0.11);
  madworld.setVolume(0.18);
  nurnberg.setVolume(0.2);
  saddest.setVolume(0.13);

  background(0);
  
  buttonK = createButton("play: Клетка");
  buttonK.mousePressed(togglePlayingK);
  
  buttonM = createButton("play: Mad World");
  buttonM.mousePressed(togglePlayingM);
  
  buttonN = createButton("play: Biessensoŭnasć");
  buttonN.mousePressed(togglePlayingN);
  
  buttonS = createButton("play: Saddest Smile");
  buttonS.mousePressed(togglePlayingS);
  
/////
  
  image(play, 0,0, 600,400);
  tint(255, 20);
  image(glitch, 0,0, 600,400);

  
}


///////////////////////////////////////


function draw() {
  //background(220);

}


//////////////////////////////////////


//the function that is triggered each time the button is pressed! It "loops" and "pauses" our song. 
function togglePlayingK() {
  if (!kletka.isPlaying()) {
    kletka.loop();
  
    //kletkavideo();
    
    buttonK.html("stop: Клетка");
  } else {
    kletka.pause();
    buttonK.html("play: Клетка");
  }
}

function togglePlayingM() {
  if (!madworld.isPlaying()) {
    madworld.loop();
    buttonM.html("stop: Mad World");
  } else {
    madworld.pause();
    buttonM.html("play: Mad World");
  }
}

function togglePlayingN() {
  if (!nurnberg.isPlaying()) {
    nurnberg.loop();
    
    buttonN.html("stop: Biessensoŭnasć");
  } else {
    nurnberg.pause();
    buttonN.html("play: Biessensoŭnasć");
  }
}

function togglePlayingS() {
  if (!saddest.isPlaying()) {
    saddest.loop();
    buttonS.html("stop: Saddest Smile");
  } else {
    saddest.pause();
    buttonS.html("play: Saddest Smile");
  }
}

// function(kletkavideo) {
  
//   image(test, 0,0, 600,400);

// }