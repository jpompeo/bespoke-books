import axios from "axios";

// change to google books api
const ROOT_URL = `https://www.googleapis.com/books/v1/volumes`;

export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const SEARCH_BOOK = "SEARCH_BOOK";
export const EMPTY_BOOKS = "EMPTY_BOOKS";
export const SEND_TAGS = "SEND_TAGS";
export const SEND_RECOMMENDATION = "SEND_RECOMMENDATION";
export const STORE_RECOMMENDATION = "STORE_RECOMMENDATION";

export function searchBooks(term) {
  const url = `${ROOT_URL}?&q=${term}&maxResults=25`;
  const request = axios.get(url);

  request.then(console.log("HI!!!!"));

  return {
    type: SEARCH_BOOKS,
    payload: request,
  };
}

export function emptyBooks() {
  const request = [];

  return {
    type: EMPTY_BOOKS,
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

export function sendRecommendation(values, id) {
  const request = values;

  alert(id);

  return {
    type: SEND_RECOMMENDATION,
    payload: request,
  };
}

export function storeRecommendation(formState, id, image) {
  const request = {
    user: formState.user,
    text: formState.text,
    id: id,
    image: image,
    tags: formState.tags,
  };

  return {
    type: STORE_RECOMMENDATION,
    payload: request,
  };
}
