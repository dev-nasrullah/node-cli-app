const yargs = require('yargs');
const note = require('./notes');

yargs.version('1.1.0') //changing version


// add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: "Added a note",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Adding body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (args) {
        note.addNote(args.title, args.body);
    }
});

//remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler () {
        console.log('removing a note')
    }
});

//read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (args) {
        note.readNote(args.title)
    }
});

//list command
yargs.command({
    command: 'list',
    describe: 'Listing the note',
    handler () {
        note.listNotes();
    }
});

yargs.parse()

// console.log(process.argv);

// console.log(yargs.argv);











// const note = require('./notes');

// console.log(note());

// console.log(chalk.underline.blue.bold('Success'));

// console.log(process.argv);





// const add = require('./utils');
// const sum = add(4, -2);
// console.log(sum);
