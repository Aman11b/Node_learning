const express = require("express");

const {
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteByUserId,
  handleCreateNewUser,
} = require("../controllers/user");
const router = express.Router();

router.route("/").get(handleGetAllUser).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteByUserId);

module.exports = router;
