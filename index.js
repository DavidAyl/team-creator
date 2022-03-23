const inquirer = require("inquirer");
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const fs = require('fs');
const generateHtml = require("./src/generateHtml");

let team = [];

const initialQuestion = {
  type: 'list',
  message: 'Would you like to add a memember?',
  choices: ['Add a member', 'Exit'],
  name: 'initialQuestion'
}

const whatRoleQuestion = {
  type: 'list',
  message: 'What role is this member?',
  choices: ['Intern', 'Manager', 'Engineer'],
  name: 'role',
};
var mgrQuestionArr =
  [{

    type: "input",
    message: "Please enter your name",
    name: "name",
  },
  {
    type: "input",
    message: "What is your id Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number",
    name: "officeNum",
  }
  ]
var internQuestionArr =
  [{

    type: "input",
    message: "Please enter your name",
    name: "name",
  },
  {
    type: "input",
    message: "What is your id Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: 'input',
    message: 'What is your school',
    name: 'school'
  }
  ]
var engineerQuestionArr =
  [{

    type: "input",
    message: "Please enter your name",
    name: "name",
  },
  {
    type: "input",
    message: "What is your id Number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: 'input',
    message: 'What is your github',
    name: 'gitHub'
  },
  ]

const internQuestions = function () {
  inquirer.prompt(internQuestionArr).then(function (answers) {

    var newIntern = new Intern(answers.id, answers.name, answers.email, answers.school)
    team.push(newIntern)
    prompts()
  })
}


const mgrQuestions = function () {
  inquirer.prompt(mgrQuestionArr).then(function (answers) {

    var newManager = new Manager(answers.id, answers.name, answers.email, answers.officeNum)
    team.push(newManager)

    prompts()

  })
}

const engineerQuestions = function () {
  inquirer.prompt(engineerQuestionArr).then(function (answers) {

    var newEngineer = new Engineer(answers.id, answers.name, answers.email, answers.gitHub)
    team.push(newEngineer)

    prompts()
  })
}

function prompts() {
  inquirer.prompt(initialQuestion).then((answer) => {
    if (answer.initialQuestion === 'Add a member') {
      inquirer.prompt(whatRoleQuestion).then((answer) => {
        if (answer.role === 'Manager') {
          mgrQuestions()
        } else if (answer.role === 'Intern') {
          internQuestions()
        }
        else if (answer.role === 'Engineer') {
          engineerQuestions()
        }
      }
      )
    }
    else {
      console.log(team)
      fs.writeFile('./dist/index.html', generateHtml(team), function () {
        console.log('success')
      } )
      return
    }
  }
  )
}


prompts();