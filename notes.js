const fs = require('fs');
const chalk = require('chalk');

const getNotes =  () => {
    return 'I am learning Node.js';
}

const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(note => note.title === title);
    const duplicateNote = notes.find(note => note.title === title);

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title;
    // });

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New Note added');
    } else {
        console.log('Note Title taken!');
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    // console.log(notes)
    const note = notes.find(not => not.title === title);
    
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note not found"));
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJson);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your Nots"));
    notes.forEach((note) => {
        console.log(note.title);
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson); 
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    listNotes: listNotes,
    readNote: readNote
};