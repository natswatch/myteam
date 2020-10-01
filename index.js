const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is team manager's name?"
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
        employeeInfo.push({
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number'
        });
        
        inquirer.prompt(employeeInfo)
        .then(({name,id,email,officeNumber}) => {
            this.employees.push(new Manager(name,id,email,officeNumber));
            console.log(this.employees);
        })
    }

    promptEnginner() {
        employeeInfo.push({
            type: 'input',
            name: 'github',
            message: 'Please include the github username'
        });
        
        inquirer.prompt(employeeInfo)
        .then(({name,id,email,officeNumber}) => {
            this.employees.push(new Engineer(name,id,email,github));
            
        })
    }
    promptIntern() {
        employeeInfo.push({
            type: 'input',
            name: 'school',
            message: 'Please enter the school name'
        });
        
        inquirer.prompt(employeeInfo)
        .then(({name,id,email,school}) => {
            this.employees.push(new Engineer(name,id,email,school));
            
        })
    }
}



const selectNextTeamMember = () => {
    inquirer.prompt({
        type: 'list',
        message: 'Would you like to add a...',
        name: 'role',
        choices: ['Engineer', 'Intern', 'none']
    })
    .then(({action}) => {
        if(action === 'Engineer'){

        } else if(action === 'Intern') {
            
        } else {
            return;
        }
    })
}

new Team().promptManager();


module.exports = Team;