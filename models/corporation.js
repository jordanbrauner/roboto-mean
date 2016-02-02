// REQUIRE
require("../db/schema");
var mongoose = require("mongoose");

// DEFINE
var CorporationModel = mongoose.model("Corporation");

// EXPORT
module.exports = CorporationModel;
