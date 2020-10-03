// for No ES6
//  const validator = require('validator')

// for ES6

// import validator from 'validator';
const getNotes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

// const command = process.argv[2]

// console.log(process.argv);

//cutomized yargs version
yargs.version('1.1.0')

console.log(yargs.argv);

//add,remove, read, list...

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note....');
    }
})

// if(command === 'add') {
//     console.log('Adding note...')
// }else if(command === 'remove'){
//     console.log('Removing note...');
// }



// console.log(chalk.red.bold('Error!'));
// const msg = getNotes()

// console.log(msg);

// console.log(process.argv[2]);

// console.log(validator.isURL('https://mead.io'));
// const add = require('./utils.js');

// // const name = 'Kapil'
// const sum = add(4,8);
// console.log(sum);

