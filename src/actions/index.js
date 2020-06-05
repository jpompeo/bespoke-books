import axios from "axios";

// change to google books api
const ROOT_URL = `https://www.googleapis.com/books/v1/volumes?`;

export const SEARCH_BOOK = "SEARCH_BOOK";

export function searchBook(term) {
  const url = `${ROOT_URL}&q=${term}`;
  const request = axios.get(url);

  console.log("Request", request);

  return {
    type: SEARCH_BOOK,
    payload: request,
  };
}
