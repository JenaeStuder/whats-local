import axios from "axios";

export default {
  // Gets all books
  submitArtist: function(artistData) {
    return axios.post("/artists", artistData);
  },
  // Gets the book with the given id
  addMedia: function(media) {
    console.log(media)
    return axios.put("/artists/media/" + media.id, media);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
