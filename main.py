import board
import time
from digitalio import DigitalInOut, Direction, Pull

from analogio import AnalogIn
analog_in = AnalogIn(board.A2)

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT
led.value = False

while True:
    print(analog_in.value*3.3/65536)
    print("\n")
    led.value = True
    time.sleep(.1)
    led.value=False
    time.sleep(1)
