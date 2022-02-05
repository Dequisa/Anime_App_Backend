const db = require("../db/config.js");

const fetchComments = async () => {
  try {
    const comments = await db.any("SELECT * FROM  comments");
    return comments;
  } catch (err) {
    console.log(err);
    debugger;
  }
};

const fetchSingleComment = async (comment_id) => {
  try {
    const fetchSingleReview = await db.any(
      "SELECT * FROM comments WHERE anime_id=$1",
      comment_id
    );
    console.log("fetch query results comments:", fetchSingleReview);
    return fetchSingleReview;
  } catch (err) {
    console.log(err);
    return err;
    debugger;
  }
};

const addComment = async (comment) => {
  try {
    if (!comment_commentor) {
      throw "You must specify a value for name";
    }
    const newComment = await db.one(
      "INSERT INTO comments(character_id,commentor,title,comment ) VALUES($1, $2, $3, $4) RETURNING *",
      [character_id, commentor, title, comment]
    );
    return newComment;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteComment = async (comment_id) => {
  try {
    const removeComment = await db.one(
      "DELETE FROM comments WHERE comment_id=$1 RETURNING *",
      comment_id
    );
    return removeComment;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateComment = async (comment_id, comment) => {
  try {
    const modifySingleComment = await db.one(
      `UPDATE comments SET commentor=$1, title=$2, comment=$3 WHERE comment_id=$4, character_id=$5 RETURNING *`,
      [
        comment.commentor,
        comment.title,
        comment.comment,
        comment_id,
        character_id,
      ]
    );
    return modifySingleComment;
  } catch (err) {
    console.log(err);
    return err;
  }
};
module.exports = {
  fetchComments,
  fetchSingleComment,
  addComment,
  deleteComment,
  updateComment,
};
