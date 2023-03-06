import inquirer from "inquirer";

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
