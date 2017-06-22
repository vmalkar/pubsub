var redis = require("redis"),
    client = redis.createClient();

client.publish("pubsub", "37.0");
client.subscribe("pubsub");
client.on("message", function(channel, message){
  console.log(channel + ": " + message);
});
