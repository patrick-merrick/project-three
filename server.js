const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
process.env.API_KEY;
process.env.DB_PASSWORD;

// Requiring passport as we've configured it
const passport = require("passport");
const db = require("./models");
const session = require("express-session");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
const routes = require("./controllers/memberController.js");

app.use(routes);

// Requiring our routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
