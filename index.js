/* 
npm install mineflayer
npm install mineflayer-auto-auth
*/

var mineflayer = require('mineflayer');
var AutoAuth = require('mineflayer-auto-auth')
var bot = mineflayer.createBot({
    host: 'zurks.cl', // minecraft server ip
    username: 'testdocker', // minecraft username
    auth: 'offline', // for offline mode servers, you can set this to 'offline'
  // port: 25565,                // only set if you need a port that isn't 25565
    version: "1.20",             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    password: '7124bZBFf.',        // set if you want to use password-based auth (may be unreliable)
    plugins: [AutoAuth],
    AutoAuth: {
    logging: true,
    password: 'Ar1lorjt.',
    ignoreRepeat: true
  }
});

bot.on('serverAuth', function() {
  // Here bot should be already authorized
});
