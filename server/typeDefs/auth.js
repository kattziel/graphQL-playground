const { gql } = require("apollo-server-express");
// import the gql function from apollo-server-express modules
// gql is a helper function that allows me to write GraphQL type definitions using a template literal syntax (easier syntax)

module.exports = gql`
  type Query {
    me: String!
  }
`;

// type Query { me: String } is a GraphQL schema defintion; Query is a Type with a single field called me; field me is of type String; it must always return a noon-null value when queried;