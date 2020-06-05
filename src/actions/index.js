import axios from "axios";

// change to google books api
const ROOT_URL = `https://www.googleapis.com/books/v1/volumes`;

export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const SEARCH_BOOK = "SEARCH_BOOK";
export const SEND_TAGS = "SEND_TAGS";

export function searchBooks(term) {
  const url = `?${ROOT_URL}&q=${term}&maxResults=25`;
  const request = axios.get(url);

  request.then(console.log("HI!!!!"));

  return {
    type: SEARCH_BOOKS,
    payload: request,
  };
}

export function sendTags(tags) {
  const request = tags;

  return {
    type: SEND_TAGS,
    payload: request,
  };
}

export function searchBook(id) {
  const url = ROOT_URL + "/" + id;
  const request = axios.get(url);

  return {
    type: SEARCH_BOOK,
    payload: request,
  };
}
