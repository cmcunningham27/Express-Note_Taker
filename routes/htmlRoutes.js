
// const app = require("express").Router();
//dependency included in this file is that path package to get the correct file path for the htmls
const path = require("path");

//Routing
module.exports = (app) => {
    //gets the notes html file for the user to see when they visit notes page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    //gets the index html file for the user to see if no matching route is found
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
    // module.exports = app;