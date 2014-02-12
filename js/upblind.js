var margin;
var blindPos;
var bottomPos;
var topPos;
var blindDown;
var animationAmount;

function setup() {
  var canvas = createGraphics(width, 600);
  canvas.position(300, 100);
  margin = 40;
  bottomPos = height-margin;
  blindPos = 100;
  blindDown = false;
  animationAmount = 10;
  setInterval(animateBlind, 100);
}

function draw() {
     background(128);
	 noStroke();
 	 fill(245);
 	 rect(0,0,width,margin-10);
 	 fill(245,200);
 	 rect(0,margin-10,width,margin);
 	 fill(252,190,160);
 	 rect(0, margin, width, blindPos);
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