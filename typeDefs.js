const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type SocialMedia {
    github: String
    linkedin: String
    facebook: String
    instagram: String
  }

  type User {
    _id: ID
    username: String
    name: String
    profilePic: String
    email: String
    headline: String
    address: String
    phone: String
    job: String
    isMentor: Boolean
    socialMedia: SocialMedia
    skills: [String]
  }

  type Meetup {
    _id: ID
    topic: String
    mentorId: User
    studentId: User
    date: String
    time: String
    lat: Float
    lng: Float
    detailPlace: String
    isConfirmed: Boolean
    isFinished: Boolean
    rating: Int
    review: String
  }

  input MeetupInput {
    topic: String!
    mentorId: ID!
    date: String!
    time: String!
    lat: Float!
    lng: Float!
    detailPlace: String!
  }

  input updateMeetup {
    topic: String
    date: String
    time: String
    lat: String
    lng: String
    detailPlace: String
    isConfirmed: Boolean
    isFinished: Boolean
    rating: Int
    review: String
  }

  type Query {
    meetups(isConfirmed: Boolean!): [Meetup]
    meetup(_id: ID!): Meetup
  }

  type Mutation {
    createMeetup(meetup: MeetupInput!): Meetup
    updateMeetup(_id: ID!, meetup: updateMeetup!): Meetup
  }
`;

module.exports = typeDefs;
