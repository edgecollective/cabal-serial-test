# cabal-serial-test

## Installation

Apologies -- I barely know what I'm doing!  But this seems to work:

```
npm install cabal-headless
npm install serialport
```

Load the code in soil_bot_firmware onto an Arduino-compatible device.

Note what serialport the Arduino ends up on; this is hard-coded into ```soil.js``` on line 5 (you should change it to match your system):

```
5    const port = new SerialPort('/dev/ttyACM0')
```


The cabal key for the bot is also hard-coded into ```soil.js``` on line 16 (change it to match your cabal):

```
16    var key = 'cabal://0201400f1aa2e3076a3f17f4521b2cc41e258c446cdaa44742afe6e1b9fd5f82'
```

## Usage

Type ```@cabalbot HELP``` to see a list of commands.






