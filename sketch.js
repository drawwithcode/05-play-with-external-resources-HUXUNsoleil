var myImage;
var mySong;
var analyzer;

function preload() {
  myImage = loadImage('./assets/horrible.png');
  mySong = loadSound('./assets/Horror Demonic Possession 01.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(myImage, 0, 0, windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  image(myImage, 0, 0, windowWidth, windowHeight);
  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 5, width / 2);
  for (var a = 0; a < 100; a++) {

    var getx = random(0, width);
    var gety = random(0, height);
    var col = get(getx, gety);
    fill(col);
    noStroke();
    ellipse(getx, gety, volume);
  }


  //background(0,255,0);
  if (mouseX > width / 2) {

    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  }
  ellipse(mouseX, mouseY, volume);
}
