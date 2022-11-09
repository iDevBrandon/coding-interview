import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";
export default async function handle(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection error" }));

  if (req.body === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data" });

    const { username, email, password } = req.body;

    const existingUser = await Users.findOne({ email });
    if (existingUser)
      return res.status(422).json({ message: "User already existed" });

    // hash password
    Users.create(
      { username, email, password: await hash(password, 12) },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST accepted" });
  }
}
