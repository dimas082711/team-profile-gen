const inquirer = require('inquirer')
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
teamData = []
const generateHTML = require('./src/page-template')

const managerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Manager Name",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter Manager Name')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager Employee Id",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please Enter Manager Employee Id')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email adress",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please Enter Manager's Email")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager Office Number",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please Enter Manager Office Number")
                    return false
                }
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamData.push(manager);
    })
    .then(routing)
};

const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Engineers Name",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter Engineers name")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Engineers Employee Id",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's employee id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Engineers Email Adress",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineers GitHub Username",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's GitHub username.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamData.push(engineer)
    })
    .then(routing)
};

const internInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Intern Name",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Intern ID",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's employee id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Intern Email Adress",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'work',
            message: "Intern Work Name",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's work name.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.work)
        teamData.push(intern);
    })
    .then(routing)
};

const routing = () => {
    return inquirer.prompt([
        {
            type: "rawlist",
            name: "role",
            message: "Select a role for the next employee:",
            choices: ["Engineer", "Intern", "All members are entered"]
        }
    ])
    .then(({ role }) => {
        switch (role) {
            case 'Engineer':
                engineerInfo();
                break;
            case 'Intern':
                internInfo();
                break;
            case "All members are entered":
                writeToFile(generateHTML(teamData));
                break;
        }
    })
}

// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

managerInfo()