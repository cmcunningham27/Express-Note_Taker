const db = require("../db/db.json");
// const uniqid = require("uniqid");
// const index = require("../public/assets/js/index");
const fs = require("fs");

const notes = [];

module.exports = (app) => {
    //reads the db.json file and returns all saved notes as JSON Object
    app.get("/api/notes", (req, res) => {
        readNotes();
        // res.json(db);
    });

    app.post("/api/notes", (req, res) => {
        db.saveNote(req.body);
    });

    app.delete("/api/motes/:id", (req,res) => {
        db.deleteNote(req.params.id);
    })
}

function readNotes() {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        let notesJson = JSON.parse(data);
        notesJson.forEach(note => {
            notes.push(note);
        });
    })
}