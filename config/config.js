/* eslint-disable prettier/prettier */
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASS } = process.env;

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": "vulcan_db",
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": "vulcan_db",
    "host": DB_HOST,
    "dialect": "mysql"
  },
};
