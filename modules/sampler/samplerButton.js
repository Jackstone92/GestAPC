//creates a sample button that takes dimensions, a filepath for the linked sound,//
//as well as an id, that is displayed on the btn//
function SamplerButton(x, y, w, h, filepath, idCheck) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.on = false;
  this.sample = loadSound(filepath, loaded);
  this.idCheck = idCheck;

  this.display = function() {
    if(this.on) {
      fill(255,0,0);
    } else {
      fill(200);
    }
    stroke(0);
    rect(this.x, this.y, this.width, this.height);

    textAlign(CENTER);
    fill(0);
    noStroke();
    text("" + this.idCheck + "", this.x + this.width/2, this.y + this.height/2);
  }

  this.play = function() {
    if(this.sample.isLoaded() && audioLoaded === true && this.on) {
      if(!this.sample.isPlaying()) {
        this.sample.loop();
      }
    }

    if(!this.on) {
      this.sample.stop();
    }
  }

  this.mouseOn = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      this.on = !this.on;
    }
  }


  this.killAll = function() {
    if(this.sample.isPlaying() && audioLoaded === true) {
      this.sample.stop();
      this.on = !this.on;
    }
  }


  //add effects to an individual sample: if the effectsName string matches those//
  //found in the switch statement below, the relevent effect is applied//
  this.addEffect = function(effectsName) {
    //MOUSE EFFECTS START//
    //volume//
    volMapX = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 0, 1);
    volMapY = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, 0, 1);

    //panning//
    panningX = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, -1.0, 1.0);
    panningY = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, -1.0, 1.0);

    //rate//
    speedX = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 0, 2);
    speedX = constrain(speedX, 0.01, 4);
    speedY = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, 0, 2);
    speedY = constrain(speedY, 0.01, 4);

    //lowPass//
    lowPassFilterFreq = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 10, 22050);
    lowPassFilterRes = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, 15, 5);

    //highPass//
    highPassFilterFreq = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 10, 22050);
    highPassFilterRes = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, 15, 5);

    //delay//
    delayFreq = map(mouseX, mouseControlWin.x, mouseControlWin.x + mouseControlWin.width, 60, 15000);
    delayFreq = constrain(delayFreq, 60, 15000);
    delayRes = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, 3, 0.01);
    delayRes = constrain(delayRes, 0.01, 3);
    delTime = map(mouseY, mouseControlWin.y + mouseControlWin.height, mouseControlWin.y, .2, .01);
    delTime = constrain(delTime, .01, .2);
    //MOUSE EFFECTS END//

    switch(effectsName) {
      case "VolumeX":
        this.sample.setVolume(volMapX);
        break;

      case "VolumeY":
        this.sample.setVolume(volMapY);
        break;

      case "PanX":
        this.sample.pan(panningX);
        break;

      case "PanY":
        this.sample.pan(panningY);
        break;

      case "SpeedX":
        this.sample.rate(speedX);
        break;

      case "SpeedY":
        this.sample.rate(speedY);
        break;

      case "LowPassXY":
        connectToLowPassFilter(this.sample);
        lowPassFilter.set(lowPassFilterFreq, lowPassFilterRes);
        break;

      case "HighPassXY":
        connectToHighPassFilter(this.sample);
        highPassFilter.set(highPassFilterFreq, highPassFilterRes);
        break;

      case "DelayXY":
        connectToDelayFilter(this.sample); //only apply effect to single sample//
        delay.delayTime(delTime);
        break;

      default:
        console.log('waiting for effectsName');
    }

  }

  //effects are added the same way as above, but this time for effects that are//
  //controlled by the fist-detection library//
  this.addEffectWebcam = function(effectsName) {
    volMapXWebcam = map(globalFistPos[0], 50, 600, 0, 1);
    volMapYWebcam = map(globalFistPos[1], 400, 50, 0, 1);

    panningXWebcam = map(globalFistPos[0], 50, 600, -1.0, 1.0);
    panningYWebcam = map(globalFistPos[1], 400, 50, -1.0, 1.0);

    speedXWebcam = map(globalFistPos[0], 50, 600, 0, 2);
    speedXWebcam = constrain(speedXWebcam, 0.01, 4);
    speedYWebcam = map(globalFistPos[1], 400, 50, 0, 2);
    speedYWebcam = constrain(speedYWebcam, 0.01, 4);

    lowPassFilterFreqWebcam = map(globalFistPos[0], 50, 600, 10, 22050);
    lowPassFilterResWebcam = map(globalFistPos[1], 400, 50, 15, 5);

    highPassFilterFreqWebcam = map(globalFistPos[0], 50, 600, 10, 22050);
    highPassFilterResWebcam = map(globalFistPos[1], 400, 50, 15, 5);

    delayFreqWebcam = map(globalFistPos[0], 50, 600, 60, 15000);
    delayFreqWebcam = constrain(delayFreqWebcam, 60, 15000);
    delayResWebcam = map(globalFistPos[1], 400, 50, 3, 0.01);
    delayResWebcam = constrain(delayResWebcam, 0.01, 3);
    delTimeWebcam = map(globalFistPos[1], 400, 50, .2, .01);
    delTimeWebcam = constrain(delTimeWebcam, .01, .2);

    switch(effectsName) {
      case "VolumeX":
        this.sample.setVolume(volMapXWebcam);
        break;

      case "VolumeY":
        this.sample.setVolume(volMapYWebcam);
        break;

      case "PanX":
        this.sample.pan(panningXWebcam);
        break;

      case "PanY":
        this.sample.pan(panningYWebcam);
        break;

      case "SpeedX":
        this.sample.rate(speedXWebcam);
        break;
      case "SpeedY":
        this.sample.rate(speedYWebcam);
        break;

      case "LowPassXY":
        connectToLowPassFilter(this.sample);
        lowPassFilter.set(lowPassFilterFreqWebcam, lowPassFilterResWebcam);
        break;

      case "HighPassXY":
        connectToHighPassFilter(this.sample);
        highPassFilter.set(highPassFilterFreqWebcam, highPassFilterResWebcam);
        break;

      case "DelayXY":
        connectToDelayFilter(this.sample);
        delay.delayTime(delTimeWebcam);
        break;

      default:
        console.log('waiting for webcam effectsName');
    }

  }

  //Resets all sample effects to default//
  this.resetEffectsToDefault = function(effectsName) {
    this.sample.setVolume(1);
    this.sample.pan(0);
    this.sample.rate(1);
    //filter reset//
    this.sample.disconnect();
    this.sample.connect();
  }

}
