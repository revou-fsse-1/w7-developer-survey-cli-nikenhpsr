// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your first name?",
    validate: (firstName) => {
      if (firstName !== "") {
        return true;
      } else {
        do {
          return "You must enter a valid name.";
        } while (firstName === "");
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Hello! What's your email address?",
    validate: (email) => {
      if (email !== "" && email.includes("@" && ".")) {
        return true;
      } else {
        do {
          return "Please enter a valid email address.";
        } while (email === "" && email.excludes("@" && "."));
      }
    },
  },
  {
    type: "list",
    name: "dev",
    message: "Are you experienced Developer?",
    choices: ["Yes", "No"],
    validate: (dev) => {
      dev === "" ? false : true;
    },
  },
  {
    type: "list",
    name: "experience",
    message: "How many years of experience you have with JavaScript?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when: (answers) => answers["dev"] === "Yes",
    validate: (experience) => {
      experience === "" ? false : true;
    },
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "What JavaScript library do you know?",
    choices: ["React.js", "Vue", "Angular", "Node.js", "jQuery", "D3.js"],
    when: (answers) => answers["dev"] === "Yes",
    validate: (technologies) => {
      technologies === "" ? false : true;
    },
  },
  {
    type: "number",
    name: "salary",
    message: "What is your salary requirement?",
    validate: (salary) => {
      if (salary >= 0) {
        return true;
      } else {
        do {
          return "You must enter a valid salary.";
        } while (salary < 0);
      }
    },
  },
];

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
