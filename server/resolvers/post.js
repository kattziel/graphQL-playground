const { gql } = require("apollo-server-express");
const { posts } = require("../temp");

// const totalPosts = () => 42;

// queries
const totalPosts = () => posts.length;
const allPosts = () => posts;

// mutation
const newPost = (parent, args) => {
  console.log(args);
  const post = {
    id: posts.length + 1,
    title: args.title,
    description: args.description,
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
