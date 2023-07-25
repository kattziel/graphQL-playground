// creating a new server

const { ApolloServer } = require("apollo-server");
require("dotenv").config();

// types - my queries

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
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

apolloServer.listen(process.env.PORT, function(){
    console.log(`graphQL server is ready at http://localhost:${process.env.PORT}`);
})