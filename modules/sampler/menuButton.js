var menuBtnHover = false;

function MainMenuButton(x, y, width, height, img) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.img = loadImage(img);

  this.display = function() {
    stroke(0);
    image(this.img, this.x, this.y, this.width, this.height);

    // fill(0);
    noStroke();
  }

  this.menuHoverOver = function() {
    //change colour on hover//
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
      menuBtnHover = true;
      cursor(HAND);
    } else {
      menuBtnHover = false;
    }
  }

  this.menuClick = function() {
    if(menuBtnHover === true) {
      state = 2;
    }
  }
}
