const express = require('express');
const path = require('path')

const app = express();

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   // res.send("<h1>Hello World!!</h1>")
//   res.sendfile(path.join(__dirname, "public", "index.html"))
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))