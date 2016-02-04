var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// Robot Schema
var RobotSchema = new Schema(
  {
    name: String,
    tagline: String,
    bio: String,
    corporation: String,
    country: String,
    rClass: String,
    year: String,
    photoUrl: String,
    statistics: {
      power: Number,
      energy: Number,
      agility: Number,
      armor: Number
    },
    pilots: {
      left: {
        name: String,
        nationality: String,
        battles: Number
      },
      right: {
        name: String,
        nationality: String,
        battles: Number
      }
    },
    contributions: {
      goal: String,
      contribute: [
        {
          name: String,
          amount: String
        }
      ]
    }
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

// Corporation Schema
var CorporationSchema = new Schema(
  {
    name: String,
    bio: String
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

RobotSchema.virtual("id").get(function() {
  return this._id;
});

CorporationSchema.virtual("id").get(function() {
  return this._id;
});

var RobotModel = mongoose.model("Robot", RobotSchema);
var CorporationModel = mongoose.model("Corporation", CorporationSchema);
