const mongoose = require("mongoose");

const notesSchema = {
    noteid: String,
    notetitle: String,
    notebody: String
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;