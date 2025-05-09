const express = require("express");
const ejsMate = require("ejs-mate");
const app = express();
const PORT = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);


app.get("/home", async (req, res) => {
  res.render("./pages/index");
});

app.get("/about", (req, res) => {
  res.render("./pages/about");
});

app.get("/certicication", (req, res) => {
  res.render("./pages/certification.ejs");
});

app.get("/project", (req, res) => {
  res.render("./pages/projects.ejs");
});

app.get("/contact", (req, res) => {
  res.render("./pages/contact.ejs");
})
app.listen(PORT, () => {
    console.log("listening");
});