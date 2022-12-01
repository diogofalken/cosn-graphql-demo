import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express, { json } from "express";
import { graphqlServer } from "./graphql/graphql-server";
import { usersRouter } from "./rest/rest-router";

async function bootstrap() {
  const app = express();

  await graphqlServer.start();

  app.use(cors());
  app.use(json());

  app.use("/graphql", expressMiddleware(graphqlServer));

  app.use(usersRouter);

  return app.listen(4000);
}
bootstrap().then(() => console.log("Listening on http://0.0.0.0:4000"));
