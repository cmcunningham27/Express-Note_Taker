//requires express as dependency
const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

//Sets up the express app
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

//when require apiRoutes, we call express function to retrieve apiRoutes module.exports
require("./routes/apiRoutes")(app);
// //when require htmlRoutes, we call express function to retrieve htmlRoutes module.exports
require("./routes/htmlRoutes")(app);

// Listener to start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));