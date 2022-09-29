const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const route = require("./routes");
const handlebars = require("express-handlebars");
const db = require("./config/db");
db.connect();
route(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//  handlebars
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//connect morgan
app.use(morgan("combined"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
