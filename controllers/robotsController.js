var express = require("express");
var app = express();
// var router = express.Router();
var Robot = require("../models/robot");

// function error(response, message) {
//   response.status(500);
//   response.json({ error: message });
// }

// Block added by way of mean stack book
var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) {
        return err.errors[errName].message;
      } else {
        return 'Unknown server error';
      }
    }
  }
};

app.get("/", function(req, res) {
  Robot.find({}).then(function(results) {
    res.json(results);
  });
});

app.post("/", function(req, res) {
  var robot = new Robot(req.body);
  robot.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(robot);
    }
  });
});

app.get("/:id", function(req, res) {
  Robot.findById(req.params.id).then(function(results) {
    res.json(results);
  });
});

app.delete("/:id", function(req, res) {
  Robot.findByIdAndRemove(req.params.id).then(function() {
    res.json({ success: true}) ;
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
