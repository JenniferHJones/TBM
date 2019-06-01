import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  createPost: function(data) {
    return axios.post("/api/posts", data);
  },
  register: function(data) {
    return axios.post("/api/user/register", data);
  },
  login: function(data) {
    return axios.post("/api/user/login", data);
  },
  dashboard: function(data) {
    return axios.post("/api/user/dashboard", data);
  },
  validateToken: function(token) {
    return axios.post("/api/user/validate", { token: token });
  },
  addProperty: function(data) {
    return axios.post("/api/propertyform/propertyform", data);
  },
  tableFindAll: function(data) {
    return axios.post(`/api/property/${data.id}`, data);
  },
  updateLeased: function(data) {
    return axios.put(`/api/property/${data.id}`, data);
  }

  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
};
