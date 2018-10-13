const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongoose").Types.ObjectId;

ObjectId.prototype.valueOf = function() {
  return this.toString();
};

const MeetupSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  mentorId: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  long: {
    type: String,
    required: true
  },
  detailPlace: {
    type: String,
    required: true
  },
  isFinished: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Meetup", MeetupSchema);