import axios from "axios";

export default {
  // submit user/artist
  submitArtist: function(artistData) {
    console.log("api"); 
    return axios.post("/api/artists", artistData);
  },
  // add media uploads
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
