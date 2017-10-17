//Fist Detection Start//
var globalFistPos;

window.onload = function() {
  var
    canvas = document.getElementById('detection'),
    context = canvas.getContext('2d'),
    video = document.createElement('video'),
    detector,
    coords;
  //error handling//
  try {
    
    //compatibility library code start//
    compatibility.getUserMedia({video: true}, function(stream) {
      try {
        video.src = compatibility.URL.createObjectURL(stream);
      } catch (error) {
        video.src = stream;
      }
      compatibility.requestAnimationFrame(play); //if no problems, animate play()//
    }, function (error) {
      alert("WebRTC not available");
    });
  } catch (error) {
    alert(error);
  }
  //compatibility library code end//

  //uses js-objectdetect objects to set up fist-detection outside of P5.js//
  //uses detector object
  var fistPosOld, angle = [0, 0];

  function play() {
    compatibility.requestAnimationFrame(play);
    if(video.paused) {
      video.play();
    }

    //Draw video overlay://
    canvas.width = 300;
    canvas.height = 175;
    context.drawImage(video, 0, 0, 300, 175);

    if(video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {

      //Prepare the detector once the video dimensions are known://
      if(!detector) {
        var width = 300;
        var height = 175;
        detector = new objectdetect.detector(width, height, 1.1, objectdetect.handfist);
      }

      //Perform the actual detection://
      coords = detector.detect(video, 1);

      if(coords[0] && webcamVisible === true) { //and if webcamVisible === true//
        var coord = coords[0];
        // console.log(coords);

        //Rescale coordinates from detector to video coordinate space://
        coord[0] *= video.videoWidth / detector.canvas.width;
        coord[1] *= video.videoHeight / detector.canvas.height;
        coord[2] *= video.videoWidth / detector.canvas.width;
        coord[3] *= video.videoHeight / detector.canvas.height;

        var fistPos = [coord[0] + coord[2] / 2, coord[1] + coord[3] / 2];

        if(fistPosOld) {
          var dx = (fistPos[0] - fistPosOld[0]) / video.videoWidth,
            dy = (fistPos[1] - fistPosOld[1]) / video.videoHeight;

          if(dx*dx + dy*dy < 0.2) { //if smaller than 0.2, increase angles to try and obtain reading//
            angle[0] += 5.0 * dx;
            angle[1] += 5.0 * dy;
          }
          fistPosOld = fistPos;
          globalFistPos = fistPosOld; //added to globalFistPos//

        } else if(coord[4] > 2) {
          fistPosOld = fistPos;
          globalFistPos = fistPosOld; //added to globalFistPos//
        }

        //Draw coordinates on video overlay://
        context.beginPath();
        context.lineWidth = '2';
        context.fillStyle = fistPosOld ? 'rgba(0, 255, 255, 0.5)' : 'rgba(255, 0, 0, 0.5)';
        context.fillRect(
          coord[0] / video.videoWidth * canvas.clientWidth,
          coord[1] / video.videoHeight * canvas.clientHeight,
          coord[2] / video.videoWidth * canvas.clientWidth,
          coord[3] / video.videoHeight * canvas.clientHeight);
        context.stroke();
      } else {
        fistPosOld = null;
        //maintains last coordinates for globalFistPos//
      }
    }
  }//play end//
};//onload end//



function webcamCanvasSetup() {
  //other canvas creation that js-objectdetect library uses//
  otherCanvas = createElement('canvas');
  otherCanvas.id('detection');
  otherCanvas.position(-400,0); //hide original offscreen//
}


//Draw a copy of otherCanvas in P5 (trackerCanvas), if the ctrl key is down, and place it within mouseControlWin//
function webcamDraw() {
  //Webcam Start//
  if(keyIsDown(17)) { //if control key is held down//
    webcamVisible = true;
    trackerCanvas = image(otherCanvas, width/2-300, 0, 600, 350);
    // console.log('webcam is showing');
  } else {
    webcamVisible = false;
  }

  //if ctrl key is down and webcam is visible, apply effects using webcam fist-detection//
  if(globalFistPos && webcamVisible === true) {
    addEffectsToSamplesWebcam();
  }
}
