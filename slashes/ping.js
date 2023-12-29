module.exports = {
    data: {
        name: "ping",
        description: "Check the bot’s latency!",

    },
    code: `
   
    $defer
$interactionUpdate[
$let[ms;$executionTime]
$let[time;$getTimestamp]
$addField[Pong!;
Latency: $get[ms]ms
Round-trip: Calculating...
Uptime: $replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$parseMS[$uptime;4; ]; days;d]; hours;h]; minutes;m]; seconds;s]; day;d]; hour;h]; minute;m]; second;s] ]
$color[#2c2d31]]

$addField[Pong!;
Latency: $get[ms]ms
Round-trip: $round[$math[$getTimestamp-$get[time]]]ms
Uptime: $replace[$replace[$replace[$replace[$replace[$replace[$replace[$replace[$parseMS[$uptime;4; ]; days;d]; hours;h]; minutes;m]; seconds;s]; day;d]; hour;h]; minute;m]; second;s] ]
$color[#2c2d31]
  `}