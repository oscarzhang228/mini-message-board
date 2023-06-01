const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const Messages = require("./Schema/Messages");
const cors = require("cors");
const url =
  "mongodb+srv://oscarzhang228:jf0ONGZlKcBHxMBe@messages.ysx6akl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);

app.use(cors());

app.get("/new", (req, res) => {
  const header = req.headers.title;
  const message = req.headers.message;
  const name = req.headers.name;
  const mes = new Messages({ header, message, name });
  mes.save();
  res.send(mes);
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
