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
        let meetup = args.meetup;
        meetup.studentId = context.data;
        return await Meetup.create(meetup);
      } else {
        throw new AuthenticationError("Must Authenticate");
      }
    },
    updateMeetup: async (root, args, context) => {
      if (context.data) {
        let meetup = await Meetup.findOneAndUpdate(
          { _id: args._id },
          {
            $set: args.user
          }
        );
        return await Meetup.findById(args._id);
      } else {
        throw new AuthenticationError("Must Authenticate");
      }
    }
  }
};

module.exports = resolvers;
