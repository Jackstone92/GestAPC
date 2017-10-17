var clickHistory = [];
var ballStored;

//controls the x/y axis where effects are applied//
function MouseControlWin(x, y, w, h) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.display = function() {
    if(webcamVisible) {
      noFill();
    } else {
      fill(255);
    }
    rect(this.x, this.y, this.width, this.height);
    stroke(0);
    this.verticalLine = line(this.x + this.width/2, this.y, this.x + this.width/2, this.y + this.height);
    this.horizontalLine = line(this.x, this.y + this.height/2, this.x + this.width, this.y + this.height/2);
  }
}


//Handles mouse position and draws ball to display this information visually//
function MouseControlBall(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.display = function() {
    if(mouseX > mouseControlWin.x && mouseX < mouseControlWin.x + mouseControlWin.width && mouseY > mouseControlWin.y && mouseY < mouseControlWin.y + mouseControlWin.height) {
      this.x = constrain(mouseX, mouseControlWin.x, mouseControlWin.x + 600);
      this.y = constrain(mouseY, mouseControlWin.y, mouseControlWin.y + mouseControlWin.height);
      noCursor();
      //custom cursor//
      fill(0);
      stroke(255);
      ellipse(this.x, this.y, 10, 10);
    } else {
      cursor();
    }
  }

  //stores coordinates for ball position//
  this.storeBallValue = function() {
    for(var i=0; i<rows; i++) {
      for(var j=0; j<cols; j++) {
        if(mouseX > mouseControlWin.x && mouseX < mouseControlWin.x + mouseControlWin.width && mouseY > mouseControlWin.y && mouseY < mouseControlWin.y + mouseControlWin.height) {
          if(!mouseIsPressed) { //store clicked mouse values//
            ballStore = createVector(mouseX, mouseY);
            // console.log(ballStore);
            return true;
          } else if(mouseIsPressed) { //store dragged mouse values//
            ballStore = createVector(mouseX, mouseY);
            // console.log(ballStore);
            return true;
          }
        }
      }
    }
  }

  //stores history of last clicked/dragged position and sends to drawStoredBall to draw//
  this.history = function() {
    for(var i = clickHistory.length-1; i>=0; i--) { //backwards for-loop//
      ballStored = createVector(clickHistory[i][0], clickHistory[i][1]);
    }

  }

  this.storeHistory = function() {
    if(ballStore === 0) {
      return clickHistory.push([ballStore.x, ballStore.y]);
    } else {
      clickHistory.splice(clickHistory.length-1, 1); //use of splice//
      return clickHistory.push([ballStore.x, ballStore.y]);
    }
  }


  //draws stored ball position//
  this.drawStoredBall = function() {
    for(var i=0; i<rows; i++) {
      for(var j=0; j<cols; j++) {
        if(ballStore && effectBtns[i][j].effectsOn === true && webcamVisible === false) { //hide ball when webcam is on//
          fill(0);
          stroke(0);
          ellipse(ballStore.x, ballStore.y, 20, 20);
          ball.storeHistory();
        }
      }
    }
  }

  this.killAll = function() {
    ballStore = createVector();
  }

}
