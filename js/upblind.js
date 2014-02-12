var margin;
var blindPos;
var bottomPos;
var topPos;
var blindDown;
var animationAmount;

<<<<<<< HEAD
function setup() {
  createGraphics(width, height);
  margin = 100;
  bottomPos = height-margin;
  blindPos = 200;
=======

function setup() {
  var canvas = createGraphics(width, 600);
  canvas.position(300, 100);
  margin = 100;
  bottomPos = height-margin;
  blindPos = 100;
>>>>>>> 75dec9571eec7a75f68a009d19f0b4ff58a7c154
  blindDown = false;
  animationAmount = 10;
  setInterval(animateBlind, 100);
}

function draw() {
<<<<<<< HEAD
     background(255);
	 noStroke();
 	 fill(164,157,145,100);
 	 rect(margin, 100, width-margin, blindPos);
=======
     background(140);
	 noStroke();
 	 fill(245);
 	 rect(0,60,width,margin-10);
 	 fill(245,200);
 	 rect(0,margin-10,width,margin);
 	 fill(252,190,160);
 	 rect(0, margin, width, blindPos);
 	 fill(120);
 	 rect(0,0,60,600);
 	 rect(60,0,width-60,60);
 	 rect(width-60,0,width,600);
 	 rect(0,600-60,width,600);
 	 fill(110);
	 quad(0, 0, width, 0, width-60, 60, 60, 60);
	 quad(60,600-60, width-60, 600-60, width, 600, 0, 600);
>>>>>>> 75dec9571eec7a75f68a009d19f0b4ff58a7c154
}

function animateBlind(){
	if(lowering){
		if(blindPos < bottomPos){
				blindPos = blindPos+animationAmount;
			}else{
				lowering = false;	
		}
	}
		if(raising){
			if(blindPos > margin){
				blindPos = blindPos-animationAmount;
			}else{
				raising = false;
			}
		}
	}



<<<<<<< HEAD

=======
>>>>>>> 75dec9571eec7a75f68a009d19f0b4ff58a7c154
function lowerBlinds(){
  raising = false;	
  lowering = true;
}



function raiseBlinds(){
  raising = true;	
  lowering = false;
}


function setAlarm() {
alarmDisplay.innerHTML = alarm.value;
}