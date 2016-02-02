var express = require("express");
var router = express.Router();
var Corporation = require("../models/corporation");

function error(response, message) {
  response.status(500);
  response.json({ error: message });
}

router.get("/", function(req, res) {
  Corporation.find({}).then(function(results) {
    res.json(results);
  });
});

router.get("/:id", function(req, res) {
  Corporation.findById(req.params.id).then(function(results) {
    res.json(results);
  });
});

module.exports = router;
