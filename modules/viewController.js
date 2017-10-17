
//Orders displaying of constructor functions, and will be used to toggle the UI view from menu/instructions to application//
function ViewController() {

  this.display = function() {
    //animations.js until state === 1//
    if(state === 1) {
      //runs webcam functions in fistDetection//
      webcamDraw();

      samplerDisplay.outlinedisplay();
      samplerDisplay.sampleDisplay();
      samplerDisplay.effectBtnDisplay();

      effectsRack.display();
      effectsRack.showEffectsList();

      mouseControlWin.display();
      ball.display();
      ball.drawStoredBall();

      resetBtn.resetHoverOver();
      resetBtn.display();

      clearBtn.clearHoverOver();
      clearBtn.display();

      mainMenuButton.menuHoverOver();
      mainMenuButton.display();

      strobeBtn.strobeHoverOver();
      strobeBtn.display();

      sineInstrumentButton.display();
      triangleInstrumentButton.display();
      sawInstrumentButton.display();
      squareInstrumentButton.display();
      sineInstrumentButton.webcamControlExecute();
      triangleInstrumentButton.webcamControlExecute();
      sawInstrumentButton.webcamControlExecute();
      squareInstrumentButton.webcamControlExecute();


      recordingStudio.display();
      recordingStudio.recordingDraw();

      rightVisualiser.display();
      rightVisualiser.visualiserDisplay();

      leftVisualiser.display();
      leftVisualiser.visualiserDisplayLeft();
    }
  }
  //controls menu setup from animations.js//
  this.menuSetup = function() {
    menuInitialState();
  }
  //controls menu init from animations.js//
  this.menuView = function() {
    if(state === 2) {
      menuInit();
    }

  }

  this.mouseClickedFunctions = function() {
    //only if state === 1 can the user control application UI (apart from clicking to cycle through animations)//
    if(state === 1) {
      //mouseClicked for sample btns//
      samplesMouseOn();
      //resetBtn reset all samples//
      resetBtnKillSamples();
      //mouseControlWin manipulation with click//
      addEffectsToSamples();
      effectBtnsOn();
      // clearBtn functionality//
      killAllApartFromSamples();
      //effectsRack effectsInitBtns//
      effectsInitBtnMouseOn();

      recordingStudio.execute();

      strobeBtn.toggleOn();

      mainMenuButton.menuClick();

      sineInstrumentButton.sineInstrumentRoomExecute();
      triangleInstrumentButton.triangleInstrumentRoomExecute();
      sawInstrumentButton.sawInstrumentRoomExecute();
      squareInstrumentButton.squareInstrumentRoomExecute();

      sineInstrumentButton.mouseControlExecute();
      triangleInstrumentButton.mouseControlExecute();
      sawInstrumentButton.mouseControlExecute();
      squareInstrumentButton.mouseControlExecute();
    }
  }

  this.mouseDraggedFunctions = function() {
    //only if state === 1 can the user control application UI (apart from clicking to cycle through animations)//
    if(state === 1) {
      //mouseControlWin manipulation with drag//
      addEffectsToSamples();

      sineInstrumentButton.mouseControlExecute();
      triangleInstrumentButton.mouseControlExecute();
      sawInstrumentButton.mouseControlExecute();
      squareInstrumentButton.mouseControlExecute();

      //save and draw last ball position dragged//
      ball.storeBallValue();
    }
  }


}
