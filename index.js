const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { validate } = require('@babel/types');

const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the name?"
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address'   
    }
];
    


class Team {
    constructor () {
    this.employees = [];
    }

    promptManager() {
        let newPrompt = [];
        newPrompt = employeeInfo.concat({
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number'
        });
        
        inquirer.prompt(newPrompt)
        .then(({name,id,email,officeNumber}) => {
            this.employees.push(new Manager(name,id,email,officeNumber));
            this.selectNextTeamMember();
        })
    }

    promptEnginner() {
        let newPrompt = [];
        newPrompt = employeeInfo.concat({
            type: 'input',
            name: 'github',
            message: 'Please include the github username'
        });
        console.log(newPrompt);
        inquirer.prompt(newPrompt)
        .then(({name,id,email,github}) => {
            this.employees.push(new Engineer(name,id,email,github));
            this.selectNextTeamMember();
        })
    }

    promptIntern() {
        let newPrompt = [];
        newPrompt = employeeInfo.concat({
            type: 'input',
            name: 'school',
            message: 'Please enter the school name'
        });
        
        inquirer.prompt(newPrompt)
        .then(({name,id,email,school}) => {
            this.employees.push(new Engineer(name,id,email,school));
            this.selectNextTeamMember();
        })
    }

    selectNextTeamMember() {
        inquirer.prompt({
            type: 'list',
            message: 'Would you like to add a...',
            name: 'role',
            choices: ['Engineer', 'Intern', 'none']
        })
        .then(({ role }) => {
    
            switch(role) {
                case 'Engineer':
                    this.promptEnginner();
                    break;
                case 'Intern': 
                    this.promptIntern();
                    break;
                case 'none':
                    break;
            }
        })
    }
}

new Team().promptManager();
//new Team().promptEnginner();



module.exports = Team;