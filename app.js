const app = require("express")();
const authorization = "Bearer 123456789";

function checkAuthorization(req, res) {
  console.log(req.header("Authorization"));
  if (req.header("Authorization") === authorization) {
    res.send("You are authorized baby!");
  } else {
    res.send("Not allowed baby!");
  }
}

app.get("/", checkAuthorization);
app.listen(3010);
