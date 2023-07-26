const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
require("dotenv").config();
// i can use env variables



const app = express();

const typeDefs = `
type Query {
    totalPosts: Int!
}
`;

// resolvers - functions that resolve my queries
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

// graphql server
// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// await apolloServer.start();
// apolloServer.applyMiddleware({ app });

const apolloServer = new ApolloServer({ typeDefs, resolvers });

async function a() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
}
a();

const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
  res.json({
    data: "you git rest endpoint",
  });
});

app.listen(process.env.PORT, function () {
  console.log(`server is ready at http://localhost:${process.env.PORT}`);
  console.log(
    `graphQL server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
