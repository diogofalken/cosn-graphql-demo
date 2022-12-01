// The GraphQL schema
export const typeDefs = `#graphql
  type User {
    id: String!,
    name: String!,
    email: String!,
    birthDate: String!
  }

  type Query {
    users(id: String): [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, birthDate: String!): User!
  }
`;
