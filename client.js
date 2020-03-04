const Request = require("superagent");

const SERVER_URL = "http://localhost";
const PORT = 3010;

const BASE_URL = `${SERVER_URL}:${PORT}/`;

const authorization = "Bearer 123456789";

function getBooks() {
  const url = BASE_URL;
  Request.get(url)
    .set("Authorization", authorization)
    .end((e, res) => {
      if (!e) {
        console.log(res.text);
      }
    });
}

function getBook(id) {
  const url = BASE_URL + id;
  Request.get(url)
    .set("Authorization", authorization)
    .end((e, res) => {
      if (!e) {
        console.log(res.text);
      }
    });
}

function updateBook(id, newData) {
  const url = BASE_URL + id;
  Request.put(url)
    .set("Authorization", authorization)
    .send(newBook)
    .end((e, res) => {
      if (!e) {
        console.log(res.text);
      }
    });
}

const newBook = { title: "Me, You and Them", author: "Allof Us" };
updateBook(1, newBook);
getBooks();
