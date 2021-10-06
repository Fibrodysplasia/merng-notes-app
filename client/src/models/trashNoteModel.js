const mongoose = require('mongoose');

const trashSchema = {
    noteid: String,
    notetitle: String, 
    notebody: String,
    notedeleted: Date.now()
}

const Trashnote = mongoose.model('Trashnote', trashSchema)

module.exports = Trashnote