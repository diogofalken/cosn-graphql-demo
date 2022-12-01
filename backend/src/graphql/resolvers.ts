import { randomUUID } from "crypto";
import { User } from "../entities/user";
import { users } from "../sample-data";

// A map of functions which return data for the schema.
export const userResolvers = {
  Query: {
    users: () => {
      return users;
    },
  },

  Mutation: {
    createUser: (_: unknown, args: Omit<User, "id">) => {
      const user = {
        id: randomUUID(),
        email: args.email,
        birthDate: args.birthDate,
      };

      users.push(user);

      return user;
    },
  },
};
