//https://github.com/leveluptuts/fullstack-graphql-apollo-react-meteor/blob/master/end%20of%20%2327/imports/startup/server/register-api.js

console.log("hello from ts");

import express from "express";
import merge from "lodash/merge";

import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import Schemas from "./src/schemas";

//resolvers
import HelloResolver from "./src/resolvers/Hello.resolver";
import MainResolver from "./src/resolvers/Main.resolver";

const resolvers = merge(MainResolver, HelloResolver);

const schema = makeExecutableSchema({
  typeDefs: Schemas,
  resolvers
});

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
