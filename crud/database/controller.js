import Users from "../model/user";

export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ error: "Error while getting users" });
  }
}

export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not provided" });

    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error: "Error while posting users" });
  }
}