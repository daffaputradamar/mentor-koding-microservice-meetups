const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const verifyToken = require("./config/verifyToken");

require("./config/db");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(cors());
app.use(express.json());

const path = "/graphql";

// app.use(verifyToken);
server.applyMiddleware({ app, path });

app.listen(process.env.PORT || 4000, () =>
  console.log("Service meetup is listening")
);
