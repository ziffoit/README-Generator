// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How do you run the project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is your license?\n Options: [Apache, BSD3, BSD2, GPL, LGPL, MIT, Mozilla, Common, Eclipse]:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}



// TODO: Create a function to initialize app
function init() {
    console.log('=--APPLICATION INITIALIZED--=')
    inquirer.prompt(questions)
    .then(userAnswers => {
        writeToFile("README.md", generateMarkdown(userAnswers))
    })
}

// Function call to initialize app
init();

// folder and file structure
// utils -
//   generateMarkdown.js
// output -
//   README.md
// index.js
// README.md
// node_modules
// package.json
// package-lock.json
// .gitignore$