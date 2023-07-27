const { gql } = require("apollo-server-express");
const { posts } = require("../temp");

// const totalPosts = () => 42;

// queries
const totalPosts = () => posts.length;
const allPosts = () => posts;

// mutation
const newPost = (parent, args) => {
  console.log(args);
  const {title, description} = args.input;
  const post = {
    id: posts.length + 1,
    title,
    description
    // ...args.input - we could even use here spread operator for the args
  };
  posts.push(post);
  return post;
};

module.exports = {
  Query: {
    totalPosts,
    allPosts,
  },
  Mutation: {
    newPost
  },
};
