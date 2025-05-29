import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

// CREATE TABLE users
const user = sequelize.define('user', {
  // first_name VARCHAR(255) NOT NULL
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// User.sync();

export default user;