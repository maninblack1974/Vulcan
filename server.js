const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const router = require("./routes/servicePro-Api-Routes");

const session = require("express-session");
const passport = require("./config/passport");

const db = require('./models');

// const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Send every request to the React app
// Define any API routes before this runs
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });



app.use("/api", router);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});