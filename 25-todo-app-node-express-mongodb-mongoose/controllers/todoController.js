const Todo = require("../models/todoModel");

const createNewTodo = async (req, res) => {
  try {
    const { userId, title, description } = req?.body;

    const newTodo = new Todo({
      userId,
      title,
      description,
    });

    const todo = await newTodo.save();

    if (todo) {
      return res.status(201).json({
        success: true,
        message: "Todo create successfully!",
        todo,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Todo not created!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: {
        userId: error?.errors?.userId?.message || "",
        title: error?.errors?.title?.message || "",
        description: error?.errors?.description?.message || "",
      },
    });
  }
};

module.exports = { createNewTodo };
