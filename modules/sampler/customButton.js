var resetBtnHover = false;
var clearBtnHover = false;
var strobeBtnHover = false;

var buttonText;

//constructor function for resetBtn, clearFx btn and strobeBtn//
function CustomButton(x, y, width, height, string) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = string;

  this.display = function() {
    stroke(0);
    rect(this.x, this.y, this.width, this.height);

    fill(0);
    noStroke();
    textAlign(CENTER);
    buttonText = text("" + string + "", this.x+this.width - 30, this.y+this.height/2);
  }

  this.resetHoverOver = function() {
    //change colour on hover//
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      fill(255,0,0);
      resetBtnHover = true;
    } else {
      fill(255,0,0);

      resetBtnHover = false;
    }
  }

  this.clearHoverOver = function() {
    //change colour on hover//
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      fill(255,255,255);
      clearBtnHover = true;
    } else {
      fill(255,255,255);
      clearBtnHover = false;
    }
  }

  this.strobeHoverOver = function() {
    //change colour on hover//
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      fill(0,255,0);
      strobeBtnHover = true;
    } else {
      fill(0, 255, 0);
      strobeBtnHover = false;
    }
  }

  this.toggleOn = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      clicked = !clicked;
    }
  }


}
