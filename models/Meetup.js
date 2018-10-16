const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongoose").Types.ObjectId;
const Float = require("mongoose-float").loadType(mongoose, 14);

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
    required: true,
    ref: "User"
  },
  studentId: {
    type: String,
    required: true,
    ref: "User"
  },
  date: {
    type: String,
    required: true
  },
  lat: {
    type: Float,
    required: true
  },
  lng: {
    type: Float,
    required: true
  },
  detailPlace: {
    type: String,
    required: true
  },
  isConfirmed: {
    type: Boolean,
    default: false
  },
  isFinished: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: null
  },
  review: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Meetup", MeetupSchema);
