//creates a sample effect button that takes dimensions, and an id, which can be//
//turned on and off depending on mouseEffectsOn() (mouse position within each effect button)//
function SamplerEffectButton(x, y, w, h, idCheck) {

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.effectsOn = false;

  this.display = function() {
    if(this.effectsOn) {
      fill(0,255,0);
    } else {
      fill(255,255,0);
    }
    stroke(0);
    rect(this.x, this.y, this.width, this.height);
  }

  this.mouseEffectsOn = function() {
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      this.effectsOn = !this.effectsOn;
    }
  }

  this.killAll = function() {
    if(this.effectsOn) {
      this.effectsOn = false;
    }
  }

}
