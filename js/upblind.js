var margin;
var blindPos;
var bottomPos;
var topPos;

function setup() {
  createGraphics(width, height);
  margin = 100;
  bottomPos = height-margin;
  blindPos = 200;
}

function draw() {
     background(255);
	 noStroke();
 	 fill(164,157,145,100);
 	 rect(margin, 100, width-margin, blindPos);
}

function testInput(){
  setInterval(lowerBlind, 100);
}


function lowerBlind(){


if(blindPos < bottomPos){
blindPos = blindPos+10;

}
}

function raiseBlind(){

	
}


function setAlarm() {
alarmDisplay.innerHTML = alarm.value;
}