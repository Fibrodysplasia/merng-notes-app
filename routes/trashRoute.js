const express = require("express");
const router = express.Router();
const Trashnote = require("../models/trashNoteModel");

router.route('/trash').post((req, res) => {
    const notetitle = req.body.notetitle;
    const notebody = req.body.notebody;
    const noteid = req.body.noteid;
    const newTrash = new Trashnote({
        notetitle,
        notebody,
        noteid, 
        notedeleted
    });

    newTrash.save();
});

router.route('/trash').get((req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;