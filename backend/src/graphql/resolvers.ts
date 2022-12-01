import { randomUUID } from "crypto";
import { users } from "../sample-data";

// A map of functions which return data for the schema.
export const userResolvers = {
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
