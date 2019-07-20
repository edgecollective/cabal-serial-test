// serial setup

const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyACM0')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))


// cabal setup

var Headless = require('cabal-headless')

var key = 'cabal://dbba51816be0a6199a769f96726621398d81db6faca829012f79c3c2d8d5f529'

var opts = {}

var cabalkey = key.replace("cabal://", "").replace("cbl://", "")

var headless = Headless(cabalkey, { temp: opts.temp || false })

headless.nick('cabalbot')

headless.connect() // connect to the cabal's swarm



//parser.on('data', console.log)

// Switches the port into "flowing mode"
parser.on('data', function (data) {

    console.log('Data:', data)

    headless.post({
        messageType: "chat/text",
        channel: "default",
        message: data
    })

  })