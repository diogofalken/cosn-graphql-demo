import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { randomUUID } from "node:crypto";
import { User } from "./entities/user";

const users: User[] = [
  {
    id: randomUUID(),
    name: "Diogo",
    email: "diogo@me.com",
    birthDate: "22-01-1999",
  },
  {
    id: randomUUID(),
    name: "Breno",
    email: "breno@me.com",
    birthDate: "22-01-1997",
  },
  {
    id: randomUUID(),
    name: "Tó",
    email: "to@me.com",
    birthDate: "22-02-1997",
  },
  {
    id: randomUUID(),
    name: "Cepo",
    email: "cepo@me.com",
    birthDate: "03-01-2018",
  },
];

// The GraphQL schema
const typeDefs = `#graphql
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

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    users: (_, { id }) => {
      return id != null ? users.filter((user) => user.id === id) : users;
    },
  },

  Mutation: {
    createUser: (_, args) => {
      const user = {
        id: randomUUID(),
        name: args.name,
        email: args.email,
        birthDate: args.birthDate,
      };

      users.push(user);

      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function bootstrap() {
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
}

bootstrap();
