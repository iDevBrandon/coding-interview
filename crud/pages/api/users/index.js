import connectMongo from "../../../database/conn";

export default async function handler(req, res) {
  connectMongo();

  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ method, name: "GET me" });
      break;
    case "POST":
      res.status(200).json({ method, name: "POST me" });
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT me" });
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
