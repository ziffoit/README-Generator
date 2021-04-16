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

  ##Title
  ---
  ${userAnswers.title}

  ##Descriptiong
  ---
  ${userAnswers.description}

  ##Table of Contents
  ---
  ${userAnswers.tableOfContents}

  ##Installation
  ---
  ${userAnswers.installation}

  ##Usage
  ---
  ${userAnswers.usageInfo}

  ##License
  ---
  ${userAnswers.license}

  ##Contribution Guidelines
  ---
  ${userAnswers.contribution}

  ##Tests
  ---
  ${userAnswers.test}

  ##Questions
`;
}



module.exports = generateMarkdown;
