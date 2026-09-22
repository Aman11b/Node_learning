const User = require("../models/user");

async function handleGetAllUser(req, res) {
  const allDbUsers = await User.find();
  const html = `
      <ul>
      ${allDbUsers
        .map(
          (user) =>
            `<span>Name: ${user.first_name} - Email: ${user.email}</span><br>`,
        )
        .join("")}
      </ul>
      `;
  res.send(html);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" });
  return res.json({ status: "success" });
}

async function handleDeleteByUserId(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "deleted" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;

  const result = await User.create({
    ...body,
  });

  return res.status(201).json({ status: `User created Id:${result._id}` });
}

module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteByUserId,
  handleCreateNewUser,
};
