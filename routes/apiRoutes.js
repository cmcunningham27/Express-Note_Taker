//dependency
// const app = require("express").Router();
//dependecy for each new note to get a unique id
const uniqid = require("uniqid");
//dependcy to read and write files
const fs = require("fs");

//empty array for notes to be pushed into
let notes = [];

//calls function upon visiting /
init();
//allows other modules access to content
module.exports = (app) => {
    //reads the db.json file and returns all saved notes as JSON Object
    app.get("/api/notes", (req, res) => {
        res.json(notes);
    });

    //posts new note in db file with unique id and renders it on the notes html for the user to see
    app.post("/api/notes", (req, res) => {
        req.body.id = uniqid.time();
        notes.push(req.body);
        writeNotes(notes);
        res.json(note);
    });

    //deletes old note the user wishes to no longer have or has completed
    app.delete("/api/notes/:id", (req,res) => {
        const updatedNotes = notes.filter(note => note.id !== req.params.id);
        writeNotes(updatedNotes);
        notes = updatedNotes;
        res.json(true);
    })
}

//function to read the db file as a JSON object and push each history note into the notes array and renders it to notes.html for the user to see on the website or throw an error
function init() {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        let notesJson = JSON.parse(data);
        notesJson.forEach(note => {
            notes.push(note);
        });
    })
};

//function to write the updated notes array to the db file
function writeNotes(notes) {
    let notesJson = JSON.stringify(notes, null, 2);
    fs.writeFile("db/db.json", notesJson, err => {
        if (err) throw err;
    })
};

// module.exports = app;