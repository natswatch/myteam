const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/template');

const { getConsoleOutput } = require('@jest/console');
const { default: generate } = require('@babel/generator');

const role = 'Manager';
const employees = [];



const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must include an email!');
                return false;
            }
        }   
    }
];

const promptManager = () => {
    let newPrompt = [];
    console.log(`
    ========================
       Add the Team Manager
    ========================
    `);

    newPrompt = employeeInfo.concat({
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the office number',
    });

    return newPrompt;
};


const promptEngineer = (employees) => {
    let newPrompt = [];
    console.log(`
    ========================
       Add a New Engineer
    ========================
    `);

    newPrompt = employeeInfo.concat({
        type: 'input',
        name: 'github',
        message: 'Please include the github username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must include a Github username!');
                return false;
            }
        }
    });

    return inquirer.prompt(newPrompt)
                .then(({name,id,email,github}) => {
                        employees.push(new Engineer(name,id,email,github));
                        return selectNextTeamMember(employees);
                    });
};



const promptIntern = () => {
    let newPrompt = [];
    console.log(`
    ========================
       Add a New Intern
    ========================
    `);
    newPrompt = employeeInfo.concat({
        type: 'input',
        name: 'school',
        message: 'Please enter the school name'
    });

    return inquirer.prompt(newPrompt)
                .then(({name,id,email,school}) => {
                        employees.push(new Intern(name,id,email,school));
                        return selectNextTeamMember(employees);
                    });

}

const selectNextTeamMember = (employees) => {
     return inquirer.prompt({
        type: 'list',
        message: 'Would you like to add a...',
        name: 'role',
        choices: ['Engineer', 'Intern', 'none']
    })
    .then(({ role }) => {
        
        if (role === 'Engineer') {
            return promptEngineer(employees);
        } else if (role === 'Intern') {
            return promptIntern(employees);
        } else {
        return employees;
        }
    });
};

inquirer.prompt(promptManager())
    .then(({name,id,email,officeNumber}) => {
    employees.push(new Manager(name,id,email,officeNumber));
    return selectNextTeamMember(employees);
    })
    .then(empData => {
        return generatePage(empData);
    })
    .then(profilePage => {
        return writeFile(profilePage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    //css file
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                console.log(err);
                return;
            }
            // if everything went well, resolve the Promise and send the successfull data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return;
            }
            resolve({
                ok: true,
                meesage: 'File copied!'
            });
        });
    });
};

module.exports = employees;