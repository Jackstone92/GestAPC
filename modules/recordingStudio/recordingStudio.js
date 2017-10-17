var mic, soundRecorder, soundFile1, soundFile2, soundFile3, soundFile4;
var soundFiles = [soundFile1, soundFile2, soundFile3, soundFile4];
var recordingBlock1, recordingBlock2, recordingBlock3, recordingBlock4;
var recordingBlocks = [recordingBlock1, recordingBlock2, recordingBlock3, recordingBlock4];
var insideRecordingBlock0 = false,
    insideRecordingBlock1 = false,
    insideRecordingBlock2 = false,
    insideRecordingBlock3 = false;
var insideRecordingBlocks = [insideRecordingBlock0, insideRecordingBlock1, insideRecordingBlock2, insideRecordingBlock3];
var recordingState = 0,
    recordingState0 = 0,
    recordingState1 = 0,
    recordingState2 = 0,
    recordingState3 = 0;
var recordingStates = [recordingState0, recordingState1, recordingState2, recordingState3];

var mainMic;
var mainSoundRecorder;
var mainSoundFile;
var mainRecordingState = 0;

//allows user to record up to 4 of their own samples and then playback as an extra sample//
function RecordingStudio(x, y, w, h) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.display = function() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  //define and start p5.AudioIn, p5.SoundRecorder, p5.SoundFiles and RecordingBlocks//
  this.recordingSetup = function() {
    mic = new p5.AudioIn();
    mic.start();
    soundRecorder = new p5.SoundRecorder();
    soundRecorder.setInput(mic);

    soundFiles.map(function(item, index) { //anonymous functions and use of map//
      soundFiles[index] = new p5.SoundFile();
    });


    recordingBlocks.map(function(item, index) { //anonymous functions and use of map//
      recordingBlocks[index] = new RecordingBlock(recordingStudio.x, recordingStudio.y + index*75, recordingStudio.width, recordingStudio.height/4, "SoundFile "+(index+1));
    });
  }

  //Display RecordingBlocks//
  this.recordingDraw = function() {
    for(var i=0; i< recordingBlocks.length; i++) {
      recordingBlocks[i].display();
    }
  }

  //Cycle through recordingState on mouseClicked(), which defines whether or not the recordingBlock is recording or playing a recording//
  this.execute = function() { //execute on mouseClicked()//

    for(var i=0; i<recordingBlocks.length; i++) {
      if(mouseX > recordingBlocks[i].x && mouseX < recordingBlocks[i].x + recordingBlocks[i].width && mouseY > recordingBlocks[i].y && mouseY < recordingBlocks[i].y + recordingBlocks[i].height) {
        insideRecordingBlocks[i] = true;
      } else {
        insideRecordingBlocks[i] = false;
      }
    }

    for(var i=0; i<insideRecordingBlocks.length; i++) {
      if(insideRecordingBlocks[i] === true) {
        if(recordingStates[i] === 0 && mic.enabled) {
          // console.log('recordingStates' + i + ' is 0')
          soundRecorder.record(soundFiles[i]);
          recordingBlocks[i].on = !recordingBlocks[i].on;
          recordingBlocks[i].fillColour = '#ff0000';
          recordingStates[i]++;
        }
        else if(recordingStates[i] === 1) {
          // console.log('recordingStates' + i + ' is 1')
          soundRecorder.stop();
          recordingBlocks[i].fillColour = '#ffbf00';
          recordingStates[i]++;
        }
        else if(recordingStates[i] === 2) {
          // console.log('recordingStates' + i + ' is 2')
          if(!soundFiles[i].isPlaying()) {
            soundFiles[i].play();
          }
          recordingBlocks[i].fillColour = '#00ff00';
        }
      }
    }
  }

  //Resets mic, soundRecorder, soundFiles and recordingState//
  this.killAll = function() {
    mic = new p5.AudioIn();
    mic.start();
    soundRecorder = new p5.SoundRecorder();
    soundRecorder.setInput(mic);

    soundFiles.map(function(item, index) {
      soundFiles[index] = new p5.SoundFile();
    });

    for(var i=0; i<recordingStates.length; i++) {
      recordingStates[i] = 0;
    }

    for(var i=0; i<recordingBlocks.length; i++) {
      recordingBlocks[i].fillColour = '#C8C8C8';
    }
  }
}

//recording block is used to display the extra 4 samples//
function RecordingBlock(x, y, w, h, id) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.id = id;
  this.on = false;

  this.fillColour = '#C8C8C8';

  this.display = function() {
    fill(this.fillColour);

    stroke(0);
    rect(x, y, w, h);
    noStroke();
    fill(0);
    text("" + this.id + "", this.x + this.width/2, this.y + this.height/2);
  }
}
