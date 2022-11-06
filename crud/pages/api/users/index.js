import connectMongo from "../../../database/conn";
import {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} from "../../../database/controller";

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
      deleteUser(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not supported`);
      break;
  }
}
