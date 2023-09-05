const { Post } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};
const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      handleHttpError(res, "No se encontró el post", 404);
      return;
    }

    res.status(200).json(post);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createPost = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const data = await Post.create(body);
    if (!data || data.length === 0) {
      handleHttpError(res, "No existe datos de post");
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedPost = await Post.findByPk(id);

    if (!updatedPost) {
      handleHttpError(res, "No se encontró el post a actualizar", 404);
      return;
    }

    // Actualiza los campos del post
    Object.keys(body).forEach((key) => {
      updatedPost[key] = body[key];
    });

    await updatedPost.save();

    res.status(200).json({ message: "¡Post actualizado exitosamente!" });
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const postToDelete = await Post.findByPk(id);

    if (!postToDelete) {
      handleHttpError(res, "No se encontró el post a eliminar", 404);
      return;
    }

    await postToDelete.destroy();

    res.status(200).json({ message: "¡Post borrado exitosamente!" }); // Respuesta exitosa sin contenido
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createPost, getPosts, getPost, updatePost, deletePost };
