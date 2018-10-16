const Meetup = require("./models/Meetup");
const User = require("./models/User");

const resolvers = {
  Query: {
    meetups: async (root, args, context) => {
      if (context.data) {
        console.log(args);
        if (args.isConfirmed) {
          return await Meetup.find({
            $or: [{ mentorId: context.data }, { studentId: context.data }],
            isConfirmed: true
          })
            .populate("studentId")
            .populate("mentorId");
        } else {
          return await Meetup.find({
            mentorId: context.data,
            isConfirmed: false
          })
            .populate("studentId")
            .populate("mentorId");
        }
      } else {
        throw new AuthenticationError("Must Authenticate");
      }
    },
    meetup: async (root, args, context) => {
      if (context.data) {
        return await Meetup.findById(args._id)
          .populate("studentId")
          .populate("mentorId");
      } else {
        throw new AuthenticationError("Must Authenticate");
      }
    }
  },
  Mutation: {
    createMeetup: async (root, args, context) => {
      if (context.data) {
        let user = args.meetup;
        user.studentId = context.data;
        return await Meetup.create(user);
      } else {
        throw new AuthenticationError("Must Authenticate");
      }
    },
    updateMeetup: async (root, args, context) => {
      if (context.data) {
        let meetup = await Meetup.findById(args._id);
        return await meetup.update({
          topic: args.meetup.topic || meetup.topic,
          date: args.meetup.date || meetup.date,
          lat: args.meetup.lat || meetup.lat,
          lng: args.meetup.lng || meetup.lng,
          detailPlace: args.meetup.detailPlace || meetup.detailPlace,
          isConfirmed: args.meetup.isConfirmed || meetup.isConfirmed,
          isFinished: args.meetup.isFinished || meetup.isFinished,
          rating: args.meetup.rating || meetup.rating,
          review: args.meetup.review || meetup.review
        });
      } else {
        throw new AuthenticationError("Must Authenticate");
      }
    }
  }
};

module.exports = resolvers;
