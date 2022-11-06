import connectMongo from "../../../database/conn";
import { getUsers, postUser, updateUser } from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo();

  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "PUT":
      updateUser(req, res);
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE me" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not supported`);
      break;
  }
}
