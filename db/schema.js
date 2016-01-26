var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var RobotSchema = new Schema(
  {
    type: String,
    class: String,
    manufacturer: String,
    name: String,
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
