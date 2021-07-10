const express = require('express');
const path = require('path');
const logger = require("./middleware/logger");

const app = express();

// app.use(logger);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

// app.get("/", (req, res) => {
//   // res.send("<h1>Hello World!!</h1>")
//   res.sendfile(path.join(__dirname, "public", "index.html"))
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));