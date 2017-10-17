
var tracks = [];
tracks[0] = "assets/sounds/AbstractAtmosphere33.wav";
tracks[1] = "assets/sounds/AbstractAtmosphere82.wav";
tracks[2] = "assets/sounds/AfganistanSandRabab18.wav";
tracks[3] = "assets/sounds/AfganistanSandRabab20.wav";
tracks[4] = "assets/sounds/AlphaMatrixBass.wav";
tracks[5] = "assets/sounds/Antigravity.wav";
tracks[6] = "assets/sounds/AtomSmasherLayers.wav";
tracks[7] = "assets/sounds/BadSignalBeat1.wav";
tracks[8] = "assets/sounds/BedrockBass.wav";
tracks[9] = "assets/sounds/BerlinClubLayers.wav";
tracks[10] = "assets/sounds/BigDrumBeat1.wav";
tracks[11] = "assets/sounds/BosnianSunsetViolin21.wav";
tracks[12] = "assets/sounds/BreaksLavaBeats2.wav";
tracks[13] = "assets/sounds/BrokenMachineLead.wav";
tracks[14] = "assets/sounds/ClubDanceBeat37.wav";
tracks[15] = "assets/sounds/MistakenRhythmTopper.wav";
var resetBtn;
var stopBtn;
var strobeBtn;
var mainMenuButton;

var sineInstrumentButton;
var triangleInstrumentButton;
var sawInstrumentButton;
var squareInstrumentButton;

var samples = [];
var rows = 4;
var cols = 4;
var effectBtns = [];

//Displays APC-style sampler containing 2D arrays of samplerButtons and SamplerEffectButton Objects//
function SamplerDisplay(x, y, w, h) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.setupDisplay = function() {
    //Samples//
    for(var i=0; i<=rows; i++) {
      samples[i] = [];
      for(var j=0; j<cols; j++) { //2D array of SamplerButton objects//
        samples[i][j] = new SamplerButton(this.x +10 + i*200, this.y + 50 + j*80, 150, 50, tracks[((i+1) + (j+1) * 4) - 5], str(tracks[((i+1) + (j+1) * 4) - 5]).replace('assets/sounds/', '').replace('.wav', '')); //string manipulation to remove path from track name//
      }
    }

    //EffectBtns//
    for(var i=0; i<rows; i++) {
      effectBtns[i] = [];
      for(var j=0; j<cols; j++) { //2D array of SamplerEffectButton objects//
        effectBtns[i][j] = new SamplerEffectButton(this.x + 160 + i*200, this.y + 50 + j*80, 20, 50, ((i+1) + (j+1) * 4) - 4);
      }
    }


    //Buttons//
    resetBtn = new CustomButton(this.x+this.width - 70,this.y + 5, 60,30, "Reset");
    clearBtn = new CustomButton(this.x+this.width - 130,this.y + 5, 60,30, "Clear FX");
    strobeBtn = new CustomButton(this.x + 10,this.y + 5, 60,30, "Strobe");
    sineInstrumentButton = new InstrumentButton(width/2-180,this.y + 5, 60,30, "SineX");
    triangleInstrumentButton = new InstrumentButton(width/2-110,this.y + 5, 60,30, "TriangleY");
    sawInstrumentButton = new InstrumentButton(width/2+50, this.y + 5, 60, 30, "SawX");
    squareInstrumentButton = new InstrumentButton(width/2+120, this.y + 5, 60, 30, "SquareY");
    mainMenuButton = new MainMenuButton(width/2-25, height/2-1, 50, 50, "assets/images/logo.png");
  }

  this.outlinedisplay = function() {
    fill(255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  this.sampleDisplay = function() {
    for(var i=0; i<rows; i++) {
      for(var j=0; j<cols; j++) {
        samples[i][j].display();
        samples[i][j].play();
      }
    }
  }

  this.effectBtnDisplay = function() {
    for(var i=0; i<rows; i++) {
      for(var j=0; j<cols; j++) {
        effectBtns[i][j].display();
      }
    }
  }

}




//       //        //
//   Exc Functions //
//       //        //

//function that checks if samples.on, effecBtns.effectsOn and effectsInitBtns.on and adds effect to sample//
function addEffectsToSamples() {
  effectsInitBtns = [volumeEffectX, volumeEffectY, panEffectX, panEffectY, speedEffectX, speedEffectY, lowPassEffectXY, highPassEffectXY, delayEffectXY];
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      if(mouseX > mouseControlWin.x && mouseX < mouseControlWin.x + mouseControlWin.width && mouseY > mouseControlWin.y && mouseY < mouseControlWin.y + mouseControlWin.height) {
        for(var k=0; k<effectsInitBtns.length; k++) {
          if(effectBtns[i][j].effectsOn && effectsInitBtns[k].on) {
            samples[i][j].addEffect(effectsInitBtns[k].effectsName);
            // break;
          }//end if//
        }//end for k//
      }//end if//
    }//end for i//
  }//end for j//
}

//same as above but for webcam effects//
function addEffectsToSamplesWebcam() {
  effectsInitBtns = [volumeEffectX, volumeEffectY, panEffectX, panEffectY, speedEffectX, speedEffectY, lowPassEffectXY, highPassEffectXY, delayEffectXY];
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      for(var k=0; k<effectsInitBtns.length; k++) {
        if(effectBtns[i][j].effectsOn && effectsInitBtns[k].on) {
          samples[i][j].addEffectWebcam(effectsInitBtns[k].effectsName);
          // break;
        }
      }
    }
  }
}

//kills all//
function masterKillAll() {
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      samples[i][j].killAll();
      samples[i][j].resetEffectsToDefault();
      effectBtns[i][j].killAll();
      effectsRack.killAll();
      ball.killAll();
      recordingStudio.killAll();
      clickHistory = [];
    }
  }
  clicked = false;

  sineInstrumentButton.killAll();
  triangleInstrumentButton.killAll();
  sawInstrumentButton.killAll();
  squareInstrumentButton.killAll();
}

//applies killAll to all apart from samples.killAll()//
function killAllApartFromSamples() {
  if(clearBtnHover === true || resetBtnHover === true || keyCode === 8) {
    for(var i=0; i<rows; i++) {
      for(var j=0; j<cols; j++) {
        effectBtns[i][j].killAll();
        effectsRack.killAll();
        ball.killAll();
        samples[i][j].resetEffectsToDefault();
        recordingStudio.killAll();
        clickHistory = [];
      }
    }
  }
}

//kills samples.killAll() and instruments for resetBtn//
function resetBtnKillSamples() {
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      if(resetBtnHover === true) {
        samples[i][j].killAll();
        recordingStudio.killAll();

        sineInstrumentButton.killAll();
        triangleInstrumentButton.killAll();
        sawInstrumentButton.killAll();
        squareInstrumentButton.killAll();
        clicked = false;
      }
    }
  }
}

function samplesMouseOn() {
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      samples[i][j].mouseOn();
    }
  }
}

function effectBtnsOn() {
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      effectBtns[i][j].mouseEffectsOn();
    }
  }
}

function effectsInitBtnMouseOn() {
  effectsInitBtns = [volumeEffectX, volumeEffectY, panEffectX, panEffectY, speedEffectX, speedEffectY, lowPassEffectXY, highPassEffectXY, delayEffectXY];
  for(var i=0; i<effectsInitBtns.length; i++) {
      effectsInitBtns[i].mouseOn();
  }
}
