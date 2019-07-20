# cabal-serial-test


## Usage

Type ```@cabalbot HELP``` into a cabal to see a list of commands -- the @cabalbot will do your bidding!


## Installation

(Apologies -- I barely know how to use Node -- but this seems to work):

### Node packages

Install ```cabal-headless``` and ```serialport``` via npm:

```
npm install cabal-headless
npm install serialport
```

### Microcontroller code

Load the code in soil_bot_firmware onto an Arduino-compatible device.

Note what serialport the Arduino ends up on; this is hard-coded into ```soil.js``` on line 5 (you should change it to match your system):

```
5    const port = new SerialPort('/dev/ttyACM0')
```

### Cabal setup

The cabal key for the bot is also hard-coded into ```soil.js``` on line 16 (change it to match your cabal):

```
16    var key = 'cabal://0201400f1aa2e3076a3f17f4521b2cc41e258c446cdaa44742afe6e1b9fd5f82'
```







