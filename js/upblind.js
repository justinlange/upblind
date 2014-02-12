var margin;
var blindPos;
var bottomPos;
var topPos;
var blindDown;
var animationAmount;

// open a connection to the serial server:
var socket = io.connect('http://localhost:8080');

 // when you get a serialdata event, do this:
socket.on('serialEvent', function (data) {
	// set the stuff inside the element's HTML tags to
	// whatever the 'value' property of the received data is:
	temperature.value = data.temp;
	setPoint.value = data.setPoint;
	updateDisplay();
});


function setup() {
  var canvas = createGraphics(width, 600);
  canvas.position(300, 100);
  margin = 90;
  bottomPos = 540;
  blindPos = 30;
  blindDown = false;
  animationAmount = 10;
  setInterval(animateBlind, 100);
}

function draw() {
     background(140);
	 noStroke();
 	 fill(245);
 	 rect(0,60,width,30);
 	 fill(0,70);
 	 rect(0,margin-5,width,10);
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
  socket.emit('socketEvent', { "lowerBlinds" : 1 });

}



function raiseBlinds(){
  raising = true;	
  lowering = false;
  socket.emit('socketEvent', { "raiseBlinds" : 1 });

}


function setAlarm() {
alarmDisplay.innerHTML = alarm.value;
}