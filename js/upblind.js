var margin;
var blindPos;
var bottomPos;
var topPos;
var blindDown;
var animationAmount;

function setup() {
  createGraphics(width, height);
  margin = 100;
  bottomPos = height-margin;
  blindPos = 200;
  blindDown = false;
  animationAmount = 10;
  setInterval(animateBlind, 100);
}

function draw() {
     background(255);
	 noStroke();
 	 fill(164,157,145,100);
 	 rect(margin, 100, width-margin, blindPos);
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