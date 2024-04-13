const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const router = require("./routing/useRouting");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

