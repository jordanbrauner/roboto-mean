var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// Robot Schema
var RobotSchema = new Schema(
  {
    name: String,
    tagline: String,
    bio: String,
    company: String,
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
    pilots: [
      {
        name: String,
        nationality: String,
        battles: Number
      }
    ],
    contributions: [
      {
        goal: Number,
        contributions: String
      }
    ]
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

// Company Schema
var CompanySchema = new Schema(
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

CompanySchema.virtual("id").get(function() {
  return this._id;
});

var RobotModel = mongoose.model("Robot", RobotSchema);
var CompanyModel = mongoose.model("Company", CompanySchema);
