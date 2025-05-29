import user from "../models/User.js";

const getAllUser = async (req, res) => {
  try {
    const users = await user.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const users = await user.create(req.body);
    //  "INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3,) RETURNING *;",

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const getUserById = async (req, res) => {
  try {
    // const { id } = req.params;
    const {
      params: { id },
    } = req;

    const users = await user.findByPk(id, { include: user });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const updateUser = async (req, res) => {
  try {
    const {
      body: { first_name, last_name, email },
      params: { id },
    } = req;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const users = await user.findByPk(id);
    if (!users) return res.status(404).json({ error: "User not found" });
    await user.update(req.body);

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const users = await user.findByPk(id);
    await users.destroy();

    res.json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal server error." });
  }
};
export { getAllUser, createUser, getUserById, updateUser, deleteUser };
