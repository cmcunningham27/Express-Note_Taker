//requires express as dependency
const express = require("express");

//Sets up the express app
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to recognize incoming Request Object as string or arrays (urlencoded) or as a json object (json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//adds the api and html routes to express app
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));