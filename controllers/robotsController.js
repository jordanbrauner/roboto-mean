var express = require("express");
var router = express.Router();
var Robot = require("../models/robot");

function error(response, message) {
  response.status(500);
  response.json({ error: message });
}

router.get("/", function(req, res) {
  Robot.find({}).then(function(results) {
    res.json(results);
  });
});

router.get("/:id", function(req, res) {
  Robot.findById(req.params.id).then(function(results) {
    res.json(results);
  });
});

module.exports = router;
