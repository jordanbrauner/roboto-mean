var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var RobotSchema = new Schema(
  {
    name: String,
    tagline: String,
    bio: String,
    manufacturer: String,
    country: String,
    rClass: String,
    year: String,
    photoUrl: String,
    statistics: {
      power: Number,
      energy: Number,
      agility: Number,
      armor: Number,
    },
    pilots: []
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

RobotSchema.virtual("id").get(function() {
  return this._id;
});

var RobotModel = mongoose.model("Robot", RobotSchema);
