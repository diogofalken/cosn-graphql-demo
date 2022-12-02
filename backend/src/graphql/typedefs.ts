// The GraphQL schema
export const typeDefs = `#graphql
  type User {
    id: String!,
    email: String!,
    birthDate: String!
    name: String!
  }

  type Query {
    users(id: String): [User!]!
  }

  type Mutation {
    createUser(email: String!, birthDate: String!, name: String!): User!
  }
`;
