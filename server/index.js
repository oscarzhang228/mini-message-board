const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// mongoose.set("strictQuery", false);
// const url =
//   "mongodb+srv://oscarzhang228:jf0ONGZlKcBHxMBe@messages.ysx6akl.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(url);
// const Schema = mongoose.Schema;

// const MessagesSchema = new Schema({ _id: Schema.Types.ObjectId });
// const Messages = mongoose.model("Messages", MessagesSchema);

app.get("/new", (req, res) => {
  // Messages.countDocuments({}).then((result) => {
  //   res.send("ehle");
  // });
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
