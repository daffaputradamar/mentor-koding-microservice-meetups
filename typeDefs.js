const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Meetup {
    _id: ID
    topic: String
    mentorId: ID
    studentId: ID
    Date: String
    lat: String
    long: String
    detailPlace: String
    isFinished: Boolean
  }

  input MeetupInput {
    topic: String!
    mentorId: ID!
    studentId: ID!
    Date: String!
    lat: String!
    long: String!
    detailPlace: String!
  }

  type Query {
    meetups: [Meetup]
    meetup(_id: ID!): Meetup
    meetupByMentor(mentorId: ID!): [Meetup]
    meetupByUser(studentId: ID!): [Meetup]
  }

  type Mutation {
    createMeetup(meetup: MeetupInput!): Meetup
  }
`;

module.exports = typeDefs;
