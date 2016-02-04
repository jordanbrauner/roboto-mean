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

// Index
app.get("/", function(req, res) {
  Robot.find({}).then(function(results) {
    res.json(results);
  });
});

// Create
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

// Show
app.get("/:id", function(req, res) {
  Robot.findById(req.params.id).then(function(results) {
    res.json(results);
  });
});

// Update
app.put("/:id", function(req, res) {

  // Match put request to back-end model
  var update = {
    name: req.body.name,
    tagline: req.body.tagline,
    bio: req.body.bio,
    corporation: req.body.corporation,
    country: req.body.country,
    rClass: req.body.rClass,
    year: req.body.year,
    photoUrl: req.body.photoUrl,
    statistics: {
      power: req.body.statistics.power,
      energy: req.body.statistics.energy,
      agility: req.body.statistics.agility,
      armor: req.body.statistics.armor
    },
    pilots: {
      left: {
        name: req.body.pilots.left.name,
        nationality: req.body.pilots.left.nationality,
        battles: req.body.pilots.left.battles
      },
      right: {
        name: req.body.pilots.right.name,
        nationality: req.body.pilots.right.nationality,
        battles: req.body.pilots.right.battles
      }
    },
    contributions: {
      goal: req.body.contributions.goal,
      contribute: [
        {
          name: req.body.contributions.contribute.name,
          amount: req.body.contributions.contribute.amount
        }
      ]
    }
  };

  //
  Robot.findByIdAndUpdate(req.params.id, update).then(function(results) {
    console.log("This is the robot that was found (and updated?): " + results);
    res.json({ success: true });
  });
});

// Delete
app.delete("/:id", function(req, res) {
  Robot.findByIdAndRemove(req.params.id).then(function() {
    res.json({ success: true}) ;
  });
});

module.exports = app;
