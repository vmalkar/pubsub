var redis = require("redis"),
    client = redis.createClient();

client.publish("temp-reading:living-room", "37.0");
client.subscribe("pubsub");
client.on("message", function(channel, message){
  console.log(channel + ": " + message);
});
