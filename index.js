const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

function Team() {
    this.employees = [];
};

const promptManager = () => {
    inquirer
      .prompt([
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
    ])
    .then(({name, id, email}) => {
        const employee = new Employee(name,id, email);
        console.log(employee);
    })
};




const selectNextTeamMember = () => {

}

promptManager();

module.exports = Team;