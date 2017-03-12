# build a kitchen recipe display
Nicely framed monitor hung in the kitchen, conveniently placed where its readible for following recipes.

Use your phone to send recipes to the monitor.  Utilize the Share feature of the webpage - either copy url or some special override (may require installing an app)

## Physical Controls
- Side buttons
	- Ingredients (show ingredients of recipe in context)
	- Directions (show directions … )
	- On/Off toggle

## block diagram
- RPi
	- Web server (node JS)
		- client (angular)
			- chromium-kiosk (display)
        - api (phone input)

 	- Button Listener (python)
		- Http request (triggered by GPIO inputs)

- Phone
	- App
		- Http request (makes call to RPi)

## Recipe API
- GET /api/display/connect
- POST /api/display/recipe
```json
{
	“url”: “http://www.seriouseats.com/recipes/2017/03/easy-pressure-cooker-pork-chile-verde-recipe.html”
}
```
- POST /api/display/ingredients
- POST /api/display/directions
- POST /api/display/off

### tests
```bash
curl -H "Content-Type: application/json" -X POST -d '{"url":"http://www.seriouseats.com/recipes/2017/03/easy-pressure-cooker-pork-chile-verde-recipe.html"}' http://localhost:4300/api/display/recipe

curl -H "Content-Type: application/json" -X POST -d '{"url":"http://www.seriouseats.com/recipes/2016/02/spaghetti-pasta-alle-vongole-clams-recipe.html"}' http://localhost:4300/api/display/recipe

```

## Recipe Parsers
Each website should have its own parser, as well as a general purpose parser that makes a best guess at how to get the Ingredients and Directions.


## Button Listener

```python
#!/usr/bin/env python

import time
import RPi.GPIO as GPIO


# handle the button event
def buttonEventHandler (pin):
    print "handling button event"

    # turn the green LED on
    GPIO.output(25,True)

    time.sleep(1)

    # turn the green LED off
    GPIO.output(25,False)



# main function
def main():

    # tell the GPIO module that we want to use 
    # the chip's pin numbering scheme
    GPIO.setmode(GPIO.BCM)

    # setup pin 23 as an input
    GPIO.setup(23,GPIO.IN)
    GPIO.setup(24,GPIO.OUT)
    GPIO.setup(25,GPIO.OUT)

    # tell the GPIO library to look out for an 
    # event on pin 23 and deal with it by calling 
    # the buttonEventHandler function
    GPIO.add_event_detect(23,GPIO.FALLING)
    GPIO.add_event_callback(23,buttonEventHandler,100)

    # turn off both LEDs
    GPIO.output(25,False)
    GPIO.output(24,True)

    # make the red LED flash
    while True:
        GPIO.output(24,True)
        time.sleep(1)
        GPIO.output(24,False)
        time.sleep(1)


    GPIO.cleanup()



if __name__=="__main__":
    main()
```


## task list

- parse recipes from a url
- display content in angular
- control state via control messages
    - display ingredient
    - display directions