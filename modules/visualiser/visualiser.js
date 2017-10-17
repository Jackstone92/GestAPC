var fft;
var analyzer;
var spectrum;
var waveform;
var strobing = false;

var colourList = [];

//Audio visualiser to display spectrum and waveform of audio output//
function Visualiser(x, y, w, h) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;


  this.display = function() {
    noFill();
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  this.isOn = function() { //function that returns a boolean//
    for(var i=0; i<rows; i++) {
      for(var j=0; j<cols; j++) {
        while(samples[i][j].on) {
          return true;
        }
      }
    }
    while(sineInstrumentPlaying === true || triangleInstrumentPlaying === true || sawInstrumentPlaying === true || squareInstrumentPlaying === true) {
      return true;
    }
  }


  this.visualiserSetup = function() {
    fft = new p5.FFT();

    //add 255 elements to colourList//
    for(var i=0; i<255; i++) {
      append(colourList, i);
    }
  }

  //display spectrum and waveform//
  this.visualiserDisplay = function() {

    spectrum = fft.analyze();

    if(this.isOn()) {
      if(clicked === true) {
        fill(pickAColour(), pickAColour(), pickAColour());
      } else {
        fill(0, 255, 0);
      }
    } else {
      noFill();
    }

    var i=0;
    while(i<spectrum.length) {
      var x = map(i, 0, spectrum.length, this.x, width);
      var h = -this.height + map(spectrum[i], 0, 255, this.height, this.y);
      rect(x, this.height, width / spectrum.length, h);
      i++;
    }

    waveform = fft.waveform();
    noFill();
    beginShape();
    if(this.isOn()) {
      stroke(255, 0, 0);
      strokeWeight(1);
    } else {
      noStroke();
    }
    var i=0;
    while(i<waveform.length) {
      var x = map(i, 0, waveform.length, this.x, width);
      var y = map(waveform[i], -1, 1, 0, this.height/3);
      vertex(x,y);
      i++;
    }
    endShape();
  }

  this.visualiserSetupLeft = function() {
    analyzer = new p5.Amplitude();
    for(var i=0; i<soundFiles.length; i++) {
      analyzer.setInput(soundFiles[i]);
    }

    fft = new p5.FFT();
  }

  //display amplitude for left//
  this.visualiserDisplayLeft = function() {
    //determine root mean square of amplitude values//
    var rms = analyzer.getLevel();

    if(this.isOn() || recordingStates[0] === 2 || recordingStates[1] === 2 || recordingStates[2] === 2 || recordingStates[3] === 2) {
      if(clicked === true) {
        fill(pickAColour(), pickAColour(), pickAColour());
        stroke(0);
      } else {
        fill(0, 255, 0);
        stroke(0);
      }
    } else {
      noFill();
      noStroke();
    }
    // Draw an ellipse with size based on volume
    var ellipseX = this.width/2;
    var ellipseY = this.height/2;
    if(this.isOn()) {
      ellipseX += random(-1, 1);
      ellipseY += random(-1, 1);
    }
    ellipse(ellipseX, ellipseY, 20+rms*1500, 20+rms*1500);

    waveform = fft.waveform();
    noFill();
    beginShape();
    if(this.isOn()) {
      stroke(255, 0, 0);
      strokeWeight(1);
    } else {
      noStroke();
    }
    var i=0;
    while(i<waveform.length) {
      var x = map(i, 0, waveform.length, this.x, this.width);
      var y = map(waveform[i], -1, 1, 0, this.height/3);
      vertex(x,y);
      i++;
    }
    endShape();

    //360 degree FFT analiser visualisation//
    spectrum = fft.analyze();
    noStroke();
    translate(this.width/2, this.height/2);
    if(this.isOn()) {
      beginShape();
      for(var i=0; i<spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 0, 170);
        var x = r * cos(angle);
        var y = r * sin(angle);
        vertex(x,y);
      }
      stroke(0, 255, 0);
      noFill();
      endShape();
    } else {
      noStroke();
    }
  }
}

//random colour generator for strobe//
function pickAColour() {
  if(clickHistory.length > 0) {
    var a = clickHistory[random(0, clickHistory.length-1)][1] * random(0, 10); //generates random color based on clickHistory array value * random(0,10)//
    return a;
  } else {
    return colourList[Math.floor(Math.random() * colourList.length)]; //otherwise, generates completely random color from the colourList array of 255//
  }
}
