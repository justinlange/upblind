/*
    Adafruit Arduino - Lesson 16. Stepper
 */

#include <Stepper.h>

int in1Pin = 12;
int in2Pin = 11;
int in3Pin = 10;
int in4Pin = 9;

int msteps = 0;

Stepper motor(32, in1Pin, in2Pin, in3Pin, in4Pin);

void setup()
{
  Serial.begin(9600);
  
  pinMode(in1Pin, OUTPUT);
  pinMode(in2Pin, OUTPUT);
  pinMode(in3Pin, OUTPUT);
  pinMode(in4Pin, OUTPUT);

  // this line is for Leonardo's, it delays the serial interface
  // until the terminal window is opened
  motor.setSpeed(150);
}

void loop()
{
/*  
  msteps++;

      motor.step(steps);
 Serial.println("hello world!");
  */
  
  if (Serial.available())
  {
    int steps = Serial.parseInt();
    motor.step(steps);
    delay(2);
    Serial.println(steps);
  }
  
}

