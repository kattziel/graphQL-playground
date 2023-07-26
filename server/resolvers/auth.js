const { gql } = require("apollo-server-express");

const me = () => "Kate did this amazing server";

module.exports = {
  Query: {
    me
  },
};
