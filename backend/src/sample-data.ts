import { randomUUID } from "crypto";
import { User } from "./entities/user";

export const users: User[] = [
  {
    id: randomUUID(),
    email: "diogo@me.com",
    birthDate: "22-01-1999",
    name: "Diogo"
  },
  {
    id: randomUUID(),
    email: "breno@me.com",
    birthDate: "22-01-1997",
    name: "Breno"
  },
  {
    id: randomUUID(),
    email: "to@me.com",
    birthDate: "22-02-1997",
    name: "To"
  },
  {
    id: randomUUID(),
    email: "cepo@me.com",
    birthDate: "03-01-2018",
    name: "Cepo"
  },
];
