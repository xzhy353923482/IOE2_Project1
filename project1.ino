
#include "config.h"

#define BUTTON_PIN 16
#define LED_PIN 14 
#define LED_PIN2 13
#define LED_PIN3 12

int current = 0;

AdafruitIO_Feed *changeButton = io.feed("changeButton");

void setup() {

  pinMode(BUTTON_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT); //New!
  pinMode(LED_PIN2, OUTPUT);
  pinMode(LED_PIN3, OUTPUT);
  Serial.begin(115200);

  while(! Serial);

  Serial.print("Connecting to Adafruit IO");
  io.connect();

  while(io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println();
  Serial.println(io.statusText());

}

void loop() {

  io.run();

  if(digitalRead(BUTTON_PIN) == LOW){
    current++;
    Serial.print("sending button -> ");
    Serial.println(current);
    changeButton->save(current); 
  }

  if(current == 0){
    digitalWrite(LED_PIN, LOW);
    digitalWrite(LED_PIN2, LOW);
    digitalWrite(LED_PIN3, LOW);
  }else if(current == 1){
    digitalWrite(LED_PIN, HIGH);
    digitalWrite(LED_PIN2, LOW);
    digitalWrite(LED_PIN3, LOW);
  }else if(current == 2){
    digitalWrite(LED_PIN, LOW);
    digitalWrite(LED_PIN2, HIGH);
    digitalWrite(LED_PIN3, LOW);
  }else if(current == 3){
    digitalWrite(LED_PIN, LOW);
    digitalWrite(LED_PIN2, LOW);
    digitalWrite(LED_PIN3, HIGH);
  }else if(current == 4){
    current = 0;
  }
}
