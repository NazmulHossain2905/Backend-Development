const { v4: uuid } = require("uuid");

const users = [
  {
    id: uuid(),
    username: "nazmulhossain",
    email: "nazmulhossain@gmail.com",
    phone: "01734562378",
  },
  {
    id: uuid(),
    username: "sobujhossain",
    email: "sobujhossain@gmail.com",
    phone: "01730862378",
  },
];

module.exports = users;
