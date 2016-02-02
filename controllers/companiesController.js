var express = require("express");
var router = express.Router();
var Company = require("../models/company");

function error(response, message) {
  response.status(500);
  response.json({ error: message });
}

router.get("/", function(req, res) {
  Company.find({}).then(function(results) {
    res.json(results);
  });
});

router.get("/:id", function(req, res) {
  Company.findById(req.params.id).then(function(results) {
    res.json(results);
  });
});

module.exports = router;
