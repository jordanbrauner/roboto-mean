var mongoose = require("mongoose");
var schema = require("./schema");
var Robot = require("../models/robot");
// var Corporation = require("../models/corporation");
var robotData = require("./robot_data.json");
// var corporationData = require("./corporation_data.json");

mongoose.connect("mongodb://" + (process.env.MONGODB_URL_RW || "localhost/robotwarehouse"));
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Oops! Is Mongod running?");
  console.log(err.message);
  process.exit();
});

db.once("open", function() {
  console.log("Connected to the database.");
  Robot.remove({}).then(function() {
    forEach(robotData, function(robotDatum) {
      return new Robot(robotDatum).save();
    }).then(function() {
      process.exit();
    });
  });
  // Corporation.remove({}).then(function() {
  //   forEach(corporationData, function(corporationDatum) {
  //     return new Corporation(corporationDatum).save();
  //   }).then(function() {
  //     process.exit();
  //   });
  // });
});

function forEach(collection, callback, index){
  if(!index) index = 0;
  return callback(collection[index]).then(function(){
    if(collection[index + 1]) return forEach(collection, callback, index + 1);
  });
}
