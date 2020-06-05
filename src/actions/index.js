import axios from "axios";

// change to google books api
const ROOT_URL = `https://www.googleapis.com/books/v1/volumes?`;

export const SEARCH_BOOKS = "SEARCH_BOOKS";

export function searchBooks(term, callback) {
  const url = `${ROOT_URL}&q=${term}`;
  const request = axios.get(url);

  request.then(console.log("HI!!!!"));

  return {
    type: SEARCH_BOOKS,
    payload: request,
  };
}
