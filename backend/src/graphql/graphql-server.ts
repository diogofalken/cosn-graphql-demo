import { ApolloServer } from "@apollo/server";
import { userResolvers } from "./resolvers";
import { typeDefs } from "./typedefs";

  export const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers: userResolvers,
  });
