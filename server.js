// REQUIRE
var express = require("express");
var app = express();
var mongoose = require("mongoose");
// Morgan logs requests to the console
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var robotsController = require("./controllers/robotsController");
var corporationsController = require("./controllers/corporationsController");


// CONFIGURE MONGOOSE
// mongoose.connect("mongodb://" + (process.env.MONGODB_URL_RW || "localhost/robotwarehouse"));
mongoose.connect(process.env.MONGODB_URL_RW);
var db = mongoose.connection;
// When successfully connected
db.on("connected", function () {
  console.log("Mongoose default connection open to... ?");
});
// If the connection throws an error
db.on("error",function (err) {
  console.log("Mongoose default connection error: " + err);
});
// When the connection is disconnected
db.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});


// CONFIGURE DEPENDENCIES
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// ROUTES
// app.use(routes);

app.use("/robotdata", robotsController);
app.use("/corporationdata", corporationsController);

// TODO Why doesn't this work?
// app.get("/", function(req, res) {
//   res.render("index");
// });

// RUN
app.listen(process.env.PORT || 4000, function() {
  console.log("Server listening on port 4000");
});

console.log(process.env.MONGODB_URL_RW);
