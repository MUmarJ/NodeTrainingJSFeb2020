const express = require("express");
const app = express();
const fs = require("fs");

const books = JSON.parse(fs.readFileSync("./books.json"));
console.log(books);

const authorization = "Bearer 123456789";

function checkAuthorization(req, res, next) {
  console.log(req.header("Authorization"));
  if (req.header("Authorization") === authorization) {
    next();
  } else {
    res.send("Not allowed baby!");
  }
}

function displayBooks(req, res) {
  res.send(books);
}
function displayBook(req, res) {
  const book = books.filter(book => book.id == req.params.id);
  const obj = book.length ? book : "Found nada";
  res.send(obj);
}
function updateBook(req, res) {
  const newData = req.body;
  for (let index = 0; index < books.length; index++) {
    if (books[index].id === req.params.id) {
      const book = books[index];
      book.title = newData.title;
      book.author = newData.author;
    }
  }
  res.send("Books Updataed");
}

app.use(checkAuthorization);
app.use(express.json());

app.get("/", displayBooks);
app.get("/:id", displayBook);
app.put("/:id", updateBook);

app.listen(3010, () => console.log("server UP!"));
