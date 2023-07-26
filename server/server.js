const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");

require("dotenv").config();
// i can use env variables

const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const app = express();

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./typeDefs"))
);

const resolvers = {
  Query: {
    totalPosts: () => 42,
    me: () => "Kate did this"
  }
}

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
  res.json({
    data: "you hit rest endpoint great!",
  });
});

app.listen(process.env.PORT, function () {
  console.log(`server is ready at http://localhost:${process.env.PORT}`);
  console.log(
    `graphql server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
