const express = require("express");
const {
  userController,
  updateUser,
  deleteUser,
  getUserListings,
  getUser,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.get("/test", userController);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

module.exports = router;
