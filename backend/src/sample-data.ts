import { randomUUID } from "crypto";
import { User } from "./entities/user";

export const users: User[] = [
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
