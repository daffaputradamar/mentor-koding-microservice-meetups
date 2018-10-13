const { gql } = require("apollo-server-express");

const typeDefs = gql`
  Type Meetup {
    topic: String  
    mentorId: ID
    studentId: ID
    Date: String
    lat: String
    long: String
    detailPlace: String
    isFinished: Boolean
  }

  Input MeetupInput {
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
    meetup(_id: ID): Meetup
    meetupByMentor(mentorId: ID):[Meetup]
    meetupByUser(userId: ID):[Meetup]
  }

  type Mutation {
    createMeetup(meetup: MeetupInput!): Meetup
  }
`;

module.exports = typeDefs;
