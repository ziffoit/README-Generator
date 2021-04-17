// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `# ${userAnswers.title}

  ## Title
  ---
  ${userAnswers.title}

  ## Table of Contents
  ---
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [Contribution Guidelines](#contribution-guidelines)
  1. [Tests](#tests)
  1. [License](#license)
  1. [Questions](#questions)
  
  ## Description
  ---
  ${userAnswers.description}

  ## Installation
  ---
  ${userAnswers.installation}

  ## Usage
  ---
  ${userAnswers.usageInfo}

  ## Contribution Guidelines
  ---
  ${userAnswers.contribution}

  ## Tests
  ---
  ${userAnswers.test}

  ## License
  ---
  ${userAnswers.license}

  ## Questions
  ---
  [View Github profile](https://github.com/${userAnswers.github})

  Please reach out to me at ${userAnswers.email} with any additional questions.

`;
}



module.exports = generateMarkdown;
