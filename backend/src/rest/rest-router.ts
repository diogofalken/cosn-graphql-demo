import { Router, Request, Response } from "express";
import { users } from "../sample-data";

export const usersRouter = Router();

usersRouter.get("/users", function (_req: Request, res: Response) {
  return res.json(users.map(function ({id, email}) {
    return {id, email};
  }));

});

usersRouter.get("/users/:id", function (req: Request, res: Response) {
  const user = users.find(function ({id}) {
    return id === req.params.id;
  })
  if (user == null) {
    return res.status(404).json({error: "Not Found"});
  }
  return res.json(user);
});
