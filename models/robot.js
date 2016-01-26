// REQUIRE
require("../db/schema");
var mongoose = require("mongoose");

// DEFINE
var RobotModel = mongoose.model("Robot");

// EXPORT
module.exports = RobotModel;
