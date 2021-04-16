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
        name: 'tableOfContents',
        message: 'List your table of contents.',
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?',
      },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How will your project be used?',
      },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines?',
      },
    {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions?',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}



// TODO: Create a function to initialize app
function init() {
    console.log('=--APPLICATION INITIALIZED--=')
    inquirer.prompt(questions).then(responses => {
        writeToFile("README.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
