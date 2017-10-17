
//Effects rack used to display effectsInitBtns//
function EffectsRack(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.display = function() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  //initialise the effectsInitBtns and filters as variables//
  this.effectsSetup = function() {
    volumeEffectX = new EffectsInitBtn(effectsRack.x, effectsRack.y, 100, 50, "VolumeX");
    volumeEffectY = new EffectsInitBtn(effectsRack.x+effectsRack.width - 100, effectsRack.y, 100, 50, "VolumeY");
    panEffectX = new EffectsInitBtn(effectsRack.x, effectsRack.y + 50, 100, 50, "PanX");
    panEffectY = new EffectsInitBtn(effectsRack.x+effectsRack.width - 100, effectsRack.y + 50, 100, 50, "PanY");
    speedEffectX = new EffectsInitBtn(effectsRack.x, effectsRack.y + 100, 100, 50, "SpeedX");
    speedEffectY = new EffectsInitBtn(effectsRack.x+effectsRack.width - 100, effectsRack.y + 100, 100, 50, "SpeedY");
    lowPassEffectXY = new EffectsInitBtn(effectsRack.x, effectsRack.y + 150, 200, 50, "LowPassXY");
    lowPassFilter = new p5.LowPass();
    highPassEffectXY = new EffectsInitBtn(effectsRack.x, effectsRack.y + 200, 200, 50, "HighPassXY");
    highPassFilter = new p5.HighPass();
    delayEffectXY = new EffectsInitBtn(effectsRack.x, effectsRack.y + 250, 200, 50, "DelayXY");
    delay = new p5.Delay();
  }

  //display effectsInitBtns//
  this.showEffectsList = function() {
    volumeEffectX.display();
    volumeEffectY.display();
    panEffectX.display();
    panEffectY.display();
    speedEffectX.display();
    speedEffectY.display();
    lowPassEffectXY.display();
    highPassEffectXY.display();
    delayEffectXY.display();
  }

  //kills all effectBtns by setting the .on to false//
  this.killAll = function() {
    var effectsList = [volumeEffectX, volumeEffectY, panEffectX, panEffectY, speedEffectX, speedEffectY, lowPassEffectXY, highPassEffectXY, delayEffectXY];
    for(var i=0; i<effectsList.length; i++) {
      if(effectsList[i].on) {
        effectsList[i].on = false;
      }
    }
  }
}

//EffectsInitBtns push their effectsName to samples with corresponding effectBtns on to apply effects to the samples//
function EffectsInitBtn(x, y, w, h, effectsName) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.on = false;
  this.effectsName = effectsName;

  this.display = function() {
    if(this.on) {
      fill(0,255,0);
    } else {
      fill(255,255,0);
    }
    stroke(0);
    rect(this.x, this.y, this.width, this.height);

    textAlign(CENTER);
    fill(0);
    noStroke();
    text("" + this.effectsName + "", this.x + this.width/2, this.y + this.height/2);
  }


  this.mouseOn = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      this.on = !this.on;
    }
  }
}

//LowPass Filter disconnect/connect//
function connectToLowPassFilter(input) {
  // input.disconnect();
  input.connect(lowPassFilter);
}
//HighPass Filter disconnect/connect//
function connectToHighPassFilter(input) {
  // input.disconnect();
  input.connect(highPassFilter);
}

//Delay Filter disconnect/connect//
function connectToDelayFilter(input) {
  delay.process(input, .12, .7, 2300);
  delay.setType('pingPong');

}
