const Posts = require("../models/postsModel");

exports.createNewPost = async (req, res) => {
  try {
    const { title, content, author, likes, published } = req?.body;
    const newPost = new Posts({
      title,
      content,
      author,
      likes,
      published,
    });
    const post = await newPost.save();

    if (post) {
      return res.status(201).json({
        success: true,
        message: "Post create successfully",
        post,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Post not created!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const { like, published } = req?.query;
    let posts = [];

    if (like && published) {
      // posts = await Posts.find({ likes: { $ne: like } }, { likes: 1, _id: 0 });
      posts = await Posts.find({
        $and: [{ likes: { $lt: like } }, { published: { $eq: published } }],
      });
    } else posts = await Posts.find();

    return res.status(200).json({
      success: true,
      total: posts.length,
      posts,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSinglePostById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const post = await Posts.findById({ _id: id });

    if (post) {
      return res.status(200).json({
        success: true,
        message: "Post found successfully!",
        post,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updatePostById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const { title, content, author, likes, published } = req?.body;
    const post = await Posts.findByIdAndUpdate(
      { _id: id },
      { $set: { title, content, author, likes, published } }
    );

    if (post) {
      return res.status(200).json({
        success: true,
        message: "Post update successfully!",
        // user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Post not exist!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const post = await Posts.findOneAndDelete({ _id: id });

    if (post) {
      return res.status(200).json({
        success: true,
        message: "Post delete successfully!",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Post not exist!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
