//requires express as dependency
const express = require("express");

//Sets up the express app
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to recognize incoming Request Object as string or arrays (urlencoded) or as a json object (json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//when require apiRoutes, we call express function to retrieve apiRoutes module.exports
require("./routes/apiRoutes")(app);
//when require htmlRoutes, we call express function to retrieve htmlRoutes module.exports
require("./routes/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));