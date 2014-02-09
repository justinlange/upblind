var margin;

function setup() {
  createGraphics(width, height);
  margin = 100;
}

function draw() {
     background(255);
	 noStroke();
 	 fill(164,157,145,100);
 	 rect(margin, 100, width-margin, mouseY);
}

