var Cylon = require('cylon');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .on("ready", fly)
    .device("nav",{
        driver: "ardrone-nav",
        connection: "ardrone"
    })
;
bot.nav.on("navdata", function(data){
    console.log(data);
}
    
// Fly the bot - modify this to give instructions for flight path
function fly(robot) {
    bot=robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    after (10*1000, function(){

    bot.drone.land();
});
    after(15*1000, function(){
        bot.drone.stop();

    });
}

Cylon.start();
