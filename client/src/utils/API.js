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
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
