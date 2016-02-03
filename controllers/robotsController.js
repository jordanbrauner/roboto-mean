var express = require("express");
var app = express();
// var router = express.Router();
var Robot = require("../models/robot");

function error(response, message) {
  response.status(500);
  response.json({ error: message });
}

app.get("/", function(req, res) {
  Robot.find({}).then(function(results) {
    res.json(results);
  });
});

app.post("/", function(req, res) {
  res.send("Post request to /robotdata");
});

app.get("/:id", function(req, res) {
  Robot.findById(req.params.id).then(function(results) {
    res.json(results);
  });
});

module.exports = app;


// router.get("/", function(req, res) {
//   Robot.find({}).then(function(results) {
//     res.json(results);
//   });
// });
//
// router.post("/", function(req, res) {
//   console.log("This is the request: " + req.body);
// });
//
// router.get("/:id", function(req, res) {
//   Robot.findById(req.params.id).then(function(results) {
//     res.json(results);
//   });
// });
//
// module.exports = router;
