import inquirer from "inquirer";
/*
const questions = [
  "What's your first name?",
  "Hello %s What's your email address?",
  "Are you experienced Developer?",
  "How many years of experience you have with JavaScript?",
  "What JavaScript library do you know?",
  "What is your desired salary?"
];

// run your command
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  });
*/
  var inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "name",
        message: "What's your first name?"
    },
    {
      	type: "input",
        name: "email",
        message: "What's your email address?"
    },
    {
        type: "list",
        name: "experience",
        message: "How many years of experience you have with JavaScript?",
        choices: [
            "0-1",
            "1-3",
            "3-5",
            "5-10",
            "10+"
        ]
    },
    {
        type: "checkbox",
        name: "technologies",
        message: "What technologies do you know?",
        choices: [
            "React.js",
            "Vue",
            "Angular",
            "Node.js",
            "jQuery",
            "D3.js",
        ]
    },
    {
        type: "number",
        name: "salary",
        message: "What is your salary requirement?"
    }
]

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2))
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!")
    } else {
      console.log(error)
    }
})
