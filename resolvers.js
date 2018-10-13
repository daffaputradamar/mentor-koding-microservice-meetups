const Meetup = require("./models/Meetup");
const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    meetups: async () => {
      return await Meetup.find();
    },
    meetup: async (root, _id) => {
      return await Meetup.findById(_id);
    },
    meetupByMentor: async (root, args) => {
      return await Meetup.find({ mentorId: args.mentorId });
    },
    meetupByUser: async (root, args) => {
      return await Meetup.find({ studentId: args.studentId });
    }
  },
  Mutation: {
    createMeetup: async (root, args) => {
      return await Meetup.create(args.meetup);
    }
  }
};

module.exports = resolvers;
