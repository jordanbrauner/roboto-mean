// REQUIRE =====================================================================
var express        = require("express");
var app            = express();
var port           = process.env.PORT || 4000;
var mongoose       = require("mongoose");
var passport       = require("passport");
var flash          = require("connect-flash");
var session        = require("express-session");

var cookieParser   = require("cookie-parser");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var morgan         = require("morgan");

// Controllers
var robotsController       = require("./controllers/robotsController");
var corporationsController = require("./controllers/corporationsController");

var configDB = require("./config/database.js");


// CONFIGURE ===================================================================
mongoose.connect(configDB.url); // connect to database

require("./config/passport"); // pass passport for configuration

var db = mongoose.connection;
db.on("connected", function() { console.log("Mongoose default connection open to... ?"); });
db.on("error", function(err) { console.log("Mongoose default connection error: " + err); });
db.on("disconnected", function() { console.log("Mongoose default connection disconnected"); });

// Set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// Required for passport
app.use(session({ secret: "abcxyz" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// ROUTES ======================================================================
require("./config/routes.js"); // load our routes and pass in our app and fully configured passport

app.use("/robotdata", robotsController);
app.use("/corporationdata", corporationsController);

// TODO Why doesn't this work?
// app.get("/", function(req, res) {
//   res.render("index");
// });


// RUN =========================================================================
app.listen(port, function() {
  console.log("Server listening on port 4000");
});
