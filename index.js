const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars")
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

// app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) => res.render("index", {
  title: "Member App",
  members
}));

// set static folder
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

// app.get("/", (req, res) => {
//   // res.send("<h1>Hello World!!</h1>")
//   res.sendfile(path.join(__dirname, "public", "index.html"))
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));