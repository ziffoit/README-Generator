function validatedLicense(license) {
  if(!license || typeof(license) !== "string" ) {
    return ""
  }
  // Apache, BSD3, BSD2, GPL, LGPL, MIT, Mozilla, Common, Eclipse

  switch(license.toUpperCase()){
    case "APACHE":
      return "Apache-2.0"
    case "BSD3":
      return "BSD-3-Clause"
    case "BSD2":
      return "BSD-2-Clause"
    case "GPL":
      return "gpl-license"
    case "LGPL":
      return "lgpl-license"
    case "MIT":
      return "MIT"
    case "MOZILLA":
      return "MPL-2.0"
    case "COMMON":
      return "CDDL-1.0"
    case "ECLIPSE":      
      return "EPL-2.0"      
    default:
      return ""
  }
    
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ""
  }    
  return `
  ![badge:${license}](https://img.shields.io/badge/license-${license}-brightgreen)  
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license}](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return ""
  }
  return `
  ---
  ## License
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  const license = validatedLicense(userAnswers.license)
  return `# ${userAnswers.title}

  ${renderLicenseBadge(license)}
  ## Table of Contents 
  ---
  1. [Description](#description)
  1. [Installation](#installation)
  1. [Usage](#usage)
  1. [Contribution Guidelines](#contribution-guidelines)
  1. [Tests](#tests)
  ${license && `1. [License](#license)`}
  1. [Questions](#questions)
  
  ## Description
  ${userAnswers.description}
  ---
  ## Installation
  ${userAnswers.installation}
  ---
  ## Usage
  ${userAnswers.usageInfo}
  ---
  ## Contribution Guidelines
  ${userAnswers.contribution}
  ${renderLicenseSection(license)}
  ---
  ## Tests
  ${userAnswers.test}
  ---
  ## Questions
  [View Github profile](https://github.com/${userAnswers.github})

  Please reach out to me at ${userAnswers.email} with any additional questions.

`;
}



module.exports = generateMarkdown;
