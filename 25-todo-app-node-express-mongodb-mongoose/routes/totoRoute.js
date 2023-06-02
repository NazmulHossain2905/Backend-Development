const express = require("express");
const { createNewTodo } = require("../controllers/todoController");

const todoRoute = express.Router();

todoRoute.post("/", createNewTodo);

module.exports = todoRoute;
