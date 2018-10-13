const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://mentorkoding:mentork0ding@ds131313.mlab.com:31313/mentor-koding-meetups",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected | Meetup service"))
  .catch(err => console.log(err));
