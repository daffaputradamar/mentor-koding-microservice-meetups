const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb://mentorkoding:mentork0ding@ds159110.mlab.com:59110/mentor-koding-users",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected | Meetup service"))
  .catch(err => console.log(err));
