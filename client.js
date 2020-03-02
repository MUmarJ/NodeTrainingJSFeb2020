const Request = require("superagent");

const SERVER_URL = "http://localhost";
const PORT = 3010;

const BASE_URL = `${SERVER_URL}:${PORT}/`;

const authorization = "Bearer 123456789";

Request.get(BASE_URL)
  .set("Authorization", authorization)
  .end((e, res) => {
    if (!e) {
      console.log(res.text);
    }
  });
