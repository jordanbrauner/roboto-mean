// REQUIRE
var express = require("express");
var app = express();
var mongoose = require("mongoose");
// Morgan logs requests to the console
var morgan = require("morgan");
var bodyParser = require("body-parser");

// CONFIGURE
mongoose.connect("mongodb://" + (process.env.MONGODB_URL_RW || "localhost/robotwarehouse"));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log("Connected");
});

app.use(morgan('dev'));
app.use(methodOverride());

// Routes
app.use("/robots", require("./controllers/robotsController"));

// Run
app.listen(process.env.PORT || 4000, function() {
  console.log("Server listening on port 4000");
});
