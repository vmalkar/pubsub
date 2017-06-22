var redis = require("redis"),
    client = redis.createClient();

client.subscribe("pubsub");
client.on("message", function(channel, message){
  console.log(channel + ": " + message);
});
