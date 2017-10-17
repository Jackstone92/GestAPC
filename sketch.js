// APC Sampler program, that controls effects via x/y axis with mouse control or by
// fist-detection via webcam //

//Declare Global Variables//
var clicked = false;
var spaceDown = false;
var webcamVisible = false;
var audioLoaded = false;

var ball;
var ballStore;

var cnv;
var viewController;
var samplerDisplay;
var effectsRack;
var mouseControlWin;
var textDisplayWindow;
var recordingStudio;
var leftVisualiser;
var rightVisualiser;
var instrumentRoom;

var volumeEffectX;
var volumeEffectY;
var panEffectX;
var panEffectY;
var speedEffectX;
var speedEffectY;
var lowPassEffectXY;
var highPassEffectXY;
var delayEffectXY;

var volMapX;
var volMapXWebcam;
var volMapY;
var volMapYWebcam;
var panningX;
var panningXWebcam;
var panningY;
var panningYWebcam;
var speedX;
var speedXWebcam;
var speedY;
var speedYWebcam;
var lowPassFilter, lowPassFilterFreq, lowPassFilterRes;
var lowPassFilterFreqWebcam, lowPassFilterResWebcam;
var highPassFilter, highPassFilterFreq, highPassFilterRes;
var highPassFilterFreqWebcam, highPassFilterResWebcam;
var analyzer;
var delay, delayFreq, delayRes, delTime;
var delayFreqWebcam, delayResWebcam, delTimeWebcam;

var webcamCapture;
var objects;
var myTracker;
var trackerTask;
var otherCanvas;
var trackerCanvas;

var state = 0;

//Setup function where constructor functions are initialised//
function setup() {
  cnv = createCanvas(1280, 720);
  cnv.position(0,0);

  //initialise constructors//
  viewController = new ViewController();

  samplerDisplay = new SamplerDisplay(width/2 - 395, height/2, 790, height/2-10);
  samplerDisplay.setupDisplay();

  mouseControlWin = new MouseControlWin(width/2 - 300, 0, 600, 350);
  ball = new MouseControlBall();

  effectsRack = new EffectsRack(width-201, height/2, 200, 300);
  effectsRack.effectsSetup();

  recordingStudio = new RecordingStudio(0, height/2, 200, 300);
  recordingStudio.recordingSetup();

  sineInstrumentButton.sineInstrumentRoomSetup('sine', 500);
  triangleInstrumentButton.triangleInstrumentRoomSetup('triangle', 500);
  sawInstrumentButton.sawInstrumentRoomSetup('sawtooth', 500);
  squareInstrumentButton.squareInstrumentRoomSetup('square', 500);

  rightVisualiser = new Visualiser(width/2 + 320, 0, 300, 350);
  rightVisualiser.visualiserSetup();
  leftVisualiser = new Visualiser(20, 0, 300, 350);
  leftVisualiser.visualiserSetupLeft();
  //creates otherCanvas for fist-detection library//
  webcamCanvasSetup();
}

//Draw viewcontroller functions//
function draw() {
  background(51);
  //display items in viewController.display()//
  viewController.display();
  //controls menu functionality//
  viewController.menuView();
}

//Handles mouseClicked function for samples, effectBtns, effectInitBtns, resetBtn,
//clearBtn, mouseControlWin functionality and recordingStudio functionality//
function mouseClicked() {
  viewController.mouseClickedFunctions();
} //mouseClicked end//

//Allows mouseControlWin functionality to occur when mouse is dragged as well as pressed//
function mouseDragged() {
  viewController.mouseDraggedFunctions();
}//mouseDragged end//

//save and draw last ball position where last mouseclick was released//
function mouseReleased() {
  ball.storeBallValue();
}

//callback for when audio is loaded from tracks array//
function loaded() {
  audioLoaded = true
}

//Keyboard Shortcuts//
function keyPressed() {
  if(keyIsDown(32)) { //spacebar
    spaceDown = true;
    // console.log('spacebar is down');
  } else {
    spaceDown = false;
  }
  //If space is held down, sample.on. Otherwise, effectBtns.effectsOn//
  if(keyCode === 49) { //1
    if(spaceDown === true) {
      samples[0][0].on = !samples[0][0].on;
    } else {
      effectBtns[0][0].effectsOn = !effectBtns[0][0].effectsOn;
    }
  } else if(keyCode === 50) { //2
    if(spaceDown === true) {
      samples[1][0].on = !samples[1][0].on;
    } else {
      effectBtns[1][0].effectsOn = !effectBtns[1][0].effectsOn;
    }
  } else if(keyCode === 51) { //3
    if(spaceDown === true) {
      samples[2][0].on = !samples[2][0].on;
    } else {
      effectBtns[2][0].effectsOn = !effectBtns[2][0].effectsOn;
    }
  } else if(keyCode === 52) { //4
    if(spaceDown === true) {
      samples[3][0].on = !samples[3][0].on;
    } else {
      effectBtns[3][0].effectsOn = !effectBtns[3][0].effectsOn;
    }
  } else if(keyCode === 81) { //q
    if(spaceDown === true) {
      samples[0][1].on = !samples[0][1].on;
    } else {
      effectBtns[0][1].effectsOn = !effectBtns[0][1].effectsOn;
    }
  } else if(keyCode === 87) { //w
    if(spaceDown === true) {
      samples[1][1].on = !samples[1][1].on;
    } else {
      effectBtns[1][1].effectsOn = !effectBtns[1][1].effectsOn;
    }
  } else if(keyCode === 69) { //e
    if(spaceDown === true) {
      samples[2][1].on = !samples[2][1].on;
    } else {
      effectBtns[2][1].effectsOn = !effectBtns[2][1].effectsOn;
    }
  } else if(keyCode === 82) { //r
    if(spaceDown === true) {
      samples[3][1].on = !samples[3][1].on;
    } else {
      effectBtns[3][1].effectsOn = !effectBtns[3][1].effectsOn;
    }
  } else if(keyCode === 65) { //a
    if(spaceDown === true) {
      samples[0][2].on = !samples[0][2].on;
    } else {
      effectBtns[0][2].effectsOn = !effectBtns[0][2].effectsOn;
    }
  } else if(keyCode === 83) { //s
    if(spaceDown === true) {
      samples[1][2].on = !samples[1][2].on;
    } else {
      effectBtns[1][2].effectsOn = !effectBtns[1][2].effectsOn;
    }
  } else if(keyCode === 68) { //d
    if(spaceDown === true) {
      samples[2][2].on = !samples[2][2].on;
    } else {
      effectBtns[2][2].effectsOn = !effectBtns[2][2].effectsOn;
    }
  } else if(keyCode === 70) { //f
    if(spaceDown === true) {
      samples[3][2].on = !samples[3][2].on;
    } else {
      effectBtns[3][2].effectsOn = !effectBtns[3][2].effectsOn;
    }
  } else if(keyCode === 90) { //z
    if(spaceDown === true) {
      samples[0][3].on = !samples[0][3].on;
    } else {
      effectBtns[0][3].effectsOn = !effectBtns[0][3].effectsOn;
    }
  } else if(keyCode === 88) { //x
    if(spaceDown === true) {
      samples[1][3].on = !samples[1][3].on;
    } else {
      effectBtns[1][3].effectsOn = !effectBtns[1][3].effectsOn;
    }
  } else if(keyCode === 67) { //c
    if(spaceDown === true) {
      samples[2][3].on = !samples[2][3].on;
    } else {
      effectBtns[2][3].effectsOn = !effectBtns[2][3].effectsOn;
    }
  } else if(keyCode === 86) { //v
    if(spaceDown === true) {
      samples[3][3].on = !samples[3][3].on;
    } else {
      effectBtns[3][3].effectsOn = !effectBtns[3][3].effectsOn;
    }
  }
  else if(keyCode === 8) { //backspace
    //kill all effects//
    killAllApartFromSamples();
  } else if(keyCode === 27) { //escape
    //kill all effects as well as samples playing//
    masterKillAll();
  }

  if(keyIsDown(17)) { //control key
    //capture webcam//
    webcamVisible = true;
  } else {
    webcamVisible = false;
  }
}//keyPressed end//
