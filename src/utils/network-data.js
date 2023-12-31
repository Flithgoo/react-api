const BASE_URL = "https://book-crud-service-6dmqxfovfq-et.a.run.app/api";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
      Accept: "application/json",
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (!responseJson.token) {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function register({ name, email, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email, password, password_confirmation }),
  });

  const responseJson = await response.json();

  if (!responseJson.user) {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user`);
  const responseJson = await response.json();

  if (responseJson.message) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function editBook({ id, title, description, publisher, author }) {
  const response = await fetchWithToken(`${BASE_URL}/books/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isbn: (+new Date()).toString(),
      title,
      description,
      publisher,
      author,
    }),
  });

  const responseJson = await response.json();

  if (!responseJson.book) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.book };
}

async function addNote({ title, description, publisher, author }) {
  const response = await fetchWithToken(`${BASE_URL}/books/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isbn: (+new Date()).toString(),
      title,
      description,
      publisher,
      author,
    }),
  });

  const responseJson = await response.json();

  if (!responseJson.book) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
  const response = await fetchWithToken(`${BASE_URL}/books`);
  const responseJson = await response.json();

  if (!responseJson.data) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getArchivedNotes() {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/books/${id}`);
  const responseJson = await response.json();

  if (!responseJson.id) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function deleteNote(id) {
  const response = await fetchWithToken(`${BASE_URL}/books/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (!responseJson.book) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.book };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  editBook,
  deleteNote,
};
