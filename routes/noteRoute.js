const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.route('/create').post((req, res) => {
    const notetitle = req.body.notetitle;
    const notebody = req.body.notebody;
    const noteid = req.body.noteid;
    const newNote = new Note({
        notetitle,
        notebody
    });

    newNote.save();
});

router.route('/notes').get((req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;