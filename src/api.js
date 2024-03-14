import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-project-r24g.onrender.com/api",
});

export const fetchArticles = () => {
  return newsApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchCommentsByArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchArticle = (article_id, likes) => {
  const patchBody = { inc_votes: likes };
  return newsApi
    .patch(`/articles/${article_id}`, patchBody)
    .then((response) => {
      return response;
    });
};

export const fetchUsers = () => {
  return newsApi.get("/users").then((response) => {
    return response.data.users;
  });
};

export const postComment = (article_id, username, body) => {
  const postBody = {
    username: username,
    body: body,
  };
  return newsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi
  .delete(`/comments/${comment_id}`)
  .then((response) => {
    return response.data
  })
}