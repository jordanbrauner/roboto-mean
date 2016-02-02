// REQUIRE
require("../db/schema");
var mongoose = require("mongoose");

// DEFINE
var CompanyModel = mongoose.model("Company");

// EXPORT
module.exports = CompanyModel;
