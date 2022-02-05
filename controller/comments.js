const comments = require("express").Router({ mergeParams: true });
const {
  fetchComments,
  fetchSingleComment,
  addComment,
  deleteComments,
  updateComment,
} = require("../queries/comments");

// comments.get("/", async (request, response) => {
//   const comments = await fetchComments();
//   console.log("Results from GET request", comments);
//   response.json({
//     success: true,
//     payload: comments,
//   });
// });

comments.get("/:id", async (request, response) => {
  const { id } = request.params;
  try {
    response.json(await fetchSingleComment(id));
  } catch (err) {
    response.status(404).json({ error: "Resource not found.", message: e });
  }
});

comments.post("/", async (request, response) => {
  console.log("request params comments: ", request.params);
  response.json(await addComment(request.body));
});

comments.delete("/:id", async (request, response) => {
  const { comment_id } = request.params;
  response.json(await deleteComments(comment_id));
});

comments.put("/:id", async (request, response) => {
  const { comments_id } = request.params;
  response.status(200).json(await updateComments(comments_id, request.body));
});

module.exports = comments;
