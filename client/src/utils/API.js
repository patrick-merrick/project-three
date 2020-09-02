const axios = require("axios");
const BASEURL = "https://linkedin-id-search-v2.p.rapidapi.com/api/";
// let userId = "joe-brimeyer-15398015";

export default {
  linkedInSearch: function (userId) {
    return axios({
      method: "GET",
      url: BASEURL + userId,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "linkedin-id-search-v2.p.rapidapi.com",
        "x-rapidapi-key": "7984cc2852msh588e23d14de2975p1aac9ejsndf173a4e58c1",
        useQueryString: true,
      },
    });
  },
};
// getRandomDog: function() {
//   return axios.get("https://dog.ceo/api/breeds/image/random");
// },
// Gets all books
// getBooks: function() {
//   return axios.get("/api/books");
// },
// Gets the book with the given id
// getBook: function(id) {
//   return axios.get("/api/books/" + id);
// },
// Deletes the book with the given id
// deleteBook: function(id) {
//   return axios.delete("/api/books/" + id);
// },
// Saves a book to the database
// saveBook: function(bookData) {
//   return axios.post("/api/books", bookData);
// }
