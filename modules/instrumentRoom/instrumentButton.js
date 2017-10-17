var sineOsc, triangleOsc, sawOsc, squareOsc;
var sineInstrumentPlaying = false,
    triangleInstrumentPlaying = false;
    sawInstrumentPlaying = false,
    squareInstrumentPlaying = false;
var sineMapX, triangleMapY, sawMapX, squareMapY;
var sineMapXWebcam, triangleMapYWebcam, sawMapXWebcam, squareMapYWebcam;



function InstrumentButton(x, y, w, h, string) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.string = string;
  var backgroundColor = color(0);

  this.display = function() {
    stroke(150);
    fill(backgroundColor);
    rect(this.x, this.y, this.width, this.height);
    noStroke();
    fill(255);
    text(this.string, this.x+this.width - 30, this.y+this.height/2);
  }

  this.sineInstrumentRoomSetup = function(type, freq) {
    this.type = type;
    this.freq = freq;

    sineOsc = new p5.Oscillator();
    sineOsc.setType(this.type);
    sineOsc.freq(this.freq);
    sineOsc.amp(0);
    sineOsc.start();
  }

  this.sineInstrumentRoomExecute = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.height && mouseY > this.y) {
      if(!sineInstrumentPlaying) {
        // ramp amplitude to 0.5 over 0.1 seconds
        sineOsc.amp(0.5, 0.05);
        sineInstrumentPlaying = true;
        backgroundColor = color(0,255,255);
      } else {
        // ramp amplitude to 0 over 0.5 seconds
        sineOsc.amp(0, 0.5);
        sineInstrumentPlaying = false;
        backgroundColor = color(0);
      }
    }
  }

  this.sawInstrumentRoomSetup = function(type, freq) {
    this.type = type;
    this.freq = freq;

    sawOsc = new p5.Oscillator();
    sawOsc.setType(this.type);
    sawOsc.freq(this.freq);
    sawOsc.amp(0);
    sawOsc.start();
  }

  this.sawInstrumentRoomExecute = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.height && mouseY > this.y) {
      if(!sawInstrumentPlaying) {
        // ramp amplitude to 0.5 over 0.1 seconds
        sawOsc.amp(0.5, 0.05);
        sawInstrumentPlaying = true;
        backgroundColor = color(0,255,255);
      } else {
        // ramp amplitude to 0 over 0.5 seconds
        sawOsc.amp(0, 0.5);
        sawInstrumentPlaying = false;
        backgroundColor = color(0);
      }
    }
  }

  this.triangleInstrumentRoomSetup = function(type, freq) {
    this.type = type;
    this.freq = freq;

    triangleOsc = new p5.Oscillator();
    triangleOsc.setType(this.type);
    triangleOsc.freq(this.freq);
    triangleOsc.amp(0);
    triangleOsc.start();
  }

  this.triangleInstrumentRoomExecute = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.height && mouseY > this.y) {
      if(!triangleInstrumentPlaying) {
        // ramp amplitude to 0.5 over 0.1 seconds
        triangleOsc.amp(0.5, 0.05);
        triangleInstrumentPlaying = true;
        backgroundColor = color(0,255,255);
      } else {
        // ramp amplitude to 0 over 0.5 seconds
        triangleOsc.amp(0, 0.5);
        triangleInstrumentPlaying = false;
        backgroundColor = color(0);
      }
    }
  }

  this.squareInstrumentRoomSetup = function(type, freq) {
    this.type = type;
    this.freq = freq;

    squareOsc = new p5.Oscillator();
    squareOsc.setType(this.type);
    squareOsc.freq(this.freq);
    squareOsc.amp(0);
    squareOsc.start();
  }

  this.squareInstrumentRoomExecute = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.height && mouseY > this.y) {
      if(!squareInstrumentPlaying) {
        // ramp amplitude to 0.5 over 0.1 seconds
        squareOsc.amp(0.5, 0.05);
        squareInstrumentPlaying = true;
        backgroundColor = color(0,255,255);
      } else {
        // ramp amplitude to 0 over 0.5 seconds
        squareOsc.amp(0, 0.5);
        squareInstrumentPlaying = false;
        backgroundColor = color(0);
      }
    }
  }



  this.mouseControlExecute = function() {
    if(webcamVisible === false && mouseX > mouseControlWin.x && mouseX < mouseControlWin.x + mouseControlWin.width && mouseY > mouseControlWin.y && mouseY < mouseControlWin.y + mouseControlWin.height) {
      sineMapX = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 440, 1440);
      sineOsc.freq(sineMapX);

      triangleMapY = map(mouseY, mouseControlWin.y, mouseControlWin.y + mouseControlWin.height, 1440, 440);
      triangleOsc.freq(triangleMapY);

      sawMapX = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 440, 1440);
      sawOsc.freq(sawMapX);

      squareMapY = map(mouseY, mouseControlWin.y, mouseControlWin.y + mouseControlWin.height, 1440, 440);
      squareOsc.freq(squareMapY);
    }
  }

  this.webcamControlExecute = function() {
    if(globalFistPos && webcamVisible === true) {
      sineMapXWebcam = map(globalFistPos[0], 50, 600, 440, 1440);
      sineOsc.freq(sineMapXWebcam);

      triangleMapYWebcam = map(globalFistPos[1], 400, 50, 1440, 440);
      triangleOsc.freq(triangleMapYWebcam);

      sawMapXWebcam = map(globalFistPos[0], 50, 600, 440, 1440);
      sawOsc.freq(sawMapXWebcam);

      squareMapYWebcam = map(globalFistPos[1], 400, 50, 1440, 440);
      squareOsc.freq(squareMapYWebcam);
    }
  }

  this.killAll = function() {
    sineInstrumentPlaying = false;
    sineOsc.amp(0, 0.5);
    triangleInstrumentPlaying = false;
    triangleOsc.amp(0, 0.5);
    sawInstrumentPlaying = false;
    sawOsc.amp(0, 0.5);
    squareInstrumentPlaying = false;
    squareOsc.amp(0, 0.5);
    backgroundColor = color(0);
  }

}
