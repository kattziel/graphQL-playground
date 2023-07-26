const { gql } = require("apollo-server-express");

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
  }
  type Query {
    totalPosts: Int!
    allPosts: [Post!]!
  }
`;
// in Query we are stating that we will be returning totalposts value which cannot be null and has to be of type integer + allPosts data, this is array of Posts; because Post is an array; we are stating that it has to be an array and has to be fulfilled with Post types; now we have the query and have to fill it with resolvers;
