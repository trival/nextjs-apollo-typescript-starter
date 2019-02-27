/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPosts
// ====================================================

export interface allPosts_allPosts {
  __typename: "Post";
  id: string;
  title: string;
  votes: number | null;
  url: string;
  createdAt: any | null;
}

export interface allPosts {
  allPosts: allPosts_allPosts[];
}

export interface allPostsVariables {
  first: number;
  skip: number;
}
