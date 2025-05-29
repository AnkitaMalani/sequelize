import express from "express";
import {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "./controllers/users.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello world!"));

app.route('/users').get(getAllUser).post(createUser);

app.route('/users:id').get(getUserById).put(updateUser).delete(deleteUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
