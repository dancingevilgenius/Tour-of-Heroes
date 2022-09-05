const path = require("path");

const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

app.use('/', express.static('public'));

const appName = process.env.APINAME;
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(
    `${appName} is running on port #${port}`
  );
});