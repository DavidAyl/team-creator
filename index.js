const inquirer = require("inquirer");

const whatRoleQuestion = {
    type: 'list',
    message: 'What role is this member?',
    choices: ['Intern', 'Manager', 'Engineer'],
    name: 'role',
};



const mgrQuestions = function() {
    inquirer.prompt(mgrQuestionArr)  
}
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
      }
    ]   

    const internQuestions = function() {
        inquirer.prompt(internQuestionArr)  
    }
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
    

        const engineerQuestions = function() {
            inquirer.prompt(engineerQuestionArr)  
        }
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
                  message: 'What is your school',
                  name: 'school'
              },
              {
                type: 'input',
                message: 'What is your github',
                name: 'github'
            },
            ]   
        


inquirer.prompt(whatRoleQuestion).then((answer) => {
    if (answer.role === 'Manager') {
        mgrQuestions()
} else if (answer.role === 'Intern') {
   internQuestions()
}
else {
    engineerQuestions()
}
}
)

