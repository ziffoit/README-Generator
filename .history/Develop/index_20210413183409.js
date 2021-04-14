// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require()
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
      },
    {
        type: 'input',
        name: 'Description',
        message: 'Give a short description of your project.',
      },
    {
        type: 'input',
        name: 'Table of contents',
        message: 'List your table of contents.',
      },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are your installation instructions?',
      },
    {
        type: 'input',
        name: 'Usage information',
        message: 'How will your project be used?',
      },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Contribution guidelines?',
      },
    {
        type: 'input',
        name: 'Test',
        message: 'What are your test instructions?',
      },
];

// TODO: Create a function to write README file
function writeToFile("README.md", data) {
    return fs.writeFileSync("./README.md")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        writeToFile("README.md", generateMarkdown(...responses))
    })
}

// Function call to initialize app
init();
