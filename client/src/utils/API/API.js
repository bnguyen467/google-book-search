import axios from "axios";

const API = {
  getBook: (search) => axios.get(`/api/title/${search}`),
  getSavedBook: () => axios.get("/api/books"),
  saveBook: (books) => axios.post("/api/books", books),
  deleteBook: (id) => axios.delete(`/api/books/${id}`),
};

export default API;
